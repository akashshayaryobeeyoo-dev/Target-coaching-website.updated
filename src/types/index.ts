export type SubjectId = 'maths' | 'reasoning' | 'ga' | 'gk' | 'hindi' | 'english';

export type ExamId = 
  | 'ssc-cgl' 
  | 'ssc-chsl' 
  | 'ssc-mts' 
  | 'ssc-gd' 
  | 'railway-ntpc' 
  | 'railway-group-d' 
  | 'up-police' 
  | 'upsssc-pet' 
  | 'army-agniveer';

export type DifficultyLevel = 'Basic' | 'Intermediate' | 'Advanced';

export type TestLanguage = 'en' | 'hi';

export interface SolvedExample {
  id: string;
  problem: string;
  solution: string;
  trickOrTip?: string;
  examAppearance?: string;
}

export interface Question {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  chapterName: string;
  chapterNameHindi?: string;
  question: string;
  questionHindi?: string;
  options: [string, string, string, string];
  optionsHindi?: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  explanationHindi?: string;
  difficulty: DifficultyLevel;
  examTags: string[];
}

export interface Topic {
  id: string;
  title: string;
  titleHindi?: string;
  difficulty: DifficultyLevel;
  subtopics: string[];
  keyFormulasOrRules?: string[];
  solvedExamples?: SolvedExample[];
  examMapping: ExamId[];
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  name: string;
  nameHindi?: string;
  difficulty: DifficultyLevel;
  description: string;
  estimatedHours: number;
  topics: Topic[];
  practiceQuestions: Question[];
  relevantExams: ExamId[];
}

export interface Subject {
  id: SubjectId;
  name: string;
  hindiName: string;
  iconName: string;
  color: string;
  description: string;
  totalChapters: number;
  totalQuestions: number;
  chapters: Chapter[];
}

export interface ExamPattern {
  examId: ExamId;
  name: string;
  shortName: string;
  conductingBody: string;
  frequency: string;
  ageLimit: string;
  qualification: string;
  selectionProcess: string[];
  stages: {
    stageName: string;
    totalMarks: number;
    totalQuestions: number;
    durationMinutes: number;
    negativeMarking: string;
    mode: string;
    subjectDistribution: {
      subject: string;
      questions: number;
      marks: number;
    }[];
  }[];
  officialNotificationNote: string;
  syllabusOverview: {
    subject: string;
    topics: string[];
    weightage: string;
  }[];
}

export interface MockTest {
  id: string;
  title: string;
  titleHindi?: string;
  subtitle: string;
  subtitleHindi?: string;
  category: 'Full Mock' | 'Subject Test' | 'Previous Year Based';
  subjectId?: SubjectId;
  examId?: ExamId;
  durationMinutes: number;
  totalMarks: number;
  negativeMarking: number; // e.g. 0.25 or 0.5
  questions: Question[];
  instructions: string[];
  instructionsHindi?: string[];
}

export interface TestResult {
  testId: string;
  testTitle: string;
  date: string;
  language: TestLanguage;
  score: number;
  totalMarks: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  timeSpentSeconds: number;
  userAnswers: Record<string, number>; // questionId -> selectedOptionIndex
}

export interface AdmissionInquiry {
  id: string;
  fullName: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  targetExam: string;
  qualification: string;
  batchPreference: string;
  addressOrCity: string;
  message?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Closed';
  notes?: string;
}

export interface CourseBatch {
  id: string;
  title: string;
  badge: string;
  targetExams: string[];
  timings: string;
  dailyHours: string;
  monthlyFee: number;
  features: string[];
  startDate: string;
  seatsLeft: number;
  instructor: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  isImportant?: boolean;
  content: string;
  linkText?: string;
  linkPage?: string;
}
