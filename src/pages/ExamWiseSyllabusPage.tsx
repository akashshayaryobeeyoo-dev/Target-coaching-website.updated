import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  HelpCircle, 
  Award, 
  ShieldCheck, 
  FileText, 
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EXAM_DATA } from '../data/examData';
import { ExamId } from '../types';

export const ExamWiseSyllabusPage: React.FC = () => {
  const { selectedExamId, setSelectedExamId, setActivePage } = useApp();

  const currentExam = EXAM_DATA.find(e => e.examId === selectedExamId) || EXAM_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
          Official Recruitment Verification
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Exam-Wise Pattern & Syllabus Breakdown
        </h1>
        <p className="text-sm text-slate-600">
          Mapped against latest official government recruitment notifications (SSC, RRB, UPPRPB, UPSSSC, Indian Army). No unverified or outdated exam patterns.
        </p>
      </div>

      {/* Exam Selector Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
        {EXAM_DATA.map((exam) => {
          const isSelected = selectedExamId === exam.examId;
          return (
            <button
              key={exam.examId}
              onClick={() => setSelectedExamId(exam.examId)}
              className={`p-2.5 rounded-xl text-center text-xs font-bold transition border ${
                isSelected
                  ? 'bg-blue-900 text-white border-blue-900 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-blue-400'
              }`}
            >
              <div className="truncate">{exam.shortName}</div>
            </button>
          );
        })}
      </div>

      {/* Main Selected Exam Deep Dive Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
        {/* Exam Header Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="text-xs font-black px-3 py-1 rounded-full bg-orange-500 text-white uppercase tracking-wider">
              {currentExam.conductingBody}
            </span>
            <span className="text-xs text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
              Target Batch Monthly Fee: ₹700
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {currentExam.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-semibold">Educational Qualification:</span>
              <strong className="text-white">{currentExam.qualification}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Age Criterion:</span>
              <strong className="text-white">{currentExam.ageLimit}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Frequency:</span>
              <strong className="text-white">{currentExam.frequency}</strong>
            </div>
          </div>
        </div>

        {/* Selection Stages Progression */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-3">
            Official Selection Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentExam.selectionProcess.map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start space-x-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="font-medium text-slate-800">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Notification Verification Note */}
        <div className="p-5 bg-amber-50/90 border-b border-amber-200 text-xs text-amber-950 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5">Notification Verification Guarantee:</strong>
            {currentExam.officialNotificationNote}
          </div>
        </div>

        {/* Exam Stages Detailed Breakdown */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="text-lg font-black text-slate-900 mb-4">
              Tier / Stage-wise Marks, Duration & Negative Marking
            </h3>

            <div className="space-y-6">
              {currentExam.stages.map((stage, sIdx) => (
                <div key={sIdx} className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="p-4 bg-slate-100 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{stage.stageName}</h4>
                      <span className="text-xs text-slate-500">{stage.mode}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-white font-bold text-slate-700 border border-slate-200">
                        {stage.totalQuestions} Questions • {stage.totalMarks} Marks
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white font-bold text-slate-700 border border-slate-200">
                        ⏱️ {stage.durationMinutes} Minutes
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 font-bold border border-rose-200">
                        ⚠️ Negative: {stage.negativeMarking}
                      </span>
                    </div>
                  </div>

                  {/* Subject Distribution Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 pl-5">Subject / Section</th>
                          <th className="p-3.5 text-center">Number of Questions</th>
                          <th className="p-3.5 text-center">Maximum Marks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {stage.subjectDistribution.map((item, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-50/80">
                            <td className="p-3.5 pl-5 font-bold text-slate-900">{item.subject}</td>
                            <td className="p-3.5 text-center text-slate-700">{item.questions} Qs</td>
                            <td className="p-3.5 text-center font-bold text-blue-900">{item.marks} Marks</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Topics Checklist */}
          <div>
            <h3 className="text-lg font-black text-slate-900 mb-4">
              Subject Weightage & High-Yield Syllabus Topics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentExam.syllabusOverview.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <h4 className="text-sm font-black text-blue-900">{item.subject}</h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                      {item.weightage}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.topics.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box to Practice Mocks for this Exam */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-black">
                Practice Mock Tests for {currentExam.shortName}
              </h4>
              <p className="text-xs text-blue-200 mt-0.5">
                Take timed practice tests with negative marking and instant score card.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('tests');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition whitespace-nowrap"
            >
              Start {currentExam.shortName} Mock →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
