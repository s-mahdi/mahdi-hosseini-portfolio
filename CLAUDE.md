# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm lint         # ESLint with zero warnings allowed
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest run (single pass)
pnpm test:watch   # vitest watch mode
```

Run a single test file:
```bash
pnpm test tests/metadata.test.ts
```

## Architecture

This is a **Next.js 15 App Router** portfolio site with static generation throughout.

### Data layer — `src/content/`

All portfolio data lives as typed TypeScript constants, never fetched at runtime:

- `site.ts` — contact links, CTA labels, availability
- `experience.ts` — `ExperienceEntry[]` (company, role, outcomes, optional `caseStudySlug`)
- `projects.ts` — `Project[]` (tags drive the filter UI; `archive: true` moves to Archive tab)
- `case-studies.ts` — `CaseStudy[]` with a `getCaseStudyBySlug` helper
- `skills.ts` — `SkillCategory[]`
- `types.ts` — all shared types; the canonical source of truth for data shapes

### Routing

| Route | Notes |
|---|---|
| `/` | Hero + highlights |
| `/experience` | `ExperienceTimeline` driven by `experience.ts` |
| `/projects` | `ProjectGallery` with client-side filter from `src/lib/projects.ts` |
| `/case-studies` | Card grid from `caseStudies` array |
| `/case-studies/[slug]` | Statically generated via `generateStaticParams`; uses `getCaseStudyBySlug` |
| `/skills` | `SkillMatrix` |
| `/contact` | `ContactForm` |
| `/about` | Static copy page |

### Component layers

- `src/components/ui/` — unstyled primitives (shadcn/ui pattern: Button, Card, Badge, Input, Textarea, Sheet, Separator)
- `src/components/sections/` — page-specific composed sections (Hero, ExperienceTimeline, ProjectGallery, CaseStudyCard, etc.)
- `src/components/layout/` — Navigation, Footer, ThemeProvider

`MotionReveal` (`sections/motion-reveal.tsx`) is the standard Framer Motion wrapper for scroll-triggered fade-up animations.

### Metadata

Every page exports `metadata` built via `src/lib/metadata.ts`:
- `buildSiteMetadata()` — root layout
- `buildPageMetadata({ title, description, path })` — standard pages
- `buildCaseStudyMetadata({ name, summary, slug })` — case study detail pages

All produce canonical URL, OpenGraph, and Twitter card fields automatically.

### Styling

Tailwind v3 with a custom theme in `tailwind.config.ts`:
- Container max-width: `1280px` (2xl), centered, `1rem` padding
- Design tokens: HSL CSS variables for all colors (`--background`, `--foreground`, `--primary`, `--muted`, etc.)
- Fonts: `font-heading` = Archivo, `font-body` = Space Grotesk (both via `next/font/google`)
- Custom shadow: `shadow-panel` for card surfaces
- Custom animation: `animate-fade-up` (used by MotionReveal)
- Dark mode default; `enableSystem={false}` — no system preference override

### Testing

Vitest + jsdom + Testing Library. Tests live in `tests/` and cover:
- `metadata.test.ts` — `buildPageMetadata` / `buildCaseStudyMetadata` output
- `portfolio-data.test.ts` — data integrity (slugs, required fields)
- `project-filter.test.ts` — `filterProjects` logic
- `contact-form.test.tsx` — form interaction

The `@` alias resolves to `src/` in both Vitest (`vitest.config.ts`) and TypeScript (`tsconfig.json`).
