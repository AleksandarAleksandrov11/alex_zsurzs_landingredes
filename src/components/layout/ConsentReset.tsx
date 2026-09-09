"use client";

import { clearConsent } from "@/lib/consent";

/**
 * Permite volver a decidir sobre las cookies. Retirar el consentimiento debe
 * ser tan sencillo como darlo, así que este botón vive en el footer.
 */
export function ConsentReset() {
  return (
    <button
      type="button"
      onClick={clearConsent}
      className="transition-colors duration-300 hover:text-brand-orange"
    >
      Preferencias de cookies
    </button>
  );
}
