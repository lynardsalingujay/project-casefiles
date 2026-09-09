# Portfolio — lynardsalingujay.com (Dossier theme)

A personal software engineer portfolio built with Next.js, TypeScript, and
Tailwind CSS. Design direction: a retro case-file / personnel-dossier
theme — light paper tones, typewriter type (Special Elite for headlines,
Courier Prime for body), ink stamps, and dotted perforation dividers
between sections. A nod to your cybersecurity background without needing
a dark terminal to read it.

This is a visual alternative to the terminal/code-editor themed version —
same content, different presentation. Compare both and pick whichever
fits.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Editing content

Everything — bio, skills, projects, experience — lives in one file:

```
lib/content.ts
```

Edit that file and the site updates. This file is shared in spirit with
the terminal-themed version — if you update your bio or add a project
there, copy the same change into this project's `content.ts` to keep both
in sync.

Each project entry supports two optional links:
- `href` — GitHub repo
- `demoHref` — live deployed URL

## Project structure

```
app/                     Next.js App Router pages, layout, global styles
components/
  DossierHeader.tsx        Sticky header + exhibit tab navigation
  Hero.tsx                  Personnel file cover sheet
  About.tsx                  Exhibit A — background
  Skills.tsx                  Exhibit B — stamped skill tiers
  Projects.tsx                  Exhibit C — case files
  Experience.tsx                 Exhibit D — service record
  Contact.tsx                     Exhibit E — contact
lib/content.ts            All editable site content in one place
```

## Version control

If this becomes your chosen version, treat it as its own repo:

```bash
git init
git add .
git commit -m "Initial commit: dossier theme"
git remote add origin https://github.com/<your-username>/portfolio.git
git branch -M main
git push -u origin main
```

## Deploying

1. Push this repo to GitHub.
2. Go to https://vercel.com, sign in with GitHub, and import the repo.
3. Vercel auto-detects Next.js — click Deploy. You'll get a free
   `your-project.vercel.app` URL immediately.
4. Once you buy `lynardsalingujay.com`, add it under the Vercel project's
   Settings → Domains, and update your domain registrar's DNS records as
   Vercel instructs. No rebuild needed.
# project-casefiles
