"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#booking" className="btn-primary !py-2.5 text-sm">
            Book a diagnostic
          </Link>
        </div>

        <button
          type="button"
          className="-mr-1 inline-flex items-center justify-center p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <nav className="wrap flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink-soft hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#booking" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Book a diagnostic
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
