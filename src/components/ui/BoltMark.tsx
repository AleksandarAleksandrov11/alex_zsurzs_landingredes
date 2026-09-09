interface BoltMarkProps {
  readonly className?: string;
}

/**
 * El rayo del isotipo, aislado como elemento decorativo (separadores,
 * líneas de velocidad y detalles). Nunca sustituye al logotipo.
 */
export function BoltMark({ className }: BoltMarkProps) {
  return (
    <svg
      viewBox="62.09 23.14 54.11 104.83"
      className={className}
      fill="currentColor"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M66.48 127.97L116.2 66.09L97.16 66.19L92.15 66.19L110.15 23.14L62.09 82.96L81.14 82.86L85.18 82.86L66.48 127.97" />
    </svg>
  );
}
