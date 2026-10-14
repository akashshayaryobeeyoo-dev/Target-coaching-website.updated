import React from 'react';
import { 
  Award, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  HeartHandshake, 
  Users, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AshvaniSirPhoto } from '../components/AshvaniSirPhoto';

export const AboutPage: React.FC = () => {
  const { contactInfo, setActivePage } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
          About TARGET Coaching Centre
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Empowering Government Job Aspirants with <span className="text-blue-900">Ashvani Sir</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Founded with a sole mission: to provide the highest standard of competitive exam education to every aspiring youth at an honest, non-commercial fee of just <strong className="text-orange-600 font-bold">₹{contactInfo.monthlyFee} per month</strong>.
        </p>
      </div>

      {/* Ashvani Sir Bio Profile */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
            <div className="w-52 max-w-full">
              <AshvaniSirPhoto showBadge={false} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Ashvani Sir</h2>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Founder, Director & Main Faculty
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Quantitative Aptitude, Reasoning & GS Specialist
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              10+ Years Dedicated Teaching Experience
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-slate-700 text-sm leading-relaxed border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
            <h3 className="text-xl font-black text-blue-950">
              Teaching Methodology & Pedagogical Philosophy
            </h3>
            <p>
              Under the direct leadership of <strong>Ashvani Sir</strong>, TARGET Coaching Centre has transformed into the premier learning sanctuary for candidates preparing for <strong>SSC CGL, CHSL, MTS, GD, Railway NTPC, Group D, UP Police, UPSSSC PET, and Army Agniveer</strong>.
            </p>
            <p>
              Ashvani Sir believes that true mastery in competitive examinations is not born from rote memorization of thousands of formulas. Instead, it follows his signature four-step progression:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                <div className="text-xs font-black text-blue-900">Step 1: Ground-Level Concept Clarity</div>
                <div className="text-xs text-slate-600 mt-0.5">Every theorem, grammar rule, and formula is explained from the very origin.</div>
              </div>

              <div className="p-3 rounded-xl bg-orange-50 border border-orange-100">
                <div className="text-xs font-black text-orange-900">Step 2: Ashvani Sir Speed Tricks</div>
                <div className="text-xs text-slate-600 mt-0.5">Option elimination, digit sum, and unit-digit shortcuts to solve in under 25 seconds.</div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="text-xs font-black text-emerald-900">Step 3: Rigorous Speed Drills</div>
                <div className="text-xs text-slate-600 mt-0.5">Timed chapter-wise practice tests with instant error correction.</div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                <div className="text-xs font-black text-purple-900">Step 4: Simulated CBT & OMR Mocks</div>
                <div className="text-xs text-slate-600 mt-0.5">Weekly full-length test series strictly matching official exam environment.</div>
              </div>
            </div>

            <div className="pt-2 font-hindi text-slate-800 italic bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              &ldquo;हमारा मानना है कि प्रतिभा किसी बड़े शहर या महंगी फीस की मोहताज नहीं होती। सही मार्गदर्शन और निरंतर अभ्यास से कोई भी साधारण छात्र असाधारण परिणाम हासिल कर सकता है।&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Why ₹700/Month? Mission Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            Social Mission & Fair Fees
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">
            The Purpose Behind the Flat ₹700/Month Fee Structure
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            In modern commercial coaching, private institutes demand upfront annual fees ranging between ₹15,000 and ₹40,000, forcing rural and middle-class parents into debt. 
            At <strong>TARGET Coaching Centre</strong>, Ashvani Sir dismantled this business model:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 pt-2">
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Zero Admission Fees:</strong> No registration or hidden joining costs.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Month-by-Month Freedom:</strong> Students pay ₹700 every month; continuous satisfaction is our only contract.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Complete Material Included:</strong> Printed practice sheets and formulas booklets are distributed without extra charge.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Infrastructure & Facilities */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
            Classroom Infrastructure
          </span>
          <h3 className="text-2xl font-black text-slate-900">
            Conducive Learning Environment at the Centre
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
              🖥️
            </div>
            <h4 className="text-base font-bold text-slate-900">Dedicated CBT Lab</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped computer terminal systems simulating the real TCS exam environment so students master computer mouse navigation and time management.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              📖
            </div>
            <h4 className="text-base font-bold text-slate-900">Peaceful Self-Study Library</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quiet library space open from 7:00 AM to 8:00 PM with newspaper racks, reference books, and fast WiFi for uninterrupted self-study.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              🎯
            </div>
            <h4 className="text-base font-bold text-slate-900">Ashvani Sir Doubt Cabin</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Daily post-class one-on-one session where students can bring any difficult question from books or previous year papers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-blue-950">
            Ready to Begin Your Preparation with Ashvani Sir?
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Reserve your seat in the upcoming batch today. Monthly fee is ₹{contactInfo.monthlyFee} only.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              setActivePage('syllabus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition"
          >
            Explore Complete Syllabus
          </button>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition"
          >
            Contact Us & Visit Centre
          </button>
        </div>
      </div>
    </div>
  );
};
