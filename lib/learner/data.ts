import type {
  LearnerChapter,
  LearnerCourse,
  LearnerModule,
  LearnerProgress,
} from "@/lib/learner/types";

export const learnerNavItems = [
  { href: "/learner/dashboard", label: "Dashboard" },
  { href: "/learner/catalogue", label: "Catalogue" },
  { href: "/learner/parcours", label: "Parcours" },
  { href: "/learner/lecon", label: "LeÃ§on" },
  { href: "/learner/exercice", label: "Exercice" },
  { href: "/learner/progression", label: "Progression" },
] as const;

export const dashboardModules: LearnerModule[] = [
  {
    id: "m1",
    index: 1,
    title: "Introduction Ã  l'IA gÃ©nÃ©rative",
    description: "Comprendre les bases et le fonctionnement des LLM.",
    duration: "15 min",
    progress: 100,
    status: "done",
  },
  {
    id: "m2",
    index: 2,
    title: "Bien formuler ses prompts",
    description: "Structure, contexte, rÃ´le, format attendu.",
    duration: "20 min",
    progress: 60,
    status: "current",
  },
  {
    id: "m3",
    index: 3,
    title: "Cas d'usage au quotidien",
    description: "RÃ©daction, synthÃ¨se, analyse, automatisation.",
    duration: "25 min",
    progress: 0,
    status: "next",
  },
  {
    id: "m4",
    index: 4,
    title: "Limites, risques et RGPD",
    description: "Hallucinations, donnÃ©es sensibles, bonnes pratiques.",
    duration: "15 min",
    progress: 0,
    status: "locked",
  },
];

export const catalogueCategories = [
  "Tous",
  "IA gÃ©nÃ©rative",
  "Prompting",
  "Cas d'usage",
  "ConformitÃ©",
  "Outils",
] as const;

export const catalogueCourses: LearnerCourse[] = [
  {
    id: "c1",
    title: "Fondamentaux de l'IA gÃ©nÃ©rative",
    description: "Comprendre les modÃ¨les, leurs forces, leurs limites.",
    level: "DÃ©butant",
    duration: "1h15",
    progress: 60,
    tag: "En cours",
    category: "IA gÃ©nÃ©rative",
  },
  {
    id: "c2",
    title: "Prompting avancÃ©",
    description: "Structurer des prompts complexes, chaÃ®nes et rÃ´les.",
    level: "IntermÃ©diaire",
    duration: "2h00",
    progress: 0,
    category: "Prompting",
  },
  {
    id: "c3",
    title: "Automatiser ses tÃ¢ches de rÃ©daction",
    description: "Brief, relecture, reformulation, ton et style.",
    level: "DÃ©butant",
    duration: "45 min",
    progress: 0,
    category: "Cas d'usage",
  },
  {
    id: "c4",
    title: "IA et donnÃ©es sensibles",
    description: "RGPD, anonymisation, zones Ã  Ã©viter.",
    level: "Tous niveaux",
    duration: "30 min",
    progress: 100,
    tag: "TerminÃ©",
    category: "ConformitÃ©",
  },
  {
    id: "c5",
    title: "Analyse et synthÃ¨se de documents",
    description: "Extraire l'essentiel, comparer, poser les bonnes questions.",
    level: "IntermÃ©diaire",
    duration: "1h30",
    progress: 0,
    category: "Outils",
  },
  {
    id: "c6",
    title: "Construire un assistant pour son Ã©quipe",
    description: "DÃ©finir son cas d'usage, itÃ©rer, mesurer.",
    level: "AvancÃ©",
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
    type: "VidÃ©o",
    status: "done",
  },
  {
    id: "ch2",
    index: 2,
    title: "Les grands concepts",
    duration: "8 min",
    type: "Lecture",
    status: "done",
  },
  {
    id: "ch3",
    index: 3,
    title: "Anatomie d'un bon prompt",
    duration: "6 min",
    type: "VidÃ©o",
    status: "current",
  },
  {
    id: "ch4",
    index: 4,
    title: "Atelier : reformuler un brief",
    duration: "10 min",
    type: "Exercice",
    status: "next",
  },
  {
    id: "ch5",
    index: 5,
    title: "Aller plus loin : chaÃ®ne de prompts",
    duration: "5 min",
    type: "Lecture",
    status: "next",
  },
  {
    id: "ch6",
    index: 6,
    title: "Quiz de validation",
    duration: "5 min",
    type: "Quiz",
    status: "locked",
  },
];

export const learnerProgress: LearnerProgress = {
  validatedModules: "1 / 4",
  totalHours: "2h 47",
  avgScore: "84 %",
  streak: "5 jours",
  weeklyMinutes: [3, 5, 2, 6, 4, 7, 3, 5, 8, 6, 4, 7],
  skills: [
    { label: "Bases de l'IA gÃ©nÃ©rative", value: 100 },
    { label: "ReconnaÃ®tre les cas d'usage pertinents", value: 75 },
    { label: "Formuler un prompt structurÃ©", value: 60 },
    { label: "Identifier les limites et risques", value: 30 },
  ],
};