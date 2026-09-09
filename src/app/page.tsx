import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { LinkHub } from "@/components/sections/LinkHub";
import { Marquee } from "@/components/sections/Marquee";
import { Shop } from "@/components/sections/Shop";
import { Specialties } from "@/components/sections/Specialties";
import { Timeline } from "@/components/sections/Timeline";
import { Training } from "@/components/sections/Training";

export default function Page() {
  return (
    <main id="contenido">
      <Hero />
      <LinkHub />
      <Marquee />
      <About />
      <Specialties />
      <Certifications />
      <Timeline />
      <Shop />
      <Training />
      <ContactCTA />
    </main>
  );
}
