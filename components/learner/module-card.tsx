import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { LearnerModule } from "@/lib/learner/types";
import { cn } from "@/lib/utils";

export function ModuleCard({ module }: { module: LearnerModule }) {
  return (
    <article className="panel-card p-5">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
            module.status === "done" && "bg-[var(--green-500)] text-white",
            module.status === "current" && "bg-[var(--blue-600)] text-white",
            module.status === "next" && "bg-[var(--blue-50)] text-[var(--blue-600)]",
            module.status === "locked" && "bg-[var(--slate-200)] text-[var(--slate-400)]",
          )}
        >
          {module.status === "done" ? <Check className="size-4" /> : module.index}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-[var(--slate-900)]">{module.title}</h3>
            {module.status === "done" && <Badge variant="success">Terminé</Badge>}
            {module.status === "current" && <Badge variant="info">En cours</Badge>}
          </div>
          <p className="text-sm text-[var(--slate-600)]">{module.description}</p>
          <p className="mt-2 text-xs text-[var(--slate-500)]">
            {module.duration}
            {module.progress > 0 && module.progress < 100 ? ` · ${module.progress}% complété` : ""}
          </p>
          {module.progress > 0 && module.progress < 100 ? (
            <Progress value={module.progress} gradient className="mt-3" />
          ) : null}
        </div>

        <Button
          variant={module.status === "current" ? "gradient" : "outline"}
          size="sm"
          disabled={module.status === "locked"}
        >
          {module.status === "done"
            ? "Revoir"
            : module.status === "current"
              ? "Continuer"
              : module.status === "locked"
                ? "Verrouillé"
                : "Commencer"}
        </Button>
      </div>
    </article>
  );
}
