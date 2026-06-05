import * as alphabets from '../alphabets';
import { defaultPose } from '../defaultPose';
import { tamilWordMap } from '../tamilWordMap';
import { parseTamilWord, parseTamilLetter, normalizeTamilText } from '../../parser/parseTamil';
import { playUyirmei } from '../../utils/playUyirmei';
import { processGloss, processGlossWords } from '../../parser/glossProcessor';

export const playTamilLetter = (letter, ref) => {
  if (!letter) return false;

  if (letter.type === 'grantha') {
    // Grantha consonants have no dedicated sign animation yet.
    // They are tracked by the caller via the onGloss callback.
    return false;
  }

  if (letter.type === 'literal') {
    // Alphabet exports are uppercase (A, B, C…); normalise before lookup.
    const animation = alphabets[letter.value.toUpperCase()] || alphabets[letter.value];
    if (animation) {
      animation(ref);
      return true;
    }
    return false;
  }

  return playUyirmei(letter.uyir, letter.mei, ref);
};

export const playTamilWord = (word, ref) => {
  const letters = parseTamilWord(word);
  letters.forEach((letter) => playTamilLetter(letter, ref));
  return letters;
};

const buildWordMap = (extraWords = {}) =>
  Object.fromEntries(
    Object.entries({ ...tamilWordMap, ...extraWords }).filter(([, v]) => typeof v === 'function')
  );

const enqueueGlossTokens = (tokens, ref, { onText = null, granthaChars = [] } = {}) => {
  tokens.forEach((token) => {
    if (token.type === 'word-sign') {
      ref.animations.push(['add-text', `${token.word} `]);
      token.sign(ref);
      return;
    }

    const letters = parseTamilWord(token.word);
    letters.forEach((letter, idx) => {
      const textToAdd =
        idx === letters.length - 1 ? `${letter.text} ` : letter.text;
      ref.animations.push(['add-text', textToAdd]);

      if (onText) onText(letter);

      if (letter.type === 'grantha') {
        granthaChars.push(letter.grantha);
      } else {
        playTamilLetter(letter, ref);
      }
    });
  });

  return granthaChars;
};

/**
 * Sign only new words (incremental / real-time path).
 * Does not clear the animation queue or output text.
 */
export const appendTamilWords = (words, ref, options = {}) => {
  const { words: extraWords = {}, onText = null } = options;
  if (!words.length) return { tokens: [], skipped: [], granthaChars: [] };

  const combinedMap = buildWordMap(extraWords);
  const normalized = words.map((w) => normalizeTamilText(w));
  const { tokens, skipped } = processGlossWords(normalized, combinedMap);
  const granthaChars = enqueueGlossTokens(tokens, ref, { onText });

  return { tokens, skipped, granthaChars };
};

/**
 * Play a full Tamil text through the avatar.
 *
 * Options:
 *   words     – extra word-sign map (e.g. imported word animations)
 *   onText    – called for each parsed letter
 *   onGloss   – called once at end with { skipped: string[], granthaChars: string[] }
 */
export const playTamilText = (text, ref, options = {}) => {
  const { words = {}, onText = null, onGloss = null } = options;
  const normalized = normalizeTamilText(text);
  const combinedMap = buildWordMap(words);
  const { tokens, skipped } = processGloss(normalized, combinedMap);
  const granthaChars = enqueueGlossTokens(tokens, ref, { onText });

  if (onGloss) onGloss({ skipped, granthaChars });

  return tokens;
};

export const resetTamilPose = (ref) => defaultPose(ref);

export { parseTamilWord, parseTamilLetter };
