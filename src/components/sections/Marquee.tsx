import { BoltMark } from "@/components/ui/BoltMark";
import { marqueeItems } from "@/content/site";

/**
 * Cinta infinita de especialidades. Movimiento con CSS puro (transform),
 * en pausa al hover y detenida con `prefers-reduced-motion`.
 */
export function Marquee() {
  const sequence = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="marquee-wrap hairline-t hairline-b mask-edges relative overflow-hidden bg-ink-900/40 py-5"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {sequence.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6 pr-6 font-display text-lg uppercase sm:text-2xl"
          >
            <span className="text-fg-muted">{item}</span>
            <BoltMark className="h-4 w-auto text-brand-orange sm:h-5" />
          </span>
        ))}
      </div>
    </div>
  );
}
