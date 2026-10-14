import { Subject } from '../../types';

export const GA_SUBJECT: Subject = {
  id: 'ga',
  name: 'General Awareness (GA)',
  hindiName: 'सामान्य चेतना एवं समसामयिकी (Current Affairs)',
  iconName: 'Globe',
  color: 'from-emerald-600 to-teal-700',
  description: 'Dynamic current affairs, government initiatives, national and international summits, sports, and Uttar Pradesh special developments for SSC, Railway & State exams.',
  totalChapters: 12,
  totalQuestions: 24,
  chapters: [
    {
      id: 'ga-ch1',
      subjectId: 'ga',
      name: 'National and International Current Affairs',
      nameHindi: 'राष्ट्रीय एवं अंतर्राष्ट्रीय समसामयिकी',
      difficulty: 'Intermediate',
      estimatedHours: 14,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'railway-group-d', 'up-police', 'upsssc-pet'],
      description: 'Bilateral summits, G20/BRICS/SCO developments, international treaties, national policies, and major geopolitical events.',
      topics: [
        {
          id: 'ga-ch1-t1',
          title: 'Global Summits and Bilateral MoUs',
          titleHindi: 'वैश्विक शिखर सम्मेलन एवं द्विपक्षीय समझौते',
          difficulty: 'Intermediate',
          subtopics: ['G20, SCO, BRICS, ASEAN, Quad Summits', 'India’s Free Trade Agreements (FTAs)', 'Bilateral state visits and strategic defense pacts'],
          keyFormulasOrRules: ['Focus on Theme, Host Country, and India-specific outcomes.', 'Ashvani Sir Note: Always track which country held the rotating presidency in the ongoing year.'],
          solvedExamples: [{
            id: 'ex-ga-1',
            problem: 'Which country chaired the 16th BRICS Summit in 2024 and what was its key milestone?',
            solution: 'Russia chaired the summit in Kazan. Key milestone: Expansion including Egypt, Ethiopia, Iran, UAE, and discussions on cross-border payment platforms.',
            trickOrTip: 'Ashvani Sir Tip: Notice newly admitted members as direct MCQ targets in SSC CGL.'
          }],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga1',
          subjectId: 'ga',
          chapterId: 'ga-ch1',
          chapterName: 'National & International Current Affairs',
          chapterNameHindi: 'राष्ट्रीय एवं अंतर्राष्ट्रीय समसामयिकी',
          question: 'Which country held the presidency of the G20 in 2024, following India’s landmark 2023 New Delhi presidency?',
          questionHindi: 'भारत की 2023 नई दिल्ली अध्यक्षता के बाद 2024 में G20 की अध्यक्षता किस देश ने संभाली?',
          options: ['South Africa', 'Brazil', 'Saudi Arabia', 'Indonesia'],
          optionsHindi: ['दक्षिण अफ्रीका', 'ब्राजील', 'सऊदी अरब', 'इंडोनेशिया'],
          correctAnswer: 1,
          explanation: 'Brazil hosted the 2024 G20 Summit in Rio de Janeiro with the motto "Building a Just World and a Sustainable Planet".',
          explanationHindi: 'ब्राजील ने रियो डी जेनेरो में 2024 G20 शिखर सम्मेलन की मेजबानी की, जिसका विषय "न्यायपूर्ण विश्व और सतत ग्रह का निर्माण" था।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UP Police']
        },
        {
          id: 'q-ga1-2',
          subjectId: 'ga',
          chapterId: 'ga-ch1',
          chapterName: 'National & International Current Affairs',
          chapterNameHindi: 'राष्ट्रीय एवं अंतर्राष्ट्रीय समसामयिकी',
          question: 'Where is the permanent headquarters of the Shanghai Cooperation Organisation (SCO) situated?',
          questionHindi: 'शंघाई सहयोग संगठन (SCO) का स्थायी मुख्यालय कहाँ स्थित है?',
          options: ['Shanghai, China', 'Beijing, China', 'Tashkent, Uzbekistan', 'Astana, Kazakhstan'],
          optionsHindi: ['शंघाई, चीन', 'बीजिंग, चीन', 'ताशकंद, उज्बेकिस्तान', 'अस्ताना, कज़ाकिस्तान'],
          correctAnswer: 1,
          explanation: 'SCO Secretariat is in Beijing, China, while the RATS (Regional Anti-Terrorist Structure) body is in Tashkent, Uzbekistan.',
          explanationHindi: 'SCO सचिवालय बीजिंग, चीन में है, जबकि RATS (क्षेत्रीय आतंकवाद विरोधी संरचना) अंग ताशकंद, उज्बेकिस्तान में है।',
          difficulty: 'Intermediate',
          examTags: ['SSC CHSL', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'ga-ch2',
      subjectId: 'ga',
      name: 'Government Schemes',
      nameHindi: 'सरकारी योजनाएं एवं जन कल्याण कार्यक्रम',
      difficulty: 'Basic',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Central sector and centrally sponsored welfare schemes, ministries, launch dates, budget allocations, and target beneficiaries.',
      topics: [
        {
          id: 'ga-ch2-t1',
          title: 'Flagship Socio-Economic Programs',
          titleHindi: 'प्रमुख सामाजिक-आर्थिक कल्याणकारी योजनाएं',
          difficulty: 'Basic',
          subtopics: ['PM-KISAN, PM Awas Yojana, PM Vishwakarma', 'Ayushman Bharat & PM Jan Dhan Yojana', 'Sub-schemes under Jal Jeevan Mission'],
          keyFormulasOrRules: ['Check Ministry, Launch Year, Eligibility Age, and Financial Outlay.'],
          solvedExamples: [{
            id: 'ex-ga-2',
            problem: 'What is the financial support provided under PM-KISAN per year?',
            solution: '₹6,000 per eligible farmer family per year, released in 3 equal four-monthly installments of ₹2,000 directly via DBT.'
          }],
          examMapping: ['up-police', 'upsssc-pet', 'ssc-gd']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga2',
          subjectId: 'ga',
          chapterId: 'ga-ch2',
          chapterName: 'Government Schemes',
          chapterNameHindi: 'सरकारी योजनाएं',
          question: 'The PM Vishwakarma scheme, launched by the Central Government, primarily supports which group of people?',
          questionHindi: 'केंद्र सरकार द्वारा शुरू की गई पीएम विश्वकर्मा योजना मुख्य रूप से किस वर्ग का समर्थन करती है?',
          options: ['Software engineers and startups', 'Traditional artisans and craftsmen', 'Senior citizens pensions', 'College research scholars'],
          optionsHindi: ['सॉफ्टवेयर इंजीनियर और स्टार्टअप', 'पारंपरिक कारीगर और शिल्पकार', 'वरिष्ठ नागरिक पेंशन', 'कॉलेज अनुसंधान छात्र'],
          correctAnswer: 1,
          explanation: 'PM Vishwakarma provides collateral-free credit, skill training, toolkits, and market support to 18 traditional artisan trades.',
          explanationHindi: 'पीएम विश्वकर्मा योजना 18 पारंपरिक कारीगर और शिल्पकार पेशों को बिना गारंटी ऋण, कौशल प्रशिक्षण, टूलकिट और विपणन सहायता प्रदान करती है।',
          difficulty: 'Basic',
          examTags: ['SSC MTS', 'UPSSSC PET', 'UP Police']
        }
      ]
    },
    {
      id: 'ga-ch3',
      subjectId: 'ga',
      name: 'Economy in the News',
      nameHindi: 'आर्थिक समसामयिकी (बजट एवं बैंकिंग)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'upsssc-pet'],
      description: 'Union Budget highlights, Economic Survey key findings, RBI Monetary Policy Committee decisions, inflation data, and GST collection updates.',
      topics: [
        {
          id: 'ga-ch3-t1',
          title: 'Union Budget & Monetary Trends',
          titleHindi: 'केंद्रीय बजट एवं मौद्रिक रुझान',
          difficulty: 'Intermediate',
          subtopics: ['Fiscal deficit target and Capital expenditure (Capex)', 'Repo rate and MPC structure', 'Direct and indirect tax slab changes'],
          keyFormulasOrRules: ['Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings).'],
          examMapping: ['ssc-cgl', 'railway-ntpc']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga3',
          subjectId: 'ga',
          chapterId: 'ga-ch3',
          chapterName: 'Economy in the News',
          chapterNameHindi: 'आर्थिक समसामयिकी',
          question: 'Which constitutional body or official presents the Union Budget before the Parliament under Article 112?',
          questionHindi: 'अनुच्छेद 112 के तहत संसद के समक्ष केंद्रीय बजट प्रस्तुत करने का उत्तरदायित्व किस पर है?',
          options: ['RBI Governor', 'Union Finance Minister', 'Comptroller & Auditor General', 'NITI Aayog Vice Chairman'],
          optionsHindi: ['आरबीआई गवर्नर', 'केंद्रीय वित्त मंत्री', 'नियंत्रक एवं महालेखापरीक्षक', 'नीति आयोग के उपाध्यक्ष'],
          correctAnswer: 1,
          explanation: 'The Union Finance Minister presents the Annual Financial Statement (Budget) mandated by Article 112 of the Constitution.',
          explanationHindi: 'केंद्रीय वित्त मंत्री संविधान के अनुच्छेद 112 के तहत वार्षिक वित्तीय विवरण (बजट) संसद में प्रस्तुत करते हैं।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'ga-ch4',
      subjectId: 'ga',
      name: 'Science and Technology',
      nameHindi: 'विज्ञान एवं प्रौद्योगिकी (ISRO, DRDO एवं AI)',
      difficulty: 'Intermediate',
      estimatedHours: 10,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'railway-group-d', 'army-agniveer'],
      description: 'ISRO space missions (Chandrayaan, Gaganyaan, Aditya-L1), DRDO missile tests, artificial intelligence advances, and supercomputing.',
      topics: [
        {
          id: 'ga-ch4-t1',
          title: 'Space Missions and Defence Innovations',
          titleHindi: 'अंतरिक्ष मिशन एवं रक्षा नवाचार',
          difficulty: 'Intermediate',
          subtopics: ['Aditya L1 Lagrange Point 1 insertion', 'Gaganyaan crew escape and test vehicles', 'AIRAWAT and PARAM supercomputers'],
          keyFormulasOrRules: ['Remember launch vehicle: LVM3 vs PSLV vs SSLV, and testing launch sites.'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga4',
          subjectId: 'ga',
          chapterId: 'ga-ch4',
          chapterName: 'Science & Technology',
          chapterNameHindi: 'विज्ञान एवं प्रौद्योगिकी',
          question: 'At which gravitational equilibrium point in space did ISRO successfully place the Aditya-L1 solar observatory?',
          questionHindi: 'इसरो ने आदित्य-L1 सौर वेधशाला को अंतरिक्ष में किस गुरुत्वाकर्षण संतुलन बिंदु पर सफलतापूर्वक स्थापित किया?',
          options: ['Lagrange Point L1', 'Lagrange Point L2', 'Low Earth Orbit (LEO)', 'Geostationary Orbit (GEO)'],
          optionsHindi: ['लैग्रेंज पॉइंट L1', 'लैग्रेंज पॉइंट L2', 'निम्न भू-कक्षा (LEO)', 'भू-स्थैतिक कक्षा (GEO)'],
          correctAnswer: 0,
          explanation: 'Aditya-L1 was inserted into a halo orbit around Lagrange Point 1 (L1), about 1.5 million km from Earth towards the Sun.',
          explanationHindi: 'आदित्य-L1 को सूर्य की ओर पृथ्वी से लगभग 15 लाख किमी दूर लैग्रेंज पॉइंट 1 (L1) के चारों ओर एक हेलो कक्षा में स्थापित किया गया।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'Railway NTPC', 'Army Agniveer']
        }
      ]
    },
    {
      id: 'ga-ch5',
      subjectId: 'ga',
      name: 'Environment',
      nameHindi: 'पर्यावरण एवं पारिस्थितिकी समसामयिकी',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'up-police', 'upsssc-pet'],
      description: 'COP summits, new Ramsar wetland sites, Project Tiger and Cheetah updates, national parks, and pollution indices.',
      topics: [
        {
          id: 'ga-ch5-t1',
          title: 'Wetlands, Tiger Reserves & Climate Treaties',
          titleHindi: 'आर्द्रभूमि, बाघ अभयारण्य एवं जलवायु संधियां',
          difficulty: 'Intermediate',
          subtopics: ['Ramsar sites total count and locations', 'Project Tiger 50-year milestones', 'State of Forest Report (ISFR) trends'],
          keyFormulasOrRules: ['Tamil Nadu has the highest number of Ramsar sites in India, followed by Uttar Pradesh.'],
          examMapping: ['upsssc-pet', 'up-police', 'ssc-cgl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga5',
          subjectId: 'ga',
          chapterId: 'ga-ch5',
          chapterName: 'Environment',
          chapterNameHindi: 'पर्यावरण',
          question: 'Project Cheetah in India translocated African cheetahs into which national park in Madhya Pradesh?',
          questionHindi: 'भारत में प्रोजेक्ट चीता के तहत अफ्रीकी चीतों को मध्य प्रदेश के किस राष्ट्रीय उद्यान में बसाया गया?',
          options: ['Kanha National Park', 'Kuno National Park', 'Bandhavgarh National Park', 'Jim Corbett National Park'],
          optionsHindi: ['कान्हा राष्ट्रीय उद्यान', 'कूनो राष्ट्रीय उद्यान', 'बांधवगढ़ राष्ट्रीय उद्यान', 'जिम कॉर्बेट राष्ट्रीय उद्यान'],
          correctAnswer: 1,
          explanation: 'Kuno National Park in Sheopur, MP received cheetahs translocated from Namibia and South Africa.',
          explanationHindi: 'मध्य प्रदेश के श्योपुर स्थित कूनो राष्ट्रीय उद्यान में नामीबिया और दक्षिण अफ्रीका से लाए गए चीतों को बसाया गया।',
          difficulty: 'Basic',
          examTags: ['SSC GD', 'UP Police', 'Railway Group D']
        }
      ]
    },
    {
      id: 'ga-ch6',
      subjectId: 'ga',
      name: 'Sports',
      nameHindi: 'खेलकूद समसामयिकी (Sports Affairs)',
      difficulty: 'Basic',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'army-agniveer'],
      description: 'Olympic & Paralympic Games, ICC Cricket Trophies, Grand Slam Tennis, Asian Games, National Games, and record-holding athletes.',
      topics: [
        {
          id: 'ga-ch6-t1',
          title: 'Major International Tournaments & Medals',
          titleHindi: 'प्रमुख अंतर्राष्ट्रीय प्रतियोगिताएं एवं पदक तालिका',
          difficulty: 'Basic',
          subtopics: ['Paris 2024 Olympic & Paralympic medallists', 'T20 Cricket World Cup Champions', 'Grand Slams: Australian, French, Wimbledon, US Open'],
          keyFormulasOrRules: ['Track Athlete Name + Sport + State + Medal achieved.'],
          examMapping: ['ssc-cgl', 'ssc-gd', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga6',
          subjectId: 'ga',
          chapterId: 'ga-ch6',
          chapterName: 'Sports',
          chapterNameHindi: 'खेलकूद',
          question: 'Who won the ICC Men’s T20 World Cup 2024 held in the West Indies and USA?',
          questionHindi: 'वेस्टइंडीज और यूएसए में आयोजित ICC पुरुष T20 विश्व कप 2024 किस देश ने जीता?',
          options: ['South Africa', 'Australia', 'India', 'England'],
          optionsHindi: ['दक्षिण अफ्रीका', 'ऑस्ट्रेलिया', 'भारत', 'इंग्लैंड'],
          correctAnswer: 2,
          explanation: 'India defeated South Africa in Barbados to lift the 2024 ICC T20 World Cup under captain Rohit Sharma.',
          explanationHindi: 'भारत ने बारबाडोस में कप्तान रोहित शर्मा के नेतृत्व में दक्षिण अफ्रीका को हराकर 2024 ICC T20 विश्व कप जीता।',
          difficulty: 'Basic',
          examTags: ['SSC GD', 'UP Police', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'ga-ch7',
      subjectId: 'ga',
      name: 'Awards',
      nameHindi: 'पुरस्कार एवं सम्मान (Awards & Honours)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'upsssc-pet'],
      description: 'Bharat Ratna, Padma Awards, Gallantry Awards, Dadasaheb Phalke, Nobel Prizes, Booker Prize, and Jnanpith Award.',
      topics: [
        {
          id: 'ga-ch7-t1',
          title: 'Civilian & Literary Honours',
          titleHindi: 'नागरिक एवं साहित्यिक सम्मान',
          difficulty: 'Intermediate',
          subtopics: ['Recipients of Bharat Ratna', 'Jnanpith and Saraswati Samman awardees', 'Nobel Prizes in Medicine, Physics, Chemistry, Peace, Economics'],
          keyFormulasOrRules: ['Check the specific field for which the award was conferred.'],
          examMapping: ['ssc-cgl', 'up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga7',
          subjectId: 'ga',
          chapterId: 'ga-ch7',
          chapterName: 'Awards',
          chapterNameHindi: 'पुरस्कार एवं सम्मान',
          question: 'The prestigious Jnanpith Award is conferred annually for outstanding contribution in which field?',
          questionHindi: 'प्रतिष्ठित ज्ञानपीठ पुरस्कार प्रतिवर्ष किस क्षेत्र में उत्कृष्ट योगदान के लिए दिया जाता है?',
          options: ['Cinema and Performing Arts', 'Indian Literature', 'Scientific Research', 'Public Administration'],
          optionsHindi: ['सिनेमा और प्रदर्शन कला', 'भारतीय साहित्य', 'वैज्ञानिक अनुसंधान', 'लोक प्रशासन'],
          correctAnswer: 1,
          explanation: 'Jnanpith Award is India’s highest literary award presented annually by Bharatiya Jnanpith.',
          explanationHindi: 'ज्ञानपीठ पुरस्कार भारतीय ज्ञानपीठ द्वारा प्रतिवर्ष दिया जाने वाला भारत का सर्वोच्च साहित्यिक पुरस्कार है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC CHSL', 'UPSSSC PET']
        }
      ]
    },
    {
      id: 'ga-ch8',
      subjectId: 'ga',
      name: 'Appointments',
      nameHindi: 'नियुक्तियां एवं पदाधिकारी (Key Appointments)',
      difficulty: 'Basic',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'railway-ntpc', 'up-police', 'army-agniveer'],
      description: 'Chief Justice of India, Chief Election Commissioner, CAG, Attorney General, Chiefs of Army/Navy/Air Force, and heads of international bodies (UN, World Bank).',
      topics: [
        {
          id: 'ga-ch8-t1',
          title: 'Constitutional & National Leadership Roles',
          titleHindi: 'संवैधानिक एवं राष्ट्रीय प्रमुख पद',
          difficulty: 'Basic',
          subtopics: ['Current CJI and term numbering', 'Election Commission of India panel members', 'World Bank President and IMF Deputy MD'],
          keyFormulasOrRules: ['Keep chronological tracking of 50th, 51st CJI, and constitutional tenure limits.'],
          examMapping: ['ssc-cgl', 'railway-ntpc', 'up-police']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga8',
          subjectId: 'ga',
          chapterId: 'ga-ch8',
          chapterName: 'Appointments',
          chapterNameHindi: 'नियुक्तियां',
          question: 'Under Article 148 of the Constitution, who appoints the Comptroller and Auditor General (CAG) of India?',
          questionHindi: 'संविधान के अनुच्छेद 148 के तहत, भारत के नियंत्रक एवं महालेखापरीक्षक (CAG) की नियुक्ति कौन करता है?',
          options: ['Prime Minister of India', 'President of India', 'Chief Justice of India', 'Speaker of Lok Sabha'],
          optionsHindi: ['भारत के प्रधान मंत्री', 'भारत के राष्ट्रपति', 'भारत के मुख्य न्यायाधीश', 'लोकसभा अध्यक्ष'],
          correctAnswer: 1,
          explanation: 'The CAG of India is appointed by the President of India by warrant under his hand and seal.',
          explanationHindi: 'भारत के नियंत्रक एवं महालेखापरीक्षक की नियुक्ति भारत के राष्ट्रपति द्वारा की जाती है।',
          difficulty: 'Basic',
          examTags: ['SSC CGL', 'Railway NTPC', 'UP Police']
        }
      ]
    },
    {
      id: 'ga-ch9',
      subjectId: 'ga',
      name: 'Reports',
      nameHindi: 'रिपोर्ट्स एवं सूचकांक (Reports & Global Indices)',
      difficulty: 'Intermediate',
      estimatedHours: 6,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'railway-ntpc', 'upsssc-pet'],
      description: 'Global Innovation Index, Human Development Index (HDI), World Happiness Report, Global Hunger Index, and NITI Aayog SDG Index.',
      topics: [
        {
          id: 'ga-ch9-t1',
          title: 'Global Rankings and Publishing Bodies',
          titleHindi: 'वैश्विक रैंकिंग एवं जारीकर्ता संस्थाएं',
          difficulty: 'Intermediate',
          subtopics: ['Publishing organization (UNDP, WEF, WIPO, WB)', 'India’s rank and change from previous year', 'Top ranked country in the index'],
          keyFormulasOrRules: ['Memorize: Index name + Publishing agency + India rank.'],
          examMapping: ['ssc-cgl', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga9',
          subjectId: 'ga',
          chapterId: 'ga-ch9',
          chapterName: 'Reports',
          chapterNameHindi: 'रिपोर्ट्स एवं सूचकांक',
          question: 'Which international organisation releases the Human Development Index (HDI) report annually?',
          questionHindi: 'कौन सा अंतर्राष्ट्रीय संगठन प्रतिवर्ष मानव विकास सूचकांक (HDI) रिपोर्ट जारी करता है?',
          options: ['World Bank', 'International Monetary Fund (IMF)', 'United Nations Development Programme (UNDP)', 'World Economic Forum (WEF)'],
          optionsHindi: ['विश्व बैंक', 'अंतर्राष्ट्रीय मुद्रा कोष (IMF)', 'संयुक्त राष्ट्र विकास कार्यक्रम (UNDP)', 'विश्व आर्थिक मंच (WEF)'],
          correctAnswer: 2,
          explanation: 'The Human Development Index is published by UNDP based on life expectancy, education, and per capita income.',
          explanationHindi: 'मानव विकास सूचकांक UNDP द्वारा जीवन प्रत्याशा, शिक्षा और प्रति व्यक्ति आय के आधार पर जारी किया जाता है।',
          difficulty: 'Intermediate',
          examTags: ['SSC CGL', 'Railway NTPC']
        }
      ]
    },
    {
      id: 'ga-ch10',
      subjectId: 'ga',
      name: 'Important Days',
      nameHindi: 'महत्वपूर्ण दिवस एवं विषय (Important Days & Themes)',
      difficulty: 'Basic',
      estimatedHours: 5,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd', 'railway-ntpc', 'up-police', 'upsssc-pet', 'army-agniveer'],
      description: 'National and International observance days, annual dates, origins, and designated themes for the current year.',
      topics: [
        {
          id: 'ga-ch10-t1',
          title: 'Calendar of National & UN Observances',
          titleHindi: 'राष्ट्रीय एवं संयुक्त राष्ट्र दिवस कैलेंडर',
          difficulty: 'Basic',
          subtopics: ['National Youth Day (12 Jan), Science Day (28 Feb)', 'World Environment Day (5 June), Yoga Day (21 June)', 'Constitution Day (26 Nov), Good Governance Day (25 Dec)'],
          keyFormulasOrRules: ['Examiners frequently test National Science Day (Raman Effect discovery) and International Yoga Day.'],
          examMapping: ['ssc-gd', 'up-police', 'army-agniveer']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga10',
          subjectId: 'ga',
          chapterId: 'ga-ch10',
          chapterName: 'Important Days',
          chapterNameHindi: 'महत्वपूर्ण दिवस',
          question: 'National Science Day is celebrated in India every year on 28th February to commemorate which historic discovery?',
          questionHindi: 'भारत में हर साल 28 फरवरी को राष्ट्रीय विज्ञान दिवस किस ऐतिहासिक खोज की स्मृति में मनाया जाता है?',
          options: ['Discovery of Zero by Aryabhata', 'Raman Effect by Sir C.V. Raman', 'Bose-Einstein Condensate', 'Launch of Aryabhata Satellite'],
          optionsHindi: ['आर्यभट्ट द्वारा शून्य की खोज', 'सर सी.वी. रमन द्वारा रमन प्रभाव', 'बोस-आइंस्टीन कंडेनसेट', 'आर्यभट्ट उपग्रह का प्रक्षेपण'],
          correctAnswer: 1,
          explanation: 'Sir C.V. Raman discovered the Raman Effect on 28 February 1928, for which he was awarded the Nobel Prize in Physics in 1930.',
          explanationHindi: 'सर सी.वी. रमन ने 28 फरवरी 1928 को रमन प्रभाव की खोज की थी, जिसके लिए उन्हें 1930 में भौतिकी का नोबेल पुरस्कार मिला था।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'SSC MTS', 'Railway Group D']
        }
      ]
    },
    {
      id: 'ga-ch11',
      subjectId: 'ga',
      name: 'Defence Affairs',
      nameHindi: 'रक्षा मामले एवं युद्धाभ्यास (Defence & Military)',
      difficulty: 'Intermediate',
      estimatedHours: 8,
      relevantExams: ['ssc-cgl', 'ssc-chsl', 'ssc-gd', 'railway-ntpc', 'army-agniveer', 'up-police'],
      description: 'Joint military, naval, and air exercises of Indian Armed Forces with partner nations, indigenous aircraft carriers, and stealth destroyers.',
      topics: [
        {
          id: 'ga-ch11-t1',
          title: 'Joint Exercises & Defence Indigenisation',
          titleHindi: 'संयुक्त युद्धाभ्यास एवं स्वदेशी रक्षा उपकरण',
          difficulty: 'Intermediate',
          subtopics: ['Yudh Abhyas, Surya Kiran, Mitra Shakti, Varuna, Malabar', 'INS Vikrant, Tejas Mk1A, Prachand helicopters', 'BrahMos missile variants and exports'],
          keyFormulasOrRules: ['Always note participating countries and branch (Army, Navy, Air Force).'],
          examMapping: ['army-agniveer', 'ssc-gd', 'ssc-cgl']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga11',
          subjectId: 'ga',
          chapterId: 'ga-ch11',
          chapterName: 'Defence Affairs',
          chapterNameHindi: 'रक्षा मामले',
          question: 'The joint military exercise "Surya Kiran" is conducted annually between the armies of India and which neighbouring country?',
          questionHindi: 'संयुक्त सैन्य अभ्यास "सूर्य किरण" प्रतिवर्ष भारत और किस पड़ोसी देश की सेनाओं के बीच आयोजित किया जाता है?',
          options: ['Sri Lanka', 'Nepal', 'Bangladesh', 'Bhutan'],
          optionsHindi: ['श्रीलंका', 'नेपाल', 'बांग्लादेश', 'भूटान'],
          correctAnswer: 1,
          explanation: 'Exercise Surya Kiran is a bilateral counter-terrorism and jungle warfare exercise between India and Nepal.',
          explanationHindi: 'सूर्य किरण भारत और नेपाल के बीच एक द्विपक्षीय आतंकवाद विरोधी और जंगल युद्ध अभ्यास है।',
          difficulty: 'Basic',
          examTags: ['Army Agniveer', 'SSC GD', 'UP Police']
        }
      ]
    },
    {
      id: 'ga-ch12',
      subjectId: 'ga',
      name: 'Uttar Pradesh Current Affairs',
      nameHindi: 'उत्तर प्रदेश समसामयिकी (UP Current Affairs)',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      relevantExams: ['up-police', 'upsssc-pet'],
      description: 'UP Budget, Expressways (Purvanchal, Bundelkhand, Ganga Expressway), One District One Product (ODOP), Noida International Airport, and state schemes.',
      topics: [
        {
          id: 'ga-ch12-t1',
          title: 'UP Mega Infrastructure and ODOP Program',
          titleHindi: 'यूपी महा-बुनियादी ढांचा एवं एक जिला एक उत्पाद योजना',
          difficulty: 'Intermediate',
          subtopics: ['Ganga Expressway route (Meerut to Prayagraj)', 'Noida International Airport (Jewar)', 'UP Global Investors Summit and industrial corridors', 'ODOP products across key districts'],
          keyFormulasOrRules: ['Crucial for UP Police Constable & UPSSSC PET: Ganga Expressway connects 12 districts; ODOP Bhadohi = Carpet, Kannauj = Attar, Aligarh = Locks.'],
          solvedExamples: [{
            id: 'ex-ga-12',
            problem: 'Which UP district is associated with "Attar" (Perfume) under the ODOP scheme?',
            solution: 'Kannauj (the Perfume Capital of India).'
          }],
          examMapping: ['up-police', 'upsssc-pet']
        }
      ],
      practiceQuestions: [
        {
          id: 'q-ga12',
          subjectId: 'ga',
          chapterId: 'ga-ch12',
          chapterName: 'Uttar Pradesh Current Affairs',
          chapterNameHindi: 'उत्तर प्रदेश समसामयिकी',
          question: 'The Ganga Expressway in Uttar Pradesh connects which two major cities across approximately 594 km?',
          questionHindi: 'उत्तर प्रदेश में गंगा एक्सप्रेसवे लगभग 594 किमी की दूरी में किन दो प्रमुख शहरों को जोड़ता है?',
          options: ['Noida to Varanasi', 'Meerut to Prayagraj', 'Agra to Lucknow', 'Gorakhpur to Kanpur'],
          optionsHindi: ['नोएडा से वाराणसी', 'मेरठ से प्रयागराज', 'आगरा से लखनऊ', 'गोरखपुर से कानपुर'],
          correctAnswer: 1,
          explanation: 'The Ganga Expressway connects Meerut to Prayagraj spanning 12 districts across western and eastern UP.',
          explanationHindi: 'गंगा एक्सप्रेसवे मेरठ को प्रयागराज से जोड़ता है और पश्चिमी व पूर्वी यूपी के 12 जिलों से होकर गुजरता है।',
          difficulty: 'Basic',
          examTags: ['UP Police', 'UPSSSC PET']
        }
      ]
    }
  ]
};
