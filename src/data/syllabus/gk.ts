import { Subject } from '../../types';

export const GK_SUBJECT: Subject = {
  id: 'gk',
  name: 'General Knowledge (GK)',
  hindiName: 'सामान्य ज्ञान (Static GK, History, Polity & Science)',
  iconName: 'BookOpen',
  color: 'from-amber-600 to-red-600',
  description: 'Comprehensive static GK covering History, Indian Polity, Geography, Economy, General Science, Computer, Art & Culture, and UP GK with proven mnemonics.',
  totalChapters: 16,
  totalQuestions: 32,
  chapters: [
    {
      id: 'gk-ch1',
      subjectId: 'gk',
      name: 'Ancient Indian History',
      nameHindi: 'प्राचीन भारत का इतिहास',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Indus Valley Civilisation, Vedic Age, Mahajanapadas, Buddhism, Jainism, Mauryan Empire, and Gupta Dynasty.',
      topics: [
        {
          id: 'gk-ch1-t1',
          title: 'Indus Valley & Vedic Period',
          titleHindi: 'सिंधु घाटी सभ्यता एवं वैदिक काल',
          difficulty: 'Basic',
          subtopics: ['Harappa, Mohenjodaro, Lothal, Kalibangan sites & findings', 'Rigvedic and Later Vedic social structure', 'Four Vedas, Upanishads & Epics'],
          keyFormulasOrRules: ['Lothal = Ancient dockyard; Kalibangan = Ploughed field; Mohenjodaro = Great Bath and Dancing Girl statue.'],
          solvedExamples: [{
            id: 'ex-gk-1',
            problem: 'At which Harappan site was an ancient tidal dockyard discovered?',
            solution: 'Lothal in Gujarat on the banks of the Bhogava river.'
          }],
          examMapping: ['ssc-cgl', 'up-police', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk1',
          subjectId: 'gk',
          chapterId: 'gk-ch1',
          chapterName: 'Ancient Indian History',
          chapterNameHindi: 'प्राचीन भारत का इतिहास',
          question: 'The famous "Great Bath" of the Indus Valley Civilisation was discovered at which ancient site?',
          questionHindi: 'सिंधु घाटी सभ्यता का प्रसिद्ध "विशाल स्नानागार" किस प्राचीन स्थल पर खोजा गया था?',
          options: ['Harappa', 'Mohenjo-daro', 'Kalibangan', 'Lothal'],
          optionsHindi: ['हड़प्पा', 'मोहनजोदड़ो', 'कालीबंगा', 'लोथल'],
          correctAnswer: 1,
          explanation: 'The Great Bath was excavated at Mohenjo-daro (Larkana district of Sindh) by R.D. Banerji in 1922.',
          explanationHindi: 'विशाल स्नानागार की खुदाई 1922 में आर.डी. बनर्जी द्वारा मोहनजोदड़ो (सिंध के लरकाना जिले) में की गई थी।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UP Police']
        }
      ]
    },
    {
      id: 'gk-ch2',
      subjectId: 'gk',
      name: 'Medieval Indian History',
      nameHindi: 'मध्यकालीन भारत का इतिहास',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Delhi Sultanate (Slave, Khilji, Tughlaq, Sayyid, Lodi), Mughal Empire, Vijayanagara Empire, and Maratha Empire.',
      topics: [
        {
          id: 'gk-ch2-t1',
          title: 'Delhi Sultanate & Mughal Architecture',
          titleHindi: 'दिल्ली सल्तनत एवं मुग़ल वास्तुकला',
          difficulty: 'Intermediate',
          subtopics: ['Qutub Minar, Alai Darwaza, market reforms of Alauddin Khilji', 'Babur, Akbar’s Navratnas & Mansabdari system', 'Krishnadevaraya and Vijayanagara kingdom'],
          keyFormulasOrRules: ['Order of Delhi Sultanate: Ghulam -> Khilji -> Tughlaq -> Sayyid -> Lodi (Mnemonic: G-K-T-S-L).'],
          examMapping: ['ssc-cgl', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk2',
          subjectId: 'gk',
          chapterId: 'gk-ch2',
          chapterName: 'Medieval Indian History',
          chapterNameHindi: 'मध्यकालीन भारत का इतिहास',
          question: 'Which Delhi Sultan introduced market control regulations and price monitoring officers (Shahna-i-Mandi)?',
          questionHindi: 'किस दिल्ली सुल्तान ने बाजार नियंत्रण नियम और मूल्य निगरानी अधिकारी (शहना-ए-मंडी) नियुक्त किए थे?',
          options: ['Balban', 'Alauddin Khilji', 'Muhammad bin Tughlaq', 'Firoz Shah Tughlaq'],
          optionsHindi: ['बलबन', 'अलाउद्दीन खिलजी', 'मुहम्मद बिन तुगलक', 'फिरोज शाह तुगलक'],
          correctAnswer: 1,
          explanation: 'Alauddin Khilji introduced strict price control on food grains and horses to sustain his large standing army.',
          explanationHindi: 'अलाउद्दीन खिलजी ने अपनी विशाल सेना को बनाए रखने के लिए खाद्यान्न और घोड़ों के मूल्य नियंत्रण के कड़े नियम लागू किए।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'gk-ch3',
      subjectId: 'gk',
      name: 'Modern Indian History',
      nameHindi: 'आधुनिक भारत का इतिहास',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Advent of Europeans, Battle of Plassey (1757), Battle of Buxar (1764), British Governors-General and constitutional acts.',
      topics: [
        {
          id: 'gk-ch3-t1',
          title: 'British Expansion & Socio-Religious Reforms',
          titleHindi: 'ब्रिटिश विस्तार एवं सामाजिक-धार्मिक सुधार आंदोलन',
          difficulty: 'Intermediate',
          subtopics: ['Doctrine of Lapse (Lord Dalhousie) and Subsidiary Alliance (Lord Wellesley)', 'Raja Ram Mohan Roy (Brahmo Samaj), Dayanand Saraswati (Arya Samaj)', 'Charter Acts and Government of India Act 1858'],
          keyFormulasOrRules: ['Satara was the first state annexed under Dalhousie’s Doctrine of Lapse in 1848.'],
          examMapping: ['ssc-cgl', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk3',
          subjectId: 'gk',
          chapterId: 'gk-ch3',
          chapterName: 'Modern Indian History',
          chapterNameHindi: 'आधुनिक भारत का इतिहास',
          question: 'The decisive Battle of Plassey was fought in which year between Robert Clive and Siraj-ud-Daulah?',
          questionHindi: 'रॉबर्ट क्लाइव और सिराजुद्दौला के बीच निर्णायक प्लासी का युद्ध किस वर्ष लड़ा गया था?',
          options: ['1757', '1764', '1773', '1784'],
          optionsHindi: ['1757', '1764', '1773', '1784'],
          correctAnswer: 0,
          explanation: 'The Battle of Plassey was fought on 23 June 1757 in Bengal, laying the foundation of British rule in India.',
          explanationHindi: 'प्लासी का युद्ध 23 जून 1757 को बंगाल में लड़ा गया, जिसने भारत में ब्रिटिश शासन की नींव रखी।',
          difficulty: 'Basic',
          examTags: ['SSC CHSL', 'UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'gk-ch4',
      subjectId: 'gk',
      name: 'Indian National Movement',
      nameHindi: 'भारतीय राष्ट्रीय आंदोलन (1857 से 1947)',
      difficulty: 'Advanced',
      estimatedHours: 14,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Revolt of 1857, Indian National Congress sessions, Partition of Bengal (1905), Gandhian Movements, INA, and Independence.',
      topics: [
        {
          id: 'gk-ch4-t1',
          title: 'Gandhian Mass Movements & Revolutionary Phase',
          titleHindi: 'गांधीवादी जन आंदोलन एवं क्रांतिकारी चरण',
          difficulty: 'Advanced',
          subtopics: ['Non-Cooperation (1920), Civil Disobedience & Dandi March (1930), Quit India Movement (1942)', 'Bhagat Singh, Chandra Shekhar Azad & Kakori Action', 'Netaji Subhash Chandra Bose and Azad Hind Fauj'],
          keyFormulasOrRules: ['Kakori Train Action took place near Lucknow on 9 August 1925 by HRA revolutionaries.'],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-cgl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk4',
          subjectId: 'gk',
          chapterId: 'gk-ch4',
          chapterName: 'Indian National Movement',
          chapterNameHindi: 'भारतीय राष्ट्रीय आंदोलन',
          question: 'Mahatma Gandhi gave the iconic slogan "Do or Die" (करो या मरो) during which national movement?',
          questionHindi: 'महात्मा गांधी ने प्रसिद्ध नारा "करो या मरो" किस राष्ट्रीय आंदोलन के दौरान दिया था?',
          options: ['Non-Cooperation Movement (1920)', 'Civil Disobedience Movement (1930)', 'Quit India Movement (1942)', 'Champaran Satyagraha (1917)'],
          optionsHindi: ['असहयोग आंदोलन (1920)', 'सविनय अवज्ञा आंदोलन (1930)', 'भारत छोड़ो आंदोलन (1942)', 'चंपारण सत्याग्रह (1917)'],
          correctAnswer: 2,
          explanation: 'On 8 August 1942, Mahatma Gandhi launched the Quit India Movement from Gowalia Tank Maidan, Mumbai with the call "Do or Die".',
          explanationHindi: '8 अगस्त 1942 को महात्मा गांधी ने मुंबई के गोवालिया टैंक मैदान से "करो या मरो" के आह्वान के साथ भारत छोड़ो आंदोलन शुरू किया।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC CGL']
        }
      ]
    },
    {
      id: 'gk-ch5',
      subjectId: 'gk',
      name: 'Indian and World Geography',
      nameHindi: 'भारत एवं विश्व का भूगोल',
      difficulty: 'Intermediate',
      estimatedHours: 14,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet'],
      description: 'Physiography of India, River systems, Monsoons, Soils, World continents, Ocean currents, and Latitudes-Longitudes.',
      topics: [
        {
          id: 'gk-ch5-t1',
          title: 'Himalayas, Peninsular Rivers & World Straits',
          titleHindi: 'हिमालय, प्रायद्वीपीय नदियां एवं विश्व के जलडमरूमध्य',
          difficulty: 'Intermediate',
          subtopics: ['Himalayan river systems: Indus, Ganga, Brahmaputra and tributaries', 'West-flowing rivers: Narmada and Tapi in rift valleys', 'Straits: Malacca, Hormuz, Gibraltar, Palk Strait'],
          keyFormulasOrRules: ['Tropic of Cancer (23.5° N) passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.'],
          examMapping: ['ssc-cgl', 'up-police', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk5',
          subjectId: 'gk',
          chapterId: 'gk-ch5',
          chapterName: 'Indian and World Geography',
          chapterNameHindi: 'भारत एवं विश्व का भूगोल',
          question: 'Which of the following Indian rivers flows westward through a rift valley and drains into the Arabian Sea?',
          questionHindi: 'निम्नलिखित में से कौन सी भारतीय नदी भ्रंश घाटी से होकर पश्चिम की ओर बहती है और अरब सागर में गिरती है?',
          options: ['Godavari', 'Krishna', 'Narmada', 'Mahanadi'],
          optionsHindi: ['गोदावरी', 'कृष्णा', 'नर्मदा', 'महानदी'],
          correctAnswer: 2,
          explanation: 'Narmada originates at Amarkantak and flows westwards between the Vindhyas and Satpuras through a rift valley into the Arabian Sea.',
          explanationHindi: 'नर्मदा अमरकंटक से निकलती है और विंध्य तथा सतपुड़ा के बीच भ्रंश घाटी से होकर पश्चिम की ओर अरब सागर में गिरती है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UP Police']
        }
      ]
    },
    {
      id: 'gk-ch6',
      subjectId: 'gk',
      name: 'Indian Constitution',
      nameHindi: 'भारतीय संविधान (Preamble & Articles)',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Making of Constitution, Constituent Assembly, Preamble, Schedules, Fundamental Rights (Part III), DPSP (Part IV), and Fundamental Duties.',
      topics: [
        {
          id: 'gk-ch6-t1',
          title: 'Fundamental Rights & Constitutional Remedies',
          titleHindi: 'मौलिक अधिकार एवं संवैधानिक उपचार',
          difficulty: 'Intermediate',
          subtopics: ['Articles 14 to 32 (Right to Equality, Freedom, Religion)', 'Writs under Article 32 (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto)', '42nd & 44th Constitutional Amendments'],
          keyFormulasOrRules: ['Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the "Heart and Soul of the Constitution".'],
          examMapping: ['ssc-cgl', 'up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk6',
          subjectId: 'gk',
          chapterId: 'gk-ch6',
          chapterName: 'Indian Constitution',
          chapterNameHindi: 'भारतीय संविधान',
          question: 'Which Article of the Indian Constitution was described by Dr. B.R. Ambedkar as the "Heart and Soul of the Constitution"?',
          questionHindi: 'डॉ. बी.आर. अंबेडकर ने भारतीय संविधान के किस अनुच्छेद को "संविधान का हृदय और आत्मा" कहा था?',
          options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
          optionsHindi: ['अनुच्छेद 14', 'अनुच्छेद 19', 'अनुच्छेद 21', 'अनुच्छेद 32'],
          correctAnswer: 3,
          explanation: 'Article 32 provides the Right to Constitutional Remedies to approach the Supreme Court directly for enforcement of Fundamental Rights.',
          explanationHindi: 'अनुच्छेद 32 मौलिक अधिकारों के प्रवर्तन के लिए सीधे सर्वोच्च न्यायालय में जाने हेतु संवैधानिक उपचार का अधिकार प्रदान करता है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC CGL', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'gk-ch7',
      subjectId: 'gk',
      name: 'Polity',
      nameHindi: 'भारतीय राजव्यवस्था (Parliament, Executive & Judiciary)',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'President, Vice President, Prime Minister, Lok Sabha, Rajya Sabha, Supreme Court, High Courts, and Panchayati Raj (73rd Amendment).',
      topics: [
        {
          id: 'gk-ch7-t1',
          title: 'Union Executive & Panchayati Raj',
          titleHindi: 'केंद्रीय कार्यपालिका एवं पंचायती राज व्यवस्था',
          difficulty: 'Intermediate',
          subtopics: ['Presidential elections, veto powers, and ordinance under Article 123', 'Money Bill procedure (Article 110)', 'Balwant Rai Mehta Committee & 73rd Amendment (11th Schedule)'],
          keyFormulasOrRules: ['A Money Bill can only be introduced in the Lok Sabha on the recommendation of the President.'],
          examMapping: ['up-police', 'ssc-cgl', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk7',
          subjectId: 'gk',
          chapterId: 'gk-ch7',
          chapterName: 'Polity',
          chapterNameHindi: 'भारतीय राजव्यवस्था',
          question: 'Which constitutional amendment granted constitutional status to Panchayati Raj institutions in India by adding Part IX and the 11th Schedule?',
          questionHindi: 'किस संविधान संशोधन ने भाग IX और 11वीं अनुसूची जोड़कर भारत में पंचायती राज संस्थाओं को संवैधानिक दर्जा प्रदान किया?',
          options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '86th Amendment'],
          optionsHindi: ['42वां संशोधन', '44वां संशोधन', '73वां संशोधन', '86वां संशोधन'],
          correctAnswer: 2,
          explanation: 'The 73rd Constitutional Amendment Act of 1992 came into force on 24 April 1993 (celebrated as National Panchayati Raj Day).',
          explanationHindi: '1992 का 73वां संविधान संशोधन अधिनियम 24 अप्रैल 1993 को लागू हुआ (राष्ट्रीय पंचायती राज दिवस के रूप में मनाया जाता है)।',
          difficulty: 'Intermediate',
          examTags: ['UP Police', 'UPSSSC PET', 'SSC CGL']
        }
      ]
    },
    {
      id: 'gk-ch8',
      subjectId: 'gk',
      name: 'Economy',
      nameHindi: 'भारतीय अर्थव्यवस्था (National Income, Inflation & Planning)',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'upsssc-pet'],
      description: 'GDP, GNP, NNP calculations, sectors of economy (Primary, Secondary, Tertiary), Poverty lines, and NITI Aayog.',
      topics: [
        {
          id: 'gk-ch8-t1',
          title: 'National Income Concepts & Five-Year Plans',
          titleHindi: 'राष्ट्रीय आय की अवधारणाएं एवं पंचवर्षीय योजनाएं',
          difficulty: 'Intermediate',
          subtopics: ['GDP at Factor Cost vs Market Price', '1st Plan (Harrod-Domar) & 2nd Plan (Mahalanobis Model)', 'NITI Aayog replacement of Planning Commission in 2015'],
          keyFormulasOrRules: ['NNP at Factor Cost = National Income.'],
          examMapping: ['ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk8',
          subjectId: 'gk',
          chapterId: 'gk-ch8',
          chapterName: 'Economy',
          chapterNameHindi: 'भारतीय अर्थव्यवस्था',
          question: 'The Second Five-Year Plan (1956-1961) of India was based on the economic development model formulated by:',
          questionHindi: 'भारत की दूसरी पंचवर्षीय योजना (1956-1961) किसके द्वारा तैयार किए गए आर्थिक विकास मॉडल पर आधारित थी?',
          options: ['Harrod-Domar', 'P.C. Mahalanobis', 'Dr. Manmohan Singh', 'Dadabhai Naoroji'],
          optionsHindi: ['हैरोड-डोमर', 'पी.सी. महालनोबिस', 'डॉ. मनमोहन सिंह', 'दादाभाई नौरोजी'],
          correctAnswer: 1,
          explanation: 'The Second Plan focused on heavy industries and was based on the Mahalanobis strategy of industrialisation.',
          explanationHindi: 'दूसरी योजना भारी उद्योगों पर केंद्रित थी और महालनोबिस औद्योगिकीकरण रणनीति पर आधारित थी।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'gk-ch9',
      subjectId: 'gk',
      name: 'Banking',
      nameHindi: 'बैंकिंग एवं मौद्रिक प्रणाली (RBI & Monetary Tools)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'upsssc-pet'],
      description: 'Reserve Bank of India establishment (1935), nationalisation of banks (1969 & 1980), Repo Rate, Reverse Repo, CRR, SLR, and UPI.',
      topics: [
        {
          id: 'gk-ch9-t1',
          title: 'RBI Functions & Quantitative Credit Controls',
          titleHindi: 'आरबीआई के कार्य एवं मात्रात्मक साख नियंत्रण उपकरण',
          difficulty: 'Intermediate',
          subtopics: ['Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR)', 'Open Market Operations (OMO)', 'NPCI payment rails: UPI, IMPS, RuPay'],
          keyFormulasOrRules: ['RBI was established on 1 April 1935 under the RBI Act 1934 on the recommendation of the Hilton Young Commission.'],
          examMapping: ['ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk9',
          subjectId: 'gk',
          chapterId: 'gk-ch9',
          chapterName: 'Banking',
          chapterNameHindi: 'बैंकिंग एवं मौद्रिक प्रणाली',
          question: 'On the recommendation of which commission was the Reserve Bank of India (RBI) established in 1935?',
          questionHindi: '1935 में किस आयोग की सिफारिश पर भारतीय रिज़र्व बैंक (RBI) की स्थापना की गई थी?',
          options: ['Hilton Young Commission', 'Kothari Commission', 'Sarkaria Commission', 'Hunter Commission'],
          optionsHindi: ['हिल्टन यंग आयोग', 'कोठारी आयोग', 'सरकारिया आयोग', 'हंटर आयोग'],
          correctAnswer: 0,
          explanation: 'RBI was established in 1935 based on the Royal Commission on Indian Currency and Finance (Hilton Young Commission).',
          explanationHindi: 'आरबीआई की स्थापना 1935 में भारतीय मुद्रा और वित्त पर रॉयल कमीशन (हिल्टन यंग आयोग) की सिफारिशों पर की गई थी।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'gk-ch10',
      subjectId: 'gk',
      name: 'Physics',
      nameHindi: 'भौतिक विज्ञान (General Physics)',
      difficulty: 'Basic',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'army-agniveer'],
      description: 'SI Units, Newton’s Laws of Motion, Work, Power, Energy, Gravitation, Light (Refraction, Reflection, Total Internal Reflection), and Sound waves.',
      topics: [
        {
          id: 'gk-ch10-t1',
          title: 'Optics, Motion & Sound Waves',
          titleHindi: 'प्रकाशिकी, गति एवं ध्वनि तरंगें',
          difficulty: 'Basic',
          subtopics: ['Total Internal Reflection (Optical fibre, mirage, diamond brilliance)', 'Concave and Convex mirror / lens applications', 'Speed of sound in solids > liquids > gases; cannot travel in vacuum'],
          keyFormulasOrRules: ['Power of Lens (Dioptre) P = 1 / f (in metres).', 'Escape Velocity of Earth = 11.2 km/s.'],
          examMapping: ['railway-group-d', 'railway-ntpc', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk10',
          subjectId: 'gk',
          chapterId: 'gk-ch10',
          chapterName: 'Physics',
          chapterNameHindi: 'भौतिक विज्ञान',
          question: 'The sparkling brilliance of a diamond and transmission in optical fibres are primarily based on which optical phenomenon?',
          questionHindi: 'हीरे की असाधारण चमक और ऑप्टिकल फाइबर में डेटा संचरण मुख्य रूप से किस प्रकाशीय घटना पर आधारित है?',
          options: ['Diffraction of light', 'Total Internal Reflection', 'Interference of light', 'Polarization of light'],
          optionsHindi: ['प्रकाश का विवर्तन', 'पूर्ण आंतरिक परावर्तन', 'प्रकाश का व्यतिकरण', 'प्रकाश का ध्रुवण'],
          correctAnswer: 1,
          explanation: 'When angle of incidence exceeds the critical angle, light undergoes Total Internal Reflection (TIR) with zero loss of energy.',
          explanationHindi: 'जब आपतन कोण क्रांतिक कोण से अधिक होता है, तो प्रकाश बिना किसी ऊर्जा हानि के पूर्ण आंतरिक परावर्तन (TIR) से गुजरता है।',
          difficulty: 'Basic',
          examTags: ['Railway Group D', 'SSC CGL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'gk-ch11',
      subjectId: 'gk',
      name: 'Chemistry',
      nameHindi: 'रसायन विज्ञान (General Chemistry)',
      difficulty: 'Basic',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'railway-group-d', 'army-agniveer'],
      description: 'Atomic structure, Periodic Table, Acids, Bases & Salts, Common chemicals (Baking Soda, Bleaching Powder, Plaster of Paris), Metals & Non-metals.',
      topics: [
        {
          id: 'gk-ch11-t1',
          title: 'Everyday Chemicals & Acid-Base Indicators',
          titleHindi: 'दैनिक जीवन में रसायन एवं अम्ल-क्षार सूचक',
          difficulty: 'Basic',
          subtopics: ['Baking soda (NaHCO3) vs Washing soda (Na2CO3.10H2O)', 'Plaster of Paris (CaSO4.1/2H2O)', 'pH scale and litmus paper color changes'],
          keyFormulasOrRules: ['pH < 7 = Acidic, pH = 7 = Neutral (Pure Water), pH > 7 = Basic/Alkaline.'],
          examMapping: ['railway-group-d', 'ssc-gd', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk11',
          subjectId: 'gk',
          chapterId: 'gk-ch11',
          chapterName: 'Chemistry',
          chapterNameHindi: 'रसायन विज्ञान',
          question: 'What is the chemical formula of Plaster of Paris (POP)?',
          questionHindi: 'प्लास्टर ऑफ पेरिस (POP) का रासायनिक सूत्र क्या है?',
          options: ['CaSO4 · 2H2O', 'CaSO4 · 1/2H2O', 'CaCO3', 'CaOCl2'],
          optionsHindi: ['CaSO4 · 2H2O', 'CaSO4 · 1/2H2O', 'CaCO3', 'CaOCl2'],
          correctAnswer: 1,
          explanation: 'Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO4 · 1/2H2O), obtained by heating gypsum (CaSO4 · 2H2O) at 373 K.',
          explanationHindi: 'प्लास्टर ऑफ पेरिस कैल्शियम सल्फेट हेमीहाइड्रेट (CaSO4 · 1/2H2O) है, जो जिप्सम को 373 K पर गर्म करके प्राप्त होता है।',
          difficulty: 'Basic',
          examTags: ['Railway Group D', 'SSC CGL', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'gk-ch12',
      subjectId: 'gk',
      name: 'Biology',
      nameHindi: 'जीव विज्ञान (Human Physiology & Diseases)',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'army-agniveer'],
      description: 'Cell structure and organelles, Circulatory system, Digestive system, Nervous system, Vitamins, Deficiencies, and Viral/Bacterial diseases.',
      topics: [
        {
          id: 'gk-ch12-t1',
          title: 'Cell Biology, Vitamins & Infectious Diseases',
          titleHindi: 'कोशिका विज्ञान, विटामिन एवं संक्रामक रोग',
          difficulty: 'Intermediate',
          subtopics: ['Mitochondria (Powerhouse of the cell), Ribosomes (Protein synthesis)', 'Fat-soluble vitamins (A, D, E, K) vs Water-soluble (B, C)', 'Vaccines and pathogens: Dengue, Malaria, Typhoid, Tuberculosis'],
          keyFormulasOrRules: ['Vitamin C (Ascorbic acid) deficiency causes Scurvy; Vitamin D deficiency causes Rickets.'],
          examMapping: ['railway-group-d', 'ssc-cgl', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk12',
          subjectId: 'gk',
          chapterId: 'gk-ch12',
          chapterName: 'Biology',
          chapterNameHindi: 'जीव विज्ञान',
          question: 'Which organelle is universally known as the "Powerhouse of the Cell" due to ATP synthesis?',
          questionHindi: 'ATP संश्लेषण के कारण किस कोशिकांग को सार्वभौमिक रूप से "कोशिका का पावरहाउस" कहा जाता है?',
          options: ['Ribosome', 'Golgi apparatus', 'Mitochondria', 'Endoplasmic Reticulum'],
          optionsHindi: ['राइबोसोम', 'गॉल्जी काय', 'माइटोकॉन्ड्रिया', 'अंतःप्रद्रव्यी जालिका'],
          correctAnswer: 2,
          explanation: 'Mitochondria produce cellular energy in the form of Adenosine Triphosphate (ATP) through cellular respiration.',
          explanationHindi: 'माइटोकॉन्ड्रिया कोशिकीय श्वसन के माध्यम से एडेनोसिन ट्राइफॉस्फेट (ATP) के रूप में ऊर्जा उत्पन्न करता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway Group D', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'gk-ch13',
      subjectId: 'gk',
      name: 'Computer Awareness',
      nameHindi: 'कंप्यूटर ज्ञान (Hardware, OS, MS Office & Internet)',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Input/Output devices, CPU components, RAM/ROM, MS Word, Excel, PowerPoint, Networking protocols (HTTP, TCP/IP), and Cyber Security.',
      topics: [
        {
          id: 'gk-ch13-t1',
          title: 'Computer Architecture & Essential Shortcuts',
          titleHindi: 'कंप्यूटर आर्किटेक्चर एवं आवश्यक शॉर्टकट कुंजियां',
          difficulty: 'Basic',
          subtopics: ['ALU, CU, Registers, Cache Memory hierarchy', 'Binary, Octal, Hexadecimal conversions', 'Keyboard shortcuts: Ctrl+Z, Ctrl+Y, F5, Alt+Tab'],
          keyFormulasOrRules: ['1 Byte = 8 bits; 1 Kilobyte (KB) = 1024 Bytes; 1 Gigabyte (GB) = 1024 MB.'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk13',
          subjectId: 'gk',
          chapterId: 'gk-ch13',
          chapterName: 'Computer Awareness',
          chapterNameHindi: 'कंप्यूटर ज्ञान',
          question: 'Which component of the Central Processing Unit (CPU) performs all arithmetic calculations and logical comparisons?',
          questionHindi: 'सेंट्रल प्रोसेसिंग यूनिट (CPU) का कौन सा घटक सभी अंकगणितीय गणनाओं और तार्किक तुलनाओं को निष्पादित करता है?',
          options: ['Control Unit (CU)', 'Arithmetic Logic Unit (ALU)', 'Secondary Storage', 'Read Only Memory (ROM)'],
          optionsHindi: ['कंट्रोल यूनिट (CU)', 'अंकगणितीय तर्क इकाई (ALU)', 'द्वितीयक मेमोरी', 'रीड ओनली मेमोरी (ROM)'],
          correctAnswer: 1,
          explanation: 'The ALU (Arithmetic Logic Unit) executes mathematical operations (addition, subtraction) and logical decisions (AND, OR, NOT).',
          explanationHindi: 'ALU गणितीय संक्रियाओं (जोड़, घटाव) और तार्किक निर्णयों (AND, OR, NOT) को निष्पादित करता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UP Police']
        }
      ]
    },
    {
      id: 'gk-ch14',
      subjectId: 'gk',
      name: 'Environment',
      nameHindi: 'पर्यावरण एवं जैव विविधता (Ecology & Conservation)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Ecosystem trophic levels, Food chains, Biodiversity hotspots, Wildlife Protection Act 1972, and Greenhouse Effect.',
      topics: [
        {
          id: 'gk-ch14-t1',
          title: 'Ecology & Environmental Acts',
          titleHindi: 'पारिस्थितिकी एवं पर्यावरण संरक्षण अधिनियम',
          difficulty: 'Intermediate',
          subtopics: ['10% Energy Transfer Law in Food Chains (Lindeman)', 'Biodiversity Hotspots in India: Western Ghats, Indo-Burma, Himalayas, Sundaland', 'Montreal Protocol (Ozone) and Kyoto Protocol (GHG emissions)'],
          keyFormulasOrRules: ['Only 10% of energy is transferred from one trophic level to the next.'],
          examMapping: ['ssc-cgl', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk14',
          subjectId: 'gk',
          chapterId: 'gk-ch14',
          chapterName: 'Environment',
          chapterNameHindi: 'पर्यावरण एवं जैव विविधता',
          question: 'The Montreal Protocol signed in 1987 is a landmark international treaty aimed at protecting which atmospheric shield?',
          questionHindi: '1987 में हस्ताक्षरित मॉन्ट्रियल प्रोटोकॉल किस वायुमंडलीय ढाल की रक्षा के लिए एक ऐतिहासिक अंतर्राष्ट्रीय संधि है?',
          options: ['Ionosphere', 'Stratospheric Ozone Layer', 'Troposphere', 'Magnetosphere'],
          optionsHindi: ['आयनमंडल', 'समतापमंडलीय ओजोन परत', 'क्षोभमंडल', 'चुंबकमंडल'],
          correctAnswer: 1,
          explanation: 'The Montreal Protocol regulates the production and consumption of ozone-depleting substances (ODS) such as CFCs.',
          explanationHindi: 'मॉन्ट्रियल प्रोटोकॉल ओजोन परत को नष्ट करने वाले पदार्थों (जैसे सीएफसी) के उत्पादन और खपत को नियंत्रित करता है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UP Police']
        }
      ]
    },
    {
      id: 'gk-ch15',
      subjectId: 'gk',
      name: 'Art and Culture',
      nameHindi: 'कला एवं संस्कृति (Classical Dances, Festivals & Fairs)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Eight Classical Dances of India, Folk Dances, Musical Instruments & Maestros, UNESCO World Heritage Sites, and Religious Fairs.',
      topics: [
        {
          id: 'gk-ch15-t1',
          title: 'Classical Dances & Heritage of India',
          titleHindi: 'शास्त्रीय नृत्य एवं भारत की विरासत',
          difficulty: 'Intermediate',
          subtopics: ['8 Classical dances: Kathak (UP), Bharatanatyam (TN), Kathakali (Kerala), Kuchipudi (AP), Odissi, Manipuri, Mohiniyattam, Sattriya (Assam)', 'Sitar (Pt. Ravi Shankar), Shehnai (Ustad Bismillah Khan), Sarod (Ustad Amjad Ali Khan)', 'Kumbh Mela venues: Prayagraj, Haridwar, Ujjain, Nashik'],
          keyFormulasOrRules: ['Kathak is the only classical dance originating in Northern India (Uttar Pradesh).'],
          examMapping: ['up-police', 'ssc-cgl', 'ssc-mts']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk15',
          subjectId: 'gk',
          chapterId: 'gk-ch15',
          chapterName: 'Art and Culture',
          chapterNameHindi: 'कला एवं संस्कृति',
          question: 'Which of the eight recognized classical dance forms of India originated from the state of Uttar Pradesh?',
          questionHindi: 'भारत के आठ मान्यता प्राप्त शास्त्रीय नृत्यों में से किस नृत्य की उत्पत्ति उत्तर प्रदेश राज्य से हुई है?',
          options: ['Bharatanatyam', 'Kathak', 'Kathakali', 'Sattriya'],
          optionsHindi: ['भरतनाट्यम', 'कथक', 'कथकली', 'सत्रिया'],
          correctAnswer: 1,
          explanation: 'Kathak originated in Uttar Pradesh from ancient travelling bards (Kathakars) communicating stories through dance.',
          explanationHindi: 'कथक की उत्पत्ति उत्तर प्रदेश में नृत्य के माध्यम से पौराणिक कथाएं सुनाने वाले प्राचीन कथाकारों से हुई है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC CGL', 'SSC MTS']
        }
      ]
    },
    {
      id: 'gk-ch16',
      subjectId: 'gk',
      name: 'Sports GK',
      nameHindi: 'खेलकूद सामान्य ज्ञान (Trophies, Terms & Stadiums)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'army-agniveer'],
      description: 'National sports of countries, Trophies & Cups (Ranji, Duleep, Santosh, Thomas Cup), terms associated with sports, and famous stadiums.',
      topics: [
        {
          id: 'gk-ch16-t1',
          title: 'Cups, Trophies & Terminology',
          titleHindi: 'कप, ट्रॉफियां एवं खेल शब्दावली',
          difficulty: 'Basic',
          subtopics: ['Cricket: Ranji Trophy, Irani Cup; Football: Santosh Trophy, Durand Cup', 'Badminton: Thomas Cup (Men), Uber Cup (Women)', 'Court dimensions and player counts in Polo, Volleyball, Kabaddi'],
          keyFormulasOrRules: ['Durand Cup is the oldest football tournament in Asia.'],
          examMapping: ['ssc-cgl', 'up-police', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk16',
          subjectId: 'gk',
          chapterId: 'gk-ch16',
          chapterName: 'Sports GK',
          chapterNameHindi: 'खेलकूद सामान्य ज्ञान',
          question: 'The historic "Santosh Trophy" in India is associated with which premier sport?',
          questionHindi: 'भारत में ऐतिहासिक "संतोष ट्रॉफी" किस प्रमुख खेल से संबंधित है?',
          options: ['Cricket', 'Football', 'Hockey', 'Badminton'],
          optionsHindi: ['क्रिकेट', 'फुटबॉल', 'हॉकी', 'बैडमिंटन'],
          correctAnswer: 1,
          explanation: 'Santosh Trophy is the premier national football competition contested by regional state associations.',
          explanationHindi: 'संतोष ट्रॉफी भारतीय राज्यों की टीमों द्वारा खेली जाने वाली प्रमुख राष्ट्रीय फुटबॉल प्रतियोगिता है।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'UP Police', 'Railway Group D']
        }
      ]
    },
    {
      id: 'gk-ch17',
      subjectId: 'gk',
      name: 'Defence',
      nameHindi: 'रक्षा एवं सुरक्षा संरचना (Armed Forces & Commands)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-gd', 'railway-ntpc', 'up-police', 'army-agniveer'],
      description: 'Command structure of Indian Army, Navy, and Air Force, rank hierarchy, Paramilitary forces (CRPF, BSF, CISF, ITBP), and gallantry awards.',
      topics: [
        {
          id: 'gk-ch17-t1',
          title: 'Commands, Ranks & Paramilitary Forces',
          titleHindi: 'कमांड संरचना, पद पदानुक्रम एवं अर्धसैनिक बल',
          difficulty: 'Intermediate',
          subtopics: ['Army commands (7 commands) and headquarters', 'Equivalent officer ranks across Army, Navy & Air Force', 'Paramilitary mandates: BSF (Pakistan & Bangladesh borders), ITBP (China border)'],
          keyFormulasOrRules: ['Param Vir Chakra is India’s highest wartime gallantry award.'],
          examMapping: ['army-agniveer', 'ssc-gd', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk17',
          subjectId: 'gk',
          chapterId: 'gk-ch17',
          chapterName: 'Defence',
          chapterNameHindi: 'रक्षा एवं सुरक्षा संरचना',
          question: 'Which is the highest military decoration awarded for valor in the presence of the enemy in India?',
          questionHindi: 'भारत में दुश्मन की उपस्थिति में वीरता के लिए दिया जाने वाला सर्वोच्च सैन्य पदक कौन सा है?',
          options: ['Maha Vir Chakra', 'Param Vir Chakra', 'Kirti Chakra', 'Shaurya Chakra'],
          optionsHindi: ['महावीर चक्र', 'परमवीर चक्र', 'कीर्ति चक्र', 'शौर्य चक्र'],
          correctAnswer: 1,
          explanation: 'Param Vir Chakra (PVC) is India’s highest wartime gallantry award, first awarded to Major Somnath Sharma.',
          explanationHindi: 'परमवीर चक्र (PVC) भारत का सर्वोच्च युद्धकालीन वीरता पदक है, जो सर्वप्रथम मेजर सोमनाथ शर्मा को प्रदान किया गया था।',
          difficulty: 'Basic',
          examTags: ['Army Agniveer', 'SSC GD', 'UP Police']
        }
      ]
    },
    {
      id: 'gk-ch18',
      subjectId: 'gk',
      name: 'Uttar Pradesh GK',
      nameHindi: 'उत्तर प्रदेश सामान्य ज्ञान (UP Special GK)',
      difficulty: 'Intermediate',
      estimatedHours: 14,
      relevantExams: ['up-police', 'upsssc-pet'],
      description: 'Geography of UP (75 districts, 18 divisions), Rivers, Wildlife Sanctuaries (Dudhwa National Park), Minerals, Folk dances (Nautanki, Raslila), and historical monuments.',
      topics: [
        {
          id: 'gk-ch18-t1',
          title: 'UP Physical, Cultural & Administrative Profile',
          titleHindi: 'उत्तर प्रदेश भौतिक, सांस्कृतिक एवं प्रशासनिक रूपरेखा',
          difficulty: 'Intermediate',
          subtopics: ['75 districts, 18 administrative divisions, capital Lucknow', 'Dudhwa National Park in Lakhimpur Kheri', 'Chambal, Betwa, Ken, Gomti and Saryu rivers', 'Major crops: sugarcane, wheat, potato production rankings'],
          keyFormulasOrRules: ['Dudhwa National Park is the only national park in Uttar Pradesh (Lakhimpur Kheri district).', 'Ashvani Sir Note: Crucial for UP Police Constable exam — expect 8-10 direct questions from UP GK.'],
          solvedExamples: [{
            id: 'ex-gk-18',
            problem: 'Which is the only National Park situated in the state of Uttar Pradesh?',
            solution: 'Dudhwa National Park in Lakhimpur Kheri district, established in 1977.'
          }],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-gk18',
          subjectId: 'gk',
          chapterId: 'gk-ch18',
          chapterName: 'Uttar Pradesh GK',
          chapterNameHindi: 'उत्तर प्रदेश सामान्य ज्ञान',
          question: 'Dudhwa National Park, the only national park in Uttar Pradesh, is located in which district?',
          questionHindi: 'उत्तर प्रदेश का एकमात्र राष्ट्रीय उद्यान, दुधवा राष्ट्रीय उद्यान, किस जिले में स्थित है?',
          options: ['Varanasi', 'Lakhimpur Kheri', 'Pilibhit', 'Mirzapur'],
          optionsHindi: ['वाराणसी', 'लखीमपुर खीरी', 'पीलीभीत', 'मिर्ज़ापुर'],
          correctAnswer: 1,
          explanation: 'Dudhwa National Park in Lakhimpur Kheri is famous for swamp deer (Barasingha), tigers, and one-horned rhinos.',
          explanationHindi: 'लखीमपुर खीरी में स्थित दुधवा राष्ट्रीय उद्यान बारहसिंगा, बाघ और एक सींग वाले गैंडों के लिए प्रसिद्ध है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    }
  ]
};
