import { Subject } from '../../types';

export const HINDI_SUBJECT: Subject = {
  id: 'hindi',
  name: 'General Hindi',
  hindiName: 'सामान्य हिन्दी (व्याकरण, शब्द-भण्डार एवं काव्यशास्त्र)',
  iconName: 'Languages',
  color: 'from-orange-600 to-amber-700',
  description: 'Complete Hindi grammar, vocabulary, proverbs, and comprehension for UP Police Constable & SI, UPSSSC PET, Lekhpal, SSC GD, and State examinations by Ashvani Sir.',
  totalChapters: 20,
  totalQuestions: 40,
  chapters: [
    {
      id: 'hin-ch1',
      subjectId: 'hindi',
      name: 'वर्णमाला',
      nameHindi: 'वर्णमाला (स्वर, व्यंजन एवं उच्चारण स्थान)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'स्वर (ह्रस्व, दीर्घ, प्लुत), व्यंजन (स्पर्श, अंतःस्थ, ऊष्म, संयुक्त), अल्पप्राण-महाप्राण, घोष-अघोष तथा उच्चारण स्थान (कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य)।',
      topics: [
        {
          id: 'hin-ch1-t1',
          title: 'स्वर एवं व्यंजन का वर्गीकरण',
          titleHindi: 'स्वर, व्यंजन, घोषत्व एवं प्राणत्व',
          difficulty: 'Basic',
          subtopics: ['11 स्वर एवं 33 मूल व्यंजन', 'कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य वर्ग', 'अल्पप्राण (1, 3, 5 + अंतःस्थ) व महाप्राण (2, 4 + ऊष्म)'],
          keyFormulasOrRules: ['अघोष वर्ण: प्रत्येक वर्ग का पहला और दूसरा वर्ण तथा श, ष, स।', 'सघोष/घोष: प्रत्येक वर्ग का 3, 4, 5वां वर्ण, सभी स्वर तथा य, र, ल, व, ह।'],
          solvedExamples: [{
            id: 'ex-hin-1',
            problem: '‘च’ वर्ग का उच्चारण स्थान क्या है?',
            solution: 'तालु (तालव्य)। सूत्र: इचुयशानां तालु (इ, ई, च-वर्ग, य, श तालव्य हैं)।',
            trickOrTip: 'अश्वनी सर ट्रिक: कचटतप (K-T-M-D-O: कंठ, तालु, मूर्धा, दंत, ओष्ठ)।'
          }],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h1',
          subjectId: 'hindi',
          chapterId: 'hin-ch1',
          chapterName: 'वर्णमाला',
          chapterNameHindi: 'वर्णमाला',
          question: 'Which of the following is a "Mahaprana" consonant in the Hindi alphabet?',
          questionHindi: 'निम्नलिखित में से कौन सा वर्ण "महाप्राण" व्यंजन है?',
          options: ['क (k)', 'ख (kh)', 'ग (g)', 'च (ch)'],
          optionsHindi: ['क', 'ख', 'ग', 'च'],
          correctAnswer: 1,
          explanation: 'In Hindi phonetics, the 2nd and 4th consonants of each varga (ख, घ, छ, झ, etc.) and sibilants are Mahaprana.',
          explanationHindi: 'प्रत्येक वर्ग का दूसरा और चौथा वर्ण (ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ) तथा ऊष्म वर्ण महाप्राण होते हैं।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch2',
      subjectId: 'hindi',
      name: 'शब्द-विचार',
      nameHindi: 'शब्द-विचार (तत्सम, तद्भव, देशज एवं विदेशज)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'स्रोत के आधार पर शब्द भेद: तत्सम (संस्कृत के मूल शब्द), तद्भव (परिवर्तित रूप), देशज (स्थानीय बोलियों के शब्द) एवं विदेशज/आगत शब्द।',
      topics: [
        {
          id: 'hin-ch2-t1',
          title: 'तत्सम एवं तद्भव शब्दों की पहचान',
          titleHindi: 'तत्सम-तद्भव परिवर्तन नियम',
          difficulty: 'Intermediate',
          subtopics: ['‘क्ष’ का ‘ख’ या ‘छ’ में परिवर्तन (क्षीर -> खीर)', '‘श’ का ‘स’ में परिवर्तन (श्यामल -> साँवला)', 'देशज शब्द (लोटा, पगड़ी, खिड़की, डिबिया)'],
          keyFormulasOrRules: ['जिन शब्दों में संयुक्त व्यंजन (क्ष, त्र, ज्ञ, श्र) या अनुस्वार/ऋ की मात्रा हो, वे 99% तत्सम होते हैं। चंद्रबिंदु (ँ) वाले शब्द तद्भव होते हैं।'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h2',
          subjectId: 'hindi',
          chapterId: 'hin-ch2',
          chapterName: 'शब्द-विचार',
          chapterNameHindi: 'शब्द-विचार',
          question: 'What is the "Tatsama" (Sanskrit origin) form of the Tadbhava word "आँख" (Aankh)?',
          questionHindi: 'तद्भव शब्द "आँख" का तत्सम रूप निम्नलिखित में से क्या है?',
          options: ['लोचन', 'अक्षि', 'नेत्र', 'चक्षु'],
          optionsHindi: ['लोचन', 'अक्षि', 'नेत्र', 'चक्षु'],
          correctAnswer: 1,
          explanation: '"अक्षि" is the exact Tatsama form from which "आँख" is derived through linguistic evolution.',
          explanationHindi: '"अक्षि" तत्सम शब्द है, जिससे विकासक्रम में तद्भव शब्द "आँख" बना है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch3',
      subjectId: 'hindi',
      name: 'संज्ञा',
      nameHindi: 'संज्ञा (प्रकार, पहचान एवं प्रयोग)',
      difficulty: 'Basic',
      estimatedHours: 4,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'व्यक्तिवाचक, जातिवाचक, भाववाचक, समूहवाचक एवं द्रव्यवाचक संज्ञा तथा भाववाचक संज्ञा निर्माण।',
      topics: [
        {
          id: 'hin-ch3-t1',
          title: 'संज्ञा के पांचों भेद एवं रूपांतरण',
          titleHindi: 'जातिवाचक से भाववाचक संज्ञा बनाना',
          difficulty: 'Basic',
          subtopics: ['व्यक्तिवाचक से जातिवाचक में प्रयोग (जयचंदों से सावधान)', 'प्रत्यय जोड़कर भाववाचक संज्ञा (मित्र -> मित्रता, सुंदर -> सुंदरता)', 'द्रव्यवाचक व समूहवाचक की विशेषताएं'],
          keyFormulasOrRules: ['भाववाचक संज्ञाएं अमूर्त होती हैं, जिन्हें केवल अनुभव किया जा सकता है, छुआ नहीं जा सकता।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h3',
          subjectId: 'hindi',
          chapterId: 'hin-ch3',
          chapterName: 'संज्ञा',
          chapterNameHindi: 'संज्ञा',
          question: 'Which of the following is an "Abstract Noun" (भाववाचक संज्ञा)?',
          questionHindi: 'निम्नलिखित में से कौन सा शब्द "भाववाचक संज्ञा" है?',
          options: ['लड़का (Boy)', 'गंगा (Ganga)', 'मिठास (Sweetness)', 'सभा (Assembly)'],
          optionsHindi: ['लड़का', 'गंगा', 'मिठास', 'सभा'],
          correctAnswer: 2,
          explanation: '"मिठास" represents an abstract quality/feeling, formed by adding "आस" suffix to adjective "मीठा".',
          explanationHindi: '"मिठास" भाववाचक संज्ञा है, जो विशेषण "मीठा" में "आस" प्रत्यय लगाकर बनी है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch4',
      subjectId: 'hindi',
      name: 'सर्वनाम',
      nameHindi: 'सर्वनाम (6 भेद एवं शुद्ध प्रयोग)',
      difficulty: 'Basic',
      estimatedHours: 4,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक एवं निजवाचक सर्वनाम।',
      topics: [
        {
          id: 'hin-ch4-t1',
          title: 'सर्वनाम के भेद एवं निजवाचक की पहचान',
          titleHindi: 'निजवाचक एवं पुरुषवाचक में अंतर',
          difficulty: 'Basic',
          subtopics: ['उत्तम, मध्यम एवं अन्य पुरुष', 'निजवाचक सर्वनाम: आप, स्वयं, खुद का प्रयोग', 'सर्वनामों की कारक रचना'],
          keyFormulasOrRules: ['जब "आप" का प्रयोग कर्ता स्वयं के लिए करता है ("मैं अपने आप कर लूँगा"), तब यह निजवाचक सर्वनाम होता है।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h4',
          subjectId: 'hindi',
          chapterId: 'hin-ch4',
          chapterName: 'सर्वनाम',
          chapterNameHindi: 'सर्वनाम',
          question: 'In the sentence "वह अपना काम आप ही कर लेगा", what kind of pronoun is "आप"?',
          questionHindi: '"वह अपना काम आप ही कर लेगा" वाक्य में "आप" कौन सा सर्वनाम है?',
          options: ['मध्यम पुरुषवाचक', 'निजवाचक', 'संबंधवाचक', 'निश्चयवाचक'],
          optionsHindi: ['मध्यम पुरुषवाचक', 'निजवाचक', 'संबंधवाचक', 'निश्चयवाचक'],
          correctAnswer: 1,
          explanation: '"आप" here refers to oneself, making it a reflexive pronoun (निजवाचक सर्वनाम).',
          explanationHindi: 'यहाँ "आप" का प्रयोग "स्वयं" या "खुद" के अर्थ में हुआ है, अतः यह निजवाचक सर्वनाम है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch5',
      subjectId: 'hindi',
      name: 'विशेषण',
      nameHindi: 'विशेषण (गुणवाचक, संख्यावाचक, परिमाणवाचक, सार्वनामिक)',
      difficulty: 'Intermediate',
      estimatedHours: 5,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'विशेषण के चार भेद, विशेष्य, प्रविशेषण की पहचान और तुलनात्मक अवस्थाएं (मूलावस्था, उत्तरावस्था, उत्तमावस्था)।',
      topics: [
        {
          id: 'hin-ch5-t1',
          title: 'विशेषण-विशेष्य एवं प्रविशेषण',
          titleHindi: 'प्रविशेषण एवं अवस्थाएं',
          difficulty: 'Intermediate',
          subtopics: ['विशेषण की विशेषता बताने वाले शब्द = प्रविशेषण (बहुत सुंदर)', 'निश्चित व अनिश्चित संख्या/परिमाण', 'सार्वनामिक विशेषण की पहचान'],
          keyFormulasOrRules: ['यदि सर्वनाम संज्ञा से ठीक पहले आकर उसकी ओर संकेत करे, तो वह सार्वनामिक विशेषण कहलाता है (जैसे: "यह लड़का")।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h5',
          subjectId: 'hindi',
          chapterId: 'hin-ch5',
          chapterName: 'विशेषण',
          chapterNameHindi: 'विशेषण',
          question: 'In "कश्मीरी सेब सिंदूरी लाल होता है", which word functions as a Pravisheshan (प्रविशेषण)?',
          questionHindi: '"कश्मीरी सेब सिंदूरी लाल होता है" वाक्य में "सिंदूरी" क्या है?',
          options: ['विशेष्य', 'गुणवाचक विशेषण', 'प्रविशेषण', 'सार्वनामिक विशेषण'],
          optionsHindi: ['विशेष्य', 'गुणवाचक विशेषण', 'प्रविशेषण', 'सार्वनामिक विशेषण'],
          correctAnswer: 2,
          explanation: '"सिंदूरी" modifies the adjective "लाल", making it a Pravisheshan (an intensifier modifying an adjective).',
          explanationHindi: '"सिंदूरी" शब्द विशेषण "लाल" की विशेषता बता रहा है, अतः यह प्रविशेषण है।',
          difficulty: 'Intermediate',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch6',
      subjectId: 'hindi',
      name: 'क्रिया',
      nameHindi: 'क्रिया (सकर्मक, अकर्मक, प्रेरणार्थक एवं संयुक्त)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'कर्म के आधार पर: अकर्मक व सकर्मक (एककर्मक, द्विकर्मक); प्रयोग के आधार पर: प्रेरणार्थक, नामधातु, पूर्वकालिक व संयुक्त क्रिया।',
      topics: [
        {
          id: 'hin-ch6-t1',
          title: 'अकर्मक-सकर्मक पहचान एवं पूर्वकालिक क्रिया',
          titleHindi: 'क्रिया भेद एवं "कर" जोड़कर पूर्वकालिक',
          difficulty: 'Intermediate',
          subtopics: ['‘क्या’ और ‘किसे’ प्रश्न पूछकर कर्म का पता लगाना', 'प्रथम व द्वितीय प्रेरणार्थक रूप (पढ़ना -> पढ़ाना -> पढ़वाना)', 'पूर्वकालिक क्रिया (वह पढ़कर सो गया)'],
          keyFormulasOrRules: ['हँसना, रोना, सोना, उड़ना स्वाभाविक क्रियाएं हैं और सदैव अकर्मक होती हैं।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h6',
          subjectId: 'hindi',
          chapterId: 'hin-ch6',
          chapterName: 'क्रिया',
          chapterNameHindi: 'क्रिया',
          question: 'Which of the following verbs is inherently intransitive (अकर्मक क्रिया)?',
          questionHindi: 'निम्नलिखित में से कौन सी स्वाभाविक रूप से अकर्मक क्रिया है?',
          options: ['लिखना (To write)', 'पढ़ना (To read)', 'हँसना (To laugh)', 'खाना (To eat)'],
          optionsHindi: ['लिखना', 'पढ़ना', 'हँसना', 'खाना'],
          correctAnswer: 2,
          explanation: '"हँसना" does not require any direct object; the action directly affects the subject itself.',
          explanationHindi: '"हँसना" क्रिया में कोई बाह्य कर्म नहीं होता, फल सीधे कर्ता पर पड़ता है, अतः यह अकर्मक क्रिया है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch7',
      subjectId: 'hindi',
      name: 'काल',
      nameHindi: 'काल (वर्तमान, भूत एवं भविष्यत् काल के उपभेद)',
      difficulty: 'Intermediate',
      estimatedHours: 5,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'वर्तमान काल (सामान्य, अपूर्ण/तात्कालिक, पूर्ण, संदिग्ध, संभाव्य), भूतकाल (6 भेद: सामान्य, आसन्न, पूर्ण, अपूर्ण, संदिग्ध, हेतुहेतुमद्भूत) तथा भविष्यत् काल।',
      topics: [
        {
          id: 'hin-ch7-t1',
          title: 'भूतकाल के 6 भेद एवं संदिग्ध काल',
          titleHindi: 'आसन्न भूत एवं हेतुहेतुमद्भूत काल',
          difficulty: 'Intermediate',
          subtopics: ['आसन्न भूत (क्रिया अभी-अभी समाप्त हुई हो)', 'संदिग्ध भूत (क्रिया में संदेह हो)', 'हेतुहेतुमद्भूत (कारण-प्रभाव शर्त: यदि वर्षा होती तो फसल अच्छी होती)'],
          keyFormulasOrRules: ['"मैंने फल खाया है" -> आसन्न भूत (क्रिया अभी संपन्न हुई है)।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h7',
          subjectId: 'hindi',
          chapterId: 'hin-ch7',
          chapterName: 'काल',
          chapterNameHindi: 'काल',
          question: 'In "यदि तुम परिश्रम करते तो सफल हो जाते", which tense is expressed?',
          questionHindi: '"यदि तुम परिश्रम करते तो सफल हो जाते" वाक्य में कौन सा काल है?',
          options: ['पूर्ण भूतकाल', 'आसन्न भूतकाल', 'हेतुहेतुमद् भूतकाल', 'संदिग्ध भूतकाल'],
          optionsHindi: ['पूर्ण भूतकाल', 'आसन्न भूतकाल', 'हेतुहेतुमद् भूतकाल', 'संदिग्ध भूतकाल'],
          correctAnswer: 2,
          explanation: 'Conditional past action depending on a condition is Hetuhetumad Bhutakal (हेतुहेतुमद् भूतकाल).',
          explanationHindi: 'भूतकाल में एक क्रिया का होना दूसरी क्रिया पर निर्भर होने के कारण यह हेतुहेतुमद् भूतकाल है।',
          difficulty: 'Intermediate',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch8',
      subjectId: 'hindi',
      name: 'वाच्य',
      nameHindi: 'वाच्य (कर्तृवाच्य, कर्मवाच्य एवं भाववाच्य)',
      difficulty: 'Intermediate',
      estimatedHours: 4,
      relevantExams: ['up-police', 'upsssc-pet'],
      description: 'क्रिया के उस रूप को वाच्य कहते हैं जिससे बोध हो कि विधान का केंद्र कर्ता, कर्म या भाव है। वाच्य परिवर्तन नियम।',
      topics: [
        {
          id: 'hin-ch8-t1',
          title: 'भाववाच्य की पहचान एवं वाच्य रूपांतरण',
          titleHindi: 'से/के द्वारा एवं असमर्थता सूचक भाववाच्य',
          difficulty: 'Intermediate',
          subtopics: ['कर्तृवाच्य (सकर्मक व अकर्मक दोनों)', 'कर्मवाच्य (केवल सकर्मक क्रिया)', 'भाववाच्य (केवल अकर्मक क्रिया + क्रिया सदैव अन्य पुरुष, पुल्लिंग, एकवचन)'],
          keyFormulasOrRules: ['भाववाच्य में अकर्मक क्रिया के साथ असमर्थता का भाव होता है (जैसे: "मुझसे चला नहीं जाता")।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h8',
          subjectId: 'hindi',
          chapterId: 'hin-ch8',
          chapterName: 'वाच्य',
          chapterNameHindi: 'वाच्य',
          question: 'Which of the following sentences is an example of Bhava Vachya (भाववाच्य)?',
          questionHindi: 'निम्नलिखित में से कौन सा वाक्य भाववाच्य का उदाहरण है?',
          options: ['रोहन पुस्तक पढ़ता है।', 'अमित द्वारा पत्र लिखा गया।', 'मुझसे अब उठा नहीं जाता।', 'सीता गाना गाती है।'],
          optionsHindi: ['रोहन पुस्तक पढ़ता है।', 'अमित द्वारा पत्र लिखा गया।', 'मुझसे अब उठा नहीं जाता।', 'सीता गाना गाती है।'],
          correctAnswer: 2,
          explanation: 'In "मुझसे अब उठा नहीं जाता", the intransitive verb expresses inability with emotion dominating the sentence.',
          explanationHindi: '"मुझसे अब उठा नहीं जाता" में अकर्मक क्रिया के साथ असमर्थता का भाव प्रधान है, अतः यह भाववाच्य है।',
          difficulty: 'Intermediate',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch9',
      subjectId: 'hindi',
      name: 'लिंग-वचन',
      nameHindi: 'लिंग एवं वचन (पुल्लिंग, स्त्रीलिंग, एकवचन, बहुवचन)',
      difficulty: 'Basic',
      estimatedHours: 5,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'हिन्दी में दो लिंग (पुल्लिंग, स्त्रीलिंग) एवं दो वचन (एकवचन, बहुवचन)। नित्य बहुवचन शब्द (प्राण, दर्शन, आँसू, हस्ताक्षर) एवं नित्य एकवचन शब्द।',
      topics: [
        {
          id: 'hin-ch9-t1',
          title: 'सदा बहुवचन एवं सदा एकवचन शब्द',
          titleHindi: 'लिंग-वचन नियम एवं अपवाद',
          difficulty: 'Basic',
          subtopics: ['नित्य बहुवचन: प्राण, दर्शन, हस्ताक्षर, बाल, होश, आँसू', 'नित्य एकवचन: पानी, दूध, घी, सत्य, जनता, वर्षा', 'अकारांत, आकारांत स्त्रीलिंग रूपांतरण'],
          keyFormulasOrRules: ['"जनता" शब्द दिखने में समूह जैसा लगता है किंतु व्याकरण की दृष्टि से सदैव एकवचन में प्रयुक्त होता है।'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h9',
          subjectId: 'hindi',
          chapterId: 'hin-ch9',
          chapterName: 'लिंग-वचन',
          chapterNameHindi: 'लिंग-वचन',
          question: 'Which of the following words is ALWAYS used in the plural form (सदा बहुवचन) in Hindi grammar?',
          questionHindi: 'निम्नलिखित में से कौन सा शब्द हिन्दी में सदैव बहुवचन में प्रयुक्त होता है?',
          options: ['जनता', 'पानी', 'प्राण', 'वर्षा'],
          optionsHindi: ['जनता', 'पानी', 'प्राण', 'वर्षा'],
          correctAnswer: 2,
          explanation: '"प्राण" is always treated as plural in Hindi (e.g., "उसके प्राण निकल गए", not "प्राण निकल गया").',
          explanationHindi: '"प्राण" शब्द सदैव बहुवचन में प्रयुक्त होता है (जैसे: "उसके प्राण निकल गए")।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch10',
      subjectId: 'hindi',
      name: 'कारक',
      nameHindi: 'कारक (8 भेद एवं उनकी विभक्तियां)',
      difficulty: 'Basic',
      estimatedHours: 5,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'कर्ता (ने), कर्म (को), करण (से/के द्वारा), संप्रदान (को/के लिए), अपादान (से-अलग होना), संबंध (का/के/की), अधिकरण (में/पर), संबोधन (हे/अरे)।',
      topics: [
        {
          id: 'hin-ch10-t1',
          title: 'करण एवं अपादान में अंतर (अलगाव का भाव)',
          titleHindi: 'कारक विभक्तियों की पहचान',
          difficulty: 'Basic',
          subtopics: ['करण कारक (साधन के अर्थ में "से")', 'अपादान कारक (अलग होने, डरने, तुलना व लजाने के अर्थ में "से")', 'संप्रदान कारक (सदा के लिए दान देना)'],
          keyFormulasOrRules: ['यदि कोई वस्तु किसी को सदा के लिए दे दी जाए ("राजा भिक्षुक को कंबल देता है"), तो वहाँ संप्रदान कारक होता है, कर्म कारक नहीं।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h10',
          subjectId: 'hindi',
          chapterId: 'hin-ch10',
          chapterName: 'कारक',
          chapterNameHindi: 'कारक',
          question: 'In "पेड़ से पत्ता गिरा" (A leaf fell from the tree), which Karak is used with "से"?',
          questionHindi: '"पेड़ से पत्ता गिरा" वाक्य में किस कारक का प्रयोग हुआ है?',
          options: ['करण कारक', 'कर्म कारक', 'अपादान कारक', 'संबोधन कारक'],
          optionsHindi: ['करण कारक', 'कर्म कारक', 'अपादान कारक', 'संबोधन कारक'],
          correctAnswer: 2,
          explanation: '"से" here indicates separation (detachment) of leaf from tree, which represents Apadan Karak (अपादान कारक).',
          explanationHindi: 'यहाँ पत्ते का पेड़ से अलग होने (अलगाव) का भाव है, अतः यहाँ अपादान कारक है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch11',
      subjectId: 'hindi',
      name: 'संधि',
      nameHindi: 'संधि (स्वर, व्यंजन एवं विसर्ग संधि)',
      difficulty: 'Advanced',
      estimatedHours: 10,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'दो वर्णों के मेल से होने वाला विकार। स्वर संधि (दीर्घ, गुण, वृद्धि, यण, अयादि), व्यंजन संधि के नियम तथा विसर्ग संधि।',
      topics: [
        {
          id: 'hin-ch11-t1',
          title: 'स्वर संधि के पांचों भेद एवं विसर्ग संधि',
          titleHindi: 'यण एवं अयादि संधि के विशेष नियम',
          difficulty: 'Advanced',
          subtopics: ['दीर्घ संधि (अ+अ=आ, इ+इ=ई, उ+उ=ऊ)', 'गुण संधि (ए, ओ, अर्) व वृद्धि संधि (ऐ, औ)', 'यण संधि (इ/ई -> य्, उ/ऊ -> व्) एवं अयादि (अय, आय, अव, आव)'],
          keyFormulasOrRules: ['यण संधि ट्रिक: य या व से पहले यदि आधा व्यंजन आए, तो वहाँ यण संधि होती है (इति + आदि = इत्यादि)।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h11',
          subjectId: 'hindi',
          chapterId: 'hin-ch11',
          chapterName: 'संधि',
          chapterNameHindi: 'संधि',
          question: 'What is the Sandhi split of the word "इत्यादि" (Ityadi) and which type of Sandhi does it represent?',
          questionHindi: '"इत्यादि" शब्द का सही संधि-विच्छेद क्या है तथा इसमें कौन सी संधि है?',
          options: ['इत् + आदि (गुण संधि)', 'इति + आदि (यण संधि)', 'इत + यदि (वृद्धि संधि)', 'इत्या + दि (दीर्घ संधि)'],
          optionsHindi: ['इत् + आदि (गुण)', 'इति + आदि (यण संधि)', 'इत + यदि (वृद्धि)', 'इत्या + दि (दीर्घ)'],
          correctAnswer: 1,
          explanation: 'इति + आदि = इत्यादि (इ + आ = या). Since "इ" changes to "य", it is Yan Sandhi (यण संधि).',
          explanationHindi: 'इति + आदि = इत्यादि (इ + आ = या)। यहाँ "इ" का परिवर्तन "य" में होने के कारण यण संधि है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch12',
      subjectId: 'hindi',
      name: 'समास',
      nameHindi: 'समास (6 प्रमुख भेद एवं विग्रह)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'अव्ययीभाव, तत्पुरुष (कर्म से अधिकरण तक), कर्मधारय, द्विगु, द्वंद्व एवं बहुव्रीहि समास।',
      topics: [
        {
          id: 'hin-ch12-t1',
          title: 'कर्मधारय बनाम बहुव्रीहि एवं अव्ययीभाव',
          titleHindi: 'समास विग्रह एवं पद प्रधानता',
          difficulty: 'Intermediate',
          subtopics: ['अव्ययीभाव: पहला पद अव्यय/उपसर्ग (यथाशक्ति, प्रतिदिन)', 'द्विगु: पहला पद संख्यावाचक (त्रिफला, चौराहा)', 'बहुव्रीहि: दोनों पद मिलकर किसी तीसरे का बोध कराएं (दशानन, पीतांबर)'],
          keyFormulasOrRules: ['यदि किसी शब्द में द्विगु/कर्मधारय और बहुव्रीहि दोनों की संभावना हो (जैसे दशानन, पीतांबर), तो बहुव्रीहि को पहली प्राथमिकता दी जाती है।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h12',
          subjectId: 'hindi',
          chapterId: 'hin-ch12',
          chapterName: 'समास',
          chapterNameHindi: 'समास',
          question: 'Which compound (समास) is present in the word "यथाशक्ति" (Yathashakti)?',
          questionHindi: '"यथाशक्ति" शब्द में कौन सा समास है?',
          options: ['तत्पुरुष समास', 'कर्मधारय समास', 'अव्ययीभाव समास', 'द्वंद्व समास'],
          optionsHindi: ['तत्पुरुष समास', 'कर्मधारय समास', 'अव्ययीभाव समास', 'द्वंद्व समास'],
          correctAnswer: 2,
          explanation: '"यथाशक्ति" has "यथा" as an indeclinable prefix (अव्यय), making it Avyayibhava Samas (शक्ति के अनुसार).',
          explanationHindi: '"यथाशक्ति" में प्रथम पद "यथा" अव्यय है (विग्रह: शक्ति के अनुसार), अतः यह अव्ययीभाव समास है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch13',
      subjectId: 'hindi',
      name: 'उपसर्ग-प्रत्यय',
      nameHindi: 'उपसर्ग एवं प्रत्यय (संस्कृत, हिन्दी व विदेशज)',
      difficulty: 'Basic',
      estimatedHours: 5,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'शब्दांश जो मूल शब्द के पूर्व जुड़कर अर्थ बदलें (उपसर्ग) तथा जो अंत में जुड़ें (प्रत्यय: कृत् व तद्धित प्रत्यय)।',
      topics: [
        {
          id: 'hin-ch13-t1',
          title: 'कृत् प्रत्यय बनाम तद्धित प्रत्यय',
          titleHindi: 'उपसर्गों का विच्छेदन एवं प्रत्यय भेद',
          difficulty: 'Basic',
          subtopics: ['संस्कृत के 22 उपसर्ग (अनु, प्र, प्रति, अप, अधि, अति)', 'कृत् प्रत्यय: क्रिया या धातु के अंत में लगने वाले', 'तद्धित प्रत्यय: संज्ञा, सर्वनाम, विशेषण के अंत में लगने वाले'],
          keyFormulasOrRules: ['क्रिया की मूल धातु से जुड़कर बनने वाले शब्द "कृदंत" कहलाते हैं।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h13',
          subjectId: 'hindi',
          chapterId: 'hin-ch13',
          chapterName: 'उपसर्ग-प्रत्यय',
          chapterNameHindi: 'उपसर्ग-प्रत्यय',
          question: 'Which prefix (उपसर्ग) is prefixed to the root word in "अत्यधिक"?',
          questionHindi: '"अत्यधिक" शब्द में कौन सा उपसर्ग प्रयुक्त हुआ है?',
          options: ['अति', 'अत्', 'अत्या', 'अ'],
          optionsHindi: ['अति', 'अत्', 'अत्या', 'अ'],
          correctAnswer: 0,
          explanation: 'अति + अधिक = अत्यधिक (यण संधि के नियमानुसार "इ" का "य" बन गया)। मूल उपसर्ग "अति" है।',
          explanationHindi: '"अति" उपसर्ग है (अति + अधिक = अत्यधिक)।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch14',
      subjectId: 'hindi',
      name: 'पर्यायवाची',
      nameHindi: 'पर्यायवाची शब्द (समानार्थक शब्द भण्डार)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'कमल, सूर्य, चंद्रमा, जल, बादल, समुद्र, अग्नि, गंगा, हवा, रात, हाथी, सिंह आदि के महत्वपूर्ण पर्यायवाची।',
      topics: [
        {
          id: 'hin-ch14-t1',
          title: 'जल के शब्दों से कमल, बादल और समुद्र के पर्यायवाची',
          titleHindi: 'अश्वनी सर की जादुई पर्यायवाची ट्रिक',
          difficulty: 'Intermediate',
          subtopics: ['जल के शब्द में ‘ज’ जोड़ने पर कमल (जलज, नीरज, वारिज, तोयद)', 'जल के शब्द में ‘द’ जोड़ने पर बादल (जलद, नीरद, वारिद)', 'जल के शब्द में ‘धि’ जोड़ने पर समुद्र (जलधि, नीरधि, वारिधि)'],
          keyFormulasOrRules: ['याद रखें: ज = जन्म लेने वाला (कमल), द = देने वाला (बादल), धि = धारण करने वाला (समुद्र)।'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h14',
          subjectId: 'hindi',
          chapterId: 'hin-ch14',
          chapterName: 'पर्यायवाची',
          chapterNameHindi: 'पर्यायवाची',
          question: 'Which of the following is NOT a synonym of "कमल" (Lotus)?',
          questionHindi: 'निम्नलिखित में से कौन सा शब्द "कमल" का पर्यायवाची नहीं है?',
          options: ['जलज', 'पंकज', 'वारिद', 'सरोज'],
          optionsHindi: ['जलज', 'पंकज', 'वारिद', 'सरोज'],
          correctAnswer: 2,
          explanation: '"वारिद" means Cloud (वारि देने वाला), whereas जलज, पंकज and सरोज mean Lotus.',
          explanationHindi: '"वारिद" बादल का पर्यायवाची है (वारि देने वाला), जबकि अन्य सभी कमल के पर्यायवाची हैं।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch15',
      subjectId: 'hindi',
      name: 'विलोम',
      nameHindi: 'विलोम शब्द (विपरीतार्थक शब्द)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'अथ-इति, जंगम-स्थावर, तिमिर-प्रकाश, अनुलोम-प्रतिलोम, उत्कर्ष-अपकर्ष जैसे बार-बार पूछे जाने वाले विलोम शब्द।',
      topics: [
        {
          id: 'hin-ch15-t1',
          title: 'परीक्षा-सिद्ध महत्वपूर्ण विलोम शब्द',
          titleHindi: 'सजातीय विलोम शब्द नियम',
          difficulty: 'Basic',
          subtopics: ['संज्ञा का विलोम संज्ञा, विशेषण का विलोम विशेषण ही होगा', 'उपसर्ग जोड़कर बने विलोम (सद्भाव -> दुर्भाव, अनुकूल -> प्रतिकूल)', 'विशिष्ट शब्द: स्थावर का विलोम "जंगम"'],
          keyFormulasOrRules: ['स्थावर का विलोम सदैव "जंगम" तथा अथ का विलोम "इति" होता है (UP Police में 5 बार पूछा गया)।'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h15',
          subjectId: 'hindi',
          chapterId: 'hin-ch15',
          chapterName: 'विलोम',
          chapterNameHindi: 'विलोम',
          question: 'What is the exact antonym (विलोम) of the word "स्थावर"?',
          questionHindi: '"स्थावर" शब्द का सही विलोम क्या है?',
          options: ['जंगम', 'चंचल', 'सचल', 'स्थिर'],
          optionsHindi: ['जंगम', 'चंचल', 'सचल', 'स्थिर'],
          correctAnswer: 0,
          explanation: '"स्थावर" means immobile/stationary; its antonym is "जंगम" (mobile/moving).',
          explanationHindi: '"स्थावर" (जो स्थिर रहे) का विलोम "जंगम" (जो चल सके) होता है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch16',
      subjectId: 'hindi',
      name: 'मुहावरे-लोकोक्तियाँ',
      nameHindi: 'मुहावरे एवं लोकोक्तियाँ (कहावतें एवं वाक्य प्रयोग)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'मुहावरा (वाक्यांश, जिसके अंत में प्रायः ‘ना’ होता है) एवं लोकोक्ति (पूर्ण स्वतंत्र वाक्य) का अर्थ एवं सटीक वाक्य प्रयोग।',
      topics: [
        {
          id: 'hin-ch16-t1',
          title: 'मुहावरे एवं लोकोक्ति में अंतर व अर्थ',
          titleHindi: 'प्रचलित मुहावरे एवं लोकोक्तियाँ',
          difficulty: 'Basic',
          subtopics: ['अंग-संबंधी मुहावरे (आँख का तारा, कान भरना, पेट में दाढ़ी होना)', 'अधजल गगरी छलकत जाए, थोथा चना बाजे घना', 'उधो का लेना न माधो का देना'],
          keyFormulasOrRules: ['मुहावरे लाक्षणिक अर्थ देते हैं और वाक्य के अंग बनते हैं; लोकोक्तियाँ दृष्टांत रूप में स्वतंत्र रूप से आती हैं।'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h16',
          subjectId: 'hindi',
          chapterId: 'hin-ch16',
          chapterName: 'मुहावरे-लोकोक्तियाँ',
          chapterNameHindi: 'मुहावरे-लोकोक्तियाँ',
          question: 'What is the meaning of the idiom "अंगूठा दिखाना" (Angutha Dikhana)?',
          questionHindi: 'मुहावरे "अंगूठा दिखाना" का सही अर्थ क्या है?',
          options: ['मना कर देना (Incarceration/Refusal)', 'मजाक उड़ाना', 'धमकी देना', 'पराजित करना'],
          optionsHindi: ['साफ मना कर देना या इनकार करना', 'मजाक उड़ाना', 'धमकी देना', 'पराजित करना'],
          correctAnswer: 0,
          explanation: '"अंगूठा दिखाना" means to refuse flatly at the time of need.',
          explanationHindi: '"अंगूठा दिखाना" का अर्थ वक्त पर किसी काम के लिए साफ मना कर देना या धोखा देना है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch17',
      subjectId: 'hindi',
      name: 'वर्तनी शुद्धि',
      nameHindi: 'वर्तनी शुद्धि (शुद्ध एवं अशुद्ध शब्द)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'कवयित्री, उज्ज्वल, शृंगार, अंत्याक्षरी, ज्योत्स्ना, आशीर्वाद, अनुगृहीत जैसे अत्यंत महत्वपूर्ण शब्दों का शुद्ध वर्तनी रूप।',
      topics: [
        {
          id: 'hin-ch17-t1',
          title: 'अति-संवेदनशील शुद्ध वर्तनी शब्द',
          titleHindi: 'कवयित्री, उज्ज्वल एवं शृंगार के नियम',
          difficulty: 'Intermediate',
          subtopics: ['कवयित्री (न कि कवियित्री)', 'उज्ज्वल (दो बार आधा "ज": उत् + ज्वल)', 'शृंगार (श में ऋ की मात्रा, र नहीं)'],
          keyFormulasOrRules: ['अश्वनी सर वर्तनी फॉर्मूला: "उज्ज्वल" में दोनों "ज" आधे होते हैं; "कवयित्री" में "कवि" नहीं "कवय" होता है।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h17',
          subjectId: 'hindi',
          chapterId: 'hin-ch17',
          chapterName: 'वर्तनी शुद्धि',
          chapterNameHindi: 'वर्तनी शुद्धि',
          question: 'Which of the following is the CORRECT spelling of the feminine word for poet (कवयित्री)?',
          questionHindi: 'निम्नलिखित में से किस विकल्प की वर्तनी शुद्ध है?',
          options: ['कवियित्री', 'कवयित्री', 'कविइत्री', 'कवायित्री'],
          optionsHindi: ['कवियित्री', 'कवयित्री', 'कविइत्री', 'कवायित्री'],
          correctAnswer: 1,
          explanation: '"कवयित्री" is the only correct spelling recognized in Standard Hindi grammar.',
          explanationHindi: 'मानक हिन्दी वर्तनी के अनुसार "कवयित्री" रूप पूर्णतः शुद्ध है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    },
    {
      id: 'hin-ch18',
      subjectId: 'hindi',
      name: 'वाक्य शुद्धि',
      nameHindi: 'वाक्य शुद्धि (पदक्रम, लिंग, वचन एवं कारक दोष)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'अनावश्यक शब्द दोष, अनुपयुक्त शब्द, पदक्रम की अशुद्धि (यहाँ ताजे गन्ने का रस मिलता है बनाम ताजे रस), लिंग-वचन की संगति।',
      topics: [
        {
          id: 'hin-ch18-t1',
          title: 'वाक्यों में सामान्य त्रुटियां एवं संशोधन',
          titleHindi: 'अनेकों बनाम अनेक एवं पदक्रम',
          difficulty: 'Intermediate',
          subtopics: ['‘अनेक’ स्वयं बहुवचन है, ‘अनेकों’ लिखना सदैव अशुद्ध होता है', '‘कृपया’ के साथ ‘कृपा करके’ का दोहराव नहीं होता', 'सकर्मक क्रिया के भूतकाल में कर्ता के साथ ‘ने’ का प्रयोग'],
          keyFormulasOrRules: ['"वहाँ अनेकों लोग उपस्थित थे" अशुद्ध है; शुद्ध वाक्य: "वहाँ अनेक लोग उपस्थित थे"।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h18',
          subjectId: 'hindi',
          chapterId: 'hin-ch18',
          chapterName: 'वाक्य शुद्धि',
          chapterNameHindi: 'वाक्य शुद्धि',
          question: 'Which of the following sentences is grammatically CORRECT (शुद्ध वाक्य)?',
          questionHindi: 'निम्नलिखित में से कौन सा वाक्य पूर्णतः शुद्ध है?',
          options: ['यहाँ ताजे गन्ने का रस मिलता है।', 'वहाँ अनेकों लोग उपस्थित थे।', 'कृपया आप यह कार्य करने की कृपा करें।', 'मेरे को घर जाना है।'],
          optionsHindi: ['यहाँ ताजे गन्ने का रस मिलता है।', 'वहाँ अनेकों लोग उपस्थित थे।', 'कृपया आप यह कार्य करने की कृपा करें।', 'मेरे को घर जाना है।'],
          correctAnswer: 0,
          explanation: 'Option 1 is grammatically sound. Option 2 has "अनेकों" (incorrect); Option 3 has redundant "कृपा"; Option 4 has "मेरे को" instead of "मुझे".',
          explanationHindi: 'विकल्प 1 शुद्ध है। विकल्प 2 में "अनेकों" दोष है; विकल्प 3 में "कृपया" का दोहराव है; विकल्प 4 में "मेरे को" के स्थान पर "मुझे" होना चाहिए।',
          difficulty: 'Intermediate',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch19',
      subjectId: 'hindi',
      name: 'रस-अलंकार',
      nameHindi: 'रस, छंद एवं अलंकार (काव्यशास्त्र सौंदर्य)',
      difficulty: 'Advanced',
      estimatedHours: 10,
      relevantExams: ['up-police', 'upsssc-pet'],
      description: 'रस के 9 स्थायी भाव (शृंगार, वीर, हास्य, करुण, रौद्र आदि); छंद (दोहा, सोरठा, चौपाई मात्रा गणना); अलंकार (अनुप्रास, यमक, श्लेष, उपमा, रूपक, उत्प्रेक्षा, अतिशयोक्ति)।',
      topics: [
        {
          id: 'hin-ch19-t1',
          title: 'रस के स्थायी भाव एवं प्रमुख अलंकार',
          titleHindi: 'यमक, श्लेष, उत्प्रेक्षा एवं दोहा-सोरठा',
          difficulty: 'Advanced',
          subtopics: ['शृंगार रस का स्थायी भाव = रति, वीर रस = उत्साह, करुण = शोक', 'यमक अलंकार (कनक कनक ते सौ गुनी)', 'उत्प्रेक्षा वाचक शब्द: जनु, मनु, जानो, मानो', 'दोहा (13-11) का उलटा सोरठा (11-13)'],
          keyFormulasOrRules: ['उत्प्रेक्षा अलंकार पहचान: पंक्ति में "मानो", "जानो", "मनु", "जनु" शब्द मिलते हैं।'],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h19',
          subjectId: 'hindi',
          chapterId: 'hin-ch19',
          chapterName: 'रस-अलंकार',
          chapterNameHindi: 'रस-अलंकार',
          question: 'In "कनक कनक ते सौ गुनी मादकता अधिकाय", which Alankar (figure of speech) is exemplified?',
          questionHindi: '"कनक कनक ते सौ गुनी मादकता अधिकाय" में कौन सा अलंकार है?',
          options: ['अनुप्रास अलंकार', 'यमक अलंकार', 'श्लेष अलंकार', 'उपमा अलंकार'],
          optionsHindi: ['अनुप्रास अलंकार', 'यमक अलंकार', 'श्लेष अलंकार', 'उपमा अलंकार'],
          correctAnswer: 1,
          explanation: 'The word "कनक" repeats twice with different meanings (first = धतूरा, second = सोना), which is Yamak Alankar.',
          explanationHindi: 'यहाँ "कनक" शब्द की आवृत्ति दो बार हुई है और दोनों बार अर्थ भिन्न हैं (धतूरा एवं सोना), अतः यह यमक अलंकार है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'hin-ch20',
      subjectId: 'hindi',
      name: 'अपठित गद्यांश',
      nameHindi: 'अपठित गद्यांश (बोध प्रश्न एवं शीर्षक चयन)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['up-police', 'upsssc-pet', 'ssc-gd'],
      description: 'अपठित गद्यांश को पढ़कर मुख्य भाव को समझना, केंद्रीय विचार पर आधारित प्रश्नों का उत्तर देना, उपयुक्त शीर्षक का चयन एवं रेखांकित अंशों की व्याख्या।',
      topics: [
        {
          id: 'hin-ch20-t1',
          title: 'गद्यांश हल करने की वैज्ञानिक तकनीक',
          titleHindi: 'शीर्षक चयन एवं त्वरित पठन रणनीति',
          difficulty: 'Intermediate',
          subtopics: ['पहले प्रश्नों को सरसरी तौर पर पढ़ना', 'गद्यांश की पहली और अंतिम पंक्तियों में केंद्रीय भाव खोजना', 'शीर्षक संक्षिप्त, सटीक एवं व्यापक होना चाहिए'],
          keyFormulasOrRules: ['अश्वनी सर विधि: उत्तर सदैव गद्यांश के तथ्यों के आधार पर दें, अपनी निजी राय या सामान्य ज्ञान से नहीं।'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-h20',
          subjectId: 'hindi',
          chapterId: 'hin-ch20',
          chapterName: 'अपठित गद्यांश',
          chapterNameHindi: 'अपठित गद्यांश',
          question: 'While answering questions on an unseen comprehension passage (अपठित गद्यांश), how should the title (शीर्षक) be chosen?',
          questionHindi: 'अपठित गद्यांश का उपयुक्त शीर्षक चुनते समय सबसे महत्वपूर्ण मानदंड क्या होना चाहिए?',
          options: ['गद्यांश का सबसे लंबा वाक्य होना चाहिए', 'गद्यांश के केंद्रीय भाव को संक्षिप्त व सटीक रूप में व्यक्त करने वाला हो', 'केवल गद्यांश के पहले शब्द पर आधारित हो', 'कठिन संस्कृत शब्दों से युक्त हो'],
          optionsHindi: ['गद्यांश का सबसे लंबा वाक्य होना चाहिए', 'गद्यांश के केंद्रीय भाव को संक्षिप्त व सटीक रूप में व्यक्त करने वाला हो', 'केवल गद्यांश के पहले शब्द पर आधारित हो', 'कठिन संस्कृत शब्दों से युक्त हो'],
          correctAnswer: 1,
          explanation: 'A suitable title should be concise, capturing the core theme/essence of the entire passage.',
          explanationHindi: 'उपयुक्त शीर्षक संक्षिप्त, आकर्षक और पूरे गद्यांश के केंद्रीय भाव/मूल विचार को व्यक्त करने वाला होना चाहिए।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC GD']
        }
      ]
    }
  ]
};
