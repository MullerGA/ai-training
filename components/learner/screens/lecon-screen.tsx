import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";

import { HintCard } from "@/components/learner/hint-card";
import { LessonPlayer } from "@/components/learner/lesson-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pathChapters } from "@/lib/learner/data";

export function LeconScreen() {
  return (
    <div className="grid w-full gap-6 px-4 py-8 md:px-6 xl:grid-cols-[1fr_300px] xl:px-8">
      <div className="space-y-6">
        <div className="text-caption flex items-center gap-2">
          <span>Module 2 · Bien formuler ses prompts</span>
          <ChevronRight className="size-3" />
          <span className="font-medium text-[var(--slate-900)]">
            Chapitre 3 · Anatomie d'un bon prompt
          </span>
        </div>

        <LessonPlayer />

        <section>
          <h1 className="text-2xl font-semibold text-[var(--slate-900)]">
            Anatomie d'un bon prompt
          </h1>
          <p className="page-lead">
            Un prompt efficace repose sur 4 ingrédients qu'on peut combiner dans n'importe quel
            ordre.
          </p>
        </section>

        <HintCard title="À retenir">
          Les 4 ingrédients: <strong>rôle</strong>, <strong>contexte</strong>,{" "}
          <strong>tâche</strong>, <strong>format attendu</strong>.
        </HintCard>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Transcription</h2>
            <p className="text-caption">Extrait du chapitre</p>
          </div>
          <div className="space-y-3 p-5 text-sm leading-relaxed text-[var(--slate-700)]">
            <p>
              Imagine que tu demandes simplement:{" "}
              <em className="text-[var(--slate-500)]">
                "écris-moi un mail pour annoncer la réunion"
              </em>
              .
            </p>
            <p>
              Maintenant, reformulons avec un rôle, un contexte, une tâche claire et un format
              attendu. La différence est immédiate.
            </p>
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
