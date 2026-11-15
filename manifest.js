/* =====================================================================
   UGC NET JRF · Paper I — manifest.js
   Exam rules, the 10 syllabus units, shift timings, motivational quotes
   and the list of paper files (one file per Year · Session · Day · Shift).

   HOW TO ADD A NEW PAPER (3 steps)
   1. Copy any file in data/june or data/december and rename it, e.g.
        data/june/2026_d1_s1.js   (June 2026 · Day 1 · Shift 1)
        data/december/2026_d2_s2.js   (December 2026 · Day 2 · Shift 2)
   2. Replace the question lines inside it (one line per question).
   3. Add the file name to PAPER_FILES below, e.g.  'june/2026_d1_s1.js',
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

/* ---- Paper files ----------------------------------------------------------
   Just list each paper's file name. Year, session, day and shift are read from the
   path itself:   <june|december>/<year>_d<day>_s<shift>.js
   e.g.  'june/2026_d1_s1.js'  = June 2026 · Day 1 · Shift 1
   Missing files are skipped, so you can list papers before you upload them. */
window.PAPER_FILES = [
  'june/2025_d1_s1.js',
  'june/2025_d1_s2.js',
  'december/2024_d1_s1.js'
];

/* Builds the paper list from the names above (no need to edit below this line) */
window.PAPER_LIST = window.PAPER_FILES.map(function (f) {
  var m = /^(june|december)\/(\d{4})_d(\d+)_s(\d+)\.js$/i.exec(f.trim());
  if (!m) { console.warn('Paper file name not understood: ' + f + '  (use june/2026_d1_s1.js)'); return null; }
  return { id: 'data/' + f.trim(), file: 'data/' + f.trim(), year: +m[2], session: m[1].toLowerCase() === 'june' ? 'June' : 'December', day: +m[3], shift: +m[4] };
}).filter(Boolean);

/* Used by every paper file: PAPER([ [unit, question, A, B, C, D, answer, explanation], ... ]) */
window.PAPER = function (rows) {
  var src = (document.currentScript && document.currentScript.getAttribute('src')) || '';
  (window.PAPERS = window.PAPERS || {})[src] = { questions: rows };
};

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
