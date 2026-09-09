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

## Despliegue en Vercel

El repositorio incluye `vercel.json` con el framework, los comandos de
instalación y build, las cabeceras de caché de los assets estáticos y las de
seguridad. Node queda fijado a 22 en `engines`.

**Al importar el proyecto en Vercel:**

1. **Root Directory:** la raíz del repositorio (no hay subcarpeta).
2. **Production Branch:** `main`.
3. **Framework Preset:** Next.js (lo detecta solo con `vercel.json`).
4. No hace falta ninguna variable de entorno para que funcione.

**Dominio y URLs absolutas.** El canonical, la imagen de compartir, el sitemap
y el robots.txt se calculan solos a partir del entorno, en este orden:

1. `NEXT_PUBLIC_SITE_URL`, si la defines en el proyecto de Vercel.
2. `VERCEL_PROJECT_PRODUCTION_URL`, el dominio de producción del proyecto.
3. `VERCEL_URL`, la URL de la previsualización de cada rama.
4. `https://alexzsurzs.com` como último recurso en local.

Cuando la landing tenga su dominio definitivo, basta con definir
`NEXT_PUBLIC_SITE_URL` en Vercel y volver a desplegar. Ver `src/lib/site-url.ts`.

**La página se lee aunque el JavaScript no llegue a ejecutarse.** Las
animaciones de entrada dejan el contenido oculto hasta que React hidrata; si
eso no ocurre (JS desactivado, un chunk que falla, una red que corta), el CSS
revela el contenido por su cuenta y retira el preloader. Está comprobado con
el navegador sin JavaScript y bloqueando los chunks de `_next/static`.

## Estructura de la página

Hero → bloque de enlaces → cinta de especialidades → Sobre mí → Mis
especialidades → Contacto → Footer.

Fuera de la landing quedan las páginas legales, con su propio marco visual:
`/aviso-legal`, `/privacidad` y `/cookies`.

En móvil el hero coloca la foto en la franja superior con un recorte más
cerrado; en escritorio ocupa la banda derecha con un fundido hacia el texto.

## Analítica y aviso de cookies

La medición de audiencia es **Vercel Web Analytics**, que no usa cookies, no
guarda la IP y se sirve desde el propio dominio. Aun así se trata como
analítica: el script **no se carga hasta que se acepta el aviso**.

- `src/lib/consent.ts` guarda y publica la elección; `useConsent()` la expone de
  forma reactiva a los componentes.
- `src/components/layout/Analytics.tsx` monta Vercel Analytics solo con el
  consentimiento aceptado. Al retirarlo recarga la página, porque la librería no
  elimina su script al desmontarse.
- `src/components/layout/CookieNotice.tsx` es el aviso; el enlace
  **Preferencias de cookies** del footer borra la elección y lo vuelve a mostrar,
  de modo que retirar el consentimiento es tan fácil como darlo.

Además del script de analítica, lo único que se guarda en el navegador es la
elección del aviso (`zs-cookies`, permanente) y si ya se ha visto la animación
de entrada (`zs-preloader`, solo durante la sesión y solo si se acepta).

**Hay que activar Web Analytics en el panel de Vercel** (pestaña Analytics del
proyecto) para que empiece a registrar visitas. En local el script devuelve 404
porque solo lo sirve la infraestructura de Vercel: es lo esperado.

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
| Cifra de comunidad (50K+) | `stats` en `src/content/site.ts` | Verificar antes de publicar. |
| Dominio final | Variable `NEXT_PUBLIC_SITE_URL` en Vercel | Sin definir se usa el dominio que asigne Vercel. |
| Revisión jurídica de los textos legales | `src/app/aviso-legal`, `privacidad`, `cookies` | Redactados con los datos del titular, pero conviene que los valide un profesional. |

Los datos de contacto ya son los definitivos: WhatsApp **+34 668 53 27 86**,
correo **info@zsolutions.es** y, para asuntos legales, **gestion@zsolutions.es**.

## Fotografías

Las dos fotos de Alex están integradas y procesadas (recortadas, optimizadas y
con miniatura de carga en base64). Se sirven **a color, sin filtro**: el manual
permite el blanco y negro y la capa corporativa, no los impone.

| Archivo | Tamaño | Dónde se usa |
|---|---|---|
| `hero.jpg` | 1068 × 1600 | Hero. En escritorio ocupa la banda derecha con fundido; en móvil, la franja superior. |
| `about-portrait.jpg` | 900 × 1125 | Retrato principal de «Sobre mí». |

Al sustituir una foto hay que regenerar su `blurDataURL` en `src/content/site.ts`
(miniatura de 10 px en base64) o quitar el `placeholder="blur"` de ese `<Image>`.

## Iconos, manifiesto y metadatos

Todo generado a partir del isotipo oficial:

| Archivo | Para qué |
|---|---|
| `src/app/favicon.ico` | Favicon clásico, multirresolución 16/32/48. |
| `src/app/icon.svg` | Favicon vectorial (el que usan los navegadores modernos). |
| `src/app/apple-icon.png` | Icono de 180 × 180 para «Añadir a pantalla de inicio» en iOS. |
| `public/icons/icon-192.png` y `icon-512.png` | Iconos de la PWA en Android. |
| `public/icons/icon-maskable-512.png` | Versión *maskable* con la zona segura del 80 %. |
| `public/icons/safari-pinned-tab.svg` | Pestaña anclada de Safari, monocromo. |
| `src/app/manifest.ts` → `/manifest.webmanifest` | Nombre, colores, orientación e iconos de la app instalable. |
| `src/app/opengraph-image.tsx` y `twitter-image.tsx` | Imagen 1200 × 630 al compartir el enlace. |
| `src/app/sitemap.ts` y `robots.ts` | `/sitemap.xml` y `/robots.txt`. |

Además: `theme-color`, `apple-mobile-web-app-title`, `application-name`, canonical,
JSON-LD de `Person`, `Organization` y `LocalBusiness`, y `preconnect` a la tienda.

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
- Las fotografías van a color, sin tinte: el manual permite el blanco y negro y
  la capa de color corporativo, pero no los exige. La legibilidad del texto se
  resuelve con fundidos a negro.
- Righteous solo en titulares y números; el cuerpo de texto va en Arial/Helvetica.

## Accesibilidad y movimiento

- Un solo `h1`, HTML semántico, `lang="es"`, skip link y foco visible en naranja.
- Todos los enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- `prefers-reduced-motion: reduce` desactiva preloader, parallax, marquee, cursor propio y
  smooth scroll; solo quedan fundidos de 150 ms.
- Las animaciones usan únicamente `transform` y `opacity`.
