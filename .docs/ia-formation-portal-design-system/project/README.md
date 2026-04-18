# IA Formation Portal — Design System

Plateforme pédagogique interne pour accompagner les salariés dans leur montée en compétences sur l'IA — pensée comme un **compagnon d'apprentissage guidé** plus que comme un catalogue de cours. Rigueur corporate + chaleur d'usage, pour paraître à la fois sérieuse, accessible et engageante au quotidien.

## Context

Le design system s'appuie sur un projet existant : **MullerGA/ai-toolkit** — une application Vue 3 + TypeScript + Vite utilisée comme support de formation IA, produite par **Magora** (cabinet conseil data/IA, logo fourni). Le code de référence a été importé et analysé ; les tokens visuels ci-dessous sont extraits directement de la stack.

### Sources

- **Code repo** : https://github.com/MullerGA/ai-toolkit (branche `main`)
  - Stack : Vue 3, TypeScript, Vite, Tailwind CSS, shadcn-vue (base color `slate`), Pinia, Vue Router, Chart.js, Three.js
  - CSS variables : `src/assets/index.css` (shadcn, HSL tokens)
  - Tailwind config : `tailwind.config.js`
  - Logo Magora : `src/assets/Magora_Logo_RVB_blanc_1.svg` → copié dans `assets/magora-logo-white.svg`
  - Icônes : `lucide-vue-next` (trait fin) + `@heroicons/vue` (outline)
  - Navbar globale : fond `#0f172a` (slate-900), logo gradient `from-blue-500 to-indigo-600`, boutons ghost/gradient
  - Pages types analysées : `Home.vue` (parcours vertical), `Introduction.vue` (mode focus, sections numérotées), `LLMVisualization.vue` (visualisations interactives avec sliders)

### Produits couverts

1. **Application web learner** — l'unique surface demandée. Elle regroupe :
   - Dashboard / accueil learner
   - Catalogue & recherche
   - Parcours / module
   - Écran de leçon (lecture/vidéo)
   - Écran d'exercice / pratique
   - Page de progression & statistiques
   - Onboarding / découverte

---

## Index du répertoire

| Fichier / dossier                 | Rôle                                                                |
| --------------------------------- | ------------------------------------------------------------------- |
| `README.md`                       | Ce fichier — fondamentaux, ton, motifs visuels, iconographie        |
| `colors_and_type.css`             | CSS variables : couleurs, type, espacements, ombres, radius, motion |
| `SKILL.md`                        | Manifeste compatible Agent Skill (`magora-ia-formation-design`)     |
| `assets/magora-logo-white.svg`    | Logo Magora, version blanche sur fond sombre                        |
| `preview/*.html`                  | 16 cartes HTML qui alimentent l'onglet Design System                |
| `ui_kits/learner/`                | UI kit hi-fi de l'application learner                               |
| `ui_kits/learner/index.html`      | Prototype cliquable — 7 écrans learner avec navigation              |
| `ui_kits/learner/components/`     | Primitives React partagées (Button, Card, Badge, Progress, Navbar)  |
| `ui_kits/learner/screens/`        | Dashboard, Catalog, Path, Lesson, Exercise, Progress, Onboarding    |
| `ui_kits/learner/styles.css`      | Styles complémentaires du kit (shell, boutons, cartes, inputs)      |

---

## Content fundamentals

**Ton** : professionnel mais chaleureux. **Tutoiement**, phrasé direct, pas de jargon creux. On parle à un·e salarié·e qui apprend pendant sa journée de travail — on valorise son temps, on rassure sur la courbe d'apprentissage.

**Langue** : français uniquement. Accents corrects, apostrophes typographiques (`'`), guillemets français (`«  »`) réservés aux citations longues ; en UI, on utilise `"..."` ou l'italique.

**Casing** : Phrase case partout. Jamais de Title Case ni de ALL CAPS (réservé aux badges très courts type `NOUVEAU`).

**Emoji** : **non**. Le produit évite absolument l'émoji pour ne pas glisser vers le ludique/marketing. Les repères visuels passent par les icônes Lucide (trait fin) et les puces de progression.

**Structure typique de copy** :
- **Titre de section** : nominal, court, direct (« Introduction aux LLM », « Ton parcours »)
- **Description** : une phrase qui dit ce qu'on va y apprendre ou y faire, au présent
- **CTA primaire** : verbe d'action à l'infinitif (« Commencer la leçon », « Reprendre », « Valider la réponse »)
- **CTA secondaire** : plus doux, neutre (« Guide du module », « Plus tard »)
- **Feedback positif** : sobre, pas d'enthousiasme excessif (« Bien joué, tu as terminé ce module » plutôt que « Bravo !!! 🎉 »)
- **Erreur / alerte** : explicite, orienté action (« Reprends l'exercice 2 avant de continuer »)

**Exemples tirés du code source** :
- `« Découvrez les fondamentaux des LLM à travers un parcours pédagogique structuré »`
- `« Accéder au module »`
- `« Comprendre les principes fondamentaux des LLM »`
- `« Guide du module »`
- `« Support de formation »`
- `« Questions ? »`
- `« Voir tout »` / `« Précédent »` / `« Suivant »`

Note : le code source alterne tutoiement (« Découvrez… ») et vouvoiement selon les vues. **Le design system tranche pour le tutoiement partout** (demande produit explicite), à harmoniser sur l'existant.

**Vibe** : un collègue expert qui t'explique calmement, pas un prof qui récite. Des phrases courtes, des repères de progression clairs, zéro superflu.

---

## Visual foundations

### Couleurs
- **Neutres** : échelle `slate` (Tailwind) de 50 à 950. Le système est majoritairement construit sur slate-50/100/200/700/800/900. La navbar est toujours slate-900 (`#0f172a`).
- **Accent** : `blue-500` (#3b82f6) comme couleur primaire d'action, avec gradient `blue-500 → indigo-600` réservé aux **CTA principaux**, au **logo badge** et à l'**halo focus**. Jamais sur de grandes surfaces.
- **Semantic** : vert (`green-500`) pour succès et coches de progression, ambre (`amber-500`) pour indices pédagogiques, rouge (`red-500`) pour destructive uniquement.
- **Pas de palette secondaire chaude** — le produit reste froid/corporate.

### Typographie
- **Unique famille** : **Inter** (400, 500, 600, 700, 800). Importée depuis Google Fonts dans `colors_and_type.css`.
- Tailwind par défaut côté code (font-sans). Inter est un choix sûr aligné avec le ton « sans-serif moderne neutre » demandé.
- Hiérarchie serrée : `h1 36px bold`, `h2 24px semi`, `h3 20px semi`, body `14–16px 400`.
- Letter-spacing négatif sur les grands titres (−0.015 à −0.02em). Leading `1.625` sur le body pour une lecture confortable.

### Espacements & layout
- Base **4px** (tokens `space-1…16`, Tailwind-aligned).
- Container centré, `max-w-7xl` ou `max-w-4xl` selon la densité. Padding horizontal `px-4` mobile → `px-6` desktop.
- Les écrans ont tous **une navbar fixe top** (`h-16`, z-50) + contenu avec `pt-16`.
- Gouttières de grille : `gap-4` (16) pour les cartes denses, `gap-6` (24) pour les grilles de module.

### Arrière-plans
- **Pas d'images full-bleed**. Pas d'illustrations décoratives. Pas de patterns répétés.
- Fonds de sections : `slate-50` → `slate-100`, parfois en léger gradient vertical `from-slate-50 to-slate-100`.
- Navbar : `#0f172a` pur, `backdrop-filter: blur(8px)`, border-bottom 1px `rgba(255,255,255,0.05)`.
- Mode focus : overlay `backdrop-blur-sm bg-black/10` (source `Introduction.vue`).
- **Aucune texture, grain, ou bruit.** Le produit est plat et sobre.

### Cartes
- Fond `bg-white` (ou `slate-50` pour cartes secondaires dans une section blanche — inversion volontaire).
- Border `1px solid slate-200`.
- Radius `0.5rem` (shadcn default) — parfois `0.75rem` sur les grandes cartes module.
- Shadow : `shadow-sm` au repos, **`shadow-md` au hover**, transition `300ms ease`.
- Header de carte : `border-b`, fond `slate-100` très léger, padding `p-4` à `p-6`.

### Hover states
- **Cartes** : `shadow` → `shadow-md`, transition `all 0.3s`. Pas de translate ; parfois `-2px` très discret dans `Home.vue`.
- **Boutons ghost** : `hover:bg-accent` (`slate-100`) + `text-accent-foreground`.
- **Boutons primary** : `hover:bg-primary/90` (assombrissement 10%).
- **Liens** : `text-blue-600 → text-blue-700`, avec `ChevronRightIcon` à droite qui reste statique.
- **Logo et éléments spéciaux** : très subtile mise à l'échelle `scale-105` sur la navbar uniquement.

### Press / active states
- Opacité 0.9 ou `/90` sur les boutons primary.
- Pas de shrink (pas de `scale-95`) — le ton reste corporate.

### Focus states
- `focus-visible:ring-2 ring-ring ring-offset-2` — anneau 2px bleu avec offset blanc (pattern shadcn natif).
- Outline retirée au profit du ring.

### Bordures
- Toujours **1px**, couleur `slate-200` (mode clair) / `slate-700` (mode sombre si activé).
- Pas de bordures épaisses. Pas de bordure colorée à gauche seule (anti-pattern AI slop explicitement évité).

### Ombres
- 4 niveaux hiérarchiques : `sm`, `DEFAULT`, `md`, `lg`.
- Ombres douces, noires à 5–8% opacité. **Aucune ombre colorée.**
- Pas d'`inset shadow` en surface ; utilisé uniquement sur les champs focus (ring via box-shadow).

### Transparence & blur
- `backdrop-blur-sm` uniquement sur : navbar, overlays modaux, mode focus.
- Fonds à opacité : `bg-white/50`, `bg-slate-800/50` pour sections secondaires dans des blocs denses.
- Pas d'effet glassmorphism marqué ailleurs.

### Radius
- Convention shadcn : `--radius: 0.5rem`.
- `rounded-sm 4px`, `rounded-md 6px`, `rounded-lg 8px`, `rounded-xl 12px`, `rounded-full` (badges, avatars, puces de numérotation).
- Numérotation de module : cercle 40–48px, fond `blue-100` ou `blue-600` plein, chiffre au centre. Pattern récurrent dans `Home.vue` et `Introduction.vue`.

### Animations
- Easing : `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out expo, source `Introduction.vue`) pour les transitions de mode.
- Durée standard : `200ms` (`duration-200`, classe `transition-colors` partout).
- Transitions lentes (`300ms`) sur la navbar et les cartes.
- `fadeInUp` sur cartes au mount (`translateY(20px) → 0`, opacity 0 → 1, 500ms), délai staggered `0.1s` entre cartes.
- `accordion-down/up` et `collapsible-down/up` via `tailwindcss-animate` (200ms ease-out).
- `animate-pulse` sur éléments attention (points de tokens, nodes de réseau).
- **Pas de bounces, pas de spring.** Le registre reste pédagogique et calme.

### Éléments fixes
- Navbar `fixed top-0 z-50 h-16`.
- Boutons de navigation (prev/next de module) parfois sticky bottom.
- Tooltips chart.js positionnés en absolute au-dessus des points.

### Imagery
- **Aucune imagerie photographique** dans le produit existant.
- Quand une illustration est nécessaire, on utilise des **visualisations fonctionnelles SVG** dessinées en JS (arbres de décision, réseaux, entonnoirs avec paths dynamiques). Couleurs neutres slate + accent blue.
- Si à terme il faut des photos : recommandation → B&W ou désaturées, contextes bureau/formation, pas de stock coloré type « business happy people ».

---

## Iconography

### Bibliothèques
- **Lucide** (`lucide-vue-next`) — icônes principales, trait 2px, 16–24px.
- **Heroicons** (`@heroicons/vue/24/outline`) — utilisé marginalement pour quelques icônes (ex. `Bars3Icon`). À terme à consolider sur Lucide seul.

### Usage
- Toutes les icônes sont **outline** (trait fin). Jamais de version filled ou duotone.
- Taille standard en boutons : `w-5 h-5` (20px) avec `mr-2`. En listes de puces : `w-4 h-4`.
- Couleur = couleur du texte du conteneur (`currentColor`). Seules les icônes de statut prennent des couleurs sémantiques (`text-green-500` pour check, `text-yellow-500` pour lightbulb, etc).
- Icônes récurrentes du produit : `BookOpen`, `MessageCircleQuestion`, `ChevronRight`, `CheckCircle`, `ArrowUp`, `Lightbulb`, `Check`, `Plus-Circle`, `MessageSquare`, `Database`, `GitBranch`, `Bars3` (menu mobile).

### Dans ce design system
- Pour les cartes de preview et UI kits, on **charge Lucide via CDN** (`https://unpkg.com/lucide@latest`) et on instancie `lucide.createIcons()`. C'est le substitut le plus proche de `lucide-vue-next` et utilise le même registre d'icônes.
- Aucune icône dessinée à la main. Aucun emoji. Jamais.

### Logo Magora
- Fourni en version blanc sur fond sombre : `assets/magora-logo-white.svg` (ratio ~6:1, hauteur standard 24px dans la navbar).
- Le produit y accole un **badge dégradé 32×32** avec les lettres **"AI"** (font-bold, blanc, fond `from-blue-500 to-indigo-600`, rounded-lg). C'est ce badge qui porte l'identité « IA Formation » dans la navbar.

---

## Font substitution flag

Le codebase n'embarque pas de fichier de police — il repose sur `font-sans` Tailwind (stack système) par défaut. **Choix retenu : Inter**, chargée depuis Google Fonts. Si Magora ou le commanditaire a une police d'entreprise (ex. un grotesque propriétaire), merci de la fournir et je remplacerai Inter dans `colors_and_type.css`.
