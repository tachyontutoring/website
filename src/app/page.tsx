import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Adaptive } from "@/components/sections/Adaptive";
import { MeetUs } from "@/components/sections/MeetUs";
import { Directory } from "@/components/sections/Directory";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Adaptive />
        <MeetUs />
        <Directory />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
