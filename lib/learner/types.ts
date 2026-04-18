export type LearnerStatus = "done" | "current" | "next" | "locked";

export type LearningObjective = {
  id: string;
  text: string;
};

export type FundamentalConcept = {
  id: string;
  title: string;
  description: string;
};

export type TimelineMilestone = {
  id: string;
  year: number;
  label: string;
  description: string;
  era: "history" | "current" | "projection";
};

export type PromptTemplate = {
  id: string;
  title: string;
  description: string;
  category: "business" | "academic" | "creative" | "technical";
  complexity: "basic" | "intermediate" | "advanced";
  tags: string[];
  prompt: string;
};

export type MessageSender = "human" | "assistant";

export type ConversationMessage = {
  id: string;
  content: string;
  sender: MessageSender;
};

export type ConversationState = {
  id: string;
  timelineLabel: string;
  contextWindow: {
    active: string[];
    recent: string[];
  };
  memoryStack: {
    high: string[];
    medium: string[];
    low: string[];
  };
  messages: ConversationMessage[];
};

export type LabPrediction = {
  token: string;
  probability: number;
  description: string;
};

export type LabInputToken = {
  word: string;
  tokens: string[];
};

export type LabScenario = {
  id: string;
  title: string;
  prompt: string;
  description: string;
  inputTokens: LabInputToken[];
  predictions: LabPrediction[];
};

export type LearnerModule = {
  id: string;
  index: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  status: LearnerStatus;
  type?: "Vidéo" | "Lecture" | "Exercice" | "Quiz";
  objectives?: LearningObjective[];
  keyTakeaways?: string[];
  interactiveKind?: "fundamentals" | "context" | "lab";
};

export type LearnerCourse = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  progress: number;
  tag?: "En cours" | "Terminé";
  category: string;
};

export type LearnerChapter = {
  id: string;
  index: number;
  title: string;
  duration: string;
  type: "Vidéo" | "Lecture" | "Exercice" | "Quiz";
  status: LearnerStatus;
  objectives?: LearningObjective[];
  keyTakeaways?: string[];
  interactiveKind?: "fundamentals" | "context" | "lab";
};

export type LearnerProgress = {
  validatedModules: string;
  totalHours: string;
  avgScore: string;
  streak: string;
  weeklyMinutes: number[];
  skills: Array<{ label: string; value: number }>;
};

export type LearnerRecommendation = {
  id: string;
  title: string;
  description: string;
};
