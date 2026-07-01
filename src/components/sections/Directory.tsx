import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pages = [
  {
    href: "/how-it-works",
    title: "How it works",
    blurb: "The quick version — what the practice actually does, and what we call it.",
  },
  {
    href: "/tutors",
    title: "Meet the tutors",
    blurb: "The full write-up on each of us, and how we can help you.",
  },
  {
    href: "/faq",
    title: "Questions",
    blurb: "Online vs. in person, data privacy, how many sessions you'll need, and more.",
  },
];

export function Directory() {
  return (
    <section className="wrap-narrow py-14 md:py-16">
      <div className="border-t-2 border-ink">
        {pages.map((p, i) => (
          <Reveal key={p.href} delay={i * 60}>
            <Link
              href={p.href}
              className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-b border-line py-6 transition-colors hover:bg-paper-soft/60"
            >
              <h3 className="col-span-11 font-display text-3xl font-medium text-ink md:col-span-4">
                {p.title}
              </h3>
              <p className="col-span-12 text-xl text-ink-soft md:col-span-7">{p.blurb}</p>
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
