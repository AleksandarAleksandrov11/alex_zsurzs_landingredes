"use client";

import { useEffect, useRef } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { useConsent } from "@/lib/consent";

/**
 * Analítica de Vercel, condicionada al consentimiento.
 *
 * El script no se carga hasta que se acepta el aviso. Vercel Analytics no
 * elimina su script al desmontar el componente, así que al retirar el
 * consentimiento se recarga la página: es la única forma de garantizar que deja
 * de medir en el acto.
 *
 * Vercel Analytics no usa cookies y se sirve desde el propio dominio, pero
 * sigue siendo medición de audiencia y se trata como tal.
 */
export function Analytics() {
  const consent = useConsent();
  const wasActive = useRef(false);

  useEffect(() => {
    if (consent === "accepted") {
      wasActive.current = true;
      return;
    }
    if (consent !== undefined && wasActive.current) {
      wasActive.current = false;
      window.location.reload();
    }
  }, [consent]);

  if (consent !== "accepted") return null;

  return <VercelAnalytics />;
}
