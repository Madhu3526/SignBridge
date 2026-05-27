import * as alphabets from '../alphabets';
import { defaultPose } from '../defaultPose';
import { tamilWordMap } from '../tamilWordMap';
import { parseTamilText, parseTamilWord, parseTamilLetter, normalizeTamilText } from '../../parser/parseTamil';
import { playUyirmei } from '../../utils/playUyirmei';

export const playTamilLetter = (letter, ref) => {
  if (!letter) {
    return false;
  }

  if (letter.type === 'literal') {
    const animation = alphabets[letter.value];

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

  letters.forEach((letter) => {
    playTamilLetter(letter, ref);
  });

  return letters;
};

export const playTamilText = (text, ref, options = {}) => {
  const { words = {}, onText = null } = options;
  const normalizedText = normalizeTamilText(text).toUpperCase();
  const parts = parseTamilText(normalizedText);

  parts.forEach((part) => {
    if (part.type === 'space') {
      return;
    }

    const wordAnimation = tamilWordMap[part.text] || words[part.text];
    if (wordAnimation) {
      ref.animations.push(['add-text', `${part.text} `]);
      wordAnimation(ref);
      return;
    }

    part.letters.forEach((letter, index) => {
      const textToAdd = index === part.letters.length - 1 ? `${letter.text} ` : letter.text;
      ref.animations.push(['add-text', textToAdd]);

      if (onText) {
        onText(letter);
      }

      playTamilLetter(letter, ref);
    });
  });

  return parts;
};

export const resetTamilPose = (ref) => defaultPose(ref);

export { parseTamilText, parseTamilWord, parseTamilLetter };
