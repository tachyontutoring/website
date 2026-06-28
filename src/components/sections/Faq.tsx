import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="wrap scroll-mt-20 py-20 md:py-28">
      <SectionHeader label="FAQ" title="Stuff people usually ask." />
      <Reveal className="mt-12">
        <FaqAccordion items={faqs} />
      </Reveal>
    </section>
  );
}
