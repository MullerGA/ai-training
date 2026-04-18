import type { Parcours } from "@/lib/content/types";

// TODO: [propriétaire] Relire et compléter tous les champs marqués TODO avant publication.

export const leMondeDeIA: Parcours = {
  slug: "le-monde-de-l-ia",
  title: "Le monde de l'IA",
  tagline: "TODO: [propriétaire] Une phrase d'accroche pour ce parcours.",
  description:
    "TODO: [propriétaire] 2-3 phrases de description du parcours. Objectifs, public visé, ce qu'on retiendra.",
  level: "Débutant",
  estimatedMinutes: 30,
  modules: [
    {
      slug: "evolution-et-maturite",
      index: 1,
      title: "Évolution & maturité de l'IA",
      summary:
        "TODO: [propriétaire] 1-2 phrases résumant ce module : ce qu'on y apprend et pourquoi c'est utile.",
      estimatedMinutes: 10,
      sections: [
        {
          kind: "intro",
          body: "TODO: [propriétaire] Texte d'introduction du module (quelques phrases de mise en contexte).",
        },
        {
          kind: "concept",
          title: "TODO: [propriétaire] Titre du concept principal",
          body: "TODO: [propriétaire] Corps du concept : définitions, exemples, nuances.",
          keyPoints: [
            "TODO: [propriétaire] Point clé 1",
            "TODO: [propriétaire] Point clé 2",
            "TODO: [propriétaire] Point clé 3",
          ],
        },
        {
          kind: "interactive",
          widget: { type: "timeline" },
        },
        {
          kind: "interactive",
          widget: { type: "hype-cycle" },
        },
        {
          kind: "exercise",
          prompt:
            "TODO: [propriétaire] Consigne de l'exercice : question ou mise en situation à résoudre.",
          hints: ["TODO: [propriétaire] Indice 1", "TODO: [propriétaire] Indice 2"],
          sampleAnswer: "TODO: [propriétaire] Exemple de bonne réponse ou grille d'évaluation.",
        },
        {
          kind: "recap",
          title: "Ce qu'il faut retenir",
          takeaways: [
            "TODO: [propriétaire] Takeaway 1",
            "TODO: [propriétaire] Takeaway 2",
            "TODO: [propriétaire] Takeaway 3",
          ],
        },
      ],
    },
    {
      slug: "iceberg-software-hardware",
      index: 2,
      title: "L'iceberg software / hardware",
      summary: "TODO: [propriétaire] 1-2 phrases résumant ce module.",
      estimatedMinutes: 10,
      sections: [
        {
          kind: "intro",
          body: "TODO: [propriétaire] Introduction du module.",
        },
        {
          kind: "concept",
          title: "TODO: [propriétaire] Titre du concept principal",
          body: "TODO: [propriétaire] Corps du concept.",
          keyPoints: ["TODO: [propriétaire] Point clé 1", "TODO: [propriétaire] Point clé 2"],
        },
        {
          kind: "interactive",
          widget: { type: "iceberg-explorer" },
        },
        {
          kind: "exercise",
          prompt: "TODO: [propriétaire] Consigne de l'exercice.",
          hints: ["TODO: [propriétaire] Indice 1"],
        },
        {
          kind: "recap",
          title: "Ce qu'il faut retenir",
          takeaways: ["TODO: [propriétaire] Takeaway 1", "TODO: [propriétaire] Takeaway 2"],
        },
      ],
    },
    {
      slug: "les-acteurs-du-marche",
      index: 3,
      title: "Les acteurs du marché",
      summary: "TODO: [propriétaire] 1-2 phrases résumant ce module.",
      estimatedMinutes: 10,
      sections: [
        {
          kind: "intro",
          body: "TODO: [propriétaire] Introduction du module.",
        },
        {
          kind: "concept",
          title: "TODO: [propriétaire] Titre du concept principal",
          body: "TODO: [propriétaire] Corps du concept.",
          keyPoints: ["TODO: [propriétaire] Point clé 1", "TODO: [propriétaire] Point clé 2"],
        },
        {
          kind: "interactive",
          widget: { type: "market-gallery" },
        },
        {
          kind: "exercise",
          prompt: "TODO: [propriétaire] Consigne de l'exercice.",
          hints: ["TODO: [propriétaire] Indice 1"],
        },
        {
          kind: "recap",
          title: "Ce qu'il faut retenir",
          takeaways: ["TODO: [propriétaire] Takeaway 1", "TODO: [propriétaire] Takeaway 2"],
        },
      ],
    },
  ],
};
