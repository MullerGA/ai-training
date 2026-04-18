"use client";

import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import type { Parcours } from "@/lib/content/types";
import { getParcoursProgress, useLearnerState } from "@/lib/storage/learner-state";

export function ParcoursGrid({ parcours }: { parcours: Parcours[] }) {
  const { state } = useLearnerState();

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {parcours.map((p) => {
        const progress = getParcoursProgress(state, p.slug, p.modules.length);
        const completedCount = state.completedModules.filter((k) =>
          k.startsWith(`${p.slug}/`),
        ).length;

        return (
          <Link
            key={p.slug}
            href={`/formations/${p.slug}`}
            className="panel-card flex flex-col gap-3 p-6 focus-ring"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-[var(--blue-50)] px-2.5 py-0.5 text-xs font-medium text-[var(--blue-700)]">
                {p.level}
              </span>
              <span className="text-caption">{p.estimatedMinutes} min</span>
            </div>
            <h2 className="text-base font-semibold text-[var(--slate-900)]">{p.title}</h2>
            <p className="line-clamp-2 text-sm text-[var(--slate-600)]">{p.tagline}</p>
            <div className="mt-auto space-y-1.5">
              {progress > 0 ? (
                <>
                  <Progress value={progress} thin />
                  <div className="flex items-center justify-between">
                    <span className="text-caption">
                      {completedCount} / {p.modules.length} modules
                    </span>
                    <span className="text-caption font-medium text-[var(--blue-600)]">
                      {progress}%
                    </span>
                  </div>
                </>
              ) : (
                <span className="text-xs font-medium text-[var(--blue-600)]">
                  {p.modules.length} module{p.modules.length > 1 ? "s" : ""} →
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
