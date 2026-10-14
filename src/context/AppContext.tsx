import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  SubjectId, 
  ExamId, 
  TestResult, 
  AdmissionInquiry, 
  Announcement,
  Question,
  TestLanguage
} from '../types';
import { ANNOUNCEMENTS } from '../data/mockTestsData';
import { SYLLABUS_DATA } from '../data/syllabusData';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'courses' 
  | 'syllabus' 
  | 'exam-syllabus' 
  | 'tests' 
  | 'fees' 
  | 'contact'
  | 'admin';

export interface CenterContactInfo {
  centerName: string;
  headFaculty: string;
  monthlyFee: number;
  phone1: string;
  phone2: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  area: string;
  district: string;
  state: string;
  pincode: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  fullAddress: string;
  mapsUrl: string;
  whatsappUrl: string;
  timings: string;
  morningBatch?: string;
  afternoonBatch?: string;
  upiId: string;
  bankAccount: string;
  ifscCode: string;
}

export interface LocalStudentProgress {
  completedTopics: string[]; // topicIds
  bookmarkedQuestionIds: string[];
}

interface AppContextType {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  selectedSubjectId: SubjectId;
  setSelectedSubjectId: (id: SubjectId) => void;
  selectedExamId: ExamId;
  setSelectedExamId: (id: ExamId) => void;
  activeTestId: string | null;
  setActiveTestId: (testId: string | null) => void;
  testLanguage: TestLanguage;
  setTestLanguage: (lang: TestLanguage) => void;
  
  // Local student progress (no accounts or login required)
  student: LocalStudentProgress;
  toggleTopicCompletion: (topicId: string) => void;
  toggleBookmarkQuestion: (questionId: string) => void;
  testResults: TestResult[];
  saveTestResult: (result: TestResult) => void;
  
  // Inquiries / Leads
  inquiries: AdmissionInquiry[];
  submitInquiry: (inquiry: Omit<AdmissionInquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: AdmissionInquiry['status']) => void;
  updateInquiryNotes: (id: string, notes: string) => void;
  deleteInquiry: (id: string) => void;
  
  // Contact info & centre settings
  contactInfo: CenterContactInfo;
  updateContactInfo: (info: Partial<CenterContactInfo>) => void;
  
  // Announcements
  announcements: Announcement[];
  addAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  deleteAnnouncement: (id: string) => void;
  
  // Quick alert message
  toastMessage: string | null;
  showToast: (msg: string) => void;
  
  // Global search syllabus helper
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Teacher Photo Management (Admin Controlled)
  teacherPhoto: string;
  updateTeacherPhoto: (photoData: string, mimeType?: string) => Promise<{ success: boolean; message: string }>;
  resetTeacherPhoto: () => Promise<{ success: boolean; message: string }>;

  // Admin Auth State
  adminToken: string | null;
  setAdminToken: (token: string | null) => void;
  isAdminLoggedIn: boolean;
  logoutAdmin: () => Promise<void>;
}

const defaultContactInfo: CenterContactInfo = {
  centerName: 'Target Coaching Classes',
  headFaculty: 'Ashvani Sir (Founder & Main Faculty)',
  monthlyFee: 700,
  phone1: '097594 46215',
  phone2: '097594 46215',
  phoneRaw: '09759446215',
  whatsapp: '919759446215',
  email: 'targetcoaching.ashvanisir@gmail.com',
  area: 'Khatri Garhi, Baraut',
  district: 'Baghpat',
  state: 'Uttar Pradesh',
  pincode: '250611',
  addressLine1: 'Target Coaching Classes, Khatri Garhi',
  addressLine2: 'Baraut, Baghpat',
  landmark: 'Uttar Pradesh 250611, India',
  fullAddress: 'Target Coaching Classes, Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611',
  whatsappUrl: 'https://wa.me/919759446215',
  timings: 'Morning Batch: 8:20 AM – 12:00 PM | Afternoon Batch: 12:20 PM – 3:00 PM',
  morningBatch: '8:20 AM to 12:00 PM',
  afternoonBatch: '12:20 PM to 3:00 PM',
  upiId: 'targetashvani@upi',
  bankAccount: 'TARGET COACHING CLASSES',
  ifscCode: 'BARB0BARAUT'
};

const initialInquiries: AdmissionInquiry[] = [
  {
    id: 'inq-101',
    fullName: 'Rahul Sharma',
    phone: '9876541230',
    whatsapp: '9876541230',
    email: 'rahul.s@example.com',
    targetExam: 'SSC CGL 2025',
    qualification: 'Graduate (B.Sc)',
    batchPreference: 'Morning (8:20 AM - 12:00 PM)',
    addressOrCity: 'Meerut / Hapur Area',
    message: 'Want to focus on Advanced Mathematics and English with Ashvani Sir.',
    createdAt: '2026-10-10 11:20 AM',
    status: 'New',
    notes: 'Interested in demo class next Tuesday.'
  },
  {
    id: 'inq-102',
    fullName: 'Pooja Verma',
    phone: '9812345670',
    whatsapp: '9812345670',
    targetExam: 'UP Police Constable',
    qualification: '12th (Intermediate)',
    batchPreference: 'Afternoon (12:20 PM - 3:00 PM)',
    addressOrCity: 'Baraut (Baghpat)',
    message: 'Need complete coverage for Samanya Hindi and Reasoning.',
    createdAt: '2026-10-11 04:15 PM',
    status: 'Contacted',
    notes: 'Spoke with father. Target exam scheduled for upcoming cycle.'
  },
  {
    id: 'inq-103',
    fullName: 'Vikram Singh Yadav',
    phone: '9760012345',
    whatsapp: '9760012345',
    targetExam: 'Railway NTPC & Group D',
    qualification: '10th + ITI',
    batchPreference: 'Morning (8:20 AM - 12:00 PM)',
    addressOrCity: 'Bulandshahr Road',
    message: 'Confirmed admission at ₹700 monthly fee for upcoming batch.',
    createdAt: '2026-10-12 09:30 AM',
    status: 'Enrolled',
    notes: 'Enrolled in Morning batch. First month fee received.'
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check URL pathname for /admin on initial load
  const [activePage, setActivePageState] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/admin' || path.startsWith('/admin/') || hash === '#/admin') {
        return 'admin';
      }
    }
    return 'home';
  });

  const setActivePage = useCallback((page: PageId) => {
    setActivePageState(page);
    if (typeof window !== 'undefined') {
      if (page === 'admin') {
        if (window.location.pathname !== '/admin') {
          window.history.pushState(null, '', '/admin');
        }
      } else {
        if (window.location.pathname === '/admin') {
          window.history.pushState(null, '', '/');
        }
      }
    }
  }, []);

  // Listen for browser popstate (back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/admin' || path.startsWith('/admin/')) {
        setActivePageState('admin');
      } else {
        setActivePageState('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('maths');
  const [selectedExamId, setSelectedExamId] = useState<ExamId>('ssc-cgl');
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Admin Auth state
  const [adminToken, setAdminTokenState] = useState<string | null>(() => {
    return sessionStorage.getItem('target_admin_token') || localStorage.getItem('target_admin_token') || null;
  });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  const setAdminToken = useCallback((token: string | null) => {
    setAdminTokenState(token);
    if (token) {
      sessionStorage.setItem('target_admin_token', token);
      localStorage.setItem('target_admin_token', token);
      setIsAdminLoggedIn(true);
    } else {
      sessionStorage.removeItem('target_admin_token');
      localStorage.removeItem('target_admin_token');
      setIsAdminLoggedIn(false);
    }
  }, []);

  // Validate admin token on mount
  useEffect(() => {
    if (!adminToken) {
      setIsAdminLoggedIn(false);
      return;
    }
    fetch('/api/admin/verify', {
      headers: { Authorization: `Bearer ${adminToken}` }
    })
      .then((res) => {
        if (res.ok) {
          setIsAdminLoggedIn(true);
        } else {
          setAdminToken(null);
        }
      })
      .catch(() => {
        // Fail-closed on error or offline state
        setIsAdminLoggedIn(false);
      });
  }, [adminToken, setAdminToken]);

  // Admin Logout
  const logoutAdmin = async () => {
    if (adminToken) {
      try {
        await fetch('/api/admin/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${adminToken}` }
        });
      } catch (e) {
        // Ignore network errors on logout
      }
    }
    setAdminToken(null);
    showToast('Admin logged out safely.');
  };

  // Teacher Photo State (defaults to /ashvani-sir.png)
  const [teacherPhoto, setTeacherPhoto] = useState<string>(() => {
    return (
      localStorage.getItem('target_ashvani_custom_photo') ||
      '/ashvani-sir.png'
    );
  });

  // Fetch current photo from backend on mount
  useEffect(() => {
    fetch('/api/admin/photo')
      .then((res) => res.json() as Promise<{ photoUrl?: string }>)
      .then((data) => {
        if (data && data.photoUrl) {
          setTeacherPhoto(data.photoUrl);
          localStorage.setItem('target_ashvani_custom_photo', data.photoUrl);
        }
      })
      .catch((err) => {
        console.warn('Could not sync photo from backend:', err);
      });
  }, []);

  // Update Photo via Admin
  const updateTeacherPhoto = async (photoData: string, mimeType?: string): Promise<{ success: boolean; message: string }> => {
    if (!adminToken || !isAdminLoggedIn) {
      return { success: false, message: 'Unauthorized: Admin authentication is required to upload or replace photos.' };
    }

    try {
      const res = await fetch('/api/admin/photo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`
        },
        body: JSON.stringify({
          base64Data: photoData,
          mimeType: mimeType || 'image/png'
        })
      });

      const data = (await res.json()) as { error?: string; photoUrl?: string; message?: string };
      if (!res.ok) {
        return { success: false, message: data.error || 'Failed to update photo' };
      }

      const newUrl = data.photoUrl || '/ashvani-sir.png';
      setTeacherPhoto(newUrl);
      localStorage.setItem('target_ashvani_custom_photo', newUrl);
      showToast("Ashvani Sir's photo updated across website!");
      return { success: true, message: data.message || 'Photo updated successfully' };
    } catch (err: any) {
      return { success: false, message: err.message || 'Error uploading photo' };
    }
  };

  // Reset Photo to Default
  const resetTeacherPhoto = async (): Promise<{ success: boolean; message: string }> => {
    if (!adminToken || !isAdminLoggedIn) {
      return { success: false, message: 'Unauthorized: Admin authentication required.' };
    }

    try {
      const res = await fetch('/api/admin/photo', {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string };
        return { success: false, message: err.error || 'Failed to reset photo' };
      }
      const defaultUrl = '/ashvani-sir.png';
      setTeacherPhoto(defaultUrl);
      localStorage.removeItem('target_ashvani_custom_photo');
      showToast('Reset to default official photo.');
      return { success: true, message: 'Reset to default official photo.' };
    } catch (err: any) {
      return { success: false, message: err.message || 'Failed to reset photo' };
    }
  };

  // Test Language Preference
  const [testLanguage, setTestLanguageState] = useState<TestLanguage>(() => {
    const saved = localStorage.getItem('target_test_language');
    return (saved === 'en' || saved === 'hi') ? (saved as TestLanguage) : 'hi';
  });

  const setTestLanguage = (lang: TestLanguage) => {
    setTestLanguageState(lang);
    localStorage.setItem('target_test_language', lang);
  };

  // Student progress
  const [student, setStudent] = useState<LocalStudentProgress>(() => {
    const saved = localStorage.getItem('target_student_progress');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      completedTopics: ['math-t1', 'reas-t1', 'hin-t1', 'gk-t1'],
      bookmarkedQuestionIds: ['q-m1', 'q-h1', 'q-gk1']
    };
  });

  // Test Results
  const [testResults, setTestResults] = useState<TestResult[]>(() => {
    const saved = localStorage.getItem('target_test_results');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [
      {
        testId: 'test-math-speed',
        testTitle: 'Mathematics Speed Drill by Ashvani Sir',
        date: '10 Oct 2026',
        language: 'hi',
        score: 18.5,
        totalMarks: 22,
        correctCount: 9,
        incorrectCount: 1,
        unattemptedCount: 1,
        timeSpentSeconds: 640,
        userAnswers: { 'q-m1': 1, 'q-m2': 1, 'q-m3': 2 }
      }
    ];
  });

  // Inquiries
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>(() => {
    const saved = localStorage.getItem('target_inquiries');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return initialInquiries;
  });

  // Fetch inquiries from backend if admin token available
  useEffect(() => {
    if (adminToken && isAdminLoggedIn) {
      fetch('/api/inquiries', {
        headers: { Authorization: `Bearer ${adminToken}` }
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setInquiries(data);
          }
        })
        .catch(() => {});
    }
  }, [adminToken, isAdminLoggedIn]);

  // Contact info
  const [contactInfo, setContactInfo] = useState<CenterContactInfo>(() => {
    const saved = localStorage.getItem('target_contact_info');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.phoneRaw === '09759446215' || parsed.phone1 === '097594 46215') {
          return { ...defaultContactInfo, ...parsed };
        }
      } catch (e) { /* ignore */ }
    }
    return defaultContactInfo;
  });

  // Announcements
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('target_announcements');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return ANNOUNCEMENTS;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('target_student_profile', JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    localStorage.setItem('target_test_results', JSON.stringify(testResults));
  }, [testResults]);

  useEffect(() => {
    localStorage.setItem('target_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('target_contact_info', JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    localStorage.setItem('target_announcements', JSON.stringify(announcements));
  }, [announcements]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const toggleTopicCompletion = (topicId: string) => {
    setStudent(prev => {
      const exists = prev.completedTopics.includes(topicId);
      const updated = exists 
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics: updated };
    });
    showToast('Topic progress updated!');
  };

  const toggleBookmarkQuestion = (questionId: string) => {
    setStudent(prev => {
      const exists = prev.bookmarkedQuestionIds.includes(questionId);
      const updated = exists 
        ? prev.bookmarkedQuestionIds.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestionIds, questionId];
      return { ...prev, bookmarkedQuestionIds: updated };
    });
    showToast('Bookmark toggled in your revision notebook.');
  };

  const saveTestResult = (result: TestResult) => {
    setTestResults(prev => [result, ...prev]);
  };

  const submitInquiry = async (inq: Omit<AdmissionInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: AdmissionInquiry = {
      ...inq,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toLocaleDateString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      status: 'New'
    };

    setInquiries(prev => [newInquiry, ...prev]);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInquiry)
      });
    } catch (e) {
      // Local copy already saved
    }

    showToast('Admission enquiry submitted! Ashvani Sir will call you within 24 hours.');
  };

  const updateInquiryStatus = async (id: string, status: AdmissionInquiry['status']) => {
    setInquiries(prev => prev.map(item => item.id === id ? { ...item, status } : item));
    if (adminToken) {
      try {
        await fetch(`/api/inquiries/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminToken}`
          },
          body: JSON.stringify({ status })
        });
      } catch (e) {
        // Fallback to local
      }
    }
    showToast(`Lead status updated to ${status}.`);
  };

  const updateInquiryNotes = async (id: string, notes: string) => {
    setInquiries(prev => prev.map(item => item.id === id ? { ...item, notes } : item));
    if (adminToken) {
      try {
        await fetch(`/api/inquiries/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminToken}`
          },
          body: JSON.stringify({ notes })
        });
      } catch (e) {}
    }
    showToast('Lead note saved.');
  };

  const deleteInquiry = async (id: string) => {
    setInquiries(prev => prev.filter(item => item.id !== id));
    if (adminToken) {
      try {
        await fetch(`/api/inquiries/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${adminToken}` }
        });
      } catch (e) {}
    }
    showToast('Enquiry removed.');
  };

  const updateContactInfo = async (info: Partial<CenterContactInfo>) => {
    setContactInfo(prev => ({ ...prev, ...info }));
    if (adminToken) {
      try {
        await fetch('/api/center-info', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminToken}`
          },
          body: JSON.stringify(info)
        });
      } catch (e) {}
    }
    showToast('Contact and Centre settings updated!');
  };

  const addAnnouncement = async (ann: Omit<Announcement, 'id'>) => {
    const newAnn: Announcement = {
      ...ann,
      id: `ann-${Date.now()}`
    };
    setAnnouncements(prev => [newAnn, ...prev]);
    if (adminToken) {
      try {
        await fetch('/api/announcements', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminToken}`
          },
          body: JSON.stringify(newAnn)
        });
      } catch (e) {}
    }
    showToast('Notice published to student notice board.');
  };

  const deleteAnnouncement = async (id: string) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
    if (adminToken) {
      try {
        await fetch(`/api/announcements/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${adminToken}` }
        });
      } catch (e) {}
    }
    showToast('Notice removed.');
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        selectedSubjectId,
        setSelectedSubjectId,
        selectedExamId,
        setSelectedExamId,
        activeTestId,
        setActiveTestId,
        testLanguage,
        setTestLanguage,
        student,
        toggleTopicCompletion,
        toggleBookmarkQuestion,
        testResults,
        saveTestResult,
        inquiries,
        submitInquiry,
        updateInquiryStatus,
        updateInquiryNotes,
        deleteInquiry,
        contactInfo,
        updateContactInfo,
        announcements,
        addAnnouncement,
        deleteAnnouncement,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
        teacherPhoto,
        updateTeacherPhoto,
        resetTeacherPhoto,
        adminToken,
        setAdminToken,
        isAdminLoggedIn,
        logoutAdmin
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
