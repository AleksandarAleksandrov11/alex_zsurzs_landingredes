"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, inView, stagger } from "@/lib/motion";

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
}

/** Entrada estándar de bloque al entrar en viewport (una sola vez). */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      data-anim
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps extends RevealProps {
  readonly amount?: number;
}

/** Contenedor que escalona la entrada de sus `RevealItem`. */
export function RevealGroup({
  children,
  className,
  amount = 0.08,
  delay = 0,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      variants={stagger(amount, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div data-anim className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
