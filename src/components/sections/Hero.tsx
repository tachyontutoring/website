import { ArrowRight } from "lucide-react";
import { TachyonMark } from "@/components/Wordmark";
import { trustLine } from "@/lib/site";

/**
 * The SAT runs 400–1600; both tutors sit near the ceiling. A small measured
 * scale encodes that fact and anchors the bottom of the hero — a structural
 * device that means something, in place of a decorative footnote.
 */
function ScoreScale() {
  const pct = ((1560 - 400) / (1600 - 400)) * 100; // ≈ 96.7%
  return (
    <div aria-hidden="true" className="mt-14 hidden w-full max-w-xl md:block">
      <div className="relative h-px w-full bg-line-strong">
        <div className="absolute left-0 top-0 h-px bg-accent-600/80" style={{ width: `${pct}%` }} />
        <div className="absolute -top-1 h-2.5 w-[2px] -translate-x-1/2 bg-signal-600" style={{ left: `${pct}%` }} />
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 plaster" />

      <div className="wrap relative">
        <div className="grid items-center gap-12 pb-20 pt-28 sm:pt-36 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* thesis */}
          <div>
            <span className="mono-label">Cambridge, MA</span>

            <h1 className="mt-5 font-display text-[clamp(2.8rem,6.4vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.01em] text-ink">
              <span className="block animate-fade-up">Two 1560s,</span>
              <span className="block animate-fade-up" style={{ animationDelay: "100ms" }}>
                in your corner.
              </span>
            </h1>

            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft animate-fade-up sm:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              We&rsquo;re two Cambridge students who both scored 1560 and sat the new digital SAT ourselves.
              You get real one&#8209;on&#8209;one coaching &mdash; plus <span className="italic text-ink">Tachyon</span>,
              the software we built to drill exactly what keeps tripping you up. Every question is checked by hand.
            </p>

            <div
              className="mt-9 flex flex-col items-start gap-5 animate-fade-up sm:flex-row sm:items-center sm:gap-7"
              style={{ animationDelay: "260ms" }}
            >
              <a
                href="#booking"
                className="btn group bg-accent-600 px-6 py-3.5 text-paper hover:bg-accent-700"
              >
                Grab a free diagnostic
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div
              className="mt-6 inline-flex items-center gap-2.5 text-ink-muted animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <TachyonMark size={17} className="text-fresco-500" />
              <span className="font-mono text-[12px] tracking-wide">Practice powered by Tachyon</span>
            </div>

            <p
              className="mt-9 max-w-xl text-[15px] italic text-ink-muted animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {trustLine}
            </p>

            <ScoreScale />
          </div>

          {/* the fresco, framed like a painting on a travertine wall */}
          <figure className="relative mx-auto w-full max-w-md animate-fade-up lg:mx-0" style={{ animationDelay: "120ms" }}>
            <div className="frame-plate relative overflow-hidden">
              <img
                src="/fresco-hero.jpg"
                alt="Raphael, The School of Athens (1511): Plato points to the heavens, Aristotle to the earth."
                className="block h-auto w-full"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-2.5 pt-8 font-mono text-[10px] tracking-wide text-white/90">
                Raphael &middot; <span className="italic">The School of Athens</span> &middot; 1511
              </figcaption>
            </div>
            <figcaption className="mt-3 text-center text-[13px] italic leading-snug text-ink-muted lg:text-left">
              Our namesake &mdash; a room full of people teaching each other. Felt about right.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
