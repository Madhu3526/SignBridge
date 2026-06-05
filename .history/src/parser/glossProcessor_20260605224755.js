
const FUNCTION_WORDS = new Set([
  'தான்', 'உம்', 'ஆனால்', 'அல்லது', 'மற்றும்', 'என்று', 'என்பது',
  'போன்று', 'போல', 'ஆக', 'ஆகும்', 'என', 'எனவே', 'ஆனாலும்',
  'இந்த', 'அந்த', 'அந்தந்த', 'ஒரு', 'அது', 'இது',
   'அவன்', 'அவள்', 'அவர்', 'அவர்கள்', 'நாங்கள்',
  'இங்கே', 'அங்கே', 'இப்போது', 'இன்று', 'நேற்று', 'நாளை',
  'மிக', 'மிகவும்', 'சற்று', 'மட்டும்', 'கூட',
]);

// ── Case suffixes (longest first to avoid short-circuit mismatches) ───────────
const CASE_SUFFIXES = [
  'இலிருந்து', 'லிருந்து', 'இடமிருந்து', 'களிடமிருந்து',
  'உடைய', 'களுடைய',
  'களுக்கு', 'க்காக', 'க்கு',
  'களோடு', 'ஓடு',
  'களால்', 'ஆல்', 'ால்',
  'களில்', 'இல்', 'ில்', 'ல்',
  'களை', 'ஐ',
  'களின்', 'இன்', 'ன்',
  'கள்',
  'ஆக', 'ஆகவும்', 'இல்', 'இன்',
];

// ── Verb / tense suffixes ─────────────────────────────────────────────────────
const VERB_SUFFIXES = [
  'கிறார்களா', 'கிறார்களாக', 'கிறார்களாம்',
  'கிறார்கள்', 'கின்றார்கள்',
  'கிறீர்களா', 'கிறீர்கள்', 'கிறோம்',
  'கிறானா', 'கிறான்', 'கிறாள்', 'கிறார்', 'கிறாய்', 'கிறாயா',
  'கின்றேன்', 'கிறேன்', 'கிறேனா',
  'ுகிறார்கள்', 'ுகிறீர்கள்', 'ுகிறோம்',
  'ுகிறான்', 'ுகிறாள்', 'ுகிறார்', 'ுகிறாய்',
  'ுகிறேன்', 'ுகிறது', 'ுகின்றது',
  'ந்தார்கள்', 'ந்தோம்', 'ந்தான்', 'ந்தாள்', 'ந்தார்', 'ந்தேன்',
  'ட்டார்கள்', 'ட்டோம்', 'ட்டான்', 'ட்டாள்', 'ட்டார்', 'ட்டேன்',
  'வார்கள்', 'வோம்', 'வான்', 'வாள்', 'வார்', 'வேன்',
  'கிறது', 'கின்றது', 'ந்தது', 'ட்டது', 'வது', 'வதற்கு',
  'ுங்கள்', 'ூங்கள்', 'ாதே', 'ாமல்', 'ாக', 'லாம்', 'லேன்',
  'த்தேன்', 'த்தாய்', 'த்தார்', 'த்தாள்', 'த்தான்',
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function stripSuffix(word, suffixes) {
  for (const suffix of suffixes) {
    if (word.endsWith(suffix) && word.length > suffix.length + 1) {
      return word.slice(0, -suffix.length);
    }
  }
  return null;
}

function lookupWord(word, wordMap) {
  const val = wordMap[word] ?? wordMap[word.toUpperCase()];
  // Only treat as a valid sign if it is a callable animation function.
  return typeof val === 'function' ? val : null;
}

function resolveToken(word, wordMap) {
  // 1. Direct match
  const direct = lookupWord(word, wordMap);
  if (direct) return { sign: direct, root: word, strategy: 'direct' };

  // 2. Case suffix stripping
  const caseRoot = stripSuffix(word, CASE_SUFFIXES);
  if (caseRoot) {
    const hit = lookupWord(caseRoot, wordMap);
    if (hit) return { sign: hit, root: caseRoot, strategy: 'case-stripped' };
  }

  // 3. Verb suffix stripping
  const verbRoot = stripSuffix(word, VERB_SUFFIXES);
  if (verbRoot) {
    const hit = lookupWord(verbRoot, wordMap);
    if (hit) return { sign: hit, root: verbRoot, strategy: 'verb-stripped' };
  }

  return null;
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Process Tamil text for TSL signing.
 *
 * @param {string} text - Normalised Tamil text (NFC).
 * @param {object} wordMap - Combined { tamilWordMap, ...words } sign lookup.
 * @returns {{ tokens: Token[], skipped: string[] }}
 *
 * Token shapes:
 *   { type: 'word-sign', word, root, sign, strategy }
 *   { type: 'fingerspell', word }
 */
export function processGlossWords(rawWords, wordMap) {
  const tokens  = [];
  const skipped = [];

  for (const word of rawWords) {
    if (!word) continue;

    if (FUNCTION_WORDS.has(word)) {
      skipped.push(word);
      continue;
    }

    const resolved = resolveToken(word, wordMap);
    if (resolved) {
      tokens.push({
        type:     'word-sign',
        word,
        root:     resolved.root,
        sign:     resolved.sign,
        strategy: resolved.strategy,
      });
    } else {
      tokens.push({ type: 'fingerspell', word });
    }
  }

  return { tokens, skipped };
}

export function processGloss(text, wordMap) {
  const rawWords = text.trim().split(/\s+/).filter(Boolean);
  return processGlossWords(rawWords, wordMap);
}
