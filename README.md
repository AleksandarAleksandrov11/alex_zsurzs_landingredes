# Alex Zsurzs — landing "link in bio"

Landing de una sola página para **Alex Zsurzs · «El Compita»**, fundador de **Z Solutions**
(Barcelona). Sustituye al Linktree: es el enlace único de la bio de Instagram, TikTok y
YouTube, y dirige el tráfico a sus redes, su tienda y sus formaciones.

## Stack

| Pieza | Versión |
|---|---|
| Next.js (App Router) | 15.5 |
| React | 19.2 |
| TypeScript (modo estricto) | 5.9 |
| Tailwind CSS (tokens en `@theme`) | 4.1 |
| Motion (`motion/react`) | 12.23 |
| Lenis (smooth scroll) | 1.3 |
| lucide-react | 0.545 |

Sin CMS, sin base de datos, sin backend. Deploy previsto en Vercel.

## Comandos

```bash
pnpm install
pnpm dev        # desarrollo
pnpm build      # build de producción
pnpm start      # servir el build
pnpm typecheck  # tsc --noEmit
pnpm lint       # eslint
```

## Dónde se edita el contenido

**Todo** el texto, los enlaces, los precios y las cifras están en un único archivo:

```
src/content/site.ts
```

Ningún componente escribe textos ni URLs a fuego. Para cambiar un precio, un enlace o una
certificación no hace falta tocar código de componentes.

Los parámetros UTM (`?utm_source=bio&utm_medium=landing&utm_campaign=linkinbio`) se aplican
a todos los enlaces externos desde la constante `UTM` de ese mismo archivo; poniendo
`enabled: false` se desactivan de golpe.

## Pendiente antes de publicar

| Dato | Dónde | Estado |
|---|---|---|
| Número de WhatsApp | `WHATSAPP_URL` en `site.ts` | Provisional: apunta al formulario de contacto de la web. Sustituir por `https://wa.me/34XXXXXXXXX` y poner `WHATSAPP_PENDING = false`. |
| Correo público | `EMAIL` en `site.ts` | Provisional `info@alexzsurzs.com`. Confirmar. |
| Precios de los 4 productos | `products` en `site.ts` | Marcados con `// verificar antes de publicar`. |
| Cifra de comunidad (50K+) | `stats` en `site.ts` | Verificar antes de publicar. |
| URLs de aviso legal y privacidad | `legal.links` en `site.ts` | Rutas estándar de Shopify. Confirmar que existen. |
| Dominio final | `LANDING_URL` en `site.ts` | Ahora apunta a `alexzsurzs.com`. Cambiar si la landing va a un subdominio. |

## Fotografías que hacen falta

Las imágenes actuales de `public/images/` son **marcadores de posición** con la marca
(fondo oscuro, rejilla técnica e isotipo). Hay que sustituirlas por las fotos reales
manteniendo el mismo nombre de archivo y proporción:

| Archivo | Tamaño mínimo | Proporción | Qué debe verse |
|---|---|---|---|
| `hero.jpg` | 1600 × 2000 px | 4:5 (vertical) | Alex en obra, plano medio. Se recorta a pantalla completa y se le aplica B/N + capa azul corporativo. Deja aire alrededor del sujeto. |
| `about-portrait.jpg` | 1200 × 1500 px | 4:5 (vertical) | Retrato de Alex con la sudadera de Z Solutions. |
| `work-01.jpg` | 1200 × 1500 px | 4:5 (vertical) | Trabajo vertical o intervención en altura. Se usa de fondo del bloque de formación. |
| `work-02.jpg` | 1200 × 1500 px | 4:5 (vertical) | Segunda foto de obra, de reserva. |
| `producto-bolsas-40.jpg` | 1000 × 1000 px | 1:1 | Bolsas anti-polvo 40 mm. |
| `producto-bolsas-65.jpg` | 1000 × 1000 px | 1:1 | Bolsas anti-polvo 65 mm. |
| `producto-mangueras.jpg` | 1000 × 1000 px | 1:1 | Mangueras de vacío HIGH-FLOW. |
| `producto-ccs-ultra.jpg` | 1000 × 1000 px | 1:1 | Ascendedor/descendedor CCS-Ultra. |

Formato JPEG o WebP de origen; Next.js genera AVIF y WebP en varios tamaños
automáticamente. Si se cambia la proporción de alguna, hay que ajustar el `aspect-ratio`
del contenedor correspondiente para no provocar saltos de maquetación.

Vídeo de hero: no se usa. Si más adelante se añade, debe servirse solo en escritorio,
con `muted`, `playsInline`, `preload="none"` y póster, dejando la imagen estática en móvil.

## Marca

Los logotipos e iconos de `public/brand/` y `public/icons/` se han extraído como vectores
del **Manual Básico de Identidad Visual Corporativa** de Z Solutions, sin redibujar:

- `brand/logo-vertical-*.svg` y `brand/logo-horizontal-*.svg` (apartado 01)
- `brand/isotipo-*.svg` — la Z con el rayo y las dos líneas de fuga (apartado 02)
- `brand/lema-vertical-*.svg` — logotipo con el lema «Expertos en tus instalaciones.» (apartado 06)
- `icons/electricidad|fontaneria|climatizacion|verticales.svg` (apartado 07)

Cada uno en blanco, negro, azul corporativo y versión a color, tal y como permite el manual.
En la web se usan como componentes React (`BrandLogo`, `BrandMark`, `BoltMark`,
`ServiceIcon`) para poder controlar el color sin recolorear el archivo.

**Único elemento no oficial:** el icono de la especialidad *Formación* (un casco de obra).
El manual solo facilita cuatro iconos y no hay uno para formación, así que se ha dibujado
con el mismo lenguaje sólido y geométrico. Si existe un original, se sustituye en
`src/components/ui/ServiceIcon.tsx`.

### Reglas de color respetadas

- Azul `#2F4AA0` (pantalla) y `#23366F` (referencia del manual, usado en fondos y sombras).
- Naranja `#FF7A1A` solo como acento: subrayados, numeración, badges, hover y el rayo
  decorativo del marquee. Nunca en el logotipo.
- El logotipo aparece únicamente en blanco sobre fondo oscuro, sin contorno, sin marco y
  con área de seguridad libre.
- Sobre fotografía se aplica capa de color corporativo al 68 % (el manual permite 60–80 %).
- Righteous solo en titulares y números; el cuerpo de texto va en Arial/Helvetica.

## Accesibilidad y movimiento

- Un solo `h1`, HTML semántico, `lang="es"`, skip link y foco visible en naranja.
- Todos los enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- `prefers-reduced-motion: reduce` desactiva preloader, parallax, marquee, cursor propio y
  smooth scroll; solo quedan fundidos de 150 ms.
- Las animaciones usan únicamente `transform` y `opacity`.
