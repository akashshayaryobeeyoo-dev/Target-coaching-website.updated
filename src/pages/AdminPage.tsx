import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Camera, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  Phone, 
  MessageSquare, 
  FileSpreadsheet, 
  Clock, 
  Bell, 
  Settings, 
  LogOut, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  RefreshCw, 
  Edit3, 
  Save, 
  X, 
  Search, 
  Filter, 
  Award,
  Sparkles,
  ExternalLink,
  Database,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdmissionInquiry } from '../types';

export const AdminPage: React.FC = () => {
  const { 
    contactInfo, 
    updateContactInfo, 
    inquiries, 
    updateInquiryStatus, 
    updateInquiryNotes, 
    deleteInquiry,
    announcements,
    addAnnouncement,
    deleteAnnouncement,
    teacherPhoto,
    updateTeacherPhoto,
    resetTeacherPhoto,
    adminToken,
    setAdminToken,
    isAdminLoggedIn,
    logoutAdmin,
    setActivePage,
    showToast
  } = useApp();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'photo' | 'leads' | 'announcements' | 'settings' | 'security' | 'cbt-attempts'>('photo');

  // Mock Test Attempts (Persistent D1 Submissions) State
  const [testAttempts, setTestAttempts] = useState<any[]>([]);
  const [attemptsLoading, setAttemptsLoading] = useState(false);
  const [selectedAttemptDetail, setSelectedAttemptDetail] = useState<any | null>(null);
  const [attemptSearch, setAttemptSearch] = useState('');

  // Login Form State
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Photo Management State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [photoUploading, setPhotoUploading] = useState(false);
  const [photoSuccessMsg, setPhotoSuccessMsg] = useState<string | null>(null);

  // Inquiries Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted' | 'Enrolled' | 'Closed'>('All');
  const [activeNoteEditId, setActiveNoteEditId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState('');

  // Announcement Form State
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeDesc, setNewNoticeDesc] = useState('');
  const [newNoticeDate, setNewNoticeDate] = useState('Today');
  const [newNoticeBadge, setNewNoticeBadge] = useState('New Batch');

  // Centre Settings Form State
  const [editMonthlyFee, setEditMonthlyFee] = useState(contactInfo.monthlyFee);
  const [editMorningBatch, setEditMorningBatch] = useState(contactInfo.morningBatch || '8:20 AM to 12:00 PM');
  const [editAfternoonBatch, setEditAfternoonBatch] = useState(contactInfo.afternoonBatch || '12:20 PM to 3:00 PM');
  const [editPhone, setEditPhone] = useState(contactInfo.phone1);
  const [editWhatsapp, setEditWhatsapp] = useState(contactInfo.whatsapp);
  const [editAddress, setEditAddress] = useState(contactInfo.fullAddress);
  const [settingsSaving, setSettingsSaving] = useState(false);

  // Password Change Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwChangeLoading, setPwChangeLoading] = useState(false);
  const [pwChangeMsg, setPwChangeMsg] = useState<{ text: string; isError: boolean } | null>(null);

  // Sync settings when contactInfo changes
  useEffect(() => {
    setEditMonthlyFee(contactInfo.monthlyFee);
    setEditMorningBatch(contactInfo.morningBatch || '8:20 AM to 12:00 PM');
    setEditAfternoonBatch(contactInfo.afternoonBatch || '12:20 PM to 3:00 PM');
    setEditPhone(contactInfo.phone1);
    setEditWhatsapp(contactInfo.whatsapp);
    setEditAddress(contactInfo.fullAddress);
  }, [contactInfo]);

  // Handle Admin Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput
        })
      });

      const data = (await res.json()) as { error?: string; token?: string };
      if (!res.ok) {
        setLoginError(data.error || 'Authentication failed. Please verify credentials.');
      } else if (data.token) {
        setAdminToken(data.token);
        showToast('Welcome, Ashvani Sir! Admin access granted.');
      }
    } catch (err: any) {
      setLoginError('Could not reach backend authentication service. Please retry.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Fetch Mock Test Attempts from backend D1
  const fetchTestAttempts = async () => {
    setAttemptsLoading(true);
    try {
      const res = await fetch('/api/tests/attempts?limit=50');
      if (res.ok) {
        const data = await res.json();
        setTestAttempts(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to load test attempts:', err);
    } finally {
      setAttemptsLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminLoggedIn && activeTab === 'cbt-attempts') {
      fetchTestAttempts();
    }
  }, [isAdminLoggedIn, activeTab]);

  const handleDeleteAttempt = async (id: string) => {
    if (!window.confirm('Delete this CBT test submission record?')) return;
    try {
      const res = await fetch(`/api/tests/attempts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${adminToken}`
        }
      });
      if (res.ok) {
        setTestAttempts(prev => prev.filter(a => a.id !== id));
        if (selectedAttemptDetail && selectedAttemptDetail.id === id) {
          setSelectedAttemptDetail(null);
        }
        showToast('Test attempt deleted.');
      }
    } catch {
      showToast('Failed to delete attempt.');
    }
  };


  // Handle Photo Selection with Validation
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    setPhotoSuccessMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    const validMimes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!validMimes.includes(file.type)) {
      setPhotoError('Invalid file type. Only PNG, JPG, JPEG, and WEBP image formats are supported.');
      return;
    }

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setPhotoError('Image size exceeds 5MB limit. Please choose an optimized image under 5MB.');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Save Uploaded Photo
  const handleSavePhoto = async () => {
    if (!previewUrl || !selectedFile) return;
    setPhotoUploading(true);
    setPhotoError(null);
    setPhotoSuccessMsg(null);

    const result = await updateTeacherPhoto(previewUrl, selectedFile.type);
    setPhotoUploading(false);

    if (result.success) {
      setPhotoSuccessMsg("Ashvani Sir's photo has been updated successfully across the homepage hero and About Us sections!");
      setSelectedFile(null);
      setPreviewUrl(null);
    } else {
      setPhotoError(result.message);
    }
  };

  // Reset Photo
  const handleResetToDefault = async () => {
    if (window.confirm("Are you sure you want to reset Ashvani Sir's photo to the official default photo?")) {
      setPhotoUploading(true);
      await resetTeacherPhoto();
      setSelectedFile(null);
      setPreviewUrl(null);
      setPhotoUploading(false);
      setPhotoSuccessMsg("Photo reset to official default photo.");
    }
  };

  // Handle Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaving(true);
    await updateContactInfo({
      monthlyFee: Number(editMonthlyFee),
      morningBatch: editMorningBatch,
      afternoonBatch: editAfternoonBatch,
      timings: `Morning Batch: ${editMorningBatch} | Afternoon Batch: ${editAfternoonBatch}`,
      phone1: editPhone,
      phone2: editPhone,
      whatsapp: editWhatsapp,
      fullAddress: editAddress
    });
    setSettingsSaving(false);
    showToast('Coaching centre settings and batch timings updated!');
  };

  // Handle Add Announcement
  const handleAddNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim() || !newNoticeDesc.trim()) return;

    await addAnnouncement({
      title: newNoticeTitle.trim(),
      content: newNoticeDesc.trim(),
      date: newNoticeDate.trim() || 'Latest Notice',
      isImportant: newNoticeBadge === 'Urgent'
    });

    setNewNoticeTitle('');
    setNewNoticeDesc('');
    showToast('Notice published to student notice board ticker!');
  };

  // Handle Password Change
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwChangeMsg(null);

    if (newPassword.length < 6) {
      setPwChangeMsg({ text: 'New password must be at least 6 characters.', isError: true });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwChangeMsg({ text: 'New passwords do not match.', isError: true });
      return;
    }

    setPwChangeLoading(true);
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`
        },
        body: JSON.stringify({
          currentPassword,
          newPassword
        })
      });

      const data = (await res.json()) as { error?: string; message?: string };
      if (!res.ok) {
        setPwChangeMsg({ text: data.error || 'Failed to update password.', isError: true });
      } else {
        setPwChangeMsg({ text: 'Password successfully changed! Use your new password on next login.', isError: false });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (e: any) {
      setPwChangeMsg({ text: 'Network error occurred while updating password.', isError: true });
    } finally {
      setPwChangeLoading(false);
    }
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesFilter = statusFilter === 'All' || inq.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      inq.fullName.toLowerCase().includes(q) ||
      inq.phone.includes(q) ||
      inq.targetExam.toLowerCase().includes(q) ||
      inq.addressOrCity.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  // Export Inquiries to CSV
  const handleExportCSV = () => {
    const headers = ['ID', 'Student Name', 'Phone', 'WhatsApp', 'Target Exam', 'Qualification', 'Batch Preference', 'City / Area', 'Date', 'Status', 'Message', 'Internal Notes'];
    const rows = inquiries.map((inq) => [
      `"${inq.id}"`,
      `"${inq.fullName}"`,
      `"${inq.phone}"`,
      `"${inq.whatsapp || inq.phone}"`,
      `"${inq.targetExam}"`,
      `"${inq.qualification}"`,
      `"${inq.batchPreference}"`,
      `"${inq.addressOrCity}"`,
      `"${inq.createdAt}"`,
      `"${inq.status}"`,
      `"${(inq.message || '').replace(/"/g, '""')}"`,
      `"${(inq.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `target_coaching_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported inquiries to CSV.');
  };

  // Inquiry Status counts
  const newCount = inquiries.filter(i => i.status === 'New').length;
  const contactedCount = inquiries.filter(i => i.status === 'Contacted').length;
  const enrolledCount = inquiries.filter(i => i.status === 'Enrolled').length;

  // ==================== 1. LOGIN SCREEN ====================
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo & Institute Header */}
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-xl shadow-orange-500/20 mb-2">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              TARGET Coaching Centre
            </h1>
            <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
              Secure Staff & Admin Management Portal
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-7 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-blue-500" />

            <div className="mb-6">
              <h2 className="text-lg font-black text-white flex items-center space-x-2">
                <Lock className="w-4 h-4 text-orange-400" />
                <span>Admin Login</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Enter your administrative credentials to manage Ashvani Sir's photo, admission leads, and centre announcements.
              </p>
            </div>

            {loginError && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email or Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter admin username or email"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm shadow-lg shadow-orange-500/20 transition flex items-center justify-center space-x-2 mt-2 disabled:opacity-50"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Enter Admin Dashboard</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-800 text-center">
              <button
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Public Website</span>
              </button>
            </div>
          </div>

          <div className="mt-4 text-center text-[11px] text-slate-500">
            Protected Institute Admin Portal • TARGET Coaching Classes, Baraut
          </div>
        </div>
      </div>
    );
  }

  // ==================== 2. AUTHENTICATED DASHBOARD ====================
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20">
      {/* Top Admin Navigation Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black shadow-md shadow-orange-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-sm tracking-tight text-white">TARGET Coaching Admin</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ● Verified Session
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Ashvani Sir • Head of Centre Control Panel
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 flex items-center space-x-1.5 transition"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>View Live Website</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-bold border border-red-500/30 transition flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto border-t border-slate-800 scrollbar-none">
          <button
            onClick={() => setActiveTab('photo')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center space-x-2 whitespace-nowrap transition ${
              activeTab === 'photo'
                ? 'border-orange-500 text-orange-400 bg-slate-800/50'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
            }`}
          >
            <Camera className="w-4 h-4 text-orange-400" />
            <span>Ashvani Sir's Photo</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center space-x-2 whitespace-nowrap transition ${
              activeTab === 'leads'
                ? 'border-orange-500 text-orange-400 bg-slate-800/50'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-blue-400" />
            <span>Admission Leads</span>
            {newCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] font-black flex items-center justify-center">
                {newCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center space-x-2 whitespace-nowrap transition ${
              activeTab === 'announcements'
                ? 'border-orange-500 text-orange-400 bg-slate-800/50'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
            }`}
          >
            <Bell className="w-4 h-4 text-amber-400" />
            <span>Notice Board</span>
            <span className="text-[10px] font-bold text-slate-500">({announcements.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center space-x-2 whitespace-nowrap transition ${
              activeTab === 'settings'
                ? 'border-orange-500 text-orange-400 bg-slate-800/50'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Batch Timings & Fees</span>
          </button>

          <button
            onClick={() => setActiveTab('cbt-attempts')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center space-x-2 whitespace-nowrap transition ${
              activeTab === 'cbt-attempts'
                ? 'border-orange-500 text-orange-400 bg-slate-800/50'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Mock Test Submissions (D1)</span>
            {testAttempts.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center">
                {testAttempts.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center space-x-2 whitespace-nowrap transition ${
              activeTab === 'security'
                ? 'border-orange-500 text-orange-400 bg-slate-800/50'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
            }`}
          >
            <Lock className="w-4 h-4 text-purple-400" />
            <span>Security & Password</span>
          </button>
        </div>
      </header>

      {/* Main Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ================= TAB 1: PHOTO MANAGEMENT ================= */}
        {activeTab === 'photo' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="max-w-3xl space-y-2 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  Faculty Photo Management
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  Update Ashvani Sir's Official Photograph
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Upload a new high-quality portrait of Ashvani Sir. Once saved, it will automatically update across both the homepage cutout hero section and the About Us profile card. Public users cannot change this photo.
                </p>
              </div>

              {/* Free-Tier Hosting Indicator & Notice */}
              <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm flex items-start space-x-3">
                <div className="px-2 py-0.5 rounded-md bg-blue-600 text-white font-black text-[10px] uppercase tracking-wider shrink-0 mt-0.5 shadow-sm">
                  Free Tier
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-900">
                    Active Photo: Static Website Asset (/ashvani-sir.png)
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Ashvani Sir's official portrait is permanently served across the website at zero hosting cost without requiring a credit card or Cloudflare R2 paid subscription. To update the photo for free, place your new image in <code className="bg-blue-100 text-blue-900 px-1 py-0.5 rounded font-mono font-semibold">public/ashvani-sir.png</code> in GitHub and push.
                  </p>
                </div>
              </div>

              {photoSuccessMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Success:</strong> {photoSuccessMsg}
                  </div>
                </div>
              )}

              {photoError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Error:</strong> {photoError}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Upload Dropzone & Controls */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Dropzone Card */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-orange-500 rounded-3xl p-8 text-center cursor-pointer bg-slate-50 hover:bg-orange-50/30 transition group relative"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/webp"
                      onChange={handlePhotoSelect}
                      className="hidden"
                    />

                    <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition shadow-inner">
                      <Upload className="w-8 h-8" />
                    </div>

                    <h3 className="text-base font-black text-slate-900 mb-1">
                      {selectedFile ? 'Select a different image' : 'Choose New Photo of Ashvani Sir'}
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Click to browse your device. Supported formats: <strong className="text-slate-700">PNG, JPG, WEBP</strong>. Max size: <strong className="text-slate-700">5MB</strong>.
                    </p>

                    {selectedFile && (
                      <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold border border-orange-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        <span>Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {previewUrl && (
                      <button
                        onClick={handleSavePhoto}
                        disabled={photoUploading}
                        className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs shadow-lg shadow-orange-600/20 transition flex items-center space-x-2 disabled:opacity-50"
                      >
                        {photoUploading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Saving Photo to Server...</span>
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4" />
                            <span>Save & Apply Photo to Website</span>
                          </>
                        )}
                      </button>
                    )}

                    {previewUrl && (
                      <button
                        onClick={() => {
                          setSelectedFile(null);
                          setPreviewUrl(null);
                        }}
                        className="px-4 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition flex items-center space-x-1.5"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel Selection</span>
                      </button>
                    )}

                    <button
                      onClick={handleResetToDefault}
                      disabled={photoUploading}
                      className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-300 transition flex items-center space-x-1.5 ml-auto"
                      title="Reset to the default official Ashvani Sir photo"
                    >
                      <RefreshCw className="w-4 h-4 text-slate-500" />
                      <span>Reset to Official Default Photo</span>
                    </button>
                  </div>

                  {/* Information Box */}
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-900 space-y-1.5">
                    <div className="font-bold flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>Automatic Quality & Placement System</span>
                    </div>
                    <p className="text-blue-800 leading-relaxed">
                      Photos are stored securely on the backend server and served with CDN-level caching. The cutout border styling with orange accent on the homepage hero section automatically accommodates portrait aspect ratios cleanly.
                    </p>
                  </div>
                </div>

                {/* Right: Live Preview */}
                <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-orange-400">
                      {previewUrl ? 'Pre-Upload Preview' : 'Current Active Website Photo'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">
                      {previewUrl ? 'Unsaved Changes' : 'Live on Site'}
                    </span>
                  </div>

                  {/* Simulated Hero Card Cutout */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-600/20 pointer-events-none" />
                    
                    <img
                      src={previewUrl || teacherPhoto}
                      alt="Ashvani Sir Preview"
                      className="w-full h-full object-cover object-top drop-shadow-2xl rounded-xl"
                    />

                    {/* Badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 p-2.5 rounded-xl shadow-lg border border-white/20 flex items-center space-x-2">
                      <div className="w-2 h-6 rounded-full bg-orange-500" />
                      <div>
                        <div className="text-xs font-black">Ashvani Sir</div>
                        <div className="text-[10px] font-bold text-orange-600">Head of Centre</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    This preview shows the exact framing students see on the homepage hero and About Us page.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: ADMISSION LEADS ================= */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Stat Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Leads</div>
                <div className="text-2xl font-black text-slate-900 mt-1">{inquiries.length}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-orange-200 bg-orange-50/30 shadow-sm">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">New Enquiries</div>
                <div className="text-2xl font-black text-orange-600 mt-1">{newCount}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-blue-200 bg-blue-50/30 shadow-sm">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Contacted</div>
                <div className="text-2xl font-black text-blue-900 mt-1">{contactedCount}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 shadow-sm">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Enrolled (₹700)</div>
                <div className="text-2xl font-black text-emerald-600 mt-1">{enrolledCount}</div>
              </div>
            </div>

            {/* Filter and Action Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-1 items-center space-x-2 w-full md:w-auto">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search candidate name, phone number, exam..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="flex items-center space-x-1 overflow-x-auto">
                  {(['All', 'New', 'Contacted', 'Enrolled', 'Closed'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                        statusFilter === st
                          ? 'bg-blue-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleExportCSV}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition flex items-center space-x-2 shrink-0"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Export to Excel (CSV)</span>
              </button>
            </div>

            {/* Inquiries List */}
            {filteredInquiries.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">No student enquiries found</h3>
                <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or status filter.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-base font-black text-slate-900">{inq.fullName}</h4>
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                            inq.status === 'New' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                            inq.status === 'Contacted' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                            inq.status === 'Enrolled' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                            'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}>
                            {inq.status}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                          <span>Target: <strong className="text-blue-900">{inq.targetExam}</strong></span>
                          <span>•</span>
                          <span>Prefers: <strong className="text-orange-600">{inq.batchPreference}</strong></span>
                          <span>•</span>
                          <span>Submitted: {inq.createdAt}</span>
                        </div>
                      </div>

                      {/* Quick Contact Actions */}
                      <div className="flex items-center space-x-2">
                        <a
                          href={`tel:${inq.phone}`}
                          className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center space-x-1.5 transition"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call ({inq.phone})</span>
                        </a>

                        <a
                          href={`https://wa.me/91${inq.whatsapp || inq.phone}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Details Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600">
                      <div>
                        <span className="font-bold text-slate-700">Qualification:</span> {inq.qualification}
                      </div>
                      <div>
                        <span className="font-bold text-slate-700">Area / City:</span> {inq.addressOrCity}
                      </div>
                      {inq.email && (
                        <div>
                          <span className="font-bold text-slate-700">Email:</span> {inq.email}
                        </div>
                      )}
                    </div>

                    {inq.message && (
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        <strong className="text-slate-900">Student Note / Goal:</strong> {inq.message}
                      </div>
                    )}

                    {/* Internal Admin Note & Status Controls */}
                    <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      {/* Notes Section */}
                      <div className="flex-1 w-full sm:w-auto">
                        {activeNoteEditId === inq.id ? (
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={noteDraft}
                              onChange={(e) => setNoteDraft(e.target.value)}
                              placeholder="Write staff follow-up note..."
                              className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                              onClick={() => {
                                updateInquiryNotes(inq.id, noteDraft);
                                setActiveNoteEditId(null);
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold shrink-0"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setActiveNoteEditId(null)}
                              className="px-2.5 py-1.5 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold shrink-0"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              setActiveNoteEditId(inq.id);
                              setNoteDraft(inq.notes || '');
                            }}
                            className="cursor-pointer text-xs text-slate-500 hover:text-slate-900 flex items-center space-x-1.5"
                          >
                            <Edit3 className="w-3.5 h-3.5 text-orange-500" />
                            <span>
                              {inq.notes ? <strong>Note: {inq.notes}</strong> : <em className="italic">Click to add staff follow-up note...</em>}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Status Dropdown & Delete */}
                      <div className="flex items-center space-x-2 shrink-0">
                        <span className="text-[11px] font-bold text-slate-500">Update Status:</span>
                        <select
                          value={inq.status}
                          onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                          className="text-xs font-bold rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Enrolled">Enrolled (₹700)</option>
                          <option value="Closed">Closed</option>
                        </select>

                        <button
                          onClick={() => {
                            if (window.confirm(`Delete inquiry for ${inq.fullName}?`)) {
                              deleteInquiry(inq.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                          title="Delete this lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: ANNOUNCEMENTS ================= */}
        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Notice Board Management
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">
                  Publish or Remove Homepage Notices
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Announcements appear immediately on the animated notice board ticker below the homepage hero section.
                </p>
              </div>

              {/* Add New Notice Form */}
              <form onSubmit={handleAddNotice} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-sm font-black text-slate-900 flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-orange-500" />
                  <span>Post New Announcement</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Announcement Title
                    </label>
                    <input
                      type="text"
                      required
                      value={newNoticeTitle}
                      onChange={(e) => setNewNoticeTitle(e.target.value)}
                      placeholder="e.g. New SSC CGL Morning Batch Starting Monday"
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Badge Category
                    </label>
                    <select
                      value={newNoticeBadge}
                      onChange={(e) => setNewNoticeBadge(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white font-bold focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="New Batch">New Batch</option>
                      <option value="Urgent">Urgent Alert</option>
                      <option value="Mock Test">Mock Test</option>
                      <option value="Admit Card">Admit Card</option>
                      <option value="Special Class">Special Class</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Description / Details
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={newNoticeDesc}
                    onChange={(e) => setNewNoticeDesc(e.target.value)}
                    placeholder="Provide batch details, classroom shifts, or preparation instructions..."
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-48">
                    <input
                      type="text"
                      value={newNoticeDate}
                      onChange={(e) => setNewNoticeDate(e.target.value)}
                      placeholder="Display Date (e.g. 15 Oct 2026)"
                      className="w-full text-xs p-2 rounded-xl border border-slate-200 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5"
                  >
                    <Save className="w-4 h-4" />
                    <span>Publish Announcement</span>
                  </button>
                </div>
              </form>

              {/* Notice List */}
              <div className="space-y-3">
                <h3 className="text-sm font-black text-slate-900">Current Active Notices</h3>
                {announcements.map((ann) => (
                  <div
                    key={ann.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-white flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          {ann.date}
                        </span>
                        <h4 className="text-sm font-black text-slate-900">{ann.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600">{ann.content}</p>
                    </div>

                    <button
                      onClick={() => deleteAnnouncement(ann.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition shrink-0"
                      title="Remove announcement"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: BATCH TIMINGS & FEES ================= */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="max-w-2xl space-y-2 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Classroom Shifts & Pricing
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  Class Timings, Fee & Contact Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Update the official daily classroom timings, monthly fee structure, phone numbers, and centre address.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-6">
                
                {/* Classroom Shifts */}
                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-4">
                  <h3 className="text-sm font-black text-blue-950 flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Daily Classroom Timings (2 Shifts)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Morning Batch Timing
                      </label>
                      <input
                        type="text"
                        required
                        value={editMorningBatch}
                        onChange={(e) => setEditMorningBatch(e.target.value)}
                        placeholder="8:20 AM to 12:00 PM"
                        className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block">Standard morning shift for SSC & Railway</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Afternoon Batch Timing
                      </label>
                      <input
                        type="text"
                        required
                        value={editAfternoonBatch}
                        onChange={(e) => setEditAfternoonBatch(e.target.value)}
                        placeholder="12:20 PM to 3:00 PM"
                        className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block">Afternoon shift for UP Police & GD aspirants</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Fee Structure */}
                <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100 space-y-4">
                  <h3 className="text-sm font-black text-orange-950 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-orange-600" />
                    <span>Monthly Tuition Fee</span>
                  </h3>

                  <div className="max-w-xs">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Monthly Fee Amount (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center font-black text-slate-600">₹</span>
                      <input
                        type="number"
                        required
                        value={editMonthlyFee}
                        onChange={(e) => setEditMonthlyFee(Number(e.target.value))}
                        className="w-full text-sm font-black pl-8 pr-3 py-2.5 rounded-xl border border-slate-300 bg-white"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">Default: ₹700 flat per month</span>
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-black text-slate-900 flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Contact & Location</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Call Number (Mobile)
                      </label>
                      <input
                        type="text"
                        required
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        placeholder="097594 46215"
                        className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp Number (with 91 country code)
                      </label>
                      <input
                        type="text"
                        required
                        value={editWhatsapp}
                        onChange={(e) => setEditWhatsapp(e.target.value)}
                        placeholder="919759446215"
                        className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Address
                    </label>
                    <input
                      type="text"
                      required
                      value={editAddress}
                      onChange={(e) => setEditAddress(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={settingsSaving}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs shadow-lg shadow-orange-600/20 transition flex items-center space-x-2 disabled:opacity-50"
                >
                  {settingsSaving ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Saving Settings...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save All Centre Settings</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ================= TAB 5: SECURITY & PASSWORD ================= */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-xl">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  Access & Credentials
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  Update Admin Password
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Ensure your coaching control panel is protected with a strong, private password known only to Ashvani Sir.
                </p>
              </div>

              {pwChangeMsg && (
                <div className={`mb-6 p-4 rounded-2xl text-xs sm:text-sm flex items-start space-x-3 ${
                  pwChangeMsg.isError 
                    ? 'bg-red-50 border border-red-200 text-red-800' 
                    : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                }`}>
                  {pwChangeMsg.isError ? (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  <div>{pwChangeMsg.text}</div>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    New Password (Min 6 characters)
                  </label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={pwChangeLoading}
                  className="px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs shadow-lg shadow-purple-700/20 transition flex items-center space-x-2 disabled:opacity-50"
                >
                  {pwChangeLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Updating Password...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Update Admin Password</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="font-bold text-slate-700">Security Architecture Note:</div>
                <p>
                  Passwords are cryptographic hashes salted with PBKDF2 (SHA-512). Passwords are never sent or stored in frontend bundles or client logs.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB: CBT MOCK TEST ATTEMPTS (D1) ================= */}
        {activeTab === 'cbt-attempts' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              {/* Header & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                      <Database className="w-5 h-5" />
                    </span>
                    <h2 className="text-xl font-black text-slate-900">
                      Mock Test Submissions (Cloudflare D1)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Persistent student test attempts, scores, and answer sheets stored securely in Cloudflare D1.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={fetchTestAttempts}
                    disabled={attemptsLoading}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center space-x-2 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${attemptsLoading ? 'animate-spin' : ''}`} />
                    <span>Refresh D1 Records</span>
                  </button>
                </div>
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Total Submissions</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">{testAttempts.length}</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">Average Score</span>
                  <div className="text-2xl font-black text-emerald-700 mt-1">
                    {testAttempts.length > 0
                      ? (testAttempts.reduce((acc, a) => acc + (Number(a.score) || 0), 0) / testAttempts.length).toFixed(1)
                      : '0.0'}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block">Avg Questions Solved</span>
                  <div className="text-2xl font-black text-blue-900 mt-1">
                    {testAttempts.length > 0
                      ? Math.round(testAttempts.reduce((acc, a) => acc + (Number(a.correctCount) || 0), 0) / testAttempts.length)
                      : 0}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                  <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">Active Database</span>
                  <div className="text-xs font-mono font-bold text-purple-900 mt-2 truncate">
                    target-coaching-db
                  </div>
                </div>
              </div>

              {/* Search filter */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={attemptSearch}
                  onChange={(e) => setAttemptSearch(e.target.value)}
                  placeholder="Filter by test title, test ID, or candidate roll number..."
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />
              </div>

              {/* Table of Attempts */}
              {attemptsLoading && testAttempts.length === 0 ? (
                <div className="p-12 text-center space-y-3">
                  <RefreshCw className="w-6 h-6 animate-spin text-orange-500 mx-auto" />
                  <p className="text-xs text-slate-500">Loading mock test attempts from Cloudflare D1...</p>
                </div>
              ) : testAttempts.length === 0 ? (
                <div className="p-12 text-center rounded-2xl border border-dashed border-slate-200 space-y-3">
                  <GraduationCap className="w-10 h-10 text-slate-300 mx-auto" />
                  <div className="text-sm font-bold text-slate-700">No Mock Test Submissions Yet</div>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    When students take a CBT mock test on the website, their scores, answers, and timestamps are automatically saved to Cloudflare D1 and will appear here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold">
                        <th className="py-3 px-4">Candidate Roll</th>
                        <th className="py-3 px-4">Test Title</th>
                        <th className="py-3 px-4">Medium</th>
                        <th className="py-3 px-4">Score</th>
                        <th className="py-3 px-4">Breakdown (C / I / S)</th>
                        <th className="py-3 px-4">Time Taken</th>
                        <th className="py-3 px-4">Submitted At</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {testAttempts
                        .filter(a => {
                          if (!attemptSearch) return true;
                          const q = attemptSearch.toLowerCase();
                          return (
                            (a.testTitle && a.testTitle.toLowerCase().includes(q)) ||
                            (a.testId && a.testId.toLowerCase().includes(q)) ||
                            (a.candidateRoll && a.candidateRoll.toLowerCase().includes(q))
                          );
                        })
                        .map((attempt) => {
                          const dateStr = attempt.createdAt
                            ? new Date(attempt.createdAt).toLocaleString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })
                            : '—';

                          return (
                            <tr key={attempt.id} className="hover:bg-slate-50/80 transition">
                              <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                                {attempt.candidateRoll || 'TARGET-CBT-2026'}
                              </td>
                              <td className="py-3.5 px-4 font-bold text-slate-900 max-w-[220px] truncate" title={attempt.testTitle}>
                                {attempt.testTitle || attempt.testId}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  attempt.language === 'en'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                  {attempt.language === 'en' ? 'English' : 'Hindi'}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-black text-emerald-600">
                                {attempt.score} <span className="text-slate-400 font-normal">/ {attempt.totalMarks}</span>
                              </td>
                              <td className="py-3.5 px-4">
                                <div className="flex items-center space-x-1.5 text-[11px] font-mono">
                                  <span className="text-emerald-700 font-bold" title="Correct">+{attempt.correctCount}</span>
                                  <span className="text-slate-300">/</span>
                                  <span className="text-rose-600 font-bold" title="Incorrect">-{attempt.incorrectCount}</span>
                                  <span className="text-slate-300">/</span>
                                  <span className="text-slate-500 font-medium" title="Skipped">{attempt.unattemptedCount}</span>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 text-slate-600">
                                {Math.floor((attempt.timeSpentSeconds || 0) / 60)}m {(attempt.timeSpentSeconds || 0) % 60}s
                              </td>
                              <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                                {dateStr}
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <div className="flex items-center justify-end space-x-2">
                                  <button
                                    onClick={() => setSelectedAttemptDetail(attempt)}
                                    className="p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                                    title="View Answer Sheet"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteAttempt(attempt.id)}
                                    className="p-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition"
                                    title="Delete Attempt"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Answer Sheet Inspection Modal */}
        {selectedAttemptDetail && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    CBT Submission Answer Sheet
                  </h3>
                  <div className="text-xs text-slate-500">
                    {selectedAttemptDetail.testTitle} • {selectedAttemptDetail.candidateRoll || 'TARGET-CBT-2026'}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAttemptDetail(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Stats pill */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl text-xs text-center">
                <div>
                  <span className="text-slate-500 block text-[10px]">Score</span>
                  <strong className="text-emerald-700 text-base">{selectedAttemptDetail.score} / {selectedAttemptDetail.totalMarks}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Correct / Incorrect</span>
                  <strong className="text-slate-800 text-sm">+{selectedAttemptDetail.correctCount} / -{selectedAttemptDetail.incorrectCount}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Time Taken</span>
                  <strong className="text-slate-800 text-sm">{Math.floor((selectedAttemptDetail.timeSpentSeconds || 0) / 60)}m {(selectedAttemptDetail.timeSpentSeconds || 0) % 60}s</strong>
                </div>
              </div>

              {/* Submitted Answers JSON inspection */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">Student Submitted Choices:</div>
                <div className="p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto max-h-60">
                  <pre>{JSON.stringify(selectedAttemptDetail.userAnswers || {}, null, 2)}</pre>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedAttemptDetail(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
