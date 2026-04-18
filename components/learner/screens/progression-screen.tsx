import { ArrowRight, BookOpen, Clock3, Flag, Sparkles, Target } from "lucide-react";

import { KpiCard } from "@/components/learner/kpi-card";
import { Progress } from "@/components/ui/progress";
import { learnerProgress } from "@/lib/learner/data";

export function ProgressionScreen() {
  const max = Math.max(...learnerProgress.weeklyMinutes);
  const weeklySeries = learnerProgress.weeklyMinutes.map((value, week) => ({
    id: `s${week + 1}`,
    label: `S${week + 1}`,
    value,
  }));

  return (
    <div className="w-full space-y-6 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <h1 className="page-title">Ta progression</h1>
        <p className="page-lead">
          Un aperçu clair de ton avancement, de tes acquis et des prochaines étapes recommandées.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          icon={BookOpen}
          label="Modules validés"
          value={learnerProgress.validatedModules}
          tone="blue"
        />
        <KpiCard
          icon={Clock3}
          label="Heures cumulées"
          value={learnerProgress.totalHours}
          tone="green"
        />
        <KpiCard icon={Target} label="Score moyen" value={learnerProgress.avgScore} tone="amber" />
        <KpiCard icon={Flag} label="Série active" value={learnerProgress.streak} tone="slate" />
      </section>

      <article className="panel-card">
        <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
          <h2 className="text-base font-semibold text-[var(--slate-900)]">
            Activité sur 12 semaines
          </h2>
          <p className="text-caption">Minutes passées par semaine</p>
        </div>
        <div className="flex h-44 items-end gap-2 p-5">
          {weeklySeries.map((item, index) => (
            <div key={item.id} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full max-w-8 rounded-sm"
                style={{
                  height: `${(item.value / max) * 100}%`,
                  minHeight: "4px",
                  background:
                    index === weeklySeries.length - 1
                      ? "var(--learner-gradient)"
                      : "var(--slate-200)",
                }}
              />
              <span className="text-[10px] text-[var(--slate-400)]">{item.label}</span>
            </div>
          ))}
        </div>
      </article>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Acquis</h2>
            <p className="text-caption">Compétences validées</p>
          </div>
          <div className="space-y-3 p-5">
            {learnerProgress.skills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-sm font-medium text-[var(--slate-900)]">{skill.label}</p>
                  <p className="text-caption font-semibold">{skill.value}%</p>
                </div>
                <Progress value={skill.value} gradient={skill.value < 100} />
              </div>
            ))}
          </div>
        </article>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Recommandé pour toi</h2>
            <p className="text-caption">Basé sur tes modules validés</p>
          </div>
          <div className="space-y-2 p-5">
            {[
              ["Prompting avancé", "Suite naturelle du module en cours"],
              ["Cas d'usage rédaction", "Applique ce que tu viens d'apprendre"],
              ["Quiz récap module 1", "Consolide tes bases en 5 min"],
            ].map(([title, description]) => (
              <button
                key={title}
                type="button"
                className="focus-ring flex w-full items-center gap-3 rounded-lg border border-[var(--slate-200)] p-3 text-left hover:bg-[var(--slate-50)]"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-[var(--blue-50)] text-[var(--blue-600)]">
                  <Sparkles className="size-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-[var(--slate-900)]">
                    {title}
                  </span>
                  <span className="text-caption">{description}</span>
                </span>
                <ArrowRight className="size-4 text-[var(--slate-400)]" />
              </button>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
