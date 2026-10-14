import { Subject } from '../types';
import { MATHS_SUBJECT } from './syllabus/maths';
import { REASONING_SUBJECT } from './syllabus/reasoning';
import { GA_SUBJECT } from './syllabus/ga';
import { GK_SUBJECT } from './syllabus/gk';
import { HINDI_SUBJECT } from './syllabus/hindi';
import { ENGLISH_SUBJECT } from './syllabus/english';

const computeStats = (subj: Subject): Subject => {
  const totalQuestions = subj.chapters.reduce(
    (sum, ch) => sum + (ch.practiceQuestions?.length || 0),
    0
  );
  return {
    ...subj,
    totalChapters: subj.chapters.length,
    totalQuestions: totalQuestions || subj.totalQuestions,
  };
};

export const SYLLABUS_DATA: Subject[] = [
  computeStats(MATHS_SUBJECT),
  computeStats(REASONING_SUBJECT),
  computeStats(GA_SUBJECT),
  computeStats(GK_SUBJECT),
  computeStats(HINDI_SUBJECT),
  computeStats(ENGLISH_SUBJECT),
];
