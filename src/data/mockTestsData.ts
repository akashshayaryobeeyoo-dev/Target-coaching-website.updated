import { MockTest, CourseBatch, Announcement } from '../types';
import { SYLLABUS_DATA } from './syllabusData';

// Extract and categorize questions across subjects from syllabusData
const allSubjectQuestions = SYLLABUS_DATA.flatMap(s => 
  s.chapters.flatMap(c => c.practiceQuestions)
);

const mathsQuestions = allSubjectQuestions.filter(q => q.subjectId === 'maths');
const reasoningQuestions = allSubjectQuestions.filter(q => q.subjectId === 'reasoning');
const gaQuestions = allSubjectQuestions.filter(q => q.subjectId === 'ga');
const gkQuestions = allSubjectQuestions.filter(q => q.subjectId === 'gk');
const hindiQuestions = allSubjectQuestions.filter(q => q.subjectId === 'hindi');
const englishQuestions = allSubjectQuestions.filter(q => q.subjectId === 'english');

export const MOCK_TESTS: MockTest[] = [
  // ==========================================
  // 1. SSC CGL TIER-I FULL MOCK TEST
  // ==========================================
  {
    id: 'test-cgl-1',
    title: 'SSC CGL Tier-I Official Full Mock Test',
    titleHindi: 'एसएससी सीजीएल टियर-I आधिकारिक फुल मॉक टेस्ट',
    subtitle: 'Official Exam Pattern: 100 Questions, 60 Minutes (Reasoning 25, GA 25, Quant 25, English 25)',
    subtitleHindi: 'आधिकारिक परीक्षा प्रारूप: 100 प्रश्न, 60 मिनट (तर्कशक्ति 25, सामान्य ज्ञान 25, गणित 25, अंग्रेजी 25)',
    category: 'Full Mock',
    examId: 'ssc-cgl',
    durationMinutes: 60,
    officialDurationMinutes: 60,
    officialTotalQuestions: 100,
    marksPerQuestion: 2,
    totalMarks: 200,
    negativeMarking: 0.50,
    questions: [
      ...reasoningQuestions,
      ...gaQuestions,
      ...gkQuestions.slice(0, 12),
      ...mathsQuestions,
      ...englishQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'General Intelligence & Reasoning', sectionNameHindi: 'तर्कशक्ति एवं सामान्य बुद्धिमत्ता', officialQuestions: 25, availableQuestions: 20, marksPerQuestion: 2 },
      { sectionName: 'General Awareness (GK & GA)', sectionNameHindi: 'सामान्य जागरूकता एवं सामान्य ज्ञान', officialQuestions: 25, availableQuestions: 25, marksPerQuestion: 2 },
      { sectionName: 'Quantitative Aptitude (Mathematics)', sectionNameHindi: 'मात्रात्मक अभिरुचि (गणित)', officialQuestions: 25, availableQuestions: 19, marksPerQuestion: 2 },
      { sectionName: 'English Comprehension', sectionNameHindi: 'अंग्रेजी भाषा एवं बोधगम्यता', officialQuestions: 25, availableQuestions: 23, marksPerQuestion: 2 }
    ],
    instructions: [
      'Official SSC CGL Tier-I Pattern: 100 questions, 60 minutes duration.',
      'Each question carries 2 marks.',
      'There is a negative marking of 0.50 marks for each incorrect response.',
      'Use the Question Palette on the right to navigate between sections.',
      'Click "Save & Next" to record your response.',
      'The test will automatically submit when the countdown reaches 00:00:00.'
    ],
    instructionsHindi: [
      'आधिकारिक एसएससी सीजीएल टियर-I पैटर्न: 100 प्रश्न, 60 मिनट समय।',
      'प्रत्येक प्रश्न 2 अंक का है।',
      'प्रत्येक गलत उत्तर के लिए 0.50 अंक का नकारात्मक अंकन (नेगेटिव मार्किंग) है।',
      'दाईं ओर स्थित प्रश्न पैलेट का उपयोग करके किसी भी प्रश्न पर जाएं।',
      'अपना उत्तर दर्ज करने के लिए "उत्तर सहेजें एवं अगला" पर क्लिक करें।',
      'समय समाप्त (00:00:00) होने पर परीक्षा स्वतः जमा हो जाएगी।'
    ]
  },

  // ==========================================
  // 2. SSC CHSL TIER-I FULL MOCK TEST
  // ==========================================
  {
    id: 'test-chsl-1',
    title: 'SSC CHSL (10+2) Tier-I Official Full Mock Test',
    titleHindi: 'एसएससी सीएचएसएल (10+2) टियर-I आधिकारिक फुल मॉक टेस्ट',
    subtitle: 'Official Exam Pattern: 100 Questions, 60 Minutes (English 25, Reasoning 25, Quant 25, GA 25)',
    subtitleHindi: 'आधिकारिक प्रारूप: 100 प्रश्न, 60 मिनट (अंग्रेजी 25, तर्कशक्ति 25, गणित 25, सामान्य ज्ञान 25)',
    category: 'Full Mock',
    examId: 'ssc-chsl',
    durationMinutes: 60,
    officialDurationMinutes: 60,
    officialTotalQuestions: 100,
    marksPerQuestion: 2,
    totalMarks: 200,
    negativeMarking: 0.50,
    questions: [
      ...englishQuestions,
      ...reasoningQuestions,
      ...mathsQuestions,
      ...gaQuestions,
      ...gkQuestions.slice(0, 12)
    ],
    sectionBreakdown: [
      { sectionName: 'English Language (Basic Knowledge)', sectionNameHindi: 'अंग्रेजी भाषा (प्रारंभिक ज्ञान)', officialQuestions: 25, availableQuestions: 23, marksPerQuestion: 2 },
      { sectionName: 'General Intelligence (Reasoning)', sectionNameHindi: 'सामान्य बुद्धिमत्ता (तर्कशक्ति)', officialQuestions: 25, availableQuestions: 20, marksPerQuestion: 2 },
      { sectionName: 'Quantitative Aptitude (Basic Arithmetic)', sectionNameHindi: 'मात्रात्मक अभिरुचि (अंकगणित)', officialQuestions: 25, availableQuestions: 19, marksPerQuestion: 2 },
      { sectionName: 'General Awareness', sectionNameHindi: 'सामान्य जागरूकता', officialQuestions: 25, availableQuestions: 25, marksPerQuestion: 2 }
    ],
    instructions: [
      'Official SSC CHSL Tier-I Pattern: 100 Questions, 60 Minutes duration.',
      'Marking: +2 for correct, -0.50 for wrong.',
      'Navigate freely across all sections using the Question Palette.'
    ],
    instructionsHindi: [
      'आधिकारिक एसएससी सीएचएसएल टियर-I पैटर्न: 100 प्रश्न, 60 मिनट समय।',
      'अंकन: सही उत्तर पर +2, गलत उत्तर पर -0.50 अंक।',
      'प्रश्न पैलेट का उपयोग कर सभी खंडों में स्वतंत्र रूप से नेविगेट करें।'
    ]
  },

  // ==========================================
  // 3. SSC MTS SESSION-I (QUALIFYING - NO NEGATIVE)
  // ==========================================
  {
    id: 'test-mts-session1',
    title: 'SSC MTS & Havaldar - Session-I (Qualifying Test)',
    titleHindi: 'एसएससी एमटीएस एवं हवलदार - सत्र-I (क्वालीफाइंग टेस्ट)',
    subtitle: 'Official Pattern: 40 Questions, 45 Minutes (Maths 20, Reasoning 20). NO NEGATIVE MARKING.',
    subtitleHindi: 'आधिकारिक पैटर्न: 40 प्रश्न, 45 मिनट (गणित 20, तर्कशक्ति 20)। कोई नेगेटिव मार्किंग नहीं।',
    category: 'Full Mock',
    examId: 'ssc-mts',
    sessionName: 'Session-I (Qualifying)',
    sessionNameHindi: 'सत्र-I (क्वालीफाइंग)',
    durationMinutes: 45,
    officialDurationMinutes: 45,
    officialTotalQuestions: 40,
    marksPerQuestion: 3,
    totalMarks: 120,
    negativeMarking: 0.00,
    questions: [
      ...mathsQuestions,
      ...reasoningQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'Numerical and Mathematical Ability', sectionNameHindi: 'संख्यात्मक एवं गणितीय क्षमता', officialQuestions: 20, availableQuestions: 19, marksPerQuestion: 3 },
      { sectionName: 'Reasoning Ability and Problem Solving', sectionNameHindi: 'तर्कशक्ति क्षमता एवं समस्या समाधान', officialQuestions: 20, availableQuestions: 20, marksPerQuestion: 3 }
    ],
    instructions: [
      'Official SSC MTS Session-I Examination Pattern.',
      'Duration: Strictly 45 minutes.',
      'Each question carries 3 marks.',
      'CRITICAL: There is NO Negative Marking in Session-I. Attempt all questions without fear of penalties.',
      'Qualifying in Session-I is mandatory to have Session-II evaluated.'
    ],
    instructionsHindi: [
      'आधिकारिक एसएससी एमटीएस सत्र-I परीक्षा प्रारूप।',
      'समय अवधि: निश्चित 45 मिनट।',
      'प्रत्येक प्रश्न 3 अंक का है।',
      'महत्वपूर्ण: सत्र-I में कोई नेगेटिव मार्किंग नहीं है। सभी प्रश्नों को हल करने का प्रयास करें।',
      'सत्र-II के मूल्यांकन हेतु सत्र-I में क्वालीफाई करना अनिवार्य है।'
    ]
  },

  // ==========================================
  // 4. SSC MTS SESSION-II (MERIT DECIDER)
  // ==========================================
  {
    id: 'test-mts-session2',
    title: 'SSC MTS & Havaldar - Session-II (General Awareness & English)',
    titleHindi: 'एसएससी एमटीएस एवं हवलदार - सत्र-II (सामान्य जागरूकता एवं अंग्रेजी)',
    subtitle: 'Official Pattern: 50 Questions, 45 Minutes. Decides Final Selection. 1 Mark Negative Deduction.',
    subtitleHindi: 'आधिकारिक पैटर्न: 50 प्रश्न, 45 मिनट। अंतिम चयन मेरिट निर्धारण। 1 अंक नेगेटिव मार्किंग।',
    category: 'Full Mock',
    examId: 'ssc-mts',
    sessionName: 'Session-II (Merit Deciding)',
    sessionNameHindi: 'सत्र-II (मेरिट निर्धारण)',
    durationMinutes: 45,
    officialDurationMinutes: 45,
    officialTotalQuestions: 50,
    marksPerQuestion: 3,
    totalMarks: 150,
    negativeMarking: 1.00,
    questions: [
      ...gaQuestions,
      ...gkQuestions.slice(0, 12),
      ...englishQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'General Awareness', sectionNameHindi: 'सामान्य जागरूकता', officialQuestions: 25, availableQuestions: 25, marksPerQuestion: 3 },
      { sectionName: 'English Language and Comprehension', sectionNameHindi: 'अंग्रेजी भाषा एवं बोधगम्यता', officialQuestions: 25, availableQuestions: 23, marksPerQuestion: 3 }
    ],
    instructions: [
      'Official SSC MTS Session-II Examination Pattern.',
      'Duration: Strictly 45 minutes.',
      'Each question carries 3 marks.',
      'Negative marking: 1 mark will be deducted for each incorrect answer.',
      'Final selection merit list is prepared 100% based on Session-II score.'
    ],
    instructionsHindi: [
      'आधिकारिक एसएससी एमटीएस सत्र-II परीक्षा प्रारूप।',
      'समय अवधि: निश्चित 45 मिनट।',
      'प्रत्येक प्रश्न 3 अंक का है।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 1 अंक काटा जाएगा।',
      'अंतिम चयन मेरिट सूची पूर्णतः सत्र-II के प्राप्तांकों पर आधारित होती है।'
    ]
  },

  // ==========================================
  // 5. RAILWAY NTPC CBT-1
  // ==========================================
  {
    id: 'test-railway-1',
    title: 'Railway NTPC 1st Stage CBT-1 Official Mock Test',
    titleHindi: 'रेलवे एनटीपीसी प्रथम चरण सीबीटी-1 आधिकारिक मॉक टेस्ट',
    subtitle: 'Official Notification: 100 Questions, 90 Minutes (GA 40, Maths 30, Reasoning 30). 1/3 Negative Marking.',
    subtitleHindi: 'आधिकारिक अधिसूचना: 100 प्रश्न, 90 मिनट (सामान्य ज्ञान 40, गणित 30, तर्कशक्ति 30)। 1/3 (0.33) नेगेटिव मार्किंग।',
    category: 'Full Mock',
    examId: 'railway-ntpc',
    durationMinutes: 90,
    officialDurationMinutes: 90,
    officialTotalQuestions: 100,
    marksPerQuestion: 1,
    totalMarks: 100,
    negativeMarking: 0.33,
    questions: [
      ...gaQuestions,
      ...gkQuestions,
      ...mathsQuestions,
      ...reasoningQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'General Awareness (GK, Science & Current Affairs)', sectionNameHindi: 'सामान्य जागरूकता (विज्ञान, जीके एवं समसामयिकी)', officialQuestions: 40, availableQuestions: 31, marksPerQuestion: 1 },
      { sectionName: 'Mathematics', sectionNameHindi: 'गणित (अंकगणित व बीजगणित)', officialQuestions: 30, availableQuestions: 19, marksPerQuestion: 1 },
      { sectionName: 'General Intelligence and Reasoning', sectionNameHindi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति', officialQuestions: 30, availableQuestions: 20, marksPerQuestion: 1 }
    ],
    instructions: [
      'Official RRB NTPC CBT-1 Pattern: 100 Questions, 90 Minutes duration.',
      'Each question carries 1 mark.',
      'Negative marking: 1/3rd (0.33) marks deducted per incorrect answer.',
      'Timer will count down for the full 90 minutes (5400 seconds).'
    ],
    instructionsHindi: [
      'आधिकारिक आरआरबी एनटीपीसी सीबीटी-1 पैटर्न: 100 प्रश्न, 90 मिनट समय।',
      'प्रत्येक सही उत्तर के लिए 1 अंक निर्धारित है।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 1/3 (0.33) अंक काटा जाएगा।',
      'टाइमर पूरे 90 मिनट (5400 सेकंड) तक चलेगा।'
    ]
  },

  // ==========================================
  // 6. UPSSSC PET
  // ==========================================
  {
    id: 'test-upsssc-pet-1',
    title: 'UPSSSC PET Official Full Syllabus Mock Test',
    titleHindi: 'यूपीएसएसएससी पीईटी संपूर्ण पाठ्यक्रम आधिकारिक मॉक टेस्ट',
    subtitle: 'Official Pattern: 100 Questions, 120 Minutes (2 Hours). 1/4 (0.25) Negative Marking.',
    subtitleHindi: 'आधिकारिक प्रारूप: 100 प्रश्न, 120 मिनट (2 घंटे)। 1/4 (0.25) नकारात्मक अंकन।',
    category: 'Full Mock',
    examId: 'upsssc-pet',
    durationMinutes: 120,
    officialDurationMinutes: 120,
    officialTotalQuestions: 100,
    marksPerQuestion: 1,
    totalMarks: 100,
    negativeMarking: 0.25,
    questions: [
      ...hindiQuestions,
      ...mathsQuestions,
      ...reasoningQuestions,
      ...gkQuestions,
      ...gaQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'General Hindi & Passages', sectionNameHindi: 'सामान्य हिन्दी एवं अपठित गद्यांश', officialQuestions: 15, availableQuestions: 20, marksPerQuestion: 1 },
      { sectionName: 'Elementary Arithmetic & Graphs/Tables', sectionNameHindi: 'प्रारम्भिक अंकगणित एवं ग्राफ/तालिका', officialQuestions: 25, availableQuestions: 19, marksPerQuestion: 1 },
      { sectionName: 'Logic & Reasoning', sectionNameHindi: 'तर्क एवं तर्कशक्ति', officialQuestions: 5, availableQuestions: 20, marksPerQuestion: 1 },
      { sectionName: 'General Science, History, Polity & Geography', sectionNameHindi: 'सामान्य विज्ञान, इतिहास, संविधान एवं भूगोल', officialQuestions: 35, availableQuestions: 18, marksPerQuestion: 1 },
      { sectionName: 'Current Affairs & General Awareness', sectionNameHindi: 'समसामयिकी एवं सामान्य जागरूकता', officialQuestions: 20, availableQuestions: 13, marksPerQuestion: 1 }
    ],
    instructions: [
      'Official UPSSSC PET Written Examination: 100 Questions, 120 Minutes (2 Hours).',
      'Each question carries 1 mark.',
      'Negative marking: 1/4th (0.25) marks will be deducted for each incorrect answer.',
      'Timer will display 02:00:00 (120 minutes / 7200 seconds) and submit on expiry.'
    ],
    instructionsHindi: [
      'आधिकारिक यूपीएसएसएससी पीईटी परीक्षा: 100 प्रश्न, 120 मिनट (2 घंटे)।',
      'प्रत्येक प्रश्न के लिए 1 अंक निर्धारित है।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 1/4 (0.25) अंक काटा जाएगा।',
      'टाइमर 02:00:00 (120 मिनट / 7200 सेकंड) प्रदर्शित करेगा।'
    ]
  },

  // ==========================================
  // 7. UP POLICE CONSTABLE
  // ==========================================
  {
    id: 'test-up-police-1',
    title: 'UP Police Constable Official Written Exam Mock Test',
    titleHindi: 'उत्तर प्रदेश पुलिस कांस्टेबल आधिकारिक लिखित परीक्षा मॉक टेस्ट',
    subtitle: 'Official Pattern: 150 Questions, 120 Minutes (300 Marks). -0.50 Negative Marking.',
    subtitleHindi: 'आधिकारिक प्रारूप: 150 प्रश्न, 120 मिनट (300 अंक)। -0.50 नेगेटिव मार्किंग (2 अंक प्रति प्रश्न)।',
    category: 'Full Mock',
    examId: 'up-police',
    durationMinutes: 120,
    officialDurationMinutes: 120,
    officialTotalQuestions: 150,
    marksPerQuestion: 2,
    totalMarks: 300,
    negativeMarking: 0.50,
    questions: [
      ...gkQuestions,
      ...gaQuestions,
      ...hindiQuestions,
      ...mathsQuestions,
      ...reasoningQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'सामान्य ज्ञान एवं यूपी विशेष (General Knowledge)', sectionNameHindi: 'सामान्य ज्ञान एवं यूपी विशेष', officialQuestions: 38, availableQuestions: 31, marksPerQuestion: 2 },
      { sectionName: 'सामान्य हिन्दी (General Hindi)', sectionNameHindi: 'सामान्य हिन्दी', officialQuestions: 37, availableQuestions: 20, marksPerQuestion: 2 },
      { sectionName: 'संख्यात्मक एवं मानसिक योग्यता (Numerical & Mental Ability)', sectionNameHindi: 'संख्यात्मक एवं मानसिक योग्यता', officialQuestions: 38, availableQuestions: 19, marksPerQuestion: 2 },
      { sectionName: 'मानसिक अभिरुचि एवं तार्किक क्षमता (Mental Aptitude & Reasoning)', sectionNameHindi: 'मानसिक अभिरुचि एवं तार्किक क्षमता', officialQuestions: 37, availableQuestions: 20, marksPerQuestion: 2 }
    ],
    instructions: [
      'Official UPPRPB UP Police Constable Format: 150 Questions, 120 Minutes (2 Hours).',
      'Total Marks: 300 (Each correct answer awards 2 marks).',
      'Negative marking: 0.50 marks deducted for each incorrect answer.',
      'The timer will display 02:00:00 (120 minutes / 7200 seconds).'
    ],
    instructionsHindi: [
      'उत्तर प्रदेश पुलिस भर्ती एवं प्रोन्नति बोर्ड प्रारूप: 150 प्रश्न, 120 मिनट (2 घंटे)।',
      'कुल अंक: 300 (प्रत्येक सही उत्तर के लिए 2 अंक)।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 0.50 अंक काटे जाएंगे।',
      'टाइमर 02:00:00 (120 मिनट / 7200 सेकंड) का समय दर्शाएगा।'
    ]
  },

  // ==========================================
  // 8. SSC GD CONSTABLE
  // ==========================================
  {
    id: 'test-ssc-gd-1',
    title: 'SSC GD Constable (CAPFs, SSF & Rifleman) CBE Mock Test',
    titleHindi: 'एसएससी जीडी कांस्टेबल आधिकारिक कंप्यूटर आधारित परीक्षा (CBE) मॉक टेस्ट',
    subtitle: 'Official Pattern: 80 Questions, 60 Minutes (160 Marks). -0.25 Negative Marking.',
    subtitleHindi: 'आधिकारिक पैटर्न: 80 प्रश्न, 60 मिनट (160 अंक)। -0.25 नेगेटिव मार्किंग (2 अंक प्रति प्रश्न)।',
    category: 'Full Mock',
    examId: 'ssc-gd',
    durationMinutes: 60,
    officialDurationMinutes: 60,
    officialTotalQuestions: 80,
    marksPerQuestion: 2,
    totalMarks: 160,
    negativeMarking: 0.25,
    questions: [
      ...reasoningQuestions,
      ...gkQuestions.slice(0, 10),
      ...gaQuestions.slice(0, 10),
      ...mathsQuestions,
      ...hindiQuestions
    ],
    sectionBreakdown: [
      { sectionName: 'Part A: General Intelligence and Reasoning', sectionNameHindi: 'भाग क: सामान्य बुद्धिमत्ता एवं तर्कशक्ति', officialQuestions: 20, availableQuestions: 20, marksPerQuestion: 2 },
      { sectionName: 'Part B: General Knowledge and General Awareness', sectionNameHindi: 'भाग ख: सामान्य ज्ञान एवं सामान्य जानकारी', officialQuestions: 20, availableQuestions: 20, marksPerQuestion: 2 },
      { sectionName: 'Part C: Elementary Mathematics', sectionNameHindi: 'भाग ग: प्रारंभिक अंकगणित', officialQuestions: 20, availableQuestions: 19, marksPerQuestion: 2 },
      { sectionName: 'Part D: General Hindi / English', sectionNameHindi: 'भाग घ: सामान्य हिन्दी / अंग्रेजी', officialQuestions: 20, availableQuestions: 20, marksPerQuestion: 2 }
    ],
    instructions: [
      'Official SSC GD Constable CBE Pattern: 80 Questions, 60 Minutes (3600 seconds).',
      'Total Marks: 160 (Each question carries 2 marks).',
      'Negative marking: 0.25 marks deducted per wrong answer.'
    ],
    instructionsHindi: [
      'एसएससी जीडी कांस्टेबल सीबीई पैटर्न: 80 प्रश्न, 60 मिनट (3600 सेकंड)।',
      'कुल अंक: 160 (प्रत्येक प्रश्न 2 अंक का)।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 0.25 अंक काटा जाएगा।'
    ]
  },

  // ==========================================
  // 9. ARMY AGNIVEER CEE
  // ==========================================
  {
    id: 'test-army-agniveer',
    title: 'Indian Army Agniveer GD Online CEE Official Model Paper',
    titleHindi: 'भारतीय सेना अग्निवीर जीडी ऑनलाइन सीईई आधिकारिक मॉडल पेपर',
    subtitle: 'Official Pattern: 50 Questions, 60 Minutes (100 Marks). -0.50 Negative Marking.',
    subtitleHindi: 'आधिकारिक पैटर्न: 50 प्रश्न, 60 मिनट (100 अंक)। -0.50 नेगेटिव मार्किंग (2 अंक प्रति प्रश्न)।',
    category: 'Full Mock',
    examId: 'army-agniveer',
    durationMinutes: 60,
    officialDurationMinutes: 60,
    officialTotalQuestions: 50,
    marksPerQuestion: 2,
    totalMarks: 100,
    negativeMarking: 0.50,
    questions: [
      ...gkQuestions.slice(0, 15),
      ...gaQuestions,
      ...gkQuestions.slice(15, 17),
      ...mathsQuestions.slice(0, 15),
      ...reasoningQuestions.slice(0, 5)
    ],
    sectionBreakdown: [
      { sectionName: 'General Knowledge', sectionNameHindi: 'सामान्य ज्ञान', officialQuestions: 15, availableQuestions: 15, marksPerQuestion: 2 },
      { sectionName: 'General Science', sectionNameHindi: 'सामान्य विज्ञान', officialQuestions: 15, availableQuestions: 15, marksPerQuestion: 2 },
      { sectionName: 'Mathematics', sectionNameHindi: 'गणित', officialQuestions: 15, availableQuestions: 15, marksPerQuestion: 2 },
      { sectionName: 'Logical Reasoning', sectionNameHindi: 'तार्किक क्षमता', officialQuestions: 5, availableQuestions: 5, marksPerQuestion: 2 }
    ],
    instructions: [
      'Join Indian Army Online CEE Official Exam Pattern: 50 Questions, 60 Minutes.',
      'Each question carries 2 marks.',
      'Negative marking: 0.50 marks deducted for each wrong answer.'
    ],
    instructionsHindi: [
      'भारतीय सेना ऑनलाइन सीईई आधिकारिक परीक्षा प्रारूप: 50 प्रश्न, 60 मिनट।',
      'प्रत्येक प्रश्न 2 अंक का है।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 0.50 अंक काटे जाएंगे।'
    ]
  },

  // ==========================================
  // 10. SUBJECT-WISE: MATHEMATICS SPEED DRILL
  // ==========================================
  {
    id: 'test-math-speed',
    title: 'Mathematics Speed Drill by Ashvani Sir',
    titleHindi: 'गणित स्पीड ड्रिल - अश्वनी सर विशेष टेस्ट',
    subtitle: '19 High-Yield Questions covering Number System, CI/SI, Algebra, Geometry & Mensuration',
    subtitleHindi: 'संख्या पद्धति, चक्रवृद्धि ब्याज, बीजगणित एवं क्षेत्रमिति पर 19 महत्वपूर्ण प्रश्न',
    category: 'Subject Test',
    subjectId: 'maths',
    durationMinutes: 25,
    officialDurationMinutes: 25,
    officialTotalQuestions: 19,
    marksPerQuestion: 2,
    totalMarks: 38,
    negativeMarking: 0.25,
    questions: mathsQuestions,
    instructions: [
      'Subject-specific drill: 19 Questions, strictly 25 Minutes (1500 seconds).',
      'Each question carries 2 marks.',
      'Negative marking: 0.25 marks per wrong answer.',
      'Independent timer: This 25-minute test has its own dedicated countdown.'
    ],
    instructionsHindi: [
      'विषयवार विशेष टेस्ट: 19 प्रश्न, निश्चित 25 मिनट (1500 सेकंड)।',
      'प्रत्येक प्रश्न 2 अंक का है।',
      'नेगेटिव मार्किंग: प्रत्येक गलत उत्तर पर 0.25 अंक काटा जाएगा।',
      'स्वतंत्र टाइमर: यह टेस्ट अपने समर्पित 25-मिनट टाइमर पर संचालित होता है।'
    ]
  },

  // ==========================================
  // 11. SUBJECT-WISE: REASONING SPEED BOOSTER
  // ==========================================
  {
    id: 'test-reasoning-speed',
    title: 'Reasoning & Intelligence Speed Booster',
    titleHindi: 'तर्कशक्ति एवं बुद्धि परीक्षा स्पीड बूस्टर टेस्ट',
    subtitle: '20 Curated Questions: Analogy, Coding-Decoding, Syllogism & Blood Relations',
    subtitleHindi: 'सादृश्यता, कोडिंग-डिकोडिंग, न्याय निगमन एवं रक्त संबंध पर 20 चयनित प्रश्न',
    category: 'Subject Test',
    subjectId: 'reasoning',
    durationMinutes: 20,
    officialDurationMinutes: 20,
    officialTotalQuestions: 20,
    marksPerQuestion: 2,
    totalMarks: 40,
    negativeMarking: 0.25,
    questions: reasoningQuestions,
    instructions: [
      'Subject-specific test: 20 Questions, 20 Minutes (1200 seconds).',
      'Each question carries 2 marks; 0.25 negative deduction.'
    ],
    instructionsHindi: [
      'विषयवार टेस्ट: 20 प्रश्न, 20 मिनट (1200 सेकंड)।',
      'प्रत्येक प्रश्न 2 अंक का है; गलत उत्तर पर 0.25 अंक कटौती।'
    ]
  },

  // ==========================================
  // 12. SUBJECT-WISE: SAMANYA HINDI
  // ==========================================
  {
    id: 'test-hindi-special',
    title: 'सामान्य हिन्दी (Samanya Hindi) 100% Score Test',
    titleHindi: 'सामान्य हिन्दी (Samanya Hindi) 100% स्कोर टेस्ट',
    subtitle: '20 Chapters: वर्णमाला, संधि, समास, तत्सम-तद्भव, रस, छंद, अलंकार एवं मुहावरे',
    subtitleHindi: 'वर्णमाला, संधि, समास, तत्सम-तद्भव, रस, छंद, अलंकार एवं मुहावरे पर 20 प्रश्न',
    category: 'Subject Test',
    subjectId: 'hindi',
    durationMinutes: 20,
    officialDurationMinutes: 20,
    officialTotalQuestions: 20,
    marksPerQuestion: 2,
    totalMarks: 40,
    negativeMarking: 0.50,
    questions: hindiQuestions,
    instructions: [
      'Subject-specific test: 20 Questions, 20 Minutes (1200 seconds).',
      'Extremely high yield for UP Police Constable & UPSSSC PET.',
      'Each question carries 2 marks; 0.50 marks negative deduction.'
    ],
    instructionsHindi: [
      'विषयवार टेस्ट: 20 प्रश्न, 20 मिनट (1200 सेकंड)।',
      'उत्तर प्रदेश पुलिस एवं UPSSSC PET हेतु अत्यंत महत्वपूर्ण।',
      'प्रत्येक प्रश्न 2 अंक का है; गलत उत्तर पर 0.50 अंक काटे जाएंगे।'
    ]
  },

  // ==========================================
  // 13. SUBJECT-WISE: STATIC GK & SCIENCE
  // ==========================================
  {
    id: 'test-gk-sprint',
    title: 'General Knowledge (Static GK & General Science) Test',
    titleHindi: 'सामान्य ज्ञान (स्टैटिक जीके एवं सामान्य विज्ञान) टेस्ट',
    subtitle: '18 Questions: History, Constitution, Geography, Biology & Physics',
    subtitleHindi: 'इतिहास, संविधान, भूगोल, जीव विज्ञान एवं भौतिकी पर 18 महत्वपूर्ण प्रश्न',
    category: 'Subject Test',
    subjectId: 'gk',
    durationMinutes: 15,
    officialDurationMinutes: 15,
    officialTotalQuestions: 18,
    marksPerQuestion: 2,
    totalMarks: 36,
    negativeMarking: 0.33,
    questions: gkQuestions,
    instructions: [
      'Subject-specific test: 18 Questions, 15 Minutes (900 seconds).',
      '2 marks per question; 0.33 negative marking.'
    ],
    instructionsHindi: [
      'विषयवार टेस्ट: 18 प्रश्न, 15 मिनट (900 सेकंड)।',
      'प्रत्येक प्रश्न 2 अंक का; 0.33 नेगेटिव मार्किंग।'
    ]
  },

  // ==========================================
  // 14. SUBJECT-WISE: CURRENT AFFAIRS & GA
  // ==========================================
  {
    id: 'test-ga-current',
    title: 'Current Affairs & Government Schemes Test',
    titleHindi: 'समसामयिकी एवं सरकारी योजनाएं टेस्ट',
    subtitle: '13 Questions: National summits, Sports, Awards, and UP Special developments',
    subtitleHindi: 'राष्ट्रीय शिखर सम्मेलन, खेलकूद, पुरस्कार एवं यूपी विशेष पर 13 प्रश्न',
    category: 'Subject Test',
    subjectId: 'ga',
    durationMinutes: 12,
    officialDurationMinutes: 12,
    officialTotalQuestions: 13,
    marksPerQuestion: 2,
    totalMarks: 26,
    negativeMarking: 0.25,
    questions: gaQuestions,
    instructions: [
      'Subject-specific test: 13 Questions, 12 Minutes (720 seconds).',
      '2 marks per question; 0.25 negative marking.'
    ],
    instructionsHindi: [
      'विषयवार टेस्ट: 13 प्रश्न, 12 मिनट (720 सेकंड)।',
      'प्रत्येक प्रश्न 2 अंक का; 0.25 नेगेटिव मार्किंग।'
    ]
  },

  // ==========================================
  // 15. SUBJECT-WISE: GENERAL ENGLISH
  // ==========================================
  {
    id: 'test-english-mastery',
    title: 'General English Grammar & Vocabulary Test',
    titleHindi: 'सामान्य अंग्रेजी व्याकरण एवं शब्द-भंडार टेस्ट',
    subtitle: '23 Questions: Error Spotting, Voice, Narration, Prepositions & Synonyms',
    subtitleHindi: 'एरर स्पॉटिंग, वॉइस, नरेशन, प्रीपोजिशन एवं सिनोनिम्स पर 23 प्रश्न',
    category: 'Subject Test',
    subjectId: 'english',
    durationMinutes: 20,
    officialDurationMinutes: 20,
    officialTotalQuestions: 23,
    marksPerQuestion: 2,
    totalMarks: 46,
    negativeMarking: 0.50,
    questions: englishQuestions,
    instructions: [
      'Subject-specific test: 23 Questions, 20 Minutes (1200 seconds).',
      '2 marks per question; 0.50 negative marking.'
    ],
    instructionsHindi: [
      'विषयवार टेस्ट: 23 प्रश्न, 20 मिनट (1200 सेकंड)।',
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
