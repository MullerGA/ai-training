export type LearnerStatus = "done" | "current" | "next" | "locked";

export type LearnerModule = {
  id: string;
  index: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  status: LearnerStatus;
  type?: "VidÃ©o" | "Lecture" | "Exercice" | "Quiz";
};

export type LearnerCourse = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  progress: number;
  tag?: "En cours" | "TerminÃ©";
  category: string;
};

export type LearnerChapter = {
  id: string;
  index: number;
  title: string;
  duration: string;
  type: "VidÃ©o" | "Lecture" | "Exercice" | "Quiz";
  status: LearnerStatus;
};

export type LearnerProgress = {
  validatedModules: string;
  totalHours: string;
  avgScore: string;
  streak: string;
  weeklyMinutes: number[];
  skills: Array<{ label: string; value: number }>;
};