import { Badge } from "@/components/ui/badge";

export function AboutScreen() {
  return (
    <div className="w-full space-y-6 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="info">À propos de l'application</Badge>
        </div>
        <h1 className="page-title">Une app pour apprendre l'IA générative de façon progressive.</h1>
        <p className="page-lead">
          Cette application sert à développer des compétences pratiques sur l'IA générative avec des
          parcours guidés, des leçons et des exercices concrets.
        </p>
      </section>

      <section className="panel-card p-5">
        <h2 className="text-lg font-semibold text-[var(--slate-900)]">Pourquoi cette app</h2>
        <p className="mt-2 text-sm text-[var(--slate-700)]">
          Elle a été conçue pour démocratiser les bons usages de l'IA, structurer la montée en
          compétence et éviter les pratiques au hasard. L'objectif est d'aider chaque apprenant à
          progresser avec une méthode claire et applicable au quotidien.
        </p>
      </section>

      <section className="panel-card p-5">
        <h2 className="text-lg font-semibold text-[var(--slate-900)]">À qui elle s'adresse</h2>
        <p className="mt-2 text-sm text-[var(--slate-700)]">
          La plateforme s'adresse aux profils débutants et intermédiaires, ainsi qu'aux équipes
          métier qui veulent intégrer l'IA générative dans leurs pratiques de travail.
        </p>
      </section>

      <section className="panel-card p-5">
        <h2 className="text-lg font-semibold text-[var(--slate-900)]">Ce que tu vas y gagner</h2>
        <p className="mt-2 text-sm text-[var(--slate-700)]">
          Tu apprendras à rédiger des prompts plus clairs, à obtenir des réponses plus utiles et à
          mieux comprendre les limites et les risques des modèles pour utiliser l'IA avec confiance.
        </p>
      </section>
    </div>
  );
}
