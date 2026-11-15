/* =====================================================================
   UGC NET JRF · Paper I — manifest.js
   Exam rules, the 10 syllabus units, shift timings, motivational quotes
   and the list of paper files (one file per Year · Session · Day · Shift).

   HOW TO ADD A NEW PAPER
   1. Copy any data/20xx-*.js file, rename it (e.g. data/2026-jun-d2-s1.js)
      and change the key at the top  ['2026-jun-d2-s1']  to match the id.
   2. Replace the questions (50 per real paper).
   3. Add ONE line to PAPER_LIST below:
        { id:'2026-jun-d2-s1', year:2026, session:'June', day:2, shift:1, file:'data/2026-jun-d2-s1.js' }
   The year / session / day / shift pickers update automatically.
   Files that are listed but missing are simply skipped.
   ===================================================================== */

window.RULES = {
  examName: 'UGC NET JRF',
  paperName: 'Paper I',
  fullMinutes: 60,      // default time for a full Paper-I test (editable in Settings)
  marks: 2,             // marks per correct answer (50 questions x 2 = 100)
  negative: 0,          // official exam: no negative marking
  negMarks: 0.5,        // marks cut per wrong answer when the "Strict mode" switch is ON

  /* The exam is held in two shifts every day, on several days */
  shifts: [
    { n: 1, i: '🌅', label: 'Shift 1 · Morning', time: '9:00 AM – 12:00 PM' },
    { n: 2, i: '🌇', label: 'Shift 2 · Evening', time: '3:00 PM – 6:00 PM' }
  ],

  /* The 10 units of the UGC NET Paper I syllabus (5 questions each in the real paper).
     `n` must match the "s" field of every question EXACTLY. `k` = short code for charts. */
  topics: [
    { n: 'Teaching Aptitude',                 i: '🎓', k: 'Teaching',      u: 1 },
    { n: 'Research Aptitude',                 i: '🔬', k: 'Research',      u: 2 },
    { n: 'Comprehension',                     i: '📖', k: 'Comprehension', u: 3 },
    { n: 'Communication',                     i: '🗣️', k: 'Communication', u: 4 },
    { n: 'Mathematical Reasoning & Aptitude', i: '➗', k: 'Maths',         u: 5 },
    { n: 'Logical Reasoning',                 i: '🧩', k: 'Logic',         u: 6 },
    { n: 'Data Interpretation',               i: '📊', k: 'Data Interp.',  u: 7 },
    { n: 'ICT',                               i: '💻', k: 'ICT',           u: 8 },
    { n: 'People, Development & Environment', i: '🌳', k: 'PDE',           u: 9 },
    { n: 'Higher Education System',           i: '🏛️', k: 'Higher Edu.',   u: 10 }
  ]
};

/* ---- Paper files: Year · Session (June / December) · Day · Shift (1 / 2) ---- */
window.PAPER_LIST = [
  { id: '2025-jun-d1-s1', year: 2025, session: 'June',     day: 1, shift: 1, file: 'data/2025-jun-d1-s1.js' },
  { id: '2025-jun-d1-s2', year: 2025, session: 'June',     day: 1, shift: 2, file: 'data/2025-jun-d1-s2.js' },
  { id: '2024-dec-d1-s1', year: 2024, session: 'December', day: 1, shift: 1, file: 'data/2024-dec-d1-s1.js' }
];

/* ---- Motivational quotes (one per day on the home screen). Add your own! ---- */
window.QUOTES = [
  'Consistency beats intensity — one solid hour every day wins the exam.',
  'Every wrong answer you review today is a mark you keep tomorrow.',
  'You don\'t need to be perfect. You need to be better than yesterday.',
  'Paper I is the great equaliser — everyone sits it, so every mark counts.',
  'Small daily progress adds up to big results.',
  'Mock tests are rehearsals. Make your mistakes here, not in the exam hall.',
  'Your future Assistant Professor self is watching — keep going.',
  'Don\'t count the days; make the days count.',
  'Hard work compounds. Start the next question.',
  'Revision is where marks are made.',
  'Slow progress is still progress.',
  'Focus on the process; the cut-off will follow.',
  'Today\'s effort is tomorrow\'s confidence.',
  'One more unit. One more test. One step closer to JRF.',
  'Be patient with the syllabus, be strict with your schedule.'
];
