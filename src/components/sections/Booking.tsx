import { Mail, Instagram } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export function Booking() {
  return (
    <section id="booking" className="wrap scroll-mt-20 py-20 md:py-28">
      <SectionHeader
        label="Get started"
        title="Grab a free diagnostic."
        intro="Register for a free practice test and first session. We'll reach out within a day to get it scheduled."
      />

      <div className="mt-14 max-w-2xl">
        <Reveal>
          <LeadForm />
        </Reveal>
      </div>

      {/* contact */}
      <Reveal className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:gap-10">
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
