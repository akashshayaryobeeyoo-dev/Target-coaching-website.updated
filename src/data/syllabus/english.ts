import { Subject } from '../../types';

export const ENGLISH_SUBJECT: Subject = {
  id: 'english',
  name: 'General English',
  hindiName: 'सामान्य अंग्रेजी (Grammar, Vocabulary & Comprehension)',
  iconName: 'BookCheck',
  color: 'from-violet-600 to-purple-700',
  description: 'Complete grammar rules, vocabulary roots, idioms, error spotting, voice, narration, cloze test, and comprehension for SSC CGL, CHSL, MTS, CPO, and Agniveer by Ashvani Sir.',
  totalChapters: 23,
  totalQuestions: 46,
  chapters: [
    {
      id: 'eng-ch1',
      subjectId: 'english',
      name: 'Parts of Speech',
      nameHindi: 'पार्ट्स ऑफ स्पीच (Overview)',
      difficulty: 'Basic',
      estimatedHours: 4,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Understanding the 8 parts of speech (Noun, Pronoun, Adjective, Verb, Adverb, Preposition, Conjunction, Interjection) and their functions in sentences.',
      topics: [
        {
          id: 'eng-ch1-t1',
          title: 'Classification & Contextual Word Functions',
          titleHindi: 'शब्दों का वाक्यगत कार्य एवं भेद',
          difficulty: 'Basic',
          subtopics: ['How the same word acts as noun, verb or adjective (e.g. "fast", "well", "round")', 'Sentence parsing and syntactic roles'],
          keyFormulasOrRules: ['A word is not permanently one part of speech; its position and role in the sentence determine its category.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e1',
          subjectId: 'english',
          chapterId: 'eng-ch1',
          chapterName: 'Parts of Speech',
          chapterNameHindi: 'पार्ट्स ऑफ स्पीच',
          question: 'In the sentence "He fasts every Monday", what part of speech is the word "fasts"?',
          questionHindi: '"He fasts every Monday" वाक्य में "fasts" शब्द किस पार्ट ऑफ स्पीच (शब्द-भेद) के रूप में प्रयुक्त हुआ है?',
          options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
          optionsHindi: ['Noun (संज्ञा)', 'Verb (क्रिया)', 'Adjective (विशेषण)', 'Adverb (क्रिया-विशेषण)'],
          correctAnswer: 1,
          explanation: 'Here "fasts" expresses an action performed by subject "He", making it a finite verb.',
          explanationHindi: 'यहाँ "fasts" कर्ता "He" द्वारा की जाने वाली क्रिया (उपवास रखना) को दर्शाता है, अतः यह Verb (क्रिया) है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch2',
      subjectId: 'english',
      name: 'Nouns',
      nameHindi: 'नाउन्स (संज्ञा - Rules of Nouns)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Singular & Plural rules, Uncountable nouns (Furniture, Information, Advice, Luggage), Compound nouns, and Apostrophe-s rules.',
      topics: [
        {
          id: 'eng-ch2-t1',
          title: 'Uncountable Nouns & Pluralization Traps',
          titleHindi: 'अगणनीय संज्ञाएं एवं अपवाद',
          difficulty: 'Basic',
          subtopics: ['Nouns always singular: Furniture, Scenery, Luggage, Advice, Information, Hair, Bread', 'Nouns plural in form but singular in meaning: Mathematics, News, Physics, Innings, Measles', 'Nouns always plural: Scissors, Trousers, Spectacles, Cattle, Police, People'],
          keyFormulasOrRules: ['Never say "furnitures" or "informations" or "sceneries". Use "pieces of furniture" or "items of information".'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e2',
          subjectId: 'english',
          chapterId: 'eng-ch2',
          chapterName: 'Nouns',
          chapterNameHindi: 'नाउन्स',
          question: 'Spot the error: "The sceneries of Kashmir (A) / are really breathtaking (B) / and mesmerizing to all visitors (C) / No Error (D)".',
          questionHindi: 'त्रुटि पहचानें: "The sceneries of Kashmir (A) / are really breathtaking (B) / and mesmerizing to all visitors (C) / No Error (D)".',
          options: ['Part A', 'Part B', 'Part C', 'Part D (No Error)'],
          optionsHindi: ['भाग A', 'भाग B', 'भाग C', 'भाग D (कोई त्रुटि नहीं)'],
          correctAnswer: 0,
          explanation: '"Scenery" is an uncountable noun with no plural form. It must be written as "The scenery of Kashmir is...".',
          explanationHindi: '"Scenery" अगणनीय संज्ञा (uncountable noun) है, इसका बहुवचन "sceneries" नहीं होता। शुद्ध रूप: "The scenery of Kashmir is..." होगा।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch3',
      subjectId: 'english',
      name: 'Pronouns',
      nameHindi: 'प्रोनाउन्स (सर्वनाम - Rules of Pronouns)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Order of personal pronouns (2-3-1 for good acts, 1-2-3 for mistakes/guilt), Relative pronouns (Who vs Whom, That vs Which), and Distributive pronouns.',
      topics: [
        {
          id: 'eng-ch3-t1',
          title: 'Pronoun Order & Relative Pronouns',
          titleHindi: '231 नियम एवं Who/Whom का प्रयोग',
          difficulty: 'Intermediate',
          subtopics: ['Order of Pronouns: 2nd, 3rd, 1st person (You, he and I will go)', 'Confession rule: 1st, 2nd, 3rd (I, you and he are at fault)', 'Use of "that" after All, None, Only, Same, Superlative degrees'],
          keyFormulasOrRules: ['Rule 231: Second person -> Third person -> First person in general sentences.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e3',
          subjectId: 'english',
          chapterId: 'eng-ch3',
          chapterName: 'Pronouns',
          chapterNameHindi: 'प्रोनाउन्स',
          question: 'Choose the correct sequence of pronouns: "____ must attend the convocation ceremony together."',
          questionHindi: 'सर्वनाम का सही क्रम चुनें: "____ must attend the convocation ceremony together."',
          options: ['I, you and he', 'You, he and I', 'He, you and I', 'You, I and he'],
          optionsHindi: ['I, you and he', 'You, he and I (2-3-1)', 'He, you and I', 'You, I and he'],
          correctAnswer: 1,
          explanation: 'According to Rule 231 of personal pronouns for pleasant/general actions: 2nd Person (You), 3rd Person (he), 1st Person (I).',
          explanationHindi: 'सामान्य या सकारात्मक संदर्भ में सर्वनामों का क्रम 2-3-1 होता है: You (2nd), he (3rd), and I (1st)।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch4',
      subjectId: 'english',
      name: 'Articles',
      nameHindi: 'आर्टिकल्स (A, An, The & Zero Article)',
      difficulty: 'Basic',
      estimatedHours: 4,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Indefinite articles (A/An based on sound, not spelling), Definite article (The), and omission of articles before proper nouns, sports, and meals.',
      topics: [
        {
          id: 'eng-ch4-t1',
          title: 'Vowel Sounds vs Letters & Definite Article',
          titleHindi: 'स्वर ध्वनि नियम एवं The का प्रयोग',
          difficulty: 'Basic',
          subtopics: ['Use "An" before vowel SOUNDS: An honest man, An heir, An hour, An MLA, An FIR', 'Use "A" before consonant sounds: A European, A university, A one-rupee coin', 'Definite article before unique natural entities, rivers, mountain ranges, musical instruments'],
          keyFormulasOrRules: ['European begins with "E" but has a "yu" consonant sound, so it takes "A European", not "An".'],
          examMapping: ['ssc-cgl', 'ssc-mts', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e4',
          subjectId: 'english',
          chapterId: 'eng-ch4',
          chapterName: 'Articles',
          chapterNameHindi: 'आर्टिकल्स',
          question: 'Fill in the blank with the appropriate article: "Mr. Sharma is ____ university professor."',
          questionHindi: 'उचित आर्टिकल चुनें: "Mr. Sharma is ____ university professor."',
          options: ['a', 'an', 'the', 'no article needed'],
          optionsHindi: ['a', 'an', 'the', 'no article'],
          correctAnswer: 0,
          explanation: '"University" begins with consonant phoneme /j/ ("yu"), therefore takes the article "a".',
          explanationHindi: '"University" का उच्चारण व्यंजन ध्वनि "य" (yu) से शुरू होता है, अतः इसके पूर्व "a" लगेगा।',
          difficulty: 'Basic',
          examTags: ['SSC CHSL', 'SSC MTS', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch5',
      subjectId: 'english',
      name: 'Adjectives',
      nameHindi: 'एडजेक्टिव्स (Degrees of Comparison & Rules)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Positive, Comparative, Superlative degrees; Latin adjectives ending in -ior taking "to" instead of "than" (Senior, Junior, Prior, Superior).',
      topics: [
        {
          id: 'eng-ch5-t1',
          title: 'Latin Adjectives & Comparative Exceptions',
          titleHindi: 'Senior, Junior + to नियम एवं Little/Few',
          difficulty: 'Intermediate',
          subtopics: ['Superior, Inferior, Senior, Junior, Prior take "to", never "than"', 'Few / A few / The few (countable) vs Little / A little / The little (uncountable)', 'Avoid double comparatives (e.g. "more better" is incorrect)'],
          keyFormulasOrRules: ['He is senior TO me (NOT senior than me).'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e5',
          subjectId: 'english',
          chapterId: 'eng-ch5',
          chapterName: 'Adjectives',
          chapterNameHindi: 'एडजेक्टिव्स',
          question: 'Choose the correct preposition: "He is senior ____ me by three years in the department."',
          questionHindi: 'सही प्रीपोजिशन चुनें: "He is senior ____ me by three years in the department."',
          options: ['than', 'to', 'from', 'against'],
          optionsHindi: ['than', 'to', 'from', 'against'],
          correctAnswer: 1,
          explanation: 'Latin adjectives ending in -ior (senior, junior, superior, inferior) are followed by "to", never "than".',
          explanationHindi: 'Senior, junior, superior, inferior आदि लैटिन विशेषणों के बाद "than" नहीं बल्कि "to" का प्रयोग होता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch6',
      subjectId: 'english',
      name: 'Verbs',
      nameHindi: 'वर्ब्स (Finite, Non-Finite, Gerunds & Participles)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Transitive vs Intransitive verbs, Gerunds (-ing acting as noun), Infinitives (to + V1), and Bare infinitives after let, bid, make, see.',
      topics: [
        {
          id: 'eng-ch6-t1',
          title: 'Gerund vs Infinitive & Bare Infinitives',
          titleHindi: 'जेरंड, इन्फिनिटिव एवं बेयर इन्फिनिटिव',
          difficulty: 'Intermediate',
          subtopics: ['Verbs followed by Gerund: look forward to, used to, accustomed to, with a view to', 'Bare infinitive after modal verbs and let, make, watch, hear', 'Lie vs Lay confusing verb forms'],
          keyFormulasOrRules: ['"I am looking forward to MEETING you" (Meeting is a gerund after preposition to).'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e6',
          subjectId: 'english',
          chapterId: 'eng-ch6',
          chapterName: 'Verbs',
          chapterNameHindi: 'वर्ब्स',
          question: 'Fill in the blank: "I am looking forward to ____ you soon."',
          questionHindi: 'रिक्त स्थान भरें: "I am looking forward to ____ you soon."',
          options: ['see', 'seeing', 'have seen', 'be seen'],
          optionsHindi: ['see', 'seeing (Gerund)', 'have seen', 'be seen'],
          correctAnswer: 1,
          explanation: 'Phrase "looking forward to" takes a gerund (V1 + ing). Thus "seeing" is correct.',
          explanationHindi: '"Looking forward to" वाक्यांश के बाद "to" प्रीपोजिशन होता है, जिसके बाद जेरंड (seeing) प्रयुक्त होता है।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch7',
      subjectId: 'english',
      name: 'Tenses',
      nameHindi: 'टेन्सेस (काल - Present, Past & Future Rules)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Simple Present, Present Perfect vs Past Indefinite with time markers (yesterday, ago), Past Perfect with "before/after", and Conditional tenses.',
      topics: [
        {
          id: 'eng-ch7-t1',
          title: 'Past Perfect & Conditional Clauses',
          titleHindi: 'द पेशेंट हैड डाइड बिफोर द डॉक्टर केम नियम',
          difficulty: 'Intermediate',
          subtopics: ['Two past actions: Earlier action = Past Perfect (had + V3); Later action = Simple Past (V2)', 'If + Had + V3, Subject + would have + V3', 'Since + Simple Past time clause'],
          keyFormulasOrRules: ['"The patient had died before the doctor arrived."'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e7',
          subjectId: 'english',
          chapterId: 'eng-ch7',
          chapterName: 'Tenses',
          chapterNameHindi: 'टेन्सेस',
          question: 'Complete the sentence: "If she had worked hard, she ____ the examination."',
          questionHindi: 'वाक्य पूरा करें: "If she had worked hard, she ____ the examination."',
          options: ['will pass', 'would pass', 'would have passed', 'passed'],
          optionsHindi: ['will pass', 'would pass', 'would have passed', 'passed'],
          correctAnswer: 2,
          explanation: 'Third conditional pattern: If + Subject + had + V3, Subject + would have + V3.',
          explanationHindi: 'काल्पनिक भूतकाल की शर्त (3rd Conditional) में: If + had + V3 के बाद दूसरे उपवाक्य में "would have + V3" आता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch8',
      subjectId: 'english',
      name: 'Subject-Verb Agreement',
      nameHindi: 'सब्जेक्ट-वर्ब एग्रीमेंट (Syntax & Concord)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Singular subjects take singular verbs; Compound subjects joined by as well as, along with, together with; Either...or, Neither...nor proximity rule.',
      topics: [
        {
          id: 'eng-ch8-t1',
          title: 'Parenthetical Additions & Either/Neither Rules',
          titleHindi: 'Along with एवं Proximity नियम',
          difficulty: 'Intermediate',
          subtopics: ['Joined by "as well as, along with, with, in addition to" -> Verb agrees with FIRST subject', 'Joined by "either...or, neither...nor, not only...but also" -> Verb agrees with NEAREST subject', 'Each, Every, Either, Neither followed of plural noun takes SINGULAR verb'],
          keyFormulasOrRules: ['The teacher as well as his students WAS (not were) present in class.'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e8',
          subjectId: 'english',
          chapterId: 'eng-ch8',
          chapterName: 'Subject-Verb Agreement',
          chapterNameHindi: 'सब्जेक्ट-वर्ब एग्रीमेंट',
          question: 'Choose the correct verb: "Neither the manager nor the employees ____ available for the meeting."',
          questionHindi: 'सही क्रिया चुनें: "Neither the manager nor the employees ____ available for the meeting."',
          options: ['was', 'were', 'is', 'has been'],
          optionsHindi: ['was', 'were', 'is', 'has been'],
          correctAnswer: 1,
          explanation: 'When subjects are joined by "neither...nor", the verb agrees with the nearest subject ("employees" -> plural -> "were").',
          explanationHindi: 'Neither...nor से जुड़े होने पर क्रिया निकटतम कर्ता (the employees - बहुवचन) के अनुसार "were" होगी।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch9',
      subjectId: 'english',
      name: 'Modals',
      nameHindi: 'मॉडल्स (Can, Could, May, Might, Must, Ought to)',
      difficulty: 'Basic',
      estimatedHours: 5,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Modal auxiliary verbs expressing ability, permission, possibility, obligation, and necessity.',
      topics: [
        {
          id: 'eng-ch9-t1',
          title: 'Possibility, Obligation & Past Modals',
          titleHindi: 'संभावना एवं नैतिक कर्तव्य के नियम',
          difficulty: 'Basic',
          subtopics: ['May (formal permission/strong possibility) vs Might (remote possibility)', 'Must (compulsion) vs Ought to (moral duty) vs Should (recommendation)', 'Could have / Should have + V3 for unfulfilled past actions'],
          keyFormulasOrRules: ['Modal verbs are always followed by the base form of the verb (V1).'],
          examMapping: ['ssc-cgl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e9',
          subjectId: 'english',
          chapterId: 'eng-ch9',
          chapterName: 'Modals',
          chapterNameHindi: 'मॉडल्स',
          question: 'Choose the best modal: "You ____ respect your parents and teachers."',
          questionHindi: 'उचित मॉडल चुनें: "You ____ respect your parents and teachers."',
          options: ['might', 'ought to', 'can', 'may'],
          optionsHindi: ['might', 'ought to (नैतिक कर्तव्य)', 'can', 'may'],
          correctAnswer: 1,
          explanation: '"Ought to" expresses moral obligation and ethical duty towards elders.',
          explanationHindi: '"Ought to" नैतिक कर्तव्य और सामाजिक दायित्व को व्यक्त करने के लिए प्रयुक्त होता है।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch10',
      subjectId: 'english',
      name: 'Adverbs',
      nameHindi: 'एडवर्ब्स (Position, Inversion & Modifiers)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl'],
      description: 'Adverbs of manner, place, time, frequency, and inversion rules with negative adverbs (Hardly, Scarcely, Seldom, Never).',
      topics: [
        {
          id: 'eng-ch10-t1',
          title: 'Inversion Rule with Negative Adverbs',
          titleHindi: 'Hardly/Scarcely + Inversion नियम',
          difficulty: 'Intermediate',
          subtopics: ['Hardly / Scarcely + had + Subject + V3 ... WHEN', 'No sooner + had/did + Subject ... THAN', 'Seldom or never, Little did I know inversion'],
          keyFormulasOrRules: ['Hardly had he entered the room WHEN the telephone rang (NOT than).'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e10',
          subjectId: 'english',
          chapterId: 'eng-ch10',
          chapterName: 'Adverbs',
          chapterNameHindi: 'एडवर्ब्स',
          question: 'Spot the error: "Hardly had I arrived at the station (A) / than the train departed (B) / leaving me stranded (C) / No error (D)".',
          questionHindi: 'त्रुटि पहचानें: "Hardly had I arrived at the station (A) / than the train departed (B) / leaving me stranded (C) / No error (D)".',
          options: ['Part A', 'Part B', 'Part C', 'Part D (No error)'],
          optionsHindi: ['भाग A', 'भाग B', 'भाग C', 'भाग D'],
          correctAnswer: 1,
          explanation: '"Hardly" and "Scarcely" are followed by "when", not "than" (No sooner is followed by than).',
          explanationHindi: '"Hardly" और "Scarcely" के बाद "when" आता है, "than" नहीं ("No sooner" के बाद "than" आता है)।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch11',
      subjectId: 'english',
      name: 'Prepositions',
      nameHindi: 'प्रीपोजिशन्स (Fixed Prepositions & Confusing Pairs)',
      difficulty: 'Advanced',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'In, At, On, Into, Upon, Between, Among, Beside, Besides, and high-frequency Fixed Prepositions (Abide by, Accused of, Congratulate on).',
      topics: [
        {
          id: 'eng-ch11-t1',
          title: 'Fixed Prepositions Most Asked in SSC',
          titleHindi: 'फिक्स्ड प्रीपोजिशन्स एवं महत्वपूर्ण नियम',
          difficulty: 'Advanced',
          subtopics: ['Congratulate on (NOT for)', 'Die of a disease vs Die from a wound/overwork', 'Abide by rules, Cope with (NOT cope up with)', 'Prevent / Prohibit from + V1-ing'],
          keyFormulasOrRules: ['Never use "cope up with". The correct idiom is always "cope with".'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e11',
          subjectId: 'english',
          chapterId: 'eng-ch11',
          chapterName: 'Prepositions',
          chapterNameHindi: 'प्रीपोजिशन्स',
          question: 'Fill in the blank: "He congratulated his friend ____ scoring first rank in the competitive exam."',
          questionHindi: 'रिक्त स्थान भरें: "He congratulated his friend ____ scoring first rank in the competitive exam."',
          options: ['for', 'on', 'with', 'about'],
          optionsHindi: ['for', 'on', 'with', 'about'],
          correctAnswer: 1,
          explanation: 'The verb "congratulate" takes the fixed preposition "on" for the event/success.',
          explanationHindi: '"Congratulate" क्रिया के बाद सफलता या उपलब्धि के लिए फिक्स्ड प्रीपोजिशन "on" आता है ("for" नहीं)।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch12',
      subjectId: 'english',
      name: 'Conjunctions',
      nameHindi: 'कंजंक्शन्स (Correlative & Subordinating)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Correlative conjunctions: Not only...but also, Either...or, Neither...nor, Although...yet, Lest...should, Unless vs Until.',
      topics: [
        {
          id: 'eng-ch12-t1',
          title: 'Lest...should & Unless/Until Negative Rules',
          titleHindi: 'Lest के साथ Should एवं नकारात्मकता नियम',
          difficulty: 'Intermediate',
          subtopics: ['Lest must be followed by "should" or bare subjunctive; never takes "not"', 'Unless (condition) vs Until (time); both are inherently negative, so do not use "not" in their clauses', 'Although / Even though takes "yet" or a comma, never "but"'],
          keyFormulasOrRules: ['Walk carefully lest you SHOULD fall (Lest + should).'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e12',
          subjectId: 'english',
          chapterId: 'eng-ch12',
          chapterName: 'Conjunctions',
          chapterNameHindi: 'कंजंक्शन्स',
          question: 'Complete the sentence: "Run fast lest you ____ miss the last train."',
          questionHindi: 'वाक्य पूरा करें: "Run fast lest you ____ miss the last train."',
          options: ['will', 'may', 'should', 'might'],
          optionsHindi: ['will', 'may', 'should', 'might'],
          correctAnswer: 2,
          explanation: '"Lest" is paired exclusively with the modal auxiliary "should" to express purpose or fear.',
          explanationHindi: '"Lest" के साथ सदैव "should" का प्रयोग होता है (कदाचित ऐसा न हो कि...)।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch13',
      subjectId: 'english',
      name: 'Active-Passive Voice',
      nameHindi: 'एक्टिव एवं पैसिव वॉइस (Transformation Rules)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Rules of passive conversion for all 8 active tenses, interrogative sentences (Who -> By whom), imperative sentences (Let + be + V3), and verbs with prepositions.',
      topics: [
        {
          id: 'eng-ch13-t1',
          title: 'Tense-wise Transformation & Imperative Passives',
          titleHindi: 'पैसिव वॉइस रूपांतरण एवं Let + be + V3',
          difficulty: 'Intermediate',
          subtopics: ['Simple Present (is/am/are + V3) to Future Perfect', 'Imperatives: "Close the door" -> "Let the door be closed"', 'Who wrote this book? -> By whom was this book written?'],
          keyFormulasOrRules: ['Continuous tenses add "being" + V3; Perfect tenses add "been" + V3.'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e13',
          subjectId: 'english',
          chapterId: 'eng-ch13',
          chapterName: 'Active-Passive Voice',
          chapterNameHindi: 'एक्टिव-पैसिव वॉइस',
          question: 'Transform to passive voice: "Someone stole my watch yesterday."',
          questionHindi: 'पैसिव वॉइस में बदलें: "Someone stole my watch yesterday."',
          options: ['My watch was stolen yesterday.', 'My watch had been stolen yesterday.', 'My watch is stolen yesterday.', 'Someone had stolen my watch.'],
          optionsHindi: ['My watch was stolen yesterday.', 'My watch had been stolen yesterday.', 'My watch is stolen yesterday.', 'Someone had stolen my watch.'],
          correctAnswer: 0,
          explanation: 'Simple Past (stole) transforms into was/were + V3 (was stolen). Vague agent "by someone" is omitted.',
          explanationHindi: 'Simple Past (V2) पैसिव में "was/were + V3" बनता है। अज्ञात कर्ता (someone) को छोड़ दिया जाता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch14',
      subjectId: 'english',
      name: 'Direct-Indirect Speech',
      nameHindi: 'डायरेक्ट-इनडायरेक्ट स्पीच (Narration)',
      difficulty: 'Advanced',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl'],
      description: 'Reporting verb past tense shifts (Present Indefinite -> Past Indefinite, Present Continuous -> Past Continuous, Will -> Would), pronoun shifts (SON/123), and universal truths.',
      topics: [
        {
          id: 'eng-ch14-t1',
          title: 'Tense Backshifting & Universal Truth Exception',
          titleHindi: 'सार्वभौमिक सत्य एवं काल परिवर्तन',
          difficulty: 'Advanced',
          subtopics: ['Universal Truths / Scientific facts do NOT change tense (Teacher said the earth revolves around the sun)', 'Interrogatives: "if/whether" for yes-no questions, Wh-word retained', 'Imperatives: ordered, requested, advised + to + V1'],
          keyFormulasOrRules: ['SON formula: 1st person changes by Subject; 2nd person by Object; 3rd person has No change.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e14',
          subjectId: 'english',
          chapterId: 'eng-ch14',
          chapterName: 'Direct-Indirect Speech',
          chapterNameHindi: 'डायरेक्ट-इनडायरेक्ट स्पीच',
          question: 'Convert into indirect speech: The teacher said, "The earth revolves around the sun."',
          questionHindi: 'इनडायरेक्ट स्पीच में बदलें: The teacher said, "The earth revolves around the sun."',
          options: ['The teacher said that the earth revolved around the sun.', 'The teacher said that the earth revolves around the sun.', 'The teacher told the earth revolves around the sun.', 'The teacher says the earth is revolving around the sun.'],
          optionsHindi: ['The teacher said that the earth revolved around the sun.', 'The teacher said that the earth revolves around the sun.', 'The teacher told the earth revolves around the sun.', 'The teacher says the earth is revolving around the sun.'],
          correctAnswer: 1,
          explanation: 'Because "The earth revolves around the sun" is a universal scientific fact, its tense remains in the simple present.',
          explanationHindi: 'सार्वभौमिक वैज्ञानिक सत्य (Universal Truth) होने के कारण रिपोर्टेड स्पीच के काल (tense) में कोई परिवर्तन नहीं होता।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch15',
      subjectId: 'english',
      name: 'Vocabulary',
      nameHindi: 'वोकैबुलरी बिल्डर (Root Words, Prefixes & Suffixes)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Latin & Greek roots (Chron, Mal, Bene, Phil, Path, Morph, Loqu, Vor) to deduce unfamiliar English words quickly.',
      topics: [
        {
          id: 'eng-ch15-t1',
          title: 'Power of Root Words',
          titleHindi: 'रूट वर्ड्स से 500 शब्द सीखें',
          difficulty: 'Intermediate',
          subtopics: ['BENE = Good (Benefactor, Benevolent, Beneficial)', 'MAL = Bad (Malevolent, Malicious, Malnutrition)', 'LOQU/LOC = Speech (Loquacious, Eloquent, Soliloquy, Circumlocution)'],
          keyFormulasOrRules: ['Phil = Love (Bibliophile, Philanthropist); Phobia = Fear; Mania = Madness.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e15',
          subjectId: 'english',
          chapterId: 'eng-ch15',
          chapterName: 'Vocabulary',
          chapterNameHindi: 'वोकैबुलरी',
          question: 'What is the meaning of the word "Loquacious" derived from the root "loqu" (to speak)?',
          questionHindi: 'रूट "loqu" (बोलना) से बने शब्द "Loquacious" का क्या अर्थ है?',
          options: ['Quiet and reserved', 'Extremely talkative', 'Hostile and angry', 'Generous and charitable'],
          optionsHindi: ['शांत एवं अंतर्मुखी', 'अत्यधिक बातूनी (Talkative)', 'क्रोधित', 'उदार'],
          correctAnswer: 1,
          explanation: '"Loquacious" means tending to talk a great deal; talkative.',
          explanationHindi: '"Loquacious" का अर्थ बहुत अधिक बातें करने वाला (बातूनी) होता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch16',
      subjectId: 'english',
      name: 'Synonyms',
      nameHindi: 'सिनोनिम्स (समानार्थक शब्द - High Frequency)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Frequently repeated synonyms in SSC and competitive exams: Candid, Diligent, Meticulous, Ephemeral, Taciturn, Pragmatic.',
      topics: [
        {
          id: 'eng-ch16-t1',
          title: 'Repeated SSC Question Bank Synonyms',
          titleHindi: 'परीक्षा उपयोगी समानार्थक शब्द',
          difficulty: 'Intermediate',
          subtopics: ['Diligent = Industrious, Hardworking, Assiduous', 'Ephemeral = Transient, Fleeting, Short-lived', 'Candid = Frank, Honest, Outspoken'],
          keyFormulasOrRules: ['Contextual elimination: Identify whether the target word has positive, negative, or neutral connotation.'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e16',
          subjectId: 'english',
          chapterId: 'eng-ch16',
          chapterName: 'Synonyms',
          chapterNameHindi: 'सिनोनिम्स',
          question: 'Choose the most appropriate synonym for "DILIGENT":',
          questionHindi: '"DILIGENT" (परिश्रमी) का सर्वाधिक उपयुक्त समानार्थी शब्द चुनें:',
          options: ['Lazy', 'Industrious', 'Arrogant', 'Cautious'],
          optionsHindi: ['Lazy (आलसी)', 'Industrious (मेहनती)', 'Arrogant', 'Cautious'],
          correctAnswer: 1,
          explanation: '"Diligent" means showing care and conscientiousness in work; synonym is "Industrious".',
          explanationHindi: '"Diligent" का अर्थ परिश्रमी/मेहनती होता है, जिसका सटीक समानार्थी "Industrious" है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch17',
      subjectId: 'english',
      name: 'Antonyms',
      nameHindi: 'एंटोनिम्स (विपरीतार्थक शब्द)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'army-agniveer'],
      description: 'Essential antonyms: Zenith vs Nadir, Obsolete vs Modern, Gregarious vs Introvert, Opulent vs Destitute, Frugal vs Extravagant.',
      topics: [
        {
          id: 'eng-ch17-t1',
          title: 'Standard SSC Antonym Pairs',
          titleHindi: 'महत्वपूर्ण विपरीतार्थक शब्द जोड़े',
          difficulty: 'Intermediate',
          subtopics: ['Zenith (Peak) -> Nadir (Lowest point)', 'Frugal (Economical) -> Extravagant / Spendthrift (Lavish)', 'Gregarious (Sociable) -> Recluse / Unsociable'],
          keyFormulasOrRules: ['Look for opposite connotation: A positive word will usually have a negative antonym.'],
          examMapping: ['ssc-cgl', 'ssc-chsl', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e17',
          subjectId: 'english',
          chapterId: 'eng-ch17',
          chapterName: 'Antonyms',
          chapterNameHindi: 'एंटोनिम्स',
          question: 'What is the exact antonym of the word "ZENITH" (the highest point)?',
          questionHindi: '"ZENITH" (शीर्ष बिंदु) का सही विलोम शब्द क्या है?',
          options: ['Apex', 'Acme', 'Nadir', 'Pinnacle'],
          optionsHindi: ['Apex', 'Acme', 'Nadir (पाताल/निम्नतम बिंदु)', 'Pinnacle'],
          correctAnswer: 2,
          explanation: '"Zenith" is the highest peak or culmination; its exact antonym is "Nadir" (the lowest point).',
          explanationHindi: '"Zenith" का अर्थ सर्वोच्च बिंदु या शिखर है, जिसका विलोम "Nadir" (निम्नतम बिंदु) होता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'eng-ch18',
      subjectId: 'english',
      name: 'Idioms',
      nameHindi: 'इडियम्स एवं फ्रेजेज (Idioms & Phrases)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'High-frequency English idioms: Once in a blue moon, At the eleventh hour, Spil the beans, Break the ice, Beat around the bush.',
      topics: [
        {
          id: 'eng-ch18-t1',
          title: 'Idioms by Themes & Origins',
          titleHindi: 'थीम अनुसार मुहावरे एवं अर्थ',
          difficulty: 'Intermediate',
          subtopics: ['Color idioms: Once in a blue moon (rarely), Red handed (caught in the act)', 'Time idioms: At the eleventh hour (at the very last moment)', 'Body idioms: Cost an arm and a leg (extremely expensive)'],
          keyFormulasOrRules: ['Never take literal meaning: "Break the ice" does not mean freezing water, but initiating a conversation.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e18',
          subjectId: 'english',
          chapterId: 'eng-ch18',
          chapterName: 'Idioms',
          chapterNameHindi: 'इडियम्स',
          question: 'What does the idiom "Once in a blue moon" mean?',
          questionHindi: 'मुहावरे "Once in a blue moon" का क्या अर्थ है?',
          options: ['Very frequently', 'Rarely or almost never', 'On full moon night', 'During rainy season'],
          optionsHindi: ['बार-बार', 'शायद ही कभी (Rarely)', 'पूर्णिमा की रात', 'बरसात में'],
          correctAnswer: 1,
          explanation: '"Once in a blue moon" is an idiom used to describe an event that happens extremely rarely.',
          explanationHindi: '"Once in a blue moon" का अर्थ कोई घटना जो अत्यंत दुर्लभ रूप से या शायद ही कभी घटित हो।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'SSC MTS']
        }
      ]
    },
    {
      id: 'eng-ch19',
      subjectId: 'english',
      name: 'One-Word Substitution',
      nameHindi: 'वन-वर्ड सब्स्टीट्यूशन (अनेक शब्दों के लिए एक शब्द)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Categorized single words: People (Omniscient, Polyglot, Altruist), Places (Mortuary, Apiary, Aviary), Deaths (Suicide, Matricide, Regicide), and Beliefs (Atheist, Agnostic).',
      topics: [
        {
          id: 'eng-ch19-t1',
          title: 'Specialized One-Word Lists',
          titleHindi: 'Cide (हत्या), Phile (प्रेमी) एवं Aviary/Apiary',
          difficulty: 'Intermediate',
          subtopics: ['Apiary (place where bees are kept) vs Aviary (place where birds are kept)', 'Altruist (one who works selflessly for welfare of others)', 'Omnipresent (present everywhere), Omnipotent (all powerful), Omniscient (all knowing)'],
          keyFormulasOrRules: ['Bees = Apiary (Apis is Latin for bee); Birds = Aviary (Avis is Latin for bird).'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e19',
          subjectId: 'english',
          chapterId: 'eng-ch19',
          chapterName: 'One-Word Substitution',
          chapterNameHindi: 'वन-वर्ड सब्स्टीट्यूशन',
          question: 'What is a place where bees are kept called?',
          questionHindi: 'मधुमक्खियों के रखे जाने के स्थान को क्या कहा जाता है?',
          options: ['Aviary', 'Apiary', 'Aquarium', 'Sanctuary'],
          optionsHindi: ['Aviary (पक्षियों का स्थान)', 'Apiary (मधुमक्खी शाला)', 'Aquarium', 'Sanctuary'],
          correctAnswer: 1,
          explanation: 'An Apiary is a location where beehives of honey bees are kept (Aviary is for birds).',
          explanationHindi: 'मधुमक्खियों के पालन स्थल को Apiary कहा जाता है (पक्षियों के स्थल को Aviary कहते हैं)।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'SSC MTS']
        }
      ]
    },
    {
      id: 'eng-ch20',
      subjectId: 'english',
      name: 'Error Spotting',
      nameHindi: 'एरर स्पॉटिंग (Grammar Trap Identification)',
      difficulty: 'Advanced',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Comprehensive error spotting integrating syntax, modifiers, parallel structure, conditional clauses, and prepositions.',
      topics: [
        {
          id: 'eng-ch20-t1',
          title: 'Common Grammatical Pitfalls in SSC Exams',
          titleHindi: 'एरर स्पॉटिंग हल करने की 5-चरणीय तकनीक',
          difficulty: 'Advanced',
          subtopics: ['Step 1: Check Subject-Verb Concord', 'Step 2: Check Tense consistency & Conditionals', 'Step 3: Check Prepositions & Pronouns', 'Step 4: Check Adjective/Adverb placement'],
          keyFormulasOrRules: ['Follow Ashvani Sir’s rule: Always look for Subject and main Verb first.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e20',
          subjectId: 'english',
          chapterId: 'eng-ch20',
          chapterName: 'Error Spotting',
          chapterNameHindi: 'एरर स्पॉटिंग',
          question: 'Find the erroneous part: "Each of the participants (A) / were presented with (B) / a certificate of merit (C) / No error (D)".',
          questionHindi: 'त्रुटिपूर्ण भाग ज्ञात करें: "Each of the participants (A) / were presented with (B) / a certificate of merit (C) / No error (D)".',
          options: ['Part A', 'Part B', 'Part C', 'Part D (No error)'],
          optionsHindi: ['भाग A', 'भाग B', 'भाग C', 'भाग D'],
          correctAnswer: 1,
          explanation: '"Each of..." takes a singular verb. "were presented" must be replaced with "was presented".',
          explanationHindi: '"Each of..." के बाद संज्ञा बहुवचन (participants) लेकिन क्रिया एकवचन (was) आती है। अतः भाग B में त्रुटि है।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch21',
      subjectId: 'english',
      name: 'Sentence Improvement',
      nameHindi: 'सेंटेंस इम्प्रूवमेंट (Phrase Replacement & Phrasal Verbs)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl'],
      description: 'Replacing underlined segments with more grammatically accurate and concise constructions; phrasal verbs (Call off, Put out, Look into).',
      topics: [
        {
          id: 'eng-ch21-t1',
          title: 'Phrasal Verbs & Redundancy Elimination',
          titleHindi: 'फ्रेजल वर्ब्स एवं शब्द संक्षेपण',
          difficulty: 'Intermediate',
          subtopics: ['Call off = Cancel; Put off = Postpone; Look into = Investigate', 'Avoid redundant expressions: "Return back" (use only return), "Repeat again"'],
          keyFormulasOrRules: ['Never write "return back" or "revert back" because "re-" already signifies back.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e21',
          subjectId: 'english',
          chapterId: 'eng-ch21',
          chapterName: 'Sentence Improvement',
          chapterNameHindi: 'सेंटेंस इम्प्रूवमेंट',
          question: 'Improve the bracketed part: "The committee decided to [call out] the annual sports meet due to heavy rain."',
          questionHindi: 'कोष्ठक वाले भाग में सुधार करें: "The committee decided to [call out] the annual sports meet due to heavy rain."',
          options: ['call off', 'call in', 'call upon', 'No improvement'],
          optionsHindi: ['call off (रद्द करना)', 'call in', 'call upon', 'No improvement'],
          correctAnswer: 0,
          explanation: '"Call off" is the phrasal verb meaning to cancel an event.',
          explanationHindi: '"Call off" का अर्थ किसी कार्यक्रम को रद्द (cancel) करना होता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    },
    {
      id: 'eng-ch22',
      subjectId: 'english',
      name: 'Cloze Test',
      nameHindi: 'क्लोज़ टेस्ट (Contextual Passage Fillers)',
      difficulty: 'Advanced',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts'],
      description: 'Techniques for solving 5-blank and 10-blank passages based on tone, vocabulary collocations, prepositional linkages, and grammar coherence.',
      topics: [
        {
          id: 'eng-ch22-t1',
          title: 'Cloze Passage Solving Strategies',
          titleHindi: 'क्लोज़ टेस्ट हल करने की विधि',
          difficulty: 'Advanced',
          subtopics: ['Read the entire passage without filling blanks to get the overarching tone', 'Look for collocations (e.g. "play a vital role", "take into account")', 'Check grammatical parts of speech needed in each blank'],
          keyFormulasOrRules: ['Identify whether the missing word must be a verb, preposition, connector, or noun.'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e22',
          subjectId: 'english',
          chapterId: 'eng-ch22',
          chapterName: 'Cloze Test',
          chapterNameHindi: 'क्लोज़ टेस्ट',
          question: 'In the sentence "Education plays a ____ role in shaping a student’s future", which collocation word fits best?',
          questionHindi: '"Education plays a ____ role in shaping a student’s future" में कौन सा शब्द सर्वाधिक उपयुक्त है?',
          options: ['vital', 'tiny', 'casual', 'doubtful'],
          optionsHindi: ['vital (महत्वपूर्ण)', 'tiny', 'casual', 'doubtful'],
          correctAnswer: 0,
          explanation: '"Play a vital role" is standard English collocation meaning an indispensable part.',
          explanationHindi: '"Play a vital role" एक मानक अंग्रेजी कोलाेकेशन है जिसका अर्थ अत्यंत महत्वपूर्ण भूमिका निभाना है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL', 'SSC MTS']
        }
      ]
    },
    {
      id: 'eng-ch23',
      subjectId: 'english',
      name: 'Reading Comprehension and Para Jumbles',
      nameHindi: 'रीडिंग कॉम्प्रिहेंशन एवं पैरा जम्बल्स (Sentence Rearrangement)',
      difficulty: 'Advanced',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl'],
      description: 'Skimming and scanning comprehension passages, identifying the main theme, tone of author, and mandatory pair linkage tricks for Para Jumbles (PQRS).',
      topics: [
        {
          id: 'eng-ch23-t1',
          title: 'Para Jumbles Mandatory Pairs & Reading Speed',
          titleHindi: 'PQRS रीअरेंजमेंट ट्रिक्स एवं कॉम्प्रिहेंशन',
          difficulty: 'Advanced',
          subtopics: ['Finding opening sentence (Independent noun introduction, avoid starting with pronoun or transition)', 'Mandatory Pairs (Noun followed by pronoun; Cause followed by effect)', 'Chronological cues (initially -> later -> finally)'],
          keyFormulasOrRules: ['Elimination trick: An opening sentence almost never begins with "However", "Therefore", "Moreover", or "He/She".'],
          examMapping: ['ssc-cgl', 'ssc-chsl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-e23',
          subjectId: 'english',
          chapterId: 'eng-ch23',
          chapterName: 'Reading Comprehension and Para Jumbles',
          chapterNameHindi: 'कॉम्प्रिहेंशन एवं पैरा जम्बल्स',
          question: 'In a Para Jumble question, which type of sentence is most likely to be the opening sentence?',
          questionHindi: 'पैरा जम्बल (PQRS) प्रश्न में, कौन सा वाक्य प्रथम (शुरुआती) वाक्य होने की सर्वाधिक संभावना रखता है?',
          options: ['A sentence starting with "However, this led to..."', 'A sentence introducing the main subject/noun independently', 'A sentence starting with "Therefore he decided..."', 'A sentence starting with "In conclusion..."'],
          optionsHindi: ['"However, this led to..." से शुरू होने वाला', 'स्वतंत्र रूप से मुख्य विषय/संज्ञा का परिचय कराने वाला वाक्य', '"Therefore he decided..." से शुरू होने वाला', '"In conclusion..." से शुरू होने वाला'],
          correctAnswer: 1,
          explanation: 'The opening sentence introduces the main topic/character independently without relying on preceding pronouns or transitional adverbs.',
          explanationHindi: 'शुरुआती वाक्य स्वतंत्र रूप से मुख्य विषय या पात्र का परिचय देता है, जो पूर्ववर्ती सर्वनामों या संयोजकों पर निर्भर नहीं होता।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'SSC CHSL']
        }
      ]
    }
  ]
};
