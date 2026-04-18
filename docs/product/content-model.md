# Modèle de Contenu

## Contrats TypeScript

Définis dans `lib/learner/types.ts`:

- `LearnerStatus`: `done | current | next | locked`
- `LearnerModule`
- `LearnerCourse`
- `LearnerChapter`
- `LearnerProgress`

## Données actuelles

Définies dans `lib/learner/data.ts`:

- `learnerNavItems`
- `dashboardModules`
- `catalogueCategories`
- `catalogueCourses`
- `pathChapters`
- `learnerProgress`

## Logique fonctionnelle locale

- Catalogue:
  - filtrage par catégorie
  - recherche texte (titre + description)
- Exercice:
  - compteur de mots
  - activation conditionnelle de validation
  - feedback après soumission
- Progression:
  - série hebdomadaire calculée à partir d'un tableau de minutes

## Extension vers API

Pour brancher un backend:

1. Conserver `types.ts` comme contrat.
2. Remplacer `data.ts` par une couche de fetch côté server.
3. Garder les screens inchangés autant que possible en injectant des props normalisées.