# Routes et Parcours — état Lot 0

## Routes actives

| Route | Description |
|---|---|
| `/` | Redirection vers `/lab` (landing publique à venir — Lot 2) |
| `/lab` | Entonnoir de décision LLM (lab interactif autonome) |
| `/a-propos` | Présentation de l'application |
| `/progression` | Suivi de progression (placeholder — fonctionnel Lot 7) |

## Routes supprimées (Lot 0)

Les routes suivantes ont été supprimées car elles correspondent à un POC non retenu :

- `/learner/dashboard` — fusionné dans landing + progression (Lot 2 / Lot 7)
- `/learner/catalogue` — remplacé par `/formations` (Lot 3)
- `/learner/parcours` — remplacé par `/formations/[parcoursSlug]` (Lot 3)
- `/learner/lecon` — absorbé dans `/formations/[parcoursSlug]/[moduleSlug]` (Lot 4)
- `/learner/exercice` — absorbé dans `/formations/[parcoursSlug]/[moduleSlug]` (Lot 4)
- `/learner/diagrammes` — galerie SVG autonome supprimée, schémas à réintégrer comme widgets (Lot 5)

## Routes à créer (lots suivants)

| Route | Lot | Description |
|---|---|---|
| `/` | Lot 2 | Landing publique (hero, parcours, CTA) |
| `/formations` | Lot 3 | Liste des parcours avec progression |
| `/formations/[parcoursSlug]` | Lot 3 | Détail d'un parcours |
| `/formations/[parcoursSlug]/[moduleSlug]` | Lot 4 | Écran module unifié |
| `/prompts` | Lot 6 | Bibliothèque de prompts réutilisables |
| `/progression` | Lot 7 | Progression réelle depuis localStorage |

## Navigation

- Navbar globale dans `app/layout.tsx` (fixe, dark).
- Liens actifs : Lab · Progression · À propos.
- Refonte navbar complète prévue au Lot 2.
