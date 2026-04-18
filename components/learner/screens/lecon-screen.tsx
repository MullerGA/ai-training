import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";

import { HintCard } from "@/components/learner/hint-card";
import { LessonPlayer } from "@/components/learner/lesson-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  learnerContextScenarios,
  learnerFundamentalConcepts,
  learnerTimeline,
  pathChapters,
} from "@/lib/learner/data";

export function LeconScreen() {
  const currentChapter = pathChapters.find((chapter) => chapter.id === "ch3") ?? pathChapters[0];
  const latestContext = learnerContextScenarios[learnerContextScenarios.length - 1];

  return (
    <div className="grid w-full gap-6 px-4 py-8 md:px-6 xl:grid-cols-[1fr_300px] xl:px-8">
      <div className="space-y-6">
        <div className="text-caption flex items-center gap-2">
          <span>Module 2 · Bien formuler ses prompts</span>
          <ChevronRight className="size-3" />
          <span className="font-medium text-[var(--slate-900)]">
            Chapitre {currentChapter.index} · {currentChapter.title}
          </span>
        </div>

        <LessonPlayer />

        <section>
          <h1 className="text-2xl font-semibold text-[var(--slate-900)]">{currentChapter.title}</h1>
          <p className="page-lead">
            Un prompt efficace repose sur 4 ingrédients que l'on peut combiner dans n'importe quel
            ordre.
          </p>
        </section>

        <HintCard title="À retenir">
          Les 4 ingrédients: <strong>rôle</strong>, <strong>contexte</strong>,{" "}
          <strong>tâche</strong>, <strong>format attendu</strong>.
        </HintCard>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">
              Concepts fondamentaux
            </h2>
            <p className="text-caption">Pont entre théorie et pratique</p>
          </div>
          <div className="space-y-3 p-5 text-sm leading-relaxed text-[var(--slate-700)]">
            {learnerFundamentalConcepts.map((concept) => (
              <div key={concept.id}>
                <p className="font-semibold text-[var(--slate-900)]">{concept.title}</p>
                <p>{concept.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Mémoire et contexte</h2>
            <p className="text-caption">Exemple de conversation progressive</p>
          </div>
          <div className="space-y-3 p-5 text-sm text-[var(--slate-700)]">
            <p className="text-xs uppercase tracking-wide text-[var(--blue-700)]">
              {latestContext.timelineLabel}
            </p>
            {latestContext.messages.map((message) => (
              <div key={message.id} className="rounded-md border border-[var(--slate-200)] p-3">
                <p className="font-semibold text-[var(--slate-900)]">
                  {message.sender === "human" ? "Humain" : "Assistant"}
                </p>
                <p>{message.content}</p>
              </div>
            ))}
            <div className="grid gap-2 md:grid-cols-3">
              <div className="rounded-md bg-[var(--slate-50)] p-3">
                <p className="text-xs font-semibold uppercase text-[var(--slate-500)]">
                  Contexte actif
                </p>
                <p className="mt-1">{latestContext.contextWindow.active.join(" · ")}</p>
              </div>
              <div className="rounded-md bg-[var(--slate-50)] p-3">
                <p className="text-xs font-semibold uppercase text-[var(--slate-500)]">
                  Mémoire haute
                </p>
                <p className="mt-1">{latestContext.memoryStack.high.join(" · ")}</p>
              </div>
              <div className="rounded-md bg-[var(--slate-50)] p-3">
                <p className="text-xs font-semibold uppercase text-[var(--slate-500)]">
                  Mémoire moyenne
                </p>
                <p className="mt-1">{latestContext.memoryStack.medium.join(" · ")}</p>
              </div>
            </div>
          </div>
        </article>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Repères temporels</h2>
            <p className="text-caption">Référentiel actualisé pour 2026</p>
          </div>
          <div className="space-y-2 p-5 text-sm text-[var(--slate-700)]">
            {learnerTimeline.map((item) => (
              <p key={item.id}>
                <strong>{item.year}</strong> · {item.label} · {item.description}
              </p>
            ))}
          </div>
        </article>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline">
            <ArrowLeft className="size-4" /> Chapitre précédent
          </Button>
          <Button variant="gradient">
            Chapitre suivant · Atelier pratique <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <aside className="panel-card overflow-hidden">
        <div className="border-b border-[var(--slate-200)] px-4 py-3">
          <p className="text-caption">Chapitres</p>
          <p className="text-sm font-semibold text-[var(--slate-900)]">Module 2 · 6 chapitres</p>
        </div>
        <div>
          {pathChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="flex items-center gap-2 border-l-[3px] px-4 py-2"
              style={{
                borderLeftColor: chapter.status === "current" ? "var(--blue-600)" : "transparent",
                background: chapter.status === "current" ? "var(--blue-50)" : "transparent",
                opacity: chapter.status === "locked" ? 0.5 : 1,
              }}
            >
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-[var(--slate-100)] text-[10px] font-semibold text-[var(--slate-600)]">
                {chapter.status === "done" ? <Check className="size-3" /> : chapter.index}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-[var(--slate-900)]">
                  {chapter.title}
                </p>
                <p className="text-caption">{chapter.duration}</p>
              </div>
              {chapter.status === "current" ? <Badge variant="info">En cours</Badge> : null}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
