import { isRomanizedTamilWord } from './romanizedTamil';

const TAMIL_BLOCK = /[஀-௿]/;
const ASCII_WORD  = /^[a-zA-Z0-9]+$/;

export const containsTamil = (text) => TAMIL_BLOCK.test(text);

const isTamilToken = (word) => TAMIL_BLOCK.test(word) || isRomanizedTamilWord(word.replace(/[.?!]+$/g, ''));

/**
 * Classify a speech transcript.
 * Returns { type: 'tamil' | 'english' | 'mixed' | 'empty', tamilWords, englishWords }
 */
export const classifyTranscript = (text = '') => {
  const trimmed = text.trim();
  if (!trimmed) return { type: 'empty', tamilWords: [], englishWords: [] };

  const words = trimmed.split(/\s+/);
  const tamilWords   = words.filter((w) => isTamilToken(w));
  const englishWords = words.filter((w) => ASCII_WORD.test(w) && !isTamilToken(w));

  if (tamilWords.length === 0) return { type: 'english', tamilWords: [], englishWords };
  if (englishWords.length === 0) return { type: 'tamil', tamilWords, englishWords: [] };
  return { type: 'mixed', tamilWords, englishWords };
};

/** Keep only whitespace-separated tokens that contain at least one Tamil character. */
export const filterTamilOnly = (text = '') =>
  text
    .split(/\s+/)
    .filter((w) => TAMIL_BLOCK.test(w))
    .join(' ');
