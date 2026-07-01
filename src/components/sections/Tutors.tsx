import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { tutors } from "@/lib/site";

export function Tutors() {
  return (
    <section id="tutors" className="wrap-narrow scroll-mt-20 py-20 md:py-28">
      <SectionHeader
        label="The tutors"
        title="It's just the two of us."
        intro="Either of us can tutor the whole test. We'll pair you with whoever's schedule fits best."
      />

      <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-2">
        {tutors.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="bg-paper">
            <article className="flex h-full flex-col p-8 md:p-10">
              {/* monogram mark */}
              <div
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center border border-ink font-mono text-xl font-bold tracking-tight text-ink"
              >
                {t.monogram}
              </div>

              <h3 className="mt-7 font-display text-3xl font-medium text-ink">{t.name}</h3>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-y border-line py-3 font-mono text-xs text-ink-muted">
                <span className="text-sm font-bold text-ink">{t.score}</span>
                <span aria-hidden>·</span>
                <span>{t.breakdown}</span>
              </div>

              <p className="mt-5 leading-relaxed text-ink-soft">{t.bio}</p>

              <p className="mt-auto pt-7 text-sm text-ink-muted">
                <span className="text-ink-faint">Tutors </span>
                the whole test — Math and Reading.
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
