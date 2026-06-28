"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/lib/site";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-ink">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600"
              >
                <span className="flex-1 font-display text-xl font-medium text-ink">{item.q}</span>
                <span aria-hidden="true" className="mt-0.5 shrink-0 text-ink-muted">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="pb-6 pr-8">
              <p className="max-w-2xl leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
