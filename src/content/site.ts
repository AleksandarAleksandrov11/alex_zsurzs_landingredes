/**
 * Fuente única de verdad de la landing.
 * Ningún componente debe escribir textos ni URLs a fuego: todo sale de aquí.
 */

/* -------------------------------------------------------------------------- */
/*  Tipos                                                                      */
/* -------------------------------------------------------------------------- */

export type BrandIconName =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "whatsapp"
  | "shop"
  | "mail"
  | "globe";

export type ServiceIconName =
  | "electricidad"
  | "fontaneria"
  | "climatizacion"
  | "verticales"
  | "formacion";

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface LinkItem {
  readonly id: string;
  readonly label: string;
  readonly handle: string;
  readonly description: string;
  readonly href: string;
  readonly icon: BrandIconName;
  /** Destacada = ocupa dos columnas en desktop. */
  readonly featured?: boolean;
  /** Etiqueta corta opcional (naranja, acento). */
  readonly tag?: string;
}

export interface Specialty {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: ServiceIconName;
}

export interface Stat {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

/* -------------------------------------------------------------------------- */
/*  Configuración                                                              */
/* -------------------------------------------------------------------------- */

/** Tienda y web completa de Alex: destino de los enlaces salientes. */
export const SITE_URL = "https://alexzsurzs.com";

/** Parámetros UTM aplicados a todos los enlaces externos. Editable aquí. */
export const UTM = {
  enabled: true,
  source: "bio",
  medium: "landing",
  campaign: "linkinbio",
} as const;

export const PHONE = "+34 668 53 27 86";
export const WHATSAPP_URL = "https://wa.me/34668532786";
export const EMAIL = "info@zsolutions.es";

/** Titular de la web, para el aviso legal y la política de privacidad. */
export const company = {
  legalName: "CLIMVOLT ZSOLUTIONS 1996, S.L.",
  taxId: "B75892554",
  address: {
    street: "Carrer de Rocafort, 240, Entlo 3a",
    postalCode: "08029",
    city: "Barcelona",
    region: "Cataluña",
    country: "España",
  },
  addressLine: "Carrer de Rocafort, 240, Entlo 3a · 08029 Barcelona (España)",
  email: "gestion@zsolutions.es",
} as const;

/* -------------------------------------------------------------------------- */
/*  Identidad                                                                  */
/* -------------------------------------------------------------------------- */

export const identity = {
  firstName: "ALEX",
  lastName: "ZSURZS",
  fullName: "Alex Zsurzs",
  nickname: "El Compita",
  brand: "Z Solutions",
  location: "Barcelona, España",
  role: "Instalador · Formador · Trabajos verticales",
  tagline:
    "Elevando el estándar de las instalaciones a través de la formación técnica y herramientas de élite.",
  /** Lema oficial del manual de identidad visual (apartado 06). */
  lema: "Expertos en tus instalaciones.",
  bio: [
    "Soy un profesional afincado en Barcelona, especializado en Electricidad, Fontanería, Climatización y Trabajos Verticales. Conozco el oficio desde abajo y mi misión es profesionalizar el sector.",
    "Ofrezco formación práctica real y desarrollo herramientas que resuelven los problemas que yo mismo he enfrentado en la obra durante años.",
  ],
} as const;

export const nav: readonly NavItem[] = [
  { id: "enlaces", label: "Enlaces" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "especialidades", label: "Especialidades" },
  { id: "contacto", label: "Contacto" },
];

/* -------------------------------------------------------------------------- */
/*  Enlaces                                                                    */
/* -------------------------------------------------------------------------- */

export const links: readonly LinkItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@alex_zsurzs",
    description: "El día a día en obra, sin filtros.",
    href: "https://www.instagram.com/alex_zsurzs/",
    icon: "instagram",
    featured: true,
  },
  {
    id: "formaciones",
    label: "Formaciones",
    handle: "Presencial · Barcelona",
    description: "Masterclass intensiva para instaladores.",
    href: "https://alexzsurzs.com/pages/formaciones",
    icon: "globe",
    featured: true,
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@alex_zsurzs",
    description: "Trucos y montajes en vídeo corto.",
    href: "https://www.tiktok.com/@alex_zsurzs",
    icon: "tiktok",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@Alex_Zsurzs",
    description: "Montajes completos explicados paso a paso.",
    href: "https://www.youtube.com/@Alex_Zsurzs",
    icon: "youtube",
  },
  {
    id: "tienda",
    label: "Tienda Z Solutions",
    handle: "alexzsurzs.com",
    description: "Herramienta pensada por y para instaladores.",
    href: "https://alexzsurzs.com/collections/productos-fisicos",
    icon: "shop",
  },
  {
    id: "contacto",
    label: "Contacto directo",
    handle: "WhatsApp",
    description: "Dudas, presupuestos y colaboraciones.",
    href: WHATSAPP_URL,
    icon: "whatsapp",
  },
];

export const socials = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/alex_zsurzs/", icon: "instagram" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@alex_zsurzs", icon: "tiktok" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@Alex_Zsurzs", icon: "youtube" },
] as const satisfies readonly { id: string; label: string; href: string; icon: BrandIconName }[];

export const primaryCta = {
  training: {
    label: "Formaciones",
    href: "https://alexzsurzs.com/pages/formaciones",
  },
  shop: {
    label: "Ver la tienda",
    href: "https://alexzsurzs.com/collections/productos-fisicos",
  },
  about: {
    label: "Sobre Alex",
    href: "https://alexzsurzs.com/pages/sobre-alex",
  },
  site: {
    label: "alexzsurzs.com",
    href: "https://alexzsurzs.com/",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Secciones                                                                  */
/* -------------------------------------------------------------------------- */

export const marqueeItems: readonly string[] = [
  "Electricidad",
  "Fontanería",
  "Climatización",
  "Trabajos verticales",
  "Aerotermia",
  "Formación técnica",
  "Espacios confinados",
  "Ventilación",
];

/**
 * Contadores.
 * TODO: verificar la cifra de comunidad con Alex antes de publicar.
 */
export const stats: readonly Stat[] = [
  { value: 10, suffix: "+", label: "años en obra" },
  { value: 50, suffix: "K+", label: "comunidad" },
  { value: 4, suffix: "", label: "áreas de especialidad" },
  { value: 15, suffix: "+", label: "certificaciones" },
];

export const specialties: readonly Specialty[] = [
  {
    id: "electricidad",
    title: "Electricidad",
    description: "Instalaciones completas, cuadros, automatismos y certificaciones.",
    icon: "electricidad",
  },
  {
    id: "fontaneria",
    title: "Fontanería",
    description: "Sistemas de agua y desagües.",
    icon: "fontaneria",
  },
  {
    id: "climatizacion",
    title: "Climatización",
    description: "Soluciones de aire acondicionado, calefacción y ventilación.",
    icon: "climatizacion",
  },
  {
    id: "verticales",
    title: "Trabajos Verticales",
    description: "Intervenciones en altura con equipo certificado.",
    icon: "verticales",
  },
  {
    id: "formacion",
    title: "Formación",
    description: "Transmisión de conocimiento práctico a profesionales.",
    icon: "formacion",
  },
];

/* -------------------------------------------------------------------------- */
/*  Imágenes                                                                   */
/* -------------------------------------------------------------------------- */

export interface SiteImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  /** Miniatura en base64 para el placeholder de carga. */
  readonly blurDataURL: string;
}

export const images = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Alex Zsurzs con casco y arnés sentado en la cornisa de un edificio de Barcelona al atardecer",
    width: 1068,
    height: 1600,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAPAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDel1eOOVE25BJBIIOOM00azCRkLwf9oVxpvWj8xYYI4+dyEE/KSMGnxKBEgweAOwpDP//Z",
  },
  portrait: {
    src: "/images/about-portrait.jpg",
    alt: "Alex Zsurzs en obra con la sudadera de Zsurzs Instalaciones junto a un andamio",
    width: 900,
    height: 1125,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDCjvYUhmRg7SbAUKj7vPP6VRNzLnqn/fIqoO9bUMSGCMkHlR39qm1ir3P/2Q==",
  },
  award: {
    src: "/images/about-premio.jpg",
    alt: "Alex Zsurzs sosteniendo el galardón de instalaciones de los Premios Sector Oficios",
    width: 1200,
    height: 1200,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCzZIpZna5RPIBDxsvT3NTbZDyITg/7FSrFGL26ARQPl4x7VcEaEZKKSfas0rtmrkf/2Q==",
  },
} as const satisfies Record<string, SiteImage>;

/* -------------------------------------------------------------------------- */
/*  Legal / SEO                                                                */
/* -------------------------------------------------------------------------- */

/** Se evalúa en el servidor al renderizar el footer. */
export function copyright(): string {
  return `© ${new Date().getFullYear()} Alex Zsurzs – Z Solutions`;
}

export const legal = {
  links: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/privacidad" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const seo = {
  title: "Alex Zsurzs · El Compita — Instalaciones, formación y trabajos verticales",
  shortTitle: "Alex Zsurzs · El Compita",
  description:
    "Enlaces oficiales de Alex Zsurzs (Z Solutions): Instagram, TikTok, YouTube, formación presencial en Barcelona y tienda de herramienta para instaladores. Electricidad, fontanería, climatización y trabajos verticales.",
  keywords: [
    "Alex Zsurzs",
    "El Compita",
    "Z Solutions",
    "instalaciones Barcelona",
    "formación instaladores",
    "trabajos verticales",
    "electricidad",
    "fontanería",
    "climatización",
    "IRATA",
    "herramienta para instaladores",
  ],
} as const;
