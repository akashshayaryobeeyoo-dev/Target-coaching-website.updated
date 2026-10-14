import { Subject } from '../../types';

export const REASONING_SUBJECT: Subject = {
  id: 'reasoning',
  name: 'Reasoning',
  hindiName: 'तर्कशक्ति (General Intelligence & Reasoning)',
  iconName: 'Brain',
  color: 'from-amber-500 to-orange-600',
  description: 'Verbal, non-verbal, and analytical reasoning patterns with fast elimination strategies for competitive exams.',
  totalChapters: 20,
  totalQuestions: 24,
  chapters: [
    {
      id: 'reas-ch1',
      subjectId: 'reasoning',
      name: 'Analogy',
      nameHindi: 'सादृश्यता (Word, Number & Letter)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Semantic word analogy, number relationships (n^2 ± 1, cubes), and alphabetical letter shifts.',
      topics: [
        {
          id: 'reas-ch1-t1',
          title: 'Semantic and Numerical Analogies',
          titleHindi: 'शाब्दिक एवं संख्यात्मक सादृश्यता',
          difficulty: 'Basic',
          subtopics: ['Instrument-Measurement', 'Country-Capital-Currency', 'Squares/Cubes priority in numbers'],
          keyFormulasOrRules: ['Priority: Prime numbers > Squares/Cubes > Multiply/Divide > Add/Subtract'],
          examMapping: ['ssc-cgl', 'up-police', 'railway-group-d']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch1',
          chapterName: 'Analogy',
          chapterNameHindi: 'सादृश्यता',
          question: 'Thermometer : Temperature :: Hygrometer : ?',
          questionHindi: 'थर्मामीटर : तापमान :: हाइग्रोमीटर (Hygrometer) : ?',
          options: ['Pressure', 'Humidity', 'Density', 'Electric Current'],
          optionsHindi: ['दाब (Pressure)', 'आर्द्रता (Humidity)', 'घनत्व (Density)', 'विद्युत धारा (Electric Current)'],
          correctAnswer: 1,
          explanation: 'Hygrometer measures atmospheric humidity.',
          explanationHindi: 'हाइग्रोमीटर से वायुमंडलीय आर्द्रता मापी जाती है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC GD', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'reas-ch2',
      subjectId: 'reasoning',
      name: 'Classification',
      nameHindi: 'वर्गीकरण (Odd One Out)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Identifying the odd word, odd letter pair, or odd number group among four options.',
      topics: [
        {
          id: 'reas-ch2-t1',
          title: 'Classification Patterns',
          titleHindi: 'विषम चुनना',
          difficulty: 'Basic',
          subtopics: ['Vowel-Consonant balance', 'Prime number sets', 'Dictionary semantic categories'],
          examMapping: ['ssc-mts', 'railway-group-d', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r2',
          subjectId: 'reasoning',
          chapterId: 'reas-ch2',
          chapterName: 'Classification',
          chapterNameHindi: 'वर्गीकरण',
          question: 'Find the odd one out from the given alternatives: 121, 169, 289, 343',
          questionHindi: 'दिए गए विकल्पों में से विषम संख्या चुनिए: 121, 169, 289, 343',
          options: ['121', '169', '289', '343'],
          optionsHindi: ['121', '169', '289', '343'],
          correctAnswer: 3,
          explanation: '121, 169, 289 are squares of primes; 343 = 7^3 is a cube.',
          explanationHindi: '121, 169, 289 अभाज्य संख्याओं के वर्ग हैं, जबकि 343 = 7^3 एक घन संख्या है।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'Railway Group D']
        }
      ]
    },
    {
      id: 'reas-ch3',
      subjectId: 'reasoning',
      name: 'Number Series',
      nameHindi: 'संख्या श्रृंखला',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet'],
      description: 'Arithmetic series, geometric series, difference of difference, alternate series, and Fibonacci patterns.',
      topics: [
        {
          id: 'reas-ch3-t1',
          title: 'Step-Difference & Prime Series',
          titleHindi: 'अंतर विधि एवं अभाज्य श्रृंखला',
          difficulty: 'Intermediate',
          subtopics: ['Common difference (AP)', 'Double step difference', 'Multiplication + Addition patterns (×2 + 1, ×3 + 2)'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-num-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch3',
          chapterName: 'Number Series',
          chapterNameHindi: 'संख्या श्रृंखला',
          question: 'Find the next term in the series: 3, 7, 15, 31, 63, ?',
          questionHindi: 'श्रृंखला में अगला पद ज्ञात कीजिए: 3, 7, 15, 31, 63, ?',
          options: ['125', '127', '129', '131'],
          optionsHindi: ['125', '127', '129', '131'],
          correctAnswer: 1,
          explanation: 'Pattern: ×2 + 1. 63 × 2 + 1 = 127.',
          explanationHindi: 'पैटर्न: (पिछली संख्या × 2) + 1 => 63 × 2 + 1 = 127।',
          difficulty: 'Basic',
          examTags: ['SSC GD', 'UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'reas-ch4',
      subjectId: 'reasoning',
      name: 'Alphabet Series',
      nameHindi: 'वर्णमाला श्रृंखला',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'army-agniveer'],
      description: 'Alphabetical positional gap series, continuous pattern series (e.g. ab_ba_b), and letter cluster series.',
      topics: [
        {
          id: 'reas-ch4-t1',
          title: 'Letter Ranks & Continuous Patterns',
          titleHindi: 'वर्ण रैंक एवं सतत पैटर्न',
          difficulty: 'Basic',
          subtopics: ['EJOTY method (5, 10, 15, 20, 25)', 'Counting total blanks + letters and factoring (e.g. 12 = 3×4 or 4×3)'],
          examMapping: ['ssc-chsl', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-alpha-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch4',
          chapterName: 'Alphabet Series',
          chapterNameHindi: 'वर्णमाला श्रृंखला',
          question: 'Complete the series: B, E, H, K, N, ?',
          questionHindi: 'श्रृंखला को पूरा कीजिए: B, E, H, K, N, ?',
          options: ['P', 'Q', 'R', 'S'],
          optionsHindi: ['P', 'Q', 'R', 'S'],
          correctAnswer: 1,
          explanation: 'Pattern: +3 in letter positions. N(14) + 3 = 17 = Q.',
          explanationHindi: 'पैटर्न: प्रत्येक पद में +3 जोड़ा जा रहा है (2, 5, 8, 11, 14, 17) => Q।',
          difficulty: 'Basic',
          examTags: ['Army Agniveer', 'UP Police', 'SSC MTS']
        }
      ]
    },
    {
      id: 'reas-ch5',
      subjectId: 'reasoning',
      name: 'Coding-Decoding',
      nameHindi: 'कोडिंग-डिकोडिंग',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Letter coding, number coding, substitution coding, and opposite letter pairs.',
      topics: [
        {
          id: 'reas-ch5-t1',
          title: 'Opposite Pairs & Positional Shifts',
          titleHindi: 'विपरीत वर्ण व स्थान परिवर्तन',
          difficulty: 'Intermediate',
          subtopics: ['Opposite letter sum = 27 (A+Z, B+Y, C+X)', 'Cross diagonal coding in words', 'Chinese message deciphering'],
          keyFormulasOrRules: ['Opposite Letter shortcut: AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN'],
          examMapping: ['ssc-cgl', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r3',
          subjectId: 'reasoning',
          chapterId: 'reas-ch5',
          chapterName: 'Coding-Decoding',
          chapterNameHindi: 'कोडिंग-डिकोडिंग',
          question: 'If "FLOWER" is written as "UOLDVI", how will "GARDEN" be written?',
          questionHindi: 'यदि "FLOWER" को "UOLDVI" लिखा जाता है, तो "GARDEN" को क्या लिखा जाएगा?',
          options: ['TZIWVM', 'TZIVWM', 'TYIWVM', 'SZIVWM'],
          optionsHindi: ['TZIWVM', 'TZIVWM', 'TYIWVM', 'SZIVWM'],
          correctAnswer: 0,
          explanation: 'Opposite letters: G<->T, A<->Z, R<->I, D<->W, E<->V, N<->M.',
          explanationHindi: 'विपरीत अक्षर नियम: G<->T, A<->Z, R<->I, D<->W, E<->V, N<->M => TZIWVM।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'UP Police SI']
        }
      ]
    },
    {
      id: 'reas-ch6',
      subjectId: 'reasoning',
      name: 'Blood Relations',
      nameHindi: 'रक्त सम्बन्ध',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Family tree generation diagrams, pointing to portraits, and coded blood relations (A + B means A is father of B).',
      topics: [
        {
          id: 'reas-ch6-t1',
          title: 'Family Tree Diagrams & Coded Relations',
          titleHindi: 'पारिवारिक आरेख एवं कोडेड सम्बन्ध',
          difficulty: 'Intermediate',
          subtopics: ['Male (+), Female (-), Siblings (---), Marriage (=)', 'Solving "Pointing to a photograph" by backward reading', 'Gender verification trick in coded relations'],
          examMapping: ['ssc-cgl', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-br-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch6',
          chapterName: 'Blood Relations',
          chapterNameHindi: 'रक्त सम्बन्ध',
          question: 'Pointing to a gentleman, Ramesh said, "His only brother is the father of my daughter\'s father." How is the gentleman related to Ramesh?',
          questionHindi: 'एक सज्जन की ओर इशारा करते हुए रमेश ने कहा, "उसका इकलौता भाई मेरी बेटी के पिता का पिता है।" वह सज्जन रमेश से किस प्रकार संबंधित हैं?',
          options: ['Father', 'Paternal Uncle (Chacha)', 'Brother', 'Grandfather'],
          optionsHindi: ['पिता', 'चाचा (Paternal Uncle)', 'भाई', 'दादा'],
          correctAnswer: 1,
          explanation: 'Daughter\'s father = Ramesh. Ramesh\'s father is the gentleman\'s only brother => Uncle.',
          explanationHindi: 'रमेश की बेटी का पिता = रमेश स्वयं। रमेश का पिता उस सज्जन का भाई है => सज्जन रमेश के चाचा हैं।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'UP Police']
        }
      ]
    },
    {
      id: 'reas-ch7',
      subjectId: 'reasoning',
      name: 'Directions',
      nameHindi: 'दिशा और दूरी',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'army-agniveer'],
      description: '8 compass directions, angular turns (45°, 90°, 180°), shadow at sunrise/sunset, and shortest displacement via Pythagoras theorem.',
      topics: [
        {
          id: 'reas-ch7-t1',
          title: 'Pythagoras Displacement & Shadow Rules',
          titleHindi: 'पाइथागोरस दूरी एवं परछाई नियम',
          difficulty: 'Basic',
          subtopics: ['Right turn = 90° Clockwise, Left turn = 90° Anti-clockwise', 'Sunrise: Shadow towards West; Sunset: Shadow towards East', 'Shortest distance = √(x^2 + y^2)'],
          examMapping: ['railway-group-d', 'up-police', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r4',
          subjectId: 'reasoning',
          chapterId: 'reas-ch7',
          chapterName: 'Directions',
          chapterNameHindi: 'दिशा और दूरी',
          question: 'Rohan walks 12 km North, turns right and walks 5 km. How far and in which direction is he now from his starting point?',
          questionHindi: 'रोहन उत्तर दिशा में 12 किमी चलता है, फिर दाएं मुड़कर 5 किमी चलता है। अब वह प्रारंभिक बिंदु से कितनी दूरी और किस दिशा में है?',
          options: ['13 km North-East', '13 km North-West', '17 km North-East', '10 km North'],
          optionsHindi: ['13 किमी उत्तर-पूर्व', '13 किमी उत्तर-पश्चिम', '17 किमी उत्तर-पूर्व', '10 किमी उत्तर'],
          correctAnswer: 0,
          explanation: 'Distance = √(12^2 + 5^2) = √169 = 13 km North-East.',
          explanationHindi: 'दूरी = √(144 + 25) = √169 = 13 किमी उत्तर-पूर्व दिशा में।',
          difficulty: 'Basic',
          examTags: ['Railway Group D', 'UP Police', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'reas-ch8',
      subjectId: 'reasoning',
      name: 'Ranking',
      nameHindi: 'क्रम व्यवस्था (Order & Ranking)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police'],
      description: 'Total persons in a row formula, rank interchange problems, and overlapping vs non-overlapping conditions.',
      topics: [
        {
          id: 'reas-ch8-t1',
          title: 'Ranking Formulas & Interchange',
          titleHindi: 'रैंकिंग सूत्र व स्थान परिवर्तन',
          difficulty: 'Basic',
          subtopics: ['Total = (Left + Right) - 1', 'Interchange: Total = New rank of A + Old rank of B - 1', 'Persons between two members'],
          keyFormulasOrRules: ['Total = Left + Right - 1'],
          examMapping: ['up-police', 'ssc-gd', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r6',
          subjectId: 'reasoning',
          chapterId: 'reas-ch8',
          chapterName: 'Ranking',
          chapterNameHindi: 'क्रम व्यवस्था',
          question: 'Suresh ranks 11th from the top and 27th from the bottom in a class test. How many students took the test?',
          questionHindi: 'कक्षा परीक्षा में सुरेश का स्थान ऊपर से 11वां और नीचे से 27वां है। परीक्षा में कुल कितने छात्र थे?',
          options: ['37', '38', '36', '39'],
          optionsHindi: ['37', '38', '36', '39'],
          correctAnswer: 0,
          explanation: 'Total = 11 + 27 - 1 = 37.',
          explanationHindi: 'कुल छात्र = 11 + 27 - 1 = 37।',
          difficulty: 'Basic',
          examTags: ['Army Agniveer', 'UP Police', 'SSC GD']
        }
      ]
    },
    {
      id: 'reas-ch9',
      subjectId: 'reasoning',
      name: 'Mathematical Operations',
      nameHindi: 'गणितीय संक्रियाएं (BODMAS Signs Interchanging)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police'],
      description: 'Substituting operators (+ becomes -, × becomes ÷), balancing equations by interchanging numbers, and inequality signs.',
      topics: [
        {
          id: 'reas-ch9-t1',
          title: 'Sign Substitution & Division Check',
          titleHindi: 'चिह्न प्रतिस्थापन विधि',
          difficulty: 'Basic',
          subtopics: ['Spotting the division (÷) symbol first to check integer feasibility', 'Equation balancing options checking'],
          examMapping: ['ssc-gd', 'railway-group-d']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-mo-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch9',
          chapterName: 'Mathematical Operations',
          chapterNameHindi: 'गणितीय संक्रियाएं',
          question: 'If "+" means "×", "-" means "÷", "×" means "+", and "÷" means "-", then what is the value of: 20 + 5 - 10 × 4 ÷ 2?',
          questionHindi: 'यदि "+" का अर्थ "×", "-" का अर्थ "÷", "×" का अर्थ "+", और "÷" का अर्थ "-" है, तो 20 + 5 - 10 × 4 ÷ 2 का मान क्या होगा?',
          options: ['10', '12', '14', '16'],
          optionsHindi: ['10', '12', '14', '16'],
          correctAnswer: 1,
          explanation: 'Expression becomes: 20 × 5 ÷ 10 + 4 - 2 = 10 + 4 - 2 = 12.',
          explanationHindi: 'व्यंजक: 20 × 5 ÷ 10 + 4 - 2 = 10 + 4 - 2 = 12।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'UP Police', 'Railway Group D']
        }
      ]
    },
    {
      id: 'reas-ch10',
      subjectId: 'reasoning',
      name: 'Venn Diagrams',
      nameHindi: 'वेन आरेख',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet'],
      description: 'Geometric representation of real-world categories (e.g. Doctors, Engineers, Men), intersection regions, and data Venn diagrams.',
      topics: [
        {
          id: 'reas-ch10-t1',
          title: 'Subset, Disjoint & Intersecting Circles',
          titleHindi: 'वेन आरेख श्रेणियां',
          difficulty: 'Basic',
          subtopics: ['All A are B representation (concentric circles)', 'Intersecting common traits', 'Mutually exclusive categories'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-vd-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch10',
          chapterName: 'Venn Diagrams',
          chapterNameHindi: 'वेन आरेख',
          question: 'Which of the following diagrams best represents the relationship between: India, Uttar Pradesh, and Lucknow?',
          questionHindi: 'भारत, उत्तर प्रदेश और लखनऊ के संबंध को कौन सा आरेख सबसे सही रूप में दर्शाता है?',
          options: ['3 Concentric Circles', '3 Disjoint Circles', '2 Intersecting inside 1', '3 Partially Overlapping'],
          optionsHindi: ['3 संकेंद्री वृत्त (Concentric Circles)', '3 अलग-अलग वृत्त', '2 आपस में कटे वृत्त 1 के अंदर', '3 आंशिक रूप से जुड़े वृत्त'],
          correctAnswer: 0,
          explanation: 'Lucknow ⊂ Uttar Pradesh ⊂ India. Represented by three concentric circles.',
          explanationHindi: 'लखनऊ ⊂ उत्तर प्रदेश ⊂ भारत (तीनों एक दूसरे के अंदर समाहित हैं => 3 संकेंद्री वृत्त)।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'reas-ch11',
      subjectId: 'reasoning',
      name: 'Syllogism',
      nameHindi: 'न्याय निगमन (Syllogism)',
      difficulty: 'Advanced',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'up-police'],
      description: 'Statements and conclusions, "All", "Some", "No", "Some Not", possibility cases, and complementary Either-Or conditions.',
      topics: [
        {
          id: 'reas-ch11-t1',
          title: 'Venn Logic & Either-Or Rules',
          titleHindi: 'वेन तर्क एवं या-तो नियम',
          difficulty: 'Advanced',
          subtopics: ['Basic vs Possibility diagrams', 'Either-Or 3 golden conditions', '"Only a few" modern rules'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r5',
          subjectId: 'reasoning',
          chapterId: 'reas-ch11',
          chapterName: 'Syllogism',
          chapterNameHindi: 'न्याय निगमन',
          question: 'Statements: All pens are books. All books are pencils.\nConclusions: I. All pens are pencils. II. Some pencils are pens.',
          questionHindi: 'कथन: सभी पेन पुस्तकें हैं। सभी पुस्तकें पेंसिलें हैं।\nनिष्कर्ष: I. सभी पेन पेंसिलें हैं। II. कुछ पेंसिलें पेन हैं।',
          options: ['Only I follows', 'Only II follows', 'Neither follows', 'Both I and II follow'],
          optionsHindi: ['केवल I सही है', 'केवल II सही है', 'कोई भी सही नहीं है', 'I और II दोनों सही हैं'],
          correctAnswer: 3,
          explanation: 'Pens ⊂ Books ⊂ Pencils => Both follow.',
          explanationHindi: 'पेन ⊂ पुस्तकें ⊂ पेंसिलें => दोनों निष्कर्ष अनुसरण करते हैं।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'reas-ch12',
      subjectId: 'reasoning',
      name: 'Statements and Conclusions',
      nameHindi: 'कथन एवं निष्कर्ष / तर्क (Critical Reasoning)',
      difficulty: 'Advanced',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'railway-ntpc', 'up-police'],
      description: 'Statements and assumptions, statement and arguments (strong vs weak), cause and effect, and courses of action.',
      topics: [
        {
          id: 'reas-ch12-t1',
          title: 'Critical Assumptions & Deductions',
          titleHindi: 'कथन, पूर्वधारणाएं एवं तर्क',
          difficulty: 'Advanced',
          subtopics: ['Assumption must be implicit, not an opinion', 'Strong arguments must be factual and constructive', 'Courses of action must be feasible and non-extreme'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-sc-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch12',
          chapterName: 'Statements and Conclusions',
          chapterNameHindi: 'कथन एवं निष्कर्ष',
          question: 'Statement: "Regular physical exercise improves cardiovascular health."\nConclusions: I. People who do not exercise certainly suffer heart disease. II. Exercise contributes positively to heart fitness.',
          questionHindi: 'कथन: "नियमित व्यायाम हृदय स्वास्थ्य को बेहतर बनाता है।"\nनिष्कर्ष: I. जो लोग व्यायाम नहीं करते उन्हें निश्चित रूप से हृदय रोग होता है। II. व्यायाम हृदय को स्वस्थ रखने में सकारात्मक योगदान देता है।',
          options: ['Only conclusion I follows', 'Only conclusion II follows', 'Both follow', 'Neither follows'],
          optionsHindi: ['केवल निष्कर्ष I निकलता है', 'केवल निष्कर्ष II निकलता है', 'दोनों निकलते हैं', 'कोई नहीं निकलता'],
          correctAnswer: 1,
          explanation: 'Conclusion I is an extreme generalization ("certainly"). Conclusion II directly restates the premise.',
          explanationHindi: 'निष्कर्ष I एक अतिवादी दावा है ("निश्चित रूप से") जो अमान्य है। केवल निष्कर्ष II कथन का तार्किक निष्कर्ष है।',
          difficulty: 'Intermediate',
          examTags: ['Railway NTPC', 'UP Police SI']
        }
      ]
    },
    {
      id: 'reas-ch13',
      subjectId: 'reasoning',
      name: 'Seating Arrangements',
      nameHindi: 'बैठक व्यवस्था (Linear & Circular)',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'up-police'],
      description: 'Linear seating facing North/South, double row facing each other, and circular table seating facing center/outside.',
      topics: [
        {
          id: 'reas-ch13-t1',
          title: 'Circular & Linear Seating Logic',
          titleHindi: 'वृत्ताकार व पंक्ति बैठक व्यवस्था',
          difficulty: 'Intermediate',
          subtopics: ['Facing Center: Right is Anti-clockwise, Left is Clockwise', 'Facing Outside: Right is Clockwise, Left is Anti-clockwise', 'Fixing definitive positions first'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-sa-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch13',
          chapterName: 'Seating Arrangements',
          chapterNameHindi: 'बैठक व्यवस्था',
          question: 'Five friends A, B, C, D, E are sitting in a row facing North. C is sitting between A and D. B is at the right end. D is to the left of B. Who is sitting in the exact middle?',
          questionHindi: 'पांच मित्र A, B, C, D, E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। C, A और D के बीच बैठा है। B दाएं छोर पर है। D, B के बाएं है। ठीक मध्य में कौन बैठा है?',
          options: ['A', 'B', 'C', 'D'],
          optionsHindi: ['A', 'B', 'C', 'D'],
          correctAnswer: 2,
          explanation: 'Order: E, A, C, D, B. Middle person is C.',
          explanationHindi: 'क्रम: E, A, C, D, B बनता है। ठीक मध्य में C बैठा है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC GD', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'reas-ch14',
      subjectId: 'reasoning',
      name: 'Puzzles',
      nameHindi: 'पहेली परीक्षण (Floor, Box & Scheduling)',
      difficulty: 'Advanced',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc'],
      description: 'Floor puzzles, day/month scheduling puzzles, box stacking puzzles, and multi-variable attribute matching.',
      topics: [
        {
          id: 'reas-ch14-t1',
          title: 'Tabulation & Grid Puzzle Strategy',
          titleHindi: 'ग्रिड व सारणीकरण पहेली',
          difficulty: 'Advanced',
          subtopics: ['Building standard cross-grids for matching variables', 'Eliminating negative clues (e.g. X does not like Red)'],
          examMapping: ['ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-puz-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch14',
          chapterName: 'Puzzles',
          chapterNameHindi: 'पहेली परीक्षण',
          question: 'Three boxes Red, Green, Blue contain Gold, Silver, Bronze. Red box does not contain Gold. Green box contains Silver. What is in the Red box?',
          questionHindi: 'तीन बक्से लाल, हरे और नीले में सोना, चांदी और कांस्य रखा है। लाल बक्से में सोना नहीं है। हरे बक्से में चांदी है। लाल बक्से में क्या है?',
          options: ['Gold', 'Silver', 'Bronze', 'Cannot be determined'],
          optionsHindi: ['सोना', 'चांदी', 'कांस्य (Bronze)', 'तय नहीं किया जा सकता'],
          correctAnswer: 2,
          explanation: 'Green has Silver. Remaining are Gold and Bronze. Since Red does not have Gold, Red has Bronze.',
          explanationHindi: 'हरे में चांदी है। बचे सोना और कांस्य। लाल में सोना नहीं है, अतः लाल में कांस्य है।',
          difficulty: 'Basic',
          examTags: ['Railway NTPC', 'SSC CGL']
        }
      ]
    },
    {
      id: 'reas-ch15',
      subjectId: 'reasoning',
      name: 'Clocks',
      nameHindi: 'घड़ी (Clocks)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet'],
      description: 'Angle between hour and minute hand formula: θ = |30H - (11/2)M|, coincidence (0°), opposite (180°), right angle (90°), and slow/fast faulty clocks.',
      topics: [
        {
          id: 'reas-ch15-t1',
          title: 'Clock Angle & Mirror Image Formulas',
          titleHindi: 'घड़ी कोण व दर्पण प्रतिबिम्ब सूत्र',
          difficulty: 'Intermediate',
          subtopics: ['Angle θ = |30H - 5.5M|', 'Mirror time = Subtract given time from 11:60 or 23:60', 'Coincide 11 times in 12 hours (22 times in 24 hours)'],
          keyFormulasOrRules: ['Angle = |30H - (11/2)M|', 'Mirror Time = 11:60 - Given Time'],
          examMapping: ['railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-clk-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch15',
          chapterName: 'Clocks',
          chapterNameHindi: 'घड़ी',
          question: 'What is the angle between the hour hand and minute hand of a clock at 4:20?',
          questionHindi: '4 बजकर 20 मिनट (4:20) पर घड़ी की सुइयों के बीच कितने डिग्री का कोण बनेगा?',
          options: ['0°', '10°', '15°', '20°'],
          optionsHindi: ['0°', '10°', '15°', '20°'],
          correctAnswer: 1,
          explanation: 'Angle = |30(4) - (11/2)(20)| = |120 - 110| = 10°.',
          explanationHindi: 'कोण = |30(4) - 5.5(20)| = |120 - 110| = 10°।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'reas-ch16',
      subjectId: 'reasoning',
      name: 'Calendars',
      nameHindi: 'कैलेंडर (Odd Days & Leap Years)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet'],
      description: 'Odd days concept, leap year checking (divisible by 4 or 400 for century years), finding day of the week for any date, and calendar repetition.',
      topics: [
        {
          id: 'reas-ch16-t1',
          title: 'Odd Days Calculation & Calendar Repetition',
          titleHindi: 'विषम दिन व कैलेंडर की पुनरावृत्ति',
          difficulty: 'Intermediate',
          subtopics: ['Ordinary year = 1 odd day; Leap year = 2 odd days', '100 years = 5 odd days; 400 years = 0 odd days', 'Leap year calendar repeats after 28 years; Ordinary year after 6 or 11 years'],
          keyFormulasOrRules: ['Odd days = Remainder when total days divided by 7'],
          examMapping: ['railway-ntpc', 'up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-cal-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch16',
          chapterName: 'Calendars',
          chapterNameHindi: 'कैलेंडर',
          question: 'If 1st January 2024 was a Monday, what day of the week was 31st December 2024?',
          questionHindi: 'यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को कौन सा दिन था?',
          options: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
          optionsHindi: ['सोमवार', 'मंगलवार', 'बुधवार', 'रविवार'],
          correctAnswer: 1,
          explanation: '2024 is a leap year (366 days). In a leap year, the last day is one day ahead of the first day => Tuesday.',
          explanationHindi: '2024 एक लीप वर्ष है (366 दिन)। लीप वर्ष में वर्ष का अंतिम दिन पहले दिन से 1 दिन आगे होता है => मंगलवार।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'Railway Group D']
        }
      ]
    },
    {
      id: 'reas-ch17',
      subjectId: 'reasoning',
      name: 'Non-Verbal Reasoning',
      nameHindi: 'अभाषिक तर्कशक्ति (Mirror & Water Images, Paper Folding)',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-group-d', 'army-agniveer'],
      description: 'Mirror images (left-right inversion), water images (top-bottom inversion), paper folding, paper cutting, embedded figures, and figure completion.',
      topics: [
        {
          id: 'reas-ch17-t1',
          title: 'Reflections & Embedded Figures',
          titleHindi: 'दर्पण प्रतिबिम्ब व अंतर्निहित आकृतियां',
          difficulty: 'Basic',
          subtopics: ['Mirror reflection: Top/Bottom invariant, Left/Right swapped', 'Water reflection: Left/Right invariant, Top/Bottom swapped', 'Unfolding punched paper symmetrical patterns'],
          examMapping: ['ssc-gd', 'army-agniveer', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r7',
          subjectId: 'reasoning',
          chapterId: 'reas-ch17',
          chapterName: 'Non-Verbal Reasoning',
          chapterNameHindi: 'अभाषिक तर्कशक्ति',
          question: 'What is the water image of the word "MOM"?',
          questionHindi: 'शब्द "MOM" का जल प्रतिबिम्ब क्या होगा?',
          options: ['WOW', 'MOM', 'NON', 'MOW'],
          optionsHindi: ['WOW', 'MOM', 'NON', 'MOW'],
          correctAnswer: 0,
          explanation: 'M flips upside down to W, O remains O => WOW.',
          explanationHindi: 'M लंबवत उलटकर W बन जाता है, O अपरिवर्तित रहता है => WOW।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'Army Agniveer', 'UP Police']
        }
      ]
    },
    {
      id: 'reas-ch18',
      subjectId: 'reasoning',
      name: 'Cubes and Dice',
      nameHindi: 'घन और पासा (Standard & General Dice)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'up-police'],
      description: 'Standard dice (opposite faces sum = 7), general dice common number rules, open unfolded dice opposite face pairing, and painted cube cutting formula.',
      topics: [
        {
          id: 'reas-ch18-t1',
          title: 'Dice Rules & Painted Cube Formula',
          titleHindi: 'पासे के नियम व रंगे हुए घन',
          difficulty: 'Intermediate',
          subtopics: ['One common face rule: Rotate clockwise to match opposite faces', 'Open dice: Alternate faces along a straight line are opposite', 'Cubes painted on faces: 3 faces painted = 8 corners always'],
          keyFormulasOrRules: ['Zero faces painted = (n - 2)^3', '1 face painted = 6(n - 2)^2', '2 faces painted = 12(n - 2)'],
          examMapping: ['ssc-cgl', 'up-police', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-dice-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch18',
          chapterName: 'Cubes and Dice',
          chapterNameHindi: 'घन और पासा',
          question: 'In a standard dice, what number is always opposite to the face numbered 5?',
          questionHindi: 'एक मानक पासे (Standard Dice) में, संख्या 5 के विपरीत फलक पर कौन सी संख्या होगी?',
          options: ['1', '2', '3', '6'],
          optionsHindi: ['1', '2', '3', '6'],
          correctAnswer: 1,
          explanation: 'In a standard dice, opposite faces always sum to 7. 7 - 5 = 2.',
          explanationHindi: 'मानक पासे में विपरीत फलकों का योग सदैव 7 होता है => 7 - 5 = 2।',
          difficulty: 'Basic',
          examTags: ['SSC GD', 'UP Police']
        }
      ]
    },
    {
      id: 'reas-ch19',
      subjectId: 'reasoning',
      name: 'Counting Figures',
      nameHindi: 'आकृतियों की गणना (Triangles, Squares & Rectangles)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-group-d', 'up-police'],
      description: 'Shortcuts for counting triangles in symmetric grids, square matrix row-column formula, and rectangles counting.',
      topics: [
        {
          id: 'reas-ch19-t1',
          title: 'Triangles & Squares Counting Tricks',
          titleHindi: 'त्रिभुज व वर्ग गिनने के शॉर्टकट',
          difficulty: 'Basic',
          subtopics: ['Triangle divided vertically into n parts: n(n+1)/2', 'Square with diagonals: count parts × 2', 'm × n grid squares: (m×n) + (m-1)(n-1)...'],
          examMapping: ['ssc-cgl', 'up-police', 'railway-group-d']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-count-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch19',
          chapterName: 'Counting Figures',
          chapterNameHindi: 'आकृतियों की गणना',
          question: 'How many triangles are there in a square with both diagonals intersecting at the centre, dividing it into 4 small triangular segments?',
          questionHindi: 'एक वर्ग जिसमें दोनों विकर्ण एक दूसरे को काटते हैं, उसमें कुल कितने त्रिभुज होंगे?',
          options: ['4', '6', '8', '10'],
          optionsHindi: ['4', '6', '8', '10'],
          correctAnswer: 2,
          explanation: 'Formula: 4 small triangles × 2 = 8 triangles.',
          explanationHindi: 'शॉर्टकट सूत्र: छोटे त्रिभुजों की संख्या × 2 = 4 × 2 = 8 त्रिभुज।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC GD', 'Railway Group D']
        }
      ]
    },
    {
      id: 'reas-ch20',
      subjectId: 'reasoning',
      name: 'Data Sufficiency',
      nameHindi: 'आंकड़ा पर्याप्तता (Data Sufficiency)',
      difficulty: 'Advanced',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'railway-ntpc', 'up-police'],
      description: 'Evaluating whether Statement I alone or Statement II alone or both together are sufficient to answer the question.',
      topics: [
        {
          id: 'reas-ch20-t1',
          title: 'Statement Testing Methodology',
          titleHindi: 'कथन परीक्षण विधि',
          difficulty: 'Advanced',
          subtopics: ['Test statement 1 independently without looking at statement 2', 'Test statement 2 independently', 'Combine only if both individual statements fail'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-r-ds-1',
          subjectId: 'reasoning',
          chapterId: 'reas-ch20',
          chapterName: 'Data Sufficiency',
          chapterNameHindi: 'आंकड़ा पर्याप्तता',
          question: 'Question: Who is tallest among A, B, C?\nStatement I: A is taller than B.\nStatement II: C is taller than A.\nIs data sufficient?',
          questionHindi: 'प्रश्न: A, B, C में सबसे लंबा कौन है?\nकथन I: A, B से लंबा है।\nकथन II: C, A से लंबा है।\nक्या आंकड़े पर्याप्त हैं?',
          options: ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both I and II together are necessary and sufficient', 'Both together are not sufficient'],
          optionsHindi: ['केवल कथन I पर्याप्त है', 'केवल कथन II पर्याप्त है', 'I और II दोनों मिलकर आवश्यक व पर्याप्त हैं', 'दोनों मिलकर भी पर्याप्त नहीं हैं'],
          correctAnswer: 2,
          explanation: 'Combining I and II: C > A > B. Hence C is the tallest. Both together are required.',
          explanationHindi: 'I और II को मिलाने पर: C > A > B प्राप्त होता है => C सबसे लंबा है। दोनों कथन मिलकर पर्याप्त हैं।',
          difficulty: 'Intermediate',
          examTags: ['Railway NTPC CBT-2', 'SSC CGL']
        }
      ]
    }
  ]
};
