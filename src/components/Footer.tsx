import React from 'react';
import { 
  Target, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Award, 
  ShieldCheck, 
  MessageSquare,
  ArrowUp,
  Navigation
} from 'lucide-react';
import { useApp, PageId } from '../context/AppContext';
import { SubjectId, ExamId } from '../types';

export const Footer: React.FC = () => {
  const { 
    setActivePage, 
    contactInfo, 
    setSelectedSubjectId, 
    setSelectedExamId 
  } = useApp();

  const handleNav = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubject = (sId: SubjectId) => {
    setSelectedSubjectId(sId);
    setActivePage('syllabus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExam = (eId: ExamId) => {
    setSelectedExamId(eId);
    setActivePage('exam-syllabus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-800/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">
                Affordable Quality Education with Ashvani Sir
              </div>
              <p className="text-sm text-slate-300 mt-1">
                Full competitive batch preparation at only <span className="text-orange-400 font-bold">₹700/month</span>. No admission fee, free study notes & weekly mock tests.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <a
              href="tel:09759446215"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919759446215"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg transition flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-lg shadow-orange-500/25 transition flex items-center space-x-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Institute About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-orange-400 border border-blue-700">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-wide">TARGET</span>
                <span className="text-xs block text-orange-400 font-semibold tracking-wider uppercase">COACHING CENTRE</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Founded & led by <strong className="text-white">Ashvani Sir</strong>, dedicated to guiding candidates to crack SSC, Railway, UP Police, UPSSSC PET and Defence exams with conceptual clarity and high-speed problem solving.
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Monthly Fee: <strong>₹{contactInfo.monthlyFee} Flat</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Offline + Online Hybrid Doubt Sessions</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Printed Topic Handouts & Weekly CBT</span>
              </div>
            </div>
          </div>

          {/* Col 2: 6 Subject Portals */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              6 Subject Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleSubject('maths')} className="hover:text-orange-400 transition flex items-center space-x-1.5">
                  <span className="text-slate-500">1.</span>
                  <span>Mathematics (Quantitative & Advanced)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleSubject('reasoning')} className="hover:text-orange-400 transition flex items-center space-x-1.5">
                  <span className="text-slate-500">2.</span>
                  <span>Reasoning (Verbal & Non-Verbal)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleSubject('ga')} className="hover:text-orange-400 transition flex items-center space-x-1.5">
                  <span className="text-slate-500">3.</span>
                  <span>General Awareness (GA & Economy)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleSubject('gk')} className="hover:text-orange-400 transition flex items-center space-x-1.5">
                  <span className="text-slate-500">4.</span>
                  <span>General Knowledge (History, Polity, Science)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleSubject('hindi')} className="hover:text-orange-400 transition flex items-center space-x-1.5">
                  <span className="text-slate-500">5.</span>
                  <span>General Hindi (सामान्य हिन्दी)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleSubject('english')} className="hover:text-orange-400 transition flex items-center space-x-1.5">
                  <span className="text-slate-500">6.</span>
                  <span>General English (Grammar & Vocab)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Exams Mapped */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Govt Exams Covered
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => handleExam('ssc-cgl')} className="hover:text-blue-400 transition">
                  • SSC CGL (Tier I & Tier II)
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('ssc-chsl')} className="hover:text-blue-400 transition">
                  • SSC CHSL (10+2 Level)
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('ssc-gd')} className="hover:text-blue-400 transition">
                  • SSC GD Constable
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('ssc-mts')} className="hover:text-blue-400 transition">
                  • SSC MTS & Havaldar
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('railway-ntpc')} className="hover:text-blue-400 transition">
                  • Railway NTPC (CBT 1 & CBT 2)
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('railway-group-d')} className="hover:text-blue-400 transition">
                  • Railway Group D (RRC Level 1)
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('up-police')} className="hover:text-blue-400 transition">
                  • UP Police Constable & Sub Inspector
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('upsssc-pet')} className="hover:text-blue-400 transition">
                  • UPSSSC PET, Lekhpal & VDO
                </button>
              </li>
              <li>
                <button onClick={() => handleExam('army-agniveer')} className="hover:text-blue-400 transition">
                  • Army Agniveer (GD, Clerk, Tech)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Centre Location & Timings */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Centre Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-bold">Target Coaching Classes</strong>
                  Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <a href="tel:09759446215" className="font-bold text-white hover:text-orange-400 hover:underline">
                    097594 46215
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline truncate">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{contactInfo.timings}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:09759446215"
                  className="px-2.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition text-center shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919759446215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition text-center shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 rounded-lg bg-blue-900/80 hover:bg-blue-800 border border-blue-700/60 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-orange-400" />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-orange-400 font-semibold">₹{contactInfo.monthlyFee}/mo Direct Admission</span>
              <button
                onClick={scrollToTop}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} <strong>Target Coaching Classes</strong> (TARGET). Head Faculty: <strong>Ashvani Sir</strong>. Monthly Fee: <strong>₹{contactInfo.monthlyFee}</strong>.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500 hidden md:inline">
              Syllabus verified against official notifications (SSC, RRB, UP Police & Army).
            </span>
            <button
              onClick={() => {
                setActivePage('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-slate-500 hover:text-orange-400 transition flex items-center space-x-1 underline decoration-dotted"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
