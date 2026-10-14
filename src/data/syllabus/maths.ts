import { Subject } from '../../types';

export const MATHS_SUBJECT: Subject = {
  id: 'maths',
  name: 'Mathematics',
  hindiName: 'गणित (Quantitative Aptitude & Advanced)',
  iconName: 'Calculator',
  color: 'from-blue-600 to-indigo-700',
  description: 'Master arithmetic concepts, speed calculation tricks, and advanced mathematics for SSC CGL, CHSL, MTS, GD, Railway NTPC, Group D, UP Police, UPSSSC PET and Agniveer.',
  totalChapters: 19,
  totalQuestions: 38,
  chapters: [
    {
      id: 'math-ch1',
      subjectId: 'maths',
      name: 'Number System',
      nameHindi: 'संख्या पद्धति',
      difficulty: 'Basic',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Types of numbers, unit digit, divisibility rules, number of zeroes, and remainder theorem.',
      topics: [
        {
          id: 'math-ch1-t1',
          title: 'Classification of Numbers & Divisibility',
          titleHindi: 'संख्याओं का वर्गीकरण एवं विभाज्यता नियम',
          difficulty: 'Basic',
          subtopics: ['Natural, Whole, Prime & Composite Numbers', 'Divisibility rules (2 to 13, 72, 88)', 'Co-prime numbers application'],
          keyFormulasOrRules: ['Divisibility by 11: (Sum of odd places - Sum of even places) = 0 or 11k', 'A composite number is divisible if divisible by its co-prime factors.'],
          solvedExamples: [{
            id: 'ex-m-ns-1',
            problem: 'If 789x531y is divisible by 72, find the value of x and y for max y.',
            solution: 'Divisible by 8 (last 3 digits 31y => y = 2) and by 9 (sum of digits 35 + x => x = 1).'
          }],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m1',
          subjectId: 'maths',
          chapterId: 'math-ch1',
          chapterName: 'Number System',
          chapterNameHindi: 'संख्या पद्धति',
          question: 'If an 8-digit number 789x531y is divisible by 72, what is the value of (5x - 3y) for the largest possible value of y?',
          questionHindi: 'यदि 8-अंकीय संख्या 789x531y, 72 से पूर्णतः विभाज्य है, तो y के सबसे बड़े संभावित मान के लिए (5x - 3y) का मान क्या होगा?',
          options: ['12', '14', '16', '18'],
          optionsHindi: ['12', '14', '16', '18'],
          correctAnswer: 1,
          explanation: 'Divisible by 8 => y=2; Divisible by 9 => x=1. 5(4) - 3(2) = 14.',
          explanationHindi: '8 से विभाज्यता के लिए अंतिम तीन अंक 31y विभाज्य होने चाहिए (y = 2) तथा 9 से विभाज्यता के लिए अंकों का योग विभाज्य होना चाहिए (x = 1)। अतः 14 उत्तर है।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'math-ch2',
      subjectId: 'maths',
      name: 'HCF and LCM',
      nameHindi: 'महत्तम समापवर्तक एवं लघुत्तम समापवर्त्य',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Prime factorisation, division method, fractions HCF/LCM, and word problems on bells and circular tracks.',
      topics: [
        {
          id: 'math-ch2-t1',
          title: 'Properties of HCF and LCM',
          titleHindi: 'ल.स.प. व म.स.प. के गुणधर्म',
          difficulty: 'Basic',
          subtopics: ['Product of two numbers = HCF × LCM', 'LCM of fractions = LCM(num) / HCF(den)', 'HCF of fractions = HCF(num) / LCM(den)'],
          keyFormulasOrRules: ['First Number × Second Number = HCF × LCM'],
          examMapping: ['up-police', 'railway-group-d', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m2',
          subjectId: 'maths',
          chapterId: 'math-ch2',
          chapterName: 'HCF and LCM',
          chapterNameHindi: 'म.स.प. तथा ल.स.प.',
          question: 'The HCF and LCM of two numbers are 12 and 336 respectively. If one of the numbers is 84, what is the other number?',
          questionHindi: 'दो संख्याओं का म.स.प. और ल.स.प. क्रमशः 12 और 336 हैं। यदि उनमें से एक संख्या 84 है, तो दूसरी संख्या क्या होगी?',
          options: ['36', '48', '56', '64'],
          optionsHindi: ['36', '48', '56', '64'],
          correctAnswer: 1,
          explanation: 'Product = HCF × LCM => 84 × B = 12 × 336 => B = 48.',
          explanationHindi: 'दो संख्याओं का गुणनफल = म.स.प. × ल.स.प. => 84 × B = 12 × 336 => B = 48।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'Railway Group D', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'math-ch3',
      subjectId: 'maths',
      name: 'Fractions',
      nameHindi: 'भिन्न एवं दशमलव',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-mts', 'ssc-gd', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Proper, improper, mixed fractions, recurring decimals, comparison of fractions, and ascending/descending order.',
      topics: [
        {
          id: 'math-ch3-t1',
          title: 'Comparison & Recurring Decimals',
          titleHindi: 'भिन्नों की तुलना व आवर्त दशमलव',
          difficulty: 'Basic',
          subtopics: ['Cross-multiplication method for fraction comparison', 'Converting pure & mixed recurring decimals to p/q form', 'Bar notations'],
          keyFormulasOrRules: ['0.ā = a/9, 0.ab̄ = (ab - a)/90'],
          examMapping: ['railway-group-d', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-frac-1',
          subjectId: 'maths',
          chapterId: 'math-ch3',
          chapterName: 'Fractions',
          chapterNameHindi: 'भिन्न',
          question: 'Express 0.47̄ (with bar on 7 only) as a vulgar fraction in simplest form.',
          questionHindi: '0.47̄ (केवल 7 पर बार) को सरलतम भिन्न के रूप में व्यक्त कीजिए।',
          options: ['47/99', '43/90', '47/90', '43/99'],
          optionsHindi: ['47/99', '43/90', '47/90', '43/99'],
          correctAnswer: 1,
          explanation: '0.47̄ = (47 - 4) / 90 = 43 / 90.',
          explanationHindi: 'सूत्र: (पूर्ण संख्या - बिना बार वाली संख्या) / (बार वाले अंकों के लिए 9 और बाकी के लिए 0) = (47 - 4)/90 = 43/90।',
          difficulty: 'Basic',
          examTags: ['UPSSSC PET', 'Railway Group D']
        }
      ]
    },
    {
      id: 'math-ch4',
      subjectId: 'maths',
      name: 'Simplification',
      nameHindi: 'सरलीकरण',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'VBODMAS rule, algebraic identities simplification, surds and indices, and continued fractions (ladder fractions).',
      topics: [
        {
          id: 'math-ch4-t1',
          title: 'VBODMAS Rule & Surds',
          titleHindi: 'VBODMAS नियम एवं करणी',
          difficulty: 'Basic',
          subtopics: ['Vinculum (Bar bracket) priority', 'BODMAS hierarchy', 'Rationalisation of denominators'],
          keyFormulasOrRules: ['Priority: V -> B -> O -> D -> M -> A -> S'],
          examMapping: ['ssc-gd', 'up-police', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m3',
          subjectId: 'maths',
          chapterId: 'math-ch4',
          chapterName: 'Simplification',
          chapterNameHindi: 'सरलीकरण',
          question: 'Find the remainder when 2^31 is divided by 5.',
          questionHindi: 'जब 2^31 को 5 से विभाजित किया जाता है, तो शेषफल क्या प्राप्त होगा?',
          options: ['1', '2', '3', '4'],
          optionsHindi: ['1', '2', '3', '4'],
          correctAnswer: 2,
          explanation: '2^31 = 2 × (4)^15. 4 mod 5 = -1. Remainder = 2 × (-1) = -2 => 5 - 2 = 3.',
          explanationHindi: '2^31 = 2 × 4^15. 4 को 5 से भाग देने पर शेषफल -1. शेष = 2 × (-1) = -2 => 5 - 2 = 3।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'math-ch5',
      subjectId: 'maths',
      name: 'Ratio and Proportion',
      nameHindi: 'अनुपात एवं समानुपात',
      difficulty: 'Basic',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Compound ratio, mean proportion, third and fourth proportion, coin problems, and distribution of money.',
      topics: [
        {
          id: 'math-ch5-t1',
          title: 'Proportion Properties & Coin Problems',
          titleHindi: 'समानुपात व सिक्कों वाले प्रश्न',
          difficulty: 'Basic',
          subtopics: ['Mean Proportion = √(ab)', 'Third Proportion = b^2 / a', 'Fourth Proportion = (b × c) / a', 'Bag coin counting by value and denomination'],
          keyFormulasOrRules: ['If a : b = c : d, then a × d = b × c'],
          examMapping: ['ssc-cgl', 'up-police', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-rat-1',
          subjectId: 'maths',
          chapterId: 'math-ch5',
          chapterName: 'Ratio and Proportion',
          chapterNameHindi: 'अनुपात एवं समानुपात',
          question: 'What is the mean proportional between 9 and 25?',
          questionHindi: '9 और 25 का मध्यानुपाती (Mean Proportional) क्या होगा?',
          options: ['12', '15', '18', '20'],
          optionsHindi: ['12', '15', '18', '20'],
          correctAnswer: 1,
          explanation: 'Mean Proportional = √(a × b) = √(9 × 25) = 3 × 5 = 15.',
          explanationHindi: 'मध्यानुपाती = √(a × b) = √(9 × 25) = 15।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC GD', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'math-ch6',
      subjectId: 'maths',
      name: 'Percentage',
      nameHindi: 'प्रतिशतता',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Fraction to percentage chart, successive percentage changes, price and consumption inverse relation, and election problems.',
      topics: [
        {
          id: 'math-ch6-t1',
          title: 'Successive Percentage & Consumption Rule',
          titleHindi: 'क्रमिक प्रतिशत व उपभोग नियम',
          difficulty: 'Intermediate',
          subtopics: ['Successive formula: a + b + (ab/100)', 'Price rise R% => Consumption cut: [R / (100 + R)] × 100%', 'Venn diagram percentage problems'],
          keyFormulasOrRules: ['Expenditure = Price × Consumption'],
          examMapping: ['ssc-cgl', 'up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-perc-1',
          subjectId: 'maths',
          chapterId: 'math-ch6',
          chapterName: 'Percentage',
          chapterNameHindi: 'प्रतिशतता',
          question: 'If the price of petrol increases by 25%, by what percentage should a driver reduce consumption so expenditure remains same?',
          questionHindi: 'यदि पेट्रोल के मूल्य में 25% की वृद्धि हो जाए, तो एक चालक को उपभोग में कितने प्रतिशत की कमी करनी चाहिए ताकि व्यय अपरिवर्तित रहे?',
          options: ['18%', '20%', '22.5%', '25%'],
          optionsHindi: ['18%', '20%', '22.5%', '25%'],
          correctAnswer: 1,
          explanation: 'Reduction % = [25 / (100 + 25)] × 100% = 25/125 × 100% = 20%.',
          explanationHindi: 'उपभोग में कमी = [R / (100 + R)] × 100% = [25 / 125] × 100% = 20%।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'UP Police', 'Railway Group D']
        }
      ]
    },
    {
      id: 'math-ch7',
      subjectId: 'maths',
      name: 'Average',
      nameHindi: 'औसत',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Arithmetic mean, deviation method, replacement and addition/removal of members in a group, batting and bowling average.',
      topics: [
        {
          id: 'math-ch7-t1',
          title: 'Deviation Shortcut & Replacement',
          titleHindi: 'विचलन विधि एवं प्रतिस्थापन',
          difficulty: 'Basic',
          subtopics: ['Average of consecutive numbers = (First + Last)/2', 'Weighted average formula', 'New member value = Old Average ± (Total members × Change)'],
          keyFormulasOrRules: ['Sum = Average × Number of observations'],
          examMapping: ['up-police', 'ssc-gd', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-avg-1',
          subjectId: 'maths',
          chapterId: 'math-ch7',
          chapterName: 'Average',
          chapterNameHindi: 'औसत',
          question: 'What is the average of the first 50 natural numbers?',
          questionHindi: 'प्रथम 50 प्राकृतिक संख्याओं का औसत क्या होगा?',
          options: ['25', '25.5', '26', '26.5'],
          optionsHindi: ['25', '25.5', '26', '26.5'],
          correctAnswer: 1,
          explanation: 'Average = (n + 1) / 2 = 51 / 2 = 25.5.',
          explanationHindi: 'प्रथम n प्राकृतिक संख्याओं का औसत = (n + 1) / 2 = (50 + 1) / 2 = 25.5।',
          difficulty: 'Basic',
          examTags: ['Army Agniveer', 'UP Police', 'SSC GD']
        }
      ]
    },
    {
      id: 'math-ch8',
      subjectId: 'maths',
      name: 'Profit and Loss',
      nameHindi: 'लाभ और हानि',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'Cost Price, Selling Price, Marked Price, Discount, Dishonest Dealer, and False Weight problems.',
      topics: [
        {
          id: 'math-ch8-t1',
          title: 'Marked Price & Dishonest Trader',
          titleHindi: 'अंकित मूल्य व बेईमान दुकानदार',
          difficulty: 'Intermediate',
          subtopics: ['MP / CP = (100 + P%) / (100 - D%)', 'False weight formula: (Error / True - Error) × 100%', 'Free articles offer: (Free / Total) × 100% discount'],
          keyFormulasOrRules: ['Discount is always calculated on Marked Price (MP).'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m4',
          subjectId: 'maths',
          chapterId: 'math-ch8',
          chapterName: 'Profit and Loss',
          chapterNameHindi: 'लाभ और हानि',
          question: 'A shopkeeper sells an article at 15% discount on marked price and still gains 19%. What percent above cost price was the article marked?',
          questionHindi: 'एक दुकानदार किसी वस्तु के अंकित मूल्य पर 15% छूट देकर भी 19% लाभ कमाता है। वस्तु का अंकित मूल्य, क्रय मूल्य से कितने प्रतिशत अधिक था?',
          options: ['35%', '40%', '42%', '45%'],
          optionsHindi: ['35%', '40%', '42%', '45%'],
          correctAnswer: 1,
          explanation: 'MP / CP = (100 + 19)/(100 - 15) = 119/85 = 7/5 => 40% markup.',
          explanationHindi: 'अंकित मूल्य / क्रय मूल्य = (100 + 19)/(100 - 15) = 119/85 = 7/5 => (7-5)/5 × 100% = 40%।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'UP Police SI']
        }
      ]
    },
    {
      id: 'math-ch9',
      subjectId: 'maths',
      name: 'Interest',
      nameHindi: 'साधारण एवं चक्रवृद्धि ब्याज (SI & CI)',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police'],
      description: 'Simple Interest formula, Compound Interest compounding intervals, 2 & 3-year CI-SI difference, and installments.',
      topics: [
        {
          id: 'math-ch9-t1',
          title: 'CI vs SI Shortcuts & Formulas',
          titleHindi: 'साधारण व चक्रवृद्धि ब्याज के अंतर',
          difficulty: 'Intermediate',
          subtopics: ['2-year Difference D = P(R/100)^2', '3-year Difference D = P(R/100)^2 × (3 + R/100)', 'Equal installment formula'],
          keyFormulasOrRules: ['SI = (P × R × T) / 100', 'CI - SI for 2 years = P(R/100)^2'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m6',
          subjectId: 'maths',
          chapterId: 'math-ch9',
          chapterName: 'Interest',
          chapterNameHindi: 'ब्याज (SI & CI)',
          question: 'A sum of money doubles itself in 5 years at compound interest. In how many years will it become 8 times itself at the same rate?',
          questionHindi: 'एक धनराशि चक्रवृद्धि ब्याज पर 5 वर्षों में दोगुनी हो जाती है। समान दर पर वह कितने वर्षों में 8 गुनी हो जाएगी?',
          options: ['10 years', '15 years', '20 years', '25 years'],
          optionsHindi: ['10 वर्ष', '15 वर्ष', '20 वर्ष', '25 वर्ष'],
          correctAnswer: 1,
          explanation: '2^1 in 5 yrs => 8 = 2^3 in 5 × 3 = 15 years.',
          explanationHindi: 'चक्रवृद्धि ब्याज में 2^1 गुना 5 वर्ष में होता है, तो 8 गुना = 2^3 गुना 5 × 3 = 15 वर्ष में होगा।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC MTS', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'math-ch10',
      subjectId: 'maths',
      name: 'Mixture and Alligation',
      nameHindi: 'मिश्रण एवं पृथक्करण',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police'],
      description: 'Alligation cross rule, replacing quantity of liquid repeatedly formula, mixing solutions of different prices/concentrations.',
      topics: [
        {
          id: 'math-ch10-t1',
          title: 'Alligation Rule & Removal Formula',
          titleHindi: 'पृथक्करण नियम व निष्कासन सूत्र',
          difficulty: 'Intermediate',
          subtopics: ['Cheaper : Dearer = (Mean - Dearer) : (Cheaper - Mean)', 'Repeated removal: Final liquid = Initial × (1 - x/C)^n'],
          keyFormulasOrRules: ['Quantity remaining = Initial × (1 - x/V)^n'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-mix-1',
          subjectId: 'maths',
          chapterId: 'math-ch10',
          chapterName: 'Mixture and Alligation',
          chapterNameHindi: 'मिश्रण एवं पृथक्करण',
          question: 'In what ratio must tea worth ₹60/kg be mixed with tea worth ₹65/kg so that the mixture is worth ₹62/kg?',
          questionHindi: '₹60 प्रति किग्रा वाली चाय को ₹65 प्रति किग्रा वाली चाय के साथ किस अनुपात में मिलाया जाए कि मिश्रण का मूल्य ₹62 प्रति किग्रा हो जाए?',
          options: ['3 : 2', '2 : 3', '3 : 5', '4 : 3'],
          optionsHindi: ['3 : 2', '2 : 3', '3 : 5', '4 : 3'],
          correctAnswer: 0,
          explanation: 'Alligation: (65 - 62) / (62 - 60) = 3 / 2.',
          explanationHindi: 'एलिगेशन नियम द्वारा: (65 - 62) : (62 - 60) = 3 : 2।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'math-ch11',
      subjectId: 'maths',
      name: 'Time and Work',
      nameHindi: 'समय और कार्य (Pipes & Cisterns सहित)',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'army-agniveer'],
      description: 'LCM efficiency method, men-women-children equivalence, alternate days work, wages division, and inlet/outlet pipes.',
      topics: [
        {
          id: 'math-ch11-t1',
          title: 'Efficiency LCM Method & MDH Formula',
          titleHindi: 'कार्यकुशलता व MDH सूत्र',
          difficulty: 'Intermediate',
          subtopics: ['Work = Efficiency × Time', 'M1 D1 H1 / W1 = M2 D2 H2 / W2', 'Leakage emptying tank problems'],
          keyFormulasOrRules: ['M1 × D1 × H1 × E1 / W1 = M2 × D2 × H2 × E2 / W2'],
          examMapping: ['ssc-cgl', 'railway-group-d', 'up-police', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m7',
          subjectId: 'maths',
          chapterId: 'math-ch11',
          chapterName: 'Time and Work',
          chapterNameHindi: 'समय और कार्य',
          question: '12 men can complete a project in 16 days. In how many days can 8 men complete the same project?',
          questionHindi: '12 पुरुष किसी कार्य को 16 दिनों में पूरा कर सकते हैं। उसी कार्य को 8 पुरुष कितने दिनों में पूरा करेंगे?',
          options: ['20 days', '24 days', '28 days', '32 days'],
          optionsHindi: ['20 दिन', '24 दिन', '28 दिन', '32 दिन'],
          correctAnswer: 1,
          explanation: 'M1 × D1 = M2 × D2 => 12 × 16 = 8 × D2 => D2 = 24 days.',
          explanationHindi: 'M1 × D1 = M2 × D2 => 12 × 16 = 8 × D2 => D2 = 24 दिन।',
          difficulty: 'Basic',
          examTags: ['Army Agniveer', 'UP Police', 'SSC GD']
        }
      ]
    },
    {
      id: 'math-ch12',
      subjectId: 'maths',
      name: 'Speed and Distance',
      nameHindi: 'चाल, दूरी, रेलगाड़ी एवं नाव-धारा',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'army-agniveer'],
      description: 'Average speed, relative speed, trains crossing objects/platforms, upstream and downstream boat speeds, and circular races.',
      topics: [
        {
          id: 'math-ch12-t1',
          title: 'Relative Speed & Boat Mechanics',
          titleHindi: 'सापेक्ष चाल एवं नाव धारा',
          difficulty: 'Intermediate',
          subtopics: ['1 km/h = 5/18 m/s', 'Downstream = u + v, Upstream = u - v', 'Relative speed in opposite: S1 + S2, Same: S1 - S2'],
          keyFormulasOrRules: ['Average Speed for equal distances = 2xy / (x + y)'],
          examMapping: ['railway-ntpc', 'railway-group-d', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m8',
          subjectId: 'maths',
          chapterId: 'math-ch12',
          chapterName: 'Speed and Distance',
          chapterNameHindi: 'चाल और दूरी',
          question: 'A boat moves at 10 km/h in still water. The stream flows at 2 km/h. How long does the boat take to travel 24 km downstream?',
          questionHindi: 'शांत जल में नाव की चाल 10 किमी/घंटा और धारा की चाल 2 किमी/घंटा है। धारा के अनुकूल 24 किमी जाने में कितना समय लगेगा?',
          options: ['1.5 hours', '2 hours', '2.5 hours', '3 hours'],
          optionsHindi: ['1.5 घंटे', '2 घंटे', '2.5 घंटे', '3 घंटे'],
          correctAnswer: 1,
          explanation: 'Downstream = 10 + 2 = 12 km/h. Time = 24 / 12 = 2 hours.',
          explanationHindi: 'धारा के अनुकूल चाल = 10 + 2 = 12 किमी/घंटा। समय = 24 / 12 = 2 घंटे।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC GD', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'math-ch13',
      subjectId: 'maths',
      name: 'Algebra',
      nameHindi: 'बीजगणित',
      difficulty: 'Advanced',
      estimatedHours: 14,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc'],
      description: 'Algebraic identities, conditional identities (a+b+c=0), symmetric equations, value-putting techniques, and quadratic equations.',
      topics: [
        {
          id: 'math-ch13-t1',
          title: 'Special Identities & Value Putting',
          titleHindi: 'सर्वसमिकाएं एवं मान रखने की विधि',
          difficulty: 'Advanced',
          subtopics: ['x + 1/x = k => x^2 + 1/x^2 = k^2 - 2', 'x + 1/x = k => x^3 + 1/x^3 = k^3 - 3k', 'If a+b+c=0 then a^3+b^3+c^3 = 3abc'],
          keyFormulasOrRules: ['If x + 1/x = √3, then x^6 = -1'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m9',
          subjectId: 'maths',
          chapterId: 'math-ch13',
          chapterName: 'Algebra',
          chapterNameHindi: 'बीजगणित',
          question: 'If a + b + c = 6 and a^2 + b^2 + c^2 = 14, what is the value of (ab + bc + ca)?',
          questionHindi: 'यदि a + b + c = 6 और a^2 + b^2 + c^2 = 14 है, तो (ab + bc + ca) का मान क्या होगा?',
          options: ['9', '11', '13', '15'],
          optionsHindi: ['9', '11', '13', '15'],
          correctAnswer: 1,
          explanation: '(a+b+c)^2 = 36 = 14 + 2(ab+bc+ca) => 22/2 = 11.',
          explanationHindi: '(a+b+c)^2 = 36 = 14 + 2(ab+bc+ca) => ab+bc+ca = 11।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'math-ch14',
      subjectId: 'maths',
      name: 'Geometry',
      nameHindi: 'ज्यामिति (रेखाएं, कोण, त्रिभुज एवं वृत्त)',
      difficulty: 'Advanced',
      estimatedHours: 16,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc'],
      description: 'Lines and angles, triangle similarity & congruency, centres of triangle (Incentre, Circumcentre, Centroid, Orthocentre), circles, chords, and tangents.',
      topics: [
        {
          id: 'math-ch14-t1',
          title: 'Circles & Triangle Centres',
          titleHindi: 'वृत्त की स्पर्श रेखाएं व त्रिभुज के केंद्र',
          difficulty: 'Advanced',
          subtopics: ['Angle subtended at centre = 2 × angle at circumference', 'Alternate segment theorem', 'Length of direct common tangent = √(d^2 - (r1 - r2)^2)'],
          keyFormulasOrRules: ['Centroid divides median in ratio 2 : 1'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-geo-1',
          subjectId: 'maths',
          chapterId: 'math-ch14',
          chapterName: 'Geometry',
          chapterNameHindi: 'ज्यामिति',
          question: 'In a triangle ABC, the bisectors of angle B and angle C meet at I (Incentre). If angle A = 70°, what is angle BIC?',
          questionHindi: 'त्रिभुज ABC में, कोण B और कोण C के समद्विभाजक बिंदु I (अंतःकेंद्र) पर मिलते हैं। यदि कोण A = 70° है, तो कोण BIC क्या होगा?',
          options: ['110°', '125°', '135°', '140°'],
          optionsHindi: ['110°', '125°', '135°', '140°'],
          correctAnswer: 1,
          explanation: 'Angle BIC = 90° + A/2 = 90° + 35° = 125°.',
          explanationHindi: 'अंतःकेंद्र पर बना कोण = 90° + A/2 = 90° + 35° = 125°।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'math-ch15',
      subjectId: 'maths',
      name: 'Mensuration',
      nameHindi: 'क्षेत्रमिति (2D एवं 3D)',
      difficulty: 'Intermediate',
      estimatedHours: 14,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'army-agniveer'],
      description: 'Perimeter and area of 2D figures (Circle, Rectangle, Triangle, Rhombus, Trapezium) and Volume & Surface Area of 3D figures (Cylinder, Cone, Sphere, Cube, Cuboid, Frustum).',
      topics: [
        {
          id: 'math-ch15-t1',
          title: '2D & 3D Mensuration Formulas',
          titleHindi: '2D एवं 3D क्षेत्रमिति के सूत्र',
          difficulty: 'Intermediate',
          subtopics: ['Cylinder Volume = πr^2h, CSA = 2πrh', 'Cone Volume = (1/3)πr^2h, Slant height l = √(r^2+h^2)', 'Sphere Volume = (4/3)πr^3, TSA = 4πr^2'],
          keyFormulasOrRules: ['Area scale factor = k^2, Volume scale factor = k^3'],
          examMapping: ['ssc-cgl', 'ssc-gd', 'up-police', 'railway-group-d']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m11',
          subjectId: 'maths',
          chapterId: 'math-ch15',
          chapterName: 'Mensuration',
          chapterNameHindi: 'क्षेत्रमिति',
          question: 'If the radius of a sphere is doubled, by what percentage does its surface area increase?',
          questionHindi: 'यदि किसी गोले की त्रिज्या को दोगुना कर दिया जाए, तो उसके पृष्ठीय क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?',
          options: ['100%', '200%', '300%', '400%'],
          optionsHindi: ['100%', '200%', '300%', '400%'],
          correctAnswer: 2,
          explanation: 'Surface area is proportional to r^2 => (2)^2 = 4 times => 300% increase.',
          explanationHindi: 'क्षेत्रफल r^2 के समानुपाती है => 2^2 = 4 गुना => 300% की वृद्धि।',
          difficulty: 'Intermediate',
          examTags: ['SSC CHSL', 'Railway NTPC', 'UP Police']
        }
      ]
    },
    {
      id: 'math-ch16',
      subjectId: 'maths',
      name: 'Trigonometry',
      nameHindi: 'त्रिकोणमिति एवं ऊंचाई और दूरी',
      difficulty: 'Advanced',
      estimatedHours: 14,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc'],
      description: 'Trigonometric ratios, values of standard angles (0° to 90°), identities, complementary angles, max-min values, and height and distance.',
      topics: [
        {
          id: 'math-ch16-t1',
          title: 'Standard Triangles & Elevation Angles',
          titleHindi: 'उन्नयन कोण व सर्वसमिकाएं',
          difficulty: 'Advanced',
          subtopics: ['sin^2 θ + cos^2 θ = 1, sec^2 θ - tan^2 θ = 1', '30°-60°-90° ratio (1 : √3 : 2)', '45°-45°-90° ratio (1 : 1 : √2)'],
          keyFormulasOrRules: ['sec θ + tan θ = x => sec θ - tan θ = 1/x'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m10',
          subjectId: 'maths',
          chapterId: 'math-ch16',
          chapterName: 'Trigonometry',
          chapterNameHindi: 'त्रिकोणमिति',
          question: 'The angle of elevation of the top of a tower from a point 30 m away from its base on ground is 30°. The height of the tower is:',
          questionHindi: 'भूमि पर स्थित एक बिंदु से जो किसी मीनार के आधार से 30 मीटर दूर है, मीनार के शिखर का उन्नयन कोण 30° है। मीनार की ऊंचाई क्या है?',
          options: ['10 m', '10√3 m', '30√3 m', '15 m'],
          optionsHindi: ['10 मीटर', '10√3 मीटर', '30√3 मीटर', '15 मीटर'],
          correctAnswer: 1,
          explanation: 'tan 30° = h / 30 => h = 30 / √3 = 10√3 m.',
          explanationHindi: 'tan 30° = h / 30 => h = 30 / √3 = 10√3 मीटर।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'math-ch17',
      subjectId: 'maths',
      name: 'Statistics',
      nameHindi: 'सांख्यिकी (माध्य, माध्यिका एवं बहुलक)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'upsssc-pet'],
      description: 'Mean, Median, Mode relationship (Mode = 3 Median - 2 Mean), Variance, Standard Deviation, and Coefficient of Variation.',
      topics: [
        {
          id: 'math-ch17-t1',
          title: 'Mean, Median, Mode & Standard Deviation',
          titleHindi: 'माध्य, माध्यिका, बहुलक व मानक विचलन',
          difficulty: 'Intermediate',
          subtopics: ['Empirical relationship: Mode = 3 × Median - 2 × Mean', 'Variance = (Standard Deviation)^2', 'Coefficient of Variation = (SD / Mean) × 100'],
          keyFormulasOrRules: ['Mode = 3 Median - 2 Mean'],
          examMapping: ['ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-stat-1',
          subjectId: 'maths',
          chapterId: 'math-ch17',
          chapterName: 'Statistics',
          chapterNameHindi: 'सांख्यिकी',
          question: 'If the mean and median of a data distribution are 20 and 22 respectively, what is the mode of the distribution?',
          questionHindi: 'यदि किसी डेटा वितरण का माध्य और माध्यिका क्रमशः 20 और 22 हैं, तो उसका बहुलक (Mode) क्या होगा?',
          options: ['24', '26', '28', '30'],
          optionsHindi: ['24', '26', '28', '30'],
          correctAnswer: 1,
          explanation: 'Mode = 3 × Median - 2 × Mean = 3(22) - 2(20) = 66 - 40 = 26.',
          explanationHindi: 'बहुलक = 3 × माध्यिका - 2 × माध्य = 3(22) - 2(20) = 66 - 40 = 26।',
          difficulty: 'Basic',
          examTags: ['SSC CGL Tier-2', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'math-ch18',
      subjectId: 'maths',
      name: 'Probability',
      nameHindi: 'प्रायिकता (Probability)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc'],
      description: 'Random experiments, sample space, coins, dice, pack of 52 cards, and mutually exclusive events.',
      topics: [
        {
          id: 'math-ch18-t1',
          title: 'Card & Dice Probability Rules',
          titleHindi: 'ताश के पत्ते व पासे की प्रायिकता',
          difficulty: 'Intermediate',
          subtopics: ['Probability P(E) = Favourable outcomes / Total outcomes', 'Pack of 52 cards composition (4 suits, 12 face cards)', 'Sum of 2 dice outcomes distribution'],
          keyFormulasOrRules: ['0 <= P(E) <= 1, P(E) + P(not E) = 1'],
          examMapping: ['ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-prob-1',
          subjectId: 'maths',
          chapterId: 'math-ch18',
          chapterName: 'Probability',
          chapterNameHindi: 'प्रायिकता',
          question: 'What is the probability of drawing a King or an Ace from a well-shuffled pack of 52 cards?',
          questionHindi: '52 पत्तों की अच्छी तरह फेंटी गई ताश की गड्डी में से एक बादशाह (King) या एक इक्का (Ace) निकालने की प्रायिकता क्या है?',
          options: ['1/13', '2/13', '3/13', '4/13'],
          optionsHindi: ['1/13', '2/13', '3/13', '4/13'],
          correctAnswer: 1,
          explanation: '4 Kings + 4 Aces = 8 cards. P = 8 / 52 = 2 / 13.',
          explanationHindi: '4 बादशाह + 4 इक्के = 8 अनुकूल परिणाम। प्रायिकता = 8 / 52 = 2 / 13।',
          difficulty: 'Basic',
          examTags: ['SSC CGL Tier-2']
        }
      ]
    },
    {
      id: 'math-ch19',
      subjectId: 'maths',
      name: 'Data Interpretation',
      nameHindi: 'आंकड़ों का विश्लेषण (DI - Bar, Pie, Line, Table)',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'upsssc-pet'],
      description: 'Pie Charts (degree to percentage conversion), Bar Graphs, Line Graphs, Tabulation, and Caselet DI.',
      topics: [
        {
          id: 'math-ch19-t1',
          title: 'Pie Charts & Tabular Analysis',
          titleHindi: 'पाई चार्ट एवं तालिका विश्लेषण',
          difficulty: 'Intermediate',
          subtopics: ['360° = 100%, 1% = 3.6°', 'Percentage growth and ratio calculation from graph', 'UPSSSC PET 20-mark Table & Graph mastery'],
          keyFormulasOrRules: ['Degree to Percentage: (Angle / 360) × 100%'],
          examMapping: ['upsssc-pet', 'ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-m-di-1',
          subjectId: 'maths',
          chapterId: 'math-ch19',
          chapterName: 'Data Interpretation',
          chapterNameHindi: 'आंकड़ों का विश्लेषण',
          question: 'In a pie chart, if the sector for Education corresponds to 54°, what percentage of the total expenditure is spent on education?',
          questionHindi: 'एक पाई चार्ट में यदि शिक्षा का केंद्रीय कोण 54° है, तो कुल व्यय का कितना प्रतिशत शिक्षा पर खर्च किया जाता है?',
          options: ['12%', '15%', '18%', '20%'],
          optionsHindi: ['12%', '15%', '18%', '20%'],
          correctAnswer: 1,
          explanation: 'Percentage = (54° / 360°) × 100% = 15%.',
          explanationHindi: 'प्रतिशत = (54 / 360) × 100 = 15%।',
          difficulty: 'Basic',
          examTags: ['UPSSSC PET (10 Marks DI)', 'SSC CGL']
        }
      ]
    }
  ]
};
