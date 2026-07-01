import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Slim conversion band for the bottom of interior pages — points everyone back
 * to the booking section on the home page.
 */
export function CtaBand({
  title = "Want to see where your points are hiding?",
  blurb = "The first diagnostic is free. Book a time or send us a note and we'll take it from there.",
}: {
  title?: string;
  blurb?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="wrap-narrow grid-paper py-16 md:py-20">
        <div className="grid grid-cols-12 items-end gap-y-6">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-display-md font-medium text-paper">{title}</h2>
            <p className="mt-3 max-w-xl text-lg text-paper/70">{blurb}</p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Link
              href="/#booking"
              className="group inline-flex items-center gap-2 bg-accent-600 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent-500"
            >
              Book a free diagnostic
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
