import { ArrowRight, Mail } from "lucide-react";
import { contacts } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 plaster" />

      <div className="wrap relative">
        <div className="grid items-center gap-12 pt-28 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* thesis */}
          <div>
            <span className="mono-label">SAT Tutoring &middot; Cambridge, MA</span>

            <h1 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink">
              <span className="block animate-fade-up">Affordable SAT tutoring</span>
              <span className="block animate-fade-up" style={{ animationDelay: "100ms" }}>
                from high-achieving students.
              </span>
            </h1>

            <p
              className="mt-7 max-w-xl text-2xl leading-relaxed text-ink-soft animate-fade-up sm:text-3xl"
              style={{ animationDelay: "180ms" }}
            >
              We&rsquo;re two Cambridge Rindge &amp; Latin School students who scored 1560 on the digital
              SAT ourselves. You get real one&#8209;on&#8209;one coaching, and practice built to drill
              exactly what keeps tripping you up.
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
          </div>

          {/* the fresco, framed like a painting on a travertine wall */}
          <figure className="relative mx-auto w-full min-w-0 max-w-2xl animate-fade-up lg:mx-0" style={{ animationDelay: "120ms" }}>
            <div className="frame-plate relative overflow-hidden">
              <img
                src="/fresco-hero.jpg"
                alt="Raphael, The School of Athens (1511): Plato points to the heavens, Aristotle to the earth."
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[10px] tracking-wide text-ink-muted lg:text-left">
              Raphael &middot; <span className="italic">The School of Athens</span> &middot; 1511
            </figcaption>
          </figure>
        </div>

        <div
          className="mt-8 flex flex-col items-start gap-3 pb-20 animate-fade-up sm:flex-row sm:items-center sm:gap-8 md:pb-24"
          style={{ animationDelay: "300ms" }}
        >
          <span className="mono-label-accent whitespace-nowrap">Or email us directly</span>
          {contacts.map((c) => (
            <a
              key={c.email}
              href={`mailto:${c.email}`}
              className="inline-flex items-center gap-2 break-words text-2xl font-medium text-ink hover:text-accent-700"
            >
              <Mail size={22} className="shrink-0" aria-hidden="true" />
              {c.email}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
