import { ArrowRight, BookOpen, Clock3, Lightbulb, Target, TrendingUp } from "lucide-react";

import { HintCard } from "@/components/learner/hint-card";
import { KpiCard } from "@/components/learner/kpi-card";
import { ModuleCard } from "@/components/learner/module-card";
import { ProgressBlock } from "@/components/learner/progress-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  dashboardModules,
  learnerContextScenarios,
  learnerFundamentalConcepts,
  learnerTimeline,
} from "@/lib/learner/data";

export function DashboardScreen() {
  const currentModule =
    dashboardModules.find((module) => module.status === "current") ?? dashboardModules[0];

  return (
    <div className="w-full space-y-8 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="gradient">Parcours en cours</Badge>
          <span className="text-caption">Mis à jour il y a 2 min</span>
        </div>
        <h1 className="page-title">Bonjour Claire, reprenons là où tu t'étais arrêtée.</h1>
        <p className="page-lead">
          Encore 2 modules avant de valider ton parcours{" "}
          <strong className="text-[var(--slate-900)]">Fondamentaux de l'IA générative</strong>.
        </p>
      </section>

      <section className="panel-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="inline-flex size-14 items-center justify-center rounded-full bg-[var(--blue-600)] text-lg font-bold text-white">
            {currentModule.index}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-caption mb-1 font-semibold">Module en cours · 12 min restantes</p>
            <h2 className="text-xl font-semibold text-[var(--slate-900)]">{currentModule.title}</h2>
            <div className="mt-3">
              <ProgressBlock value={currentModule.progress} />
            </div>
          </div>
          <Button variant="gradient" size="lg">
            Reprendre <ArrowRight />
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard icon={BookOpen} label="Modules terminés" value="1 / 4" tone="blue" />
        <KpiCard icon={Clock3} label="Temps cumulé" value="47 min" tone="green" />
        <KpiCard icon={Target} label="Exercices validés" value="6 / 12" tone="amber" />
        <KpiCard icon={TrendingUp} label="Série" value="5 jours" tone="slate" />
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--slate-900)]">Ton parcours</h2>
          <Button variant="ghost" size="sm">
            Voir tout <ArrowRight />
          </Button>
        </div>
        <div className="space-y-3">
          {dashboardModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Concepts clés</h2>
            <p className="text-caption">Socle des fondamentaux</p>
          </div>
          <div className="space-y-3 p-5">
            {learnerFundamentalConcepts.map((concept) => (
              <div key={concept.id} className="rounded-lg border border-[var(--slate-200)] p-3">
                <p className="text-sm font-semibold text-[var(--slate-900)]">{concept.title}</p>
                <p className="mt-1 text-sm text-[var(--slate-600)]">{concept.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Timeline IA</h2>
            <p className="text-caption">Version maintenable 2026+</p>
          </div>
          <div className="space-y-3 p-5">
            {learnerTimeline.map((step) => (
              <div key={step.id} className="flex items-start gap-3">
                <div
                  className="mt-1 inline-flex size-2.5 rounded-full"
                  style={{
                    background:
                      step.era === "projection"
                        ? "var(--slate-300)"
                        : step.era === "current"
                          ? "var(--blue-600)"
                          : "var(--green-500)",
                  }}
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--slate-900)]">
                    {step.year} · {step.label}
                  </p>
                  <p className="text-sm text-[var(--slate-600)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <HintCard title="Astuce du jour">
        Pour un prompt efficace, donne un <strong>rôle</strong>, un <strong>contexte</strong>, une{" "}
        <strong>tâche</strong> et un <strong>format attendu</strong>. C'est la règle des 4
        ingrédients.
      </HintCard>

      <article className="panel-card">
        <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
          <h2 className="text-base font-semibold text-[var(--slate-900)]">
            Focus mémoire & contexte
          </h2>
          <p className="text-caption">Extrait de conversation guidée</p>
        </div>
        <div className="space-y-3 p-5">
          {learnerContextScenarios.slice(0, 1).map((state) => (
            <div key={state.id} className="rounded-lg border border-[var(--slate-200)] p-3">
              <p className="text-xs font-semibold text-[var(--blue-700)]">{state.timelineLabel}</p>
              {state.messages.map((message) => (
                <p key={message.id} className="mt-1 text-sm text-[var(--slate-700)]">
                  <strong>{message.sender === "human" ? "Humain" : "Assistant"}:</strong>{" "}
                  {message.content}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>

      <div className="sr-only">
        <Lightbulb />
      </div>
    </div>
  );
}
