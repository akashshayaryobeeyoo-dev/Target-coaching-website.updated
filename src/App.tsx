import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CompleteSyllabusPage } from './pages/CompleteSyllabusPage';
import { ExamWiseSyllabusPage } from './pages/ExamWiseSyllabusPage';
import { PracticeTestsPage } from './pages/PracticeTestsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { Phone, Sparkles, BookOpen, GraduationCap, Home, MessageSquare } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { activePage, setActivePage, contactInfo, toastMessage } = useApp();

  // If Admin panel is active, render dedicated Admin workspace
  if (activePage === 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 selection:bg-orange-500 selection:text-white relative">
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>{toastMessage}</span>
          </div>
        )}
        <AdminPage />
      </div>
    );
  }

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'syllabus':
        return <CompleteSyllabusPage />;
      case 'exam-syllabus':
        return <ExamWiseSyllabusPage />;
      case 'tests':
        return <PracticeTestsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-orange-500 selection:text-white relative">
      {/* Global Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar />

      {/* Dynamic Page Component */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg flex items-center justify-around">
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center text-[10px] font-bold ${
            activePage === 'home' ? 'text-blue-900' : 'text-slate-600'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => {
            setActivePage('syllabus');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center text-[10px] font-bold ${
            activePage === 'syllabus' ? 'text-blue-900' : 'text-slate-600'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5 text-blue-900" />
          <span>Syllabus</span>
        </button>

        <button
          onClick={() => {
            setActivePage('tests');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center text-[10px] font-bold ${
            activePage === 'tests' ? 'text-blue-900' : 'text-slate-600'
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5 text-orange-500" />
          <span>Mock Tests</span>
        </button>

        <a
          href="tel:09759446215"
          className="flex flex-col items-center bg-emerald-600 text-white px-3 py-1.5 rounded-xl shadow-md font-bold text-[11px]"
        >
          <Phone className="w-3.5 h-3.5 mb-0.5" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center text-[10px] font-bold ${
            activePage === 'contact' ? 'text-blue-900' : 'text-slate-600'
          }`}
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-orange-600" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
