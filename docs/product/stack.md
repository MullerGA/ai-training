# Stack Technique

## Runtime

- Next.js `16.2.4` (App Router)
- React `19.2.4`
- TypeScript `5`

## UI et Design System

- Tailwind CSS `v4`
- shadcn/ui
- Radix UI primitives
- Lucide React (iconographie)
- class-variance-authority (variants composants)
- clsx + tailwind-merge (composition de classes)

## Tooling

- Biome (lint + format)
- PostCSS (pipeline CSS)

## Scripts projet

- `npm run dev`: serveur local (`next dev --webpack`)
- `npm run build`: build production
- `npm run start`: run serveur production
- `npm run lint`: contrôle qualité
- `npm run lint:fix`: correction automatique lint
- `npm run format`: formatage code

## Choix importants

- App Router pour une architecture segmentée par route.
- Composants majoritairement Server Components, avec Client Components ciblés pour l'interactivité.
- Données mockées dans `lib/learner/data.ts` pour accélérer l'itération produit.