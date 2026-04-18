"use client";

import { CheckCircle2, Circle, Clock, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import type { Parcours } from "@/lib/content/types";
import { getParcoursProgress, useLearnerState } from "@/lib/storage/learner-state";
import { cn } from "@/lib/utils";

type ModuleStatus = "terminé" | "en cours" | "non commencé";

function getModuleStatus(
  completedModules: string[],
  moduleProgress: Record<string, number>,
  key: string,
): ModuleStatus {
  if (completedModules.includes(key)) return "terminé";
  if ((moduleProgress[key] ?? 0) > 0) return "en cours";
  return "non commencé";
}

export function ParcoursDetail({ parcours }: { parcours: Parcours }) {
  const { state } = useLearnerState();
  const progress = getParcoursProgress(state, parcours.slug, parcours.modules.length);
  const completedCount = state.completedModules.filter((k) =>
    k.startsWith(`${parcours.slug}/`),
  ).length;
  const allComplete = progress === 100;

  const resumeSlug = (() => {
    if (state.lastVisited?.parcours === parcours.slug) {
      return state.lastVisited.module;
    }
    const firstIncomplete = parcours.modules.find(
      (m) => !state.completedModules.includes(`${parcours.slug}/${m.slug}`),
    );
    return (firstIncomplete ?? parcours.modules[0]).slug;
  })();

  return (
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav
          className="mb-6 flex items-center gap-1.5 text-sm text-[var(--slate-500)]"
          aria-label="Fil d'Ariane"
        >
          <Link href="/formations" className="transition-colors hover:text-[var(--slate-900)]">
            Formations
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-[var(--slate-900)]">{parcours.title}</span>
        </nav>

        {/* Header */}
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--blue-50)] px-2.5 py-0.5 text-xs font-medium text-[var(--blue-700)]">
              {parcours.level}
            </span>
            <span className="flex items-center gap-1 text-caption">
              <Clock className="size-3.5" />
              {parcours.estimatedMinutes} min
            </span>
            <span className="text-caption">
              {parcours.modules.length} module
              {parcours.modules.length > 1 ? "s" : ""}
            </span>
          </div>
          <h1 className="page-title">{parcours.title}</h1>
          <p className="page-lead">{parcours.description}</p>
        </header>

        {/* Progression + CTA */}
        <div className="mt-8 space-y-3 rounded-xl border border-[var(--slate-200)] bg-[var(--slate-50)] p-5">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-[var(--slate-700)]">
              {allComplete ? "Parcours terminé ✓" : `Progression`}
            </span>
            <span className="text-caption">
              {completedCount} / {parcours.modules.length} modules — {progress}%
            </span>
          </div>
          <Progress value={progress} gradient />
          <div className="pt-1">
            <Link
              href={`/formations/${parcours.slug}/${resumeSlug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--blue-500)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--blue-600)] focus-ring"
            >
              <PlayCircle className="size-4" />
              {allComplete ? "Revoir le parcours" : progress > 0 ? "Reprendre" : "Commencer"}
            </Link>
          </div>
        </div>

        {/* Liste des modules */}
        <section className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-[var(--slate-900)]">Modules</h2>
          <ol className="space-y-2">
            {parcours.modules.map((m) => {
              const key = `${parcours.slug}/${m.slug}`;
              const status = getModuleStatus(state.completedModules, state.moduleProgress, key);
              return (
                <li key={m.slug}>
                  <Link
                    href={`/formations/${parcours.slug}/${m.slug}`}
                    className="panel-card flex items-start gap-4 p-4 focus-ring"
                  >
                    <div className="mt-0.5 shrink-0">
                      {status === "terminé" && (
                        <CheckCircle2 className="size-5 text-[var(--green-500)]" />
                      )}
                      {status === "en cours" && (
                        <PlayCircle className="size-5 text-[var(--blue-500)]" />
                      )}
                      {status === "non commencé" && (
                        <Circle className="size-5 text-[var(--slate-300)]" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-caption">Module {m.index}</span>
                        <span className="text-caption">{m.estimatedMinutes} min</span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-[var(--slate-900)]">
                        {m.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-[var(--slate-500)]">
                        {m.summary}
                      </p>
                    </div>
                    {status !== "non commencé" && (
                      <span
                        className={cn(
                          "shrink-0 self-start rounded-full px-2 py-0.5 text-xs font-medium",
                          status === "terminé"
                            ? "bg-[var(--green-500)]/10 text-[var(--green-600)]"
                            : "bg-[var(--blue-50)] text-[var(--blue-600)]",
                        )}
                      >
                        {status}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}
