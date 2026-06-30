import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { systemSteps } from "@/lib/site";

export function System() {
  return (
    <section id="system" className="wrap scroll-mt-20 py-20 md:py-28">
      <SectionHeader
        label="How it works"
        title="We coach you, then we hunt down what you missed."
        intro="Most tutoring is the same work for everyone. We do it differently. We give you practice tests, review your mistakes in person, track the exact questions you need help on, and our software builds practice aimed right at them. No two students get the same homework, and the questions we pull from for your practice are completely unique to our service — with each of them human-verified."
      />

      <ol className="mt-14 grid grid-cols-12">
        {systemSteps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 70} className="col-span-12">
            <div className="group grid grid-cols-12 items-start gap-x-6 border-t border-line py-7 transition-colors hover:bg-paper-soft/60">
              {/* connector */}
              <div className="col-span-3 hidden items-center md:col-span-2 md:flex">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                <span aria-hidden className="ml-3 h-px flex-1 bg-line group-hover:bg-line-strong" />
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3 className="font-display text-2xl font-medium text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xl text-ink-soft">{step.body}</p>
              </div>
              <div className="col-span-12 mt-3 md:col-span-3 md:mt-0 md:text-right">
                <span className="font-mono text-[11px] tracking-wide text-ink-faint">/ {step.tag}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
