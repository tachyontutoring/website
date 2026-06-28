# Tachyon Website — Claude Context

## Project

SAT tutoring marketing site for Tachyon (tachyonprep.com). Two Harvard students who scored 1560 coaching the digital SAT. Built with Next.js 14 App Router, Tailwind CSS, and Supabase.

## Dev server

```
cd C:\Development\website
pnpm dev          # starts on localhost:3000
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
    layout.tsx          # root layout — ThemeProvider lives here
    globals.css         # CSS variable tokens + Tailwind base
    page.tsx            # home
    pricing/page.tsx
    tutors/page.tsx
    how-it-works/page.tsx
    faq/page.tsx
  components/
    Header.tsx          # fixed nav with ThemeToggle
    Footer.tsx
    Wordmark.tsx
    ThemeProvider.tsx   # next-themes wrapper (client component)
    ThemeToggle.tsx     # Sun/Moon button
    sections/           # one component per page section
  lib/
    site.ts             # ALL site content lives here — edit text here, not in JSX
    supabase.ts
```

## Color / theming system

Colors are CSS variables defined in `globals.css` as RGB channels so Tailwind opacity modifiers (`bg-paper/90`) work. Tailwind config references them via `rgb(var(--color-*) / <alpha-value>)`.

Dark mode is toggled by adding `.dark` to `<html>` (next-themes handles this). Override variables live in `.dark { ... }` in `globals.css`.

**To retheme:** edit the CSS variables in `globals.css` `:root` and `.dark` blocks, and the matching values in `tailwind.config.ts`.

Key tokens:
- `paper` — page background (warm off-white / near-black)
- `ink` — body text
- `accent` — ultramarine blue ramp (`accent-600` = `#1E36E0` is primary)
- `line` — hairline borders
- `--grid` — graph-paper overlay (full rgba value, not a Tailwind color)

## Content

All copy, nav links, tutor bios, pricing, FAQ answers, etc. live in `src/lib/site.ts`. Edit there — components render straight from those arrays, no JSX changes needed.

## GitHub

Repo: `https://github.com/tachyontutoring/website`
Branch: `main` — push directly, no PR flow currently.

## Anthropic API

API keys at **console.anthropic.com → Settings → API Keys**. Use `sk-ant-...` keys directly as `Authorization: Bearer sk-ant-...`.
