# Routes et parcours - etat Lot 6

## Routes actives

| Route | Description |
|---|---|
| `/` | Landing publique (hero, promesses, apercu parcours) |
| `/formations` | Grille des parcours avec progression locale |
| `/formations/[parcoursSlug]` | Detail parcours (header, progression, liste modules, CTA reprendre) |
| `/formations/[parcoursSlug]/[moduleSlug]` | Ecran module unifie (sections, progression, sidebar, widgets interactifs) |
| `/prompts` | Bibliotheque de prompts avec filtres et copie |
| `/lab` | Wrapper dedie autour du widget `lab-funnel` |
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
   - rendu des sections `interactive` via registre de widgets,
   - bouton final "Marquer comme termine",
   - navigation vers module precedent/suivant.

## Widgets disponibles en route (livres en Lot 5)

- Dans les modules:
  - `timeline`
  - `hype-cycle`
  - `iceberg-explorer`
  - `lab-funnel` (consommable par section interactive via le registre)
- Sur la route annexe:
  - `/lab` reutilise le meme composant `LabFunnelWidget`.

## Routes supprimees (Lot 0)

- `/learner/dashboard`
- `/learner/catalogue`
- `/learner/parcours`
- `/learner/lecon`
- `/learner/exercice`
- `/learner/diagrammes`

## Lot 6 - annexes disponibles

- `/prompts`:
  - source: `learnerPromptTemplates`,
  - filtres: categorie, complexite, tag,
  - action: copie du template dans le presse-papiers.
- `/lab`:
  - wrapper dedie avec contexte explicatif,
  - reutilise le composant `LabFunnelWidget` du registre de widgets.

