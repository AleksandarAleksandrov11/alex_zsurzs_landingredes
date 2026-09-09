/**
 * URL pública del sitio, resuelta en tiempo de build o de despliegue.
 *
 * Se usa para el canonical, los metadatos Open Graph, el sitemap y el
 * robots.txt. El orden es deliberado: si mañana la landing vive en su propio
 * dominio basta con definir NEXT_PUBLIC_SITE_URL en Vercel.
 *
 * Solo se importa desde el servidor (layout, sitemap y robots).
 */

const FALLBACK_URL = "https://alexzsurzs.com";

function normalize(url: string): string {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

export function resolveSiteUrl(): string {
  // 1. Dominio definido a mano (variable de entorno del proyecto en Vercel).
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return normalize(explicit);

  // 2. Dominio de producción que Vercel asigna al proyecto.
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return normalize(production);

  // 3. URL del despliegue actual (previsualizaciones de cada rama).
  const deployment = process.env.VERCEL_URL;
  if (deployment) return normalize(deployment);

  // 4. Desarrollo local y cualquier otro entorno.
  return FALLBACK_URL;
}

export const SITE_ORIGIN = resolveSiteUrl();
