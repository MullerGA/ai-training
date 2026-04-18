# Audit De Reprise `old_src/ai-toolkit` -> Next.js `ai-training`

Date: 18 avril 2026
Contexte: migration conceptuelle Vue/Vite -> Next.js App Router avec données locales.

## Matrice Décisionnelle

| Axe | Réutiliser tel quel | Adapter | Abandonner |
|---|---|---|---|
| Contenu | Objectifs pédagogiques, scénarios d'exemples, templates de prompts, logique de progression des niveaux de prompting | Timeline historique des LLM (normalisation 2026+), formulations hétérogènes et textes avec encodage cassé | Contenu purement placeholder (`About.vue`, `Demos.vue`) |
| Composants UI | Idées de composition (cartes, sections pédagogiques, panneaux d'explication) | Réimplémentation en composants React/Next des vues utiles (`Introduction`, `DataProcessing`, `ContextVisualization`, `LLMVisualization`) | Composants `.vue`, `radix-vue`, structure de présentation dépendante de Vue |
| Logique interactive | Concepts métier: filtration Temperature/Top-K/Top-P, tokenisation, visualisation contexte/mémoire | Portage en fonctions TypeScript pures et composants Client React, sortie déterministe | Logiques non déterministes basées sur `Math.random()` sans contrôle; watch/computed spécifiques Vue |
| Dépendances | Aucune dépendance Vue historique conservée | Éventuelle réintégration progressive de capacités avancées (ex: visualisation 3D) côté React si nécessaire | `vue`, `vue-router`, `pinia`, `radix-vue`, `lucide-vue-next`, `embla-carousel-vue`, `@heroicons/vue` |

## Risques Hérités Identifiés

- Routes dupliquées dans l'app historique (`/local-generation` définie deux fois).
- Logique aléatoire non déterministe sur les distributions de tokens et relations d'attention.
- Contenu daté (`Présent` arrêté à 2025) incompatible avec une base maintenable en 2026+.
- Plusieurs fichiers texte avec encodage dégradé (accents cassés) nécessitant normalisation lors de la migration.

## Décisions D'Implémentation

- Aucun portage 1:1 Vue -> React.
- Cœur de la migration: données pédagogiques + logique métier portable, dans un modèle TypeScript local.
- Priorité d'exécution: fondamentaux puis lab interactif.
- Visualisations avancées 3D: gardées en backlog après stabilisation du socle 2D déterministe.
