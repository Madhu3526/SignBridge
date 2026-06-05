
export const GRANTHA_CONSONANTS = {
  'ஜ': { label: 'ஜ', name: 'ja',   approxMei: 'ச்' }, // → ச் (palatal)
  'ஶ': { label: 'ஶ', name: 'sha',  approxMei: 'ச்' }, // → ச்
  'ஷ': { label: 'ஷ', name: 'ṣha', approxMei: 'ட்' }, // → ட் (retroflex)
  'ஸ': { label: 'ஸ', name: 'sa',   approxMei: 'ச்' }, // → ச்
  'ஹ': { label: 'ஹ', name: 'ha',   approxMei: null },            // no close equivalent
};

export const GRANTHA_CHAR_SET = new Set(Object.keys(GRANTHA_CONSONANTS));

export const isGranthaConsonant = (char) => GRANTHA_CHAR_SET.has(char);

export const getGranthaLabel = (char) => GRANTHA_CONSONANTS[char]?.label ?? char;
