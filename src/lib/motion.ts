import type { Transition, Variants } from "motion/react";

/** Curva base del sistema: salida suave, sin rebote. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = {
  duration: 0.7,
  ease: EASE,
};

/** Aparición estándar de bloques al entrar en viewport. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

/** Contenedor que escalona la entrada de sus hijos. */
export function stagger(amount = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: amount, delayChildren: delay },
    },
  };
}

/** Revelado de titulares por líneas, con máscara. */
export const lineMask: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: EASE },
  },
};

/** Configuración compartida de `whileInView`. */
export const inView = { once: true, amount: 0.25, margin: "0px 0px -80px 0px" } as const;
