import Link from "next/link";

/**
 * Arch crest: a round Roman arch — the architecture framing Raphael's fresco —
 * with a vermilion keystone. The arch inherits `currentColor`; the keystone
 * uses the accent. This is the School of Athens logomark.
 */
export function ArchCrest({ className = "", size = 26 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 46) / 40)}
      viewBox="0 0 40 46"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 44 L6 19 A14 14 0 0 0 34 19 L34 44" stroke="currentColor" strokeWidth="2.4" />
      <line x1="2" y1="44" x2="38" y2="44" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="20" cy="5" r="2.8" className="fill-accent-600" />
    </svg>
  );
}

/**
 * Tachyon mark: a particle with a faster-than-light vector trail — the engine's
 * glyph. Inherits `currentColor`; pair it with the fresco-blue (the machine hue).
 */
export function TachyonMark({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <line x1="2" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="5" y1="12" x2="15.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="18.6" cy="12" r="3.1" fill="currentColor" />
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
      {showGlyph && <ArchCrest className="text-ink" />}
      <span className="font-inscription text-[15px] font-semibold uppercase tracking-[0.18em] text-ink whitespace-nowrap">
        School of Athens
      </span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link
      href={href}
      aria-label="School of Athens — home"
      className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      {content}
    </Link>
  );
}
