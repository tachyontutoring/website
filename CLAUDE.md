# School of Athens Website — Claude Context

## Project

SAT tutoring marketing site, public-facing brand **School of Athens** (schoolofathens.org). Two Cambridge, MA students (Conrad Kuzmick, Filip Knippen) who scored 1560, coaching the digital SAT one-on-one, now at Harvard. **Tachyon** is the practice-question engine behind it — credited as "powered by Tachyon" (footer colophon, hero badge), not the public site name. Built with Next.js 14 App Router, Tailwind CSS, and Supabase.

## Dev server

```
cd /Users/ck/Development/soa/website
pnpm dev          # starts on localhost:3000 (falls back to 3001+ if that port is busy)
```

## Stack

- **Next.js 14.2** — App Router (`src/app/`)
- **Tailwind CSS 3** — utility classes + CSS variable color tokens
- **next-themes** — light/dark mode, `attribute="class"`, defaults to system preference
- **Supabase** — wired in `src/lib/supabase.ts` (lead form submissions)
- **lucide-react** — icons
- **pnpm** — package manager (not npm/yarn)

## Project layout

```
src/
  app/
    layout.tsx          # root layout — fonts + ThemeProvider live here
    globals.css          # CSS variable tokens, .wrap/.wrap-narrow, Tailwind base
    page.tsx             # home (Hero, Credentials, Engine, Directory, Booking)
    tutors/page.tsx
    how-it-works/page.tsx
    faq/page.tsx
    opengraph-image.tsx  # generated OG image
  components/
    Header.tsx           # fixed nav with ThemeToggle
    Footer.tsx
    Wordmark.tsx
    ThemeProvider.tsx    # next-themes wrapper (client component)
    ThemeToggle.tsx       # Sun/Moon button
    SectionHeader.tsx     # shared eyebrow + title + intro used across sections
    Reveal.tsx            # scroll-reveal wrapper
    LeadForm.tsx          # diagnostic request form -> Supabase `leads` table
    FaqAccordion.tsx
    CtaBand.tsx           # bottom-of-page conversion band on interior pages
    CalendlyEmbed.tsx, TachyonField.tsx  # currently unused — not imported by any page
    sections/             # one component per page section
      Faq.tsx, WhyUs.tsx, Testimonials.tsx  # currently unused/orphaned (not rendered anywhere)
  lib/
    site.ts              # ALL site content lives here — edit text here, not in JSX
    supabase.ts
```

There is no `/pricing` page — it was removed; don't recreate it unless asked.

## Color / theming system

Colors are CSS variables defined in `globals.css` as RGB channels so Tailwind opacity modifiers (`bg-paper/90`) work. Tailwind config references them via `rgb(var(--color-*) / <alpha-value>)`.

Dark mode is toggled by adding `.dark` to `<html>` (next-themes handles this). Override variables live in `.dark { ... }` in `globals.css` ("night fresco": umber ground, travertine ink).

**To retheme:** edit the CSS variables in `globals.css` `:root` and `.dark` blocks, and the matching values in `tailwind.config.ts`.

Key tokens (fresco/Renaissance palette, sampled from Raphael's *The School of Athens*):
- `paper` — page background (warm travertine stone / near-black in dark mode)
- `ink` — body text (warm sepia-black)
- `accent` — vermilion ramp (`accent-600`, Plato's robe) — the one bold pigment
- `signal` — gilded gold (fine rules, the verified mark)
- `fresco` (`blue-500`/`blue-300`) — the sky/Aristotle hue, used for the Tachyon "engine" side
- `line` — hairline borders
- `--grid` — graph-paper overlay (full rgba value, not a Tailwind color)

Two content-column widths:
- `.wrap` — full page width (`max-w-page` = 78rem). Used only by `Header` and `Hero`.
- `.wrap-narrow` — 1000px column. Used by every section below the hero, on every page (Credentials, Engine, Directory, Booking, Footer, Tutors, System, DigitalEdge, UseOfAI, CtaBand, FAQ). Keep new sections consistent with whichever one they sit under.

## Content

All copy, nav links, tutor bios, FAQ answers, etc. live in `src/lib/site.ts`. Edit there — components render straight from those arrays, no JSX changes needed.

## GitHub

Repo: `https://github.com/tachyontutoring/website`
Branch: `main` — push directly, no PR flow currently.

## Anthropic API

API keys at **console.anthropic.com → Settings → API Keys**. Use `sk-ant-...` keys directly as `Authorization: Bearer sk-ant-...`.
