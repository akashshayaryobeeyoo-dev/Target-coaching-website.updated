import { MockTest, CourseBatch, Announcement } from '../types';
import { SYLLABUS_DATA } from './syllabusData';

// Extract all questions across subjects for test construction
const allSubjectQuestions = SYLLABUS_DATA.flatMap(s => 
  s.chapters.flatMap(c => c.practiceQuestions)
);

export const MOCK_TESTS: MockTest[] = [
  {
    id: 'test-cgl-1',
    title: 'SSC CGL & CHSL Tier-I Full Length Mock 01',
    titleHindi: 'एसएससी सीजीएल एवं सीएचएसएल टियर-I फुल लेंथ मॉक 01',
    subtitle: 'Balanced 20-Question Sprint covering Maths, Reasoning, English & GK',
    subtitleHindi: 'गणित, तर्कशक्ति, अंग्रेजी एवं सामान्य ज्ञान का 20-प्रश्नों का संतुलित अभ्यास',
    category: 'Full Mock',
    examId: 'ssc-cgl',
    durationMinutes: 20,
    totalMarks: 40,
    negativeMarking: 0.50,
    questions: allSubjectQuestions.slice(0, 15),
    instructions: [
      'Each question carries 2 marks.',
      'There is a negative marking of 0.50 marks for each incorrect response.',
      'You can navigate between questions using the Question Palette on the right.',
      'Click "Save & Next" to record your response.',
      'Click "Submit Test" when you are finished.'
    ],
    instructionsHindi: [
      'प्रत्येक प्रश्न 2 अंक का है।',
      'प्रत्येक गलत उत्तर के लिए 0.50 अंक का नकारात्मक अंकन (नेगेटिव मार्किंग) है।',
      'दाईं ओर स्थित प्रश्न पैलेट का उपयोग करके आप किसी भी प्रश्न पर जा सकते हैं।',
      'अपना उत्तर दर्ज करने के लिए "उत्तर सहेजें एवं अगला" पर क्लिक करें।',
      'परीक्षा समाप्त होने पर "परीक्षा जमा करें" पर क्लिक करें।'
    ]
  },
  {
    id: 'test-up-police-1',
    title: 'UP Police Constable & SI Special Test',
    titleHindi: 'उत्तर प्रदेश पुलिस कांस्टेबल एवं एसआई स्पेशल टेस्ट',
    subtitle: 'High weightage on Samanya Hindi, Reasoning, Maths & UP GK',
    subtitleHindi: 'सामान्य हिन्दी, तर्कशक्ति, गणित एवं यूपी जीके पर आधारित विशेष टेस्ट',
    category: 'Full Mock',
    examId: 'up-police',
    durationMinutes: 25,
    totalMarks: 50,
    negativeMarking: 0.50,
    questions: allSubjectQuestions.filter(q => 
      q.subjectId === 'hindi' || q.subjectId === 'reasoning' || q.subjectId === 'maths' || q.subjectId === 'gk'
    ).slice(0, 16),
    instructions: [
      'Designed specifically on UPPRPB official question format.',
      'Each correct question awards 2 marks.',
      'Negative marking: 0.50 marks per wrong answer.',
      'Attempt all questions carefully.'
    ],
    instructionsHindi: [
      'उत्तर प्रदेश पुलिस भर्ती एवं प्रोन्नति बोर्ड (UPPRPB) के आधिकारिक प्रारूप पर आधारित।',
      'प्रत्येक सही उत्तर के लिए 2 अंक दिए जाएंगे।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 0.50 अंक काटे जाएंगे।',
      'सभी प्रश्नों को ध्यानपूर्वक हल करें।'
    ]
  },
  {
    id: 'test-math-speed',
    title: 'Mathematics Speed Drill by Ashvani Sir',
    titleHindi: 'गणित स्पीड ड्रिल - अश्वनी सर',
    subtitle: 'Concept clarity and calculation speed on Number System, CI/SI & Algebra',
    subtitleHindi: 'संख्या पद्धति, चक्रवृद्धि ब्याज एवं बीजगणित पर त्वरित हल तकनीक',
    category: 'Subject Test',
    subjectId: 'maths',
    durationMinutes: 15,
    totalMarks: 22,
    negativeMarking: 0.25,
    questions: allSubjectQuestions.filter(q => q.subjectId === 'maths'),
    instructions: [
      'Focus on using Ashvani Sir shortcuts and elimination techniques.',
      'Negative marking: 0.25 marks per wrong answer.',
      '11 High-yield questions.'
    ],
    instructionsHindi: [
      'अश्वनी सर के शॉर्टकट और विकल्प निष्कासन (Elimination) तकनीक का प्रयोग करें।',
      'प्रत्येक गलत उत्तर पर 0.25 अंक काटा जाएगा।',
      '11 महत्वपूर्ण परीक्षा-उपयोगी प्रश्न।'
    ]
  },
  {
    id: 'test-hindi-special',
    title: 'सामान्य हिन्दी (Samanya Hindi) 100% Score Test',
    titleHindi: 'सामान्य हिन्दी (Samanya Hindi) 100% स्कोर टेस्ट',
    subtitle: 'वर्णमाला, संधि, समास, तत्सम-तद्भव, रस, छंद, अलंकार एवं मुहावरे',
    subtitleHindi: 'वर्णमाला, संधि, समास, तत्सम-तद्भव, रस, छंद, अलंकार एवं मुहावरे',
    category: 'Subject Test',
    subjectId: 'hindi',
    durationMinutes: 15,
    totalMarks: 20,
    negativeMarking: 0.50,
    questions: allSubjectQuestions.filter(q => q.subjectId === 'hindi'),
    instructions: [
      'उत्तर प्रदेश पुलिस एवं UPSSSC PET के लिए अत्यंत उपयोगी।',
      'प्रत्येक प्रश्न 2 अंक का है।',
      'गलत उत्तर पर 0.50 अंक काटा जाएगा।'
    ],
    instructionsHindi: [
      'उत्तर प्रदेश पुलिस एवं UPSSSC PET के लिए अत्यंत उपयोगी।',
      'प्रत्येक प्रश्न 2 अंक का है।',
      'गलत उत्तर पर 0.50 अंक काटा जाएगा।'
    ]
  },
  {
    id: 'test-railway-1',
    title: 'Railway NTPC & Group D CBT Sprint',
    titleHindi: 'रेलवे एनटीपीसी एवं ग्रुप डी सीबीटी स्प्रिंट',
    subtitle: 'General Science, Mathematics & Reasoning intensive test',
    subtitleHindi: 'सामान्य विज्ञान, गणित एवं तर्कशक्ति पर केंद्रित विशेष मॉक टेस्ट',
    category: 'Full Mock',
    examId: 'railway-ntpc',
    durationMinutes: 18,
    totalMarks: 30,
    negativeMarking: 0.33,
    questions: allSubjectQuestions.filter(q => 
      q.subjectId === 'maths' || q.subjectId === 'gk' || q.subjectId === 'ga'
    ).slice(0, 12),
    instructions: [
      'Official RRB pattern with 1/3 (0.33) negative marking.',
      'Do not guess randomly to avoid negative score penalties.'
    ],
    instructionsHindi: [
      'आरआरबी आधिकारिक पैटर्न के अनुसार 1/3 (0.33) नेगेटिव मार्किंग लागू है।',
      'अनावश्यक अनुमान न लगाएं ताकि नकारात्मक अंकों से बचा जा सके।'
    ]
  },
  {
    id: 'test-army-agniveer',
    title: 'Army Agniveer CEE Model Paper',
    titleHindi: 'आर्मी अग्निवीर सीईई मॉडल टेस्ट पेपर',
    subtitle: 'General Knowledge, General Science and Basic Arithmetic',
    subtitleHindi: 'सामान्य ज्ञान, सामान्य विज्ञान एवं प्रारंभिक अंकगणित',
    category: 'Full Mock',
    examId: 'army-agniveer',
    durationMinutes: 15,
    totalMarks: 24,
    negativeMarking: 0.50,
    questions: allSubjectQuestions.filter(q => 
      q.subjectId === 'maths' || q.subjectId === 'gk' || q.subjectId === 'ga'
    ).slice(0, 10),
    instructions: [
      'Official CEE standard questions.',
      'Each question awards 2 marks.',
      '0.50 marks negative deduction.'
    ],
    instructionsHindi: [
      'भारतीय सेना ऑनलाइन सीईई परीक्षा के आधिकारिक स्तर के प्रश्न।',
      'प्रत्येक प्रश्न के लिए 2 अंक निर्धारित हैं।',
      'प्रत्येक गलत उत्तर पर 0.50 अंक काटे जाएंगे।'
    ]
  },
  {
    id: 'test-reasoning-speed',
    title: 'Reasoning & Intelligence Speed Booster',
    titleHindi: 'तर्कशक्ति एवं बुद्धि परीक्षा स्पीड बूस्टर',
    subtitle: 'Analogy, Coding-Decoding, Syllogism & Blood Relations with quick elimination',
    subtitleHindi: 'सादृश्यता, कोडिंग-डिकोडिंग, न्याय निगमन एवं रक्त संबंध त्वरित हल',
    category: 'Subject Test',
    subjectId: 'reasoning',
    durationMinutes: 15,
    totalMarks: 24,
    negativeMarking: 0.25,
    questions: allSubjectQuestions.filter(q => q.subjectId === 'reasoning').slice(0, 12),
    instructions: [
      'Focus on speed and mental elimination without lengthy rough work.',
      'Negative marking: 0.25 marks per incorrect response.',
      '12 Curated questions covering high-frequency exam patterns.'
    ],
    instructionsHindi: [
      'त्वरित मानसिक निष्कासन (Mental Elimination) पर ध्यान दें।',
      'प्रत्येक गलत उत्तर पर 0.25 अंक का नकारात्मक अंकन होगा।',
      'परीक्षा में बार-बार पूछे जाने वाले 12 चयनित प्रश्न।'
    ]
  },
  {
    id: 'test-gk-sprint',
    title: 'General Knowledge (Static GK & Science) Test',
    titleHindi: 'सामान्य ज्ञान (स्टैटिक जीके एवं विज्ञान) टेस्ट',
    subtitle: 'History, Indian Constitution, Geography, Biology & Physics essential set',
    subtitleHindi: 'इतिहास, संविधान, भूगोल, जीव विज्ञान एवं भौतिकी का महत्वपूर्ण अभ्यास',
    category: 'Subject Test',
    subjectId: 'gk',
    durationMinutes: 12,
    totalMarks: 24,
    negativeMarking: 0.33,
    questions: allSubjectQuestions.filter(q => q.subjectId === 'gk').slice(0, 12),
    instructions: [
      'Direct factual recall test based on previous 5-year TCS and state exam patterns.',
      'Negative marking: 0.33 marks per incorrect answer.'
    ],
    instructionsHindi: [
      'पिछले 5 वर्षों के टीसीएस और राज्य भर्ती बोर्ड प्रारूप पर आधारित तथ्यात्मक टेस्ट।',
      'प्रत्येक गलत उत्तर पर 0.33 अंक का नकारात्मक अंकन है।'
    ]
  },
  {
    id: 'test-ga-current',
    title: 'Current Affairs & Government Schemes Test',
    titleHindi: 'समसामयिकी एवं सरकारी योजनाएं टेस्ट',
    subtitle: 'National, International summits, Sports, Awards, and UP special developments',
    subtitleHindi: 'राष्ट्रीय, अंतर्राष्ट्रीय शिखर सम्मेलन, खेलकूद, पुरस्कार एवं यूपी विशेष',
    category: 'Subject Test',
    subjectId: 'ga',
    durationMinutes: 10,
    totalMarks: 20,
    negativeMarking: 0.25,
    questions: allSubjectQuestions.filter(q => q.subjectId === 'ga').slice(0, 10),
    instructions: [
      'Latest national policies, sports championships, and global indices.',
      'Attempt within 10 minutes to train exam pacing.'
    ],
    instructionsHindi: [
      'नवीनतम राष्ट्रीय नीतियां, खेल प्रतियोगिताएं एवं वैश्विक सूचकांक।',
      'परीक्षा गति के अभ्यास हेतु 10 मिनट में हल करने का प्रयास करें।'
    ]
  },
  {
    id: 'test-english-mastery',
    title: 'General English Grammar & Vocabulary Test',
    titleHindi: 'सामान्य अंग्रेजी व्याकरण एवं शब्द-भंडार टेस्ट',
    subtitle: 'Error spotting, Voice, Narration, Prepositions, Synonyms & Idioms',
    subtitleHindi: 'एरर स्पॉटिंग, वॉइस, नरेशन, प्रीपोजिशन, सिनोनिम्स एवं इडियम्स',
    category: 'Subject Test',
    subjectId: 'english',
    durationMinutes: 15,
    totalMarks: 24,
    negativeMarking: 0.50,
    questions: allSubjectQuestions.filter(q => q.subjectId === 'english').slice(0, 12),
    instructions: [
      'Strict adherence to standard SSC English syllabus and grammatical concord rules.',
      'Negative marking: 0.50 marks per wrong answer.'
    ],
    instructionsHindi: [
      'मानक एसएससी अंग्रेजी पाठ्यक्रम एवं व्याकरण नियमों के अनुसार तैयार।',
      'प्रत्येक गलत उत्तर पर 0.50 अंक काटा जाएगा।'
    ]
  },
  {
    id: 'test-upsssc-pet-1',
    title: 'UPSSSC PET Full Syllabus Mock Test',
    titleHindi: 'यूपीएसएसएससी पीईटी संपूर्ण पाठ्यक्रम मॉक टेस्ट',
    subtitle: 'General Hindi, GK, UP Special, Maths & Reasoning as per PET official syllabus',
    subtitleHindi: 'सामान्य हिन्दी, सामान्य ज्ञान, यूपी विशेष, प्रारंभिक अंकगणित एवं तर्कशक्ति',
    category: 'Full Mock',
    examId: 'upsssc-pet',
    durationMinutes: 20,
    totalMarks: 30,
    negativeMarking: 0.25,
    questions: allSubjectQuestions.filter(q => 
      q.subjectId === 'hindi' || q.subjectId === 'gk' || q.subjectId === 'ga' || q.subjectId === 'maths' || q.subjectId === 'reasoning'
    ).slice(0, 15),
    instructions: [
      'Exact 1/4th (0.25) negative marking as mandated in official UPSSSC PET notification.',
      'Balanced distribution across General Hindi, History, Polity and Elementary Arithmetic.'
    ],
    instructionsHindi: [
      'आधिकारिक यूपीएसएसएससी पीईटी अधिसूचना के अनुरूप 1/4 (0.25) नेगेटिव मार्किंग।',
      'सामान्य हिन्दी, इतिहास, संविधान और प्रारंभिक अंकगणित का संतुलित समावेश।'
    ]
  },
  {
    id: 'test-ssc-gd-1',
    title: 'SSC GD Constable All-Subject Mock Test',
    titleHindi: 'एसएससी जीडी कांस्टेबल ऑल-सब्जेक्ट मॉक टेस्ट',
    subtitle: 'Elementary Mathematics, Reasoning, General Awareness & Hindi/English',
    subtitleHindi: 'प्रारंभिक गणित, सामान्य बुद्धिमत्ता, सामान्य जानकारी एवं हिन्दी',
    category: 'Full Mock',
    examId: 'ssc-gd',
    durationMinutes: 20,
    totalMarks: 40,
    negativeMarking: 0.50,
    questions: allSubjectQuestions.filter(q => 
      q.subjectId === 'maths' || q.subjectId === 'reasoning' || q.subjectId === 'gk' || q.subjectId === 'hindi'
    ).slice(0, 16),
    instructions: [
      'Strictly aligned with Computer-Based Examination (CBE) pattern of SSC GD.',
      '2 marks per question; 0.50 negative marking.'
    ],
    instructionsHindi: [
      'एसएससी जीडी के कंप्यूटर आधारित परीक्षा (CBE) पैटर्न के अनुरूप।',
      'प्रत्येक प्रश्न 2 अंक का; 0.50 नेगेटिव मार्किंग।'
    ]
  }
];

export const COURSE_BATCHES: CourseBatch[] = [
  {
    id: 'batch-ssc-master',
    title: 'SSC Foundation & Target Batch 2025-26',
    badge: 'Most Popular',
    targetExams: ['SSC CGL', 'SSC CHSL', 'SSC MTS', 'SSC GD Constable'],
    timings: 'Morning: 7:30 AM – 11:30 AM (4 Hours Daily)',
    dailyHours: '4 Hours (2h Maths/Reasoning + 1h English + 1h GS/CA)',
    monthlyFee: 700,
    features: [
      'Complete Tier-I & Tier-II syllabus coverage from Basic to Advanced',
      'Daily live classroom sessions by Ashvani Sir with individual doubt clearing',
      'Free printed topic-wise formula sheets, trick registers & assignment sheets',
      'Weekly Sunday Computer-Based (CBT) & OMR Mock Tests with ranking',
      'Previous 10 years TCS exam questions solved with shortcut methods',
      'Full monthly fee is only ₹700 (No advance deposit, pay month-by-month)'
    ],
    startDate: 'New Batch Starts Every Monday',
    seatsLeft: 12,
    instructor: 'Ashvani Sir (Founder & Head Faculty)'
  },
  {
    id: 'batch-police-pet',
    title: 'UP Police & UPSSSC PET Special Batch',
    badge: 'Selection Guaranteed Focus',
    targetExams: ['UP Police Constable', 'UP Police SI', 'UPSSSC PET', 'UP VDO / Lekhpal'],
    timings: 'Afternoon / Evening: 2:30 PM – 6:30 PM',
    dailyHours: '4 Hours (Special focus on Samanya Hindi & UP GK)',
    monthlyFee: 700,
    features: [
      'Exhaustive coverage of Samanya Hindi (37 Qs master preparation)',
      'Complete UP Special GK, Police administration, and Internal Security',
      'Speed calculation tricks for Numerical and Mental Ability sections',
      'Weekly OMR sheet practice strictly matching UPPRPB exam environment',
      'Physical test guidance and fitness tips by veteran physical instructors',
      'Standard affordable fee: ₹700 per month'
    ],
    startDate: 'Batches Running Fresh - Join Now',
    seatsLeft: 8,
    instructor: 'Ashvani Sir & Specialist Faculty Team'
  },
  {
    id: 'batch-railway-all',
    title: 'Railway NTPC & Group D Mahasankalp Batch',
    badge: 'High Railway Vacancy Target',
    targetExams: ['Railway NTPC (Level 2-6)', 'Railway Group D (Level 1)', 'ALP & Technician', 'RPF Constable & SI'],
    timings: 'Morning: 8:00 AM – 12:00 PM',
    dailyHours: '4 Hours (NCERT Science + Maths + Reasoning + GK)',
    monthlyFee: 700,
    features: [
      'In-depth NCERT Class 9th & 10th General Science (Physics, Chem, Bio)',
      'Railway-specific arithmetic & reasoning patterns with speed drills',
      'Previous 15 years RRB CBT questions compiled and explained',
      'Computer lab simulation for CBT exam speed and negative mark reduction',
      'Affordable education for rural & suburban aspirants: ₹700/month flat'
    ],
    startDate: 'Enrollment Open for Fresh Cycle',
    seatsLeft: 15,
    instructor: 'Ashvani Sir'
  },
  {
    id: 'batch-army-agniveer',
    title: 'Army Agniveer CEE & Physical Training Guidance Batch',
    badge: 'Discipline & Success',
    targetExams: ['Agniveer GD', 'Agniveer Technical', 'Agniveer Clerk/SKT', 'Agniveer Tradesman'],
    timings: 'Early Morning / Evening Shifts',
    dailyHours: '3.5 Hours Academic Class + Ground Guidance',
    monthlyFee: 700,
    features: [
      '100% focused on Join Indian Army Online CEE exam syllabus',
      'Mathematics, General Science & GK concepts taught from scratch',
      'Bi-weekly CEE practice tests with immediate OMR/CBT evaluations',
      'Physical fitness guidance for 1.6 km run & pull-ups parameters',
      'Fee: ₹700 per month only'
    ],
    startDate: 'New Batch Starts 1st of Every Month',
    seatsLeft: 20,
    instructor: 'Ashvani Sir'
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: '🚨 Fresh SSC CGL & UP Police Batches Commencing This Week!',
    date: 'Current Session 2025-26',
    isImportant: true,
    content: 'New morning (7:30 AM) and evening (2:30 PM) batches started at TARGET Coaching Centre. Limited seats per batch to ensure personal attention by Ashvani Sir. Monthly fee remains strictly ₹700.',
    linkText: 'Check Batches & Timing',
    linkPage: 'courses'
  },
  {
    id: 'ann-2',
    title: '📝 Free Mega All-India CBT Mock Test on Sunday 10:00 AM',
    date: 'Every Sunday',
    isImportant: true,
    content: 'Open to both offline classroom and online enrolled students. Detailed solution analysis and rank list provided by Ashvani Sir.',
    linkText: 'Take Practice Test',
    linkPage: 'tests'
  },
  {
    id: 'ann-3',
    title: '📚 Complete 6-Subject Syllabus & Formula Bank Live on Website',
    date: 'Updated Daily',
    isImportant: false,
    content: 'Students can now explore all chapters of Mathematics, Reasoning, GA, GK, Hindi and English with solved examples and chapter-wise MCQs right here on the portal.',
    linkText: 'Explore Syllabus',
    linkPage: 'syllabus'
  }
];
