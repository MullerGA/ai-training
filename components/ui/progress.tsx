import { cn } from "@/lib/utils";

type ProgressProps = {
  value: number;
  gradient?: boolean;
  thin?: boolean;
  className?: string;
};

export function Progress({ value, gradient, thin, className }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-full bg-[var(--slate-200)]",
        thin ? "h-1" : "h-2",
        className,
      )}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-300",
          gradient ? "bg-learner-gradient" : "bg-[var(--blue-600)]",
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
