"use client";

import { motion } from "motion/react";
import { LinkCard } from "@/components/ui/LinkCard";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { links } from "@/content/site";
import { inView, stagger } from "@/lib/motion";

/** Corazón "link in bio": la acción principal de la página. */
export function LinkHub() {
  return (
    <section id="enlaces" className="relative scroll-mt-24 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="container-brand flex flex-col gap-7">
        <div className="flex items-center gap-3 text-eyebrow font-bold text-fg-dim uppercase">
          <SpeedLines className="h-2.5 text-brand-blue" count={3} />
          <h2 className="text-eyebrow font-sans font-bold tracking-[0.22em]">
            Enlaces oficiales
          </h2>
          <span className="hairline-b ml-auto hidden h-px flex-1 sm:block" />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {links.map((item) => (
            <LinkCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
