# AGENTS.md

## Project overview

This is a single-page personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. Its visual language is a paper dossier: warm paper colors, typewriter fonts, exhibit labels, ink stamps, and perforated section dividers. Keep new work consistent with that design.

## Structure

- `app/page.tsx` composes the page sections in display order.
- `app/layout.tsx` owns document metadata, global fonts, and the root layout.
- `app/globals.css` contains global styles and the shared `perforation`, `stamp`, and `exhibit-label` classes.
- `components/` contains the page sections. Components are server components by default; `DossierHeader.tsx` is client-side for its responsive menu.
- `lib/content.ts` is the source for portfolio profile, biography, skills, projects, and work history. Update it for content changes instead of duplicating those facts in components.
- `tailwind.config.ts` defines the `dossier` palette and `headline`/`mono` font families.

## Conventions

- Use TypeScript and the `@/*` import alias for project-root imports.
- Prefer existing Tailwind utilities and dossier tokens over new one-off styles. Put reusable global component styles in `app/globals.css`.
- Keep page sections in `app/page.tsx` and preserve the exhibit sequence. When changing navigation, keep its fragment links aligned with the section `id` values.
- Preserve semantic HTML, keyboard access, visible focus states, and the reduced-motion handling in global CSS. Keep interactive state in a client component only where needed.
- Project entries follow the `Project` type in `lib/content.ts`; keep status values within its declared union and external links opened in a new tab protected with `rel="noopener noreferrer"`.
- Avoid adding dependencies for features that can be implemented with the current stack.

## Common commands

- `npm run dev` — start the local development server.
- `npm run build` — create a production build.
- `npm run start` — serve a production build.
- `npm run lint` — run the lint script declared in `package.json`.

Use `npm install` when dependencies need to be installed or updated, and commit corresponding lockfile changes when dependency versions change.
