"use client";

export type Consent = "accepted" | "rejected";

const KEY = "zs-cookies";

/** Lee la elección guardada. `null` = todavía no ha elegido. */
export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

/** Guarda la elección y avisa al resto de la página. */
export function setConsent(value: Consent): void {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* almacenamiento no disponible: la elección solo dura esta visita */
  }
  window.dispatchEvent(new CustomEvent<Consent>("zs-consent", { detail: value }));
}

/** Solo se usa almacenamiento no esencial si se ha aceptado. */
export function hasStorageConsent(): boolean {
  return getConsent() === "accepted";
}
