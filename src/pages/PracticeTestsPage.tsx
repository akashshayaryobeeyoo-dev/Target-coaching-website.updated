import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Globe,
  AlertTriangle,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MOCK_TESTS } from '../data/mockTestsData';
import { MockTest, Question, TestResult, TestLanguage } from '../types';
import { CBT_UI_TEXT, getLocalizedQuestion } from '../utils/testTranslations';

const CBT_SESSION_STORAGE_KEY = 'target_active_cbt_session';

export const PracticeTestsPage: React.FC = () => {
  const { 
    activeTestId, 
    setActiveTestId, 
    saveTestResult, 
    student, 
    toggleBookmarkQuestion, 
    setActivePage,
    testLanguage,
    setTestLanguage,
    showToast
  } = useApp();

  const [selectedTest, setSelectedTest] = useState<MockTest | null>(null);
  const [testPhase, setTestPhase] = useState<'select' | 'instructions' | 'in-progress' | 'result'>('select');

  // Test state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  // Manual Submission Confirmation Modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Result state
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  // Catalog Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('all');

  // Timer & Submission Refs to prevent re-creation and duplicate submissions
  const timerRef = useRef<any>(null);
  const endTimeRef = useRef<number>(0);
  const isSubmittingRef = useRef<boolean>(false);

  // Quick helper for UI text
  const ui = CBT_UI_TEXT[testLanguage];

  // Set active test if passed via context (e.g. from Home or Syllabus page)
  useEffect(() => {
    if (activeTestId) {
      const found = MOCK_TESTS.find(t => t.id === activeTestId);
      if (found) {
        setSelectedTest(found);
        setTestPhase('instructions');
      }
    }
  }, [activeTestId]);

  // Restore ongoing test from sessionStorage if user refreshes the browser
  useEffect(() => {
    try {
      const savedSession = sessionStorage.getItem(CBT_SESSION_STORAGE_KEY);
      if (savedSession) {
        const parsed = JSON.parse(savedSession);
        const found = MOCK_TESTS.find(t => t.id === parsed.testId);
        if (found && parsed.endTime) {
          const now = Date.now();
          const remainingSec = Math.max(0, Math.round((parsed.endTime - now) / 1000));
          if (remainingSec > 0) {
            setSelectedTest(found);
            setUserAnswers(parsed.userAnswers || {});
            setMarkedForReview(parsed.markedForReview || {});
            setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
            endTimeRef.current = parsed.endTime;
            setSecondsRemaining(remainingSec);
            setTimeSpent(Math.max(0, Math.round((now - (parsed.startTime || now)) / 1000)));
            setTestPhase('in-progress');
            showToast(testLanguage === 'hi' ? 'पूर्व परीक्षा सत्र पुनः प्राप्त कर लिया गया।' : 'Previous CBT session resumed.');
          } else {
            sessionStorage.removeItem(CBT_SESSION_STORAGE_KEY);
          }
        }
      }
    } catch {
      sessionStorage.removeItem(CBT_SESSION_STORAGE_KEY);
    }
  }, []);

  // Save session state to sessionStorage whenever user answers, marks, or navigates
  useEffect(() => {
    if (testPhase === 'in-progress' && selectedTest && endTimeRef.current > 0 && !isSubmittingRef.current) {
      try {
        sessionStorage.setItem(CBT_SESSION_STORAGE_KEY, JSON.stringify({
          testId: selectedTest.id,
          endTime: endTimeRef.current,
          userAnswers,
          markedForReview,
          currentQuestionIndex,
          testLanguage,
          startTime: endTimeRef.current - (selectedTest.durationMinutes * 60 * 1000)
        }));
      } catch {
        // Ignore quota errors
      }
    }
  }, [userAnswers, markedForReview, currentQuestionIndex, testLanguage, testPhase, selectedTest]);

  // Safe Final Submission Handler (works for both manual confirmation and auto-timeout)
  const handleFinalSubmit = useCallback((isAuto = false) => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    sessionStorage.removeItem(CBT_SESSION_STORAGE_KEY);
    setShowSubmitModal(false);

    if (!selectedTest) return;

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    const marksPerQuestion = selectedTest.marksPerQuestion || (selectedTest.totalMarks / selectedTest.questions.length);
    const penaltyPerQuestion = selectedTest.negativeMarking || 0;

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

    const calculatedTimeSpent = isAuto 
      ? selectedTest.durationMinutes * 60 
      : Math.max(1, Math.round((Date.now() - (endTimeRef.current - selectedTest.durationMinutes * 60 * 1000)) / 1000));

    const result: TestResult = {
      id: 'att-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      candidateRoll: 'TARGET-CBT-2026',
      testId: selectedTest.id,
      testTitle: testLanguage === 'hi' && selectedTest.titleHindi ? selectedTest.titleHindi : selectedTest.title,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      language: testLanguage,
      score: finalScore,
      totalMarks: selectedTest.totalMarks,
      correctCount: correct,
      incorrectCount: incorrect,
      unattemptedCount: unattempted,
      timeSpentSeconds: calculatedTimeSpent,
      userAnswers: { ...userAnswers }
    };

    setTestResult(result);
    saveTestResult(result);
    setTestPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (isAuto) {
      showToast(testLanguage === 'hi' ? 'समय समाप्त! आपकी परीक्षा स्वतः जमा कर दी गई है।' : "Time's up! Your test has been submitted automatically.");
    } else {
      showToast(testLanguage === 'hi' ? 'परीक्षा सफलतापूर्वक जमा की गई।' : 'Test submitted successfully.');
    }
  }, [selectedTest, userAnswers, testLanguage, saveTestResult, showToast]);

  // Robust Wall-Clock Timer countdown loop
  useEffect(() => {
    if (testPhase === 'in-progress' && endTimeRef.current > 0 && !isSubmittingRef.current) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      const updateClock = () => {
        const now = Date.now();
        const diffSeconds = Math.max(0, Math.round((endTimeRef.current - now) / 1000));
        setSecondsRemaining(diffSeconds);
        setTimeSpent(prev => prev + 1);

        if (diffSeconds <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          handleFinalSubmit(true);
        }
      };

      // Immediate tick to sync display
      updateClock();
      timerRef.current = setInterval(updateClock, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [testPhase, handleFinalSubmit]);

  const handleStartTest = (test: MockTest) => {
    setSelectedTest(test);
    setTestPhase('instructions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBeginLiveExam = () => {
    if (!selectedTest) return;

    // Clear previous state and submission flag
    isSubmittingRef.current = false;
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentQuestionIndex(0);

    const totalDurationSeconds = selectedTest.durationMinutes * 60;
    const targetEndTime = Date.now() + (totalDurationSeconds * 1000);

    endTimeRef.current = targetEndTime;
    setSecondsRemaining(totalDurationSeconds);
    setTimeSpent(0);

    // Persist session immediately
    sessionStorage.setItem(CBT_SESSION_STORAGE_KEY, JSON.stringify({
      testId: selectedTest.id,
      endTime: targetEndTime,
      userAnswers: {},
      markedForReview: {},
      currentQuestionIndex: 0,
      testLanguage,
      startTime: Date.now()
    }));

    setTestPhase('in-progress');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (!selectedTest || isSubmittingRef.current) return;
    const currentQ = selectedTest.questions[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIdx
    }));
  };

  const handleClearResponse = () => {
    if (!selectedTest || isSubmittingRef.current) return;
    const currentQ = selectedTest.questions[currentQuestionIndex];
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleMarkReview = () => {
    if (!selectedTest || isSubmittingRef.current) return;
    const currentQ = selectedTest.questions[currentQuestionIndex];
    setMarkedForReview(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  // Consistent Timer Formatter (Supports HH:MM:SS for >= 60m and MM:SS for < 60m)
  const formatTimer = (totalSeconds: number) => {
    const safeSec = Math.max(0, Math.floor(totalSeconds));
    const hrs = Math.floor(safeSec / 3600);
    const mins = Math.floor((safeSec % 3600) / 60);
    const secs = safeSec % 60;

    if (hrs > 0 || (selectedTest && selectedTest.durationMinutes >= 60)) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Filter Catalog
  const filteredCatalog = MOCK_TESTS.filter(t => {
    const categoryMatches = selectedCategory === 'All' || t.category === selectedCategory;
    const examMatches = selectedExamFilter === 'all' || t.examId === selectedExamFilter;
    return categoryMatches && examMatches;
  });

  // ==========================================
  // RENDER PHASE: 1. SELECT TEST CATALOG
  // ==========================================
  if (testPhase === 'select') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Title & Language Preference Bar */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
            {testLanguage === 'hi' ? 'वास्तविक सीबीटी परीक्षा सिम्युलेटर' : 'Official CBT Exam Simulator'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
            {testLanguage === 'hi' ? 'प्रैक्टिस टेस्ट एवं फुल मॉक टेस्ट सीरीज' : 'Practice Tests & Full Mock Exam Series'}
          </h1>
          <p className="text-sm text-slate-600">
            {testLanguage === 'hi' 
              ? 'एसएससी (CGL, CHSL, MTS, GD), रेलवे एनटीपीसी, यूपीएसएसएससी पीईटी, यूपी पुलिस एवं आर्मी अग्निवीर के आधिकारिक पैटर्न, सटीक टाइमर और नेगेटिव मार्किंग के साथ अभ्यास करें।'
              : 'Prepare for SSC CGL, CHSL, MTS, GD, Railway NTPC, UPSSSC PET, UP Police & Army Agniveer with official timers, authentic question palettes, and negative marking.'}
          </p>

          {/* Global Language Toggle Selector */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-300 shadow-sm gap-1 mt-2">
            <span className="text-xs font-bold text-slate-500 px-2 flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-orange-600" />
              <span className="hidden sm:inline">Medium / माध्यम:</span>
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
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'All', labelEn: 'All Test Suites', labelHi: 'सभी टेस्ट श्रृंखला' },
              { id: 'Full Mock', labelEn: 'Official Full Mocks', labelHi: 'आधिकारिक फुल मॉक टेस्ट' },
              { id: 'Subject Test', labelEn: 'Subject-wise Tests', labelHi: 'विषयवार स्पीड टेस्ट' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {testLanguage === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Exam Specific Filter */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-400 mr-1 flex items-center">
              <Filter className="w-3 h-3 mr-1" />
              {testLanguage === 'hi' ? 'परीक्षा:' : 'Filter Exam:'}
            </span>
            {[
              { id: 'all', label: 'All Exams' },
              { id: 'ssc-cgl', label: 'SSC CGL' },
              { id: 'ssc-chsl', label: 'SSC CHSL' },
              { id: 'ssc-mts', label: 'SSC MTS' },
              { id: 'railway-ntpc', label: 'Railway NTPC' },
              { id: 'upsssc-pet', label: 'UPSSSC PET' },
              { id: 'up-police', label: 'UP Police' },
              { id: 'ssc-gd', label: 'SSC GD' },
              { id: 'army-agniveer', label: 'Army Agniveer' }
            ].map(exam => (
              <button
                key={exam.id}
                onClick={() => setSelectedExamFilter(exam.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                  selectedExamFilter === exam.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {exam.label}
              </button>
            ))}
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map((test) => {
            const displayTitle = testLanguage === 'hi' && test.titleHindi ? test.titleHindi : test.title;
            const displaySubtitle = testLanguage === 'hi' && test.subtitleHindi ? test.subtitleHindi : test.subtitle;
            const officialCount = test.officialTotalQuestions || test.questions.length;
            const availableCount = test.questions.length;
            const isFullMock = test.category === 'Full Mock';
            const hasPendingQuestions = isFullMock && availableCount < officialCount;

            return (
              <div
                key={test.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border ${
                      test.category === 'Full Mock' 
                        ? 'bg-orange-50 text-orange-700 border-orange-200' 
                        : 'bg-blue-50 text-blue-900 border-blue-200'
                    }`}>
                      {test.sessionName || test.category}
                    </span>
                    <span className="text-xs font-bold text-slate-600 flex items-center space-x-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{test.durationMinutes} {testLanguage === 'hi' ? 'मिनट' : 'Mins'}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-900 transition">
                      {displayTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {displaySubtitle}
                    </p>
                  </div>

                  {/* Question bank status tag */}
                  {hasPendingQuestions ? (
                    <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="font-semibold">
                          {testLanguage === 'hi' ? `उपलब्ध प्रश्न: ${availableCount}/${officialCount}` : `Questions in Bank: ${availableCount}/${officialCount}`}
                        </span>
                      </span>
                      <span className="text-[10px] font-bold bg-amber-200/70 text-amber-950 px-1.5 py-0.5 rounded">
                        {testLanguage === 'hi' ? `शेष: ${officialCount - availableCount}` : `Pending: ${officialCount - availableCount}`}
                      </span>
                    </div>
                  ) : (
                    <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold">
                        {testLanguage === 'hi' ? `संपूर्ण टेस्ट सेट: ${availableCount} प्रश्न तैयार` : `Complete Test Set: ${availableCount} Questions Ready`}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl text-center text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold">
                        {testLanguage === 'hi' ? 'प्रश्न' : 'QUESTIONS'}
                      </span>
                      <strong className="text-slate-800">{availableCount}</strong>
                      {isFullMock && <span className="text-[9px] text-slate-400 block">/ {officialCount}</span>}
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
                      <strong className={test.negativeMarking > 0 ? "text-rose-600" : "text-emerald-600"}>
                        {test.negativeMarking > 0 ? `-${test.negativeMarking}` : 'None (0)'}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs text-emerald-600 font-bold flex items-center space-x-1">
                    <Check className="w-3 h-3" />
                    <span>{testLanguage === 'hi' ? 'हिंदी व अंग्रेजी' : 'Bilingual Ready'}</span>
                  </span>
                  <button
                    onClick={() => handleStartTest(test)}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/25 transition active:scale-95 flex items-center space-x-1.5"
                  >
                    <span>{testLanguage === 'hi' ? 'टेस्ट शुरू करें' : 'Start Mock Test'}</span>
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
    const officialCount = selectedTest.officialTotalQuestions || selectedTest.questions.length;
    const availableCount = selectedTest.questions.length;
    const isFullMock = selectedTest.category === 'Full Mock';
    const hasPendingQuestions = isFullMock && availableCount < officialCount;

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

          {/* CRITICAL: HONEST QUESTION COUNT & OFFICIAL PATTERN NOTICE */}
          {hasPendingQuestions ? (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  {testLanguage === 'hi' 
                    ? `आधिकारिक परीक्षा प्रारूप: ${officialCount} प्रश्न | उपलब्ध अभ्यास प्रश्न: ${availableCount}`
                    : `Official Pattern: ${officialCount} Questions | Available Syllabus Questions: ${availableCount}`}
                </span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {testLanguage === 'hi'
                  ? `इस फुल मॉक टेस्ट में संस्थान के सिलेबस बैंक से वर्तमान में उपलब्ध सभी ${availableCount} प्रामाणिक प्रश्न शामिल हैं। शेष ${officialCount - availableCount} प्रश्नों को फैकल्टी द्वारा संकलित किया जा रहा है। परीक्षा आधिकारिक समयावधि (${selectedTest.durationMinutes} मिनट) और नेगेटिव मार्किंग नियमों के तहत ही संचालित होगी।`
                  : `This test evaluates you on all ${availableCount} verified questions currently loaded from the institute's syllabus bank. The remaining ${officialCount - availableCount} questions are pending entry from faculty. The timer strictly adheres to the official exam duration (${selectedTest.durationMinutes} minutes) and official negative marking rules.`}
              </p>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {testLanguage === 'hi'
                  ? `यह टेस्ट संपूर्ण आधिकारिक पाठ्यक्रम एवं ${availableCount} प्रश्नों के साथ तैयार है।`
                  : `This test is fully populated with all ${availableCount} questions matching official syllabus.`}
              </span>
            </div>
          )}

          {/* Language Selection Option */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 border border-slate-200 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center space-x-2">
                <Languages className="w-5 h-5 text-orange-600 shrink-0" />
                <h3 className="text-sm font-black text-slate-900">
                  {ui.languageSelectTitle} / Choose Medium:
                </h3>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 w-fit">
                {testLanguage === 'hi' ? 'सक्रिय माध्यम: हिंदी' : 'Active Medium: English'}
              </span>
            </div>

            <p className="text-xs text-slate-600">
              {ui.languageSelectSubtitle}
            </p>

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
          </div>

          {/* Test Meta Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block font-bold">{ui.totalDurationLabel}</span>
              <strong className="text-sm font-black text-slate-800">
                {selectedTest.durationMinutes} {ui.minutesLabel}
              </strong>
              <span className="text-[10px] text-slate-500 block">
                ({selectedTest.durationMinutes * 60} {testLanguage === 'hi' ? 'सेकंड' : 'Seconds'})
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block font-bold">{ui.questionsCountLabel}</span>
              <strong className="text-sm font-black text-slate-800">{availableCount}</strong>
              {isFullMock && (
                <span className="text-[10px] text-slate-500 block">
                  ({testLanguage === 'hi' ? `आधिकारिक: ${officialCount}` : `Official: ${officialCount}`})
                </span>
              )}
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block font-bold">{ui.maxMarksLabel}</span>
              <strong className="text-sm font-black text-blue-900">{selectedTest.totalMarks} {ui.marksText}</strong>
              <span className="text-[10px] text-slate-500 block">
                (+{selectedTest.marksPerQuestion || 2} {testLanguage === 'hi' ? 'प्रति सही' : 'per correct'})
              </span>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
              <span className="text-rose-500 block font-bold">{ui.negativeLabel}</span>
              <strong className="text-sm font-black text-rose-700">
                {selectedTest.negativeMarking > 0 ? `-${selectedTest.negativeMarking}` : '0.00'}
              </strong>
              <span className="text-[10px] text-rose-500 block">
                {selectedTest.negativeMarking > 0 ? ui.negativePerWrong : (testLanguage === 'hi' ? 'कोई कटौती नहीं' : 'No Negative Marks')}
              </span>
            </div>
          </div>

          {/* Section Breakdown (if available) */}
          {selectedTest.sectionBreakdown && selectedTest.sectionBreakdown.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-900" />
                <span>{testLanguage === 'hi' ? 'आधिकारिक विषयवार वितरण' : 'Official Sectional Distribution'}</span>
              </h3>
              <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-2.5 font-bold">{testLanguage === 'hi' ? 'विषय / अनुभाग' : 'Section / Subject'}</th>
                      <th className="p-2.5 font-bold text-center">{testLanguage === 'hi' ? 'आधिकारिक प्रश्न' : 'Official Qs'}</th>
                      <th className="p-2.5 font-bold text-center">{testLanguage === 'hi' ? 'उपलब्ध प्रश्न' : 'Available Qs'}</th>
                      <th className="p-2.5 font-bold text-center">{testLanguage === 'hi' ? 'अंक' : 'Marks'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedTest.sectionBreakdown.map((sec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-2.5 font-medium text-slate-800">
                          {testLanguage === 'hi' && sec.sectionNameHindi ? sec.sectionNameHindi : sec.sectionName}
                        </td>
                        <td className="p-2.5 text-center font-bold text-slate-700">{sec.officialQuestions}</td>
                        <td className="p-2.5 text-center font-bold text-emerald-700">{sec.availableQuestions}</td>
                        <td className="p-2.5 text-center text-blue-900 font-bold">+{sec.marksPerQuestion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

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
              className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 transition active:scale-98"
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
    const notAnsweredCount = Math.max(0, selectedTest.questions.length - answeredCount);

    const displayTitle = testLanguage === 'hi' && selectedTest.titleHindi ? selectedTest.titleHindi : selectedTest.title;
    const marksPerQ = selectedTest.marksPerQuestion || 2;
    const isLowTime = secondsRemaining <= 300 && secondsRemaining > 0; // Less than 5 mins

    return (
      <div className="min-h-screen bg-slate-100 -mt-6 pb-16">
        {/* CBT Top Bar */}
        <div className="bg-slate-900 text-white px-4 sm:px-8 py-3 sticky top-20 z-40 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <span>{ui.consoleTitle}</span>
                {selectedTest.sessionName && (
                  <span className="text-[9px] bg-orange-600 text-white px-1.5 py-0.2 rounded font-black">
                    {selectedTest.sessionName}
                  </span>
                )}
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

              {/* Countdown Clock (Guaranteed accurate wall-clock timer) */}
              <div className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-xl border transition ${
                isLowTime
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-slate-800 border-slate-700 text-amber-300'
              }`}>
                <Clock className={`w-4 h-4 ${isLowTime ? 'text-rose-400' : 'text-amber-400'}`} />
                <span className="font-mono text-sm sm:text-base font-black tracking-wide">
                  {formatTimer(secondsRemaining)}
                </span>
              </div>

              {/* Submit Button triggers confirmation modal */}
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-3.5 sm:px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow transition whitespace-nowrap active:scale-95"
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
                    <span className="text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold truncate max-w-[200px]">
                      {localized.chapterName}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({currentQuestionIndex + 1} / {selectedTest.questions.length})
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center space-x-2">
                    <span>{ui.marksLabel} <strong className="text-emerald-600">+{marksPerQ.toFixed(1)}</strong></span>
                    <span>•</span>
                    <span>{ui.negativeLabel} <strong className={selectedTest.negativeMarking > 0 ? "text-rose-600" : "text-emerald-600"}>
                      {selectedTest.negativeMarking > 0 ? `-${selectedTest.negativeMarking}` : '0.00'}
                    </strong></span>
                  </div>
                </div>

                {/* If verified translation is not available, show notification */}
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
                            ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-sm ring-1 ring-blue-600'
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
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-900 text-lg">
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
                  <div className="p-2 rounded-lg bg-rose-50 text-rose-800 font-bold border border-rose-200 flex items-center justify-between">
                    <span>{ui.remainingLabel}</span>
                    <span>{notAnsweredCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-900 font-bold flex items-center justify-between">
                    <span>{ui.totalQsLabel}</span>
                    <span>{selectedTest.questions.length}</span>
                  </div>
                </div>

                {/* Question Palette Matrix */}
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-2">{ui.questionPalette}</div>
                  <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto p-1">
                    {selectedTest.questions.map((q, idx) => {
                      const isCurrent = currentQuestionIndex === idx;
                      const hasAnswer = userAnswers[q.id] !== undefined;
                      const isRev = !!markedForReview[q.id];

                      let btnStyle = "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";
                      if (hasAnswer && isRev) {
                        btnStyle = "bg-purple-700 text-white font-bold border-purple-800";
                      } else if (hasAnswer) {
                        btnStyle = "bg-emerald-600 text-white font-bold border-emerald-700";
                      } else if (isRev) {
                        btnStyle = "bg-purple-500 text-white font-bold border-purple-600";
                      } else if (idx < currentQuestionIndex) {
                        btnStyle = "bg-rose-500 text-white font-bold border-rose-600";
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative border ${btnStyle} ${
                            isCurrent ? 'ring-2 ring-blue-950 ring-offset-2 scale-105 z-10' : ''
                          }`}
                        >
                          {idx + 1}
                          {hasAnswer && isRev && (
                            <span className="w-2 h-2 rounded-full bg-emerald-300 absolute top-1 right-1"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Final Submit in Sidebar */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition active:scale-98"
                  >
                    {ui.finishAndSubmitBtn}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Confirmation Modal before manual submit */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5">
              <div className="text-center space-y-1">
                <span className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-xl mb-2">
                  ⚠️
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  {testLanguage === 'hi' ? 'परीक्षा जमा करने की पुष्टि' : 'Submit Exam Confirmation'}
                </h3>
                <p className="text-xs text-slate-500">
                  {testLanguage === 'hi' 
                    ? 'कृपया अपने उत्तरों की समीक्षा करें। एक बार जमा करने के बाद उत्तर बदले नहीं जा सकेंगे।'
                    : 'Please review your attempt statistics below. Once submitted, answers cannot be edited.'}
                </p>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-2.5 p-4 bg-slate-50 rounded-2xl text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500">{ui.totalQsLabel}:</span>
                  <strong className="text-slate-900 font-black">{selectedTest.questions.length}</strong>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500">{ui.timeRemaining}:</span>
                  <strong className="text-amber-600 font-mono font-black">{formatTimer(secondsRemaining)}</strong>
                </div>
                <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-emerald-900">
                  <span>{ui.answeredLabel}:</span>
                  <strong className="font-black text-emerald-700">{answeredCount}</strong>
                </div>
                <div className="p-2.5 bg-rose-50 rounded-xl border border-rose-200 flex items-center justify-between text-rose-900">
                  <span>{ui.notAnsweredLabel}:</span>
                  <strong className="font-black text-rose-700">{notAnsweredCount}</strong>
                </div>
                <div className="col-span-2 p-2.5 bg-purple-50 rounded-xl border border-purple-200 flex items-center justify-between text-purple-900">
                  <span>{ui.markedReviewLabel}:</span>
                  <strong className="font-black text-purple-700">{markedCount}</strong>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                >
                  {testLanguage === 'hi' ? 'वापस प्रश्न देखें' : 'Review Questions'}
                </button>
                <button
                  type="button"
                  onClick={() => handleFinalSubmit(false)}
                  className="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-lg shadow-rose-600/25 transition"
                >
                  {testLanguage === 'hi' ? 'परीक्षा जमा करें' : 'Confirm & Submit'}
                </button>
              </div>
            </div>
          </div>
        )}

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
    const officialCount = selectedTest.officialTotalQuestions || selectedTest.questions.length;
    const availableCount = selectedTest.questions.length;
    const isFullMock = selectedTest.category === 'Full Mock';

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
                <span className="text-xs font-bold text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-500/30">
                  {resLang === 'hi' ? 'डेटाबेस में सुरक्षित' : 'Saved to Database'}
                </span>
                {selectedTest.sessionName && (
                  <span className="text-xs font-bold text-blue-300 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                    {selectedTest.sessionName}
                  </span>
                )}
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

        {/* Honest Question Bank Evaluation Notice */}
        {isFullMock && availableCount < officialCount && (
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 text-xs space-y-1">
            <div className="font-bold flex items-center space-x-1.5 text-blue-900">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                {testLanguage === 'hi' 
                  ? `आधिकारिक परीक्षा प्रारूप: ${officialCount} प्रश्न (${selectedTest.totalMarks} अंक) | मूल्यांकन: ${availableCount} प्रश्न`
                  : `Official Pattern: ${officialCount} Questions (${selectedTest.totalMarks} Marks) | Evaluated: ${availableCount} Questions`}
              </span>
            </div>
            <p className="text-blue-800">
              {testLanguage === 'hi'
                ? `यह परिणाम सिलेबस बैंक में वर्तमान में उपलब्ध ${availableCount} प्रश्नों के आधार पर तैयार किया गया है। आधिकारिक परीक्षा में कुल ${officialCount} प्रश्न होते हैं।`
                : `This performance score is evaluated on the ${availableCount} verified syllabus questions currently active in the practice test bank.`}
            </p>
          </div>
        )}

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <span className="text-xs font-bold text-slate-400 block">{resUi.correctBadge}</span>
            <div className="text-2xl font-black text-emerald-600 mt-1">{testResult.correctCount}</div>
            <span className="text-[11px] text-slate-500">
              +{testResult.correctCount * (selectedTest.marksPerQuestion || 2)} marks
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
            <span className="text-xs font-bold text-slate-400 block">{resUi.incorrectBadge}</span>
            <div className="text-2xl font-black text-rose-600 mt-1">{testResult.incorrectCount}</div>
            <span className="text-[11px] text-rose-500">
              {selectedTest.negativeMarking > 0 
                ? `-${(testResult.incorrectCount * selectedTest.negativeMarking).toFixed(2)} marks`
                : 'No deduction'}
            </span>
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

        {/* Section-wise Performance Breakdown */}
        {selectedTest.sectionBreakdown && selectedTest.sectionBreakdown.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-slate-900 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-blue-900" />
              <span>{testLanguage === 'hi' ? 'विषयवार प्रदर्शन विश्लेषण' : 'Sectional Performance Analysis'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {selectedTest.sectionBreakdown.map((sec, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 text-xs">
                  <div className="font-bold text-slate-800 truncate">
                    {testLanguage === 'hi' && sec.sectionNameHindi ? sec.sectionNameHindi : sec.sectionName}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {testLanguage === 'hi' ? `उपलब्ध: ${sec.availableQuestions} प्रश्न` : `Available: ${sec.availableQuestions} Qs`}
                  </div>
                  <div className="text-[11px] text-blue-900 font-bold">
                    +{sec.marksPerQuestion} {testLanguage === 'hi' ? 'अंक/प्रश्न' : 'Marks/Q'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
                      {isCorrect 
                        ? `+${(selectedTest.marksPerQuestion || 2).toFixed(1)}` 
                        : isUnattempted 
                        ? resUi.unattemptedZero 
                        : selectedTest.negativeMarking > 0 
                        ? `-${selectedTest.negativeMarking}` 
                        : '0.00'}
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
