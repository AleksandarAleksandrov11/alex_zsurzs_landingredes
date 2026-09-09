"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { inView, stagger, fadeUp } from "@/lib/motion";
import { timeline } from "@/content/site";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="trayectoria" className="section-pad relative scroll-mt-20">
      <div className="container-brand flex flex-col gap-14">
        <SectionHeading
          index="04."
          eyebrow="Mi trayectoria"
          titleLines={["De peón de obra", "a formar instaladores"]}
        />

        <div ref={ref} className="relative">
          {/* Raíl y línea de progreso */}
          <div
            className="absolute top-2 bottom-2 left-[11px] w-px bg-white/12 sm:left-[15px]"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-brand-orange sm:left-[15px]"
            style={reduce ? { scaleY: 1 } : { scaleY: progress }}
            aria-hidden="true"
          />

          <motion.ol
            className="flex flex-col gap-10 sm:gap-14"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            {timeline.map((entry) => (
              <motion.li
                key={entry.year}
                data-anim
                variants={fadeUp}
                className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 pl-0 sm:grid-cols-[auto_7rem_minmax(0,1fr)] sm:gap-x-8"
              >
                <span
                  className="mt-1.5 grid size-6 shrink-0 place-items-center rounded-full border border-brand-orange/50 bg-bg sm:size-8"
                  aria-hidden="true"
                >
                  <span className="block size-2 rotate-45 bg-brand-orange sm:size-2.5" />
                </span>

                <p className="col-start-2 font-display text-2xl leading-none text-brand-orange sm:col-start-2 sm:text-3xl">
                  {entry.year}
                </p>

                <div className="col-span-2 col-start-1 flex flex-col gap-2 pl-12 sm:col-span-1 sm:col-start-3 sm:pl-0">
                  <h3 className="text-h3 font-display uppercase">{entry.title}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-fg-muted sm:text-base">
                    {entry.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
