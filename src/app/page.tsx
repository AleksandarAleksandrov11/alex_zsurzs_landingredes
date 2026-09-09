import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { LinkHub } from "@/components/sections/LinkHub";
import { Marquee } from "@/components/sections/Marquee";
import { Specialties } from "@/components/sections/Specialties";

export default function Page() {
  return (
    <main id="contenido">
      <Hero />
      <LinkHub />
      <Marquee />
      <About />
      <Specialties />
      <ContactCTA />
    </main>
  );
}
