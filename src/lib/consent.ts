"use client";

import { useEffect, useState } from "react";

export type Consent = "accepted" | "rejected";

const KEY = "zs-cookies";
const EVENT = "zs-consent";

/** Lee la elección guardada. `null` = todavía no ha elegido. */
export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

function announce(value: Consent | null): void {
  window.dispatchEvent(new CustomEvent<Consent | null>(EVENT, { detail: value }));
}

/** Guarda la elección y avisa al resto de la página. */
export function setConsent(value: Consent): void {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* almacenamiento no disponible: la elección solo dura esta visita */
  }
  announce(value);
}

/**
 * Borra la elección para poder volver a decidir. Retirar el consentimiento
 * tiene que ser tan fácil como darlo, así que el footer enlaza aquí.
 */
export function clearConsent(): void {
  try {
    window.localStorage.removeItem(KEY);
    window.sessionStorage.removeItem("zs-preloader");
  } catch {
    /* almacenamiento no disponible */
  }
  announce(null);
}

/** Solo se usa almacenamiento y analítica si se ha aceptado. */
export function hasStorageConsent(): boolean {
  return getConsent() === "accepted";
}

/**
 * Consentimiento reactivo. Devuelve `undefined` hasta que el componente monta,
 * para que el servidor y el cliente rendericen lo mismo.
 */
export function useConsent(): Consent | null | undefined {
  const [consent, setValue] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    setValue(getConsent());

    const onChange = (event: Event) => {
      setValue((event as CustomEvent<Consent | null>).detail);
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === KEY) setValue(getConsent());
    };

    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return consent;
}
