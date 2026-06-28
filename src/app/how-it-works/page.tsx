import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { System } from "@/components/sections/System";
import { DigitalEdge } from "@/components/sections/DigitalEdge";
import { UseOfAI } from "@/components/sections/UseOfAI";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Tachyon tutoring works: real one-on-one coaching, software that drills the exact questions you miss, and a perfect-scorer who checks every AI-written question by hand.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-16">
        <System />
        <DigitalEdge />
        <UseOfAI />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
