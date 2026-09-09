"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "motion/react";

/**
 * Efecto magnético del cursor. Solo se activa con puntero fino (ratón) y si el
 * usuario no ha pedido reducir el movimiento: en táctil no hace nada.
 */
export function useMagnetic(strength = 0.28) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const active = enabled && !reduce;

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!active || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [active, strength, x, y],
  );

  const onPointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, active, onPointerMove, onPointerLeave, x: springX, y: springY };
}
