import type { MetadataRoute } from "next";
import { policies } from "@/data/policies";
import { getSiteUrl } from "@/lib/format";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  return [
    { url, changeFrequency: "weekly", priority: 1 },
    ...policies.map((policy) => ({ url: `${url}/politicas/${policy.slug}`, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
