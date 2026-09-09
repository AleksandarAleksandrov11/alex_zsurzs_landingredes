import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  readonly children: ReactNode;
  readonly tone?: "blue" | "orange" | "outline";
  readonly className?: string;
}

const TONES = {
  blue: "bg-brand-blue text-fg border-transparent",
  orange: "border-brand-orange/45 text-brand-orange bg-brand-orange/8",
  outline: "hairline text-fg-muted bg-white/2",
} as const;

export function Badge({ children, tone = "outline", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6875rem] font-bold tracking-[0.16em] uppercase",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
