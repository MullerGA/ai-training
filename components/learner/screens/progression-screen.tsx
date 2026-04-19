"use client";

import { CheckCircle2, Circle, PlayCircle, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { allParcours } from "@/lib/content";
import { useLearnerState } from "@/lib/storage/learner-state";
import { cn } from "@/lib/utils";

type ModuleStatus = "termine" | "en cours" | "non commence";

function getModuleStatus(
  completedModules: string[],
  moduleProgress: Record<string, number>,
  key: string,
): ModuleStatus {
  if (completedModules.includes(key)) return "termine";
  if ((moduleProgress[key] ?? 0) > 0) return "en cours";
  return "non commence";
}

export function ProgressionScreen() {
  const { state, resetState } = useLearnerState();

  const modules = allParcours.flatMap((parcours) =>
    parcours.modules.map((module) => ({
      key: `${parcours.slug}/${module.slug}`,
      href: `/formations/${parcours.slug}/${module.slug}`,
      parcoursTitle: parcours.title,
      moduleIndex: module.index,
      moduleTitle: module.title,
      moduleMinutes: module.estimatedMinutes,
    })),
  );

  const totalModules = modules.length;
  const completedCount = modules.filter((module) =>
    state.completedModules.includes(module.key),
  ).length;
  const globalProgress = totalModules === 0 ? 0 : Math.round((completedCount / totalModules) * 100);

  const hasStarted = modules.some(
    (module) =>
      state.completedModules.includes(module.key) || (state.moduleProgress[module.key] ?? 0) > 0,
  );

  const handleReset = () => {
    const confirmed = window.confirm(
      "Confirmer la reinitialisation ? Cette action efface toute ta progression locale.",
    );
    if (!confirmed) return;
    resetState();
  };

  return (
    <main className="w-full space-y-6 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <h1 className="page-title">Progression</h1>
        <p className="page-lead">
          Suis ton avancement et reprends les modules la ou tu t&apos;es arrete.
        </p>
      </section>

      <section className="panel-card space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-[var(--slate-700)]">
            {completedCount} / {totalModules} modules termines
          </p>
          <span className="text-caption">{globalProgress}%</span>
        </div>
        <Progress value={globalProgress} gradient />
        <Button type="button" variant="destructive" size="sm" onClick={handleReset}>
          <RotateCcw />
          Reinitialiser ma progression
        </Button>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--slate-900)]">Modules</h2>

        {!hasStarted ? (
          <div className="panel-card p-6 text-sm text-[var(--slate-500)]">
            Aucun module commence pour l&apos;instant.
          </div>
        ) : null}

        <ul className="space-y-2">
          {modules.map((module) => {
            const status = getModuleStatus(
              state.completedModules,
              state.moduleProgress,
              module.key,
            );
            const moduleProgress = state.moduleProgress[module.key] ?? 0;

            return (
              <li key={module.key}>
                <Link
                  href={module.href}
                  className="panel-card flex items-start gap-4 p-4 focus-ring"
                >
                  <div className="mt-0.5 shrink-0">
                    {status === "termine" ? (
                      <CheckCircle2 className="size-5 text-[var(--green-500)]" />
                    ) : status === "en cours" ? (
                      <PlayCircle className="size-5 text-[var(--blue-500)]" />
                    ) : (
                      <Circle className="size-5 text-[var(--slate-300)]" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-caption">{module.parcoursTitle}</p>
                      <p className="text-caption">{module.moduleMinutes} min</p>
                    </div>
                    <p className="text-sm font-medium text-[var(--slate-900)]">
                      Module {module.moduleIndex} - {module.moduleTitle}
                    </p>
                    {status === "en cours" ? (
                      <p className="text-caption">Progression locale: {moduleProgress}%</p>
                    ) : null}
                  </div>

                  <span
                    className={cn(
                      "shrink-0 self-start rounded-full px-2 py-0.5 text-xs font-medium",
                      status === "termine" && "bg-[var(--green-500)]/10 text-[var(--green-600)]",
                      status === "en cours" && "bg-[var(--blue-50)] text-[var(--blue-600)]",
                      status === "non commence" && "bg-[var(--slate-100)] text-[var(--slate-600)]",
                    )}
                  >
                    {status}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
