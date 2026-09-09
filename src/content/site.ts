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

export interface CertificationGroup {
  readonly id: string;
  readonly title: string;
  readonly items: readonly string[];
}

export interface TimelineEntry {
  readonly year: string;
  readonly title: string;
  readonly description: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly path: string;
  readonly image: string;
  readonly alt: string;
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

/**
 * TODO: pedir a Alex el número de WhatsApp de empresa.
 * Formato esperado: https://wa.me/34XXXXXXXXX
 * Mientras tanto se enlaza al formulario de contacto de la web.
 */
export const WHATSAPP_URL = "https://alexzsurzs.com/pages/contact";
export const WHATSAPP_PENDING = true;

/** TODO: confirmar correo público de contacto antes de publicar. */
export const EMAIL = "info@alexzsurzs.com";

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
  { id: "certificaciones", label: "Certificaciones" },
  { id: "trayectoria", label: "Trayectoria" },
  { id: "tienda", label: "Tienda" },
  { id: "formaciones", label: "Formaciones" },
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
    id: "tienda",
    label: "Tienda Z Solutions",
    handle: "alexzsurzs.com",
    description: "Herramienta pensada por y para instaladores.",
    href: "https://alexzsurzs.com/collections/productos-fisicos",
    icon: "shop",
    featured: true,
    tag: "Envío 24/48 h",
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
    id: "formaciones",
    label: "Formaciones",
    handle: "Presencial · Barcelona",
    description: "Masterclass intensiva para instaladores.",
    href: "https://alexzsurzs.com/pages/formaciones",
    icon: "globe",
    tag: "6 plazas",
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
  shop: {
    label: "Ver la tienda",
    href: "https://alexzsurzs.com/collections/productos-fisicos",
  },
  training: {
    label: "Formaciones",
    href: "https://alexzsurzs.com/pages/formaciones",
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

export const certificationsIntro =
  "Más de 10 años formándome en el sector para ofrecer soluciones reales y seguras en obra.";

export const certifications: readonly CertificationGroup[] = [
  {
    id: "oficiales",
    title: "Certificaciones oficiales",
    items: [
      "Carnet de Electricista Especialista (REBT)",
      "Carnet de Instalador RITE",
      "Carnet de Gases Fluorados (F-Gas)",
      "Asesor Energético Especializado",
    ],
  },
  {
    id: "tecnica",
    title: "Especialización técnica",
    items: [
      "Sistemas de Aerotermia",
      "Instalaciones de Fontanería y Agua",
      "Sistemas de Conductos y Ventilación",
      "Soldadura Blanda y Soldadura Fuerte",
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad y emergencias",
    items: [
      "PHTLS – NAEMT",
      "PHTLS – IVSAS",
      "Rescate en Espacios Confinados (IVSAS)",
      "Agente de Descargo",
    ],
  },
  {
    id: "verticales",
    title: "Trabajos verticales y rescate",
    items: ["IRATA Level 3", "ITRA Level 3", "ITRA Confined Spaces Level 3"],
  },
  {
    id: "maquinaria",
    title: "Maquinaria y obra",
    items: [
      "Recurso Preventivo (60 h)",
      "Operador de PEMP (Plataformas Elevadoras)",
      "Operador de Carretilla Elevadora",
      "Operador de Grúa",
    ],
  },
];

/** Acreditaciones destacadas mostradas como badges. */
export const badges: readonly string[] = [
  "IRATA L3",
  "ITRA L3",
  "REBT",
  "RITE",
  "F-GAS",
  "PHTLS",
];

export const timeline: readonly TimelineEntry[] = [
  {
    year: "2012",
    title: "Empiezo desde cero",
    description:
      "Empiezo trabajando como peón de obra, aprendiendo desde dentro cómo funciona realmente una obra.",
  },
  {
    year: "2015",
    title: "Aprendizaje en obra",
    description:
      "Empiezo a interesarme por el mundo de las instalaciones y comienzo a aprender electricidad, fontanería y climatización directamente en obra.",
  },
  {
    year: "2018",
    title: "Especialización profesional",
    description:
      "Decido apostar por el sector de las instalaciones y obtengo certificaciones como RBT, RITE y carnet de gas.",
  },
  {
    year: "2021",
    title: "Nace Z Solutions",
    description:
      "Creo mi marca Z Solutions, enfocada en desarrollar soluciones prácticas y apoyar a profesionales del sector.",
  },
  {
    year: "2024",
    title: "Formación para profesionales",
    description:
      "Empiezo a compartir mi experiencia formando a instaladores que quieren elevar su nivel y trabajar de forma más profesional.",
  },
];

/** Precios y rutas de producto: verificar antes de publicar. */
export const products: readonly Product[] = [
  {
    id: "bolsas-40",
    name: 'Bolsas Anti-Polvo Z Solutions (40 mm)',
    price: "11,95 €", // verificar antes de publicar
    path: "/products/bolsas-anti-polvo-z-solutions",
    image: "/images/producto-bolsas-40.jpg",
    alt: "Bolsa anti-polvo Z Solutions de 40 mm para taladrar sin ensuciar",
  },
  {
    id: "bolsas-65",
    name: 'Bolsas Anti-Polvo Z Solutions (65 mm)',
    price: "11,95 €", // verificar antes de publicar
    path: "/products/bolsas-anti-polvo-z-solutions-65mm",
    image: "/images/producto-bolsas-65.jpg",
    alt: "Bolsa anti-polvo Z Solutions de 65 mm para brocas de corona",
  },
  {
    id: "mangueras",
    name: 'Mangueras de vacío "HIGH-FLOW"',
    price: "99,95 €", // verificar antes de publicar
    path: "/products/mangueras-de-vacio-high-flow-new",
    image: "/images/producto-mangueras.jpg",
    alt: "Mangueras de vacío HIGH-FLOW para instalaciones de climatización",
  },
  {
    id: "ccs-ultra",
    name: "Ascendedor/Descendedor CCS-Ultra",
    price: "1.449,95 €", // verificar antes de publicar
    path: "/products/ascendedor-descendedor-ccs-ultra-pro",
    image: "/images/producto-ccs-ultra.jpg",
    alt: "Ascendedor y descendedor CCS-Ultra para trabajos verticales",
  },
];

export const training = {
  eyebrow: "Formación presencial",
  title: "Masterclass intensiva de instalaciones",
  description:
    "Dos días de trabajo real con instaladores que quieren elevar su nivel: criterio técnico, método de montaje y seguridad. Grupo reducido para que cada uno se lleve respuestas a su propia obra.",
  facts: [
    { label: "Formato", value: "Presencial" },
    { label: "Duración", value: "2 días" },
    { label: "Tipo", value: "Masterclass intensiva" },
    { label: "Plazas", value: "6" },
    { label: "Lugar", value: "Barcelona" },
  ],
  cta: { label: "Solicitar información", href: "https://alexzsurzs.com/pages/formaciones" },
} as const;

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
  vertical: {
    src: "/images/work-vertical.jpg",
    alt: "Alex Zsurzs suspendido con cuerdas trabajando en el interior de un depósito de hormigón",
    width: 892,
    height: 1587,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAASAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCt5vpwMZJ64GcVIrxlR+8Y8ddpqlPqblwssaqqxeVnqSAeD7GpoHQwRnyuqjufSsoXtqMyr3/j4H1rVtf+PWL/AHB/Kiimyj//2Q==",
  },
  contact: {
    src: "/images/contacto.jpg",
    alt: "Retrato de Alex Zsurzs sonriendo, apoyado hacia atrás",
    width: 900,
    height: 600,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAHAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDFtyLTT55JIgVuMLG2ByBnI9u1Z024zOQONx/nRRUpalSeh//Z",
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
    { label: "Aviso legal", href: "https://alexzsurzs.com/policies/legal-notice" },
    { label: "Privacidad", href: "https://alexzsurzs.com/policies/privacy-policy" },
  ],
} as const;

export const seo = {
  title: "Alex Zsurzs · El Compita — Instalaciones, formación y trabajos verticales",
  shortTitle: "Alex Zsurzs · El Compita",
  description:
    "Enlaces oficiales de Alex Zsurzs (Z Solutions): Instagram, TikTok, YouTube, tienda de herramienta para instaladores y formación presencial en Barcelona. Electricidad, fontanería, climatización y trabajos verticales.",
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
