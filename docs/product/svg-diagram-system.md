# SVG Diagram System

## Objectif

Passer de slides bitmap à des schémas SVG web responsives, maintenables et réutilisables dans
l'application.

## Modèle data-driven

Chaque schéma est défini par une `DiagramSpec`:

- `title`, `ariaLabel`, `viewBox`, `mode`
- `sections` (zones de groupe)
- `nodes` (boîtes, bulles, cercles)
- `links` (flèches)
- `annotations` (notes de lecture)
- `legends` (légendes de couleur)

## Primitives publiques

- `TitleBar`
- `NodeBox`
- `MessageBubble`
- `GroupFrame`
- `Arrow`
- `LegendBlock`

## Renderers publics

- `DiagramCanvas({ id, title, viewBox })`
- `FlowDiagram({ spec })`
- `LayerDiagram({ spec })`

## Capitalisation

- 8 planches converties dans `lib/diagram/specs.ts`
- 4 patterns industrialisés:
  - pipeline
  - comparison
  - augmented-chat
  - ecosystem
- Chaque pattern expose les variantes `compact`, `detailed`, `mobile`.

## Règles de conversion image -> SVG

1. Vectoriser structure et texte.
2. Éviter les bitmaps intégrés dans le SVG.
3. Préférer pictos vectoriels ou assets externes séparés.
4. Assurer `viewBox` correct et classes de style cohérentes.

## Validation

- Lisibilité desktop/tablette/mobile.
- Aucun chevauchement majeur sur les variantes.
- Accessibilité (`role=\"img\"`, `aria-label`).
- IDs stables pour les marqueurs de flèches.
