import { BookOpen, Lock, Zap } from "lucide-react";
import Link from "next/link";
import { allParcours } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--slate-900)] px-4 py-24 text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Comprendre l'IA générative
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
            Des parcours interactifs pour démystifier les LLM, les prompts et les outils IA — sans
            jargon inutile.
          </p>
          <div className="mt-10">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--blue-500)] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--blue-600)] focus-ring"
            >
              Commencer
            </Link>
          </div>
        </div>
      </section>

      {/* 3 promesses */}
      <section className="border-b border-[var(--slate-200)] bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          <div className="text-center">
            <Zap className="mx-auto size-8 text-[var(--blue-500)]" />
            <h2 className="mt-4 text-base font-semibold text-[var(--slate-900)]">Interactif</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--slate-600)]">
              Chaque module embarque un composant interactif — visualisations, simulateurs,
              exercices.
            </p>
          </div>
          <div className="text-center">
            <BookOpen className="mx-auto size-8 text-[var(--blue-500)]" />
            <h2 className="mt-4 text-base font-semibold text-[var(--slate-900)]">Structuré</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--slate-600)]">
              Des parcours progressifs, du macro au micro, pour construire une compréhension solide.
            </p>
          </div>
          <div className="text-center">
            <Lock className="mx-auto size-8 text-[var(--blue-500)]" />
            <h2 className="mt-4 text-base font-semibold text-[var(--slate-900)]">Sans compte</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--slate-600)]">
              Ta progression est sauvegardée localement. Aucune inscription, aucune donnée envoyée.
            </p>
          </div>
        </div>
      </section>

      {/* Aperçu des parcours */}
      <section className="bg-[var(--slate-50)] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--slate-900)]">
            Les parcours disponibles
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {allParcours.map((p) => (
              <Link
                key={p.slug}
                href={`/formations/${p.slug}`}
                className="panel-card flex flex-col gap-3 p-6 focus-ring"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[var(--blue-50)] px-2.5 py-0.5 text-xs font-medium text-[var(--blue-700)]">
                    {p.level}
                  </span>
                  <span className="text-caption">{p.estimatedMinutes} min</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--slate-900)]">{p.title}</h3>
                <p className="line-clamp-2 text-sm text-[var(--slate-600)]">{p.tagline}</p>
                <span className="mt-auto text-xs font-medium text-[var(--blue-600)]">
                  {p.modules.length} module{p.modules.length > 1 ? "s" : ""} →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/formations"
              className="text-sm font-medium text-[var(--blue-600)] underline-offset-4 transition-colors hover:text-[var(--blue-700)] hover:underline"
            >
              Voir tous les parcours →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--slate-200)] bg-white px-4 py-8 text-center md:px-8">
        <p className="text-sm text-[var(--slate-500)]">
          <Link href="/a-propos" className="transition-colors hover:text-[var(--slate-900)]">
            À propos
          </Link>
        </p>
      </footer>
    </main>
  );
}
