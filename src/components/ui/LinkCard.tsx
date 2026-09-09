"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/content/site";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { useMagnetic } from "@/lib/useMagnetic";
import { fadeUp } from "@/lib/motion";
import { cn, withUtm } from "@/lib/utils";

interface LinkCardProps {
  readonly item: LinkItem;
}

/**
 * Tarjeta del bloque "link in bio": es la acción principal de la página.
 * Hover con elevación, borde azul e imán del cursor en desktop;
 * en táctil solo respuesta al pulsar.
 */
export function LinkCard({ item }: LinkCardProps) {
  const magnetic = useMagnetic(0.12);

  return (
    <motion.a
      ref={magnetic.ref as React.Ref<HTMLAnchorElement>}
      variants={fadeUp}
      href={withUtm(item.href)}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      style={magnetic.active ? { x: magnetic.x, y: magnetic.y } : undefined}
      whileTap={{ scale: 0.985 }}
      className={cn(
        "sheen group relative flex min-h-[6.5rem] items-center gap-4 rounded-2xl p-5 sm:gap-5 sm:p-6",
        "hairline glass transition-[border-color,background-color,transform,box-shadow] duration-400 ease-brand",
        "hover:-translate-y-1 hover:border-brand-blue/70 hover:bg-brand-blue/10",
        "hover:shadow-[0_28px_60px_-40px_var(--color-brand-blue)]",
        "focus-visible:-translate-y-1 focus-visible:border-brand-blue/70",
        item.featured && "sm:col-span-2",
      )}
    >
      <span
        className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-blue text-fg transition-colors duration-300 group-hover:bg-brand-blue-hover sm:size-14"
        aria-hidden="true"
      >
        <BrandIcon name={item.icon} className="size-6 sm:size-7" />
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-display text-[1.0625rem] uppercase sm:text-h3">
            {item.label}
          </span>
          {item.tag ? (
            <span className="rounded-full border border-brand-orange/45 bg-brand-orange/8 px-2.5 py-0.5 text-[0.625rem] font-bold tracking-[0.14em] text-brand-orange uppercase">
              {item.tag}
            </span>
          ) : null}
        </span>
        <span className="truncate text-sm text-fg-dim">{item.handle}</span>
        <span className="text-sm text-fg-muted">{item.description}</span>
      </span>

      <span
        className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 text-fg-muted transition-all duration-300 ease-brand group-hover:border-brand-orange/60 group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
        aria-hidden="true"
      >
        <ArrowUpRight
          className="size-5 transition-transform duration-300 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      </span>
    </motion.a>
  );
}
