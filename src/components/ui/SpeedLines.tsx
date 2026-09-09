import { cn } from "@/lib/utils";

interface SpeedLinesProps {
  readonly count?: number;
  readonly className?: string;
}

/**
 * Las dos líneas de fuga del isotipo, reutilizadas como separador gráfico.
 * Decorativo: oculto para lectores de pantalla.
 */
export function SpeedLines({ count = 3, className }: SpeedLinesProps) {
  return (
    <span
      className={cn("speed-lines h-3 shrink-0", className)}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ opacity: 1 - i * 0.28 }} />
      ))}
    </span>
  );
}
