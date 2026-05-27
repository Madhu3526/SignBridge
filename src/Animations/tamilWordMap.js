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
  // EAT
  // =====================================

  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BC1': SIGN_EAT, // சாப்பிடு
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F': SIGN_EAT, // சாப்பிட
  '\u0B9A\u0BBE\u0BAA\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1': SIGN_EAT, // சாப்பாடு
  '\u0BA4\u0BBF\u0BA9\u0BCD\u0BA9\u0BC1': SIGN_EAT, // தின்னு



  // =====================================
  // DRINK
  // =====================================

  '\u0B95\u0BC1\u0B9F\u0BBF': SIGN_DRINK, // குடி
  '\u0BA4\u0BA3\u0BCD\u0BA3\u0BC0\u0BB0\u0BCD': SIGN_DRINK, // தண்ணீர்
  '\u0BA4\u0BA3\u0BCD\u0BA3\u0BC0\u0BB0\u0BCD \u0B95\u0BC1\u0B9F\u0BBF': SIGN_DRINK, // தண்ணீர் குடி



  // =====================================
  // SLEEP
  // =====================================

  '\u0BA4\u0BC2\u0B99\u0BCD\u0B95\u0BC1': SIGN_SLEEP, // தூங்கு
  '\u0BA4\u0BC2\u0B95\u0BCD\u0B95\u0BAE\u0BCD': SIGN_SLEEP, // தூக்கம்



  // =====================================
  // COME
  // =====================================

  '\u0BB5\u0BBE': SIGN_COME, // வா
  '\u0B87\u0B99\u0BCD\u0B95\u0BC7 \u0BB5\u0BBE': SIGN_COME, // இங்கே வா



  // =====================================
  // GO
  // =====================================

  '\u0BAA\u0BCB': SIGN_GO, // போ
  '\u0B9A\u0BC6\u0BB2\u0BCD': SIGN_GO, // செல்



  // =====================================
  // HOME
  // =====================================

  '\u0BB5\u0BC0\u0B9F\u0BC1': HOME, // வீடு
  '\u0B87\u0BB2\u0BCD\u0BB2\u0BAE\u0BCD': HOME, // இல்லம்
  '\u0BB5\u0BC0\u0B9F\u0BCD\u0B9F\u0BC1': HOME, // வீட்டு



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
  '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD': YOU, // நீங்கள்
  '\u0B89\u0BA9\u0BCD\u0BA9\u0BC8': YOU, // உன்னை
  '\u0B89\u0BA9\u0B95\u0BCD\u0B95\u0BC1': YOU // உனக்கு

};