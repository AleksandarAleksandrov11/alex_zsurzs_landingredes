import type { BrandIconName } from "@/content/site";
import { Globe, Instagram, Mail, ShoppingBag, Youtube } from "lucide-react";

interface BrandIconProps {
  readonly name: BrandIconName;
  readonly className?: string;
}

/**
 * Iconos de los enlaces. Se usa lucide-react donde existe la marca y SVG
 * propios (mismo sistema: 24×24, trazo 2, extremos redondeados) para TikTok
 * y WhatsApp, que lucide no incluye.
 */
export function BrandIcon({ name, className }: BrandIconProps) {
  const common = {
    className,
    strokeWidth: 1.75,
    "aria-hidden": true as const,
    focusable: "false" as const,
  };

  switch (name) {
    case "instagram":
      return <Instagram {...common} />;
    case "youtube":
      return <Youtube {...common} />;
    case "shop":
      return <ShoppingBag {...common} />;
    case "mail":
      return <Mail {...common} />;
    case "globe":
      return <Globe {...common} />;
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="8" cy="16.5" r="4" />
          <path d="M12 16.5V3.5" />
          <path d="M12 3.5c0 3.59 2.91 6.5 6.5 6.5" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M21 11.6a8.6 8.6 0 0 1-12.86 7.46L3.2 20.8l1.36-4.8A8.6 8.6 0 1 1 21 11.6Z" />
          <path d="M9.4 8.9c.2-.4.5-.5.8-.5h.6c.3 0 .5.15.6.42l.75 1.8c.1.27.04.57-.16.77l-.5.5c-.2.2-.24.5-.1.74a6.6 6.6 0 0 0 2.5 2.5c.24.14.54.1.74-.1l.5-.5c.2-.2.5-.26.77-.15l1.8.75c.27.1.42.32.42.6v.6c0 .43-.24.8-.62.98-2.9 1.3-8.8-2.4-9.2-7.5a1.1 1.1 0 0 1 .1-.6Z" />
        </svg>
      );
    default:
      return null;
  }
}
