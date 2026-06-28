import { Mail, Instagram } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export function Booking() {
  return (
    <section id="booking" className="wrap scroll-mt-20 py-20 md:py-28">
      <SectionHeader
        label="Get started"
        title="Grab a free diagnostic."
        intro="Pick a time on the calendar, or send us the quick form and we'll reach out. Either way, the first diagnostic is on us."
      />

      <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-2">
        {/* Calendly */}
        <Reveal className="bg-paper">
          <div className="flex h-full flex-col p-7 md:p-8">
            <h3 className="font-display text-xl font-medium text-ink">Pick a time</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Book a slot directly and you&apos;ll get a confirmation plus a practice test to take.
            </p>
            <div className="mt-5">
              <CalendlyEmbed />
            </div>
          </div>
        </Reveal>

        {/* Lead form */}
        <Reveal delay={100} className="bg-paper">
          <div className="flex h-full flex-col p-7 md:p-8">
            <h3 className="font-display text-xl font-medium text-ink">Or send us a note</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Tell us a bit about the student and we&apos;ll email you back within a day.
            </p>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>

      {/* contact */}
      <Reveal className="mt-8 flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:gap-10">
        <span className="mono-label-accent">CONTACT</span>
        <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-ink-soft hover:text-accent-700">
          <Mail size={17} aria-hidden="true" />
          {site.email}
        </a>
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-soft hover:text-accent-700">
          <Instagram size={17} aria-hidden="true" />@{site.instagram}
        </a>
      </Reveal>
    </section>
  );
}
