import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { tachyonFacts } from "@/lib/site";

/**
 * Consolidated close-out for the how-it-works page -- replaces what used to
 * be two separate sections (digital-SAT edge, how we use AI). Kept to one
 * short list so the page doesn't run long.
 */
export function WhatYouGet() {
  return (
    <section id="what-you-get" className="wrap-narrow scroll-mt-20 py-16 md:py-20">
      <SectionHeader
        label="What you get"
        title="Real, full-length practice, checked by a human, built for the test as it exists today."
      />

      <Reveal delay={80}>
        <ul className="mt-10 border-t border-line">
          {tachyonFacts.map((f) => (
            <li key={f} className="flex items-baseline gap-4 border-b border-line py-4">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 self-start rounded-full bg-accent-600" />
              <span className="text-xl leading-relaxed text-ink-soft">{f}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
