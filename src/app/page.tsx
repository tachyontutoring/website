import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { Engine } from "@/components/sections/Engine";
import { Directory } from "@/components/sections/Directory";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Credentials />
        <Engine />
        <Directory />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
