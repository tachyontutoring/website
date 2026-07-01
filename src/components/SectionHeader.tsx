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
    <div className={`relative border-t-2 border-ink pt-8 ${className}`}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        <div className="col-span-12 md:col-span-3">
          <span className="mono-label">{label}</span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2 className="font-display text-display-lg font-medium text-ink">{title}</h2>
            {intro && (
              <p className="mt-4 max-w-2xl text-xl leading-relaxed text-ink-soft">{intro}</p>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
