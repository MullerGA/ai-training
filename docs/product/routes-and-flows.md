# Routes et parcours - etat Lot 4

## Routes actives

| Route | Description |
|---|---|
| `/` | Landing publique (hero, promesses, apercu parcours) |
| `/formations` | Grille des parcours avec progression locale |
| `/formations/[parcoursSlug]` | Detail parcours (header, progression, liste modules, CTA reprendre) |
| `/formations/[parcoursSlug]/[moduleSlug]` | Ecran module unifie (sections, barre de progression, sidebar contextuelle, fin de module) |
| `/lab` | Lab interactif autonome |
| `/a-propos` | Presentation de l'application |
| `/progression` | Suivi de progression (placeholder, lot 7) |

## Navigation principale

- Navbar globale dans `app/layout.tsx`.
- Liens: `Formations`, `Annexes` (Prompts + Lab), `Progression`, `A propos`.
- Pas de sidebar globale persistante.

## Flux principal actuel

1. `/` -> `/formations`
2. `/formations` -> `/formations/[parcoursSlug]`
3. `/formations/[parcoursSlug]` -> `/formations/[parcoursSlug]/[moduleSlug]`
4. Dans le module:
   - progression calculee par derniere section atteinte,
   - bouton final "Marquer comme termine",
   - navigation vers module precedent/suivant.

## Routes supprimees (Lot 0)

- `/learner/dashboard`
- `/learner/catalogue`
- `/learner/parcours`
- `/learner/lecon`
- `/learner/exercice`
- `/learner/diagrammes`

## Routes prevues ensuite

| Route | Lot | Description |
|---|---|---|
| `/prompts` | Lot 6 | Bibliotheque de prompts reutilisables |
