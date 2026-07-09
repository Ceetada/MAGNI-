# Magni Automations

Marketing site for Magni Automations, an AI automation agency. Built with React, TypeScript, Vite, Tailwind CSS, `react-router-dom`, and `lucide-react`.

## Structure

- `src/components/` — Navbar, Hero, About, Services, Projects, CTA, Footer, and shared bits (Logo, Reveal, ScaledMockup, WorkflowMockup)
- `src/pages/` — `Home.tsx` (single-page sections) and `ProjectDetail.tsx` (per-project workflow page at `/work/:slug`)
- `src/data/projects.ts` — the 4 featured projects. Each entry has copy, tech stack, results, and workflow steps — **edit this file to swap in real project details**.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
