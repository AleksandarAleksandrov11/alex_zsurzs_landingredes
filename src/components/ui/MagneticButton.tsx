"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useMagnetic } from "@/lib/useMagnetic";
import { cn } from "@/lib/utils";
import { withUtm } from "@/lib/utils";

interface MagneticButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: "solid" | "ghost";
  readonly className?: string;
  readonly external?: boolean;
  readonly ariaLabel?: string;
}

const VARIANTS = {
  solid:
    "bg-brand-blue text-fg hover:bg-brand-blue-hover shadow-[0_18px_40px_-24px_var(--color-brand-blue)]",
  ghost: "hairline text-fg hover:border-brand-orange/60 hover:text-brand-orange",
} as const;

/** CTA con efecto magnético en desktop y barrido diagonal de marca. */
export function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
  external = true,
  ariaLabel,
}: MagneticButtonProps) {
  const magnetic = useMagnetic(0.22);

  return (
    <motion.a
      ref={magnetic.ref as React.Ref<HTMLAnchorElement>}
      href={external ? withUtm(href) : href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={ariaLabel}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      style={magnetic.active ? { x: magnetic.x, y: magnetic.y } : undefined}
      className={cn(
        "sheen group relative inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold tracking-[0.06em] uppercase transition-colors duration-300",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
