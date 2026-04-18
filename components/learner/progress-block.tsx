import { Progress } from "@/components/ui/progress";

export function ProgressBlock({ value, label }: { value: number; label?: string }) {
  return (
    <div>
      {label ? <p className="mb-2 text-xs font-medium text-[var(--slate-600)]">{label}</p> : null}
      <div className="flex items-center gap-3">
        <Progress value={value} gradient className="flex-1" />
        <span className="text-xs font-semibold text-[var(--slate-700)]">{value}%</span>
      </div>
    </div>
  );
}
