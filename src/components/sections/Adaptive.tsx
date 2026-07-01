import { Reveal } from "@/components/Reveal";

/**
 * Plain-English description of the adaptive practice loop, with no product
 * name attached -- that reveal is saved for the /how-it-works page.
 */
export function Adaptive() {
  return (
    <section className="wrap-narrow py-20 md:py-24">
      <div className="border-t-2 border-ink pt-8">
        <span className="mono-label">How it works</span>
      </div>

      <Reveal>
        <h2 className="mt-8 max-w-3xl font-display text-display-lg font-semibold leading-[1.05] text-ink">
          You miss it once. You don&rsquo;t miss it again.
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
          Our software turns every question you miss into fresh practice aimed at that exact weak spot.
          School of Athens is a study plan built around you: weekly homework, full practice tests, and
          tutoring sessions.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-ink-muted">
        <span>you miss a question</span>
        <span className="text-fresco-500">&rarr;</span>
        <span>we write more practice like it</span>
        <span className="text-fresco-500">&rarr;</span>
        <span>we check every one by hand</span>
        <span className="text-fresco-500">&rarr;</span>
        <span>your plan adapts</span>
      </div>
    </section>
  );
}
