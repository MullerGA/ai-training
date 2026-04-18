import { ParcoursGrid } from "@/components/formations/parcours-grid";
import { allParcours } from "@/lib/content";

export default function FormationsPage() {
  return (
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="page-title">Formations</h1>
        <p className="page-lead">
          Choisissez un parcours et progressez à votre rythme. Votre avancement est sauvegardé
          localement.
        </p>
        <ParcoursGrid parcours={allParcours} />
      </div>
    </main>
  );
}
