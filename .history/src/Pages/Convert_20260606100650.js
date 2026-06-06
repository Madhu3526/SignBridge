import '../App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Slider from 'react-input-slider';
import 'font-awesome/css/font-awesome.min.css';

import xbot from '../Models/xbot/xbot.glb';
import ybot from '../Models/ybot/ybot.glb';
import xbotPic from '../Models/xbot/xbot.png';
import ybotPic from '../Models/ybot/ybot.png';

import * as words from '../Animations/words';
import { normalizeSignText, playTamilText } from '../Animations/animationLookup';
import { appendTamilWords } from '../Animations/Tamil/composer';
import { defaultPose } from '../Animations/defaultPose';
import { classifyTranscript } from '../parser/validateTamil';
import { prepareSignInput } from '../parser/romanizedTamil';
import {
  SIGN_DEBOUNCE_MS,
  getSignableSlice,
  resolveSpeechLocale,
  tokenizeTranscript,
} from '../parser/streamingTranscript';
import { getGranthaLabel } from '../parser/granthaMap';
import { WhisperRecorder } from '../speech/whisperEngine';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Convert() {
  const [text, setText] = useState('');
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);
  const [inputMode, setInputMode] = useState('voice');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [langWarning, setLangWarning] = useState(null); // { type, removed }
  const [glossInfo, setGlossInfo] = useState({ skipped: [], granthaChars: [] });
  const [speechLangMode, setSpeechLangMode] = useState('tamil'); // tamil | english | auto
  const [speechEngine, setSpeechEngine] = useState('browser'); // browser | whisper
  const [activeLocale, setActiveLocale] = useState('ta-IN');
  const [whisperTranscript, setWhisperTranscript] = useState('');
  const [whisperListening, setWhisperListening] = useState(false);
  const [whisperStatus, setWhisperStatus] = useState('idle'); // idle | loading-model | listening | transcribing
  const [whisperProgress, setWhisperProgress] = useState(null);

  const componentRef = useRef({});
  const { current: ref } = componentRef;
  const textFromInput = useRef();
  const signedWordCountRef = useRef(0);
  const signDebounceRef = useRef(null);
  const activeLocaleRef = useRef('ta-IN');
  const whisperRecorderRef = useRef(null);

  const {
    transcript: browserTranscript,
    listening: browserListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const usingWhisper = speechEngine === 'whisper';
  const transcript = usingWhisper ? whisperTranscript : browserTranscript;
  const listening = usingWhisper ? whisperListening : browserListening;
  const micSupported = usingWhisper
    ? typeof window !== 'undefined' && Boolean(navigator.mediaDevices?.getUserMedia)
    : browserSupportsSpeechRecognition;

  useEffect(() => {
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xd8e5f0);

    // Main spotlight
const spotLight = new THREE.SpotLight(0xffffff, 3);
spotLight.position.set(0, 5, 5);
spotLight.castShadow = true;
spotLight.angle = Math.PI / 6;
spotLight.penumbra = 0.5;
ref.scene.add(spotLight);

// Left fill
const fillLightLeft = new THREE.DirectionalLight(0xffffff, 1.2);
fillLightLeft.position.set(-5, 3, 4);
fillLightLeft.castShadow = true;
ref.scene.add(fillLightLeft);

// Right fill
const fillLightRight = new THREE.DirectionalLight(0xffffff, 1.2);
fillLightRight.position.set(5, 3, 4);
fillLightRight.castShadow = true;
ref.scene.add(fillLightRight);

// Rim light
const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
rimLight.position.set(0, 4, -5);
ref.scene.add(rimLight);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
ref.scene.add(ambientLight);

ref.renderer = new THREE.WebGLRenderer({
  antialias: true,
});

ref.renderer.shadowMap.enabled = true;
ref.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const canvas = document.getElementById('canvas');
    const canvasWidth = canvas.clientWidth || window.innerWidth - 370;
    const navH = 60;
    const barH = 53;
    const canvasHeight = Math.max(window.innerHeight - navH - barH, 420);

    ref.camera = new THREE.PerspectiveCamera(30, canvasWidth / canvasHeight, 0.1, 1000);
    ref.renderer.setSize(canvasWidth, canvasHeight);

    canvas.innerHTML = '';
    canvas.appendChild(ref.renderer.domElement);

   const isMobile = window.innerWidth < 768;

ref.camera = new THREE.PerspectiveCamera(
  isMobile ? 50 : 40,
  canvasWidth / canvasHeight,
  0.1,
  1000
);

if (isMobile) {
  ref.camera.position.z = 1.55;
} else {
  ref.camera.position.z = 1.30;
}

ref.camera.position.y = 1.55;
ref.camera.lookAt(0, 1.45, 0);


    const resizeRenderer = () => {
      const w = canvas.clientWidth || window.innerWidth - 370;
      const h = Math.max(canvas.clientHeight || window.innerHeight - navH - barH, 420);
      ref.camera.aspect = w / h;
      ref.camera.updateProjectionMatrix();
      ref.renderer.setSize(w, h);
      ref.renderer.render(ref.scene, ref.camera);
    };

    window.addEventListener('resize', resizeRenderer);

    const loader = new GLTFLoader();
    loader.load(bot, (gltf) => {
      gltf.scene.traverse((child) => {

  if (child.type === 'SkinnedMesh') {

    child.frustumCulled = false;

    child.castShadow = true;
    child.receiveShadow = true;

    if (child.material) {

      child.material.roughness = 1;
      child.material.metalness = 0;
      child.material.needsUpdate = true;

      // Optional hand highlight
      const name = child.name.toLowerCase();

      if (
        name.includes('hand') ||
        name.includes('finger') ||
        name.includes('thumb')
      ) {
        child.material.color.set('#ffd6b0');
      }
    }
  }
});
      ref.avatar = gltf.scene;
      ref.scene.add(ref.avatar);
      defaultPose(ref);
    });

    return () => window.removeEventListener('resize', resizeRenderer);
  }, [ref, bot]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        if (ref.animations[0][0] === 'add-text') {
          setText(text + ref.animations[0][1]);
          ref.animations.shift();
        } else {
          for (let i = 0; i < ref.animations[0].length;) {
            const [boneName, action, axis, limit, sign] = ref.animations[0][i];
            const bone = ref.avatar.getObjectByName(boneName);
            if (sign === '+' && bone[action][axis] < limit) {
              bone[action][axis] += speed;
              bone[action][axis] = Math.min(bone[action][axis], limit);
              i++;
            } else if (sign === '-' && bone[action][axis] > limit) {
              bone[action][axis] -= speed;
              bone[action][axis] = Math.max(bone[action][axis], limit);
              i++;
            } else {
              ref.animations[0].splice(i, 1);
            }
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => { ref.flag = false; }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  const updateLangWarning = useCallback((value) => {
    const classification = classifyTranscript(value);
    if (classification.type === 'english') {
      setLangWarning({ type: 'english-info' });
    } else if (classification.type === 'mixed') {
      setLangWarning({ type: 'mixed-info', english: classification.englishWords });
    } else {
      setLangWarning(null);
    }
  }, []);

  const mergeGlossInfo = useCallback((skipped, granthaChars) => {
    setGlossInfo((prev) => ({
      skipped: [...prev.skipped, ...skipped],
      granthaChars: [...prev.granthaChars, ...granthaChars],
    }));
  }, []);

  const flushIncrementalSign = useCallback((value, { forceFlush = false, reset = false } = {}) => {
    const trimmed = prepareSignInput(value).trim();
    if (!trimmed) return;

    const tokens = tokenizeTranscript(trimmed);
    const { slice, nextCount } = getSignableSlice(tokens, signedWordCountRef.current, {
      listening,
      forceFlush,
    });

    if (!slice.length) return;

    if (reset) {
      setText('');
      setGlossInfo({ skipped: [], granthaChars: [] });
      signedWordCountRef.current = 0;
    }

    const wordsToSign = slice.map((t) => t.word);
    const { skipped, granthaChars } = appendTamilWords(wordsToSign, ref, { words });
    signedWordCountRef.current = nextCount;
    mergeGlossInfo(skipped, granthaChars);
    updateLangWarning(trimmed);
  }, [listening, mergeGlossInfo, ref, updateLangWarning]);

  const signText = (value, { reset = true } = {}) => {
    const trimmed = prepareSignInput(value).trim();
    if (!trimmed) return;

    if (reset) {
      setText('');
      setGlossInfo({ skipped: [], granthaChars: [] });
      signedWordCountRef.current = 0;
    }

    updateLangWarning(trimmed);

    const str = normalizeSignText(trimmed);
    playTamilText(str, ref, {
      words,
      onGloss: ({ skipped, granthaChars }) => {
        if (reset) {
          setGlossInfo({ skipped, granthaChars });
        } else {
          mergeGlossInfo(skipped, granthaChars);
        }
      },
    });

    signedWordCountRef.current = tokenizeTranscript(trimmed).length;
  };

  const restartListening = useCallback((locale) => {
    if (usingWhisper) return;
    SpeechRecognition.stopListening();
    activeLocaleRef.current = locale;
    setActiveLocale(locale);
    SpeechRecognition.startListening({ continuous: true, language: locale });
  }, [usingWhisper]);

  const clearVoiceSession = () => {
    if (usingWhisper) {
      setWhisperTranscript('');
    } else {
      resetTranscript();
    }
    setText('');
    setGlossInfo({ skipped: [], granthaChars: [] });
    signedWordCountRef.current = 0;
    setLangWarning(null);
  };

  const startWhisperListening = async () => {
    clearVoiceSession();
    setActiveLocale('whisper-mixed');

    const recorder = new WhisperRecorder({
      onTranscript: (chunk) => {
        setWhisperTranscript((prev) => (prev ? `${prev} ${chunk}` : chunk));
      },
      onProgress: (info) => {
        if (info?.status === 'progress' && info.progress != null) {
          setWhisperProgress(Math.round(info.progress * 100));
        }
      },
      onStatus: (status) => setWhisperStatus(status),
      onError: (err) => {
        console.error('Whisper error:', err);
        setWhisperStatus('idle');
        setWhisperListening(false);
      },
    });

    whisperRecorderRef.current = recorder;
    setWhisperListening(true);
    try {
      await recorder.start();
    } catch (err) {
      console.error('Whisper start failed:', err);
      setWhisperListening(false);
      setWhisperStatus('idle');
    }
  };

  const stopWhisperListening = () => {
    whisperRecorderRef.current?.stop();
    whisperRecorderRef.current = null;
    setWhisperListening(false);
    setWhisperStatus('idle');
    setWhisperProgress(null);
  };

  const startListening = () => {
    clearVoiceSession();

    if (usingWhisper) {
      startWhisperListening();
      return;
    }

    const locale = resolveSpeechLocale(speechLangMode, '');
    activeLocaleRef.current = locale;
    setActiveLocale(locale);
    SpeechRecognition.startListening({ continuous: true, language: locale });
  };

  const stopListening = () => {
    if (usingWhisper) {
      stopWhisperListening();
      return;
    }
    SpeechRecognition.stopListening();
  };

  useEffect(() => () => {
    whisperRecorderRef.current?.stop();
  }, []);

  const stopAndSign = () => {
    flushIncrementalSign(transcript, { forceFlush: true });
    stopListening();
  };

  // Real-time signing: debounce transcript updates while the mic is on.
  useEffect(() => {
    if (!listening) {
      if (signDebounceRef.current) {
        clearTimeout(signDebounceRef.current);
        signDebounceRef.current = null;
      }
      return undefined;
    }

    if (signDebounceRef.current) clearTimeout(signDebounceRef.current);

    signDebounceRef.current = setTimeout(() => {
      flushIncrementalSign(transcript, { forceFlush: true });

      if (!usingWhisper && speechLangMode === 'auto') {
        const nextLocale = resolveSpeechLocale('auto', transcript);
        if (nextLocale !== activeLocaleRef.current) {
          restartListening(nextLocale);
        }
      }
    }, SIGN_DEBOUNCE_MS);

    return () => {
      if (signDebounceRef.current) {
        clearTimeout(signDebounceRef.current);
        signDebounceRef.current = null;
      }
    };
  }, [transcript, listening, speechLangMode, usingWhisper, flushIncrementalSign, restartListening]);

  // Sign stable words immediately (holds back the last in-progress token).
  useEffect(() => {
    if (!listening || !transcript.trim()) return;
    flushIncrementalSign(transcript, { forceFlush: false });
  }, [transcript, listening, flushIncrementalSign]);

  const uniqueGrantha = [...new Set(glossInfo.granthaChars)];

  return (
    <div className='app-shell'>

      {/* ── Navbar ── */}
      <nav className='app-nav'>
        <div className='nav-brand'>
          <i className='fa fa-sign-language nav-logo' />
          <div>
            <span className='brand-name'>SignBridge</span>
            <span className='brand-sub'>Tamil Sign Language</span>
          </div>
        </div>
        
      </nav>

      {/* ── Workspace ── */}
      <div className='workspace'>

        {/* ── Input panel ── */}
        <aside className='input-panel'>

          {/* Mode tabs */}
          <div className='mode-tabs'>
            <button
              className={`tab-btn${inputMode === 'voice' ? ' active' : ''}`}
              onClick={() => setInputMode('voice')}
            >
              <i className='fa fa-microphone' />
              Voice
            </button>
            <button
              className={`tab-btn${inputMode === 'text' ? ' active' : ''}`}
              onClick={() => setInputMode('text')}
            >
              <i className='fa fa-keyboard-o' />
              Type
            </button>
          </div>

          {/* Voice mode */}
          {inputMode === 'voice' && (
            <div className='voice-section'>
              <div className='mic-stage'>
                <button
                  className={`mic-btn${listening ? ' listening' : ''}`}
                  onClick={listening ? stopListening : startListening}
                  disabled={!micSupported || whisperStatus === 'loading-model'}
                  aria-label={listening ? 'Stop listening' : 'Start listening'}
                >
                  <i className={`fa fa-microphone${listening ? '-slash' : ''}`} />
                </button>
                <p className='mic-label'>
                  {whisperStatus === 'loading-model'
                    ? `Loading Whisper model${whisperProgress != null ? `… ${whisperProgress}%` : '…'}`
                    : listening ? 'Tap to stop' : 'Tap to listen'}
                </p>
                {!micSupported && (
                  <p className='mic-error'>
                    {usingWhisper ? 'Microphone not available in this browser.' : 'Use Chrome or Edge for speech support.'}
                  </p>
                )}
                {micSupported && !listening && whisperStatus !== 'loading-model' && (
                  <p className='mic-note'>
                    {usingWhisper
                      ? 'Whisper mixed mode — Tamil + English code-switching'
                      : 'Signs in real time as you speak'}
                  </p>
                )}
                {listening && (
                  <p className='mic-note mic-note--live'>
                    {usingWhisper && whisperStatus === 'transcribing'
                      ? 'Transcribing chunk…'
                      : 'Signing live — pause to finish a phrase'}
                  </p>
                )}
              </div>

              <div className='section-label'>
                <span>Speech engine</span>
              </div>
              <div className='lang-tabs engine-tabs'>
                <button
                  type='button'
                  className={`lang-tab${speechEngine === 'browser' ? ' active' : ''}`}
                  onClick={() => setSpeechEngine('browser')}
                  disabled={listening}
                >
                  Browser
                </button>
                <button
                  type='button'
                  className={`lang-tab${speechEngine === 'whisper' ? ' active' : ''}`}
                  onClick={() => setSpeechEngine('whisper')}
                  disabled={listening}
                >
                  Whisper
                </button>
              </div>

              <div className='section-label'>
                <span>Speech language</span>
                {usingWhisper && <span className='lang-badge'>mixed</span>}
              </div>
              <div className={`lang-tabs${usingWhisper ? ' lang-tabs--disabled' : ''}`}>
                <button
                  type='button'
                  className={`lang-tab${speechLangMode === 'tamil' ? ' active' : ''}`}
                  onClick={() => setSpeechLangMode('tamil')}
                  disabled={listening || usingWhisper}
                >
                  Tamil
                </button>
                <button
                  type='button'
                  className={`lang-tab${speechLangMode === 'english' ? ' active' : ''}`}
                  onClick={() => setSpeechLangMode('english')}
                  disabled={listening || usingWhisper}
                >
                  English
                </button>
                <button
                  type='button'
                  className={`lang-tab${speechLangMode === 'auto' ? ' active' : ''}`}
                  onClick={() => setSpeechLangMode('auto')}
                  disabled={listening || usingWhisper}
                >
                  Auto
                </button>
              </div>
              {usingWhisper && (
                <p className='mic-note'>First run downloads ~40 MB Whisper model (cached afterward).</p>
              )}

              <div className='section-label'>
                <span>Transcript</span>
                <span className='lang-badge'>{activeLocale}</span>
              </div>
              <textarea
                className='text-area transcript-area'
                value={transcript}
                placeholder='Speech will appear here...'
                readOnly
                rows={5}
              />

              {/* Language info notes */}
              {langWarning?.type === 'english-info' && (
                <div className='lang-warning lang-warning--mild'>
                  <i className='fa fa-info-circle' />
                  English detected — fingerspelling each letter.
                </div>
              )}
              {langWarning?.type === 'mixed-info' && (
                <div className='lang-warning lang-warning--mild'>
                  <i className='fa fa-info-circle' />
                  Mixed input — English words will be fingerspelled:{' '}
                  {langWarning.english.map((w, i) => (
                    <span key={i} className='chip chip-removed'>{w}</span>
                  ))}
                </div>
              )}

              <div className='action-row'>
                <button
                  className='btn btn-secondary'
                  onClick={clearVoiceSession}
                >
                  <i className='fa fa-eraser' /> Clear
                </button>
                <button
                  className='btn btn-primary'
                  onClick={stopAndSign}
                  disabled={!transcript.trim()}
                >
                  <i className='fa fa-sign-language' /> Finish &amp; sign
                </button>
              </div>

              {!usingWhisper && isMicrophoneAvailable === false && (
                <p className='alert-note'>Microphone permission is blocked in your browser.</p>
              )}
            </div>
          )}

          {/* Text mode */}
          {inputMode === 'text' && (
            <div className='text-section'>
              <div className='section-label'>
                <span>Tamil text</span>
              </div>
              <textarea
                className='text-area'
                ref={textFromInput}
                placeholder='Type Tamil or romanized Tamil, e.g. naan veetuku varugiren'
                rows={7}
              />
              <button
                className='btn btn-primary btn-full'
                onClick={() => signText(textFromInput.current.value)}
              >
                <i className='fa fa-sign-language' /> Show as signs
              </button>
            </div>
          )}

          {/* Being signed */}
          <div className='output-section'>
            <div className='section-label'>Being signed</div>
            <textarea className='text-area output-area' value={text} readOnly rows={2} />
          </div>

          {/* Gloss info panel */}
          {(glossInfo.skipped.length > 0 || uniqueGrantha.length > 0) && (
            <div className='gloss-panel'>
              {glossInfo.skipped.length > 0 && (
                <div className='gloss-row'>
                  <span className='gloss-row-label'>
                    <i className='fa fa-minus-circle' /> Skipped
                  </span>
                  <span className='chip-group'>
                    {glossInfo.skipped.map((w, i) => (
                      <span key={i} className='chip chip-skip'>{w}</span>
                    ))}
                  </span>
                </div>
              )}
              {uniqueGrantha.length > 0 && (
                <div className='gloss-row'>
                  <span className='gloss-row-label'>
                    <i className='fa fa-question-circle' /> No sign (Grantha)
                  </span>
                  <span className='chip-group'>
                    {uniqueGrantha.map((c, i) => (
                      <span key={i} className='chip chip-grantha' title={`${getGranthaLabel(c)} — no TSL sign mapped yet`}>
                        {c}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          )}

        </aside>

        {/* ── Avatar stage ── */}
        <main className='avatar-stage'>

          <div className='stage-bar'>
            <div className='stage-info'>
              <span className='stage-label'>Sign view</span>
              <strong className='stage-status'>
                {listening ? 'Live — signing as you speak' : 'Avatar ready'}
              </strong>
            </div>
            <div className='stage-actions'>
              <button
                className='btn btn-icon'
                onClick={() => setSettingsOpen((o) => !o)}
                aria-label='Toggle settings'
                title='Settings'
              >
                <i className='fa fa-cog' />
              </button>
            </div>
          </div>

          <div id='canvas' />

          <div className={`stage-settings${settingsOpen ? ' open' : ''}`}>
            <div className='avatar-picker'>
              <span className='picker-label'>Avatar</span>
              <button
                className={`avatar-chip${bot === xbot ? ' selected' : ''}`}
                onClick={() => setBot(xbot)}
              >
                <img src={xbotPic} alt='XBOT' />
                XBOT
              </button>
              <button
                className={`avatar-chip${bot === ybot ? ' selected' : ''}`}
                onClick={() => setBot(ybot)}
              >
                <img src={ybotPic} alt='YBOT' />
                YBOT
              </button>
            </div>

            <div className='slider-control'>
              <span>Speed <small>{Math.round(speed * 100) / 100}</small></span>
              <Slider
                axis='x' xmin={0.05} xmax={0.50} xstep={0.01}
                x={speed} onChange={({ x }) => setSpeed(x)}
                className='slider'
              />
            </div>

            <div className='slider-control'>
              <span>Pause <small>{pause} ms</small></span>
              <Slider
                axis='x' xmin={0} xmax={2000} xstep={100}
                x={pause} onChange={({ x }) => setPause(x)}
                className='slider'
              />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Convert;
