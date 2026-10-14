import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Target,
  Navigation
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { contactInfo } = useApp();

  const faqs = [
    {
      q: 'Is there a free demo class before paying the ₹700 monthly fee?',
      a: 'Yes, students are welcome to attend 2 full days of live classroom demo sessions with Ashvani Sir to experience his teaching methodology before submitting fees.'
    },
    {
      q: 'Can a student join in the middle of a month?',
      a: 'Absolutely! Our syllabus is cyclic and modular. You can join at any time and your monthly cycle begins from your joining date.'
    },
    {
      q: 'Are mock test papers and study material charged extra?',
      a: 'No! Everything is covered within the flat ₹700 monthly fee. We provide all printed worksheets, trick formula registers, and Sunday CBT tests with zero extra charges.'
    },
    {
      q: 'How does Ashvani Sir solve personal student doubts?',
      a: 'Ashvani Sir stays at the centre daily until 8:00 PM. A dedicated 1-on-1 doubt cabin is open after classes where students can bring any unsolved question.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
          Reach Out to Ashvani Sir & Team
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Contact Target Coaching Classes
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Have queries regarding competitive batches, syllabus coverage, or centre visit? Call or visit us directly in Baraut.
        </p>
      </div>

      {/* 4 Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Phone Call Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Phone Number</h3>
            <div className="space-y-1 text-xs text-slate-600">
              <div>
                <a href="tel:09759446215" className="hover:text-orange-600 font-extrabold text-sm text-slate-900 block">
                  097594 46215
                </a>
              </div>
              <span className="text-[10px] text-slate-400 block">Direct Line: Ashvani Sir</span>
            </div>
          </div>
          <a
            href="tel:09759446215"
            className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 text-center mt-3"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
        </div>

        {/* WhatsApp Helpdesk */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">WhatsApp Helpdesk</h3>
            <div className="text-xs text-slate-600">
              <span>Direct WhatsApp Chat:</span>
              <div className="font-extrabold text-sm text-slate-900 mt-0.5">097594 46215</div>
              <span className="text-[10px] text-emerald-700 font-semibold block mt-1">Instant query response</span>
            </div>
          </div>
          <a
            href="https://wa.me/919759446215"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 text-center mt-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Centre Address & Directions */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Physical Address</h3>
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="block text-slate-900 font-bold">Target Coaching Classes</strong>
              Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5 text-center mt-3"
          >
            <Navigation className="w-3.5 h-3.5 text-orange-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Centre Timings */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Centre Timings</h3>
            <div className="text-xs text-slate-600 leading-relaxed">
              {contactInfo.timings}
            </div>
            <span className="text-[10px] text-emerald-600 font-bold block">Open Daily • 2-Day Demo Class</span>
          </div>
          <div className="text-center pt-2">
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 block">
              Flat ₹{contactInfo.monthlyFee} / Month Fee
            </span>
          </div>
        </div>
      </div>

      {/* Map & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Direct Offline Admissions & Contact Desk (7 Cols) - No Form Filling */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>No Online Form Filling Required</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">Direct Offline Admissions & Contact Desk</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Join Target Coaching Classes without filling any online forms. Walk into the centre directly in Baraut or contact Ashvani Sir to begin your preparation.
            </p>
          </div>

          {/* Quick Direct Action Cards */}
          <div className="space-y-3">
            {/* Phone Call Card */}
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-orange-950 uppercase tracking-wide">
                    Ashvani Sir (Direct Call)
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    097594 46215
                  </div>
                </div>
              </div>
              <a
                href="tel:09759446215"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition text-center flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                    WhatsApp Chat Desk
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    097594 46215
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/919759446215"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition text-center flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Google Maps Directions Card */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-xs font-black text-blue-950 uppercase tracking-wide">
                    Google Maps Navigation
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Khatri Garhi, Baraut (Baghpat)
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs shadow-md transition text-center flex items-center justify-center space-x-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-orange-400" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* 3-Step Walk-In Admission Flow */}
          <div className="pt-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
              <Target className="w-4 h-4 text-orange-600" />
              <span>How Direct Admission Works (3 Simple Steps)</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Walk into the Centre or Call Ashvani Sir</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Visit us during working hours (7:00 AM – 8:00 PM). No prior appointment or online application needed.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Attend Free 2-Day Live Demo Classes</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Experience Ashvani Sir&apos;s conceptual teaching, shortcut formulas, and interactive classroom atmosphere with zero fees.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Pay Flat ₹{contactInfo.monthlyFee} & Start Learning</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    No admission fee. Collect printed trick registers, formula handouts, and Sunday test schedule immediately at the front desk.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Directions Visual Card (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Centre Physical Address</span>
            </h3>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-extrabold text-slate-950 text-base">Target Coaching Classes</div>
              <div className="text-slate-800 font-medium leading-relaxed">
                Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.
              </div>
              <div className="pt-2 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px]">
                <div><span className="text-slate-400">Area:</span> <strong className="text-slate-800">Khatri Garhi, Baraut</strong></div>
                <div><span className="text-slate-400">District:</span> <strong className="text-slate-800">Baghpat</strong></div>
                <div><span className="text-slate-400">State:</span> <strong className="text-slate-800">Uttar Pradesh</strong></div>
                <div><span className="text-slate-400">PIN Code:</span> <strong className="text-slate-800">250611</strong></div>
              </div>
            </div>

            {/* Stylized Map View / Landmark Locator */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white p-5 flex flex-col justify-between relative overflow-hidden border border-slate-800 shadow-inner space-y-5">
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-black uppercase bg-orange-500 text-white px-2.5 py-0.5 rounded tracking-wider">
                  Baraut Centre Location
                </span>
                <div className="text-base font-black text-white">
                  Target Coaching Classes (Ashvani Sir)
                </div>
                <div className="text-xs text-slate-300">
                  Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611
                </div>
              </div>

              {/* Action Buttons in Locator Card */}
              <div className="relative z-10 space-y-2 pt-2 border-t border-slate-800">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center space-x-2 transition shadow-md shadow-orange-500/30 text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps ↗</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:09759446215"
                    className="py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919759446215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 leading-relaxed">
              * Note: For outstation students coming from Baghpat, Shamli, Meerut and surrounding areas, budget PG & hostel accommodations are available nearby.
            </div>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">FAQ</span>
          <h3 className="text-2xl font-black text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-sm font-black text-slate-900 flex items-start space-x-2">
                <span className="text-orange-600 shrink-0 font-sans">Q.</span>
                <span>{faq.q}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
