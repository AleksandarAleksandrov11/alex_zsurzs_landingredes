"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandMark } from "@/components/ui/BrandMark";
import { EASE } from "@/lib/motion";
import { hasStorageConsent } from "@/lib/consent";

const STORAGE_KEY = "zs-preloader";
const DURATION_MS = 1150;

function alreadySeen(): boolean {
  if (!hasStorageConsent()) return false;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen(): void {
  // Recordarlo es almacenamiento no esencial: solo si se ha aceptado.
  if (!hasStorageConsent()) return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* almacenamiento no disponible: no es crítico */
  }
}

/**
 * Preloader con el isotipo: la Z se dibuja y el rayo destella.
 * Máximo ~1,2 s, se salta si ya se ha visto en la sesión o si el usuario
 * ha pedido reducir el movimiento. Nunca bloquea más de lo necesario.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce || alreadySeen()) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      markSeen();
      setVisible(false);
    }, DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-70 grid place-items-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.45, ease: EASE } }}
          aria-hidden="true"
        >
          <div className="relative w-28 sm:w-36">
            <BrandMark
              outline
              className="preloader-stroke w-full text-fg"
              accent="var(--color-brand-blue-hover)"
            />
            <BrandMark className="preloader-fill absolute inset-0 w-full text-fg" />
          </div>
          <span className="sr-only">Cargando</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
