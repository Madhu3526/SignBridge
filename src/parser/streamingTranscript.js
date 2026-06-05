import { isRomanizedTamilWord } from './romanizedTamil';
import { containsTamil } from './validateTamil';

export const SIGN_DEBOUNCE_MS = 1000;

export const SPEECH_LOCALES = {
  tamil: 'ta-IN',
  english: 'en-IN',
};

const SENTENCE_END = /[.?!]\s*$/;

/** Strip leading/trailing punctuation while keeping Tamil letters. */
export const cleanGlossWord = (word = '') =>
  String(word).replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}.?!]+$/gu, '');

/**
 * Split transcript into signable tokens with sentence-boundary metadata.
 * @returns {{ raw: string, word: string, endsSentence: boolean }[]}
 */
export const tokenizeTranscript = (text = '') =>
  text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => ({
      raw,
      word: cleanGlossWord(raw),
      endsSentence: SENTENCE_END.test(raw),
    }))
    .filter((t) => t.word);

/**
 * Pick which tokens are stable enough to sign incrementally.
 * While listening, holds back the last token unless it ends a sentence or forceFlush is set.
 */
export const getSignableSlice = (tokens, signedCount, { listening = false, forceFlush = false } = {}) => {
  if (!tokens.length || signedCount >= tokens.length) {
    return { slice: [], nextCount: signedCount };
  }

  let end = tokens.length;

  if (listening && !forceFlush) {
    let boundaryEnd = signedCount;
    for (let i = signedCount; i < tokens.length; i += 1) {
      if (tokens[i].endsSentence) boundaryEnd = i + 1;
    }

    if (boundaryEnd > signedCount) {
      end = boundaryEnd;
    } else {
      end = Math.max(signedCount, tokens.length - 1);
    }
  }

  return {
    slice: tokens.slice(signedCount, end),
    nextCount: end,
  };
};

/**
 * Resolve Web Speech API locale from user mode and live transcript (auto).
 */
export const resolveSpeechLocale = (mode = 'tamil', transcript = '') => {
  if (mode === 'tamil') return SPEECH_LOCALES.tamil;
  if (mode === 'english') return SPEECH_LOCALES.english;

  const words = transcript.trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return SPEECH_LOCALES.tamil;

  const tamilCount = words.filter((w) => containsTamil(w) || isRomanizedTamilWord(w.replace(/[.?!]+$/g, ''))).length;
  const asciiCount = words.filter((w) => /^[a-zA-Z]+$/.test(w) && !isRomanizedTamilWord(w)).length;

  return asciiCount > tamilCount ? SPEECH_LOCALES.english : SPEECH_LOCALES.tamil;
};
