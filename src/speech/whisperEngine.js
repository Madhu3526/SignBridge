const WHISPER_MODEL = 'Xenova/whisper-tiny';
const CHUNK_MS = 3000;
const TARGET_SAMPLE_RATE = 16000;

let transcriberPromise = null;

const loadTransformers = () => import('@xenova/transformers');

export const getWhisperTranscriber = (onProgress) => {
  if (!transcriberPromise) {
    transcriberPromise = loadTransformers().then(({ pipeline, env }) => {
      env.allowLocalModels = false;
      return pipeline('automatic-speech-recognition', WHISPER_MODEL, {
        progress_callback: onProgress,
      });
    });
  }
  return transcriberPromise;
};

export const resetWhisperTranscriber = () => {
  transcriberPromise = null;
};

async function blobToFloat32(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const audioContext = new AudioContext();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  await audioContext.close();

  const channel = audioBuffer.getChannelData(0);
  if (audioBuffer.sampleRate === TARGET_SAMPLE_RATE) {
    return channel;
  }

  const ratio = audioBuffer.sampleRate / TARGET_SAMPLE_RATE;
  const newLength = Math.round(channel.length / ratio);
  const resampled = new Float32Array(newLength);

  for (let i = 0; i < newLength; i += 1) {
    const idx = Math.min(Math.floor(i * ratio), channel.length - 1);
    resampled[i] = channel[idx];
  }

  return resampled;
}

export async function transcribeBlob(blob, onProgress) {
  if (!blob || blob.size === 0) return '';

  const transcriber = await getWhisperTranscriber(onProgress);
  const audio = await blobToFloat32(blob);

  const result = await transcriber(audio, {
    sampling_rate: TARGET_SAMPLE_RATE,
    return_timestamps: false,
  });

  return (result?.text || '').trim();
}

/**
 * Continuous recorder that transcribes fixed-size audio chunks with Whisper.
 * Suited for Tamil + English code-switching (multilingual tiny model).
 */
export class WhisperRecorder {
  constructor({ onTranscript, onProgress, onStatus, onError }) {
    this.onTranscript = onTranscript;
    this.onProgress = onProgress;
    this.onStatus = onStatus;
    this.onError = onError;
    this.stream = null;
    this.mediaRecorder = null;
    this.busy = false;
    this.active = false;
  }

  async start() {
    if (this.active) return;

    this.onStatus?.('loading-model');
    await getWhisperTranscriber(this.onProgress);
    this.onStatus?.('ready');

    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(this.stream);
    this.active = true;

    this.mediaRecorder.ondataavailable = async (event) => {
      if (!this.active || !event.data || event.data.size === 0 || this.busy) return;

      this.busy = true;
      this.onStatus?.('transcribing');
      try {
        const text = await transcribeBlob(event.data, this.onProgress);
        if (text) this.onTranscript(text);
      } catch (err) {
        this.onError?.(err);
      } finally {
        this.busy = false;
        if (this.active) this.onStatus?.('listening');
      }
    };

    this.mediaRecorder.start(CHUNK_MS);
    this.onStatus?.('listening');
  }

  stop() {
    this.active = false;
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.mediaRecorder = null;
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    this.onStatus?.('idle');
  }
}
