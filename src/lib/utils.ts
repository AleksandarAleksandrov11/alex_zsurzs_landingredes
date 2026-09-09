import { UTM } from "@/content/site";

/** Une clases condicionales sin dependencias externas. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Añade los parámetros UTM definidos en `site.ts` a cualquier enlace externo.
 * Si el enlace ya trae utm_source se respeta el original.
 */
export function withUtm(href: string): string {
  if (!UTM.enabled) return href;
  if (!/^https?:\/\//i.test(href)) return href;

  try {
    const url = new URL(href);
    if (url.searchParams.has("utm_source")) return url.toString();
    url.searchParams.set("utm_source", UTM.source);
    url.searchParams.set("utm_medium", UTM.medium);
    url.searchParams.set("utm_campaign", UTM.campaign);
    return url.toString();
  } catch {
    return href;
  }
}

/** Formatea el índice de sección como en el manual: 01. / 02. / 03. */
export function sectionNumber(index: number): string {
  return `${String(index).padStart(2, "0")}.`;
}
