import type { Metadata, Viewport } from "next";
import { Righteous } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { HydrationFlag } from "@/components/layout/HydrationFlag";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { EMAIL, PHONE, SITE_URL, company, identity, seo, socials } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: seo.title,
    template: "%s · Alex Zsurzs",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: identity.fullName, url: SITE_URL }],
  creator: identity.fullName,
  publisher: identity.brand,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_ORIGIN,
    siteName: `${identity.fullName} · ${identity.brand}`,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
  manifest: "/manifest.webmanifest",
  applicationName: `${identity.fullName} · ${identity.brand}`,
  appleWebApp: {
    capable: true,
    title: identity.fullName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#2F4AA0" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F0F10" },
    { media: "(prefers-color-scheme: light)", color: "#0F0F10" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#alex-zsurzs`,
      name: identity.fullName,
      alternateName: identity.nickname,
      jobTitle: "Instalador y formador técnico",
      description: identity.bio[0],
      email: `mailto:${EMAIL}`,
      url: SITE_ORIGIN,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressCountry: "ES",
      },
      knowsAbout: [
        "Instalaciones eléctricas",
        "Fontanería",
        "Climatización",
        "Trabajos verticales",
        "Aerotermia",
        "Formación técnica",
      ],
      sameAs: socials.map((social) => social.href),
      worksFor: { "@id": `${SITE_ORIGIN}/#z-solutions` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#z-solutions`,
      name: identity.brand,
      legalName: company.legalName,
      taxID: company.taxId,
      url: SITE_URL,
      slogan: identity.lema,
      email: `mailto:${company.email}`,
      founder: { "@id": `${SITE_ORIGIN}/#alex-zsurzs` },
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressRegion: company.address.region,
        addressCountry: "ES",
      },
      sameAs: socials.map((social) => social.href),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_ORIGIN}/#negocio`,
      name: `${identity.brand} — ${identity.fullName}`,
      description: seo.description,
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      telephone: PHONE,
      areaServed: "Barcelona, España",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressRegion: company.address.region,
        addressCountry: "ES",
      },
      knowsLanguage: ["es"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={righteous.variable}>
      <head>
        <link rel="preconnect" href="https://alexzsurzs.com" />
        <link rel="dns-prefetch" href="https://alexzsurzs.com" />
      </head>
      <body>
        <noscript>
          {/* Sin JavaScript no hay quien retire el preloader ni el desenfoque
              de carga de next/image: los quitamos desde CSS. */}
          <style>{`.preloader{display:none!important}img[data-nimg]{background-image:none!important}`}</style>
        </noscript>

        <script
          type="application/ld+json"
          // El JSON-LD es estático y se genera desde site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>

        <HydrationFlag />
        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        <Header />

        {children}

        <Footer />

        <CookieNotice />
        <Analytics />

        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
