import { Reveal } from "@/components/Reveal";

/**
 * The credibility stats, woven into one editorial statement instead of a grid
 * of cards. The four figures are set large and in the accent so they still
 * read at a glance, but the structure is a sentence, not boxes.
 */
function Fig({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bold text-accent-600 [font-size:1.22em] [line-height:0.9]">{children}</span>
  );
}

export function Credentials() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="relative border-t border-line pt-8">
        {/* a tachyon resting on the track */}
        <span aria-hidden className="absolute left-0 top-0 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-accent-600" />
        <span aria-hidden className="absolute left-2 top-0 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-accent-600/50 to-transparent" />
        <span className="mono-label">By the numbers</span>
      </div>

      <Reveal>
        <p className="mt-9 max-w-5xl font-display text-2xl font-medium leading-[1.45] text-ink-soft sm:text-[1.9rem] md:text-[2.4rem] md:leading-[1.4]">
          Two of us, <Fig>1560</Fig>s, both in the top <Fig>1%</Fig> of the country.{" "}
          <Fig>100%</Fig> of the questions our AI writes get checked by hand. You get a{" "}
          <Fig>legitimately personalized</Fig> study plan that includes weekly homework, practice
          tests, and tutoring sessions.
        </p>
      </Reveal>
    </section>
  );
}
