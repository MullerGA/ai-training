import type { ModuleSection } from "@/lib/content/types";

type SectionInteractiveProps = {
  section: Extract<ModuleSection, { kind: "interactive" }>;
};

const widgetNames: Record<SectionInteractiveProps["section"]["widget"]["type"], string> = {
  timeline: "Frise chronologique",
  "hype-cycle": "Hype cycle",
  "iceberg-explorer": "Iceberg explorer",
  "market-gallery": "Galerie acteurs",
  "lab-funnel": "Lab funnel",
  "tokenizer-demo": "Tokenizer demo",
  "context-window": "Fenetre de contexte",
  "hallucination-spotter": "Hallucination spotter",
  "prompt-builder": "Prompt builder",
  "prompt-compare": "Prompt compare",
  "tool-call-simulator": "Tool call simulator",
  "rag-flow": "RAG flow",
  "mcp-diagram": "MCP diagram",
  "agent-loop": "Agent loop",
};

export function SectionInteractive({ section }: SectionInteractiveProps) {
  const widgetName = widgetNames[section.widget.type];

  return (
    <div className="panel-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-[var(--slate-900)]">Bloc interactif</h2>
        <span className="rounded-full bg-[var(--blue-50)] px-2.5 py-0.5 text-xs font-medium text-[var(--blue-700)]">
          {widgetName}
        </span>
      </div>
      <div className="mt-4 rounded-lg border border-dashed border-[var(--slate-300)] bg-[var(--slate-50)] p-4">
        <p className="text-sm font-medium text-[var(--slate-700)]">
          Widget "{section.widget.type}" branche en Lot 5.
        </p>
        <p className="mt-1 text-xs text-[var(--slate-500)]">
          Placeholder temporaire pour valider le rendu unifie du module.
        </p>
      </div>
    </div>
  );
}
