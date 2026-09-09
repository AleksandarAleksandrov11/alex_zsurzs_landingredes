"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

interface AnimatedCounterProps {
  readonly value: number;
  readonly suffix?: string;
  readonly className?: string;
}

/** Contador numérico que se anima una sola vez al entrar en viewport. */
export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  // Se renderiza ya con la cifra final: si el JavaScript no llega a
  // ejecutarse, el número sigue siendo correcto.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.3,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
