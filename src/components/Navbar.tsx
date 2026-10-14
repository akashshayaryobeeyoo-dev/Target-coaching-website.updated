import React, { useState } from 'react';
import { 
  Target, 
  Menu, 
  X, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  HelpCircle, 
  User, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  Calculator,
  Brain,
  Globe,
  Languages,
  BookCheck,
  CheckCircle2
} from 'lucide-react';
import { useApp, PageId } from '../context/AppContext';
import { SubjectId } from '../types';

export const Navbar: React.FC = () => {
  const { 
    activePage, 
    setActivePage, 
    contactInfo, 
    setSelectedSubjectId 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [syllabusDropdownOpen, setSyllabusDropdownOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <Target className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'syllabus', label: 'Complete Syllabus', icon: <FileText className="w-4 h-4" />, badge: '6 Subjects' },
    { id: 'tests', label: 'Mock Tests', icon: <HelpCircle className="w-4 h-4" />, badge: 'CBT' },
    { id: 'contact', label: 'Contact Us', icon: <Phone className="w-4 h-4" /> },
  ];

  const subjectsQuick: { id: SubjectId; name: string; icon: React.ReactNode }[] = [
    { id: 'maths', name: 'Mathematics', icon: <Calculator className="w-4 h-4 text-blue-500" /> },
    { id: 'reasoning', name: 'Reasoning', icon: <Brain className="w-4 h-4 text-amber-500" /> },
    { id: 'ga', name: 'General Awareness', icon: <Globe className="w-4 h-4 text-emerald-500" /> },
    { id: 'gk', name: 'General Knowledge', icon: <BookOpen className="w-4 h-4 text-purple-500" /> },
    { id: 'hindi', name: 'General Hindi', icon: <Languages className="w-4 h-4 text-orange-500" /> },
    { id: 'english', name: 'General English', icon: <BookCheck className="w-4 h-4 text-cyan-500" /> },
  ];

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setSyllabusDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubjectClick = (subjId: SubjectId) => {
    setSelectedSubjectId(subjId);
    setActivePage('syllabus');
    setSyllabusDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      {/* Top Banner Alert Strip */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 font-medium">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-500 text-white uppercase tracking-wider animate-pulse">
              Admissions Open
            </span>
            <span className="hidden sm:inline text-slate-300">
              TARGET Coaching Centre — Under Direct Guidance of 
            </span>
            <span className="text-orange-400 font-semibold">
              Ashvani Sir
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              Monthly Fee: ₹{contactInfo.monthlyFee} Only
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300 text-[11px]">
            <a 
              href="tel:09759446215"
              className="flex items-center space-x-1 hover:text-orange-400 transition"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span>097594 46215</span>
            </a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline text-orange-400 hover:text-orange-300 font-medium"
            >
              Enquiry & Callback
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group select-none py-2"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform border border-blue-700/30">
              <div className="relative">
                <Target className="w-7 h-7 text-orange-500 animate-spin-slow" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-blue-900"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black tracking-tight text-slate-950 font-serif">
                  TARGET
                </span>
                <span className="text-xs px-2 py-0.5 font-bold uppercase rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                  ₹{contactInfo.monthlyFee}/mo
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-600 font-medium">
                <span className="text-blue-900 font-semibold tracking-wide">COACHING CENTRE</span>
                <span className="text-slate-300">•</span>
                <span className="text-orange-600 font-bold">Ashvani Sir</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              
              if (item.id === 'syllabus') {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleNavClick('syllabus')}
                      onMouseEnter={() => setSyllabusDropdownOpen(true)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center space-x-1.5 ${
                        isActive 
                          ? 'bg-blue-900 text-white shadow-sm' 
                          : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                    </button>

                    {/* Syllabus Mega Menu Dropdown */}
                    <div 
                      onMouseLeave={() => setSyllabusDropdownOpen(false)}
                      className={`absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 transition-all duration-200 ${
                        syllabusDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Select Subject (Basic to Advanced)
                      </div>
                      {subjectsQuick.map((subj) => (
                        <button
                          key={subj.id}
                          onClick={() => handleSubjectClick(subj.id)}
                          className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center space-x-2.5 transition"
                        >
                          {subj.icon}
                          <span>{subj.name}</span>
                        </button>
                      ))}
                      <div className="p-2 border-t border-slate-100 bg-slate-50 mt-1">
                        <button
                          onClick={() => handleNavClick('syllabus')}
                          className="w-full text-center py-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                        >
                          View All 6 Subjects Syllabus →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition relative flex items-center space-x-1.5 ${
                    isActive 
                      ? 'bg-blue-900 text-white shadow-sm' 
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:09759446215"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 text-slate-700 hover:text-blue-950 hover:border-blue-900 transition flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call: 097594 46215</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-md shadow-orange-500/25 transition transform active:scale-95 flex items-center space-x-1.5"
            >
              <span>Contact Us (@ ₹{contactInfo.monthlyFee}/mo)</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-orange-600 text-white sm:hidden"
            >
              ₹{contactInfo.monthlyFee}/mo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Ashvani Sir & Fee Banner in Mobile */}
          <div className="p-3 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-xl mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-orange-400">Head Faculty: Ashvani Sir</div>
              <div className="text-[11px] text-slate-300">All Govt Competitive Exams</div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-300">Monthly:</span>
              <div className="text-base font-extrabold text-emerald-400">₹{contactInfo.monthlyFee}</div>
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={isActive ? 'text-orange-400' : 'text-slate-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Subject Access in Drawer */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
              6 Subjects Direct Access
            </div>
            <div className="grid grid-cols-2 gap-2">
              {subjectsQuick.map((subj) => (
                <button
                  key={subj.id}
                  onClick={() => handleSubjectClick(subj.id)}
                  className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-left text-xs font-semibold text-slate-700 flex items-center space-x-2 border border-slate-200"
                >
                  {subj.icon}
                  <span className="truncate">{subj.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:09759446215"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center shadow-md flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Ashvani Sir (097594 46215)</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs text-center shadow-md shadow-orange-500/20"
            >
              Contact Us & Visit Centre (₹{contactInfo.monthlyFee}/mo)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
