"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { identity, images, primaryCta } from "@/content/site";
import { EASE } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax contenido: como máximo un 15% de desplazamiento.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="vignette relative flex min-h-[90dvh] w-full flex-col justify-end overflow-hidden sm:min-h-[100dvh]"
    >
      {/* Fotografía de obra + capa de color corporativo al 60–80% (manual, 05) */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y: imageY }}
      >
        <motion.div
          className="relative h-[115%] w-full"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[50%_22%] grayscale lg:object-[68%_20%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-brand-blue-deep/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-transparent" />
        <div className="blueprint absolute inset-0 opacity-30" />
      </motion.div>

      {/* Detalle técnico superior */}
      <div className="container-brand absolute inset-x-0 top-0 flex items-start justify-between gap-4 pt-[max(1.5rem,env(safe-area-inset-top))]">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
          className="p-1"
        >
          <BrandLogo
            variant="horizontal"
            className="h-6 w-auto text-fg sm:h-7"
            title="Z Solutions"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: EASE }}
          className="hidden text-right text-eyebrow font-bold text-fg-muted uppercase sm:block"
        >
          {identity.location}
          <br />
          <span className="text-brand-orange">41.3874° N · 2.1686° E</span>
        </motion.p>
      </div>

      <motion.div
        className="container-brand relative z-10 flex flex-col gap-7 pb-16 sm:pb-20"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
          className="flex items-center gap-3 text-eyebrow font-bold text-brand-orange uppercase"
        >
          <SpeedLines className="h-2.5 text-brand-orange" count={3} />
          {identity.role}
        </motion.p>

        <h1
          className="flex flex-col text-hero font-display uppercase"
          aria-label={identity.fullName}
        >
          {[identity.firstName, identity.lastName].map((word, i) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.55 + i * 0.09, duration: 0.9, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
          className="flex flex-col gap-5"
        >
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="rounded-full bg-brand-blue px-4 py-1.5 text-sm font-bold tracking-[0.14em] uppercase">
              «{identity.nickname}»
            </span>
            <span className="font-display text-lg text-fg-muted uppercase sm:text-xl">
              {identity.brand}
            </span>
          </p>

          <p className="max-w-xl text-lead text-fg-muted">{identity.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease: EASE }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <MagneticButton href={primaryCta.shop.href}>
            {primaryCta.shop.label}
          </MagneticButton>
          <MagneticButton href={primaryCta.training.href} variant="ghost">
            {primaryCta.training.label}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#enlaces"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="container-brand relative z-10 flex items-center gap-3 pb-6 text-eyebrow font-bold text-fg-dim uppercase transition-colors duration-300 hover:text-brand-orange"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="grid size-9 place-items-center rounded-full border border-white/20"
          aria-hidden="true"
        >
          <ArrowDown className="size-4" strokeWidth={1.75} />
        </motion.span>
        Todos mis enlaces
      </motion.a>
    </section>
  );
}
