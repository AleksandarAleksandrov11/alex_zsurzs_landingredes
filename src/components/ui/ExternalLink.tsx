import type { AnchorHTMLAttributes, ReactNode } from "react";
import { withUtm } from "@/lib/utils";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly href: string;
  readonly children: ReactNode;
}

/** Enlace externo con UTM, pestaña nueva y rel seguro. */
export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  return (
    <a href={withUtm(href)} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
