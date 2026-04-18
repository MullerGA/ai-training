import type { LabScenario, PromptTemplate, TimelineMilestone } from "@/lib/learner/types";

export const learnerLabScenarios: LabScenario[] = [
  {
    id: "horse",
    title: "Animal",
    prompt: "Il court au galop, c'est un",
    description: "Le contexte favorise des tokens liés aux équidés.",
    inputTokens: [
      { word: "Il", tokens: ["Il"] },
      { word: "court", tokens: ["court"] },
      { word: "au", tokens: ["au"] },
      { word: "galop", tokens: ["gal", "op"] },
      { word: "c'est", tokens: ["c'", "est"] },
      { word: "un", tokens: ["un"] },
    ],
    predictions: [
      { token: "cheval", probability: 0.35, description: "Token le plus probable" },
      { token: "étalon", probability: 0.25, description: "Variante spécialisée" },
      { token: "poney", probability: 0.12, description: "Alternative plausible" },
      { token: "mustang", probability: 0.05, description: "Type de cheval" },
      { token: "zèbre", probability: 0.03, description: "Autre équidé" },
      { token: "guépard", probability: 0.02, description: "Animal rapide mais moins contextuel" },
    ],
  },
  {
    id: "italy",
    title: "Voyage",
    prompt: "Pour votre séjour en Italie en juillet, nous vous recommandons de visiter",
    description: "Le contexte géographique et saisonnier filtre les destinations.",
    inputTokens: [
      { word: "séjour", tokens: ["sé", "jour"] },
      { word: "Italie", tokens: ["Ital", "ie"] },
      { word: "juillet", tokens: ["juill", "et"] },
      { word: "visiter", tokens: ["visit", "er"] },
    ],
    predictions: [
      { token: "Rome", probability: 0.3, description: "Destination la plus générale" },
      { token: "Florence", probability: 0.2, description: "Forte pertinence culturelle" },
      { token: "Venise", probability: 0.15, description: "Option touristique classique" },
      { token: "Toscane", probability: 0.06, description: "Option régionale" },
      { token: "Naples", probability: 0.05, description: "Alternative urbaine" },
      { token: "Dolomites", probability: 0.02, description: "Plus niche dans ce contexte" },
    ],
  },
  {
    id: "recipe",
    title: "Recette",
    prompt: "Pour cette recette de gâteau, commencez par",
    description: "Le contexte culinaire favorise les verbes de préparation.",
    inputTokens: [
      { word: "recette", tokens: ["rec", "ette"] },
      { word: "gâteau", tokens: ["gâ", "teau"] },
      { word: "commencez", tokens: ["commenc", "ez"] },
    ],
    predictions: [
      { token: "préchauffer", probability: 0.4, description: "Étape initiale fréquente" },
      { token: "mélanger", probability: 0.25, description: "Action de préparation" },
      { token: "préparer", probability: 0.15, description: "Verbe générique" },
      { token: "tamiser", probability: 0.04, description: "Action spécifique" },
      { token: "beurrer", probability: 0.03, description: "Préparation du moule" },
      { token: "fondre", probability: 0.01, description: "Contexte particulier" },
    ],
  },
];

export const learnerTimeline: TimelineMilestone[] = [
  {
    id: "t1",
    year: 2018,
    label: "BERT / GPT-1",
    description: "Premiers grands progrès sur la compréhension contextuelle.",
    era: "history",
  },
  {
    id: "t2",
    year: 2020,
    label: "GPT-3",
    description: "Montée en échelle des modèles généralistes.",
    era: "history",
  },
  {
    id: "t3",
    year: 2022,
    label: "Assistants conversationnels",
    description: "Adoption large des interfaces conversationnelles.",
    era: "history",
  },
  {
    id: "t4",
    year: 2024,
    label: "Assistants multimodaux",
    description: "Texte, image et raisonnement convergent dans les outils pro.",
    era: "history",
  },
  {
    id: "t5",
    year: 2026,
    label: "État actuel",
    description: "Industrialisation des usages avec gouvernance et évaluation continue.",
    era: "current",
  },
  {
    id: "t6",
    year: 2028,
    label: "Projection",
    description: "Orchestration multi-agents et workflows métier plus autonomes.",
    era: "projection",
  },
  {
    id: "t7",
    year: 2030,
    label: "Projection",
    description: "Assistants spécialisés avec contrôle qualité intégré au cycle produit.",
    era: "projection",
  },
];

export const learnerPromptTemplates: PromptTemplate[] = [
  {
    id: "tpl-1",
    title: "Synthèse COMEX",
    description: "Transformer un document dense en recommandations actionnables.",
    category: "business",
    complexity: "advanced",
    tags: ["Analyse", "Rédaction", "Décision"],
    prompt:
      "Tu es consultant stratégique. Contexte: comité exécutif hôtellerie. Tâche: synthétiser le document en 3 tendances, 3 impacts business, 3 recommandations priorisées avec KPI. Format: tableau clair en français professionnel.",
  },
  {
    id: "tpl-2",
    title: "Résumé pédagogique",
    description: "Résumer un texte pour un public débutant.",
    category: "academic",
    complexity: "basic",
    tags: ["Résumé", "Vulgarisation"],
    prompt:
      "Rôle: formateur. Tâche: résumer ce texte en 5 points maximum, vocabulaire simple, 120 mots max. Format: liste à puces.",
  },
  {
    id: "tpl-3",
    title: "Revue de code",
    description: "Identifier risques, bugs et pistes de correction.",
    category: "technical",
    complexity: "intermediate",
    tags: ["Code", "Analyse"],
    prompt:
      "Rôle: reviewer senior. Contexte: PR frontend. Tâche: identifier les risques fonctionnels et proposer corrections concrètes. Format: findings triés par sévérité avec recommandations testables.",
  },
];
