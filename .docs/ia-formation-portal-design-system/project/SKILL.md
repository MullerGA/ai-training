---
name: magora-ia-formation-design
description: Use this skill to generate well-branded interfaces and assets for Magora's IA Formation Portal — a guided learning companion for employees building AI fluency. Contains the essential design guidelines (colors, type, fonts, motion, iconography), brand assets, and a hi-fi Learner UI kit (7 click-through screens) that you can lift components from for production code OR for throwaway prototypes, mocks, decks, and marketing artefacts.
user-invocable: true
---

# Magora — IA Formation Portal design skill

This skill packages everything needed to design _for_ the Magora IA Formation platform: a corporate-but-warm learning experience that looks more like a coach than a course catalog. Sobre, premium, immediately reassuring for employees in a professional context.

## How to use this skill

1. **Read `README.md` first.** It contains the full brand voice, visual foundations, iconography rules, and content patterns. Don't skip the "Content fundamentals" section — tone (French, tutoiement, zero emoji) is critical.
2. **Pull tokens from `colors_and_type.css`.** Link it directly when building HTML artefacts (`<link rel="stylesheet" href="colors_and_type.css">`) — it exposes both base tokens (`--slate-900`, `--blue-600`) and semantic ones (`--fg-1`, `--bg-navbar`, `--accent-gradient`).
3. **Copy assets out, don't re-draw.** `assets/magora-logo-white.svg` is the real logo. For icons, load Lucide from CDN (`https://unpkg.com/lucide@latest`) — the codebase uses `lucide-vue-next`, so Lucide is 1:1.
4. **Lift from the UI kit.** `ui_kits/learner/` has 7 fully styled React screens (Dashboard, Catalog, Path, Lesson, Exercise, Progress, Onboarding) plus shared primitives (`Button`, `Card`, `Badge`, `Progress`, `IconFrame`, `Navbar`). Open `ui_kits/learner/index.html` in a browser to see the whole thing interactive.
5. **Browse `preview/*.html`** for atomic specimens (type scale, colors, buttons, badges, cards, inputs, progress, alerts, module cards, navbar, spacing).

## What to produce

- **Visual artefacts** (slides, mocks, throwaway prototypes, marketing pages): copy assets + `colors_and_type.css` into a new folder and build a static HTML file. Cite the skill in comments.
- **Production code**: read the rules and the UI-kit JSX as reference to recreate components in Vue 3 + shadcn-vue + Tailwind (the real stack). Match the visual language exactly; resist the urge to add emoji, colored left-border cards, or bluish-purple gradients beyond the sanctioned `blue-500 → indigo-600`.

## If invoked with no guidance

Ask the user what they want to build (screen, slide deck, prototype, marketing page…), ask 3–5 clarifying questions (audience, scope, variations wanted, interactive vs static, surface), then act as an expert designer. Default output is HTML; switch to production code only if they explicitly ask.

## Non-negotiables

- **French only**, **tutoiement**, **no emoji**, **Phrase case** (no Title Case, no ALL CAPS except tiny badges).
- **Single accent gradient** only: `linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)`. Used for CTA primary, logo badge, focus accents — never as a page background.
- **Inter** for all type. No serif. No display font.
- **Lucide** outline icons only (2px stroke). No filled / duotone / hand-drawn SVG.
- **No imagery by default** — the product is flat, calm, and pedagogical. If photos are ever added: desaturated, office/training contexts, no colored stock.
- **Shadows** are neutral (5–8% black), **borders** are 1px `slate-200`, **radius** default is `0.5rem`.
