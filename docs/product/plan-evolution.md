# Plan d'évolution AI Training

Date : 2026-04-18
Statut : Lot 1 livré et validé (2026-04-18)

## 1. Objectif

Passer d'un POC hétérogène à une base produit propre et cohérente, centrée sur un parcours d'apprentissage interactif. Chaque module doit mêler contenu pédagogique et composant interactif, dans la lignée de ce que fait déjà le Lab.

## 2. Principes directeurs

- **Anonyme** : pas d'authentification, pas de backend.
- **Simple** : une seule structure de contenu (parcours → modules), pas d'architecture spéculative.
- **Interactif** : chaque module doit comporter un bloc interactif JS (manipulations, visualisations, exercices).
- **Contenu maîtrisé** : rédaction unique (le propriétaire), donc modèle de contenu facile à écrire à la main.
- **Solide pour la suite** : on supprime les artefacts POC et on pose des conventions claires.

## 3. État cible — parcours utilisateur

```
Landing publique (/)
        │  CTA « Commencer »
        ▼
Liste des parcours (/formations)
        │
        ▼
Détail d'un parcours (/formations/[parcours])
        │  liste ordonnée des modules + progression
        ▼
Module (/formations/[parcours]/[module])
        │  sections : intro → concept → interactif → exercice → récap
        ▼
Progression personnelle (/progression)   ← accessible depuis la navbar
```

Accès transverses :
- Annexes (regroupées dans la navbar sous « Annexes ») :
  - `/prompts` — bibliothèque de prompts réutilisables.
  - `/lab` — entonnoir de décision d'un LLM (outil autonome hérité).
- `/a-propos`.

Les annexes sont consultables à tout moment, indépendamment des parcours. Le widget `lab-funnel` est mutualisé entre `/lab` et le module correspondant du parcours « Les LLM ».

## 4. Arborescence cible

### Routes à créer

- `/` : landing publique (remplace le redirect actuel).
- `/formations` : liste des parcours disponibles.
- `/formations/[parcoursSlug]` : détail d'un parcours (modules).
- `/formations/[parcoursSlug]/[moduleSlug]` : écran module unifié.
- `/progression` : récap personnel (depuis localStorage).

### Routes à conserver

- `/lab` : Lab autonome (le plus abouti aujourd'hui).
- `/a-propos` : tel quel, seul le contenu peut être revu.

### Routes / dossiers à supprimer

- `/learner/dashboard` : fusionné dans landing + progression.
- `/learner/catalogue` : remplacé par `/formations`.
- `/learner/parcours` : remplacé par `/formations/[parcoursSlug]`.
- `/learner/lecon` : absorbé dans la page module.
- `/learner/exercice` : absorbé dans la page module.
- `/learner/diagrammes` : la galerie SVG actuelle est à refaire, l'écran vitrine autonome disparaît (les schémas éventuellement retenus seront utilisés en illustration dans les modules).
- Dossiers vides à supprimer : `app/learner/accueil/`, `app/learner/chapitres/`, `components/learner/vitrine/`, `lib/learner/vitrine/`.

### Convention de nommage

- On quitte le préfixe `/learner/*` (sans objet puisque tout est public) au profit de routes plates en français.
- Tous les slugs sont en minuscules, sans accents, séparés par des tirets.

## 5. Catalogue cible

### Parcours 1 — Le monde de l'IA (~30 min)
Vision macro avant toute plongée technique.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Évolution & maturité de l'IA | `timeline` + `hype-cycle` (combinés dans le même module) |
| 2 | L'iceberg software / hardware | `iceberg-explorer` (SVG cliquable, couches : Applications → AI Deployment → AI Training → Data Center → Énergie) |
| 3 | Les acteurs du marché | galerie filtrable (pure players / GAFAM / chinois / old-tech) |

### Parcours 2 — Les LLM (~45 min)
Ce qui se passe à l'intérieur.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Du texte aux tokens | `tokenizer-demo` |
| 2 | Probabilités et génération | `lab-funnel` (temperature seule) |
| 3 | L'entonnoir complet | `lab-funnel` (temperature + top-k + top-p) |
| 4 | Mémoire et fenêtre de contexte | `context-window` |
| 5 | Limites et hallucinations | `hallucination-spotter` |

### Parcours 3 — Anatomie d'un prompt (~45 min)
Transformer la théorie en savoir-faire.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Les 4 ingrédients (rôle, contexte, tâche, format) | `prompt-builder` |
| 2 | Itérer un prompt | `prompt-compare` |
| 3 | Templates réutilisables | réutilise `prompt-templates` depuis les annexes |
| 4 | Atelier final | rédaction libre + grille d'auto-évaluation |

### Parcours 4 — Les outils avancés (~50 min)
L'écosystème autour d'un LLM.

| # | Module | Widgets interactifs |
|---|---|---|
| 1 | Tool calling / function calling | `tool-call-simulator` |
| 2 | RAG (Retrieval-Augmented Generation) | `rag-flow` |
| 3 | MCP (Model Context Protocol) | `mcp-diagram` |
| 4 | Agents | `agent-loop` |

### Annexes (hors parcours)

Accessibles à tout moment depuis la navbar :

- `/prompts` — bibliothèque de prompts réutilisables (base : `learnerPromptTemplates` existants, extensible).
- `/lab` — entonnoir de décision d'un LLM, outil autonome. Le widget `lab-funnel` est le même que celui embarqué dans le parcours 2.

## 6. Modèle de contenu

Contenu écrit à la main, côté repo, en TypeScript fortement typé (pas de CMS, pas de MDX dans un premier temps).

### Contrats

```ts
// lib/content/types.ts
export type Parcours = {
  slug: string;
  title: string;
  tagline: string;        // une phrase d'accroche
  description: string;    // 2-3 phrases
  level: "Débutant" | "Intermédiaire" | "Avancé";
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
  | { type: "prompt-compare"; /* à définir par module */ }
  | { type: "tokenizer-demo"; text: string };
```

### Organisation fichiers

- `lib/content/parcours/[slug].ts` : un fichier par parcours, exporte un objet `Parcours`.
- `lib/content/index.ts` : agrège tous les parcours, expose `getParcours`, `getModule` (recherche par slug).
- `lib/content/widgets/` : composants interactifs embarquables, dont le Lab.

### Données initiales

- Démarrer avec **un seul parcours** (« Fondamentaux de l'IA générative ») pour poser la structure.
- 3 à 4 modules génériques rédigés par le propriétaire.
- Chaque module propose au minimum : intro → concept → interactif → exercice → récap.

## 7. Persistance locale

Simple, uniquement :

```ts
// lib/storage/learner-state.ts
type LearnerState = {
  completedModules: string[];                       // `${parcoursSlug}/${moduleSlug}`
  moduleProgress: Record<string, number>;            // 0..100, même clé
  lastVisited?: { parcours: string; module: string };
};
```

- Clé localStorage unique : `ai-training:state:v1`.
- Lecture/écriture via un petit hook `useLearnerState()` (client component).
- Valeur par défaut si vide ou JSON invalide.
- Pas d'historique, pas de date, pas de streak, pas de minutes — on retire ces KPI factices.

## 8. UI — composants et design

### Nettoyage

- Corriger tout le **mojibake** (accents cassés) dans [catalogue-screen.tsx](components/learner/screens/catalogue-screen.tsx) et partout où il apparaît. Forcer encodage UTF-8 dans tous les nouveaux fichiers.
- Supprimer le persona hardcodé « Claire » ; remplacer par un ton neutre (tutoiement générique ou 2e personne impersonnelle).
- Retirer les KPI inventés (modules validés, série, heures cumulées) sauf ceux calculables depuis le state réel (nombre de modules complétés, % global).

### Dashboard → Progression simplifiée

- Plus de « dashboard » lourd, remplacé par :
  - page d'accueil publique (vitrine),
  - page `/progression` minimale (un compteur modules complétés, une barre globale, la liste des modules avec statut).

### Diagrammes

- La galerie autonome `/learner/diagrammes` est supprimée.
- Le système SVG data-driven existant (`components/diagram/*`, `lib/diagram/*`) est **refondu** : il doit servir de socle aux widgets visuels clés (`iceberg-explorer`, `timeline`, `hype-cycle`, `rag-flow`, `mcp-diagram`, `agent-loop`). Le visuel doit être soigné (inspiration iceberg et hype cycle fournis par le propriétaire), responsive et accessible.
- Les specs actuelles sont archivées ou réécrites au cas par cas selon les besoins des widgets.

### Design system

- Garder shadcn/ui, Tailwind 4, les tokens actuels (`app/globals.css`) — ils sont propres.
- Garder les primitives existantes dans `components/ui/*`.
- Factoriser une fois pour toutes les classes métier utilisées (`page-title`, `page-lead`, `panel-card`, `text-caption`).

## 9. Lots de livraison

### Lot 0 — Nettoyage (fondations) ✅ livré et validé

Objectif : base propre avant d'ajouter quoi que ce soit.

- ✅ Routes supprimées : `/learner/dashboard`, `/learner/catalogue`, `/learner/parcours`, `/learner/lecon`, `/learner/exercice`, `/learner/diagrammes` — ainsi que tout `app/learner/`.
- ✅ Routes migrées : `/learner/lab` → `/lab`, `/learner/a-propos` → `/a-propos`, `/learner/progression` → `/progression`.
- ✅ Screens supprimés : `dashboard-screen`, `catalogue-screen`, `parcours-screen`, `lecon-screen`, `exercice-screen`, `diagram-catalog-screen`.
- ✅ Composants orphelins supprimés : `kpi-card`, `module-card`, `hint-card`, `progress-block`, `lesson-player`, `learner-sidebar`.
- ✅ Référence « Claire » supprimée (avec `dashboard-screen`). KPI factices retirés de `progression-screen`.
- ✅ Encodages cassés (mojibake) disparus avec la suppression de `catalogue-screen`.
- ✅ `lib/learner/data.ts` réduit aux seules données encore utiles (`learnerLabScenarios`, `learnerTimeline`, `learnerPromptTemplates`).
- ✅ `lib/learner/types.ts` réduit aux types encore référencés.
- ✅ Navbar déplacée dans le layout racine (`app/layout.tsx`) ; liens mis à jour (Lab · Progression · À propos).
- ✅ `docs/product/routes-and-flows.md`, `architecture.md`, `content-model.md` mis à jour.
- ✅ **Critère d'acceptation** : `npm run build` ✅ · `npm run lint` ✅ · aucune route orpheline.

### Lot 1 — Modèle de contenu + persistance ✅ livré et validé

- ✅ `lib/content/types.ts` : types `Parcours`, `Module`, `ModuleSection`, `InteractiveWidget` (union exhaustive des 14 widgets du catalogue).
- ✅ `lib/content/parcours/le-monde-de-l-ia.ts` : squelette Parcours 1, 3 modules (Évolution & maturité / Iceberg / Acteurs), structure intro → concept → interactif → exercice → récap, placeholders `TODO: [propriétaire]`.
- ✅ `lib/content/index.ts` : `allParcours`, `getParcours(slug)`, `getModule(parcoursSlug, moduleSlug)`.
- ✅ `lib/storage/learner-state.ts` : type `LearnerState`, clé `ai-training:state:v1`, `useLearnerState()` hook, helpers `markModuleComplete`, `setModuleProgress`, `setLastVisited`, `getParcoursProgress`.
- ✅ **Critère d'acceptation** : types exportés, squelette du parcours 1 consommable, état persistant entre reloads.

### Lot 2 — Landing publique + navigation

- Remplacer `app/page.tsx` (redirect) par une landing publique :
  - hero (titre, sous-titre, CTA « Commencer »),
  - 3 blocs promesses (courts),
  - bloc aperçu parcours (cards cliquables vers `/formations/[slug]`),
  - footer léger avec lien « À propos ».
- Refondre la navbar/sidebar :
  - navbar : logo → `/`, liens « Formations », « Annexes » (menu avec `/prompts` et `/lab`), « Progression », « À propos ».
  - plus de sidebar persistante sur les pages publiques (sidebar gardée uniquement dans l'écran module, avec le plan des sections du module).
- Layout racine : une seule navbar, pas de sidebar globale.
- **Critère d'acceptation** : on peut aller de `/` à `/formations` sans état résiduel.

### Lot 3 — Listing et détail parcours

- `/formations` : grille de parcours avec progression locale injectée (barre + %).
- `/formations/[parcoursSlug]` : header (titre, durée, niveau), progression du parcours, liste ordonnée de modules avec statut (non commencé / en cours / terminé), CTA « Reprendre ».
- Verrouillage séquentiel optionnel : par défaut **non** (accès libre aux modules), on pourra activer plus tard si besoin.
- **Critère d'acceptation** : navigation complète landing → formations → parcours → module (lien même si module placeholder).

### Lot 4 — Écran module unifié

- Route `/formations/[parcoursSlug]/[moduleSlug]`, rendu basé sur l'array `sections`.
- Composants de rendu dans `components/module/` :
  - `SectionIntro`, `SectionConcept`, `SectionInteractive`, `SectionExercise`, `SectionRecap`.
- Barre de progression du module calculée sur la position de scroll / sections visitées (simple : dernière section atteinte).
- Bouton final « Marquer comme terminé » → appelle `markModuleComplete` et propose le module suivant.
- Sidebar contextuelle droite : plan des sections du module + modules voisins.
- **Critère d'acceptation** : un module fictif complet est traversable de bout en bout, état persisté.

### Lot 5 — Widgets interactifs (batch parcours 1)

- Poser l'interface d'enregistrement : un widget = un composant React + une entrée dans un registre typé (`components/module/widgets/registry.ts`).
- Extraire le Lab existant vers `components/module/widgets/lab-funnel/` et l'exposer comme widget `lab-funnel`. L'écran `/lab` devient un simple wrapper réutilisant ce widget (la bibliothèque `/prompts` fait de même pour les templates).
- Livrer les **widgets nécessaires au parcours 1** :
  - `iceberg-explorer` : SVG cliquable des couches Applications / AI Deployment / AI Training / Data Center / Énergie, chaque couche révèle des exemples (acteurs, puces, datacenters, énergie).
  - `timeline` : frise horizontale des innovations IA (reprend `learnerTimeline`, à rafraîchir), points cliquables.
  - `hype-cycle` : courbe Gartner stylisée avec points (AGI, Agentic-AI, Gen-AI, IA classique), chaque point révèle une explication.
- **Critère d'acceptation** : les 4 widgets (`lab-funnel`, `iceberg-explorer`, `timeline`, `hype-cycle`) sont consommables dans une section `interactive` depuis le contenu, et le parcours 1 est traversable bout en bout.

### Lot 6 — Annexes

- `/prompts` : bibliothèque de prompts basée sur `learnerPromptTemplates` actuels, avec filtre par catégorie / complexité / tags, bouton « copier ». Le contenu sera étendu au fil de l'eau.
- `/lab` : wrapper autour du widget `lab-funnel` (déjà livré en Lot 5), page dédiée avec contexte explicatif plus large que dans le module.
- **Critère d'acceptation** : les deux annexes sont accessibles depuis la navbar, fonctionnelles hors parcours.

### Lot 7 — Progression personnelle

- Page `/progression` simple :
  - compteur « X / Y modules terminés »,
  - barre de progression globale,
  - liste des modules avec statut et lien,
  - bouton « Réinitialiser ma progression » (avec confirmation) effaçant `ai-training:state:v1`.
- **Critère d'acceptation** : synchronisé avec ce que l'utilisateur a fait en Lot 4.

### Lot 8 — Extension catalogue (parcours 2 → 4)

Chaque parcours est un incrément indépendant livrable, dans cet ordre :

- **Parcours 2 — Les LLM** : widgets `tokenizer-demo`, `lab-funnel` (déjà livré), `context-window`, `hallucination-spotter`.
- **Parcours 3 — Anatomie d'un prompt** : widgets `prompt-builder`, `prompt-compare`. Réutilise la bibliothèque `/prompts` pour le module 3.
- **Parcours 4 — Les outils avancés** : widgets `tool-call-simulator`, `rag-flow`, `mcp-diagram`, `agent-loop`.

Pour chaque parcours : création du fichier `lib/content/parcours/[slug].ts` squelette, livraison des widgets dédiés, rédaction du contenu par le propriétaire.

### Lot 9 — SEO et finition

- Métadonnées par route via `export const metadata` :
  - `/` : titre, description, OG image (placeholder OK).
  - `/formations` et `/formations/[slug]` : `generateMetadata` à partir du contenu.
  - `/lab`, `/a-propos` : titres dédiés.
- `app/sitemap.ts` : routes statiques + parcours/modules.
- `app/robots.ts` : allow all.
- Balises sémantiques (`<main>`, `<article>`, `<nav>`) et `aria-label` cohérents.
- `lang="fr"` (déjà présent), vérifier contraste et focus visibles sur tous les boutons/links.
- Favicon + wordmark propres.
- **Critère d'acceptation** : audit Lighthouse SEO ≥ 95, accessibilité ≥ 90.

## 10. Hors scope (à noter pour plus tard)

- Authentification, multi-device sync, backend.
- CMS ou MDX.
- Appel à une API LLM réelle (tout reste déterministe côté client).
- i18n (FR uniquement).
- Mode sombre.
- Partage d'état via URL.
- Tests automatisés (Vitest/Playwright) : non demandés, à rediscuter si le projet se stabilise.

## 11. Ordre d'exécution recommandé

Lot 0 → Lot 1 → Lot 2 → Lot 3 → Lot 4 → Lot 5 → Lot 6 → Lot 7 → Lot 8 → Lot 9.

- Lots 0 à 5 : socle + parcours 1 bout en bout (cœur indispensable).
- Lot 6 : annexes accessibles.
- Lot 7 : progression personnelle visible.
- Lot 8 : extension du catalogue (parcours 2 à 4), incrémentale.
- Lot 9 : SEO et finition, une fois le contenu stabilisé.

## 12. Livrables par lot

Pour chaque lot, le développeur produit :

- les modifications de code (routes, composants, types),
- la mise à jour des documents impactés dans `docs/product/`,
- une note courte dans le message de PR listant ce qui est fait et ce qui ne l'est pas.
