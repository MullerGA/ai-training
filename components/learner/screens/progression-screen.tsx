export function ProgressionScreen() {
  return (
    <div className="w-full space-y-6 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <h1 className="page-title">Progression</h1>
        <p className="page-lead">
          Ton avancement dans les parcours sera affiché ici. Disponible dès la mise en place des
          parcours.
        </p>
      </section>

      <section className="panel-card p-6 text-center text-sm text-[var(--slate-500)]">
        — Aucun module commencé pour l'instant. —
      </section>
    </div>
  );
}
