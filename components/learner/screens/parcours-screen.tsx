import { ArrowRight, Bookmark, Check, ChevronRight, Clock3, Layers } from "lucide-react";

import { ProgressBlock } from "@/components/learner/progress-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dashboardModules, pathChapters } from "@/lib/learner/data";

export function ParcoursScreen() {
  const currentModule =
    dashboardModules.find((module) => module.id === "m2") ?? dashboardModules[0];

  return (
    <div className="grid w-full gap-6 px-4 py-8 md:px-6 xl:grid-cols-[1fr_320px] xl:px-8">
      <div className="space-y-6">
        <div className="text-caption flex items-center gap-2">
          <span>Catalogue</span>
          <ChevronRight className="size-3" />
          <span>Fondamentaux IA</span>
          <ChevronRight className="size-3" />
          <span className="font-medium text-[var(--slate-900)]">{currentModule.title}</span>
        </div>

        <section>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="info">Module {currentModule.index} sur 4</Badge>
            <Badge variant="outline">Niveau débutant</Badge>
          </div>
          <h1 className="page-title">{currentModule.title}</h1>
          <p className="page-lead">{currentModule.description}</p>
        </section>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Objectifs du module</h2>
            <p className="text-caption mt-0.5">Ce que tu sauras faire à la fin</p>
          </div>
          <div className="space-y-3 p-5">
            {(currentModule.objectives ?? []).map((goal) => (
              <div key={goal.id} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-[#dcfce7] text-[#15803d]">
                  <Check className="size-3.5" />
                </span>
                <p className="text-sm text-[var(--slate-700)]">{goal.text}</p>
              </div>
            ))}
          </div>
        </article>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--slate-900)]">Chapitres</h2>
          <article className="overflow-hidden rounded-xl border border-[var(--slate-200)] bg-white">
            {pathChapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  background: chapter.status === "current" ? "var(--blue-50)" : "white",
                  borderBottom:
                    index < pathChapters.length - 1 ? "1px solid var(--slate-200)" : "none",
                  opacity: chapter.status === "locked" ? 0.6 : 1,
                }}
              >
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--slate-100)] text-xs font-semibold text-[var(--slate-600)]">
                  {chapter.status === "done" ? <Check className="size-3" /> : chapter.index}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--slate-900)]">
                    {chapter.title}
                  </p>
                  <p className="text-caption">
                    {chapter.type} · {chapter.duration}
                  </p>
                </div>
                {chapter.interactiveKind ? (
                  <Badge variant="outline">{chapter.interactiveKind}</Badge>
                ) : null}
                {chapter.status === "current" ? <Badge variant="info">En cours</Badge> : null}
                {chapter.status === "next" ? (
                  <ChevronRight className="size-4 text-[var(--slate-400)]" />
                ) : null}
                {chapter.status === "locked" ? (
                  <span className="text-caption">Verrouillé</span>
                ) : null}
              </div>
            ))}
          </article>
        </section>
      </div>

      <aside className="space-y-4">
        <article className="panel-card p-4">
          <p className="text-caption mb-1">Progression du module</p>
          <p className="mb-3 text-3xl font-bold text-[var(--slate-900)]">
            {currentModule.progress}%
          </p>
          <ProgressBlock value={currentModule.progress} />
          <Button className="mt-4 w-full" variant="gradient">
            Reprendre <ArrowRight className="size-4" />
          </Button>
        </article>
        <article className="panel-card p-4">
          <h3 className="mb-3 text-sm font-semibold text-[var(--slate-900)]">À savoir</h3>
          <ul className="space-y-2 text-sm text-[var(--slate-600)]">
            <li>
              <Clock3 className="mr-2 inline size-4" /> Durée · {currentModule.duration}
            </li>
            <li>
              <Layers className="mr-2 inline size-4" /> Format · Vidéo + exercice
            </li>
            <li>
              <Bookmark className="mr-2 inline size-4" /> Validation · Quiz 5 questions
            </li>
          </ul>
        </article>
      </aside>
    </div>
  );
}
