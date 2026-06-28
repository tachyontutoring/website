import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services & pricing",
  description:
    "Tachyon services and rates: AI-augmented 1:1, a monthly Prep Membership, summer bootcamp, and a diagnostic + game plan. Public pricing, free diagnostic with any package.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-16">
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
