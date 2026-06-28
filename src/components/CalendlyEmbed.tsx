"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Inline Calendly widget, lazy-loaded on scroll (keeps the page fast). Swap
 * site.calendlyUrl — search the repo for REPLACE-ME.
 */
export function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const isPlaceholder = site.calendlyUrl.includes("REPLACE-ME");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (isPlaceholder) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center border border-dashed border-line-strong bg-paper-soft/50 p-8 text-center grid-paper-fine">
        <span className="mono-label-accent">CALENDLY — NOT SET</span>
        <p className="mt-4 max-w-sm text-sm text-ink-soft">
          Set your Calendly link in{" "}
          <code className="bg-ink/5 px-1.5 py-0.5 font-mono text-[12px]">src/lib/site.ts</code> (replace{" "}
          <code className="bg-ink/5 px-1.5 py-0.5 font-mono text-[12px]">REPLACE-ME</code>) and the live
          inline scheduler appears here.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent-700 hover:text-accent-800"
        >
          Get a Calendly link <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <div ref={ref}>
      {inView ? (
        <>
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          <div
            className="calendly-inline-widget border border-line"
            data-url={site.calendlyUrl}
            style={{ minWidth: "320px", height: "660px" }}
          />
        </>
      ) : (
        <div className="min-h-[440px] border border-line bg-paper-soft/40" />
      )}
    </div>
  );
}
