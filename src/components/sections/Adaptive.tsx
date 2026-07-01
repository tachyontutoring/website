import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          It turns every question you miss into fresh practice aimed at that exact weak spot. You get as
          much of it as you want, on demand, and we read every one before it reaches you. It&rsquo;s a real
          study plan built around you: weekly homework, full practice tests, and tutoring sessions &mdash;
          all of it adjusting as you improve.
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

      <Link
        href="/how-it-works"
        className="group mt-7 inline-flex items-center gap-1.5 text-lg font-medium text-accent-700 hover:text-accent-600"
      >
        See the full how-it-works breakdown
        <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}
