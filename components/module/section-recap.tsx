import { CheckCircle2 } from "lucide-react";
import type { ModuleSection } from "@/lib/content/types";

type SectionRecapProps = {
  section: Extract<ModuleSection, { kind: "recap" }>;
};

export function SectionRecap({ section }: SectionRecapProps) {
  return (
    <div className="panel-card p-6">
      <h2 className="text-lg font-semibold text-[var(--slate-900)]">{section.title}</h2>
      <ul className="mt-4 space-y-2">
        {section.takeaways.map((takeaway) => (
          <li key={takeaway} className="flex items-start gap-2 text-sm text-[var(--slate-700)]">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--green-600)]" />
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
