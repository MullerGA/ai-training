# Modèle de Contenu

## Contrats TypeScript

Définis dans `lib/learner/types.ts`:

- `LearnerStatus`: `done | current | next | locked`
- `LearningObjective`
- `FundamentalConcept`
- `TimelineMilestone`
- `PromptTemplate`
- `ConversationState`
- `LabScenario`
- `LearnerModule`
- `LearnerCourse`
- `LearnerChapter`
- `LearnerProgress`
- `LearnerRecommendation`

## Données actuelles

Définies dans `lib/learner/data.ts`:

- Navigation et parcours: `learnerNavItems`, `dashboardModules`, `pathChapters`
- Catalogue: `catalogueCategories`, `catalogueCourses`
- Fondamentaux: `learnerFundamentalConcepts`, `learnerTimeline`
- Contexte/mémoire: `learnerContextScenarios`
- Lab: `learnerLabScenarios`, `learnerPromptTemplates`
- Exercice: `learnerExerciceBrief`, `learnerExerciceHints`
- Progression: `learnerProgress`, `learnerRecommendations`

## Logique fonctionnelle locale

- Catalogue:
  - filtrage par catégorie
  - recherche texte (titre + description)
- Exercice:
  - compteur de mots
  - activation conditionnelle de validation
  - feedback après soumission
- Lab interactif:
  - calcul déterministe de distribution via `runFunnel`
  - étapes explicites: `temperature` -> `top-k` -> `top-p`
- Progression:
  - série hebdomadaire calculée à partir d'un tableau de minutes

## Extension vers API

Pour brancher un backend:

1. Conserver `types.ts` comme contrat.
2. Remplacer `data.ts` par une couche de fetch côté server.
3. Garder les screens inchangés autant que possible en injectant des props normalisées.
