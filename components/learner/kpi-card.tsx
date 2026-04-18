import type { LucideIcon } from "lucide-react";

export function KpiCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone: "blue" | "green" | "amber" | "slate";
}) {
  const toneClass = {
    blue: "bg-[var(--blue-50)] text-[var(--blue-600)]",
    green: "bg-[#dcfce7] text-[#15803d]",
    amber: "bg-[#fef3c7] text-[#a16207]",
    slate: "bg-[var(--slate-100)] text-[var(--slate-600)]",
  }[tone];

  return (
    <article className="panel-card p-4">
      <div className="flex items-center gap-3">
        <div className={`inline-flex size-9 items-center justify-center rounded-lg ${toneClass}`}>
          <Icon className="size-4" />
        </div>
        <div>
          <p className="text-caption">{label}</p>
          <p className="text-2xl leading-tight font-bold text-[var(--slate-900)]">{value}</p>
        </div>
      </div>
    </article>
  );
}
