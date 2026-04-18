# Architecture Applicative

## Vue d'ensemble

Le produit suit une architecture simple en 3 couches:

1. Routing et layouts: `app/`
2. UI métier: `components/learner/`
3. Données et types: `lib/learner/`

## Routing

- Root layout global: `app/layout.tsx`
- Layout learner partagé: `app/learner/layout.tsx`
- Pages par feature: `app/learner/<feature>/page.tsx`

La route `/` redirige vers `/learner/dashboard`.

## Layouts

- Root layout:
  - définit metadata globale
  - charge les polices (Inter, Geist Mono)
  - applique le style global
- Learner layout:
  - navbar fixe
  - sidebar desktop
  - zone de contenu principale

## Composants

- `components/learner/screens/*`: écrans complets par route.
- `components/learner/*`: blocs métier réutilisables (kpi, module, lecteur, etc.).
- `components/ui/*`: primitives génériques (button, badge, input, progress, textarea).

## Données

- `lib/learner/types.ts`: contrat métier TypeScript.
- `lib/learner/data.ts`: contenu mocké (modules, parcours, progression, catalogue).

## Interactivité

Client Components uniquement quand nécessaire:

- `catalogue-screen.tsx` (filtre recherche/catégorie)
- `exercice-screen.tsx` (saisie réponse, validation)
- `lesson-player.tsx` (contrôles lecteur)