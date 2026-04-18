import type {
  ConversationState,
  FundamentalConcept,
  LabScenario,
  LearnerChapter,
  LearnerCourse,
  LearnerModule,
  LearnerProgress,
  LearnerRecommendation,
  PromptTemplate,
  TimelineMilestone,
} from "@/lib/learner/types";

export const learnerNavItems = [
  { href: "/learner/dashboard", label: "Dashboard" },
  { href: "/learner/diagrammes", label: "Diagrammes" },
  { href: "/learner/catalogue", label: "Catalogue" },
  { href: "/learner/parcours", label: "Parcours" },
  { href: "/learner/lecon", label: "Leçon" },
  { href: "/learner/exercice", label: "Exercice" },
  { href: "/learner/lab", label: "Lab" },
  { href: "/learner/progression", label: "Progression" },
] as const;

export const dashboardModules: LearnerModule[] = [
  {
    id: "m1",
    index: 1,
    title: "Introduction à l'IA générative",
    description: "Comprendre les bases et le fonctionnement des LLM.",
    duration: "15 min",
    progress: 100,
    status: "done",
    interactiveKind: "fundamentals",
    objectives: [
      { id: "m1-o1", text: "Identifier les composants d'un LLM" },
      { id: "m1-o2", text: "Relier les usages métier aux capacités du modèle" },
    ],
    keyTakeaways: [
      "Un LLM prédit des tokens, pas des idées abstraites.",
      "La qualité du contexte fourni guide la qualité de la réponse.",
    ],
  },
  {
    id: "m2",
    index: 2,
    title: "Bien formuler ses prompts",
    description: "Structure, contexte, rôle, format attendu.",
    duration: "20 min",
    progress: 60,
    status: "current",
    interactiveKind: "lab",
    objectives: [
      { id: "m2-o1", text: "Appliquer la règle rôle, contexte, tâche, format" },
      { id: "m2-o2", text: "Itérer sur un prompt en fonction du résultat" },
    ],
    keyTakeaways: [
      "Un prompt structuré réduit l'ambiguïté.",
      "Le format de sortie doit être explicite et mesurable.",
    ],
  },
  {
    id: "m3",
    index: 3,
    title: "Mémoire, contexte et continuité",
    description: "Comprendre ce que le modèle retient et oublie.",
    duration: "25 min",
    progress: 0,
    status: "next",
    interactiveKind: "context",
    objectives: [
      { id: "m3-o1", text: "Différencier contexte actif et mémoire de conversation" },
      { id: "m3-o2", text: "Réduire la dérive dans les conversations longues" },
    ],
    keyTakeaways: [
      "La mémoire haute priorité doit rester concise.",
      "Un bon résumé intermédiaire stabilise les réponses futures.",
    ],
  },
  {
    id: "m4",
    index: 4,
    title: "Limites, risques et gouvernance",
    description: "Hallucinations, données sensibles, bonnes pratiques.",
    duration: "15 min",
    progress: 0,
    status: "locked",
    interactiveKind: "fundamentals",
  },
];

export const catalogueCategories = [
  "Tous",
  "IA générative",
  "Prompting",
  "Cas d'usage",
  "Conformité",
  "Outils",
] as const;

export const catalogueCourses: LearnerCourse[] = [
  {
    id: "c1",
    title: "Fondamentaux de l'IA générative",
    description: "Comprendre les modèles, leurs forces, leurs limites.",
    level: "Débutant",
    duration: "1h15",
    progress: 60,
    tag: "En cours",
    category: "IA générative",
  },
  {
    id: "c2",
    title: "Prompting avancé",
    description: "Structurer des prompts complexes, chaînes et rôles.",
    level: "Intermédiaire",
    duration: "2h00",
    progress: 0,
    category: "Prompting",
  },
  {
    id: "c3",
    title: "Automatiser ses tâches de rédaction",
    description: "Brief, relecture, reformulation, ton et style.",
    level: "Débutant",
    duration: "45 min",
    progress: 0,
    category: "Cas d'usage",
  },
  {
    id: "c4",
    title: "IA et données sensibles",
    description: "RGPD, anonymisation, zones à éviter.",
    level: "Tous niveaux",
    duration: "30 min",
    progress: 100,
    tag: "Terminé",
    category: "Conformité",
  },
  {
    id: "c5",
    title: "Analyse et synthèse de documents",
    description: "Extraire l'essentiel, comparer, poser les bonnes questions.",
    level: "Intermédiaire",
    duration: "1h30",
    progress: 0,
    category: "Outils",
  },
  {
    id: "c6",
    title: "Construire un assistant pour son équipe",
    description: "Définir son cas d'usage, itérer, mesurer.",
    level: "Avancé",
    duration: "2h30",
    progress: 0,
    category: "Outils",
  },
];

export const pathChapters: LearnerChapter[] = [
  {
    id: "ch1",
    index: 1,
    title: "Pourquoi ce parcours",
    duration: "3 min",
    type: "Vidéo",
    status: "done",
    interactiveKind: "fundamentals",
    keyTakeaways: ["Objectifs et attentes de montée en compétence."],
  },
  {
    id: "ch2",
    index: 2,
    title: "Les grands concepts",
    duration: "8 min",
    type: "Lecture",
    status: "done",
    interactiveKind: "fundamentals",
    keyTakeaways: ["Token, contexte, probabilité, génération."],
  },
  {
    id: "ch3",
    index: 3,
    title: "Anatomie d'un bon prompt",
    duration: "6 min",
    type: "Vidéo",
    status: "current",
    interactiveKind: "lab",
    objectives: [
      { id: "ch3-o1", text: "Passer d'une demande vague à un prompt structuré" },
      { id: "ch3-o2", text: "Évaluer la qualité du format de sortie" },
    ],
    keyTakeaways: [
      "Le rôle clarifie la posture attendue.",
      "Le format réduit les réponses trop générales.",
    ],
  },
  {
    id: "ch4",
    index: 4,
    title: "Atelier : reformuler un brief",
    duration: "10 min",
    type: "Exercice",
    status: "next",
    interactiveKind: "lab",
  },
  {
    id: "ch5",
    index: 5,
    title: "Mémoire de conversation",
    duration: "5 min",
    type: "Lecture",
    status: "next",
    interactiveKind: "context",
  },
  {
    id: "ch6",
    index: 6,
    title: "Quiz de validation",
    duration: "5 min",
    type: "Quiz",
    status: "locked",
    interactiveKind: "fundamentals",
  },
];

export const learnerProgress: LearnerProgress = {
  validatedModules: "1 / 4",
  totalHours: "2h 47",
  avgScore: "84 %",
  streak: "5 jours",
  weeklyMinutes: [3, 5, 2, 6, 4, 7, 3, 5, 8, 6, 4, 7],
  skills: [
    { label: "Bases de l'IA générative", value: 100 },
    { label: "Reconnaître les cas d'usage pertinents", value: 75 },
    { label: "Formuler un prompt structuré", value: 60 },
    { label: "Identifier les limites et risques", value: 30 },
  ],
};

export const learnerRecommendations: LearnerRecommendation[] = [
  {
    id: "r1",
    title: "Prompting avancé",
    description: "Suite naturelle du module en cours",
  },
  {
    id: "r2",
    title: "Cas d'usage rédaction",
    description: "Applique ce que tu viens d'apprendre",
  },
  {
    id: "r3",
    title: "Quiz récap module 1",
    description: "Consolide tes bases en 5 min",
  },
];

export const learnerFundamentalConcepts: FundamentalConcept[] = [
  {
    id: "concept-1",
    title: "Langage naturel",
    description:
      "Le modèle apprend des régularités linguistiques pour produire des réponses cohérentes.",
  },
  {
    id: "concept-2",
    title: "Contexte de travail",
    description:
      "La pertinence dépend de la qualité du contexte et des contraintes données au modèle.",
  },
  {
    id: "concept-3",
    title: "Probabilités de sortie",
    description:
      "Chaque token est choisi selon une distribution de probabilités ajustable via des paramètres.",
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

export const learnerContextScenarios: ConversationState[] = [
  {
    id: "cstate-1",
    timelineLabel: "Voyage Paris",
    contextWindow: {
      active: ["Voyage Paris"],
      recent: [],
    },
    memoryStack: {
      high: ["Destination Paris"],
      medium: [],
      low: [],
    },
    messages: [
      { id: "m1", content: "Je voudrais planifier un voyage à Paris.", sender: "human" },
      {
        id: "m2",
        content:
          "Je peux vous aider à planifier votre voyage à Paris. Quelle durée et combien de voyageurs ?",
        sender: "assistant",
      },
    ],
  },
  {
    id: "cstate-2",
    timelineLabel: "2 pers. juillet",
    contextWindow: {
      active: ["Voyage Paris", "2 personnes juillet"],
      recent: [],
    },
    memoryStack: {
      high: ["Destination Paris", "Période juillet", "Nombre: 2 personnes"],
      medium: ["Saisonnalité des tarifs"],
      low: [],
    },
    messages: [
      { id: "m3", content: "Pour deux personnes, en juillet.", sender: "human" },
      {
        id: "m4",
        content:
          "Parfait. Avez-vous des dates précises ? Les prix varient entre début et fin juillet.",
        sender: "assistant",
      },
    ],
  },
  {
    id: "cstate-3",
    timelineLabel: "Transport",
    contextWindow: {
      active: ["transport"],
      recent: ["hôtels"],
    },
    memoryStack: {
      high: ["Options transport"],
      medium: ["Destination Paris", "Période juillet", "Nombre: 2 personnes"],
      low: ["Hôtels centre-ville"],
    },
    messages: [
      {
        id: "m5",
        content: "Parlons d'abord du transport. Quels vols sont disponibles ?",
        sender: "human",
      },
      {
        id: "m6",
        content:
          "Voici plusieurs vols possibles. Je conserve votre contrainte de 2 personnes en juillet.",
        sender: "assistant",
      },
    ],
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

export const learnerExerciceBrief =
  "Salut, tu peux me faire un petit résumé du dernier rapport RH pour la réu de jeudi ? Merci.";

export const learnerExerciceHints = [
  ["Rôle", "Qui doit répondre ? Analyste ? Rédacteur ?"],
  ["Contexte", "Pour qui ? Quelle occasion ? Quel enjeu ?"],
  ["Tâche", "Action précise et verbe d'action."],
  ["Format", "Longueur, structure, ton, exemples."],
] as const;
