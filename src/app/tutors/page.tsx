import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tutors } from "@/components/sections/Tutors";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "The tutors",
  description:
    "Meet Conrad Kuzmick and Filip Knippen — two Cambridge students who both scored 1560 on the digital SAT. Conrad leads math; Filip leads reading & writing.",
};

export default function TutorsPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-16">
        <Tutors />
        <CtaBand
          title="Want to work with one of us?"
          blurb="Tell us what you're aiming for and we'll pair you with the right section. The first diagnostic is free."
        />
      </main>
      <Footer />
    </>
  );
}
