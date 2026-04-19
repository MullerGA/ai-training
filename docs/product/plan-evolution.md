# Plan d'Ã©volution AI Training

Date : 2026-04-19
Statut : Lot 7 livre et valide (2026-04-19)

## 1. Objectif

Passer d'un POC hÃ©tÃ©rogÃ¨ne Ã  une base produit propre et cohÃ©rente, centrÃ©e sur un parcours d'apprentissage interactif. Chaque module doit mÃªler contenu pÃ©dagogique et composant interactif, dans la lignÃ©e de ce que fait dÃ©jÃ  le Lab.

## 2. Principes directeurs

- **Anonyme** : pas d'authentification, pas de backend.
- **Simple** : une seule structure de contenu (parcours â†’ modules), pas d'architecture spÃ©culative.
- **Interactif** : chaque module doit comporter un bloc interactif JS (manipulations, visualisations, exercices).
- **Contenu maÃ®trisÃ©** : rÃ©daction unique (le propriÃ©taire), donc modÃ¨le de contenu facile Ã  Ã©crire Ã  la main.
- **Solide pour la suite** : on supprime les artefacts POC et on pose des conventions claires.

## 3. Ã‰tat cible â€” parcours utilisateur

```
Landing publique (/)
        â”‚  CTA Â« Commencer Â»
        â–¼
Liste des parcours (/formations)
        â”‚
        â–¼
DÃ©tail d'un parcours (/formations/[parcours])
        â”‚  liste ordonnÃ©e des modules + progression
        â–¼
Module (/formations/[parcours]/[module])
        â”‚  sections : intro â†’ concept â†’ interactif â†’ exercice â†’ rÃ©cap
        â–¼
Progression personnelle (/progression)   â† accessible depuis la navbar
```

AccÃ¨s transverses :
- Annexes (regroupÃ©es dans la navbar sous Â« Annexes Â») :
  - `/prompts` â€” bibliothÃ¨que de prompts rÃ©utilisables.
  - `/lab` â€” entonnoir de dÃ©cision d'un LLM (outil autonome hÃ©ritÃ©).
- `/a-propos`.

Les annexes sont consultables Ã  tout moment, indÃ©pendamment des parcours. Le widget `lab-funnel` est mutualisÃ© entre `/lab` et le module correspondant du parcours Â« Les LLM Â».

## 4. Arborescence cible

### Routes Ã  crÃ©er

- `/` : landing publique (remplace le redirect actuel).
- `/formations` : liste des parcours disponibles.
- `/formations/[parcoursSlug]` : dÃ©tail d'un parcours (modules).
- `/formations/[parcoursSlug]/[moduleSlug]` : Ã©cran module unifiÃ©.
- `/progression` : rÃ©cap personnel (depuis localStorage).

### Routes Ã  conserver

- `/lab` : Lab autonome (le plus abouti aujourd'hui).
- `/a-propos` : tel quel, seul le contenu peut Ãªtre revu.

### Routes / dossiers Ã  supprimer

- `/learner/dashboard` : fusionnÃ© dans landing + progression.
- `/learner/catalogue` : remplacÃ© par `/formations`.
- `/learner/parcours` : remplacÃ© par `/formations/[parcoursSlug]`.
- `/learner/lecon` : absorbÃ© dans la page module.
- `/learner/exercice` : absorbÃ© dans la page module.
- `/learner/diagrammes` : la galerie SVG actuelle est Ã  refaire, l'Ã©cran vitrine autonome disparaÃ®t (les schÃ©mas Ã©ventuellement retenus seront utilisÃ©s en illustration dans les modules).
- Dossiers vides Ã  supprimer : `app/learner/accueil/`, `app/learner/chapitres/`, `components/learner/vitrine/`, `lib/learner/vitrine/`.

### Convention de nommage

- On quitte le prÃ©fixe `/learner/*` (sans objet puisque tout est public) au profit de routes plates en franÃ§ais.
- Tous les slugs sont en minuscules, sans accents, sÃ©parÃ©s par des tirets.

## 5. Catalogue cible

### Parcours 1 â€” Le monde de l'IA (~30 min)
Vision macro avant toute plongÃ©e technique.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Ã‰volution & maturitÃ© de l'IA | `timeline` + `hype-cycle` (combinÃ©s dans le mÃªme module) |
| 2 | L'iceberg software / hardware | `iceberg-explorer` (SVG cliquable, couches : Applications â†’ AI Deployment â†’ AI Training â†’ Data Center â†’ Ã‰nergie) |
| 3 | Les acteurs du marchÃ© | galerie filtrable (pure players / GAFAM / chinois / old-tech) |

### Parcours 2 â€” Les LLM (~45 min)
Ce qui se passe Ã  l'intÃ©rieur.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Du texte aux tokens | `tokenizer-demo` |
| 2 | ProbabilitÃ©s et gÃ©nÃ©ration | `lab-funnel` (temperature seule) |
| 3 | L'entonnoir complet | `lab-funnel` (temperature + top-k + top-p) |
| 4 | MÃ©moire et fenÃªtre de contexte | `context-window` |
| 5 | Limites et hallucinations | `hallucination-spotter` |

### Parcours 3 â€” Anatomie d'un prompt (~45 min)
Transformer la thÃ©orie en savoir-faire.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Les 4 ingrÃ©dients (rÃ´le, contexte, tÃ¢che, format) | `prompt-builder` |
| 2 | ItÃ©rer un prompt | `prompt-compare` |
| 3 | Templates rÃ©utilisables | rÃ©utilise `prompt-templates` depuis les annexes |
| 4 | Atelier final | rÃ©daction libre + grille d'auto-Ã©valuation |

### Parcours 4 â€” Les outils avancÃ©s (~50 min)
L'Ã©cosystÃ¨me autour d'un LLM.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Tool calling / function calling | `tool-call-simulator` |
| 2 | RAG (Retrieval-Augmented Generation) | `rag-flow` |
| 3 | MCP (Model Context Protocol) | `mcp-diagram` |
| 4 | Agents | `agent-loop` |

### Annexes (hors parcours)

Accessibles Ã  tout moment depuis la navbar :

- `/prompts` â€” bibliothÃ¨que de prompts rÃ©utilisables (base : `learnerPromptTemplates` existants, extensible).
- `/lab` â€” entonnoir de dÃ©cision d'un LLM, outil autonome. Le widget `lab-funnel` est le mÃªme que celui embarquÃ© dans le parcours 2.

## 6. ModÃ¨le de contenu

Contenu Ã©crit Ã  la main, cÃ´tÃ© repo, en TypeScript fortement typÃ© (pas de CMS, pas de MDX dans un premier temps).

### Contrats

```ts
// lib/content/types.ts
export type Parcours = {
  slug: string;
  title: string;
  tagline: string;        // une phrase d'accroche
  description: string;    // 2-3 phrases
  level: "DÃ©butant" | "IntermÃ©diaire" | "AvancÃ©";
  estimatedMinutes: number;
  modules: Module[];
};

export type Module = {
  slug: string;           // unique dans le parcours
  index: number;
  title: string;
  summary: string;        // 1-2 phrases
  estimatedMinutes: number;
  sections: ModuleSection[];
};

export type ModuleSection =
  | { kind: "intro"; title?: string; body: string }
  | { kind: "concept"; title: string; body: string; keyPoints?: string[] }
  | { kind: "interactive"; widget: InteractiveWidget }
  | { kind: "exercise"; prompt: string; hints?: string[]; sampleAnswer?: string }
  | { kind: "recap"; title: string; takeaways: string[] };

export type InteractiveWidget =
  | { type: "lab-funnel"; scenarioId: string }
  | { type: "prompt-compare"; /* Ã  dÃ©finir par module */ }
  | { type: "tokenizer-demo"; text: string };
```

### Organisation fichiers

- `lib/content/parcours/[slug].ts` : un fichier par parcours, exporte un objet `Parcours`.
- `lib/content/index.ts` : agrÃ¨ge tous les parcours, expose `getParcours`, `getModule` (recherche par slug).
- `lib/content/widgets/` : composants interactifs embarquables, dont le Lab.

### DonnÃ©es initiales

- DÃ©marrer avec **un seul parcours** (Â« Fondamentaux de l'IA gÃ©nÃ©rative Â») pour poser la structure.
- 3 Ã  4 modules gÃ©nÃ©riques rÃ©digÃ©s par le propriÃ©taire.
- Chaque module propose au minimum : intro â†’ concept â†’ interactif â†’ exercice â†’ rÃ©cap.

## 7. Persistance locale

Simple, uniquement :

```ts
// lib/storage/learner-state.ts
type LearnerState = {
  completedModules: string[];                       // `${parcoursSlug}/${moduleSlug}`
  moduleProgress: Record<string, number>;            // 0..100, mÃªme clÃ©
  lastVisited?: { parcours: string; module: string };
};
```

- ClÃ© localStorage unique : `ai-training:state:v1`.
- Lecture/Ã©criture via un petit hook `useLearnerState()` (client component).
- Valeur par dÃ©faut si vide ou JSON invalide.
- Pas d'historique, pas de date, pas de streak, pas de minutes â€” on retire ces KPI factices.

## 8. UI â€” composants et design

### Nettoyage

- Corriger tout le **mojibake** (accents cassÃ©s) dans [catalogue-screen.tsx](components/learner/screens/catalogue-screen.tsx) et partout oÃ¹ il apparaÃ®t. Forcer encodage UTF-8 dans tous les nouveaux fichiers.
- Supprimer le persona hardcodÃ© Â« Claire Â» ; remplacer par un ton neutre (tutoiement gÃ©nÃ©rique ou 2e personne impersonnelle).
- Retirer les KPI inventÃ©s (modules validÃ©s, sÃ©rie, heures cumulÃ©es) sauf ceux calculables depuis le state rÃ©el (nombre de modules complÃ©tÃ©s, % global).

### Dashboard â†’ Progression simplifiÃ©e

- Plus de Â« dashboard Â» lourd, remplacÃ© par :
  - page d'accueil publique (vitrine),
  - page `/progression` minimale (un compteur modules complÃ©tÃ©s, une barre globale, la liste des modules avec statut).

### Diagrammes

- La galerie autonome `/learner/diagrammes` est supprimÃ©e.
- Le systÃ¨me SVG data-driven existant (`components/diagram/*`, `lib/diagram/*`) est **refondu** : il doit servir de socle aux widgets visuels clÃ©s (`iceberg-explorer`, `timeline`, `hype-cycle`, `rag-flow`, `mcp-diagram`, `agent-loop`). Le visuel doit Ãªtre soignÃ© (inspiration iceberg et hype cycle fournis par le propriÃ©taire), responsive et accessible.
- Les specs actuelles sont archivÃ©es ou rÃ©Ã©crites au cas par cas selon les besoins des widgets.

### Design system

- Garder shadcn/ui, Tailwind 4, les tokens actuels (`app/globals.css`) â€” ils sont propres.
- Garder les primitives existantes dans `components/ui/*`.
- Factoriser une fois pour toutes les classes mÃ©tier utilisÃ©es (`page-title`, `page-lead`, `panel-card`, `text-caption`).

## 9. Lots de livraison

### Lot 0 â€” Nettoyage (fondations) âœ… livrÃ© et validÃ©

Objectif : base propre avant d'ajouter quoi que ce soit.

- âœ… Routes supprimÃ©es : `/learner/dashboard`, `/learner/catalogue`, `/learner/parcours`, `/learner/lecon`, `/learner/exercice`, `/learner/diagrammes` â€” ainsi que tout `app/learner/`.
- âœ… Routes migrÃ©es : `/learner/lab` â†’ `/lab`, `/learner/a-propos` â†’ `/a-propos`, `/learner/progression` â†’ `/progression`.
- âœ… Screens supprimÃ©s : `dashboard-screen`, `catalogue-screen`, `parcours-screen`, `lecon-screen`, `exercice-screen`, `diagram-catalog-screen`.
- âœ… Composants orphelins supprimÃ©s : `kpi-card`, `module-card`, `hint-card`, `progress-block`, `lesson-player`, `learner-sidebar`.
- âœ… RÃ©fÃ©rence Â« Claire Â» supprimÃ©e (avec `dashboard-screen`). KPI factices retirÃ©s de `progression-screen`.
- âœ… Encodages cassÃ©s (mojibake) disparus avec la suppression de `catalogue-screen`.
- âœ… `lib/learner/data.ts` rÃ©duit aux seules donnÃ©es encore utiles (`learnerLabScenarios`, `learnerTimeline`, `learnerPromptTemplates`).
- âœ… `lib/learner/types.ts` rÃ©duit aux types encore rÃ©fÃ©rencÃ©s.
- âœ… Navbar dÃ©placÃ©e dans le layout racine (`app/layout.tsx`) ; liens mis Ã  jour (Lab Â· Progression Â· Ã€ propos).
- âœ… `docs/product/routes-and-flows.md`, `architecture.md`, `content-model.md` mis Ã  jour.
- âœ… **CritÃ¨re d'acceptation** : `npm run build` âœ… Â· `npm run lint` âœ… Â· aucune route orpheline.

### Lot 1 â€” ModÃ¨le de contenu + persistance âœ… livrÃ© et validÃ©

- âœ… `lib/content/types.ts` : types `Parcours`, `Module`, `ModuleSection`, `InteractiveWidget` (union exhaustive des 14 widgets du catalogue).
- âœ… `lib/content/parcours/le-monde-de-l-ia.ts` : squelette Parcours 1, 3 modules (Ã‰volution & maturitÃ© / Iceberg / Acteurs), structure intro â†’ concept â†’ interactif â†’ exercice â†’ rÃ©cap, placeholders `TODO: [propriÃ©taire]`.
- âœ… `lib/content/index.ts` : `allParcours`, `getParcours(slug)`, `getModule(parcoursSlug, moduleSlug)`.
- âœ… `lib/storage/learner-state.ts` : type `LearnerState`, clÃ© `ai-training:state:v1`, `useLearnerState()` hook, helpers `markModuleComplete`, `setModuleProgress`, `setLastVisited`, `getParcoursProgress`.
- âœ… **CritÃ¨re d'acceptation** : types exportÃ©s, squelette du parcours 1 consommable, Ã©tat persistant entre reloads.

### Lot 2 â€” Landing publique + navigation âœ… livrÃ© et validÃ©

- âœ… `app/page.tsx` : landing publique (hero, 3 promesses, aperÃ§u parcours depuis `allParcours`, footer).
- âœ… `app/formations/page.tsx` : placeholder `/formations` (grille des parcours, sera enrichi Lot 3).
- âœ… Navbar refondre : logo â†’ `/`, liens Formations Â· Annexes (dropdown `/prompts` + `/lab`) Â· Progression Â· Ã€ propos.
- âœ… `components/learner/annexes-menu.tsx` : dropdown Client Component avec fermeture au clic extÃ©rieur.
- âœ… Layout racine : une seule navbar, pas de sidebar globale.
- âœ… **CritÃ¨re d'acceptation** : `npm run build` âœ… Â· `npm run lint` âœ… Â· navigation `/` â†’ `/formations` fonctionnelle.

### Lot 3 â€” Listing et dÃ©tail parcours âœ… livrÃ© et validÃ©

- âœ… `app/formations/page.tsx` : grille depuis `allParcours` + progression injectÃ©e via `ParcoursGrid` (Client Component).
- âœ… `components/formations/parcours-grid.tsx` : barre de progression thin + compteur modules si dÃ©jÃ  commencÃ©.
- âœ… `app/formations/[parcoursSlug]/page.tsx` : async params, `notFound()` si slug inconnu, dÃ©lÃ¨gue Ã  `ParcoursDetail`.
- âœ… `components/formations/parcours-detail.tsx` : header (titre, niveau, durÃ©e), barre progression gradient, CTA Commencer/Reprendre/Revoir, liste modules avec icÃ´nes statut (Circle / PlayCircle / CheckCircle2) et badges.
- âœ… `app/formations/[parcoursSlug]/[moduleSlug]/page.tsx` : placeholder fonctionnel (breadcrumb complet, lien retour).
- Verrouillage sÃ©quentiel : non activÃ© (accÃ¨s libre), prÃ©vu optionnellement plus tard.
- âœ… **CritÃ¨re d'acceptation** : `npm run build` âœ… Â· `npm run lint` âœ… Â· navigation landing â†’ formations â†’ parcours â†’ module fonctionnelle.

### Lot 4 — Écran module unifié ✅ livré (en attente de validation)

- ✅ Route `/formations/[parcoursSlug]/[moduleSlug]`, rendu basé sur l'array `sections`.
- ✅ Composants de rendu dans `components/module/` :
  - `SectionIntro`, `SectionConcept`, `SectionInteractive`, `SectionExercise`, `SectionRecap`.
- ✅ Barre de progression du module calculée sur la position de scroll / sections visitées (simple : dernière section atteinte).
- ✅ Bouton final « Marquer comme terminé » → appelle `markModuleComplete` et propose le module suivant.
- ✅ Sidebar contextuelle droite : plan des sections du module + modules voisins.
- ✅ **Critère d'acceptation** : un module fictif complet est traversable de bout en bout, état persisté (`npm run build` ✅ · `npm run lint` ✅).

### Lot 5 â€” Widgets interactifs (batch parcours 1)

- Poser l'interface d'enregistrement : un widget = un composant React + une entrÃ©e dans un registre typÃ© (`components/module/widgets/registry.ts`).
- Extraire le Lab existant vers `components/module/widgets/lab-funnel/` et l'exposer comme widget `lab-funnel`. L'Ã©cran `/lab` devient un simple wrapper rÃ©utilisant ce widget (la bibliothÃ¨que `/prompts` fait de mÃªme pour les templates).
- Livrer les **widgets nÃ©cessaires au parcours 1** :
  - `iceberg-explorer` : SVG cliquable des couches Applications / AI Deployment / AI Training / Data Center / Ã‰nergie, chaque couche rÃ©vÃ¨le des exemples (acteurs, puces, datacenters, Ã©nergie).
  - `timeline` : frise horizontale des innovations IA (reprend `learnerTimeline`, Ã  rafraÃ®chir), points cliquables.
  - `hype-cycle` : courbe Gartner stylisÃ©e avec points (AGI, Agentic-AI, Gen-AI, IA classique), chaque point rÃ©vÃ¨le une explication.
- **CritÃ¨re d'acceptation** : les 4 widgets (`lab-funnel`, `iceberg-explorer`, `timeline`, `hype-cycle`) sont consommables dans une section `interactive` depuis le contenu, et le parcours 1 est traversable bout en bout.

### Lot 6 â€” Annexes âœ… livrÃ© (en attente de validation)

- `/prompts` : bibliothÃ¨que de prompts basÃ©e sur `learnerPromptTemplates` actuels, avec filtre par catÃ©gorie / complexitÃ© / tags, bouton Â« copier Â». Le contenu sera Ã©tendu au fil de l'eau.
- `/lab` : wrapper autour du widget `lab-funnel` (dÃ©jÃ  livrÃ© en Lot 5), page dÃ©diÃ©e avec contexte explicatif plus large que dans le module.
- **CritÃ¨re d'acceptation** : les deux annexes sont accessibles depuis la navbar, fonctionnelles hors parcours.

### Lot 7 - Progression personnelle ✅ livre et valide
- Page `/progression` simple :
  - compteur Â« X / Y modules terminÃ©s Â»,
  - barre de progression globale,
  - liste des modules avec statut et lien,
  - bouton Â« RÃ©initialiser ma progression Â» (avec confirmation) effaÃ§ant `ai-training:state:v1`.
- **CritÃ¨re d'acceptation** : synchronisÃ© avec ce que l'utilisateur a fait en Lot 4.

### Lot 8 â€” Extension catalogue (parcours 2 â†’ 4)

Chaque parcours est un incrÃ©ment indÃ©pendant livrable, dans cet ordre :

- **Parcours 2 â€” Les LLM** : widgets `tokenizer-demo`, `lab-funnel` (dÃ©jÃ  livrÃ©), `context-window`, `hallucination-spotter`.
- **Parcours 3 â€” Anatomie d'un prompt** : widgets `prompt-builder`, `prompt-compare`. RÃ©utilise la bibliothÃ¨que `/prompts` pour le module 3.
- **Parcours 4 â€” Les outils avancÃ©s** : widgets `tool-call-simulator`, `rag-flow`, `mcp-diagram`, `agent-loop`.

Pour chaque parcours : crÃ©ation du fichier `lib/content/parcours/[slug].ts` squelette, livraison des widgets dÃ©diÃ©s, rÃ©daction du contenu par le propriÃ©taire.

### Lot 9 â€” SEO et finition

- MÃ©tadonnÃ©es par route via `export const metadata` :
  - `/` : titre, description, OG image (placeholder OK).
  - `/formations` et `/formations/[slug]` : `generateMetadata` Ã  partir du contenu.
  - `/lab`, `/a-propos` : titres dÃ©diÃ©s.
- `app/sitemap.ts` : routes statiques + parcours/modules.
- `app/robots.ts` : allow all.
- Balises sÃ©mantiques (`<main>`, `<article>`, `<nav>`) et `aria-label` cohÃ©rents.
- `lang="fr"` (dÃ©jÃ  prÃ©sent), vÃ©rifier contraste et focus visibles sur tous les boutons/links.
- Favicon + wordmark propres.
- **CritÃ¨re d'acceptation** : audit Lighthouse SEO â‰¥ 95, accessibilitÃ© â‰¥ 90.

## 10. Hors scope (Ã  noter pour plus tard)

- Authentification, multi-device sync, backend.
- CMS ou MDX.
- Appel Ã  une API LLM rÃ©elle (tout reste dÃ©terministe cÃ´tÃ© client).
- i18n (FR uniquement).
- Mode sombre.
- Partage d'Ã©tat via URL.
- Tests automatisÃ©s (Vitest/Playwright) : non demandÃ©s, Ã  rediscuter si le projet se stabilise.

## 11. Ordre d'exÃ©cution recommandÃ©

Lot 0 â†’ Lot 1 â†’ Lot 2 â†’ Lot 3 â†’ Lot 4 â†’ Lot 5 â†’ Lot 6 â†’ Lot 7 â†’ Lot 8 â†’ Lot 9.

- Lots 0 Ã  5 : socle + parcours 1 bout en bout (cÅ“ur indispensable).
- Lot 6 : annexes accessibles.
- Lot 7 : progression personnelle visible.
- Lot 8 : extension du catalogue (parcours 2 Ã  4), incrÃ©mentale.
- Lot 9 : SEO et finition, une fois le contenu stabilisÃ©.

## 12. Livrables par lot

Pour chaque lot, le dÃ©veloppeur produit :

- les modifications de code (routes, composants, types),
- la mise Ã  jour des documents impactÃ©s dans `docs/product/`,
- une note courte dans le message de PR listant ce qui est fait et ce qui ne l'est pas.
