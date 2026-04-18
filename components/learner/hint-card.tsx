import { Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

export function HintCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="panel-card flex items-start gap-4 bg-[var(--blue-50)] p-4">
      <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--blue-600)]">
        <Lightbulb className="size-4" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[var(--slate-900)]">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-[var(--slate-700)]">{children}</div>
      </div>
    </article>
  );
}
