import { Reveal } from "./Reveal";

/**
 * Editorial section header: a hairline rule, a small margin label, and the
 * display title. Left label sits in the margin on desktop for an asymmetric,
 * print-like rhythm. No section numbering.
 */
export function SectionHeader({
  label,
  title,
  intro,
  className = "",
}: {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border-t border-line pt-8 ${className}`}>
      {/* a tachyon resting on the section's track */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-accent-600"
      />
      <span
        aria-hidden="true"
        className="absolute left-2 top-0 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-accent-600/50 to-transparent"
      />
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        <div className="col-span-12 md:col-span-3">
          <span className="mono-label">{label}</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2 className="font-display text-display-lg font-medium text-ink">{title}</h2>
            {intro && (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
