import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { System } from "@/components/sections/System";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Tachyon tutoring works: real one-on-one coaching, plus a practice system that drills the exact questions you miss, with every question checked by hand.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-16">
        <System />
        <WhatYouGet />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
