/* UGC NET JRF Paper I · June 2025 · Day 1 · Shift 1
   ⚠ SAMPLE DATA: 10 placeholder questions (1 per unit) — replace with the real 50-question paper.
   Fields: s = unit (must match manifest), c = sub-topic, p = optional passage / table (HTML allowed),
           q = question, o = 4 options, a = index of correct option (0-3), e = explanation. */
(window.PAPERS = window.PAPERS || {})['2025-jun-d1-s1'] = {
  questions: [
    { s:'Teaching Aptitude', c:'Learning Theories', q:'The concept of the "Zone of Proximal Development" was given by —', o:['Piaget','Vygotsky','Skinner','Bruner'], a:1, e:'Lev Vygotsky defined the ZPD as the gap between what a learner can do alone and with guidance.' },
    { s:'Research Aptitude', c:'Hypothesis', q:'A hypothesis stating that there is no significant difference between variables is called a —', o:['Alternative hypothesis','Null hypothesis','Directional hypothesis','Research hypothesis'], a:1, e:'The null hypothesis (H0) assumes no relationship or difference.' },
    { s:'Comprehension', c:'Passage', p:'<b>Passage:</b> Libraries are not merely storehouses of books; they are living spaces where communities gather to learn, share and imagine. In the digital age, their role has expanded to include access to online resources and training in information literacy.', q:'According to the passage, libraries today also provide —', o:['Only printed books','Access to online resources and information-literacy training','Entertainment exclusively','Commercial services'], a:1, e:'The passage says the role has expanded to online resources and information literacy.' },
    { s:'Communication', c:'Barriers', q:'Which of the following is a barrier to effective communication?', o:['Feedback','Clarity','Noise','Active listening'], a:2, e:'Noise (physical or psychological) disturbs the message between sender and receiver.' },
    { s:'Mathematical Reasoning & Aptitude', c:'Number Series', q:'Find the next term: 3, 6, 12, 24, ?', o:['36','42','48','54'], a:2, e:'Each term is double the previous one, so 24 × 2 = 48.' },
    { s:'Logical Reasoning', c:'Syllogism', q:'All cats are animals. All animals are living beings. Conclusion: All cats are living beings. The conclusion is —', o:['Definitely true','Definitely false','Probably true','Data insufficient'], a:0, e:'Both premises chain together, so the conclusion necessarily follows.' },
    { s:'Data Interpretation', c:'Tables', p:'<table><tr><th>Year</th><th>2022</th><th>2023</th><th>2024</th></tr><tr><td>Units sold</td><td>200</td><td>250</td><td>300</td></tr></table>', q:'The percentage increase in sales from 2022 to 2024 is —', o:['25%','40%','50%','60%'], a:2, e:'(300 − 200) ÷ 200 × 100 = 50%.' },
    { s:'ICT', c:'Internet', q:'The full form of URL is —', o:['Uniform Resource Locator','Universal Resource Link','Uniform Reference Locator','Unified Resource Link'], a:0, e:'URL = Uniform Resource Locator, the address of a web resource.' },
    { s:'People, Development & Environment', c:'Environmental Days', q:'World Environment Day is observed on —', o:['22 April','5 June','16 September','21 March'], a:1, e:'World Environment Day is observed every year on 5 June.' },
    { s:'Higher Education System', c:'Regulatory Bodies', q:'NAAC, the accreditation body for higher education institutions, was established by —', o:['AICTE','UGC','MHRD','NCERT'], a:1, e:'NAAC is an autonomous body set up by the University Grants Commission.' }
  ]
};
