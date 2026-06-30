import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { edgePoints } from "@/lib/site";

export function DigitalEdge() {
  return (
    <section id="edge" className="bg-ink text-paper scroll-mt-20">
      <div className="wrap grid-paper py-20 md:py-28">
        <div className="border-t-2 border-paper/25 pt-8">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4">
            <div className="col-span-12 md:col-span-3">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-paper/60">
                The digital SAT
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <h2 className="font-display text-display-lg font-medium text-paper">
                  We took the new test. A lot of tutors haven&apos;t.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/70">
                  The SAT is digital and adaptive now, and it rewards different things than the old
                  paper version. We recently took it (and scored highly), so we know where the points
                  actually are.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {edgePoints.map((p, i) => (
            <Reveal key={p.label} delay={i * 90}>
              <div className="border-t border-paper/20 pt-5">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-300">
                  {p.label}
                </span>
                <p className="mt-3 leading-relaxed text-paper/80">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
