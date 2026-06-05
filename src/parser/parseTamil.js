import { consonantToMei } from './meiMap';
import { uyirMap, vowelCodeToUyir } from './uyirMap';
import { isGranthaConsonant } from './granthaMap';

export const TAMIL_PULLI = '\u0BCD';

export const normalizeTamilText = (value = '') => String(value).normalize('NFC');

export const vowelSignToUyir = {
  '': vowelCodeToUyir.A,
  '\u0BBE': vowelCodeToUyir.AA,
  '\u0BBF': vowelCodeToUyir.I,
  '\u0BC0': vowelCodeToUyir.II,
  '\u0BC1': vowelCodeToUyir.U,
  '\u0BC2': vowelCodeToUyir.UU,
  '\u0BC6': vowelCodeToUyir.E,
  '\u0BC7': vowelCodeToUyir.EE,
  '\u0BC8': vowelCodeToUyir.AI,
  '\u0BCA': vowelCodeToUyir.O,
  '\u0BCB': vowelCodeToUyir.OO,
  '\u0BCC': vowelCodeToUyir.AU
};

export const vowelSignToCode = {
  '': 'A',
  '\u0BBE': 'AA',
  '\u0BBF': 'I',
  '\u0BC0': 'II',
  '\u0BC1': 'U',
  '\u0BC2': 'UU',
  '\u0BC6': 'E',
  '\u0BC7': 'EE',
  '\u0BC8': 'AI',
  '\u0BCA': 'O',
  '\u0BCB': 'OO',
  '\u0BCC': 'AU'
};

const vowelSigns = new Set(Object.keys(vowelSignToUyir).filter(Boolean));

export const parseTamilLetter = (input = '') => {
  const chars = Array.from(normalizeTamilText(input));
  const first = chars[0];

  if (!first) {
    return null;
  }

  if (uyirMap[first]) {
    return {
      type: 'uyir',
      text: first,
      uyir: first,
      mei: null,
      length: 1
    };
  }

  const mei = consonantToMei[first];
  if (!mei) {
    if (isGranthaConsonant(first)) {
      const second = chars[1] || '';
      const hasFollower = second === TAMIL_PULLI || vowelSigns.has(second);
      return {
        type: 'grantha',
        text: hasFollower ? first + second : first,
        grantha: first,
        length: hasFollower ? 2 : 1,
      };
    }
    return {
      type: 'literal',
      text: first,
      value: first,
      length: 1
    };
  }

  const second = chars[1] || '';

  if (second === TAMIL_PULLI) {
    return {
      type: 'mei',
      text: first + second,
      uyir: null,
      mei,
      consonant: first,
      length: 2
    };
  }

  if (vowelSigns.has(second)) {
    return {
      type: 'uyirmei',
      text: first + second,
      uyir: vowelSignToUyir[second],
      mei,
      vowel: vowelSignToCode[second],
      vowelSign: second,
      consonant: first,
      length: 2
    };
  }

  return {
    type: 'uyirmei',
    text: first,
    uyir: vowelCodeToUyir.A,
    mei,
    vowel: 'A',
    vowelSign: '',
    consonant: first,
    length: 1
  };
};

export const parseTamilWord = (word = '') => {
  const chars = Array.from(normalizeTamilText(word));
  const letters = [];

  for (let i = 0; i < chars.length;) {
    const letter = parseTamilLetter(chars.slice(i, i + 2).join(''));

    if (!letter) {
      i++;
      continue;
    }

    letters.push(letter);
    i += letter.length;
  }

  return letters;
};

export const parseTamilText = (text = '') => normalizeTamilText(text)
  .split(/(\s+)/)
  .filter((part) => part.length > 0)
  .map((part) => ({
    type: /^\s+$/.test(part) ? 'space' : 'word',
    text: part,
    letters: /^\s+$/.test(part) ? [] : parseTamilWord(part)
  }));

