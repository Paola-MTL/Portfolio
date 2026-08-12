# Paola Cejoco — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes (home, `/about`, `/projects/[slug]`)
- `src/components` — Nav, Footer, Hero, ProjectsGrid, Timeline, ContactCTA, AnimatedSection
- `src/data` — content: `projects.ts` (case studies), `about.ts` (timeline + hero taglines)

## Content

Copy is adapted from the previous Framer portfolio. Replace placeholder colors in `src/data/projects.ts`
with real project screenshots (drop images in `public/` and reference them with `next/image`).

## Deploying

Push to GitHub, then import the repo on [vercel.com](https://vercel.com) — Vercel auto-detects Next.js,
no config needed. Every push to `main` redeploys automatically.
