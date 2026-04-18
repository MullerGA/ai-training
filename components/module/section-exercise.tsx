import { Lightbulb } from "lucide-react";
import type { ModuleSection } from "@/lib/content/types";

type SectionExerciseProps = {
  section: Extract<ModuleSection, { kind: "exercise" }>;
};

export function SectionExercise({ section }: SectionExerciseProps) {
  return (
    <div className="panel-card p-6">
      <h2 className="text-lg font-semibold text-[var(--slate-900)]">Exercice</h2>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--slate-700)]">
        {section.prompt}
      </p>

      {section.hints && section.hints.length > 0 ? (
        <div className="mt-4 rounded-lg bg-[var(--blue-50)] p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--blue-700)]">
            <Lightbulb className="size-4" />
            Indices
          </p>
          <ul className="space-y-1 text-sm text-[var(--slate-700)]">
            {section.hints.map((hint) => (
              <li key={hint}>- {hint}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {section.sampleAnswer ? (
        <div className="mt-4 rounded-lg border border-[var(--slate-200)] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--slate-500)]">
            Exemple de reponse
          </p>
          <p className="mt-2 whitespace-pre-line text-sm text-[var(--slate-700)]">
            {section.sampleAnswer}
          </p>
        </div>
      ) : null}
    </div>
  );
}
