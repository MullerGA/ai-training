# Modèle de Contenu — état Lot 0

## Contrats TypeScript actuels

Définis dans `lib/learner/types.ts` :

| Type | Usage |
|---|---|
| `LabScenario` | Scénarios du lab interactif |
| `LabPrediction` | Token avec probabilité dans l'entonnoir |
| `LabInputToken` | Tokenisation d'un mot dans un prompt |
| `PromptTemplate` | Template de prompt (base `/prompts` — Lot 6) |
| `TimelineMilestone` | Point de la frise chronologique IA (widget Lot 5) |

## Données actuelles

Définies dans `lib/learner/data.ts` :

- `learnerLabScenarios` : 3 scénarios pour le lab (animal, voyage, recette).
- `learnerTimeline` : frise 2018 → 2030 (base du widget timeline — Lot 5).
- `learnerPromptTemplates` : 3 templates initiaux (base de `/prompts` — Lot 6).

## Modèle de contenu cible (Lot 1)

À créer dans `lib/content/` :

```ts
// lib/content/types.ts
type Parcours = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  estimatedMinutes: number;
  modules: Module[];
};

type Module = {
  slug: string;
  index: number;
  title: string;
  summary: string;
  estimatedMinutes: number;
  sections: ModuleSection[];
};

type ModuleSection =
  | { kind: "intro"; title?: string; body: string }
  | { kind: "concept"; title: string; body: string; keyPoints?: string[] }
  | { kind: "interactive"; widget: InteractiveWidget }
  | { kind: "exercise"; prompt: string; hints?: string[]; sampleAnswer?: string }
  | { kind: "recap"; title: string; takeaways: string[] };
```

## Persistance locale (Lot 1)

À créer dans `lib/storage/learner-state.ts` :

```ts
type LearnerState = {
  completedModules: string[];         // "${parcoursSlug}/${moduleSlug}"
  moduleProgress: Record<string, number>; // 0..100
  lastVisited?: { parcours: string; module: string };
};
```

Clé localStorage : `ai-training:state:v1`.
