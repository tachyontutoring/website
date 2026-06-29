import { ArrowRight } from "lucide-react";
import { TachyonField } from "@/components/TachyonField";
import { trustLine } from "@/lib/site";

/**
 * The SAT runs 400–1600; both tutors sit near the ceiling. A small measured
 * scale encodes that fact and anchors the bottom of the hero — a structural
 * device that means something, in place of the old decorative footnote.
 */
function ScoreScale() {
  const pct = ((1560 - 400) / (1600 - 400)) * 100; // ≈ 96.7%
  return (
    <div aria-hidden="true" className="mt-16 hidden w-full max-w-3xl md:block">
      <div className="relative h-px w-full bg-line-strong">
        <div
          className="absolute left-0 top-0 h-px bg-accent-600/70"
          style={{ width: `${pct}%` }}
        />
        <div
          className="absolute -top-1 h-2.5 w-[2px] -translate-x-1/2 bg-signal-600"
          style={{ left: `${pct}%` }}
        />
        <span className="absolute -top-6 left-0 font-mono text-[10px] text-ink-faint">400</span>
        <span className="absolute -top-6 right-0 font-mono text-[10px] text-ink-faint">1600</span>
        <span className="absolute top-3 right-0 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
          both of us — 1560
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* graph-paper motif + interactive field */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-paper" />
      <TachyonField className="pointer-events-none absolute inset-0 h-full w-full" />
      {/* legibility wash behind the text column — narrower and lighter than before
          so the particle field reads across the whole hero, not just the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[45%] bg-gradient-to-r from-paper via-paper/80 to-transparent md:block"
      />

      <div className="wrap relative">
        <div className="flex min-h-[78vh] flex-col justify-center pb-20 pt-28 sm:pt-36 md:pb-24">
          <div className="max-w-3xl">
            {/* kicker */}
            <span className="mono-label">Digital SAT Tutoring — Cambridge, MA</span>

            <h1 className="mt-6 font-display text-display-xl font-bold text-ink">
              <span className="block animate-fade-up">The shortest path</span>
              <span
                className="block text-accent-600 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                to your best score.
              </span>
            </h1>

            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft animate-fade-up sm:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              We&apos;re two Cambridge students who recently took the new digital SAT. You get real
              one-on-one coaching, plus homework that drills exactly what you keep getting
              wrong&mdash;built around you as a learner. Every practice question is checked by hand
              and pitched at the level of the current digital test.
            </p>

            <div
              className="mt-9 flex flex-col items-start gap-5 animate-fade-up sm:flex-row sm:items-center sm:gap-7"
              style={{ animationDelay: "260ms" }}
            >
              <a href="#booking" className="btn-primary group">
                Grab a free diagnostic
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <p
              className="mt-10 max-w-xl text-[15px] italic text-ink-muted animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {trustLine}
            </p>
          </div>

          <ScoreScale />
        </div>
      </div>
    </section>
  );
}
