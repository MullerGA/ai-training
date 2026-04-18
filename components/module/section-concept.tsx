import { Check } from "lucide-react";
import type { ModuleSection } from "@/lib/content/types";

type SectionConceptProps = {
  section: Extract<ModuleSection, { kind: "concept" }>;
};

export function SectionConcept({ section }: SectionConceptProps) {
  return (
    <div className="panel-card p-6">
      <h2 className="text-lg font-semibold text-[var(--slate-900)]">{section.title}</h2>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--slate-700)]">
        {section.body}
      </p>
      {section.keyPoints && section.keyPoints.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {section.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-[var(--slate-700)]">
              <Check className="mt-0.5 size-4 shrink-0 text-[var(--blue-600)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
