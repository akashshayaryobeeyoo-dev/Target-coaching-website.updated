import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Brain, 
  Globe, 
  BookOpen, 
  Languages, 
  BookCheck, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  FileText, 
  HelpCircle, 
  Check, 
  Award,
  Clock,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabusData';
import { SubjectId, DifficultyLevel, ExamId, Chapter, Question } from '../types';

export const CompleteSyllabusPage: React.FC = () => {
  const { 
    selectedSubjectId, 
    setSelectedSubjectId, 
    searchQuery, 
    setSearchQuery,
    student,
    toggleTopicCompletion,
    toggleBookmarkQuestion,
    setActivePage,
    setSelectedExamId
  } = useApp();

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('All');
  const [expandedChapterIds, setExpandedChapterIds] = useState<Record<string, boolean>>({
    'math-ch1': true,
    'reas-ch1': true,
    'ga-ch1': true,
    'gk-ch1': true,
    'hin-ch1': true,
    'eng-ch1': true,
  });

  // Track active sub-tab inside chapter: 'theory' | 'examples' | 'mcqs'
  const [activeTabPerChapter, setActiveTabPerChapter] = useState<Record<string, 'theory' | 'examples' | 'mcqs'>>({});

  // Question answers state for interactive MCQ practice
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const currentSubject = useMemo(() => {
    return SYLLABUS_DATA.find(s => s.id === selectedSubjectId) || SYLLABUS_DATA[0];
  }, [selectedSubjectId]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapterIds(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const handleExpandAll = () => {
    const next: Record<string, boolean> = {};
    currentSubject.chapters.forEach(ch => {
      next[ch.id] = true;
    });
    setExpandedChapterIds(next);
  };

  const handleCollapseAll = () => {
    setExpandedChapterIds({});
  };

  const getChapterTab = (chapterId: string) => {
    return activeTabPerChapter[chapterId] || 'theory';
  };

  const setChapterTab = (chapterId: string, tab: 'theory' | 'examples' | 'mcqs') => {
    setActiveTabPerChapter(prev => ({
      ...prev,
      [chapterId]: tab
    }));
  };

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
    setRevealedSolutions(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  // Filter chapters based on search query, difficulty, exam filter
  const filteredChapters = useMemo(() => {
    return currentSubject.chapters.filter(chapter => {
      // Difficulty match
      if (selectedDifficulty !== 'All' && chapter.difficulty !== selectedDifficulty) {
        return false;
      }

      // Exam match
      if (selectedExamFilter !== 'All') {
        const matchesExam = chapter.relevantExams.some(e => e === selectedExamFilter);
        if (!matchesExam) return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = chapter.name.toLowerCase().includes(query) || 
          (chapter.nameHindi && chapter.nameHindi.toLowerCase().includes(query)) ||
          chapter.description.toLowerCase().includes(query);

        const matchesTopics = chapter.topics.some(t => 
          t.title.toLowerCase().includes(query) ||
          t.subtopics.some(sub => sub.toLowerCase().includes(query)) ||
          (t.keyFormulasOrRules && t.keyFormulasOrRules.some(r => r.toLowerCase().includes(query)))
        );

        const matchesQuestions = chapter.practiceQuestions.some(q => 
          q.question.toLowerCase().includes(query) ||
          q.explanation.toLowerCase().includes(query)
        );

        return matchesName || matchesTopics || matchesQuestions;
      }

      return true;
    });
  }, [currentSubject, selectedDifficulty, selectedExamFilter, searchQuery]);

  const getSubjectIcon = (id: SubjectId) => {
    switch (id) {
      case 'maths': return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'reasoning': return <Brain className="w-5 h-5 text-amber-500" />;
      case 'ga': return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'gk': return <BookOpen className="w-5 h-5 text-purple-600" />;
      case 'hindi': return <Languages className="w-5 h-5 text-orange-600" />;
      case 'english': return <BookCheck className="w-5 h-5 text-cyan-600" />;
    }
  };

  const getDifficultyBadge = (level: DifficultyLevel) => {
    switch (level) {
      case 'Basic':
        return <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">Basic</span>;
      case 'Intermediate':
        return <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">Intermediate</span>;
      case 'Advanced':
        return <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">Advanced</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Title & Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
          Curriculum by Ashvani Sir
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Complete Syllabus: Basic to Advanced
        </h1>
        <p className="text-sm text-slate-600">
          Explore all 6 competitive subjects structured into chapters, topics, formulas, solved examples, and practice tests.
        </p>
      </div>

      {/* 6 Subject Selectors (Horizontal Pills/Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {SYLLABUS_DATA.map((subj) => {
          const isSelected = selectedSubjectId === subj.id;
          return (
            <button
              key={subj.id}
              onClick={() => setSelectedSubjectId(subj.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-900 text-white border-blue-900 shadow-lg shadow-blue-900/20 scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/10' : 'bg-slate-100'}`}>
                  {getSubjectIcon(subj.id)}
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {subj.totalChapters} Ch
                </span>
              </div>
              <div>
                <div className="text-xs font-black leading-tight truncate">
                  {subj.name}
                </div>
                <div className={`text-[10px] font-hindi truncate mt-0.5 ${isSelected ? 'text-orange-300' : 'text-slate-500'}`}>
                  {subj.hindiName}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search in ${currentSubject.name} (e.g. Divisibility, Sandhi, Compound Interest, Articles)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none font-medium"
            >
              <option value="All">All Difficulty Levels</option>
              <option value="Basic">Basic Only (प्रारम्भिक)</option>
              <option value="Intermediate">Intermediate Only (मध्यम)</option>
              <option value="Advanced">Advanced Only (उच्च स्तर)</option>
            </select>
          </div>

          {/* Exam Mapping Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedExamFilter}
              onChange={(e) => setSelectedExamFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none font-medium"
            >
              <option value="All">All Mapped Exams</option>
              <option value="ssc-cgl">SSC CGL</option>
              <option value="ssc-chsl">SSC CHSL</option>
              <option value="ssc-gd">SSC GD</option>
              <option value="railway-ntpc">Railway NTPC</option>
              <option value="railway-group-d">Railway Group D</option>
              <option value="up-police">UP Police</option>
              <option value="upsssc-pet">UPSSSC PET</option>
              <option value="army-agniveer">Army Agniveer</option>
            </select>
          </div>

        </div>

        {/* Results Count & Quick Tips */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span>
              Showing <strong>{filteredChapters.length}</strong> of {currentSubject.chapters.length} Chapters in <strong>{currentSubject.name}</strong>
            </span>
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={handleExpandAll}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition flex items-center space-x-1"
                title="Expand all chapters in this subject"
              >
                <span>Expand All</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition flex items-center space-x-1"
                title="Collapse all chapters"
              >
                <span>Collapse All</span>
                <ChevronUp className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-[11px]">
            <span className="flex items-center space-x-1 text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Theory & Rules</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1 text-blue-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Solved Examples</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1 text-orange-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>Chapter MCQs</span>
            </span>
          </div>
        </div>
      </div>

      {/* Chapters Accordion List */}
      <div className="space-y-6">
        {filteredChapters.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <FileText className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No matching chapters or topics found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search keywords or resetting your difficulty/exam filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty('All');
                setSelectedExamFilter('All');
              }}
              className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredChapters.map((chapter, chapterIndex) => {
            const isExpanded = !!expandedChapterIds[chapter.id];
            const activeTab = getChapterTab(chapter.id);

            return (
              <div
                key={chapter.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition hover:border-slate-300"
              >
                {/* Chapter Banner Header (Click to Expand) */}
                <div
                  onClick={() => toggleChapter(chapter.id)}
                  className="p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/80 cursor-pointer flex items-center justify-between transition select-none border-b border-slate-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                      CH {chapterIndex + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          {chapter.name}
                        </h3>
                        {chapter.nameHindi && (
                          <span className="text-xs font-hindi text-slate-600 font-semibold">
                            ({chapter.nameHindi})
                          </span>
                        )}
                        {getDifficultyBadge(chapter.difficulty)}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 max-w-2xl">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="hidden sm:inline-flex text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      ~{chapter.estimatedHours} Hours
                    </span>
                    <button className="p-1 rounded-lg text-slate-500 hover:text-slate-800">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Chapter Body (When Expanded) */}
                {isExpanded && (
                  <div className="p-5 sm:p-7 space-y-6">
                    {/* Chapter Sub-Tabs Switcher */}
                    <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                      <button
                        onClick={() => setChapterTab(chapter.id, 'theory')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                          activeTab === 'theory'
                            ? 'bg-blue-900 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>1. Theory, Topics & Rules ({chapter.topics.length})</span>
                      </button>

                      <button
                        onClick={() => setChapterTab(chapter.id, 'examples')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                          activeTab === 'examples'
                            ? 'bg-blue-900 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>2. Solved Examples & Shortcuts</span>
                      </button>

                      <button
                        onClick={() => setChapterTab(chapter.id, 'mcqs')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                          activeTab === 'mcqs'
                            ? 'bg-orange-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>3. Practice MCQs ({chapter.practiceQuestions.length})</span>
                      </button>
                    </div>

                    {/* TAB 1: Theory, Topics & Subtopics */}
                    {activeTab === 'theory' && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          {chapter.topics.map((topic, tIdx) => {
                            const isCompleted = student.completedTopics.includes(topic.id);

                            return (
                              <div
                                key={topic.id}
                                className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
                              >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                                  <div className="flex items-center space-x-2.5">
                                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">
                                      {tIdx + 1}
                                    </span>
                                    <div>
                                      <h4 className="text-sm font-black text-slate-900">
                                        {topic.title}
                                      </h4>
                                      {topic.titleHindi && (
                                        <div className="text-[11px] font-hindi text-slate-500 font-semibold">
                                          {topic.titleHindi}
                                        </div>
                                      )}
                                    </div>
                                    {getDifficultyBadge(topic.difficulty)}
                                  </div>

                                  {/* Student Progress Checklist Button */}
                                  <button
                                    onClick={() => toggleTopicCompletion(topic.id)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                                      isCompleted
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'bg-white border border-slate-300 text-slate-700 hover:border-emerald-500'
                                    }`}
                                  >
                                    <CheckCircle className="w-3.5 h-3.5" />
                                    <span>{isCompleted ? 'Topic Mastered ✓' : 'Mark Completed'}</span>
                                  </button>
                                </div>

                                {/* Subtopics bullet list */}
                                <div>
                                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Subtopics & Concepts:
                                  </div>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                                    {topic.subtopics.map((sub, sIdx) => (
                                      <li key={sIdx} className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5"></span>
                                        <span>{sub}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Key Formulas or Rules Box */}
                                {topic.keyFormulasOrRules && topic.keyFormulasOrRules.length > 0 && (
                                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                                    <div className="flex items-center space-x-1.5 font-black text-amber-900 text-xs">
                                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                      <span>Ashvani Sir Key Formulas / Grammar Rules:</span>
                                    </div>
                                    <ul className="space-y-1 pl-4 list-disc">
                                      {topic.keyFormulasOrRules.map((rule, rIdx) => (
                                        <li key={rIdx} className="font-mono text-[11px]">
                                          {rule}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Exam Mapping Pills */}
                                <div className="flex items-center space-x-2 pt-1 text-[11px] text-slate-500">
                                  <span>Relevant in:</span>
                                  <div className="flex flex-wrap gap-1">
                                    {topic.examMapping.map((exId) => (
                                      <button
                                        key={exId}
                                        onClick={() => {
                                          setSelectedExamId(exId);
                                          setActivePage('exam-syllabus');
                                          window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-bold hover:bg-blue-100 uppercase text-[10px]"
                                      >
                                        {exId.replace('-', ' ')}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* TAB 2: Solved Examples with Step-by-Step & Shortcuts */}
                    {activeTab === 'examples' && (
                      <div className="space-y-4">
                        {chapter.topics.flatMap(t => t.solvedExamples || []).length === 0 ? (
                          <div className="p-8 text-center text-xs text-slate-500">
                            No standalone solved examples recorded for this chapter yet.
                          </div>
                        ) : (
                          chapter.topics.flatMap(t => t.solvedExamples || []).map((ex, exIdx) => (
                            <div
                              key={ex.id || exIdx}
                              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3"
                            >
                              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                <span className="text-xs font-black text-blue-900">
                                  Solved Example 0{exIdx + 1}
                                </span>
                                {ex.examAppearance && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                                    Asked in: {ex.examAppearance}
                                  </span>
                                )}
                              </div>

                              <div className="text-sm font-semibold text-slate-900">
                                <strong>Question:</strong> {ex.problem}
                              </div>

                              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 whitespace-pre-line leading-relaxed font-mono">
                                <strong className="font-sans text-slate-900 block mb-1">Step-by-Step Solution:</strong>
                                {ex.solution}
                              </div>

                              {ex.trickOrTip && (
                                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start space-x-2">
                                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <div>
                                    <strong>Shortcut Tip:</strong> {ex.trickOrTip}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    )}

                    {/* TAB 3: Chapter Practice MCQs */}
                    {activeTab === 'mcqs' && (
                      <div className="space-y-6">
                        <div className="text-xs text-slate-500 flex items-center justify-between pb-2 border-b border-slate-100">
                          <span>Practice these {chapter.practiceQuestions.length} official level multiple choice questions.</span>
                          <span className="text-orange-600 font-bold">Immediate Answer & Explanation</span>
                        </div>

                        {chapter.practiceQuestions.map((q, qIdx) => {
                          const selectedOption = selectedAnswers[q.id];
                          const isRevealed = revealedSolutions[q.id];
                          const isBookmarked = student.bookmarkedQuestionIds.includes(q.id);

                          return (
                            <div
                              key={q.id}
                              className="p-5 rounded-2xl border border-slate-200 bg-white space-y-4 hover:border-blue-300 transition"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs font-black text-slate-400">Q{qIdx + 1}.</span>
                                    {getDifficultyBadge(q.difficulty)}
                                    {q.examTags.map((tag, tIdx) => (
                                      <span key={tIdx} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <p className="text-sm font-semibold text-slate-900">
                                    {q.question}
                                  </p>
                                </div>

                                <button
                                  onClick={() => toggleBookmarkQuestion(q.id)}
                                  className={`p-2 rounded-xl border transition ${
                                    isBookmarked
                                      ? 'bg-amber-50 text-amber-600 border-amber-300'
                                      : 'bg-slate-50 text-slate-400 border-slate-200 hover:text-slate-700'
                                  }`}
                                  title="Bookmark for Revision"
                                >
                                  {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                                </button>
                              </div>

                              {/* 4 Options Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {q.options.map((opt, optIdx) => {
                                  const isOptionSelected = selectedOption === optIdx;
                                  const isCorrect = optIdx === q.correctAnswer;

                                  let optionClass = "border-slate-200 bg-white text-slate-800 hover:border-blue-400";
                                  if (isRevealed) {
                                    if (isCorrect) {
                                      optionClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                                    } else if (isOptionSelected && !isCorrect) {
                                      optionClass = "border-rose-500 bg-rose-50 text-rose-950";
                                    }
                                  } else if (isOptionSelected) {
                                    optionClass = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                                  }

                                  return (
                                    <button
                                      key={optIdx}
                                      onClick={() => handleSelectOption(q.id, optIdx)}
                                      className={`p-3 rounded-xl border text-left text-xs transition flex items-center space-x-2.5 ${optionClass}`}
                                    >
                                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center justify-center shrink-0">
                                        {String.fromCharCode(65 + optIdx)}
                                      </span>
                                      <span className="leading-tight">{opt}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Solution explanation */}
                              {isRevealed && (
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs animate-fadeIn">
                                  <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                                    <span className="font-bold text-slate-900">
                                      Correct Answer: Option {String.fromCharCode(65 + q.correctAnswer)} ({q.options[q.correctAnswer]})
                                    </span>
                                  </div>
                                  <div className="text-slate-700 leading-relaxed pl-6">
                                    <strong>Explanation:</strong> {q.explanation}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
