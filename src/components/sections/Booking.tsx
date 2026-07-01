import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";

export function Booking() {
  return (
    <section id="booking" className="wrap-narrow scroll-mt-4 pt-12 pb-20 md:pt-16 md:pb-28">
      <SectionHeader
        label="Get started"
        title="Grab a free diagnostic."
        intro="Register for a free practice test and first session. We'll reach out within a day to get it scheduled."
      />

      <div className="mx-auto mt-14 max-w-2xl">
        <Reveal>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
