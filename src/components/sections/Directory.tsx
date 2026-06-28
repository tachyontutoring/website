import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const pages = [
  {
    href: "/how-it-works",
    title: "How it works",
    blurb: "The coaching-plus-software loop, and exactly how we use AI without cutting corners.",
  },
  {
    href: "/tutors",
    title: "Meet the tutors",
    blurb: "Who we are, what we scored, and which part of the test each of us owns.",
  },
  {
    href: "/pricing",
    title: "Services & pricing",
    blurb: "Every way to work with us, with the rates printed in plain numbers.",
  },
  {
    href: "/faq",
    title: "Questions",
    blurb: "Online vs. in person, data privacy, how many sessions you'll need, and more.",
  },
];

export function Directory() {
  return (
    <section className="wrap py-20 md:py-28">
      <SectionHeader
        label="Look around"
        title="The short version is above. The details are a click away."
      />

      <div className="mt-12 border-t border-ink">
        {pages.map((p, i) => (
          <Reveal key={p.href} delay={i * 60}>
            <Link
              href={p.href}
              className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-b border-line py-6 transition-colors hover:bg-paper-soft/60"
            >
              <h3 className="col-span-11 font-display text-2xl font-medium text-ink md:col-span-4">
                {p.title}
              </h3>
              <p className="col-span-12 text-ink-soft md:col-span-7">{p.blurb}</p>
              <span className="col-span-1 hidden justify-end md:flex">
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
