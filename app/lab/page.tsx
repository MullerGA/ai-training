import { LabFunnelWidget } from "@/components/module/widgets/lab-funnel";
import { Badge } from "@/components/ui/badge";

export default function LabPage() {
  return (
    <main className="px-4 py-8 md:px-6 xl:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <section>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="info">Annexe</Badge>
            <Badge variant="outline">Simulation locale</Badge>
          </div>
          <h1 className="page-title">Lab: entonnoir de décision d’un LLM</h1>
          <p className="page-lead">
            Cette annexe permet d’explorer le mécanisme de sélection des tokens hors parcours. Tu
            peux manipuler les paramètres, comparer les scénarios et observer comment la sortie
            finale change selon le contexte.
          </p>
        </section>

        <section className="panel-card p-5">
          <h2 className="text-base font-semibold text-[var(--slate-900)]">Mode d’emploi rapide</h2>
          <p className="mt-2 text-sm text-[var(--slate-700)]">
            Commence avec les réglages par défaut, puis modifie un seul paramètre à la fois
            (temperature, top-k, top-p) pour isoler son effet. Enfin, relance le tirage plusieurs
            fois pour constater la variabilité probabiliste.
          </p>
        </section>

        <LabFunnelWidget embedded />
      </div>
    </main>
  );
}
