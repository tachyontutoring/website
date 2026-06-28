import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper-soft/70 scroll-mt-20">
      <div className="wrap py-20 md:py-28">
        <SectionHeader
          label="Reviews"
          title="What students and parents say."
          intro="We're new, so we're honest about it: these are placeholders for now. Real reviews go here as our first students finish up."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {testimonials.map((t, i) => {
            const placeholder = t.quote.trim().startsWith("[");
            return (
              <Reveal key={t.ref} delay={i * 90} className="bg-paper">
                <figure className="flex h-full flex-col p-7">
                  <span className="font-display text-4xl leading-none text-line-strong" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote
                    className={`mt-4 flex-1 font-display text-xl leading-snug ${
                      placeholder ? "italic text-ink-faint" : "text-ink"
                    }`}
                  >
                    {placeholder ? t.quote : `“${t.quote}”`}
                  </blockquote>
                  <figcaption className="mt-8 border-t border-line pt-4">
                    <span className="block text-sm font-medium text-ink">{t.author}</span>
                    <span className="font-mono text-[11px] text-ink-muted">{t.detail}</span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
