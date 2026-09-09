"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/**
 * Cursor propio: punto sólido + anillo que reacciona a los elementos
 * interactivos. Solo con puntero fino y sin `prefers-reduced-motion`.
 */
export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled || reduce) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor='hover']")));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, reduce, x, y]);

  if (!enabled || reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-80 hidden md:block">
      <motion.span
        className="absolute top-0 left-0 block size-1.5 rounded-full bg-brand-orange"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.span
        className="absolute top-0 left-0 block size-7 rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: active ? 1.75 : 1,
          borderColor: active
            ? "var(--color-brand-orange)"
            : "rgba(255,255,255,0.45)",
        }}
        transition={{ duration: 0.22 }}
      />
    </div>
  );
}
