import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Tachyon's AI-augmented digital SAT tutoring: online vs. in person, how the AI works, data privacy, session counts, payments, and getting started.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-24">
        <section className="wrap-narrow py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="mono-label block">FAQ</span>
            <h1 className="mt-4 font-display text-display-lg font-medium text-ink">Stuff people usually ask.</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Everything worth knowing before booking your free diagnostic. Still stuck? Email us.
              We answer every message personally.
            </p>

            <div className="mt-10">
              <FaqAccordion items={faqs} />
            </div>

            <div className="mt-10">
              <Link href="/#booking" className="btn-primary">Book a free diagnostic</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
