import { ArrowRight, BookOpen, Clock3, Lightbulb, Target, TrendingUp } from "lucide-react";

import { HintCard } from "@/components/learner/hint-card";
import { KpiCard } from "@/components/learner/kpi-card";
import { ModuleCard } from "@/components/learner/module-card";
import { ProgressBlock } from "@/components/learner/progress-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dashboardModules } from "@/lib/learner/data";

export function DashboardScreen() {
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
            2
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-caption mb-1 font-semibold">Module en cours · 12 min restantes</p>
            <h2 className="text-xl font-semibold text-[var(--slate-900)]">
              Bien formuler ses prompts
            </h2>
            <div className="mt-3">
              <ProgressBlock value={60} />
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

      <HintCard title="Astuce du jour">
        Pour un prompt efficace, donne un <strong>rôle</strong>, un <strong>contexte</strong>, une{" "}
        <strong>tâche</strong> et un <strong>format attendu</strong>. C'est la règle des 4
        ingrédients.
      </HintCard>

      <div className="sr-only">
        <Lightbulb />
      </div>
    </div>
  );
}
