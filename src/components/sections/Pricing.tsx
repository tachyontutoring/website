import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { offerings } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="wrap scroll-mt-20 py-20 md:py-28">
      <SectionHeader
        label="Services & pricing"
        title="Here's what it costs."
        intro="Whichever you pick, you start with a free diagnostic (including one of our custom practice tests and a 30 minute session)."
      />

      <div className="mt-14 border-t border-ink">
        {/* column labels (desktop) */}
        <div className="hidden grid-cols-12 gap-6 py-3 md:grid">
          <span className="col-span-3 mono-label">Service</span>
          <span className="col-span-5 mono-label">What it is</span>
          <span className="col-span-4 mono-label md:text-right">Rate</span>
        </div>

        {offerings.map((o, i) => (
          <Reveal key={o.name} delay={i * 70}>
            <Link
              href="/#booking"
              className="group grid grid-cols-12 items-start gap-x-6 gap-y-2 border-b border-line py-6 transition-colors hover:bg-paper-soft/60"
            >
              <div className="col-span-12 md:col-span-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl font-medium text-ink">{o.name}</h3>
                  {o.flag && (
                    <span className="bg-accent-600 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper">
                      {o.flag}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13px] text-ink-muted">{o.who}</p>
              </div>

              <p className="col-span-12 text-ink-soft md:col-span-5">{o.what}</p>

              <div className="col-span-12 md:col-span-4 md:text-right">
                <span
                  className={`font-display text-2xl font-medium ${
                    o.recommended ? "text-accent-600" : "text-ink"
                  }`}
                >
                  {o.price}
                </span>
                {o.priceNote && (
                  <p className="mt-0.5 font-mono text-[11px] text-ink-muted">{o.priceNote}</p>
                )}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
