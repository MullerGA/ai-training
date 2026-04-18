# IA Formation Portal â€” Design System

Plateforme pÃ©dagogique interne pour accompagner les salariÃ©s dans leur montÃ©e en compÃ©tences sur l'IA â€” pensÃ©e comme un **compagnon d'apprentissage guidÃ©** plus que comme un catalogue de cours. Rigueur corporate + chaleur d'usage, pour paraÃ®tre Ã  la fois sÃ©rieuse, accessible et engageante au quotidien.

## Context

Le design system s'appuie sur un projet existant : **MullerGA/ai-toolkit** â€” une application Vue 3 + TypeScript + Vite utilisÃ©e comme support de formation IA, produite par **AI TRAINING** (cabinet conseil data/IA, logo fourni). Le code de rÃ©fÃ©rence a Ã©tÃ© importÃ© et analysÃ© ; les tokens visuels ci-dessous sont extraits directement de la stack.

### Sources

- **Code repo** : https://github.com/MullerGA/ai-toolkit (branche `main`)
  - Stack : Vue 3, TypeScript, Vite, Tailwind CSS, shadcn-vue (base color `slate`), Pinia, Vue Router, Chart.js, Three.js
  - CSS variables : `src/assets/index.css` (shadcn, HSL tokens)
  - Tailwind config : `tailwind.config.js`
  - Logo AI TRAINING : `src/assets/AI_TRAINING_Logo_RVB_blanc_1.svg` â†’ copiÃ© dans `assets/ai-training-logo-white.svg`
  - IcÃ´nes : `lucide-vue-next` (trait fin) + `@heroicons/vue` (outline)
  - Navbar globale : fond `#0f172a` (slate-900), logo gradient `from-blue-500 to-indigo-600`, boutons ghost/gradient
  - Pages types analysÃ©es : `Home.vue` (parcours vertical), `Introduction.vue` (mode focus, sections numÃ©rotÃ©es), `LLMVisualization.vue` (visualisations interactives avec sliders)

### Produits couverts

1. **Application web learner** â€” l'unique surface demandÃ©e. Elle regroupe :
   - Dashboard / accueil learner
   - Catalogue & recherche
   - Parcours / module
   - Ã‰cran de leÃ§on (lecture/vidÃ©o)
   - Ã‰cran d'exercice / pratique
   - Page de progression & statistiques
   - Onboarding / dÃ©couverte

---

## Index du rÃ©pertoire

| Fichier / dossier                 | RÃ´le                                                                |
| --------------------------------- | ------------------------------------------------------------------- |
| `README.md`                       | Ce fichier â€” fondamentaux, ton, motifs visuels, iconographie        |
| `colors_and_type.css`             | CSS variables : couleurs, type, espacements, ombres, radius, motion |
| `SKILL.md`                        | Manifeste compatible Agent Skill (`ai-training-ia-formation-design`)     |
| `assets/ai-training-logo-white.svg`    | Logo AI TRAINING, version blanche sur fond sombre                        |
| `preview/*.html`                  | 16 cartes HTML qui alimentent l'onglet Design System                |
| `ui_kits/learner/`                | UI kit hi-fi de l'application learner                               |
| `ui_kits/learner/index.html`      | Prototype cliquable â€” 7 Ã©crans learner avec navigation              |
| `ui_kits/learner/components/`     | Primitives React partagÃ©es (Button, Card, Badge, Progress, Navbar)  |
| `ui_kits/learner/screens/`        | Dashboard, Catalog, Path, Lesson, Exercise, Progress, Onboarding    |
| `ui_kits/learner/styles.css`      | Styles complÃ©mentaires du kit (shell, boutons, cartes, inputs)      |

---

## Content fundamentals

**Ton** : professionnel mais chaleureux. **Tutoiement**, phrasÃ© direct, pas de jargon creux. On parle Ã  unÂ·e salariÃ©Â·e qui apprend pendant sa journÃ©e de travail â€” on valorise son temps, on rassure sur la courbe d'apprentissage.

**Langue** : franÃ§ais uniquement. Accents corrects, apostrophes typographiques (`'`), guillemets franÃ§ais (`Â«  Â»`) rÃ©servÃ©s aux citations longues ; en UI, on utilise `"..."` ou l'italique.

**Casing** : Phrase case partout. Jamais de Title Case ni de ALL CAPS (rÃ©servÃ© aux badges trÃ¨s courts type `NOUVEAU`).

**Emoji** : **non**. Le produit Ã©vite absolument l'Ã©moji pour ne pas glisser vers le ludique/marketing. Les repÃ¨res visuels passent par les icÃ´nes Lucide (trait fin) et les puces de progression.

**Structure typique de copy** :
- **Titre de section** : nominal, court, direct (Â« Introduction aux LLM Â», Â« Ton parcours Â»)
- **Description** : une phrase qui dit ce qu'on va y apprendre ou y faire, au prÃ©sent
- **CTA primaire** : verbe d'action Ã  l'infinitif (Â« Commencer la leÃ§on Â», Â« Reprendre Â», Â« Valider la rÃ©ponse Â»)
- **CTA secondaire** : plus doux, neutre (Â« Guide du module Â», Â« Plus tard Â»)
- **Feedback positif** : sobre, pas d'enthousiasme excessif (Â« Bien jouÃ©, tu as terminÃ© ce module Â» plutÃ´t que Â« Bravo !!! ðŸŽ‰ Â»)
- **Erreur / alerte** : explicite, orientÃ© action (Â« Reprends l'exercice 2 avant de continuer Â»)

**Exemples tirÃ©s du code source** :
- `Â« DÃ©couvrez les fondamentaux des LLM Ã  travers un parcours pÃ©dagogique structurÃ© Â»`
- `Â« AccÃ©der au module Â»`
- `Â« Comprendre les principes fondamentaux des LLM Â»`
- `Â« Guide du module Â»`
- `Â« Support de formation Â»`
- `Â« Questions ? Â»`
- `Â« Voir tout Â»` / `Â« PrÃ©cÃ©dent Â»` / `Â« Suivant Â»`

Note : le code source alterne tutoiement (Â« DÃ©couvrezâ€¦ Â») et vouvoiement selon les vues. **Le design system tranche pour le tutoiement partout** (demande produit explicite), Ã  harmoniser sur l'existant.

**Vibe** : un collÃ¨gue expert qui t'explique calmement, pas un prof qui rÃ©cite. Des phrases courtes, des repÃ¨res de progression clairs, zÃ©ro superflu.

---

## Visual foundations

### Couleurs
- **Neutres** : Ã©chelle `slate` (Tailwind) de 50 Ã  950. Le systÃ¨me est majoritairement construit sur slate-50/100/200/700/800/900. La navbar est toujours slate-900 (`#0f172a`).
- **Accent** : `blue-500` (#3b82f6) comme couleur primaire d'action, avec gradient `blue-500 â†’ indigo-600` rÃ©servÃ© aux **CTA principaux**, au **logo badge** et Ã  l'**halo focus**. Jamais sur de grandes surfaces.
- **Semantic** : vert (`green-500`) pour succÃ¨s et coches de progression, ambre (`amber-500`) pour indices pÃ©dagogiques, rouge (`red-500`) pour destructive uniquement.
- **Pas de palette secondaire chaude** â€” le produit reste froid/corporate.

### Typographie
- **Unique famille** : **Inter** (400, 500, 600, 700, 800). ImportÃ©e depuis Google Fonts dans `colors_and_type.css`.
- Tailwind par dÃ©faut cÃ´tÃ© code (font-sans). Inter est un choix sÃ»r alignÃ© avec le ton Â« sans-serif moderne neutre Â» demandÃ©.
- HiÃ©rarchie serrÃ©e : `h1 36px bold`, `h2 24px semi`, `h3 20px semi`, body `14â€“16px 400`.
- Letter-spacing nÃ©gatif sur les grands titres (âˆ’0.015 Ã  âˆ’0.02em). Leading `1.625` sur le body pour une lecture confortable.

### Espacements & layout
- Base **4px** (tokens `space-1â€¦16`, Tailwind-aligned).
- Container centrÃ©, `max-w-7xl` ou `max-w-4xl` selon la densitÃ©. Padding horizontal `px-4` mobile â†’ `px-6` desktop.
- Les Ã©crans ont tous **une navbar fixe top** (`h-16`, z-50) + contenu avec `pt-16`.
- GouttiÃ¨res de grille : `gap-4` (16) pour les cartes denses, `gap-6` (24) pour les grilles de module.

### ArriÃ¨re-plans
- **Pas d'images full-bleed**. Pas d'illustrations dÃ©coratives. Pas de patterns rÃ©pÃ©tÃ©s.
- Fonds de sections : `slate-50` â†’ `slate-100`, parfois en lÃ©ger gradient vertical `from-slate-50 to-slate-100`.
- Navbar : `#0f172a` pur, `backdrop-filter: blur(8px)`, border-bottom 1px `rgba(255,255,255,0.05)`.
- Mode focus : overlay `backdrop-blur-sm bg-black/10` (source `Introduction.vue`).
- **Aucune texture, grain, ou bruit.** Le produit est plat et sobre.

### Cartes
- Fond `bg-white` (ou `slate-50` pour cartes secondaires dans une section blanche â€” inversion volontaire).
- Border `1px solid slate-200`.
- Radius `0.5rem` (shadcn default) â€” parfois `0.75rem` sur les grandes cartes module.
- Shadow : `shadow-sm` au repos, **`shadow-md` au hover**, transition `300ms ease`.
- Header de carte : `border-b`, fond `slate-100` trÃ¨s lÃ©ger, padding `p-4` Ã  `p-6`.

### Hover states
- **Cartes** : `shadow` â†’ `shadow-md`, transition `all 0.3s`. Pas de translate ; parfois `-2px` trÃ¨s discret dans `Home.vue`.
- **Boutons ghost** : `hover:bg-accent` (`slate-100`) + `text-accent-foreground`.
- **Boutons primary** : `hover:bg-primary/90` (assombrissement 10%).
- **Liens** : `text-blue-600 â†’ text-blue-700`, avec `ChevronRightIcon` Ã  droite qui reste statique.
- **Logo et Ã©lÃ©ments spÃ©ciaux** : trÃ¨s subtile mise Ã  l'Ã©chelle `scale-105` sur la navbar uniquement.

### Press / active states
- OpacitÃ© 0.9 ou `/90` sur les boutons primary.
- Pas de shrink (pas de `scale-95`) â€” le ton reste corporate.

### Focus states
- `focus-visible:ring-2 ring-ring ring-offset-2` â€” anneau 2px bleu avec offset blanc (pattern shadcn natif).
- Outline retirÃ©e au profit du ring.

### Bordures
- Toujours **1px**, couleur `slate-200` (mode clair) / `slate-700` (mode sombre si activÃ©).
- Pas de bordures Ã©paisses. Pas de bordure colorÃ©e Ã  gauche seule (anti-pattern AI slop explicitement Ã©vitÃ©).

### Ombres
- 4 niveaux hiÃ©rarchiques : `sm`, `DEFAULT`, `md`, `lg`.
- Ombres douces, noires Ã  5â€“8% opacitÃ©. **Aucune ombre colorÃ©e.**
- Pas d'`inset shadow` en surface ; utilisÃ© uniquement sur les champs focus (ring via box-shadow).

### Transparence & blur
- `backdrop-blur-sm` uniquement sur : navbar, overlays modaux, mode focus.
- Fonds Ã  opacitÃ© : `bg-white/50`, `bg-slate-800/50` pour sections secondaires dans des blocs denses.
- Pas d'effet glassmorphism marquÃ© ailleurs.

### Radius
- Convention shadcn : `--radius: 0.5rem`.
- `rounded-sm 4px`, `rounded-md 6px`, `rounded-lg 8px`, `rounded-xl 12px`, `rounded-full` (badges, avatars, puces de numÃ©rotation).
- NumÃ©rotation de module : cercle 40â€“48px, fond `blue-100` ou `blue-600` plein, chiffre au centre. Pattern rÃ©current dans `Home.vue` et `Introduction.vue`.

### Animations
- Easing : `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out expo, source `Introduction.vue`) pour les transitions de mode.
- DurÃ©e standard : `200ms` (`duration-200`, classe `transition-colors` partout).
- Transitions lentes (`300ms`) sur la navbar et les cartes.
- `fadeInUp` sur cartes au mount (`translateY(20px) â†’ 0`, opacity 0 â†’ 1, 500ms), dÃ©lai staggered `0.1s` entre cartes.
- `accordion-down/up` et `collapsible-down/up` via `tailwindcss-animate` (200ms ease-out).
- `animate-pulse` sur Ã©lÃ©ments attention (points de tokens, nodes de rÃ©seau).
- **Pas de bounces, pas de spring.** Le registre reste pÃ©dagogique et calme.

### Ã‰lÃ©ments fixes
- Navbar `fixed top-0 z-50 h-16`.
- Boutons de navigation (prev/next de module) parfois sticky bottom.
- Tooltips chart.js positionnÃ©s en absolute au-dessus des points.

### Imagery
- **Aucune imagerie photographique** dans le produit existant.
- Quand une illustration est nÃ©cessaire, on utilise des **visualisations fonctionnelles SVG** dessinÃ©es en JS (arbres de dÃ©cision, rÃ©seaux, entonnoirs avec paths dynamiques). Couleurs neutres slate + accent blue.
- Si Ã  terme il faut des photos : recommandation â†’ B&W ou dÃ©saturÃ©es, contextes bureau/formation, pas de stock colorÃ© type Â« business happy people Â».

---

## Iconography

### BibliothÃ¨ques
- **Lucide** (`lucide-vue-next`) â€” icÃ´nes principales, trait 2px, 16â€“24px.
- **Heroicons** (`@heroicons/vue/24/outline`) â€” utilisÃ© marginalement pour quelques icÃ´nes (ex. `Bars3Icon`). Ã€ terme Ã  consolider sur Lucide seul.

### Usage
- Toutes les icÃ´nes sont **outline** (trait fin). Jamais de version filled ou duotone.
- Taille standard en boutons : `w-5 h-5` (20px) avec `mr-2`. En listes de puces : `w-4 h-4`.
- Couleur = couleur du texte du conteneur (`currentColor`). Seules les icÃ´nes de statut prennent des couleurs sÃ©mantiques (`text-green-500` pour check, `text-yellow-500` pour lightbulb, etc).
- IcÃ´nes rÃ©currentes du produit : `BookOpen`, `MessageCircleQuestion`, `ChevronRight`, `CheckCircle`, `ArrowUp`, `Lightbulb`, `Check`, `Plus-Circle`, `MessageSquare`, `Database`, `GitBranch`, `Bars3` (menu mobile).

### Dans ce design system
- Pour les cartes de preview et UI kits, on **charge Lucide via CDN** (`https://unpkg.com/lucide@latest`) et on instancie `lucide.createIcons()`. C'est le substitut le plus proche de `lucide-vue-next` et utilise le mÃªme registre d'icÃ´nes.
- Aucune icÃ´ne dessinÃ©e Ã  la main. Aucun emoji. Jamais.

### Logo AI TRAINING
- Fourni en version blanc sur fond sombre : `assets/ai-training-logo-white.svg` (ratio ~6:1, hauteur standard 24px dans la navbar).
- Le produit y accole un **badge dÃ©gradÃ© 32Ã—32** avec les lettres **"AI"** (font-bold, blanc, fond `from-blue-500 to-indigo-600`, rounded-lg). C'est ce badge qui porte l'identitÃ© Â« IA Formation Â» dans la navbar.

---

## Font substitution flag

Le codebase n'embarque pas de fichier de police â€” il repose sur `font-sans` Tailwind (stack systÃ¨me) par dÃ©faut. **Choix retenu : Inter**, chargÃ©e depuis Google Fonts. Si AI TRAINING ou le commanditaire a une police d'entreprise (ex. un grotesque propriÃ©taire), merci de la fournir et je remplacerai Inter dans `colors_and_type.css`.
