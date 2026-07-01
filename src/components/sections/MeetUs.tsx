import { Reveal } from "@/components/Reveal";
import { tutors } from "@/lib/site";

/**
 * Brief version of the tutor bios for the homepage -- full profiles live on
 * /tutors. Uses each tutor's `hook` line instead of the full `bio`.
 */
export function MeetUs() {
  return (
    <section className="wrap-narrow py-14 md:py-16">
      <div className="border-t-2 border-ink pt-8">
        <span className="mono-label">Your tutors</span>
      </div>

      <Reveal>
        <h2 className="mt-6 max-w-2xl font-display text-display-lg font-semibold leading-[1.05] text-ink">
          You work with one of us, directly.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {tutors.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className="flex h-full items-start gap-4 border border-ink p-6">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink font-mono text-sm font-bold tracking-tight text-ink"
              >
                {t.monogram}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-display text-2xl font-medium text-ink">{t.name}</h3>
                  <span className="font-mono text-sm text-ink-muted">{t.score}</span>
                </div>
                <p className="mt-2 text-xl leading-relaxed text-ink-soft">{t.hook}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
