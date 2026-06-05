import { containsTamil } from './validateTamil';


export const ROMAN_DICTIONARY = {
  // Greetings / common (fingerspelled if no sign)
  vanakkam: 'வணக்கம்',
  nandri: 'நன்றி',
  romba: 'ரொம்ப',
  nalla: 'நல்ல',

  // Eat
  saapdu: 'சாப்பிடு',
  saapda: 'சாப்பாடு',
  saapidu: 'சாப்பிடு',
  saaptingala: 'சாப்பிடுங்களா',
  saaptinga: 'சாப்பிடுங்கள்',
  saapten: 'சாப்பிட்டேன்',
  tinu: 'தின்னு',
  tinnu: 'தின்னு',
  tinikiren: 'தின்னுகிறேன்',
  sapdu: 'சாப்பிடு',

  // Drink
  kudi: 'குடி',
  kudikiren: 'குடிகிறேன்',
  kudingu: 'குடிங்கள்',
  kudunga: 'குடுங்கள்',
  thanneer: 'தண்ணீர்',
  thanni: 'தண்ணி',
  neer: 'நீர்',

  // Sleep
  thoongu: 'தூங்கு',
  thookam: 'தூக்கம்',
  thoongikiren: 'தூங்குகிறேன்',
  thoongunga: 'தூங்குங்கள்',

  // Come
  va: 'வா',
  vaa: 'வா',
  vaanga: 'வாங்கள்',
  varu: 'வரு',
  varunga: 'வருங்கள்',
  varugiren: 'வருகிறேன்',
  varuven: 'வருவேன்',
  ingeva: 'இங்கே வா',

  // Go
  po: 'போ',
  ponga: 'போங்கள்',
  pogiren: 'போகிறேன்',
  pogiraen: 'போகிறேன்',
  sel: 'செல்',
  selka: 'செல்க',
  sellu: 'செல்',

  // Home
  veedu: 'வீடு',
  veetuku: 'வீட்டுக்கு',
  veettil: 'வீட்டில்',
  illam: 'இல்லம்',
  veetu: 'வீட்டு',

  // Time
  neram: 'நேரம்',
  mani: 'மணி',
  kaalam: 'காலம்',

  // Person
  manithan: 'மனிதன்',
  manithargal: 'மனிதர்கள்',
  manidar: 'மனிதர்',
  aal: 'ஆள்',
  napar: 'நபர்',

  // You
  nee: 'நீ',
  neenga: 'நீங்கள்',
  ninga: 'நீங்கள்',
  ungal: 'உங்கள்',
  unna: 'உன்னை',
  unaku: 'உனக்கு',

  // Function words (skipped in gloss)
  naan: 'நான்',
  avan: 'அவன்',
  aval: 'அவள்',
  avar: 'அவர்',
  avargal: 'அவர்கள்',
  indha: 'இந்த',
  andha: 'அந்த',
  oru: 'ஒரு',
  adhu: 'அது',
  idhu: 'இது',
  ippodhu: 'இப்போது',
  inru: 'இன்று',
  naalai: 'நாளை',
  inge: 'இங்கே',
  ange: 'அங்கே',
};

/** English words that must not be transliterated when spoken in a mixed sentence. */
const COMMON_ENGLISH = new Set([
  'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being',
  'i', 'me', 'my', 'we', 'our', 'you', 'your', 'he', 'she', 'it', 'they', 'them',
  'and', 'or', 'but', 'not', 'no', 'yes', 'to', 'of', 'in', 'on', 'at', 'for',
  'with', 'from', 'by', 'this', 'that', 'what', 'who', 'how', 'when', 'where', 'why',
  'do', 'does', 'did', 'will', 'would', 'can', 'could', 'should', 'have', 'has', 'had',
  'eat', 'drink', 'sleep', 'come', 'go', 'home', 'time', 'person', 'house', 'water',
  'food', 'hello', 'hi', 'please', 'thanks', 'thank',
]);

const ROMAN_VERB_SUFFIXES = [
  'kiraen', 'kiren', 'giren', 'giraen', 'kiraanga', 'kiringa', 'kiranga',
  'kiraar', 'kirathu', 'kiraanga', 'kitten', 'kitta', 'kittu',
  'unga', 'ungal', 'uunga', 'kan', 'ga', 'gal',
];

const ROMAN_CASE_SUFFIXES = [
  'ukku', 'kku', 'la', 'il', 'ilirundhu', 'udaiya', 'oda',
];

const TAMIL_ROMAN_PATTERN = /^(?:th|dh|ng|nj|zh|rr|ll|nn|sh|ch|[a-z])+$/i;

export const isAsciiWord = (word = '') => /^[a-zA-Z]+$/.test(word);

/** Heuristic: romanized Tamil token (not a known English word). */
export const isRomanizedTamilWord = (word = '') => {
  const lower = word.toLowerCase();
  if (!isAsciiWord(lower)) return false;
  if (COMMON_ENGLISH.has(lower)) return false;
  if (ROMAN_DICTIONARY[lower]) return true;
  if (!TAMIL_ROMAN_PATTERN.test(lower)) return false;
  if (lower.length < 2) return false;

  const root = stripRomanSuffix(lower);
  return Boolean(ROMAN_DICTIONARY[root]) || /[aeiou]/.test(lower);
};

function stripRomanSuffix(word) {
  for (const suffix of ROMAN_VERB_SUFFIXES) {
    if (word.endsWith(suffix) && word.length > suffix.length + 2) {
      return word.slice(0, -suffix.length);
    }
  }
  for (const suffix of ROMAN_CASE_SUFFIXES) {
    if (word.endsWith(suffix) && word.length > suffix.length + 2) {
      return word.slice(0, -suffix.length);
    }
  }
  return word;
}

/**
 * Best-effort single-word romanized Tamil → Tamil script.
 * Dictionary first, then suffix-stripped root lookup.
 */
export const transliterateRomanWord = (word = '') => {
  const lower = word.toLowerCase().replace(/[.?!,;:'"]+$/g, '');
  if (!lower || !isAsciiWord(lower)) return word;

  if (ROMAN_DICTIONARY[lower]) return ROMAN_DICTIONARY[lower];

  const root = stripRomanSuffix(lower);
  if (ROMAN_DICTIONARY[root]) return ROMAN_DICTIONARY[root];

  return word;
};

/**
 * Prepare raw input for glossing: convert romanized Tamil tokens to Tamil script.
 * English tokens and existing Tamil script are left unchanged.
 */
export const prepareSignInput = (text = '') => {
  const trimmed = text.trim();
  if (!trimmed) return '';

  return trimmed
    .split(/\s+/)
    .map((raw) => {
      const punct = raw.match(/[.?!]+$/);
      const core = raw.replace(/[.?!]+$/g, '');

      if (containsTamil(core)) return raw;
      if (!isAsciiWord(core)) return raw;
      if (COMMON_ENGLISH.has(core.toLowerCase())) return raw;
      if (isRomanizedTamilWord(core)) {
        const tamil = transliterateRomanWord(core);
        return punct ? `${tamil}${punct[0]}` : tamil;
      }
      return raw;
    })
    .join(' ');
};
