import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({ url: `${site.url}/servicios/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
