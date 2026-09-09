"use client";

import { motion } from "motion/react";
import { inView, lineMask, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MaskedLinesProps {
  readonly lines: readonly string[];
  readonly className?: string;
  readonly lineClassName?: string;
  readonly as?: "h1" | "h2" | "p" | "div";
}

/**
 * Revelado de titulares línea a línea con máscara.
 * Nunca letra a letra: penaliza rendimiento y CLS.
 */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  as = "h2",
}: MaskedLinesProps) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={stagger(0.09)}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span className={cn("block", lineClassName)} variants={lineMask}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
