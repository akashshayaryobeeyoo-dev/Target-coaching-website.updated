-- Cloudflare D1 Schema for TARGET Coaching Centre

-- 1. Site Settings & Configuration (Persistent Photo URL & Institute Details)
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- Seed default initial settings
INSERT OR IGNORE INTO settings (key, value, updated_at) 
VALUES ('teacherPhotoUrl', '/ashvani-sir.png', datetime('now'));

INSERT OR IGNORE INTO settings (key, value, updated_at) 
VALUES (
  'centerInfo', 
  '{"name":"Target Coaching Classes","headFaculty":"Ashvani Sir (Founder & Main Faculty)","monthlyFee":700,"phone1":"097594 46215","phone2":"097594 46215","phoneRaw":"09759446215","whatsapp":"919759446215","email":"targetcoaching.ashvanisir@gmail.com","area":"Khatri Garhi, Baraut","district":"Baghpat","state":"Uttar Pradesh","pincode":"250611","addressLine1":"Target Coaching Classes, Khatri Garhi","addressLine2":"Baraut, Baghpat","landmark":"Uttar Pradesh 250611, India","fullAddress":"Target Coaching Classes, Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.","mapsUrl":"https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611","whatsappUrl":"https://wa.me/919759446215","timings":"Morning Batch: 8:20 AM – 12:00 PM | Afternoon Batch: 12:20 PM – 3:00 PM","morningBatch":"8:20 AM to 12:00 PM","afternoonBatch":"12:20 PM to 3:00 PM","upiId":"targetashvani@upi","bankAccount":"TARGET COACHING CLASSES","ifscCode":"BARB0BARAUT"}', 
  datetime('now')
);

-- 2. Administrator Credentials & Salt (Stored as PBKDF2 hash, never plaintext)
CREATE TABLE IF NOT EXISTS admin (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 3. Student Inquiries
CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  fullName TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  email TEXT,
  targetExam TEXT,
  qualification TEXT,
  batchPreference TEXT,
  addressOrCity TEXT,
  message TEXT,
  status TEXT DEFAULT 'New',
  notes TEXT,
  createdAt TEXT NOT NULL
);

-- 4. Urgent Notices and Announcements
CREATE TABLE IF NOT EXISTS announcements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  date TEXT NOT NULL,
  badge TEXT DEFAULT 'New Batch',
  isImportant INTEGER DEFAULT 0,
  active INTEGER DEFAULT 1
);
