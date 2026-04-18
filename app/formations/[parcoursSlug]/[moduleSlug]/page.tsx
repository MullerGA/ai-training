import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule, getParcours } from "@/lib/content";

// Lot 4 remplacera cette page par l'écran module unifié.
export default async function ModulePage({
  params,
}: {
  params: Promise<{ parcoursSlug: string; moduleSlug: string }>;
}) {
  const { parcoursSlug, moduleSlug } = await params;
  const parcours = getParcours(parcoursSlug);
  const module = parcours ? getModule(parcoursSlug, moduleSlug) : undefined;

  if (!parcours || !module) notFound();

  return (
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        <nav
          className="mb-6 flex items-center gap-1.5 text-sm text-[var(--slate-500)]"
          aria-label="Fil d'Ariane"
        >
          <Link href="/formations" className="transition-colors hover:text-[var(--slate-900)]">
            Formations
          </Link>
          <span aria-hidden="true">›</span>
          <Link
            href={`/formations/${parcoursSlug}`}
            className="transition-colors hover:text-[var(--slate-900)]"
          >
            {parcours.title}
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-[var(--slate-900)]">{module.title}</span>
        </nav>

        <h1 className="page-title">{module.title}</h1>
        <p className="page-lead">{module.summary}</p>

        <div className="panel-card mt-8 p-6 text-center text-sm text-[var(--slate-500)]">
          Contenu du module en cours de construction — disponible au Lot 4.
        </div>

        <div className="mt-6">
          <Link
            href={`/formations/${parcoursSlug}`}
            className="text-sm font-medium text-[var(--blue-600)] underline-offset-4 hover:underline"
          >
            ← Retour au parcours
          </Link>
        </div>
      </div>
    </main>
  );
}
