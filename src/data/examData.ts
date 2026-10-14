import { ExamPattern } from '../types';

export const EXAM_DATA: ExamPattern[] = [
  {
    examId: 'ssc-cgl',
    name: 'Staff Selection Commission - Combined Graduate Level (SSC CGL)',
    shortName: 'SSC CGL',
    conductingBody: 'Staff Selection Commission (SSC, Govt of India)',
    frequency: 'Annual',
    ageLimit: '18 - 32 years (post-specific, relaxation as per Govt rules)',
    qualification: 'Bachelor’s Degree in any discipline from a recognized University',
    selectionProcess: [
      'Tier-I (CBT - Computer Based Examination, Qualifying in nature)',
      'Tier-II (CBT - Computer Based Examination with Paper-I mandatory for all posts)',
      'Data Entry Speed Test (DEST) & Document Verification (conducted by user department)'
    ],
    stages: [
      {
        stageName: 'Tier-I (Objective Multiple Choice - Qualifying)',
        totalMarks: 200,
        totalQuestions: 100,
        durationMinutes: 60,
        negativeMarking: '0.50 mark deducted per wrong answer',
        mode: 'Online Computer Based Examination (CBT)',
        subjectDistribution: [
          { subject: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
          { subject: 'General Awareness (GA & GK)', questions: 25, marks: 50 },
          { subject: 'Quantitative Aptitude (Mathematics)', questions: 25, marks: 50 },
          { subject: 'English Comprehension', questions: 25, marks: 50 }
        ]
      },
      {
        stageName: 'Tier-II Paper-I (Sectional Timing - Merit Deciding)',
        totalMarks: 390,
        totalQuestions: 130,
        durationMinutes: 135,
        negativeMarking: '1.0 mark deducted per incorrect answer',
        mode: 'Online Computer Based Examination (CBT)',
        subjectDistribution: [
          { subject: 'Section 1: Mathematical Abilities', questions: 30, marks: 90 },
          { subject: 'Section 1: Reasoning & General Intelligence', questions: 30, marks: 90 },
          { subject: 'Section 2: English Language & Comprehension', questions: 45, marks: 135 },
          { subject: 'Section 2: General Awareness', questions: 25, marks: 75 },
          { subject: 'Section 3: Computer Knowledge Module (Qualifying)', questions: 20, marks: 60 }
        ]
      }
    ],
    officialNotificationNote: 'Verified with official SSC CGL Notification. Tier-I marks are no longer counted for the final merit list; merit is strictly prepared on Tier-II Paper-I aggregate score subject to qualifying DEST & Computer module.',
    syllabusOverview: [
      {
        subject: 'Quantitative Aptitude',
        topics: ['Number Systems', 'Percentages', 'Profit & Loss', 'Ratio & Proportion', 'Time & Work', 'Time Speed & Distance', 'Algebra', 'Trigonometry', 'Geometry', 'Mensuration', 'Statistics & Probability'],
        weightage: 'High (30 Qs in Tier 2, 90 Marks)'
      },
      {
        subject: 'General Intelligence & Reasoning',
        topics: ['Analogies', 'Coding-Decoding', 'Blood Relations', 'Syllogism', 'Venn Diagrams', 'Paper Folding', 'Matrix', 'Critical Reasoning'],
        weightage: 'High (30 Qs in Tier 2, 90 Marks)'
      },
      {
        subject: 'English Language',
        topics: ['Spotting the Error', 'Fill in the Blanks', 'Synonyms/Antonyms', 'Cloze Test', 'Active/Passive Voice', 'Direct/Indirect Narration', 'Comprehension Passages'],
        weightage: 'Highest Weightage (45 Qs in Tier 2, 135 Marks)'
      },
      {
        subject: 'General Awareness',
        topics: ['History of India & National Movement', 'Indian Polity & Constitution', 'Physical Geography', 'Economy & Budget', 'General Science', 'Current Affairs (Last 1 Year)'],
        weightage: 'Moderate-High (25 Qs in Tier 2, 75 Marks)'
      }
    ]
  },
  {
    examId: 'ssc-chsl',
    name: 'Combined Higher Secondary Level (10+2) Examination (SSC CHSL)',
    shortName: 'SSC CHSL',
    conductingBody: 'Staff Selection Commission (SSC)',
    frequency: 'Annual',
    ageLimit: '18 - 27 years (Age relaxation applicable as per norms)',
    qualification: 'Passed 12th Standard (10+2) or equivalent from a recognized board',
    selectionProcess: [
      'Tier-I (CBT - Qualifying for Tier-II)',
      'Tier-II (CBT - Objective + Skill Test / Typing Test)'
    ],
    stages: [
      {
        stageName: 'Tier-I (Objective MCQ)',
        totalMarks: 200,
        totalQuestions: 100,
        durationMinutes: 60,
        negativeMarking: '0.50 mark deducted per incorrect answer',
        mode: 'Online Computer Based Examination (CBT)',
        subjectDistribution: [
          { subject: 'English Language (Basic Knowledge)', questions: 25, marks: 50 },
          { subject: 'General Intelligence (Reasoning)', questions: 25, marks: 50 },
          { subject: 'Quantitative Aptitude (Basic Arithmetic & Advanced)', questions: 25, marks: 50 },
          { subject: 'General Awareness', questions: 25, marks: 50 }
        ]
      },
      {
        stageName: 'Tier-II Paper-I (Merit Calculation)',
        totalMarks: 360,
        totalQuestions: 120,
        durationMinutes: 135,
        negativeMarking: '1 mark per incorrect question',
        mode: 'Online CBT + Typing Test',
        subjectDistribution: [
          { subject: 'Mathematical Abilities', questions: 30, marks: 90 },
          { subject: 'Reasoning & General Intelligence', questions: 30, marks: 90 },
          { subject: 'English Language & Comprehension', questions: 40, marks: 120 },
          { subject: 'General Awareness', questions: 20, marks: 60 },
          { subject: 'Computer Knowledge (Qualifying)', questions: 15, marks: 45 }
        ]
      }
    ],
    officialNotificationNote: 'Pattern strictly mapped to latest SSC CHSL scheme. Covers LDC, JSA, and DEO posts.',
    syllabusOverview: [
      {
        subject: 'Arithmetic & Advanced Maths',
        topics: ['Decimals and Fractions', 'Percentage', 'Ratio & Proportion', 'Averages', 'Interest', 'Discount', 'Algebra', 'Geometry & Mensuration'],
        weightage: '25% in Tier 1, 25% in Tier 2'
      },
      {
        subject: 'General Intelligence',
        topics: ['Semantic Analogy', 'Symbolic operations', 'Venn Diagrams', 'Drawing inferences', 'Punched hole/pattern-folding', 'Number classification'],
        weightage: '25% in Tier 1, 25% in Tier 2'
      },
      {
        subject: 'English Language',
        topics: ['Common errors', 'Idioms & Phrases', 'One-word substitution', 'Spellings', 'Sentence rearrangement', 'Reading Comprehension'],
        weightage: '33% in Tier 2'
      }
    ]
  },
  {
    examId: 'ssc-gd',
    name: 'SSC GD Constable (Central Armed Police Forces, SSF, Assam Rifles)',
    shortName: 'SSC GD Constable',
    conductingBody: 'Staff Selection Commission (SSC)',
    frequency: 'Annual',
    ageLimit: '18 - 23 years (relaxations for OBC/SC/ST/Ex-Servicemen)',
    qualification: 'Matriculation (10th Pass) from a recognized Board/University',
    selectionProcess: [
      'Computer Based Examination (CBE)',
      'Physical Standard Test (PST) & Physical Efficiency Test (PET)',
      'Detailed Medical Examination (DME) & Document Verification'
    ],
    stages: [
      {
        stageName: 'Computer Based Examination (80 Questions - 160 Marks)',
        totalMarks: 160,
        totalQuestions: 80,
        durationMinutes: 60,
        negativeMarking: '0.25 marks deducted for each wrong answer',
        mode: 'Online Computer Based Examination (13 Regional Languages available)',
        subjectDistribution: [
          { subject: 'Part A: General Intelligence and Reasoning', questions: 20, marks: 40 },
          { subject: 'Part B: General Knowledge and General Awareness', questions: 20, marks: 40 },
          { subject: 'Part C: Elementary Mathematics', questions: 20, marks: 40 },
          { subject: 'Part D: English or Hindi (Candidate’s Choice)', questions: 20, marks: 40 }
        ]
      }
    ],
    officialNotificationNote: 'Candidates can choose between General Hindi or General English for Part D. Negative marking is officially 0.25 marks per wrong answer for 2-mark questions.',
    syllabusOverview: [
      {
        subject: 'Elementary Mathematics',
        topics: ['Number Systems', 'Computation of Whole Numbers', 'Decimals & Fractions', 'Percentages', 'Ratio & Proportion', 'Averages', 'Interest', 'Profit and Loss', 'Mensuration', 'Time and Distance', 'Time and Work'],
        weightage: '20 Questions (40 Marks)'
      },
      {
        subject: 'General Hindi / English',
        topics: ['वर्तनी शुद्धि', 'पर्यायवाची व विलोम शब्द', 'मुहावरे व लोकोक्तियाँ', 'रिक्त स्थान पूर्ति', 'वाक्यांश के लिए एक शब्द', 'गद्यांश पर आधारित प्रश्न'],
        weightage: '20 Questions (40 Marks)'
      },
      {
        subject: 'General Intelligence & Reasoning',
        topics: ['Analogies', 'Similarities and Differences', 'Spatial Visualization', 'Visual Memory', 'Discrimination', 'Observation', 'Arithmetical Series', 'Coding and Decoding'],
        weightage: '20 Questions (40 Marks)'
      }
    ]
  },
  {
    examId: 'ssc-mts',
    name: 'Multi-Tasking (Non-Technical) Staff & Havaldar Examination',
    shortName: 'SSC MTS',
    conductingBody: 'Staff Selection Commission (SSC)',
    frequency: 'Annual',
    ageLimit: '18 - 25 years (MTS) / 18 - 27 years (Havaldar)',
    qualification: 'Passed Matriculation (10th Class) Examination from a recognized board',
    selectionProcess: [
      'Session-I (Numerical Ability + Reasoning, No Negative Marking, Qualifying)',
      'Session-II (General Awareness + English, Negative Marking, Final Merit basis)',
      'Physical Efficiency Test (PET)/Physical Standard Test (PST) only for Havaldar'
    ],
    stages: [
      {
        stageName: 'Session-I (Qualifying - No Negative Marking)',
        totalMarks: 120,
        totalQuestions: 40,
        durationMinutes: 45,
        negativeMarking: 'No Negative Marking in Session-I',
        mode: 'Online Computer Based Examination (CBT)',
        subjectDistribution: [
          { subject: 'Numerical and Mathematical Ability', questions: 20, marks: 60 },
          { subject: 'Reasoning Ability and Problem Solving', questions: 20, marks: 60 }
        ]
      },
      {
        stageName: 'Session-II (Decides Final Merit - Has Negative Marking)',
        totalMarks: 150,
        totalQuestions: 50,
        durationMinutes: 45,
        negativeMarking: '1 mark deducted for each wrong answer',
        mode: 'Online Computer Based Examination (CBT)',
        subjectDistribution: [
          { subject: 'General Awareness (History, Polity, Geography, Current)', questions: 25, marks: 75 },
          { subject: 'English Language and Comprehension', questions: 25, marks: 75 }
        ]
      }
    ],
    officialNotificationNote: 'Critical insight: Session-I is merely qualifying with no negative marking! The final selection and state allocation is 100% dependent on Session-II (General Awareness & English).',
    syllabusOverview: [
      {
        subject: 'General Awareness & Static GK',
        topics: ['Indian Heritage & Culture', 'Civics & Indian Polity', 'Economics', 'General Science up to 10th standard', 'Environmental studies'],
        weightage: '75 Marks (Final Merit Decider)'
      },
      {
        subject: 'English Language',
        topics: ['Vocabulary', 'Grammar', 'Sentence structure', 'Synonyms & Antonyms', 'Reading Comprehension'],
        weightage: '75 Marks (Final Merit Decider)'
      }
    ]
  },
  {
    examId: 'railway-ntpc',
    name: 'Railway Recruitment Boards (RRB) - Non-Technical Popular Categories (NTPC)',
    shortName: 'Railway NTPC',
    conductingBody: 'Railway Recruitment Control Board (Ministry of Railways)',
    frequency: 'Periodic Recruitment',
    ageLimit: '18 - 30 years (Undergraduate) / 18 - 33 years (Graduate level)',
    qualification: '12th Pass or Bachelor’s Degree depending on Level 2/3 vs Level 4/5/6 posts',
    selectionProcess: [
      '1st Stage Computer Based Test (CBT-1 - Screening/Common for all)',
      '2nd Stage Computer Based Test (CBT-2 - Level specific exam)',
      'CBAT (Computer Based Aptitude Test for Station Master) / Typing Skill Test',
      'Document Verification & Medical Examination'
    ],
    stages: [
      {
        stageName: '1st Stage CBT (Screening Test - 100 Questions)',
        totalMarks: 100,
        totalQuestions: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd (0.33) marks deducted per wrong answer',
        mode: 'Online Computer Based Test',
        subjectDistribution: [
          { subject: 'General Awareness (GK, Current Affairs, Science)', questions: 40, marks: 40 },
          { subject: 'Mathematics (Arithmetic & Advanced Basics)', questions: 30, marks: 30 },
          { subject: 'General Intelligence and Reasoning', questions: 30, marks: 30 }
        ]
      },
      {
        stageName: '2nd Stage CBT (Selection Test - 120 Questions)',
        totalMarks: 120,
        totalQuestions: 120,
        durationMinutes: 90,
        negativeMarking: '1/3rd (0.33) marks deducted per wrong answer',
        mode: 'Online Computer Based Test',
        subjectDistribution: [
          { subject: 'General Awareness', questions: 50, marks: 50 },
          { subject: 'Mathematics', questions: 35, marks: 35 },
          { subject: 'General Intelligence and Reasoning', questions: 35, marks: 35 }
        ]
      }
    ],
    officialNotificationNote: 'Railway exams have strict 1/3 negative marking. General Awareness carries the lion’s share (40 marks in CBT 1 and 50 marks in CBT 2).',
    syllabusOverview: [
      {
        subject: 'General Awareness',
        topics: ['Current Events of National and International Importance', 'Games and Sports', 'Art and Culture of India', 'Indian Literature', 'Monuments and Places of India', 'General Science and Life Science up to 10th CBSE', 'History of India and Freedom Struggle'],
        weightage: '40% in CBT-1, 41.7% in CBT-2'
      },
      {
        subject: 'Mathematics',
        topics: ['Number System', 'Decimals', 'Fractions', 'LCM & HCF', 'Ratio and Proportions', 'Percentage', 'Mensuration', 'Time and Work', 'Time and Distance', 'Simple and Compound Interest', 'Profit and Loss', 'Elementary Algebra', 'Geometry and Trigonometry'],
        weightage: '30 Qs in CBT-1, 35 Qs in CBT-2'
      }
    ]
  },
  {
    examId: 'railway-group-d',
    name: 'RRB Group D / Level 1 (Track Maintainer, Pointsman, Assistant)',
    shortName: 'Railway Group D',
    conductingBody: 'Railway Recruitment Cell (RRC) / Railway Recruitment Board (RRB)',
    frequency: 'Periodic Recruitment',
    ageLimit: '18 - 33 years (plus standard age relaxation)',
    qualification: '10th Pass (Matriculation) or ITI from institutions recognized by NCVT/SCVT',
    selectionProcess: [
      'Single Stage Computer Based Test (CBT)',
      'Physical Efficiency Test (PET - Running with weight)',
      'Document Verification & Medical Examination'
    ],
    stages: [
      {
        stageName: 'Computer Based Test (100 Questions - 90 Minutes)',
        totalMarks: 100,
        totalQuestions: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd (0.33) marks deducted for wrong answers',
        mode: 'Online Computer Based Test',
        subjectDistribution: [
          { subject: 'General Science (Physics, Chemistry, Life Science of 10th standard)', questions: 25, marks: 25 },
          { subject: 'Mathematics', questions: 25, marks: 25 },
          { subject: 'General Intelligence and Reasoning', questions: 30, marks: 30 },
          { subject: 'General Awareness and Current Affairs', questions: 20, marks: 20 }
        ]
      }
    ],
    officialNotificationNote: 'General Science of Class 10 NCERT standard carries 25 dedicated questions. High physical fitness required for PET (running 1000m and lifting 35kg weight).',
    syllabusOverview: [
      {
        subject: 'General Science (NCERT 10th)',
        topics: ['Physics (Laws of Motion, Work Energy, Optics, Electricity)', 'Chemistry (Periodic Table, Chemical Reactions, Acids & Bases)', 'Life Sciences / Biology (Human Physiology, Nutrition, Genetics)'],
        weightage: '25 Questions (25 Marks)'
      },
      {
        subject: 'General Intelligence & Reasoning',
        topics: ['Analogies', 'Alphabetical and Number Series', 'Coding and Decoding', 'Mathematical operations', 'Relationships', 'Syllogism', 'Jumbling', 'Venn Diagram', 'Data Interpretation'],
        weightage: '30 Questions (30 Marks)'
      }
    ]
  },
  {
    examId: 'up-police',
    name: 'Uttar Pradesh Police Recruitment (Constable & Sub Inspector)',
    shortName: 'UP Police Constable / SI',
    conductingBody: 'UP Police Recruitment & Promotion Board (UPPRPB, Lucknow)',
    frequency: 'State Regular Recruitment',
    ageLimit: '18 - 25 years (Constable with state concessions) / 21 - 28 years (SI)',
    qualification: 'Intermediate (12th Pass) for Constable; Graduate in any stream for Sub-Inspector',
    selectionProcess: [
      'Written Examination (OMR Offline / Hybrid)',
      'Document Verification & Physical Standard Test (PST)',
      'Physical Efficiency Test (Race: 4.8 km in 25 mins for male candidates)'
    ],
    stages: [
      {
        stageName: 'Written Examination (150 Questions - 300 Marks)',
        totalMarks: 300,
        totalQuestions: 150,
        durationMinutes: 120,
        negativeMarking: '0.50 marks deducted for each wrong answer (Each question carries 2 marks)',
        mode: 'OMR Based Offline / Hybrid Examination',
        subjectDistribution: [
          { subject: 'सामान्य ज्ञान (General Knowledge & UP Special)', questions: 38, marks: 76 },
          { subject: 'सामान्य हिन्दी (General Hindi)', questions: 37, marks: 74 },
          { subject: 'संख्यात्मक एवं मानसिक योग्यता (Numerical & Mental Ability)', questions: 38, marks: 76 },
          { subject: 'मानसिक अभिरुचि, बुद्धिलब्धि एवं तार्किक क्षमता (Mental Aptitude & Reasoning)', questions: 37, marks: 74 }
        ]
      }
    ],
    officialNotificationNote: 'General Hindi holds 37 questions (74 marks) and is the highest-scoring scoring section! UP Special GK, Internal Security, Human Rights, and Police System questions are specifically included.',
    syllabusOverview: [
      {
        subject: 'सामान्य हिन्दी (Samanya Hindi)',
        topics: ['हिन्दी वर्णमाला', 'तद्भव-तत्सम', 'पर्यायवाची', 'विलोम', 'अनेकार्थक', 'वाक्यांशों के स्थान पर एक शब्द', 'समरूपी भिन्नार्थक शब्द', 'अशुद्ध वाक्यों को शुद्ध करना', 'लिंग, वचन, कारक, सर्वनाम, विशेषण, क्रिया, काल, वाच्य', 'अव्यय, उपसर्ग, प्रत्यय, संधि, समास, विराम-चिन्ह', 'मुहावरे एवं लोकोक्तियां', 'रस, छन्द, अलंकार', 'अपठित बोध', 'प्रसिद्ध कवि, लेखक एवं उनकी प्रसिद्ध रचनाएं', 'हिन्दी भाषा में पुरस्कार'],
        weightage: '37 Questions (74 Marks - Prime Scoring)'
      },
      {
        subject: 'सामान्य ज्ञान (GK & UP Special)',
        topics: ['सामान्य विज्ञान', 'भारत का इतिहास', 'भारतीय संविधान', 'भारतीय अर्थव्यवस्था एवं संस्कृति', 'भारतीय कृषि, वाणिज्य एवं व्यापार', 'जनसंख्या, पर्यावरण एवं नगरीकरण', 'उत्तर प्रदेश की शिक्षा संस्कृति और सामाजिक प्रथाओं के सम्बन्ध में विशिष्ट जानकारी', 'राजस्व, पुलिस व प्रशासनिक व्यवस्था', 'मानवाधिकार', 'विमुद्रीकरण और उसका प्रभाव', 'जीएसटी', 'सोशल मीडिया कम्युनिकेशन'],
        weightage: '38 Questions (76 Marks)'
      }
    ]
  },
  {
    examId: 'upsssc-pet',
    name: 'Uttar Pradesh Subordinate Services Selection Commission - PET',
    shortName: 'UPSSSC PET',
    conductingBody: 'UPSSSC, Lucknow',
    frequency: 'Annual Eligibility Test (Score card valid for 1 Year)',
    ageLimit: '18 - 40 years',
    qualification: 'High School (10th Pass) or higher educational qualification',
    selectionProcess: [
      'Preliminary Eligibility Test (PET Written Exam)',
      'Mains Exam / Skill test for Group C posts (Lekhpal, VDO, Junior Assistant, Cane Supervisor) based on PET Percentile'
    ],
    stages: [
      {
        stageName: 'PET Written Examination (100 Questions - 100 Marks)',
        totalMarks: 100,
        totalQuestions: 100,
        durationMinutes: 120,
        negativeMarking: '1/4th (0.25) marks deducted per wrong response',
        mode: 'OMR Offline Examination',
        subjectDistribution: [
          { subject: 'भारतीय इतिहास (Indian History)', questions: 5, marks: 5 },
          { subject: 'भारतीय राष्ट्रीय आन्दोलन (National Movement)', questions: 5, marks: 5 },
          { subject: 'भूगोल (Geography)', questions: 5, marks: 5 },
          { subject: 'भारतीय अर्थव्यवस्था (Economy)', questions: 5, marks: 5 },
          { subject: 'भारतीय संविधान एवं लोक प्रशासन (Polity)', questions: 5, marks: 5 },
          { subject: 'सामान्य विज्ञान (General Science)', questions: 5, marks: 5 },
          { subject: 'प्रारम्भिक अंकगणित (Elementary Arithmetic)', questions: 5, marks: 5 },
          { subject: 'सामान्य हिन्दी (General Hindi)', questions: 5, marks: 5 },
          { subject: 'सामान्य अंग्रेजी (General English)', questions: 5, marks: 5 },
          { subject: 'तर्क एवं तर्कशक्ति (Logic & Reasoning)', questions: 5, marks: 5 },
          { subject: 'समसामयिकी (Current Affairs)', questions: 10, marks: 10 },
          { subject: 'सामान्य जागरूकता (General Awareness)', questions: 10, marks: 10 },
          { subject: 'अपठित हिन्दी गद्यांश का विवेचन (Hindi Passages)', questions: 10, marks: 10 },
          { subject: 'ग्राफ की व्याख्या एवं विश्लेषण (Graph DI)', questions: 10, marks: 10 },
          { subject: 'तालिका की व्याख्या एवं विश्लेषण (Table DI)', questions: 10, marks: 10 }
        ]
      }
    ],
    officialNotificationNote: 'PET official notification specifies exactly 15 sub-sections with defined marks (e.g. Graph interpretation 10 marks, Table interpretation 10 marks, Hindi passage 10 marks).',
    syllabusOverview: [
      {
        subject: 'Data Interpretation (Graph & Table)',
        topics: ['2 Graphs (10 questions total)', '2 Tables (10 questions total) testing percentage, average, and ratio'],
        weightage: '20 Marks (20% of exam!)'
      },
      {
        subject: 'Current Affairs & General Awareness',
        topics: ['National & International Current Affairs (10 Marks)', 'India and its neighbours, Capitals, Currencies, Parliaments, Days, UNESCO sites, Dances (10 Marks)'],
        weightage: '20 Marks'
      }
    ]
  },
  {
    examId: 'army-agniveer',
    name: 'Indian Army Agniveer (General Duty, Tech, Clerk / SKT, Tradesmen)',
    shortName: 'Army Agniveer',
    conductingBody: 'Join Indian Army (Directorate General of Recruiting)',
    frequency: 'Bi-annual / Rally Schedule',
    ageLimit: '17.5 - 21 years',
    qualification: 'Class 10th / Matric with 45% marks in aggregate for GD; 10+2 with 60% for Clerk/SKT',
    selectionProcess: [
      'Phase 1: Online Common Entrance Examination (CEE)',
      'Phase 2: Recruitment Rally (1.6 km Run, Beam/Pull-ups, 9ft Ditch, Zig-Zag balance)',
      'Adaptability Test & Medical Examination'
    ],
    stages: [
      {
        stageName: 'Online CEE (Agniveer GD - 50 Questions)',
        totalMarks: 100,
        totalQuestions: 50,
        durationMinutes: 60,
        negativeMarking: '0.50 marks deducted for each wrong answer (2 marks per question)',
        mode: 'Online Computer Based Examination (CEE)',
        subjectDistribution: [
          { subject: 'General Knowledge (History, Geography, Defence, National)', questions: 15, marks: 30 },
          { subject: 'General Science (Basic Physics, Chemistry, Biology)', questions: 15, marks: 30 },
          { subject: 'Mathematics (Basic Arithmetic, Algebra, Mensuration)', questions: 15, marks: 30 },
          { subject: 'Logical Reasoning (Basic sequence, relations, directions)', questions: 5, marks: 10 }
        ]
      }
    ],
    officialNotificationNote: 'Phase 1 is now an Online CEE. Passing the CEE shortlists candidates for the Physical Fitness Test (Group 1: 5 min 30 sec for 1.6 km = 60 marks; 10 pull-ups = 40 marks).',
    syllabusOverview: [
      {
        subject: 'General Knowledge',
        topics: ['Abbreviations', 'Sports & Trophies', 'Awards & Prizes', 'History of India', 'Geography (Capitals, Rivers, Ports)', 'Indian Armed Forces ranks and commands'],
        weightage: '15 Questions (30 Marks)'
      },
      {
        subject: 'General Science & Maths',
        topics: ['Food and Nutrition', 'Human Body Systems', 'Basic physics principles', 'Arithmetic (HCF, LCM, Percentage, Profit & Loss, Work & Time)'],
        weightage: '30 Questions (60 Marks)'
      }
    ]
  }
];
