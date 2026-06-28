import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why" className="bg-paper-soft/70 grid-paper-fine scroll-mt-20">
      <div className="wrap py-20 md:py-28">
        <SectionHeader
          label="Why us"
          title="We actually scored at the top of this test."
          intro="We're not a franchise reading off a script, and we didn't learn on the old paper SAT. We sat for the current digital test, scored in the top 1%, and we read every AI-written question ourselves before it goes to a student."
        />

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-paper">
              <div className="flex h-full flex-col p-7">
                <dd className="font-display text-5xl font-medium leading-none text-ink md:text-6xl">
                  {s.value}
                </dd>
                <dt className="mt-auto pt-10 text-sm font-medium text-ink">{s.label}</dt>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
