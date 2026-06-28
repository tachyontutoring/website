import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { Directory } from "@/components/sections/Directory";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Credentials />
        <Directory />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
