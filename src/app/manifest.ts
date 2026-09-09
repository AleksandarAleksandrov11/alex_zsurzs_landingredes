import type { MetadataRoute } from "next";
import { identity, seo } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${identity.fullName} · ${identity.brand}`,
    short_name: identity.lastName,
    description: seo.description,
    lang: "es",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0F0F10",
    theme_color: "#0F0F10",
    categories: ["business", "education", "productivity"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
