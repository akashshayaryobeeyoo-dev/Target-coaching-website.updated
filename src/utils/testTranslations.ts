import { TestLanguage, Question } from '../types';

export interface LocalizedQuestionContent {
  question: string;
  options: [string, string, string, string];
  explanation: string;
  chapterName: string;
  isTranslationAvailable: boolean;
}

export const CBT_UI_TEXT: Record<TestLanguage, {
  consoleTitle: string;
  timeRemaining: string;
  submitTestBtn: string;
  finishAndSubmitBtn: string;
  saveAndNextBtn: string;
  prevBtn: string;
  markReviewBtn: string;
  markedReviewBtn: string;
  clearResponseBtn: string;
  questionNo: string;
  marksLabel: string;
  negativeLabel: string;
  questionPalette: string;
  answeredLabel: string;
  notAnsweredLabel: string;
  markedReviewLabel: string;
  notVisitedLabel: string;
  remainingLabel: string;
  totalQsLabel: string;
  candidateRoll: string;
  languageSelectTitle: string;
  languageSelectSubtitle: string;
  englishChoice: string;
  hindiChoice: string;
  switchLanguageBtn: string;
  currentLanguage: string;
  
  // Instructions screen
  instructionsBadge: string;
  totalDurationLabel: string;
  minutesLabel: string;
  questionsCountLabel: string;
  maxMarksLabel: string;
  marksText: string;
  negativePerWrong: string;
  generalInstructionsTitle: string;
  defaultInstructions: string[];
  paletteLegendTitle: string;
  readyToBeginBtn: string;
  cancelBtn: string;
  backToTestsBtn: string;

  // Results screen
  resultBadge: string;
  resultDatePrefix: string;
  timeTakenPrefix: string;
  yourScoreLabel: string;
  outOfLabel: string;
  correctBadge: string;
  correctSubtext: string;
  incorrectBadge: string;
  incorrectSubtext: string;
  unattemptedBadge: string;
  unattemptedSubtext: string;
  accuracyBadge: string;
  accuracySubtext: string;
  assessmentTitle: string;
  assessmentExcellent: string;
  assessmentGood: string;
  assessmentNeedsImprovement: string;
  solutionsTitle: string;
  reviewCountPrefix: string;
  correctPlus2: string;
  incorrectMinus: string;
  unattemptedZero: string;
  correctAnswerOptionPrefix: string;
  explanationTitle: string;
  attemptAnotherBtn: string;
  viewDashboardBtn: string;
  translationUnavailableBadge: string;
}> = {
  en: {
    consoleTitle: 'TARGET CBT CONSOLE',
    timeRemaining: 'Time Remaining',
    submitTestBtn: 'Submit Test',
    finishAndSubmitBtn: 'Finish & Submit Exam',
    saveAndNextBtn: 'Save & Next',
    prevBtn: 'Previous',
    markReviewBtn: 'Mark for Review',
    markedReviewBtn: 'Marked for Review ✓',
    clearResponseBtn: 'Clear Response',
    questionNo: 'Question No.',
    marksLabel: 'Marks:',
    negativeLabel: 'Negative:',
    questionPalette: 'Question Palette:',
    answeredLabel: 'Answered',
    notAnsweredLabel: 'Not Answered',
    markedReviewLabel: 'Marked for Review',
    notVisitedLabel: 'Not Visited',
    remainingLabel: 'Remaining:',
    totalQsLabel: 'Total Qs:',
    candidateRoll: 'Roll:',
    languageSelectTitle: 'Select Test Language',
    languageSelectSubtitle: 'Choose your preferred examination language before starting',
    englishChoice: 'English',
    hindiChoice: 'हिंदी (Hindi)',
    switchLanguageBtn: 'Language / भाषा',
    currentLanguage: 'Current: English',

    instructionsBadge: 'Official CBT Interface',
    totalDurationLabel: 'Total Duration',
    minutesLabel: 'Minutes',
    questionsCountLabel: 'Questions',
    maxMarksLabel: 'Maximum Marks',
    marksText: 'Marks',
    negativePerWrong: 'per wrong',
    generalInstructionsTitle: 'General Examination Instructions:',
    defaultInstructions: [
      'Each question carries 2 marks.',
      'There is a negative marking deduction for each incorrect response.',
      'You can navigate between questions using the Question Palette on the right.',
      'Click "Save & Next" to record your response.',
      'Click "Submit Test" when you are finished.'
    ],
    paletteLegendTitle: 'Question Palette Symbols:',
    readyToBeginBtn: 'I am Ready to Begin Test →',
    cancelBtn: 'Cancel',
    backToTestsBtn: '← Back to Tests',

    resultBadge: 'Examination Result & Analysis',
    resultDatePrefix: 'Completed on',
    timeTakenPrefix: 'Time Taken:',
    yourScoreLabel: 'YOUR SCORE',
    outOfLabel: 'out of',
    correctBadge: 'CORRECT',
    correctSubtext: 'Right answers',
    incorrectBadge: 'INCORRECT',
    incorrectSubtext: 'Wrong answers',
    unattemptedBadge: 'UNATTEMPTED',
    unattemptedSubtext: 'Left blank',
    accuracyBadge: 'ACCURACY',
    accuracySubtext: 'Success rate',
    assessmentTitle: "Ashvani Sir's Performance Assessment:",
    assessmentExcellent: 'Outstanding performance! Your accuracy is within the final selection merit band. Maintain your daily revision cycle.',
    assessmentGood: 'Good attempt, but negative marks affected your final score. Review the detailed explanations below to eliminate calculation errors.',
    assessmentNeedsImprovement: "Don't be discouraged. Focus on foundational theory in the Complete Syllabus section, solve step-by-step examples, and retake the test.",
    solutionsTitle: 'Detailed Question Solutions & Explanations',
    reviewCountPrefix: 'Review all questions with Ashvani Sir tips',
    correctPlus2: 'Correct (+2)',
    incorrectMinus: 'Incorrect (-0.5)',
    unattemptedZero: 'Unattempted (0)',
    correctAnswerOptionPrefix: 'Correct Answer: Option',
    explanationTitle: 'Explanation:',
    attemptAnotherBtn: 'Attempt Another Test',
    viewDashboardBtn: 'Explore 6-Subject Syllabus',
    translationUnavailableBadge: 'Verified Hindi translation unavailable for this question'
  },
  hi: {
    consoleTitle: 'टारगेट सीबीटी परीक्षा कंसोल',
    timeRemaining: 'शेष समय',
    submitTestBtn: 'परीक्षा जमा करें',
    finishAndSubmitBtn: 'समाप्त करें और परीक्षा जमा करें',
    saveAndNextBtn: 'उत्तर सहेजें एवं अगला',
    prevBtn: 'पिछला प्रश्न',
    markReviewBtn: 'समीक्षा के लिए चिह्नित करें',
    markedReviewBtn: 'समीक्षा हेतु चिह्नित ✓',
    clearResponseBtn: 'प्रतिक्रिया हटाएं',
    questionNo: 'प्रश्न संख्या',
    marksLabel: 'अंक:',
    negativeLabel: 'ऋणात्मक अंक:',
    questionPalette: 'प्रश्न पैलेट:',
    answeredLabel: 'उत्तर दिया',
    notAnsweredLabel: 'अनुत्तरित',
    markedReviewLabel: 'समीक्षा हेतु',
    notVisitedLabel: 'नहीं देखा',
    remainingLabel: 'शेष प्रश्न:',
    totalQsLabel: 'कुल प्रश्न:',
    candidateRoll: 'अनुक्रमांक:',
    languageSelectTitle: 'परीक्षा की भाषा चुनें',
    languageSelectSubtitle: 'टेस्ट शुरू करने से पहले अपनी सुविधानुसार भाषा का चयन करें',
    englishChoice: 'English (अंग्रेजी)',
    hindiChoice: 'हिंदी (Hindi)',
    switchLanguageBtn: 'भाषा बदलें (Language)',
    currentLanguage: 'वर्तमान भाषा: हिंदी',

    instructionsBadge: 'आधिकारिक सीबीटी इंटरफ़ेस',
    totalDurationLabel: 'कुल समयावधि',
    minutesLabel: 'मिनट',
    questionsCountLabel: 'कुल प्रश्न',
    maxMarksLabel: 'अधिकतम अंक',
    marksText: 'अंक',
    negativePerWrong: 'प्रति गलत उत्तर',
    generalInstructionsTitle: 'सामान्य परीक्षा निर्देश:',
    defaultInstructions: [
      'प्रत्येक प्रश्न 2 अंक का है।',
      'प्रत्येक गलत उत्तर पर नकारात्मक अंकन (नेगेटिव मार्किंग) लागू होगा।',
      'दाईं ओर स्थित प्रश्न पैलेट का उपयोग करके आप किसी भी प्रश्न पर जा सकते हैं।',
      'अपना उत्तर दर्ज करने के लिए "उत्तर सहेजें एवं अगला" पर क्लिक करें।',
      'परीक्षा समाप्त होने पर "परीक्षा जमा करें" पर क्लिक करें।'
    ],
    paletteLegendTitle: 'प्रश्न पैलेट संकेत (प्रतीक):',
    readyToBeginBtn: 'मैं परीक्षा शुरू करने के लिए तैयार हूँ →',
    cancelBtn: 'रद्द करें',
    backToTestsBtn: '← वापस टेस्ट सूची पर जाएं',

    resultBadge: 'परीक्षा परिणाम एवं संपूर्ण विश्लेषण',
    resultDatePrefix: 'संपन्न तिथि:',
    timeTakenPrefix: 'लिया गया समय:',
    yourScoreLabel: 'आपका प्राप्तांक',
    outOfLabel: 'में से',
    correctBadge: 'सही उत्तर',
    correctSubtext: 'सटीक उत्तर',
    incorrectBadge: 'गलत उत्तर',
    incorrectSubtext: 'ऋणात्मक अंक कटे',
    unattemptedBadge: 'अनुत्तरित',
    unattemptedSubtext: 'रिक्त छोड़े गए',
    accuracyBadge: 'सटीकता (Accuracy)',
    accuracySubtext: 'सटीकता दर',
    assessmentTitle: 'अश्वनी सर का प्रदर्शन मूल्यांकन:',
    assessmentExcellent: 'शानदार प्रदर्शन! आपकी सटीकता अंतिम चयन मेरिट सूची के अनुरूप है। अपनी नियमित रिवीजन श्रृंखला बनाए रखें।',
    assessmentGood: 'अच्छा प्रयास, परंतु नकारात्मक अंकों ने कुल स्कोर प्रभावित किया। गणना संबंधी त्रुटियों को सुधारने के लिए नीचे दिए गए हल का अध्ययन करें।',
    assessmentNeedsImprovement: 'निराश न हों! संपूर्ण पाठ्यक्रम अनुभाग में बुनियादी सिद्धांतों का अध्ययन करें, उदाहरणों को समझें और पुनः टेस्ट दें।',
    solutionsTitle: 'विस्तृत प्रश्न हल एवं व्याख्या',
    reviewCountPrefix: 'अश्वनी सर के शॉर्टकट के साथ सभी प्रश्नों की समीक्षा',
    correctPlus2: 'सही उत्तर (+2)',
    incorrectMinus: 'गलत उत्तर (-0.5)',
    unattemptedZero: 'अनुत्तरित (0)',
    correctAnswerOptionPrefix: 'सही उत्तर: विकल्प',
    explanationTitle: 'व्याख्या एवं शॉर्टकट ट्रिक:',
    attemptAnotherBtn: 'अन्य टेस्ट का अभ्यास करें',
    viewDashboardBtn: '6 विषयों का सम्पूर्ण पाठ्यक्रम देखें',
    translationUnavailableBadge: 'इस प्रश्न के लिए सत्यापित हिंदी अनुवाद उपलब्ध नहीं है'
  }
};

// Complete Verified Bilingual Question Bank
export const VERIFIED_QUESTION_TRANSLATIONS: Record<string, {
  hi: {
    question: string;
    options: [string, string, string, string];
    explanation: string;
    chapterName: string;
  };
  en: {
    question: string;
    options: [string, string, string, string];
    explanation: string;
    chapterName: string;
  };
}> = {
  'q-m1': {
    en: {
      question: 'If an 8-digit number 789x531y is divisible by 72, what is the value of (5x - 3y) for the largest possible value of y?',
      options: ['12', '14', '16', '18'],
      explanation: 'For divisibility by 72, the number must be divisible by 8 and 9. Divisibility by 8: last 3 digits 31y must be divisible by 8. 312 ÷ 8 = 39 (y = 2). Divisibility by 9: sum of digits (7+8+9+x+5+3+1+2 = 35 + x) must be divisible by 9 => x = 1. Then (5x - 3y) for maximum y = 14.',
      chapterName: 'Number System & Simplification'
    },
    hi: {
      question: 'यदि 8-अंकीय संख्या 789x531y, 72 से पूर्णतः विभाज्य है, तो y के सबसे बड़े संभावित मान के लिए (5x - 3y) का मान क्या होगा?',
      options: ['12', '14', '16', '18'],
      explanation: '72 से विभाज्यता के लिए संख्या को 8 और 9 दोनों से विभाज्य होना चाहिए। 8 से विभाज्यता: अंतिम 3 अंक 31y, 8 से विभाज्य होंगे जब y = 2 (312/8 = 39)। 9 से विभाज्यता: अंकों का योग 35 + x, 9 से विभाज्य होगा जब x = 1। इस प्रकार (5x - 3y) = 5(4) - 3(2) = 14।',
      chapterName: 'संख्या पद्धति एवं सरलीकरण'
    }
  },
  'q-m2': {
    en: {
      question: 'The HCF and LCM of two numbers are 12 and 336 respectively. If one of the numbers is 84, what is the other number?',
      options: ['36', '48', '56', '64'],
      explanation: 'Product of two numbers = HCF × LCM => 84 × B = 12 × 336 => B = (12 × 336) / 84 = 336 / 7 = 48.',
      chapterName: 'Number System & Simplification'
    },
    hi: {
      question: 'दो संख्याओं का म.स.प. (HCF) और ल.स.प. (LCM) क्रमशः 12 और 336 हैं। यदि उनमें से एक संख्या 84 है, तो दूसरी संख्या क्या होगी?',
      options: ['36', '48', '56', '64'],
      explanation: 'दो संख्याओं का गुणनफल = HCF × LCM => 84 × B = 12 × 336 => B = (12 × 336) / 84 = 48।',
      chapterName: 'संख्या पद्धति एवं सरलीकरण'
    }
  },
  'q-m3': {
    en: {
      question: 'Find the remainder when 2^31 is divided by 5.',
      options: ['1', '2', '3', '4'],
      explanation: '2^31 = 2 × (2^2)^15 = 2 × 4^15. 4 divided by 5 leaves remainder -1. Remainder = 2 × (-1)^15 = 2 × (-1) = -2. Positive remainder = 5 - 2 = 3.',
      chapterName: 'Number System & Simplification'
    },
    hi: {
      question: 'जब 2^31 को 5 से विभाजित किया जाता है, तो शेषफल क्या प्राप्त होगा?',
      options: ['1', '2', '3', '4'],
      explanation: '2^31 = 2 × (2^2)^15 = 2 × 4^15। 4 को 5 से भाग देने पर शेषफल -1 आता है। शेष = 2 × (-1)^15 = -2। धनात्मक शेषफल = 5 - 2 = 3।',
      chapterName: 'संख्या पद्धति एवं सरलीकरण'
    }
  },
  'q-m4': {
    en: {
      question: 'A shopkeeper sells an article at 15% discount on marked price and still gains 19%. What percent above cost price was the article marked?',
      options: ['35%', '40%', '42%', '45%'],
      explanation: 'Formula: MP / CP = (100 + Profit%) / (100 - Discount%) = (100 + 19) / (100 - 15) = 119 / 85 = 7 / 5. MP is (7-5)/5 = 2/5 = 40% above CP.',
      chapterName: 'Percentage, Profit & Loss, and Discount'
    },
    hi: {
      question: 'एक दुकानदार किसी वस्तु के अंकित मूल्य पर 15% की छूट देकर भी 19% का लाभ अर्जित करता है। वस्तु का अंकित मूल्य, क्रय मूल्य से कितने प्रतिशत अधिक अंकित किया गया था?',
      options: ['35%', '40%', '42%', '45%'],
      explanation: 'सूत्र: अंकित मूल्य / क्रय मूल्य = (100 + लाभ%) / (100 - छूट%) = 119 / 85 = 7 / 5। अंकित मूल्य क्रय मूल्य से (7-5)/5 = 2/5 = 40% अधिक है।',
      chapterName: 'प्रतिशत, लाभ और हानि तथा छूट'
    }
  },
  'q-m5': {
    en: {
      question: 'A dishonest grocer professes to sell grains at cost price, but uses a 900 gm weight instead of 1 kg. What is his actual gain percent?',
      options: ['10%', '11.11%', '12.5%', '9.09%'],
      explanation: 'Profit % = [Error / (True weight - Error)] × 100% = [100 / 900] × 100% = 1/9 × 100% = 11.11% (or 11 1/9%).',
      chapterName: 'Percentage, Profit & Loss, and Discount'
    },
    hi: {
      question: 'एक बेईमान दुकानदार अपनी वस्तुओं को क्रय मूल्य पर बेचने का दावा करता है, परंतु 1 किग्रा के स्थान पर 900 ग्राम के बांट का उपयोग करता है। उसका वास्तविक लाभ प्रतिशत क्या है?',
      options: ['10%', '11.11%', '12.5%', '9.09%'],
      explanation: 'लाभ % = [त्रुटि / (सत्य मान - त्रुटि)] × 100% = [100 / 900] × 100% = 11.11% (या 11 1/9%)।',
      chapterName: 'प्रतिशत, लाभ और हानि तथा छूट'
    }
  },
  'q-m6': {
    en: {
      question: 'A sum of money doubles itself in 5 years at compound interest. In how many years will it become 8 times itself at the same rate?',
      options: ['10 years', '15 years', '20 years', '25 years'],
      explanation: 'In CI, 2^1 times happens in 5 years. 8 times = 2^3 times. Time required = 5 × 3 = 15 years.',
      chapterName: 'Simple & Compound Interest'
    },
    hi: {
      question: 'एक निश्चित धनराशि चक्रवृद्धि ब्याज पर 5 वर्षों में स्वयं की दोगुनी हो जाती है। समान ब्याज दर पर वह कितने वर्षों में स्वयं की 8 गुनी हो जाएगी?',
      options: ['10 वर्ष', '15 वर्ष', '20 वर्ष', '25 वर्ष'],
      explanation: 'चक्रवृद्धि ब्याज में 2^1 गुना होने में 5 वर्ष लगते हैं। 8 गुना = 2^3 गुना। अतः आवश्यक समय = 5 × 3 = 15 वर्ष।',
      chapterName: 'साधारण एवं चक्रवृद्धि ब्याज'
    }
  },
  'q-m7': {
    en: {
      question: '12 men can complete a project in 16 days. In how many days can 8 men complete the same project working at the same pace?',
      options: ['20 days', '24 days', '28 days', '32 days'],
      explanation: 'M1 × D1 = M2 × D2 => 12 × 16 = 8 × D2 => D2 = (12 × 16)/8 = 24 days.',
      chapterName: 'Time, Work and Pipes & Cisterns'
    },
    hi: {
      question: '12 पुरुष किसी कार्य को 16 दिनों में पूरा कर सकते हैं। उसी कार्य को समान गति से 8 पुरुष कितने दिनों में पूरा करेंगे?',
      options: ['20 दिन', '24 दिन', '28 दिन', '32 दिन'],
      explanation: 'M1 × D1 = M2 × D2 => 12 × 16 = 8 × D2 => D2 = (12 × 16) / 8 = 24 दिन।',
      chapterName: 'समय, कार्य एवं नल तथा टंकी'
    }
  },
  'q-m8': {
    en: {
      question: 'A boat moves at 10 km/h in still water. The stream flows at 2 km/h. How long does the boat take to travel 24 km downstream?',
      options: ['1.5 hours', '2 hours', '2.5 hours', '3 hours'],
      explanation: 'Downstream Speed = Speed of boat + Speed of stream = 10 + 2 = 12 km/h. Time = Distance / Speed = 24 / 12 = 2 hours.',
      chapterName: 'Time, Speed, Distance & Trains'
    },
    hi: {
      question: 'शांत जल में एक नाव की चाल 10 किमी/घंटा है तथा धारा की चाल 2 किमी/घंटा है। धारा के अनुकूल (Downstream) 24 किमी जाने में नाव को कितना समय लगेगा?',
      options: ['1.5 घंटे', '2 घंटे', '2.5 घंटे', '3 घंटे'],
      explanation: 'धारा के अनुकूल चाल = 10 + 2 = 12 किमी/घंटा। समय = दूरी / चाल = 24 / 12 = 2 घंटे।',
      chapterName: 'समय, चाल, दूरी तथा रेलगाड़ी'
    }
  },
  'q-m9': {
    en: {
      question: 'If a + b + c = 6 and a^2 + b^2 + c^2 = 14, what is the value of (ab + bc + ca)?',
      options: ['9', '11', '13', '15'],
      explanation: '(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca) => 6^2 = 14 + 2(ab + bc + ca) => 36 - 14 = 2(ab + bc + ca) => 22 / 2 = 11.',
      chapterName: 'Algebra & Linear Equations'
    },
    hi: {
      question: 'यदि a + b + c = 6 तथा a^2 + b^2 + c^2 = 14 है, तो (ab + bc + ca) का मान क्या होगा?',
      options: ['9', '11', '13', '15'],
      explanation: '(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca) => 36 = 14 + 2(ab + bc + ca) => 22 / 2 = 11।',
      chapterName: 'बीजगणित एवं रैखिक समीकरण'
    }
  },
  'q-m10': {
    en: {
      question: 'The angle of elevation of the top of a tower from a point 30 m away from its base on ground is 30°. The height of the tower is:',
      options: ['10 m', '10√3 m', '30√3 m', '15 m'],
      explanation: 'tan 30° = Height / 30 => 1/√3 = Height / 30 => Height = 30 / √3 = 10√3 m.',
      chapterName: 'Trigonometry & Heights and Distances'
    },
    hi: {
      question: 'भूमि पर स्थित एक बिंदु से जो किसी मीनार के आधार से 30 मीटर दूर है, मीनार के शिखर का उन्नयन कोण 30° है। मीनार की ऊंचाई क्या है?',
      options: ['10 मीटर', '10√3 मीटर', '30√3 मीटर', '15 मीटर'],
      explanation: 'tan 30° = ऊंचाई / 30 => 1/√3 = ऊंचाई / 30 => ऊंचाई = 30 / √3 = 10√3 मीटर।',
      chapterName: 'त्रिकोणमिति एवं ऊंचाई और दूरी'
    }
  },
  'q-m11': {
    en: {
      question: 'If the radius of a sphere is doubled, by what percentage does its surface area increase?',
      options: ['100%', '200%', '300%', '400%'],
      explanation: 'Surface area is proportional to r^2. If r becomes 2r, Area becomes (2)^2 = 4 times. Increase = (4 - 1) × 100% = 300%.',
      chapterName: 'Geometry & Mensuration (2D & 3D)'
    },
    hi: {
      question: 'यदि किसी गोले की त्रिज्या को दोगुना कर दिया जाए, तो उसके पृष्ठीय क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?',
      options: ['100%', '200%', '300%', '400%'],
      explanation: 'गोले का पृष्ठीय क्षेत्रफल r^2 के समानुपाती होता है। त्रिज्या 2r होने पर क्षेत्रफल 4 गुना हो जाता है। प्रतिशत वृद्धि = (4 - 1) × 100% = 300%।',
      chapterName: 'ज्यामिति एवं क्षेत्रमिति'
    }
  },
  'q-r1': {
    en: {
      question: 'Thermometer : Temperature :: Hygrometer : ?',
      options: ['Pressure', 'Humidity', 'Density', 'Electric Current'],
      explanation: 'Thermometer measures Temperature; similarly, Hygrometer measures Humidity.',
      chapterName: 'Analogy & Classification'
    },
    hi: {
      question: 'थर्मामीटर : तापमान :: हाइग्रोमीटर (Hygrometer) : ?',
      options: ['दाब (Pressure)', 'आर्द्रता (Humidity)', 'घनत्व (Density)', 'विद्युत धारा (Electric Current)'],
      explanation: 'जिस प्रकार थर्मामीटर तापमान मापता है, उसी प्रकार हाइग्रोमीटर वायुमंडलीय आर्द्रता मापता है।',
      chapterName: 'सादृश्यता एवं वर्गीकरण'
    }
  },
  'q-r2': {
    en: {
      question: 'Find the odd one out from the given alternatives: 121, 169, 289, 343',
      options: ['121', '169', '289', '343'],
      explanation: '121 = 11^2, 169 = 13^2, 289 = 17^2 are all squares of prime numbers. But 343 = 7^3 is a cube.',
      chapterName: 'Analogy & Classification'
    },
    hi: {
      question: 'दिए गए विकल्पों में से विषम (Odd One Out) संख्या चुनिए: 121, 169, 289, 343',
      options: ['121', '169', '289', '343'],
      explanation: '121 = 11^2, 169 = 13^2, 289 = 17^2 अभाज्य संख्याओं के वर्ग हैं, जबकि 343 = 7^3 एक घन संख्या है।',
      chapterName: 'सादृश्यता एवं वर्गीकरण'
    }
  },
  'q-r3': {
    en: {
      question: 'In a certain code language, if "FLOWER" is written as "UOLDVI", how will "GARDEN" be written?',
      options: ['TZIWVM', 'TZIVWM', 'TYIWVM', 'SZIVWM'],
      explanation: 'Each letter is replaced by its opposite alphabet: G <-> T, A <-> Z, R <-> I, D <-> W, E <-> V, N <-> M => TZIWVM.',
      chapterName: 'Coding-Decoding'
    },
    hi: {
      question: 'एक निश्चित कूट भाषा में यदि "FLOWER" को "UOLDVI" लिखा जाता है, तो "GARDEN" को क्या लिखा जाएगा?',
      options: ['TZIWVM', 'TZIVWM', 'TYIWVM', 'SZIVWM'],
      explanation: 'प्रत्येक अक्षर को उसके विपरीत वर्ण से बदला गया है: G <-> T, A <-> Z, R <-> I, D <-> W, E <-> V, N <-> M => TZIWVM।',
      chapterName: 'कोडिंग-डिकोडिंग'
    }
  },
  'q-r4': {
    en: {
      question: 'Rohan walks 12 km North, turns right and walks 5 km. How far and in which direction is he now from his starting point?',
      options: ['13 km North-East', '13 km North-West', '17 km North-East', '10 km North'],
      explanation: 'Using Pythagoras theorem: Distance = √(12^2 + 5^2) = √(144 + 25) = √169 = 13 km. Direction from origin is North-East.',
      chapterName: 'Blood Relations & Direction Sense'
    },
    hi: {
      question: 'रोहन उत्तर दिशा में 12 किमी चलता है, फिर दाएं मुड़कर 5 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से कितनी दूरी पर और किस दिशा में है?',
      options: ['13 किमी उत्तर-पूर्व', '13 किमी उत्तर-पश्चिम', '17 किमी उत्तर-पूर्व', '10 किमी उत्तर'],
      explanation: 'पाइथागोरस प्रमेय द्वारा: दूरी = √(12^2 + 5^2) = √(144 + 25) = √169 = 13 किमी। प्रारंभिक बिंदु से दिशा उत्तर-पूर्व है।',
      chapterName: 'रक्त सम्बन्ध एवं दिशा और दूरी'
    }
  },
  'q-r5': {
    en: {
      question: 'Statements: All pens are books. All books are pencils.\nConclusions: I. All pens are pencils. II. Some pencils are pens.',
      options: ['Only I follows', 'Only II follows', 'Neither follows', 'Both I and II follow'],
      explanation: 'Since Pens ⊂ Books ⊂ Pencils, All pens are definitely inside Pencils (I follows). Also since pens are inside pencils, at least some pencils are pens (II follows). Both follow.',
      chapterName: 'Syllogism & Venn Diagrams'
    },
    hi: {
      question: 'कथन: सभी पेन पुस्तकें हैं। सभी पुस्तकें पेंसिलें हैं।\nनिष्कर्ष: I. सभी पेन पेंसिलें हैं। II. कुछ पेंसिलें पेन हैं।',
      options: ['केवल निष्कर्ष I सही है', 'केवल निष्कर्ष II सही है', 'कोई भी निष्कर्ष सही नहीं है', 'निष्कर्ष I और II दोनों सही हैं'],
      explanation: 'पेन ⊂ पुस्तकें ⊂ पेंसिलें। अतः सभी पेन पेंसिलें हैं (I सही है) और कुछ पेंसिलें पेन हैं (II सही है)। दोनों निष्कर्ष अनुसरण करते हैं।',
      chapterName: 'न्याय निगमन एवं वेन आरेख'
    }
  },
  'q-r6': {
    en: {
      question: 'Suresh ranks 11th from the top and 27th from the bottom in a class test. How many students took the test?',
      options: ['37', '38', '36', '39'],
      explanation: 'Total students = (Rank from top + Rank from bottom) - 1 = 11 + 27 - 1 = 37.',
      chapterName: 'Order, Ranking & Seating Arrangement'
    },
    hi: {
      question: 'एक कक्षा परीक्षा में सुरेश का स्थान ऊपर से 11वां और नीचे से 27वां है। परीक्षा में कुल कितने छात्रों ने भाग लिया?',
      options: ['37', '38', '36', '39'],
      explanation: 'कुल छात्र = (ऊपर से स्थान + नीचे से स्थान) - 1 = 11 + 27 - 1 = 37।',
      chapterName: 'क्रम व्यवस्था एवं बैठक व्यवस्था'
    }
  },
  'q-r7': {
    en: {
      question: 'What is the water image of the word "MOM"?',
      options: ['WOW', 'MOM', 'NON', 'MOW'],
      explanation: 'In water image, M inverts vertically to W, O stays O, M inverts to W => WOW.',
      chapterName: 'Non-Verbal Reasoning'
    },
    hi: {
      question: 'शब्द "MOM" का जल प्रतिबिम्ब (Water Image) क्या होगा?',
      options: ['WOW', 'MOM', 'NON', 'MOW'],
      explanation: 'जल प्रतिबिम्ब में लंबवत परावर्तन होता है, M उलटकर W बन जाता है और O अपरिवर्तित रहता है => WOW।',
      chapterName: 'अभाषिक तर्कशक्ति'
    }
  },
  'q-ga1': {
    en: {
      question: 'Which country hosted the G20 Leaders’ Summit in 2023 under the theme "Vasudhaiva Kutumbakam"?',
      options: ['Indonesia', 'India', 'Brazil', 'South Africa'],
      explanation: 'India held the G20 Presidency in 2023 under Prime Minister Narendra Modi at Bharat Mandapam, New Delhi with the theme "Vasudhaiva Kutumbakam - One Earth, One Family, One Future".',
      chapterName: 'National & International Current Affairs'
    },
    hi: {
      question: '"वसुधैव कुटुम्बकम" थीम के तहत वर्ष 2023 में G20 शिखर सम्मेलन की मेजबानी किस देश ने की थी?',
      options: ['इंडोनेशिया', 'भारत', 'ब्राजील', 'दक्षिण अफ्रीका'],
      explanation: 'भारत ने प्रधानमंत्री नरेंद्र मोदी के नेतृत्व में भारत मंडपम, नई दिल्ली में "वसुधैव कुटुम्बकम - एक पृथ्वी, एक परिवार, एक भविष्य" थीम के साथ G20 शिखर सम्मेलन 2023 की अध्यक्षता की थी।',
      chapterName: 'राष्ट्रीय व अंतर्राष्ट्रीय समसामयिकी'
    }
  },
  'q-ga2': {
    en: {
      question: 'Through which Constitutional Amendment Act was the Goods and Services Tax (GST) introduced in India?',
      options: ['99th Amendment', '100th Amendment', '101st Amendment', '103rd Amendment'],
      explanation: 'The GST was enacted via the 101st Constitutional Amendment Act, 2016 and implemented on 1 July 2017.',
      chapterName: 'Indian Economy, Banking & Union Budget'
    },
    hi: {
      question: 'भारत में वस्तु एवं सेवा कर (GST) किस संविधान संशोधन अधिनियम के माध्यम से लागू किया गया था?',
      options: ['99वां संशोधन', '100वां संशोधन', '101वां संशोधन', '103वां संशोधन'],
      explanation: 'वस्तु एवं सेवा कर (GST) को 101वें संविधान संशोधन अधिनियम, 2016 द्वारा अधिनियमित किया गया और 1 जुलाई 2017 से लागू किया गया।',
      chapterName: 'भारतीय अर्थव्यवस्था, बैंकिंग एवं बजट'
    }
  },
  'q-ga3': {
    en: {
      question: 'What is the maximum health insurance cover per eligible family per year under Ayushman Bharat - PMJAY?',
      options: ['₹2 Lakh', '₹3 Lakh', '₹5 Lakh', '₹10 Lakh'],
      explanation: 'Ayushman Bharat PM-JAY provides health cover up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.',
      chapterName: 'Major Government Schemes & Initiatives'
    },
    hi: {
      question: 'आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY) के तहत प्रति पात्र परिवार प्रति वर्ष अधिकतम कितना स्वास्थ्य कवर दिया जाता है?',
      options: ['₹2 लाख', '₹3 लाख', '₹5 लाख', '₹10 लाख'],
      explanation: 'आयुष्मान भारत PM-JAY योजना के तहत द्वितीयक और तृतीयक स्तर के अस्पताल में उपचार हेतु प्रति वर्ष प्रति परिवार ₹5 लाख तक का स्वास्थ्य कवर दिया जाता है।',
      chapterName: 'प्रमुख सरकारी योजनाएं एवं नीतियां'
    }
  },
  'q-ga4': {
    en: {
      question: 'Santosh Trophy and Durand Cup are prestigious national trophies associated with which sport?',
      options: ['Cricket', 'Hockey', 'Football', 'Volleyball'],
      explanation: 'Both Santosh Trophy and Durand Cup are historic tournament championships associated with Football in India.',
      chapterName: 'Sports, Awards & Honours'
    },
    hi: {
      question: 'संतोष ट्रॉफी एवं डूरंड कप किस खेल से संबंधित प्रतिष्ठित राष्ट्रीय प्रतियोगिताएं हैं?',
      options: ['क्रिकेट', 'हॉकी', 'फुटबॉल', 'वॉलीबॉल'],
      explanation: 'संतोष ट्रॉफी और डूरंड कप दोनों भारत में फुटबॉल खेल से संबंधित ऐतिहासिक और प्रतिष्ठित प्रतियोगिताएं हैं।',
      chapterName: 'खेलकूद, पुरस्कार एवं सम्मान'
    }
  },
  'q-ga5': {
    en: {
      question: 'Which launch vehicle was used by ISRO to launch the Chandrayaan-3 spacecraft?',
      options: ['PSLV-C56', 'LVM3-M4', 'GSLV-F12', 'SSLV-D2'],
      explanation: 'ISRO launched Chandrayaan-3 using the Launch Vehicle Mark-3 (LVM3-M4), formerly called GSLV Mk-III.',
      chapterName: 'Science, Space & Defence Technology'
    },
    hi: {
      question: 'इसरो (ISRO) ने चंद्रयान-3 अंतरिक्ष यान को किस प्रक्षेपण यान (Launch Vehicle) द्वारा प्रक्षेपित किया था?',
      options: ['PSLV-C56', 'LVM3-M4', 'GSLV-F12', 'SSLV-D2'],
      explanation: 'इसरो ने चंद्रयान-3 को लॉन्च व्हीकल मार्क-3 (LVM3-M4) द्वारा सतीश धवन अंतरिक्ष केंद्र, श्रीहरिकोटा से प्रक्षेपित किया था।',
      chapterName: 'विज्ञान, अंतरिक्ष एवं रक्षा प्रौद्योगिकी'
    }
  },
  'q-gk1': {
    en: {
      question: 'Which Article of the Indian Constitution abolishes "Untouchability" and forbids its practice in any form?',
      options: ['Article 14', 'Article 15', 'Article 17', 'Article 18'],
      explanation: 'Article 17 of the Indian Constitution abolishes "Untouchability" and states that its practice in any form is forbidden and punishable by law.',
      chapterName: 'Indian Polity & Constitution'
    },
    hi: {
      question: 'भारतीय संविधान का कौन सा अनुच्छेद "अस्पृश्यता" का उन्मूलन करता है और किसी भी रूप में इसके आचरण को निषेध करता है?',
      options: ['अनुच्छेद 14', 'अनुच्छेद 15', 'अनुच्छेद 17', 'अनुच्छेद 18'],
      explanation: 'भारतीय संविधान का अनुच्छेद 17 अस्पृश्यता का अंत करता है और इसका किसी भी रूप में आचरण विधि के अनुसार दंडनीय अपराध घोषित करता है।',
      chapterName: 'भारतीय राजव्यवस्था एवं संविधान'
    }
  },
  'q-gk2': {
    en: {
      question: 'What is the minimum age prescribed in the Constitution of India to become the President of India?',
      options: ['25 years', '30 years', '35 years', '40 years'],
      explanation: 'Under Article 58, a candidate must have completed the age of 35 years to be eligible for election as President of India.',
      chapterName: 'Indian Polity & Constitution'
    },
    hi: {
      question: 'भारत का राष्ट्रपति बनने के लिए संविधान में न्यूनतम कितनी आयु सीमा निर्धारित की गई है?',
      options: ['25 वर्ष', '30 वर्ष', '35 वर्ष', '40 वर्ष'],
      explanation: 'अनुच्छेद 58 के अनुसार, भारत के राष्ट्रपति पद के चुनाव के लिए उम्मीदवार की न्यूनतम आयु 35 वर्ष पूरी होनी अनिवार्य है।',
      chapterName: 'भारतीय राजव्यवस्था एवं संविधान'
    }
  },
  'q-gk3': {
    en: {
      question: 'Who was the Viceroy of India when the Partition of Bengal took place in 1905?',
      options: ['Lord Dalhousie', 'Lord Curzon', 'Lord Ripon', 'Lord Mountbatten'],
      explanation: 'Lord Curzon issued the order for the Partition of Bengal in July 1905, which took effect on 16 October 1905, triggering the Swadeshi Movement.',
      chapterName: 'Indian History (Ancient, Medieval & Modern)'
    },
    hi: {
      question: 'वर्ष 1905 में बंगाल विभाजन के समय भारत का वायसराय कौन था?',
      options: ['लॉर्ड डलहौजी', 'लॉर्ड कर्जन', 'लॉर्ड रिपन', 'लॉर्ड माउंटबेटन'],
      explanation: 'लॉर्ड कर्जन ने जुलाई 1905 में बंगाल विभाजन का आदेश दिया था, जो 16 अक्टूबर 1905 को प्रभावी हुआ और जिसके विरोध में स्वदेशी आंदोलन शुरू हुआ।',
      chapterName: 'भारतीय इतिहास'
    }
  },
  'q-gk4': {
    en: {
      question: 'Which river flows through a rift valley between the Vindhya and Satpura mountain ranges into the Arabian Sea?',
      options: ['Godavari', 'Narmada', 'Krishna', 'Kaveri'],
      explanation: 'The Narmada River originates from Amarkantak and flows westward through a rift valley bounded by Vindhyas in north and Satpuras in south.',
      chapterName: 'Geography of India & World Basics'
    },
    hi: {
      question: 'कौन सी नदी विंध्य और सतपुड़ा पर्वत श्रेणियों के बीच भ्रंश घाटी (Rift Valley) से होकर पश्चिम की ओर बहते हुए अरब सागर में गिरती है?',
      options: ['गोदावरी', 'नर्मदा', 'कृष्णा', 'कावेरी'],
      explanation: 'नर्मदा नदी अमरकंटक से निकलती है और उत्तर में विंध्याचल तथा दक्षिण में सतपुड़ा पर्वतमाला के बीच भ्रंश घाटी में बहते हुए अरब सागर (खंभात की खाड़ी) में गिरती है।',
      chapterName: 'भारत एवं विश्व का भूगोल'
    }
  },
  'q-gk5': {
    en: {
      question: 'What is the SI unit of electric resistance?',
      options: ['Ampere', 'Volt', 'Ohm', 'Joule'],
      explanation: 'The SI unit of electrical resistance is the Ohm (Ω), named after German physicist Georg Simon Ohm (V = I × R).',
      chapterName: 'General Science: Physics'
    },
    hi: {
      question: 'विद्युत प्रतिरोध (Electric Resistance) का SI मात्रक क्या है?',
      options: ['एम्पीयर', 'वोल्ट', 'ओम (Ohm)', 'जूल'],
      explanation: 'विद्युत प्रतिरोध का SI मात्रक ओम (Ω) है, जिसका नाम भौतिक विज्ञानी जॉर्ज साइमन ओम के नाम पर रखा गया है (V = I × R)।',
      chapterName: 'सामान्य विज्ञान: भौतिक विज्ञान'
    }
  },
  'q-gk6': {
    en: {
      question: 'Scurvy is a disease caused by the deficiency of which of the following vitamins?',
      options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
      explanation: 'Scurvy (bleeding gums and poor wound healing) is caused by a severe deficiency of Vitamin C (Ascorbic acid).',
      chapterName: 'General Science: Chemistry & Biology'
    },
    hi: {
      question: 'स्कर्वी (Scurvy) रोग निम्नलिखित में से किस विटामिन की कमी के कारण होता है?',
      options: ['विटामिन A', 'विटामिन B', 'विटामिन C', 'विटामिन D'],
      explanation: 'स्कर्वी रोग विटामिन C (एस्कॉर्बिक एसिड) की कमी के कारण होता है, जिससे मसूड़ों से रक्तस्राव और घाव देर से भरना जैसी समस्याएं होती हैं।',
      chapterName: 'सामान्य विज्ञान: रसायन एवं जीव विज्ञान'
    }
  },
  'q-gk7': {
    en: {
      question: 'Which of the following is the classical dance of Uttar Pradesh?',
      options: ['Kathakali', 'Kathak', 'Kuchipudi', 'Bharatnatyam'],
      explanation: 'Kathak is the classical dance originating from Uttar Pradesh and northern India. (Kathakali is from Kerala).',
      chapterName: 'Static GK: Art, Culture, Dances & Heritage'
    },
    hi: {
      question: 'निम्नलिखित में से कौन सा उत्तर प्रदेश का शास्त्रीय नृत्य (Classical Dance) है?',
      options: ['कथकली', 'कथक', 'कुचिपुड़ी', 'भरतनाट्यम'],
      explanation: 'कथक उत्तर प्रदेश और उत्तर भारत का एकमात्र शास्त्रीय नृत्य है। (कथकली केरल, कुचिपुड़ी आंध्र प्रदेश तथा भरतनाट्यम तमिलनाडु का है)।',
      chapterName: 'स्टैटिक जीके: कला, संस्कृति एवं लोक नृत्य'
    }
  },
  'q-h1': {
    en: {
      question: 'What is the total number of Sparsh Vyanjans (stop consonants) in the Hindi alphabet?',
      options: ['11', '25', '33', '52'],
      explanation: 'From "Ka-varg" to "Pa-varg", there are 5 consonants in each of the 5 vargs, giving 5 × 5 = 25 sparsh vyanjans in total.',
      chapterName: 'वर्णमाला एवं विराम चिह्न'
    },
    hi: {
      question: 'हिन्दी वर्णमाला में स्पर्श व्यंजनों की कुल संख्या कितनी है?',
      options: ['11', '25', '33', '52'],
      explanation: 'क वर्ग से प वर्ग तक (क, च, ट, त, प) पाँचों वर्गों में 5-5 वर्ण होते हैं, कुल स्पर्श व्यंजनों की संख्या 25 (5 × 5 = 25) है।',
      chapterName: 'वर्णमाला एवं विराम चिह्न'
    }
  },
  'q-h2': {
    en: {
      question: 'The composite consonant "ज्ञ" (Gya) is formed by the combination of which consonants?',
      options: ['ज् + य', 'ज् + ञ', 'ज + ञ', 'ञ + ज'],
      explanation: 'The sanyukta vyanjan "ज्ञ" is formed by "ज् + ञ". (Similarly: क्ष = क्+ष, त्र = त्+र, श्र = श्+र).',
      chapterName: 'वर्णमाला एवं विराम चिह्न'
    },
    hi: {
      question: '"ज्ञ" वर्ण किन वर्णों के संयोग से बना है?',
      options: ['ज् + य', 'ज् + ञ', 'ज + ञ', 'ञ + ज'],
      explanation: 'संयुक्त व्यंजन "ज्ञ" का निर्माण "ज् + ञ" के योग से हुआ है। (क्ष = क्+ष, त्र = त्+र, श्र = श्+र)।',
      chapterName: 'वर्णमाला एवं विराम चिह्न'
    }
  },
  'q-h3': {
    en: {
      question: 'Which type of Samas is present in the compound word "यथाशक्ति" (Yathashakti)?',
      options: ['तत्पुरुष समास', 'कर्मधारय समास', 'अव्ययीभाव समास', 'द्विगु समास'],
      explanation: 'The expansion of "यथाशक्ति" is "शक्ति के अनुसार". Its first word "यथा" is an avyaya, making it an Avyayibhava Samas.',
      chapterName: 'संधि एवं समास'
    },
    hi: {
      question: '"यथाशक्ति" में कौन सा समास है?',
      options: ['तत्पुरुष समास', 'कर्मधारय समास', 'अव्ययीभाव समास', 'द्विगु समास'],
      explanation: '"यथाशक्ति" का विग्रह "शक्ति के अनुसार" है। इसका प्रथम पद "यथा" एक अव्यय है, अतः यह अव्ययीभाव समास है।',
      chapterName: 'संधि एवं समास'
    }
  },
  'q-h4': {
    en: {
      question: 'What is the correct Sandhi-Vichhed (segmentation) of "इत्यादि" (Ityadi)?',
      options: ['इत + आदि', 'इति + आदि', 'इत्य + आदि', 'इती + आदि'],
      explanation: 'इति + आदि = इत्यादि। Here इ + आ combine to form "या", which is an example of Yan Swar Sandhi.',
      chapterName: 'संधि एवं समास'
    },
    hi: {
      question: '"इत्यादि" का सही संधि-विच्छेद क्या होगा?',
      options: ['इत + आदि', 'इति + आदि', 'इत्य + आदि', 'इती + आदि'],
      explanation: 'इति + आदि = इत्यादि। यहाँ इ + आ मिलकर "या" बन रहे हैं, यह यण स्वर संधि का उदाहरण है।',
      chapterName: 'संधि एवं समास'
    }
  },
  'q-h5': {
    en: {
      question: 'Which of the following words is a "Tatsam" (original Sanskrit) word?',
      options: ['आँख', 'कान', 'अक्षि', 'नाक'],
      explanation: '"अक्षि" is the original Sanskrit Tatsam word, whose Tadbhav derivative in daily Hindi is "आँख".',
      chapterName: 'शब्द विचार: तत्सम, तद्भव, देशज व विदेशज'
    },
    hi: {
      question: 'निम्नलिखित में से कौन सा शब्द "तत्सम" है?',
      options: ['आँख', 'कान', 'अक्षि', 'नाक'],
      explanation: '"अक्षि" संस्कृत का तत्सम शब्द है, जिसका तद्भव रूप "आँख" होता है।',
      chapterName: 'शब्द विचार: तत्सम व तद्भव'
    }
  },
  'q-h6': {
    en: {
      question: 'What is the Sthayi Bhava (permanent emotional state) of "Veer Ras"?',
      options: ['रति (Rati)', 'उत्साह (Utsaha)', 'शोक (Shoka)', 'क्रोध (Krodha)'],
      explanation: 'The permanent emotion of Veer Ras is "Utsaha" (enthusiasm/valour).',
      chapterName: 'रस, छंद एवं अलंकार'
    },
    hi: {
      question: '"वीर रस" का स्थायी भाव क्या है?',
      options: ['रति', 'उत्साह', 'शोक', 'क्रोध'],
      explanation: 'वीर रस का स्थायी भाव "उत्साह" होता है। (श्रृंगार का रति, करुण का शोक, रौद्र का क्रोध)।',
      chapterName: 'रस, छंद एवं अलंकार'
    }
  },
  'q-h7': {
    en: {
      question: 'Which Alankar (figure of speech) is present in the poetic line: "पीपर पात सरिस मन डोला"?',
      options: ['रूपक', 'उपमा', 'उत्प्रेक्षा', 'यमक'],
      explanation: 'Here the mind (man) is compared to a peepal leaf using the simile indicator word "सरिस", which is an example of Upama Alankar.',
      chapterName: 'रस, छंद एवं अलंकार'
    },
    hi: {
      question: '"पीपर पात सरिस मन डोला" पंक्ति में कौन सा अलंकार है?',
      options: ['रूपक', 'उपमा', 'उत्प्रेक्षा', 'यमक'],
      explanation: 'यहाँ मन की तुलना पीपल के पत्ते से की गई है और सादृश्य वाचक शब्द "सरिस" का प्रयोग हुआ है, अतः यहाँ उपमा अलंकार है।',
      chapterName: 'रस, छंद एवं अलंकार'
    }
  },
  'q-h8': {
    en: {
      question: 'What is the meaning of the Hindi idiom "अंगारों पर पैर रखना"?',
      options: ['अग्नि परीक्षा देना', 'जानबूझकर मुसीबत मोल लेना', 'नुकसान कराना', 'कठोर परिश्रम करना'],
      explanation: '"अंगारों पर पैर रखना" means deliberately putting oneself into extreme danger or peril.',
      chapterName: 'मुहावरे, लोकोक्तियाँ व अनेक शब्दों के लिए एक शब्द'
    },
    hi: {
      question: '"अंगारों पर पैर रखना" मुहावरे का सही अर्थ क्या है?',
      options: ['अग्नि परीक्षा देना', 'जानबूझकर मुसीबत मोल लेना', 'नुकसान कराना', 'कठोर परिश्रम करना'],
      explanation: '"अंगारों पर पैर रखना" का अर्थ होता है जानबूझकर खुद को खतरे में डालना या मुसीबत मोल लेना।',
      chapterName: 'मुहावरे एवं लोकोक्तियाँ'
    }
  },
  'q-h9': {
    en: {
      question: 'Who among the following wrote the classic Hindi novel "Godan"?',
      options: ['जयशंकर प्रसाद', 'मुंशी प्रेमचंद', 'रामधारी सिंह दिनकर', 'फणीश्वर नाथ रेणु'],
      explanation: 'Munshi Premchand authored "Godan" (1936), immortalizing the struggles and resilience of Indian peasantry.',
      chapterName: 'प्रसिद्ध हिन्दी साहित्यकार, कवि एवं उनकी रचनाएं'
    },
    hi: {
      question: '"गोदान" उपन्यास के लेखक निम्नलिखित में से कौन हैं?',
      options: ['जयशंकर प्रसाद', 'मुंशी प्रेमचंद', 'रामधारी सिंह दिनकर', 'फणीश्वर नाथ रेणु'],
      explanation: 'उपन्यास सम्राट मुंशी प्रेमचंद ने "गोदान" (1936) की रचना की थी, जिसमें कृषक जीवन की मार्मिक गाथा प्रस्तुत की गई है।',
      chapterName: 'हिन्दी साहित्यकार एवं रचनाएं'
    }
  },
  'q-e1': {
    en: {
      question: 'Neither the principal nor the teachers _____ present in the morning assembly yesterday.',
      options: ['was', 'were', 'is', 'are'],
      explanation: 'With "Neither...nor", the verb agrees with the nearest subject. "The teachers" is plural, and since it refers to yesterday, the past plural verb "were" is correct.',
      chapterName: 'Subject-Verb Agreement (Syntax)'
    },
    hi: {
      question: 'दिए गए वाक्य में रिक्त स्थान की पूर्ति करें: "Neither the principal nor the teachers _____ present in the morning assembly yesterday."',
      options: ['was', 'were', 'is', 'are'],
      explanation: '"Neither...nor" के प्रयोग में क्रिया (verb) अपने निकटतम कर्ता (nearest subject) के अनुसार आती है। यहाँ "the teachers" बहुवचन है तथा वाक्य भूतकाल (yesterday) का है, अतः बहुवचन क्रिया "were" सही उत्तर है।',
      chapterName: 'सब्जेक्ट-वर्ब एग्रीमेंट (Syntax)'
    }
  },
  'q-e2': {
    en: {
      question: 'Find the grammatically correct sentence:',
      options: [
        'Each of the students have submitted their assignment.',
        'Each of the students has submitted his assignment.',
        'Each of the student has submitted their assignment.',
        'Each of the students have submitted his assignment.'
      ],
      explanation: '"Each of" is followed by a plural noun ("the students") and a singular verb ("has") and singular pronoun ("his"). Option B is grammatically correct.',
      chapterName: 'Subject-Verb Agreement (Syntax)'
    },
    hi: {
      question: 'व्याकरण की दृष्टि से शुद्ध वाक्य का चयन कीजिए:',
      options: [
        'Each of the students have submitted their assignment.',
        'Each of the students has submitted his assignment.',
        'Each of the student has submitted their assignment.',
        'Each of the students have submitted his assignment.'
      ],
      explanation: '"Each of" के बाद बहुवचन संज्ञा ("the students") तथा एकवचन क्रिया ("has") और एकवचन सर्वनाम ("his") का प्रयोग होता है। अतः विकल्प B सही है।',
      chapterName: 'सब्जेक्ट-वर्ब एग्रीमेंट (Syntax)'
    }
  },
  'q-e3': {
    en: {
      question: 'If I _____ rich, I would travel around the world in a luxury yacht.',
      options: ['was', 'were', 'am', 'had been'],
      explanation: 'In subjunctive / hypothetical conditional sentences (imaginary conditions), "were" is used for all subjects regardless of number or person (e.g., "If I were rich").',
      chapterName: 'Tenses & Conditional Sentences'
    },
    hi: {
      question: 'रिक्त स्थान भरें: "If I _____ rich, I would travel around the world in a luxury yacht."',
      options: ['was', 'were', 'am', 'had been'],
      explanation: 'काल्पनिक / असंभव शर्त वाले वाक्यों (Subjunctive Mood) में कर्ता चाहे एकवचन हो या बहुवचन, "were" का ही प्रयोग किया जाता है (जैसे: "If I were rich")।',
      chapterName: 'Tenses एवं कंडीशनल वाक्य'
    }
  },
  'q-e4': {
    en: {
      question: 'Convert to passive voice: "The chef prepares delicious meals every evening."',
      options: [
        'Delicious meals are prepared by the chef every evening.',
        'Delicious meals were prepared by the chef every evening.',
        'Delicious meals have been prepared by the chef every evening.',
        'Delicious meals are being prepared by the chef every evening.'
      ],
      explanation: 'The sentence is in Simple Present tense. Rule: Subject + V1 + Object -> Object + is/am/are + V3 + by + Subject. "Delicious meals" is plural, so "are prepared" is correct.',
      chapterName: 'Active & Passive Voice'
    },
    hi: {
      question: 'पैसिव वॉइस (Passive Voice) में बदलें: "The chef prepares delicious meals every evening."',
      options: [
        'Delicious meals are prepared by the chef every evening.',
        'Delicious meals were prepared by the chef every evening.',
        'Delicious meals have been prepared by the chef every evening.',
        'Delicious meals are being prepared by the chef every evening.'
      ],
      explanation: 'वाक्य Simple Present में है। नियम: Object + is/am/are + V3 + by + Subject। "Delicious meals" बहुवचन होने के कारण "are prepared" सही रूप है।',
      chapterName: 'कर्तृवाच्य एवं कर्मवाच्य (Voice)'
    }
  },
  'q-e5': {
    en: {
      question: 'Change into indirect narration: Ravi said to me, "Where are you going for your summer vacation?"',
      options: [
        'Ravi asked me where was I going for my summer vacation.',
        'Ravi asked me where I was going for my summer vacation.',
        'Ravi told me that where I was going for my summer vacation.',
        'Ravi asked to me where I was going for my summer vacation.'
      ],
      explanation: 'In indirect questions, the sentence becomes assertive: WH-word + subject + verb ("where I was going", NOT "where was I going"). Also "said to" changes to "asked". Option B is correct.',
      chapterName: 'Direct & Indirect Speech (Narration)'
    },
    hi: {
      question: 'अप्रत्यक्ष कथन (Indirect Speech) में बदलें: Ravi said to me, "Where are you going for your summer vacation?"',
      options: [
        'Ravi asked me where was I going for my summer vacation.',
        'Ravi asked me where I was going for my summer vacation.',
        'Ravi told me that where I was going for my summer vacation.',
        'Ravi asked to me where I was going for my summer vacation.'
      ],
      explanation: 'अप्रत्यक्ष प्रश्नवाचक वाक्यों में क्रम साधारण (Assertive) हो जाता है: WH-शब्द + कर्ता + क्रिया ("where I was going")। साथ ही "said to" बदलकर "asked" हो जाता है। अतः विकल्प B सही है।',
      chapterName: 'प्रत्यक्ष एवं अप्रत्यक्ष कथन (Narration)'
    }
  },
  'q-e6': {
    en: {
      question: 'Select the most appropriate SYNONYM of the given word: "DILIGENT"',
      options: ['Careless', 'Industrious', 'Hesitant', 'Arrogant'],
      explanation: '"Diligent" means having or showing care and conscientious effort in work; hardworking. "Industrious" is its direct synonym.',
      chapterName: 'Vocabulary: Synonyms, Antonyms & One Word Substitution'
    },
    hi: {
      question: 'दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) शब्द चुनिए: "DILIGENT"',
      options: ['Careless (लापरवाह)', 'Industrious (मेहनती / परिश्रमी)', 'Hesitant (संकोची)', 'Arrogant (घमंडी)'],
      explanation: '"Diligent" का अर्थ परिश्रमी या मेहनती होता है। "Industrious" इसका सीधा समानार्थी (Synonym) है।',
      chapterName: 'शब्दावली (Vocabulary)'
    }
  },
  'q-e7': {
    en: {
      question: 'What is the one-word substitution for "A person who loves and collects books"?',
      options: ['Bibliophile', 'Philanthropist', 'Polyglot', 'Somnambulist'],
      explanation: 'Biblio (book) + Phile (lover) = Bibliophile. (Philanthropist = lover of mankind, Polyglot = knows many languages, Somnambulist = sleepwalker).',
      chapterName: 'Vocabulary: Synonyms, Antonyms & One Word Substitution'
    },
    hi: {
      question: '"A person who loves and collects books" (पुस्तकों से प्रेम करने और संग्रह करने वाला व्यक्ति) के लिए एक शब्द क्या होगा?',
      options: ['Bibliophile', 'Philanthropist', 'Polyglot', 'Somnambulist'],
      explanation: 'Biblio (पुस्तक) + Phile (प्रेमी) = Bibliophile। (Philanthropist = जनहितैषी, Polyglot = बहुभाषाविद, Somnambulist = नींद में चलने वाला)।',
      chapterName: 'वाक्यांश के लिए एक शब्द (One Word)'
    }
  },
  'q-e8': {
    en: {
      question: 'What is the true meaning of the English idiom "To burn the midnight oil"?',
      options: [
        'To waste electricity or fuel carelessly',
        'To work or study late into the night',
        'To start an accidental house fire',
        'To provoke an argument in anger'
      ],
      explanation: '"To burn the midnight oil" means to study or work hard late into the night (especially students before competitive exams).',
      chapterName: 'Idioms & Phrases, Cloze Test & Comprehension'
    },
    hi: {
      question: 'अंग्रेजी मुहावरे (Idiom) "To burn the midnight oil" का सही अर्थ क्या है?',
      options: [
        'To waste electricity or fuel carelessly (बिजली या तेल व्यर्थ करना)',
        'To work or study late into the night (देर रात तक कड़ी मेहनत या पढ़ाई करना)',
        'To start an accidental house fire (आकस्मिक आग लगना)',
        'To provoke an argument in anger (क्रोध में झगड़ा बढ़ाना)'
      ],
      explanation: '"To burn the midnight oil" का अर्थ होता है देर रात तक जागकर कठोर परिश्रम या अध्ययन करना (जैसे प्रतियोगी परीक्षा की तैयारी करना)।',
      chapterName: 'मुहावरे (Idioms & Phrases)'
    }
  }
};

/**
 * Returns localized content for a question based on selected test language.
 * If verified translation is not available, accurately flags isTranslationAvailable: false.
 */
export function getLocalizedQuestion(question: Question, language: TestLanguage): LocalizedQuestionContent {
  const verified = VERIFIED_QUESTION_TRANSLATIONS[question.id];

  if (language === 'hi') {
    if (verified && verified.hi) {
      return {
        question: verified.hi.question,
        options: verified.hi.options,
        explanation: verified.hi.explanation,
        chapterName: verified.hi.chapterName,
        isTranslationAvailable: true
      };
    }

    if (question.questionHindi && question.optionsHindi && question.explanationHindi) {
      return {
        question: question.questionHindi,
        options: question.optionsHindi,
        explanation: question.explanationHindi,
        chapterName: question.chapterNameHindi || question.chapterName,
        isTranslationAvailable: true
      };
    }

    // If it's general Hindi subject, it is naturally in Hindi
    if (question.subjectId === 'hindi') {
      return {
        question: question.question,
        options: question.options,
        explanation: question.explanation,
        chapterName: question.chapterNameHindi || question.chapterName,
        isTranslationAvailable: true
      };
    }

    // If no verified translation is available, do NOT invent an inaccurate translation:
    return {
      question: question.question,
      options: question.options,
      explanation: question.explanation,
      chapterName: question.chapterName,
      isTranslationAvailable: false
    };
  }

  // English language mode
  if (verified && verified.en) {
    return {
      question: verified.en.question,
      options: verified.en.options,
      explanation: verified.en.explanation,
      chapterName: verified.en.chapterName,
      isTranslationAvailable: true
    };
  }

  return {
    question: question.question,
    options: question.options,
    explanation: question.explanation,
    chapterName: question.chapterName,
    isTranslationAvailable: true
  };
}
