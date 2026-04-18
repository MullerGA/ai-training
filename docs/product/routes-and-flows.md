# Routes et Parcours — état Lot 3

## Routes actives

| Route | Description |
|---|---|
| `/` | Landing publique (hero, 3 promesses, aperçu parcours, footer) |
| `/formations` | Grille des parcours avec progression localStorage |
| `/formations/[parcoursSlug]` | Détail parcours (header, modules, barre progression, CTA reprendre) |
| `/formations/[parcoursSlug]/[moduleSlug]` | Placeholder module (remplacé Lot 4) |
| `/lab` | Entonnoir de décision LLM (lab interactif autonome) |
| `/a-propos` | Présentation de l'application |
| `/progression` | Suivi de progression (placeholder — fonctionnel Lot 7) |

## Routes supprimées (Lot 0)

- `/learner/dashboard` — fusionné dans landing + progression
- `/learner/catalogue` — remplacé par `/formations`
- `/learner/parcours` — remplacé par `/formations/[parcoursSlug]` (Lot 3)
- `/learner/lecon` — absorbé dans `/formations/[parcoursSlug]/[moduleSlug]` (Lot 4)
- `/learner/exercice` — absorbé dans `/formations/[parcoursSlug]/[moduleSlug]` (Lot 4)
- `/learner/diagrammes` — galerie SVG autonome supprimée, schémas à réintégrer comme widgets (Lot 5)

## Routes à créer (lots suivants)

| Route | Lot | Description |
|---|---|---|
| `/formations/[parcoursSlug]/[moduleSlug]` | Lot 4 | Écran module unifié (remplace le placeholder) |
| `/prompts` | Lot 6 | Bibliothèque de prompts réutilisables |

## Navigation

- Navbar globale dans `app/layout.tsx` (fixe, dark, Server Component).
- Composant dropdown "Annexes" (`components/learner/annexes-menu.tsx`) : Client Component.
- Liens navbar : **Formations** · **Annexes** (menu → Prompts, Lab) · **Progression** · **À propos**.
- Logo → `/` (accueil).
- Pas de sidebar persistante globale ; sidebar contextuelle prévue uniquement dans l'écran module (Lot 4).
