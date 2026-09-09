interface BrandMarkProps {
  readonly className?: string;
  /** Color de la Z y de las líneas de fuga. */
  readonly base?: string;
  /** Color del rayo. */
  readonly accent?: string;
  /** Dibuja solo el contorno (se usa en el preloader). */
  readonly outline?: boolean;
  readonly title?: string;
}

/**
 * Isotipo oficial Z Solutions (manual, apartado 02): la Z con el rayo y las
 * dos líneas de fuga. Vector extraído del manual, sin alterar proporciones ni
 * eliminar elementos. Solo blanco, negro o azul corporativo — nunca naranja.
 */
export function BrandMark({
  className,
  base = "currentColor",
  accent = "var(--color-brand-blue)",
  outline = false,
  title,
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 245.76 160.25"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      vectorEffect="non-scaling-stroke"
    >
        <path
          key={0}
          d="M66.48 127.97L116.2 66.09L97.16 66.19L92.15 66.19L110.15 23.14L62.09 82.96L81.14 82.86L85.18 82.86L66.48 127.97"
          pathLength={outline ? 1 : undefined}
          fill={outline ? "none" : accent}
          stroke={outline ? accent : undefined}
          className={"zs-bolt"}
        />
        <path
          key={1}
          d="M199.78 160.25L0 160.25L54.38 91.88L65.57 91.88L18.18 151.51L181.11 151.51L162.87 129.64L77.41 129.57L83.54 120.83L166.97 120.9L199.78 160.25"
          pathLength={outline ? 1 : undefined}
          fill={outline ? "none" : base}
          stroke={outline ? base : undefined}
          className={undefined}
        />
        <path
          key={2}
          d="M119.66 57.13L107.26 57.15L145.32 9.83L41.17 9.83L58.49 30.61L92.61 30.61L84.67 40.45L53.89 40.45L20.16 0L165.24 0L119.66 57.13"
          pathLength={outline ? 1 : undefined}
          fill={outline ? "none" : base}
          stroke={outline ? base : undefined}
          className={undefined}
        />
        <path
          key={3}
          d="M222.91 160.25L190.09 120.9L179.13 120.9L186 129.64L204.24 151.51L211.36 160.25L222.91 160.25"
          pathLength={outline ? 1 : undefined}
          fill={outline ? "none" : base}
          stroke={outline ? base : undefined}
          className={undefined}
        />
        <path
          key={4}
          d="M245.76 160.25L212.94 120.9L201.98 120.9L208.85 129.64L227.09 151.51L234.21 160.25L245.76 160.25"
          pathLength={outline ? 1 : undefined}
          fill={outline ? "none" : base}
          stroke={outline ? base : undefined}
          className={undefined}
        />
    </svg>
  );
}
