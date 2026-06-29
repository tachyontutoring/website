import Link from "next/link";

/**
 * Custom Tachyon glyph: a particle with a faster-than-light vector trail.
 * A filled node at the leading edge, three motion streaks trailing behind it.
 * Inherits `currentColor` for the streaks; the node uses the accent.
 */
export function TachyonGlyph({ className = "", size = 22 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* trailing streaks */}
      <line x1="2" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* leading particle */}
      <circle cx="18.5" cy="12" r="3.2" className="fill-accent-600" />
    </svg>
  );
}

export function Wordmark({
  href = "/",
  className = "",
  showGlyph = true,
}: {
  href?: string | null;
  className?: string;
  showGlyph?: boolean;
}) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {showGlyph && <TachyonGlyph className="text-ink" />}
      <span className="font-display text-xl font-bold uppercase tracking-[0.04em] text-ink">
        Tachyon
      </span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link
      href={href}
      aria-label="Tachyon — home"
      className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      {content}
    </Link>
  );
}
