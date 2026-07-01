import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { aiParagraph } from "@/lib/site";

const guarantees = [
  "Practice questions written around your specific gaps",
  "We read every one before you see it",
  "Our question bank is original; we never copy real SAT items",
  "We ask before we use anything from a session",
];

export function UseOfAI() {
  return (
    <section id="ai" className="wrap-narrow scroll-mt-20 py-20 md:py-28">
      <SectionHeader label="How we use AI" title="What the AI does, and what we do." />

      <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 md:col-span-7">
          <p className="font-display text-2xl font-medium leading-snug text-ink md:text-[2rem] md:leading-[1.25]">
            {aiParagraph}
          </p>
        </Reveal>

        <Reveal delay={120} className="col-span-12 md:col-span-5">
          <ul className="border-t border-line">
            {guarantees.map((g) => (
              <li key={g} className="flex items-baseline gap-4 border-b border-line py-4">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 self-start rounded-full bg-accent-600" />
                <span className="text-ink-soft">{g}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
