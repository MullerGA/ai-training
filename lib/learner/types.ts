export type PromptTemplate = {
  id: string;
  title: string;
  description: string;
  category: "business" | "academic" | "creative" | "technical";
  complexity: "basic" | "intermediate" | "advanced";
  tags: string[];
  prompt: string;
};

export type TimelineMilestone = {
  id: string;
  year: number;
  label: string;
  description: string;
  era: "history" | "current" | "projection";
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
