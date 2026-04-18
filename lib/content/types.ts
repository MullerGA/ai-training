export type Parcours = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  estimatedMinutes: number;
  modules: Module[];
};

export type Module = {
  slug: string;
  index: number;
  title: string;
  summary: string;
  estimatedMinutes: number;
  sections: ModuleSection[];
};

export type ModuleSection =
  | { kind: "intro"; title?: string; body: string }
  | { kind: "concept"; title: string; body: string; keyPoints?: string[] }
  | { kind: "interactive"; widget: InteractiveWidget }
  | { kind: "exercise"; prompt: string; hints?: string[]; sampleAnswer?: string }
  | { kind: "recap"; title: string; takeaways: string[] };

// Tous les widgets du catalogue (config étendue au fil des lots)
export type InteractiveWidget =
  // Parcours 1 — Le monde de l'IA
  | { type: "timeline" }
  | { type: "hype-cycle" }
  | { type: "iceberg-explorer" }
  | { type: "market-gallery" }
  // Parcours 2 — Les LLM
  | { type: "lab-funnel"; scenarioId: string }
  | { type: "tokenizer-demo"; text: string }
  | { type: "context-window" }
  | { type: "hallucination-spotter" }
  // Parcours 3 — Anatomie d'un prompt
  | { type: "prompt-builder" }
  | { type: "prompt-compare" }
  // Parcours 4 — Les outils avancés
  | { type: "tool-call-simulator" }
  | { type: "rag-flow" }
  | { type: "mcp-diagram" }
  | { type: "agent-loop" };
