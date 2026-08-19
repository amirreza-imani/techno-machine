import type { Product, StrapiResponse } from "@/types/product";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Failed to fetch products:", response.status, errorText);

      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    const result: StrapiResponse<Product[]> = await response.json();

    return result.data;
  } catch (error) {
    console.error("Strapi products fetch error:", error);
    return [];
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();

  return products.filter((product) => product.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const url =
      `${STRAPI_URL}/api/products` +
      `?filters[slug][$eq]=${encodeURIComponent(slug)}` +
      `&populate=*`;

    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        `Failed to fetch product "${slug}".`,
        response.status,
        errorText,
      );

      throw new Error(
        `Failed to fetch product "${slug}". Status: ${response.status}`,
      );
    }

    const result: StrapiResponse<Product[]> = await response.json();

    return result.data[0] || null;
  } catch (error) {
    console.error("Strapi product fetch error:", error);
    return null;
  }
}

export type SiteSettings = {
  phone: string | null;
  email: string | null;
  address: string | null;
  workingHours: string | null;
  footerDescription: string | null;
  instagram: string | null;
  telegram: string | null;
  whatsapp: string | null;
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/site-settings`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Failed to fetch site settings:",
        response.status,
        response.statusText,
      );

      return null;
    }

    const json = await response.json();

    if (!json.data) {
      return null;
    }

    return json.data;
  } catch (error) {
    console.error("Failed to fetch site settings:", error);

    return null;
  }
}
