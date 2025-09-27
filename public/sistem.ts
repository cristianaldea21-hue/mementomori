// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mementomori-psi.vercel.app"; // domeniul tău
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/servicii`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sicrie`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/recomandari`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/gdpr`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
