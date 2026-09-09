import type { ReactNode } from "react";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { Reveal } from "@/components/ui/Reveal";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Numeración de sección al estilo del manual: 01. / 02. / 03. */
  readonly index: string;
  readonly eyebrow: string;
  readonly titleLines: readonly string[];
  readonly description?: ReactNode;
  readonly className?: string;
  readonly align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  titleLines,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <p className="flex items-center gap-3 text-eyebrow font-bold text-brand-orange uppercase">
          <span aria-hidden="true">{index}</span>
          <SpeedLines className="h-2.5 text-brand-orange" count={2} />
          <span>{eyebrow}</span>
        </p>
      </Reveal>

      <MaskedLines
        as="h2"
        lines={titleLines}
        className="max-w-4xl text-h2 font-display uppercase"
      />

      {description ? (
        <Reveal delay={0.1}>
          <div
            className={cn(
              "max-w-2xl text-lead text-fg-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
