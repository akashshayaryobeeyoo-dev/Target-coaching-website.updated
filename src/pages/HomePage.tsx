import React, { useState, useRef } from 'react';
import { 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Users, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Calculator, 
  Brain, 
  Globe, 
  Languages, 
  BookCheck, 
  ChevronRight, 
  TrendingUp, 
  AlertCircle, 
  FileCheck, 
  Phone, 
  MapPin, 
  Navigation, 
  MessageSquare
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabusData';
import { EXAM_DATA } from '../data/examData';
import { SubjectId, ExamId, Question } from '../types';

export const HomePage: React.FC = () => {
  const { 
    setActivePage, 
    setSelectedSubjectId, 
    setSelectedExamId, 
    contactInfo, 
    announcements, 
    submitInquiry,
    teacherPhoto
  } = useApp();

  // Daily Question interactive widget
  const dailyQuestion: Question = SYLLABUS_DATA[0].chapters[0].practiceQuestions[0];
  const [selectedDailyOption, setSelectedDailyOption] = useState<number | null>(null);
  const [dailySubmitted, setDailySubmitted] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const getSubjectIcon = (id: SubjectId) => {
    switch (id) {
      case 'maths': return <Calculator className="w-6 h-6 text-blue-600" />;
      case 'reasoning': return <Brain className="w-6 h-6 text-amber-500" />;
      case 'ga': return <Globe className="w-6 h-6 text-emerald-600" />;
      case 'gk': return <BookOpen className="w-6 h-6 text-purple-600" />;
      case 'hindi': return <Languages className="w-6 h-6 text-orange-600" />;
      case 'english': return <BookCheck className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-12 pb-20 lg:py-24">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-orange-500/20 text-orange-300 border border-orange-400/30">
                  <Target className="w-3.5 h-3.5 text-orange-400" />
                  <span>TARGET COACHING CENTRE</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Head Faculty: Ashvani Sir</span>
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30">
                  ₹{contactInfo.monthlyFee} / Month Flat
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Crack Govt Exams with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Ashvani Sir</span> at Just <span className="text-emerald-400 underline decoration-wavy decoration-orange-500">₹{contactInfo.monthlyFee}/Month</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Premier coaching for <strong className="text-white font-semibold">SSC CGL, CHSL, MTS, GD, Railway NTPC, Group D, UP Police, UPSSSC PET & Army Agniveer</strong>. 
                Complete syllabus from Basic to Advanced with conceptual depth, high-speed calculation tricks, and weekly test series.
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-200 bg-slate-800/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily 4-Hour Classes</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-200 bg-slate-800/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly CBT & OMR Tests</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-200 bg-slate-800/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Study Material</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setActivePage('syllabus');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Complete Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setActivePage('tests');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Start Mock Test</span>
                </button>

                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3.5 rounded-xl bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white font-bold text-sm border border-blue-700/50 transition flex items-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Ashvani Sir Note */}
              <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-500/30 text-xs text-blue-200 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-black flex items-center justify-center shrink-0">
                  A
                </div>
                <p>
                  <em>&ldquo;Hamara lakshya har mehnati vidyarthi ko sabse saste shulk (₹700) me sarvottam shiksha aur sarkari naukri dilana hai.&rdquo;</em> — <strong>Ashvani Sir</strong>
                </p>
              </div>

            </div>

            {/* Right Column: Prominent Teacher Cutout Portrait Layout */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative pt-8 lg:pt-0">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px] flex flex-col items-center justify-end">
                
                {/* Background Curved Orange & White Accent / Circular Accent Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-tr from-orange-500/25 via-amber-500/15 to-blue-600/10 blur-2xl pointer-events-none" />

                {/* Curved Orange & White Border Backdrop Graphic Element */}
                <div className="absolute bottom-3 sm:bottom-5 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full border-4 border-orange-500 ring-4 ring-white/20 bg-gradient-to-b from-orange-500/20 via-orange-600/10 to-blue-950/60 pointer-events-none shadow-[0_0_50px_rgba(249,115,22,0.25)]" />

                {/* Decorative Subtle Geometric Accent Rings */}
                <div className="absolute top-2 -right-1 sm:right-2 w-14 h-14 rounded-full border border-orange-400/40 border-dashed pointer-events-none" />
                <div className="absolute top-10 -left-2 sm:left-2 w-3.5 h-3.5 rounded-full bg-amber-400/70 pointer-events-none" />

                {/* Teacher Photo Cutout Container */}
                <div className="relative z-10 w-full flex items-end justify-center overflow-hidden pt-2 min-h-[350px] sm:min-h-[410px]">
                  {!photoError ? (
                    <img
                      src={teacherPhoto}
                      alt="Ashvani Sir - Head of Centre"
                      onError={() => setPhotoError(true)}
                      className="w-full max-w-[330px] sm:max-w-[370px] lg:max-w-[410px] h-auto max-h-[460px] object-cover object-[center_15%] drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] select-none transition-all duration-300"
                    />
                  ) : (
                    /* Clean Official Graphic Frame */
                    <div className="w-full h-[360px] sm:h-[400px] flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-1 mb-3 shadow-xl">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                          <span className="text-3xl font-black text-orange-400">A</span>
                        </div>
                      </div>
                      <div className="text-xl font-black text-white">Ashvani Sir</div>
                      <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mt-1">
                        Founder & Head Faculty
                      </div>
                      <p className="text-[11px] text-slate-300 mt-2 max-w-[220px]">
                        Quant, Reasoning & GS Specialist • TARGET Coaching Centre
                      </p>
                    </div>
                  )}

                  {/* Natural Bottom Blend into Dark Navy-Blue Hero Background */}
                  <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-10" />
                </div>

                {/* Small, Neat White Identification Card */}
                <div className="absolute bottom-2 sm:bottom-4 left-3 sm:left-6 z-20 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center space-x-3">
                  <div className="w-2.5 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-500 shrink-0" />
                  <div className="leading-tight">
                    <div className="text-sm font-black text-slate-900 tracking-tight flex items-center space-x-1">
                      <span>Ashvani Sir</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 inline" />
                    </div>
                    <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                      Head of Centre
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Announcements & Notice Board Ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-orange-500 text-white shrink-0">
              <AlertCircle className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-900">
                Notice Board & Latest Batch Alert
              </div>
              <div className="text-sm font-semibold text-slate-800">
                {announcements[0]?.title || 'New Batch starting this week! Limited seats.'}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-950 text-white text-xs font-bold whitespace-nowrap transition"
          >
            Visit Centre & Contact →
          </button>
        </div>
      </section>

      {/* Professional Class Timings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200 inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-600" />
              <span>Daily Classroom Timings</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Choose Your Class Timing
            </h2>
            <p className="text-sm text-slate-600">
              Two daily classroom timings for competitive exam preparation.
            </p>
          </div>

          {/* Two Clearly Separated Batch Timing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1: Morning Batch */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 hover:border-orange-500/70 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200">
                    BATCH 1 — MORNING
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    ₹700 / Month
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-950 transition">
                    Morning Batch
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Main Teacher: <strong className="text-slate-800">Ashvani Sir</strong> • TARGET Coaching Centre
                  </p>
                </div>

                {/* Time Display with Clock Icon */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 text-white shadow-inner flex items-center space-x-3.5 border border-blue-900">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Classroom Timing
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-orange-400 tracking-tight">
                      8:20 AM to 12:00 PM
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Live offline lectures & concept-building with Ashvani Sir</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Daily practice questions & 1-on-1 personal doubt clearance</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Classroom Session</span>
                <span className="font-bold text-orange-600">Morning Shift</span>
              </div>
            </div>

            {/* Card 2: Afternoon Batch */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 hover:border-orange-500/70 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-900/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200">
                    BATCH 2 — AFTERNOON
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    ₹700 / Month
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-950 transition">
                    Afternoon Batch
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Main Teacher: <strong className="text-slate-800">Ashvani Sir</strong> • TARGET Coaching Centre
                  </p>
                </div>

                {/* Time Display with Clock Icon */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 text-white shadow-inner flex items-center space-x-3.5 border border-blue-900">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Classroom Timing
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-orange-400 tracking-tight">
                      12:20 PM to 3:00 PM
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complete 6-subject preparation covering basic to advanced</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Daily practice questions & 1-on-1 personal doubt clearance</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Classroom Session</span>
                <span className="font-bold text-blue-900">Afternoon Shift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Separate Subject Sections Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
            6 Core Pillars of Preparation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Comprehensive 6 Subject Sections
          </h2>
          <p className="text-sm text-slate-600">
            Researched from Basic to Advanced with conceptual notes, formulas, solved examples, and chapter-wise tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYLLABUS_DATA.map((subj, index) => (
            <div
              key={subj.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-orange-300 p-6 shadow-sm hover:shadow-xl transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSubjectIcon(subj.id)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Subject 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-900 transition">
                  {subj.name}
                </h3>
                <div className="text-xs font-semibold text-orange-600 mb-2 font-hindi">
                  {subj.hindiName}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {subj.description}
                </p>

                {/* Chapters Preview Pill */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold uppercase text-slate-400">Chapters Included:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {subj.chapters.slice(0, 3).map((ch) => (
                      <span key={ch.id} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium truncate max-w-[190px]">
                        {ch.name}
                      </span>
                    ))}
                    {subj.chapters.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-orange-50 text-orange-700 font-bold">
                        +{subj.chapters.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {subj.totalChapters} Chapters • {subj.totalQuestions}+ Questions
                </span>
                <button
                  onClick={() => {
                    setSelectedSubjectId(subj.id);
                    setActivePage('syllabus');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-900 hover:bg-orange-600 text-white text-xs font-bold transition flex items-center space-x-1"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exams Covered Matrix */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                All Major Vacancies
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                Competitive Exams We Cover
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Comprehensive preparation for SSC, Railway, UP Police, UPSSSC PET, Army Agniveer and other relevant competitive examinations with Ashvani Sir at ₹700/month.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('exam-syllabus');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition"
            >
              View Full Exam-wise Breakdown →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXAM_DATA.slice(0, 6).map((exam) => (
              <div 
                key={exam.examId}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition space-y-3 cursor-pointer"
                onClick={() => {
                  setSelectedExamId(exam.examId);
                  setActivePage('exam-syllabus');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200">
                    {exam.shortName}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    ₹700/mo Batch
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                  {exam.name}
                </h4>
                <div className="space-y-1 text-xs text-slate-500">
                  <div><strong>Eligibility:</strong> {exam.qualification}</div>
                  <div><strong>Age Limit:</strong> {exam.ageLimit}</div>
                  <div><strong>Test Mode:</strong> {exam.stages[0]?.mode}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span>View Exam Pattern & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TARGET Coaching Centre / Ashvani Sir */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30">
              Why TARGET Coaching Centre?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              The Most Honest, Result-Oriented & Affordable Coaching
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              While commercial coaching institutes charge ₹15,000 to ₹30,000 upfront, TARGET Coaching Centre charges only <strong className="text-orange-400 font-bold">₹700 per month</strong>. 
              Ashvani Sir personally conducts classes, solves student doubts, and ensures no student is left behind due to financial barriers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Award className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Ashvani Sir Direct Guidance</div>
                  <div className="text-xs text-slate-400">No inexperienced trainee teachers; learn directly from the master.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Flat ₹700/Month Fee</div>
                  <div className="text-xs text-slate-400">Zero hidden costs, no annual package bondage, pay monthly.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <FileCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Sunday CBT Mock Tests</div>
                  <div className="text-xs text-slate-400">Real exam interface with timer, negative marking, and rank lists.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Personal Doubt Counter</div>
                  <div className="text-xs text-slate-400">Daily 1-on-1 problem-solving sessions after regular classes.</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition"
              >
                Direct Admission Details (₹700/mo) →
              </button>
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition"
              >
                Read Ashvani Sir's Story & Pedagogy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Question of the Day Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-orange-600">
                  Daily Challenge by Ashvani Sir
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                Question of the Day: {dailyQuestion.chapterName}
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                Difficulty: {dailyQuestion.difficulty}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                {dailyQuestion.examTags[0]}
              </span>
            </div>
          </div>

          <div className="py-5 space-y-4">
            <p className="text-base font-semibold text-slate-900">
              {dailyQuestion.question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dailyQuestion.options.map((opt, idx) => {
                const isSelected = selectedDailyOption === idx;
                const isCorrect = idx === dailyQuestion.correctAnswer;
                
                let btnStyle = "border-slate-200 hover:border-blue-400 bg-white text-slate-800";
                if (dailySubmitted) {
                  if (isCorrect) {
                    btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "border-rose-500 bg-rose-50 text-rose-950";
                  }
                } else if (isSelected) {
                  btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                }

                return (
                  <button
                    key={idx}
                    disabled={dailySubmitted}
                    onClick={() => setSelectedDailyOption(idx)}
                    className={`p-3.5 rounded-xl border text-left text-sm transition flex items-center space-x-3 ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {!dailySubmitted ? (
              <div className="flex justify-end pt-2">
                <button
                  disabled={selectedDailyOption === null}
                  onClick={() => setDailySubmitted(true)}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition"
                >
                  Submit & Check Answer
                </button>
              </div>
            ) : (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 animate-fadeIn">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">
                    Correct Option: {String.fromCharCode(65 + dailyQuestion.correctAnswer)} ({dailyQuestion.options[dailyQuestion.correctAnswer]})
                  </span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <strong>Explanation:</strong> {dailyQuestion.explanation}
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      setActivePage('tests');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-blue-900 hover:text-orange-600 flex items-center space-x-1"
                  >
                    <span>Attempt Full Mock Tests →</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Homepage Contact Section - Visit Centre & Direct Contact Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-3xl p-6 sm:p-10 border border-blue-900/40 shadow-2xl text-white relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-orange-400 bg-orange-500/20 px-3.5 py-1 rounded-full border border-orange-500/30">
                Contact Us & Visit Centre
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Visit Target Coaching Classes in Baraut
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct classroom guidance by <strong>Ashvani Sir</strong> for SSC, Railway, UP Police, UPSSSC PET & Army Agniveer. No online form filling required.
              </p>
            </div>

            {/* 3 Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: Complete Address */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">Coaching Address</h3>
                    <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                      <strong className="text-white block font-semibold">Target Coaching Classes</strong>
                      Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition flex items-center justify-center space-x-1.5 text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Card 2: Phone Call */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">Phone Call</h3>
                    <div className="text-xs text-slate-300 mt-1">
                      <span>Direct line with Ashvani Sir:</span>
                      <div className="text-base font-extrabold text-white mt-0.5">097594 46215</div>
                      <span className="text-[11px] text-slate-400 block mt-0.5">7:00 AM – 8:00 PM Daily</span>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:09759446215"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Card 3: WhatsApp Chat */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">WhatsApp Helpdesk</h3>
                    <div className="text-xs text-slate-300 mt-1">
                      <span>Instant query & batch info:</span>
                      <div className="text-base font-extrabold text-white mt-0.5">097594 46215</div>
                      <span className="text-[11px] text-emerald-400 block mt-0.5">WhatsApp / WhatsApp Web</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919759446215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bottom Highlights Banner */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Monthly Coaching Fee: <strong className="text-orange-400 font-bold">₹{contactInfo.monthlyFee} Flat</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free 2-Day Classroom Demo Session with Ashvani Sir</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Form Filling • Direct Walk-In Admission</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
