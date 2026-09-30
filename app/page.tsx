import BeforeAfter from "@/components/sections/BeforeAfter";
import { Booking, FaqSection, Location } from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import { Process, Team, Testimonials } from "@/components/sections/People";
import Philosophy from "@/components/sections/Philosophy";
import Services, { Marquee, Stats } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Philosophy />
      <BeforeAfter />
      <Process />
      <Team />
      <Testimonials />
      <FaqSection />
      <Booking />
      <Location />
    </>
  );
}
