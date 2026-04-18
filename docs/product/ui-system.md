# Système UI

## Principes

- Interface claire, orientée progression.
- Composants cohérents et réutilisables.
- Hiérarchie visuelle basée sur des tokens CSS.

## Tokens et styles globaux

- Fichier source: `app/globals.css`
- Variables:
  - palette slate/blue/indigo/green/amber/red
  - couleurs sémantiques (`--background`, `--foreground`, etc.)
  - gradient de marque (`--learner-gradient`)

## Polices

- `Inter` pour le texte principal
- `Geist Mono` pour usages mono
- chargement via `next/font/google`

## Classes utilitaires métier

- `.page-title`
- `.page-lead`
- `.panel-card`
- `.focus-ring`
- `.text-caption`
- `.bg-learner-gradient`

## Primitives UI

- `Button` (`components/ui/button.tsx`): variants `default`, `gradient`, `outline`, `ghost`, etc.
- `Badge`
- `Input`
- `Progress`
- `Textarea`
- `Card`

## Branding navbar

- La navbar affiche un wordmark SVG inline `AI TRAINING`.