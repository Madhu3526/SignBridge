import { SIGN_EAT } from './Alphabets/sign_eat';
import { SIGN_DRINK } from './Alphabets/sign_drink';
import { SIGN_SLEEP } from './Alphabets/sign_sleep';
import { SIGN_COME } from './Alphabets/sign_come';
import { SIGN_GO } from './Alphabets/sign_go';

import { HOME } from './Words/HOME';
import { TIME } from './Words/TIME';
import { PERSON } from './Words/PERSON';
import { YOU } from './Words/YOU';

export const tamilWordMap = {

  // =====================================
  // ENGLISH KEYWORDS
  // lookupWord() upper-cases before matching, so 'eat'/'Eat'/'EAT' all resolve.
  // =====================================

  EAT: SIGN_EAT, EATING: SIGN_EAT, ATE: SIGN_EAT, EATS: SIGN_EAT, FOOD: SIGN_EAT, MEAL: SIGN_EAT,
  DRINK: SIGN_DRINK, DRINKING: SIGN_DRINK, DRANK: SIGN_DRINK, DRINKS: SIGN_DRINK, WATER: SIGN_DRINK,
  SLEEP: SIGN_SLEEP, SLEEPING: SIGN_SLEEP, SLEPT: SIGN_SLEEP, SLEEPS: SIGN_SLEEP, REST: SIGN_SLEEP,
  COME: SIGN_COME, COMING: SIGN_COME, CAME: SIGN_COME, COMES: SIGN_COME,
  GO: SIGN_GO, GOING: SIGN_GO, WENT: SIGN_GO, GOES: SIGN_GO, LEAVE: SIGN_GO,
  HOUSE: HOME, HOME: HOME,
  PEOPLE: PERSON, HUMAN: PERSON, HUMANS: PERSON, PERSON: PERSON, MAN: PERSON, WOMAN: PERSON,
  YOU: YOU, YOUR: YOU, YOURS: YOU,
  TIME: TIME, CLOCK: TIME, HOUR: TIME,

  // =====================================
  // EAT
  // =====================================

  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BC1': SIGN_EAT, // சாப்பிடு
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F': SIGN_EAT, // சாப்பிட
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1': SIGN_EAT, // சாப்பாடு
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BCD\u0B9F\u0BC7\u0BA9\u0BCD': SIGN_EAT, // சாப்பிட்டேன்
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_EAT, // சாப்பிடுங்கள்
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BBE': SIGN_EAT, // சாப்பிடுங்களா
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BCD\u0B9F\u0BBE\u0B99\u0BCD': SIGN_EAT, // சாப்பிட்டான்
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BCD\u0B9F\u0BBE\u0BB0\u0BCD': SIGN_EAT, // சாப்பிட்டார்
  '\u0BA4\u0BBF\u0BA9\u0BCD\u0BA9\u0BC1': SIGN_EAT, // தின்னு
  '\u0BA4\u0BBF\u0BA9\u0BCD\u0BA9\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD': SIGN_EAT, // தின்னுகிறேன்
  '\u0BA4\u0BBF\u0BA9\u0BCD\u0BA9\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_EAT, // தின்னுங்கள்



  // =====================================
  // DRINK
  // =====================================

  '\u0B95\u0BC1\u0B9F\u0BBF': SIGN_DRINK, // குடி
  '\u0B95\u0BC1\u0B9F\u0BBF\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD': SIGN_DRINK, // குடிகிறேன்
  '\u0B95\u0BC1\u0B9F\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_DRINK, // குடிங்கள்
  '\u0B95\u0BC1\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_DRINK, // குடுங்கள்
  '\u0B95\u0BC1\u0B9F\u0BBF\u0B95\u0BBF\u0BB1\u0BBE\u0B99\u0BCD': SIGN_DRINK, // குடிகிறான்
  '\u0BA4\u0BA3\u0BCD\u0BA3\u0BC0\u0BB0\u0BCD': SIGN_DRINK, // தண்ணீர்
  '\u0BA4\u0BA3\u0BCD\u0BA3\u0BC0': SIGN_DRINK, // தண்ணீ
  '\u0BA4\u0BA3\u0BCD\u0BA3\u0BC0\u0BB0\u0BCD \u0B95\u0BC1\u0B9F\u0BBF': SIGN_DRINK, // தண்ணீர் குடி



  // =====================================
  // SLEEP
  // =====================================

  '\u0BA4\u0BC2\u0B99\u0BCD\u0B95\u0BC1': SIGN_SLEEP, // தூங்கு
  '\u0BA4\u0BC2\u0B99\u0BCD\u0B95\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD': SIGN_SLEEP, // தூங்குகிறேன்
  '\u0BA4\u0BC2\u0B99\u0BCD\u0B95\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_SLEEP, // தூங்குங்கள்
  '\u0BA4\u0BC2\u0B95\u0BCD\u0B95\u0BAE\u0BCD': SIGN_SLEEP, // தூக்கம்



  // =====================================
  // COME
  // =====================================

  '\u0BB5\u0BBE': SIGN_COME, // வா
  '\u0BB5\u0BBE\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_COME, // வாங்கள்
  '\u0BB5\u0BB0\u0BC1': SIGN_COME, // வரு
  '\u0BB5\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_COME, // வருங்கள்
  '\u0BB5\u0BB0\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD': SIGN_COME, // வருகிறேன்
  '\u0BB5\u0BB0\u0BC1\u0B95\u0BBF\u0BB1\u0BBE\u0B99\u0BCD': SIGN_COME, // வருகிறான்
  '\u0BB5\u0BB0\u0BC1\u0B95\u0BBF\u0BB1\u0BBE\u0BB0\u0BCD': SIGN_COME, // வருகிறார்
  '\u0BB5\u0BB0\u0BC1\u0BB5\u0BC7\u0BA9\u0BCD': SIGN_COME, // வருவேன்
  '\u0B87\u0B99\u0BCD\u0B95\u0BC7 \u0BB5\u0BBE': SIGN_COME, // இங்கே வா



  // =====================================
  // GO
  // =====================================

  '\u0BAA\u0BCB': SIGN_GO, // போ
  '\u0BAA\u0BCB\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_GO, // போங்கள்
  '\u0B9A\u0BC6\u0BB2\u0BCD': SIGN_GO, // செல்
  '\u0B9A\u0BC6\u0BB2\u0BCD\u0B95\u0BB3\u0BCD': SIGN_GO, // செல்க
  '\u0BAA\u0BCB\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD': SIGN_GO, // போகிறேன்
  '\u0BAA\u0BCB\u0B95\u0BBF\u0BB1\u0BBE\u0B99\u0BCD': SIGN_GO, // போகிறான்
  '\u0BAA\u0BCB\u0B95\u0BBF\u0BB1\u0BBE\u0BB0\u0BCD': SIGN_GO, // போகிறார்
  '\u0BAA\u0BCB\u0B95\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD': SIGN_GO, // போகுங்கள்



  // =====================================
  // HOME
  // =====================================

  '\u0BB5\u0BC0\u0B9F\u0BC1': HOME, // வீடு
  '\u0B87\u0BB2\u0BCD\u0BB2\u0BAE\u0BCD': HOME, // இல்லம்
  '\u0BB5\u0BC0\u0B9F\u0BCD\u0B9F\u0BC1': HOME, // வீட்டு
  '\u0BB5\u0BC0\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BC1': HOME, // வீட்டுக்கு
  '\u0BB5\u0BC0\u0B9F\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD': HOME, // வீட்டில்



  // =====================================
  // TIME
  // =====================================

  '\u0BA8\u0BC7\u0BB0\u0BAE\u0BCD': TIME, // நேரம்
  '\u0BAE\u0BA3\u0BBF': TIME, // மணி
  '\u0B95\u0BBE\u0BB2\u0BAE\u0BCD': TIME, // காலம்



  // =====================================
  // PERSON
  // =====================================

  '\u0BAE\u0BA9\u0BBF\u0BA4\u0BA9\u0BCD': PERSON, // மனிதன்
  '\u0BAE\u0BA9\u0BBF\u0BA4\u0BB0\u0BCD': PERSON, // மனிதர்
  '\u0B86\u0BB3\u0BCD': PERSON, // ஆள்
  '\u0BA8\u0BAA\u0BB0\u0BCD': PERSON, // நபர்



  // =====================================
  // YOU
  // =====================================

  '\u0BA8\u0BC0': YOU, // நீ
  '\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD': YOU, // நீங்கள்
  '\u0B89\u0BA9\u0BCD\u0BA9\u0BC8': YOU, // உன்னை
  '\u0B89\u0BA9\u0B95\u0BCD\u0B95\u0BC1': YOU, // உனக்கு
  '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD': YOU, // உங்கள்

  // =====================================
  // ROMANIZED (direct lookup when STT outputs Latin)
  // =====================================

  saapdu: SIGN_EAT, saapda: SIGN_EAT, saapten: SIGN_EAT, tinu: SIGN_EAT, tinnu: SIGN_EAT,
  kudi: SIGN_DRINK, thanneer: SIGN_DRINK, thanni: SIGN_DRINK,
  thoongu: SIGN_SLEEP, thookam: SIGN_SLEEP,
  va: SIGN_COME, vaa: SIGN_COME, varu: SIGN_COME, varugiren: SIGN_COME, varuven: SIGN_COME,
  po: SIGN_GO, pogiren: SIGN_GO, sel: SIGN_GO,
  veedu: HOME, veetuku: HOME, illam: HOME,
  neram: TIME, mani: TIME, kaalam: TIME,
  manithan: PERSON, manithargal: PERSON, aal: PERSON, napar: PERSON,
  nee: YOU, neenga: YOU, ninga: YOU, ungal: YOU,

};