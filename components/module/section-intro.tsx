import type { ModuleSection } from "@/lib/content/types";

type SectionIntroProps = {
  section: Extract<ModuleSection, { kind: "intro" }>;
};

export function SectionIntro({ section }: SectionIntroProps) {
  return (
    <div className="panel-card p-6">
      <h2 className="text-lg font-semibold text-[var(--slate-900)]">
        {section.title ?? "Introduction"}
      </h2>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--slate-700)]">
        {section.body}
      </p>
    </div>
  );
}
