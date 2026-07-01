import { Reveal } from "@/components/Reveal";
import { TachyonMark } from "@/components/Wordmark";

/**
 * Shows the two halves of the offering as equals: the human tutors (School of
 * Athens, vermilion) and the software (Tachyon, fresco-blue + its mark). This is
 * where "Powered by Tachyon" earns real estate instead of fine print.
 */
export function Engine() {
  return (
    <section className="wrap-narrow py-20 md:py-28">
      <div className="border-t-2 border-ink pt-8">
        <span className="mono-label">How it works</span>
      </div>

      <Reveal>
        <h2 className="mt-8 max-w-3xl font-display text-display-md font-semibold leading-[1.05] text-ink">
          Half human, half machine.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          School of Athens is the two of us, providing you with real coaching.{" "}
          <span className="italic">Tachyon</span> is the software we built to handle the practice. You get
          both, working together.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="border border-ink p-8 md:p-10">
          <span className="data-label text-accent-600">The people</span>
          <h3 className="mt-3 font-display text-3xl font-semibold text-ink">School of Athens</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Real one-on-one sessions. We spot the patterns you keep missing and keep you moving. Online or
            around the Greater Boston Area.
          </p>
        </div>
        <div className="border border-ink p-8 md:p-10">
          <span className="data-label inline-flex items-center gap-2 text-fresco-500">
            <TachyonMark size={15} className="text-fresco-500" /> The engine
          </span>
          <h3 className="mt-3 font-display text-3xl font-semibold text-ink">Tachyon</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">
            The software we built. It turns the questions you miss into fresh practice aimed at those
            exact weak spots. We assign you practice, but you get as much as you want, on demand. We read
            every one before it reaches you.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] text-ink-muted">
        <span>you miss a question</span>
        <span className="text-fresco-500">&rarr;</span>
        <span>Tachyon writes more like it</span>
        <span className="text-fresco-500">&rarr;</span>
        <span>we check every one by hand</span>
        <span className="text-fresco-500">&rarr;</span>
        <span>your plan adapts</span>
      </div>
    </section>
  );
}
