# Architecture applicative - etat Lot 4

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
| Widgets et diagrammes | `components/diagram/`, `lib/diagram/` | Socle visuel a reutiliser en Lot 5 |

## Routing (etat actuel)

- `app/layout.tsx`: layout racine + navbar globale.
- `app/page.tsx`: landing publique.
- `app/formations/page.tsx`: listing parcours.
- `app/formations/[parcoursSlug]/page.tsx`: detail d'un parcours.
- `app/formations/[parcoursSlug]/[moduleSlug]/page.tsx`: ecran module unifie (Lot 4).
- `app/lab/page.tsx`: lab autonome.
- `app/a-propos/page.tsx`: page A propos.
- `app/progression/page.tsx`: progression (placeholder).

## Ecran module (Lot 4)

- `components/module/module-screen.tsx` (Client Component):
  - rendu base sur `module.sections`,
  - suivi de progression sur la derniere section atteinte,
  - synchronisation `setModuleProgress`,
  - action finale `markModuleComplete`,
  - sidebar: plan de sections + modules voisins.
- `components/module/section-*.tsx`: rendu dedie pour `intro`, `concept`, `interactive`, `exercise`, `recap`.

## Notes

- Les widgets interactifs reels des sections `interactive` restent en placeholder en Lot 4.
- Le registre de widgets et l'integration du Lab dans ce registre sont prevus en Lot 5.
