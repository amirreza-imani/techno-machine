import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://YOUR-DOMAIN.ir";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/parts`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products
    .filter((product) => product.slug)
    .map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticPages, ...productPages];
}
