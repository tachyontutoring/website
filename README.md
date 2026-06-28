# Tachyon — SAT prep, engineered.

Marketing site for **Tachyon**, an AI-augmented digital-SAT tutoring business run by two 99th-percentile Cambridge, MA students. Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, deploys cleanly to **Vercel**, with an optional **Supabase** lead-capture form.

**Design system:** "physics lab notebook meets editorial print" — warm paper, near-black ink, a single ultramarine accent, a graph-paper grid motif, hairline rules, and restrained monospace labels. Type: Newsreader (display) + Archivo (body) + Space Mono (labels), all via `next/font`.

---

## Quick start

```bash
pnpm install        # (or: npm install)
pnpm dev            # (or: npm run dev)
```

Open http://localhost:3000.

The site runs **with zero configuration** — Calendly shows a "set your link" placeholder and the lead form shows a friendly "not connected yet" message until you add the values below. Nothing crashes; add config when you're ready.

> Built and tested with `pnpm`, but plain `npm install` / `npm run dev` work identically.

---

## Environment variables

Copy `.env.local.example` → `.env.local` and fill in:

| Variable | Required for | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Lead form | Supabase → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Lead form | Supabase → Project Settings → API → anon/publishable key. **Public & safe** to expose. |

There is **no service-role key** anywhere in this app — leads are read from the Supabase dashboard. Never put a service-role key in a `NEXT_PUBLIC_*` variable.

If these are absent, the booking section still works via Calendly; the request form just reports it isn't connected yet.

---

## Editing content

All site copy and data live in **`src/lib/site.ts`**. Edit the arrays and the components re-render — no JSX changes needed.

| What to change | Where in `src/lib/site.ts` |
| --- | --- |
| Business name, email, Instagram, URL | `site` object |
| **Calendly link** | `site.calendlyUrl` — replace `REPLACE-ME` |
| Nav links (and their routes) | `nav` |
| Hero trust line | `trustLine` |
| The "how it works" steps | `systemSteps` |
| Credential stats | `stats` |
| Tutor bios | `tutors` |
| Services table | `services` (set `flag` for a badge) |
| **Pricing** | `pricing` (set `recommended: true` / `flag`) + `pricingNotes` |
| Digital-SAT edge | `edgePoints` |
| How-we-use-AI copy | `aiParagraph` |
| **Testimonials** | `testimonials` — replace `[Testimonial coming soon]` or append more |
| **FAQ** | `faqs` — add/edit `{ q, a }` objects |
| Form dropdown options | `gradeOptions`, `sectionOptions`, `formatOptions` |

### Pages

The site is split across routes rather than one long scroll:

- `/` — home: hero, credentials, a directory of links, testimonials, booking.
- `/how-it-works` — the system, the digital-SAT edge, how we use AI.
- `/tutors` — the two bios.
- `/pricing` — services + pricing.
- `/faq` — the FAQ accordion.

Each lives in `src/app/<route>/page.tsx` and composes the shared section components from `src/components/sections/`.

### Swapping the Calendly URL

1. Create an event type in Calendly and copy its link (e.g. `https://calendly.com/your-handle/diagnostic`).
2. In `src/lib/site.ts`, set `calendlyUrl` to that link (search the repo for `REPLACE-ME`).
3. The placeholder is automatically replaced by the live inline scheduler (lazy-loaded for speed).

### Retheming (colors / fonts / spacing)

Design tokens live in **`tailwind.config.ts`** (color ramps, fonts, type scale) mirrored by CSS variables in **`src/app/globals.css`**. To change the accent, edit the `accent` ramp in the config **and** `--accent` in globals — the whole site follows. Fonts are wired via `next/font` in `src/app/layout.tsx`. The graph-paper grid is the `.grid-paper` / `.grid-paper-fine` utilities in globals; tune `--grid` to change its strength.

The hero's interactive dot field is `src/components/TachyonField.tsx` — it's a small canvas that reacts subtly to the cursor and is automatically static on mobile and when `prefers-reduced-motion` is set.

---

## Supabase setup (lead form)

The "Request a free diagnostic" form inserts one row into a `leads` table using the public anon key. **Row Level Security** allows anonymous `INSERT` only — the public can submit, but no one can read leads from the browser. You read leads in the Supabase dashboard (Table Editor).

### 1. Create the table + RLS policy

In the Supabase dashboard → **SQL Editor**, run:

```sql
-- Table
create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  student_name  text not null,
  grade         text,
  current_score int,
  target_score  int,
  sections      text,
  format        text,
  parent_email  text not null,
  message       text
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Allow anonymous INSERT only (public form can submit; no SELECT/UPDATE/DELETE)
create policy "Anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);
```

Because RLS is enabled and only an `INSERT` policy exists, the `anon` role **cannot** read, update, or delete rows — exactly right for a public form.

### 2. Add the keys

Put `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (local) and in the Vercel dashboard (production — see below).

### 3. Reading leads

Open **Supabase → Table Editor → `leads`**. New submissions appear here.

---

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo. Framework preset auto-detects **Next.js** — no config needed.
3. Under **Settings → Environment Variables**, add (for Production, Preview, and Development):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Deploy.** Build command (`next build`) and output are auto-configured.
5. After deploy: set your real `calendlyUrl` in `src/lib/site.ts` and push (or edit it before first deploy).

> If you deploy without the Supabase vars, the site still builds and runs — only the request form is disabled (Calendly still works). Add the vars and redeploy to enable it.

### Custom domain

Vercel → **Settings → Domains** → add your domain and follow the DNS steps. Then update `site.url` in `src/lib/site.ts` so Open Graph / canonical URLs are correct.

---

## Project structure

```
src/
  app/
    layout.tsx          # fonts, SEO metadata, Open Graph
    page.tsx            # home (hero, credentials, directory, testimonials, booking)
    how-it-works/page.tsx
    tutors/page.tsx
    pricing/page.tsx
    faq/page.tsx
    icon.svg            # favicon (Tachyon glyph)
    opengraph-image.tsx # generated 1200×630 OG image
    globals.css         # tokens (CSS vars) + grid motif + base styles
  components/
    sections/           # Hero, System, WhyUs, Directory, Tutors, Services,
                        #   Pricing, DigitalEdge, UseOfAI, Testimonials, Faq, Booking
    Header, Footer, Wordmark, Reveal, TachyonField, SectionHeader,
    CtaBand, FaqAccordion, LeadForm, CalendlyEmbed
  lib/
    site.ts             # ALL content/data (edit here)
    supabase.ts         # browser Supabase client (graceful if unconfigured)
tailwind.config.ts      # design tokens
```

---

## Accessibility & performance

- Semantic landmarks (`header`/`main`/`footer`/`nav`), skip-to-content link, labeled form fields, `aria-expanded` accordion + mobile menu, keyboard-focusable controls with visible focus rings.
- Respects `prefers-reduced-motion` (animations + hero field disabled).
- The hero dot field is a single lightweight canvas, static on mobile; Calendly and its script are lazy-loaded on scroll; fonts use `next/font` with `display: swap`.
- Decorative SVG/canvas are `aria-hidden`; the wordmark exposes an accessible label.
