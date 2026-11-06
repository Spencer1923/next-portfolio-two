import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // One page for now. Add more entries here if you ever add pages.
  return [{ url: site.url }];
}