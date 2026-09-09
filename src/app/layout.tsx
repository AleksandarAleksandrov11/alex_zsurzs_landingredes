import type { Metadata, Viewport } from "next";
import { Righteous } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { EMAIL, LANDING_URL, SITE_URL, identity, seo, socials } from "@/content/site";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(LANDING_URL),
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
    url: LANDING_URL,
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
};

export const viewport: Viewport = {
  themeColor: "#0F0F10",
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
      "@id": `${LANDING_URL}/#alex-zsurzs`,
      name: identity.fullName,
      alternateName: identity.nickname,
      jobTitle: "Instalador y formador técnico",
      description: identity.bio[0],
      email: `mailto:${EMAIL}`,
      url: LANDING_URL,
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
      worksFor: { "@id": `${LANDING_URL}/#z-solutions` },
    },
    {
      "@type": "Organization",
      "@id": `${LANDING_URL}/#z-solutions`,
      name: identity.brand,
      url: SITE_URL,
      slogan: identity.lema,
      founder: { "@id": `${LANDING_URL}/#alex-zsurzs` },
      sameAs: socials.map((social) => social.href),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${LANDING_URL}/#negocio`,
      name: `${identity.brand} — ${identity.fullName}`,
      description: seo.description,
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      areaServed: "Barcelona, España",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barcelona",
        addressRegion: "Cataluña",
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
      <body>
        <noscript>
          <style>{`.preloader{display:none!important}`}</style>
        </noscript>

        <script
          type="application/ld+json"
          // El JSON-LD es estático y se genera desde site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>

        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        <Header />

        {children}

        <Footer />

        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
