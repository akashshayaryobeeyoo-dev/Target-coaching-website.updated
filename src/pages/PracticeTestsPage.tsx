import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  FileCheck, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  BookmarkCheck, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Filter, 
  Languages, 
  Globe 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MOCK_TESTS } from '../data/mockTestsData';
import { MockTest, Question, TestResult, TestLanguage } from '../types';
import { CBT_UI_TEXT, getLocalizedQuestion } from '../utils/testTranslations';

export const PracticeTestsPage: React.FC = () => {
  const { 
    activeTestId, 
    setActiveTestId, 
    saveTestResult, 
    student, 
    toggleBookmarkQuestion, 
    setActivePage,
    testLanguage,
    setTestLanguage 
  } = useApp();

  const [selectedTest, setSelectedTest] = useState<MockTest | null>(null);
  const [testPhase, setTestPhase] = useState<'select' | 'instructions' | 'in-progress' | 'result'>('select');

  // Test state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  // Result state
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  // Filter state for test catalog
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Quick helper for UI text
  const ui = CBT_UI_TEXT[testLanguage];

  // Set active test if passed via context
  useEffect(() => {
    if (activeTestId) {
      const found = MOCK_TESTS.find(t => t.id === activeTestId);
      if (found) {
        setSelectedTest(found);
        setTestPhase('instructions');
      }
    }
  }, [activeTestId]);

  // Countdown timer in test
  useEffect(() => {
    let timer: any;
    if (testPhase === 'in-progress' && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testPhase, secondsRemaining]);

  const handleStartTest = (test: MockTest) => {
    setSelectedTest(test);
    setTestPhase('instructions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBeginLiveExam = () => {
    if (!selectedTest) return;
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentQuestionIndex(0);
    setSecondsRemaining(selectedTest.durationMinutes * 60);
    setTimeSpent(0);
    setTestPhase('in-progress');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (!selectedTest) return;
    const currentQ = selectedTest.questions[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIdx
    }));
  };

  const handleClearResponse = () => {
    if (!selectedTest) return;
    const currentQ = selectedTest.questions[currentQuestionIndex];
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleMarkReview = () => {
    if (!selectedTest) return;
    const currentQ = selectedTest.questions[currentQuestionIndex];
    setMarkedForReview(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleSubmitTest = () => {
    if (!selectedTest) return;

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    const marksPerQuestion = selectedTest.totalMarks / selectedTest.questions.length;
    const penaltyPerQuestion = selectedTest.negativeMarking;

    selectedTest.questions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const rawScore = (correct * marksPerQuestion) - (incorrect * penaltyPerQuestion);
    const finalScore = Math.max(0, Math.round(rawScore * 100) / 100);

    const result: TestResult = {
      testId: selectedTest.id,
      testTitle: testLanguage === 'hi' && selectedTest.titleHindi ? selectedTest.titleHindi : selectedTest.title,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      language: testLanguage,
      score: finalScore,
      totalMarks: selectedTest.totalMarks,
      correctCount: correct,
      incorrectCount: incorrect,
      unattemptedCount: unattempted,
      timeSpentSeconds: timeSpent,
      userAnswers: { ...userAnswers }
    };

    setTestResult(result);
    saveTestResult(result);
    setTestPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredCatalog = selectedCategory === 'All' 
    ? MOCK_TESTS 
    : MOCK_TESTS.filter(t => t.category === selectedCategory);

  // ==========================================
  // RENDER PHASE: 1. SELECT TEST CATALOG
  // ==========================================
  if (testPhase === 'select') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Title & Language Preference Bar */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
            {testLanguage === 'hi' ? 'वास्तविक सीबीटी परीक्षा सिम्युलेटर' : 'Real CBT Exam Simulator'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
            {testLanguage === 'hi' ? 'प्रैक्टिस टेस्ट एवं मॉक टेस्ट सीरीज' : 'Practice Tests & Mock Exam Series'}
          </h1>
          <p className="text-sm text-slate-600">
            {testLanguage === 'hi' 
              ? 'आधिकारिक टाइमर, प्रश्न पैलेट, नेगेटिव मार्किंग और हिंदी एवं अंग्रेजी दोनों माध्यमों में संपूर्ण समाधान के साथ अभ्यास करें।'
              : 'Simulate real SSC, UP Police, Railway, and Defence tests with official timer, question palette, negative marking, and instant solutions in English & Hindi.'}
          </p>

          {/* Global Language Toggle Selector */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-300 shadow-sm gap-1 mt-2">
            <span className="text-xs font-bold text-slate-500 px-2 flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-orange-600" />
              <span className="hidden sm:inline">Medium:</span>
            </span>
            <button
              onClick={() => setTestLanguage('en')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                testLanguage === 'en'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>1. English</span>
              {testLanguage === 'en' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
            <button
              onClick={() => setTestLanguage('hi')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-hindi transition flex items-center space-x-1.5 ${
                testLanguage === 'hi'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>2. हिंदी (Hindi)</span>
              {testLanguage === 'hi' && <Check className="w-3.5 h-3.5 text-white" />}
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['All', 'Full Mock', 'Subject Test'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'All' 
                ? (testLanguage === 'hi' ? 'सभी टेस्ट श्रृंखला' : 'All Test Suites')
                : (cat === 'Full Mock' 
                    ? (testLanguage === 'hi' ? 'फुल मॉक टेस्ट' : 'Full Mock')
                    : (testLanguage === 'hi' ? 'विषयवार टेस्ट' : 'Subject Test'))}
            </button>
          ))}
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map((test) => {
            const displayTitle = testLanguage === 'hi' && test.titleHindi ? test.titleHindi : test.title;
            const displaySubtitle = testLanguage === 'hi' && test.subtitleHindi ? test.subtitleHindi : test.subtitle;

            return (
              <div
                key={test.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 uppercase tracking-wider border border-blue-200">
                      {test.category}
                    </span>
                    <span className="text-xs font-bold text-slate-500 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{test.durationMinutes} {testLanguage === 'hi' ? 'मिनट' : 'Mins'}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {displayTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {displaySubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl text-center text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">
                        {testLanguage === 'hi' ? 'प्रश्न' : 'QUESTIONS'}
                      </span>
                      <strong className="text-slate-800">{test.questions.length}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">
                        {testLanguage === 'hi' ? 'अंक' : 'MARKS'}
                      </span>
                      <strong className="text-blue-900">{test.totalMarks}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">
                        {testLanguage === 'hi' ? 'नेगेटिव' : 'NEGATIVE'}
                      </span>
                      <strong className="text-rose-600">-{test.negativeMarking}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs text-emerald-600 font-bold">
                    {testLanguage === 'hi' ? 'द्विभाषी (Bilingual)' : 'Bilingual Ready'}
                  </span>
                  <button
                    onClick={() => handleStartTest(test)}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/25 transition active:scale-95 flex items-center space-x-1.5"
                  >
                    <span>{ui.attemptAnotherBtn.split(' ')[0]} {testLanguage === 'hi' ? 'शुरू करें' : 'Test'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER PHASE: 2. INSTRUCTIONS & LANGUAGE SELECTOR
  // ==========================================
  if (testPhase === 'instructions' && selectedTest) {
    const displayTitle = testLanguage === 'hi' && selectedTest.titleHindi ? selectedTest.titleHindi : selectedTest.title;
    const instructionsList = testLanguage === 'hi' && selectedTest.instructionsHindi 
      ? selectedTest.instructionsHindi 
      : selectedTest.instructions;

    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded">
                {ui.instructionsBadge}
              </span>
              <h2 className="text-xl font-black text-slate-900 mt-1">
                {displayTitle}
              </h2>
            </div>
            <button
              onClick={() => setTestPhase('select')}
              className="text-xs text-slate-500 hover:text-slate-800 font-bold"
            >
              {ui.backToTestsBtn}
            </button>
          </div>

          {/* CRITICAL: LANGUAGE SELECTION OPTION BEFORE STARTING TEST */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 border border-slate-200 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center space-x-2">
                <Languages className="w-5 h-5 text-orange-600 shrink-0" />
                <h3 className="text-sm font-black text-slate-900">
                  {ui.languageSelectTitle} / Choose Test Language:
                </h3>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 w-fit">
                {testLanguage === 'hi' ? 'सक्रिय माध्यम: हिंदी' : 'Active Medium: English'}
              </span>
            </div>

            <p className="text-xs text-slate-600">
              {ui.languageSelectSubtitle}
            </p>

            {/* Language Selector: 1. English | 2. हिंदी (Hindi) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => setTestLanguage('en')}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                  testLanguage === 'en'
                    ? 'bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-900 ring-offset-2'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-blue-400 hover:bg-slate-50'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="text-sm font-black flex items-center space-x-2">
                    <span>1. English</span>
                  </div>
                  <div className={`text-[11px] ${testLanguage === 'en' ? 'text-blue-200' : 'text-slate-500'}`}>
                    Test will load in English
                  </div>
                </div>
                {testLanguage === 'en' ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-300"></span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setTestLanguage('hi')}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                  testLanguage === 'hi'
                    ? 'bg-orange-600 text-white border-orange-600 shadow-md ring-2 ring-orange-600 ring-offset-2'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-orange-400 hover:bg-slate-50'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="text-sm font-black font-hindi flex items-center space-x-2">
                    <span>2. हिंदी (Hindi)</span>
                  </div>
                  <div className={`text-[11px] ${testLanguage === 'hi' ? 'text-orange-100' : 'text-slate-500'}`}>
                    संपूर्ण परीक्षा हिंदी माध्यम में लोड होगी
                  </div>
                </div>
                {testLanguage === 'hi' ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-300"></span>
                )}
              </button>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center space-x-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                {testLanguage === 'hi'
                  ? 'समान पाठ्यक्रम, समान कठिनाई स्तर, समान प्रश्न संख्या एवं अंक दोनों भाषाओं के लिए उपलब्ध रहेंगे।'
                  : 'Same syllabus, difficulty level, question count, marks and time limit apply in both languages.'}
              </span>
            </div>
          </div>

          {/* Test Meta Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block font-bold">{ui.totalDurationLabel}</span>
              <strong className="text-sm font-black text-slate-800">{selectedTest.durationMinutes} {ui.minutesLabel}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block font-bold">{ui.questionsCountLabel}</span>
              <strong className="text-sm font-black text-slate-800">{selectedTest.questions.length}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block font-bold">{ui.maxMarksLabel}</span>
              <strong className="text-sm font-black text-blue-900">{selectedTest.totalMarks} {ui.marksText}</strong>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
              <span className="text-rose-500 block font-bold">{ui.negativeLabel}</span>
              <strong className="text-sm font-black text-rose-700">-{selectedTest.negativeMarking} {ui.negativePerWrong}</strong>
            </div>
          </div>

          {/* Instructions List */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              {ui.generalInstructionsTitle}
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {instructionsList.map((inst, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Color Palette Legend Explanation */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-700">{ui.paletteLegendTitle}</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">1</span>
                <span>{ui.answeredLabel}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-md bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center">2</span>
                <span>{ui.notAnsweredLabel}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center">3</span>
                <span>{ui.markedReviewLabel}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-md bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center">4</span>
                <span>{ui.notVisitedLabel}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => setTestPhase('select')}
              className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {ui.cancelBtn}
            </button>
            <button
              onClick={handleBeginLiveExam}
              className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 transition"
            >
              {ui.readyToBeginBtn}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER PHASE: 3. IN-PROGRESS LIVE CBT CONSOLE
  // ==========================================
  if (testPhase === 'in-progress' && selectedTest) {
    const currentQ = selectedTest.questions[currentQuestionIndex];
    const localized = getLocalizedQuestion(currentQ, testLanguage);
    const isAnswered = userAnswers[currentQ.id] !== undefined;
    const isMarked = !!markedForReview[currentQ.id];

    // Status counts
    const answeredCount = Object.keys(userAnswers).length;
    const markedCount = Object.values(markedForReview).filter(Boolean).length;
    const notAnsweredCount = currentQuestionIndex >= answeredCount ? (selectedTest.questions.length - answeredCount) : 0;

    const displayTitle = testLanguage === 'hi' && selectedTest.titleHindi ? selectedTest.titleHindi : selectedTest.title;

    return (
      <div className="min-h-screen bg-slate-100 -mt-6 pb-12">
        {/* CBT Top Bar */}
        <div className="bg-slate-900 text-white px-4 sm:px-8 py-3 sticky top-20 z-40 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">
                {ui.consoleTitle}
              </div>
              <h2 className="text-sm font-black text-white truncate max-w-[180px] sm:max-w-md">
                {displayTitle}
              </h2>
            </div>

            {/* Language Switcher in live test header bar */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700 text-xs">
                <button
                  type="button"
                  onClick={() => setTestLanguage('en')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg font-bold transition text-[11px] ${
                    testLanguage === 'en' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Switch to English"
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setTestLanguage('hi')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg font-bold font-hindi transition text-[11px] ${
                    testLanguage === 'hi' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="हिंदी में बदलें"
                >
                  हिंदी
                </button>
              </div>

              {/* Countdown Clock */}
              <div className="flex items-center space-x-2 bg-slate-800 px-2.5 sm:px-3.5 py-1 rounded-xl border border-slate-700">
                <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="font-mono text-sm sm:text-base font-black text-amber-300">
                  {formatTimer(secondsRemaining)}
                </span>
              </div>

              <button
                onClick={handleSubmitTest}
                className="px-3 sm:px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow transition whitespace-nowrap"
              >
                {ui.submitTestBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Console Workspace */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Col (Question Area): 8 Cols */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[520px]">
              <div className="space-y-6">
                
                {/* Header: Question No & Marks */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-black text-blue-900">
                      {ui.questionNo} {currentQuestionIndex + 1}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold truncate max-w-[200px]">
                      {localized.chapterName}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center space-x-2">
                    <span>{ui.marksLabel} <strong className="text-emerald-600">+{(selectedTest.totalMarks / selectedTest.questions.length).toFixed(1)}</strong></span>
                    <span>•</span>
                    <span>{ui.negativeLabel} <strong className="text-rose-600">-{selectedTest.negativeMarking}</strong></span>
                  </div>
                </div>

                {/* If verified translation is not available, show honest notification */}
                {!localized.isTranslationAvailable && testLanguage === 'hi' && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{ui.translationUnavailableBadge} (Displaying standard English version).</span>
                  </div>
                )}

                {/* Question Statement */}
                <div className="text-base font-medium text-slate-900 leading-relaxed font-sans">
                  {localized.question}
                </div>

                {/* 4 Options Selection */}
                <div className="space-y-3 pt-2">
                  {localized.options.map((opt, idx) => {
                    const isSelected = userAnswers[currentQ.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`w-full p-4 rounded-2xl border text-left text-sm transition flex items-center space-x-3 ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 border ${
                          isSelected 
                            ? 'bg-blue-900 text-white border-blue-900' 
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 mt-6">
                <div className="flex gap-2">
                  <button
                    onClick={handleToggleMarkReview}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                      isMarked
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {isMarked ? ui.markedReviewBtn : ui.markReviewBtn}
                  </button>

                  <button
                    onClick={handleClearResponse}
                    disabled={!isAnswered}
                    className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-50 border border-slate-300 text-slate-600 hover:text-slate-900 disabled:opacity-40"
                  >
                    {ui.clearResponseBtn}
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-40 flex items-center space-x-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{ui.prevBtn}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (currentQuestionIndex < selectedTest.questions.length - 1) {
                        setCurrentQuestionIndex(prev => prev + 1);
                      }
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-900 hover:bg-blue-950 text-white shadow transition flex items-center space-x-1"
                  >
                    <span>{ui.saveAndNextBtn}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Col (Question Palette): 4 Cols */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm space-y-4">
                
                {/* Candidate Info Badge */}
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-900">
                    👨‍🎓
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      {testLanguage === 'hi' ? 'परीक्षार्थी (अभ्यर्थी)' : 'Candidate Aspirant'}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {ui.candidateRoll} TARGET-CBT-2026
                    </div>
                  </div>
                </div>

                {/* Legend summary pills */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 flex items-center justify-between">
                    <span>{ui.answeredLabel}:</span>
                    <span>{answeredCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-800 font-bold border border-purple-200 flex items-center justify-between">
                    <span>{ui.markedReviewLabel}:</span>
                    <span>{markedCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-between">
                    <span>{ui.remainingLabel}</span>
                    <span>{selectedTest.questions.length - answeredCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-900 font-bold flex items-center justify-between">
                    <span>{ui.totalQsLabel}</span>
                    <span>{selectedTest.questions.length}</span>
                  </div>
                </div>

                {/* Question Palette Matrix */}
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-2">{ui.questionPalette}</div>
                  <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto p-1">
                    {selectedTest.questions.map((q, idx) => {
                      const isCurrent = currentQuestionIndex === idx;
                      const hasAnswer = userAnswers[q.id] !== undefined;
                      const isRev = markedForReview[q.id];

                      let btnBg = "bg-slate-100 text-slate-700 hover:bg-slate-200";
                      if (hasAnswer) {
                        btnBg = "bg-emerald-600 text-white font-bold";
                      } else if (isRev) {
                        btnBg = "bg-purple-600 text-white font-bold";
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative ${btnBg} ${
                            isCurrent ? 'ring-2 ring-blue-950 ring-offset-2' : ''
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Final Submit in Sidebar */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={handleSubmitTest}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition"
                  >
                    {ui.finishAndSubmitBtn}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER PHASE: 4. TEST RESULT & SCORECARD
  // ==========================================
  if (testPhase === 'result' && testResult && selectedTest) {
    const accuracy = testResult.correctCount + testResult.incorrectCount > 0
      ? Math.round((testResult.correctCount / (testResult.correctCount + testResult.incorrectCount)) * 100)
      : 0;

    const resLang = testResult.language || testLanguage;
    const resUi = CBT_UI_TEXT[resLang];

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Scorecard Hero Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30">
                  {resUi.resultBadge}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {resLang === 'hi' ? 'माध्यम: हिंदी' : 'Medium: English'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {testResult.testTitle}
              </h2>
              <div className="text-xs text-slate-300 mt-1">
                {resUi.resultDatePrefix} {testResult.date} • {resUi.timeTakenPrefix} {Math.floor(testResult.timeSpentSeconds / 60)}m {testResult.timeSpentSeconds % 60}s
              </div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shrink-0 min-w-[150px]">
              <span className="text-xs text-slate-300 block font-bold">{resUi.yourScoreLabel}</span>
              <div className="text-4xl font-black text-emerald-400">
                {testResult.score}
              </div>
              <span className="text-xs text-slate-400">{resUi.outOfLabel} {testResult.totalMarks} {resUi.marksText}</span>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <span className="text-xs font-bold text-slate-400 block">{resUi.correctBadge}</span>
            <div className="text-2xl font-black text-emerald-600 mt-1">{testResult.correctCount}</div>
            <span className="text-[11px] text-slate-500">{resUi.correctSubtext}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <span className="text-xs font-bold text-slate-400 block">{resUi.incorrectBadge}</span>
            <div className="text-2xl font-black text-rose-600 mt-1">{testResult.incorrectCount}</div>
            <span className="text-[11px] text-slate-500">{resUi.incorrectSubtext}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <span className="text-xs font-bold text-slate-400 block">{resUi.unattemptedBadge}</span>
            <div className="text-2xl font-black text-slate-500 mt-1">{testResult.unattemptedCount}</div>
            <span className="text-[11px] text-slate-500">{resUi.unattemptedSubtext}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <span className="text-xs font-bold text-slate-400 block">{resUi.accuracyBadge}</span>
            <div className="text-2xl font-black text-blue-900 mt-1">{accuracy}%</div>
            <span className="text-[11px] text-slate-500">{resUi.accuracySubtext}</span>
          </div>
        </div>

        {/* Ashvani Sir's Performance Advice */}
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 text-xs text-amber-950 flex items-start space-x-3">
          <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-sm font-bold block mb-1">{resUi.assessmentTitle}</strong>
            {accuracy >= 75 ? (
              <p>{resUi.assessmentExcellent}</p>
            ) : accuracy >= 50 ? (
              <p>{resUi.assessmentGood}</p>
            ) : (
              <p>{resUi.assessmentNeedsImprovement}</p>
            )}
          </div>
        </div>

        {/* Detailed Solutions Review */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200 gap-1">
            <h3 className="text-lg font-black text-slate-900">
              {resUi.solutionsTitle}
            </h3>
            <span className="text-xs text-slate-500">
              {resUi.reviewCountPrefix} ({selectedTest.questions.length})
            </span>
          </div>

          <div className="space-y-4">
            {selectedTest.questions.map((q, idx) => {
              const solLocalized = getLocalizedQuestion(q, resLang);
              const userAns = testResult.userAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;
              const isUnattempted = userAns === undefined;

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-2xl border bg-white space-y-3 ${
                    isCorrect
                      ? 'border-emerald-300'
                      : isUnattempted
                      ? 'border-slate-200'
                      : 'border-rose-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-500">
                      Q{idx + 1}. {solLocalized.chapterName}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : isUnattempted
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isCorrect ? resUi.correctPlus2 : isUnattempted ? resUi.unattemptedZero : resUi.incorrectMinus}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900">
                    {solLocalized.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {solLocalized.options.map((opt, optIdx) => {
                      const isThisCorrect = optIdx === q.correctAnswer;
                      const isThisSelected = userAns === optIdx;

                      let optStyle = "bg-slate-50 border-slate-200 text-slate-700";
                      if (isThisCorrect) {
                        optStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold";
                      } else if (isThisSelected && !isThisCorrect) {
                        optStyle = "bg-rose-50 border-rose-500 text-rose-950 line-through";
                      }

                      return (
                        <div key={optIdx} className={`p-2.5 rounded-xl border flex items-center space-x-2 ${optStyle}`}>
                          <span className="w-5 h-5 rounded-full bg-white text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-sans">{resUi.explanationTitle}</strong>
                    <div className="leading-relaxed">{solLocalized.explanation}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => setTestPhase('select')}
            className="flex-1 py-3 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition text-center"
          >
            {resUi.attemptAnotherBtn}
          </button>
          <button
            onClick={() => {
              setActivePage('syllabus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition text-center"
          >
            {resUi.viewDashboardBtn}
          </button>
        </div>

      </div>
    );
  }

  return null;
};
