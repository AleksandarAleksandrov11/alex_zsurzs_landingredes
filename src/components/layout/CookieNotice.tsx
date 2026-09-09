"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { BoltMark } from "@/components/ui/BoltMark";
import { getConsent, setConsent } from "@/lib/consent";
import { EASE } from "@/lib/motion";

/**
 * Aviso de almacenamiento. La landing no instala cookies de analítica ni de
 * publicidad, así que el texto lo dice tal cual: lo único opcional es recordar
 * la animación de entrada. Rechazar tiene efecto real (ver `Preloader`).
 */
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() !== null) return;
    const timer = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          key="cookies"
          role="dialog"
          aria-label="Aviso de cookies"
          aria-live="polite"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-60 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4"
        >
          <div className="hairline glass mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl p-5 shadow-[0_30px_70px_-40px_#000] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <BoltMark
              className="hidden h-8 w-auto shrink-0 text-brand-orange sm:block"
            />

            <p className="flex-1 text-sm leading-relaxed text-fg-muted">
              Esta web no usa cookies de analítica ni de publicidad. Solo guarda
              en tu navegador tu elección y si ya has visto la animación de
              entrada.{" "}
              <Link
                href="/cookies"
                className="text-brand-orange underline underline-offset-2 transition-colors duration-300 hover:text-brand-orange-hover"
              >
                Más información
              </Link>
              .
            </p>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="hairline min-h-11 rounded-full px-5 text-xs font-bold tracking-[0.1em] text-fg-muted uppercase transition-colors duration-300 hover:border-brand-orange/60 hover:text-brand-orange"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="min-h-11 rounded-full bg-brand-blue px-5 text-xs font-bold tracking-[0.1em] text-fg uppercase transition-colors duration-300 hover:bg-brand-blue-hover"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
