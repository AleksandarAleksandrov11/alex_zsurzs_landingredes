import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_ORIGIN, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_ORIGIN}/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
