# Learner UI Kit — IA Formation Portal

Recréation hi-fi des écrans learner de la plateforme. Stack ciblée du repo source (Vue 3 + shadcn-vue + Tailwind) mais traduite en **React + Babel inline** pour être prévisualisable en HTML statique. Les tokens visuels (slate, blue→indigo gradient, radius 0.5rem, Inter, Lucide trait fin) proviennent de `colors_and_type.css` à la racine.

## Écrans couverts

| # | Écran                          | Fichier                      |
|---|--------------------------------|------------------------------|
| 1 | Dashboard / accueil learner    | `screens/Dashboard.jsx`      |
| 2 | Catalogue / recherche          | `screens/Catalog.jsx`        |
| 3 | Parcours / module              | `screens/Path.jsx`           |
| 4 | Écran de leçon (lecture/vidéo) | `screens/Lesson.jsx`         |
| 5 | Exercice / pratique            | `screens/Exercise.jsx`       |
| 6 | Progression / statistiques     | `screens/Progress.jsx`       |
| 7 | Onboarding / découverte        | `screens/Onboarding.jsx`     |

`index.html` est un **prototype cliquable** qui enchaîne ces 7 écrans via une barre latérale de navigation, avec persistance de l'écran courant en `localStorage`.

## Composants partagés

- `components/Navbar.jsx` — barre fixe `#0f172a` + badge AI gradient + actions
- `components/Card.jsx` — carte shadcn (header / content / footer)
- `components/Button.jsx` — variants default / gradient / outline / ghost / link
- `components/Badge.jsx` — pill statut + chips metadata
- `components/ProgressBar.jsx` — barre + stepper
- `components/Icon.jsx` — wrapper SVG trait fin (~30 icônes Lucide inline)

## Notes d'implémentation

- Les icônes sont inline en SVG trait fin (replication de `lucide-vue-next` pour éviter dépendance CDN).
- Le CSS est en `<style>` inline + `colors_and_type.css` pour les tokens.
- Pas de router — un `useState` global gère l'écran courant, sauvé en `localStorage` pour reprendre où on en était.
- Les contenus texte sont en tutoiement, tirés ou inspirés des vues `Home.vue`, `Introduction.vue`, `Prompting.vue` du repo source.
