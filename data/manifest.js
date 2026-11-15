/* =====================================================================
   UGC NET JRF · Paper I — manifest.js
   Exam rules, the 10 syllabus units, shift timings, motivational quotes
   and the list of paper files.

   HOW TO ADD A NEW PAPER  (2 steps)
   1. Put the paper file anywhere inside the data/ folder, e.g.  data/2026_d9_s1.js
      (copy data/_TEMPLATE.js — the first line says which year / session / day / shift it is).
   2. Add its file name to PAPER_FILES below. That's it.

   Missing files are skipped, so you can list a paper before you upload it.
   (Open the site as  yoursite.com/?check  to see a list of any mistakes in your paper files.)
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

/* ---- Paper files — one line per paper ---- */
window.PAPER_FILES = [
  '2026_d9_s1.js',            // June 2026 · Day 9 · Shift 1
  'june/2025_d1_s1.js',       // older style (year / session / day / shift read from the path) still works
  'june/2025_d1_s2.js',
  'december/2024_d1_s1.js'
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
