import { ArrowRight } from "lucide-react";
import { TachyonField } from "@/components/TachyonField";
import { trustLine } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* graph-paper motif + interactive field */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-paper" />
      <TachyonField className="pointer-events-none absolute inset-0 h-full w-full" />
      {/* hairline that fades the field into the text column on desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[55%] bg-gradient-to-r from-paper via-paper/90 to-transparent md:block"
      />

      <div className="wrap relative">
        <div className="grid grid-cols-12 gap-y-10 pb-20 pt-28 sm:pt-36 md:min-h-[88vh] md:items-center md:pb-28">
          <div className="col-span-12">
            {/* kicker */}
            <div className="mb-6">
              <span className="font-mono text-[11px] uppercase tracking-label text-ink-muted">
                Cambridge, MA
              </span>
            </div>

            <h1 className="font-display text-display-lg font-bold tracking-[-0.025em] text-ink animate-fade-up">
              <span className="block">Neighborhood Expertise,</span>
              <span className="block text-accent-600">Amplified by AI.</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft animate-fade-up sm:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              We&apos;re two Cambridge students who recently took the new digital SAT. You get real
              one-on-one coaching, and homework that drills exactly what you keep getting
              wrong&mdash;it&apos;s personalized to you as a learner. All of our practice questions
              are human verified by one of us, and they are at the level of the current digital SAT.
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

            {/* trust line */}
            <p
              className="mt-12 max-w-xl text-[15px] italic text-ink-muted animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {trustLine}
            </p>
          </div>
        </div>

        {/* tachyon footnote — bottom-right, desktop only */}
        <p className="absolute bottom-7 right-0 hidden max-w-[220px] text-right font-mono text-[10px] leading-relaxed text-ink-muted opacity-60 md:block">
          Tachyons are theoretical particles that can never travel below the speed of
          light&mdash;always traveling at speeds beyond human comprehension. Their floor is the rest
          of the universe&apos;s ceiling. By tailoring your study plan, we aim to make the
          trajectory of your learning similar to a Tachyon: faster than anything that surrounds it.
        </p>
      </div>
    </section>
  );
}
