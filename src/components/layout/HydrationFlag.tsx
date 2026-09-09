"use client";

import { useEffect } from "react";

/**
 * Marca el documento en cuanto React hidrata.
 *
 * Mientras la clase no está, el CSS revela por su cuenta todo el contenido
 * animado: así la landing se lee aunque el JavaScript no llegue a ejecutarse
 * (bloqueado, un chunk que falla, un navegador sin JS). Ver `globals.css`.
 */
export function HydrationFlag() {
  useEffect(() => {
    document.documentElement.classList.add("hydrated");
  }, []);

  return null;
}
