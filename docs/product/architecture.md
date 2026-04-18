# Architecture Applicative — état Lot 0

## Vue d'ensemble

Architecture client-only, sans backend ni base de données. État local via localStorage (Lot 1+).

## Couches

| Couche | Répertoire | Rôle |
|---|---|---|
| Routing | `app/` | Routes Next.js, layout racine |
| UI métier | `components/learner/screens/` | Écrans complets par route |
| Composants UI | `components/ui/` | Primitives shadcn/ui |
| Diagrammes SVG | `components/diagram/` | Système data-driven (à remanier Lot 5) |
| Données | `lib/learner/` | Types, données et logique fonctionnelle |

## Routing (état actuel)

- `app/layout.tsx` : layout racine — métadonnées, polices, navbar globale.
- `app/page.tsx` : redirect vers `/lab` (landing publique Lot 2).
- `app/lab/page.tsx` : lab interactif.
- `app/a-propos/page.tsx` : page À propos.
- `app/progression/page.tsx` : progression (placeholder).

Tous les segments `/learner/*` ont été supprimés.

## Composants

- `components/learner/screens/*` : un screen par route (lab, about, progression).
- `components/learner/learner-navbar.tsx` : navbar fixe (refonte Lot 2).
- `components/ui/*` : primitives génériques (button, badge, input, progress, …).
- `components/diagram/*` : système SVG à remanier en Lot 5 pour les widgets.

## Données et types

- `lib/learner/types.ts` : types utilisés (LabScenario, PromptTemplate, TimelineMilestone).
- `lib/learner/data.ts` : données du lab, timeline, prompt templates.
- `lib/learner/funnel.ts` : logique déterministe temperature / top-k / top-p.
- `lib/diagram/*` : specs et types SVG (conservés pour Lot 5).

## Modèle de contenu cible (Lot 1+)

Voir `docs/product/content-model.md` et le §6 du plan d'évolution.

## Interactivité

Client Components uniquement là où c'est nécessaire :

- `lab-screen.tsx` : contrôles et visualisation de l'entonnoir.
