"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { primaryCta } from "@/content/site";
import { withUtm } from "@/lib/utils";

/**
 * Barra superior mínima: aparece al dejar atrás el hero y mantiene el acceso
 * a la tienda siempre a un toque. No compite con el bloque de enlaces.
 */
export function Header() {
  const { scrollY } = useScroll();
  const [pinned, setPinned] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPinned(latest > 520);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]"
      initial={false}
      animate={{ y: pinned ? 0 : -96, opacity: pinned ? 1 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      inert={!pinned}
    >
      <div className="hairline-b bg-bg/88 backdrop-blur-xl backdrop-saturate-150">
        <div className="container-brand flex items-center justify-between gap-4 py-3">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Volver al inicio"
          >
            <BrandLogo
              variant="horizontal"
              className="h-5 w-auto text-fg sm:h-6"
              title="Z Solutions"
            />
          </a>

          <a
            href={withUtm(primaryCta.training.href)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-brand-blue px-5 text-xs font-bold tracking-[0.12em] text-fg uppercase transition-colors duration-300 hover:bg-brand-blue-hover"
          >
            Formaciones
          </a>
        </div>
      </div>
    </motion.header>
  );
}
