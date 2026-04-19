# Architecture applicative - etat Lot 6

## Vue d'ensemble

Application Next.js 16 client-first, sans backend et sans base de donnees.
L'etat apprenant est persiste en localStorage via `useLearnerState()`.

## Couches

| Couche | Repertoire | Role |
|---|---|---|
| Routing | `app/` | Pages Next.js App Router |
| Ecrans metier | `components/formations/`, `components/module/`, `components/learner/screens/` | Ecrans et blocs de rendu par route |
| UI primitives | `components/ui/` | Composants shadcn/ui + utilitaires styles |
| Contenu | `lib/content/` | Catalogue parcours/modules type |
| Etat local | `lib/storage/learner-state.ts` | Persistance progression (`ai-training:state:v1`) |
| Widgets module | `components/module/widgets/` | Registre et widgets interactifs embarques |
| Diagrammes data-driven | `components/diagram/`, `lib/diagram/` | Socle SVG reutilisable pour lots suivants |

## Routing (etat actuel)

- `app/layout.tsx`: layout racine + navbar globale.
- `app/page.tsx`: landing publique.
- `app/formations/page.tsx`: listing parcours.
- `app/formations/[parcoursSlug]/page.tsx`: detail d'un parcours.
- `app/formations/[parcoursSlug]/[moduleSlug]/page.tsx`: ecran module unifie.
- `app/prompts/page.tsx`: annexe bibliotheque de prompts.
- `app/lab/page.tsx`: wrapper autour du widget `LabFunnelWidget` avec contexte dedie.
- `app/a-propos/page.tsx`: page A propos.
- `app/progression/page.tsx`: progression (placeholder).

## Ecran module

- `components/module/module-screen.tsx` (Client Component):
  - rendu base sur `module.sections`,
  - suivi de progression sur la derniere section atteinte,
  - synchronisation `setModuleProgress`,
  - action finale `markModuleComplete`,
  - sidebar: plan de sections + modules voisins.
- `components/module/section-*.tsx`: rendu dedie pour `intro`, `concept`, `interactive`, `exercise`, `recap`.

## Architecture widgets (livree en Lot 5)

- `components/module/widgets/registry.ts`:
  - registre type des widgets exposes,
  - resolution du label et du rendu selon `InteractiveWidget`.
- `components/module/section-interactive.tsx`:
  - consomme le registre,
  - applique un fallback explicite via `WidgetPlaceholder`.
- `components/module/widgets/lab-funnel/`:
  - composant extrait depuis l'ancien ecran `/lab`,
  - reutilise en annexe et dans les modules.
- `components/module/widgets/timeline-widget.tsx`,
  `components/module/widgets/hype-cycle-widget.tsx`,
  `components/module/widgets/iceberg-explorer-widget.tsx`:
  - widgets interactifs du batch parcours 1.

## Annexes (Lot 6)

- `components/prompts/prompt-library.tsx`:
  - consomme `learnerPromptTemplates`,
  - applique les filtres categorie / complexite / tags,
  - expose l'action de copie par template.
- `app/lab/page.tsx`:
  - ajoute le contexte pedagogique annexe,
  - embarque `LabFunnelWidget` en mode compose.

