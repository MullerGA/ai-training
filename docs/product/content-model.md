# Modele de contenu - etat Lot 4

## Contrats TypeScript utilises

Definis dans `lib/content/types.ts`:

| Type | Usage |
|---|---|
| `Parcours` | Unite pedagogique complete (meta + modules) |
| `Module` | Etape d'un parcours, composee de sections ordonnees |
| `ModuleSection` | Union de sections `intro`, `concept`, `interactive`, `exercise`, `recap` |
| `InteractiveWidget` | Union typee des widgets cibles du catalogue |

## Organisation des donnees

- `lib/content/parcours/le-monde-de-l-ia.ts`: premier parcours avec modules squelette.
- `lib/content/index.ts`:
  - `allParcours`,
  - `getParcours(slug)`,
  - `getModule(parcoursSlug, moduleSlug)`.

Le contenu pedagogique reste en placeholders `TODO: [proprietaire]`.

## Rendu module (Lot 4)

La route `/formations/[parcoursSlug]/[moduleSlug]` rend les sections dans l'ordre de `module.sections`:

1. `intro`
2. `concept`
3. `interactive`
4. `exercise`
5. `recap`

Composants de rendu dedies dans `components/module/`:

- `SectionIntro`
- `SectionConcept`
- `SectionInteractive`
- `SectionExercise`
- `SectionRecap`

## Persistance locale

Definie dans `lib/storage/learner-state.ts`:

```ts
type LearnerState = {
  completedModules: string[];
  moduleProgress: Record<string, number>;
  lastVisited?: { parcours: string; module: string };
};
```

- Cle localStorage: `ai-training:state:v1`.
- Cle module: `${parcoursSlug}/${moduleSlug}`.
- Dans l'ecran module (Lot 4):
  - progression mise a jour via `setModuleProgress` en fonction de la derniere section atteinte,
  - completion via `markModuleComplete`,
  - reprise via `lastVisited`.
