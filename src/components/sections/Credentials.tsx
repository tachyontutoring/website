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
    <section className="wrap pt-20 pb-0 md:pt-28 md:pb-0">
      <div className="border-t-2 border-ink pt-8">
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
