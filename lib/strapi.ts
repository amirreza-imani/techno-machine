import type { Product, StrapiResponse } from "@/types/product";
import type { Part } from "@/types/part";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/* =========================================================
   Products
   ========================================================= */

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

/* =========================================================
   Parts
   ========================================================= */

export async function getParts(): Promise<Part[]> {
  try {
    const url = `${STRAPI_URL}/api/part?populate=image&pagination[pageSize]=100`;

    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Failed to fetch parts:", response.status, errorText);

      throw new Error(`Failed to fetch parts. Status: ${response.status}`);
    }

    const result = await response.json();

    console.log("PARTS RESPONSE:", JSON.stringify(result, null, 2));

    return result.data ?? [];
  } catch (error) {
    console.error("Strapi parts fetch error:", error);

    return [];
  }
}

export async function getPartBySlug(slug: string): Promise<Part | null> {
  try {
    const url =
      `${STRAPI_URL}/api/part` +
      `?filters[slug][$eq]=${encodeURIComponent(slug)}` +
      `&populate=image`;

    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        `Failed to fetch part "${slug}".`,
        response.status,
        errorText,
      );

      throw new Error(
        `Failed to fetch part "${slug}". Status: ${response.status}`,
      );
    }

    const result = await response.json();

    console.log("PART BY SLUG RESPONSE:", JSON.stringify(result, null, 2));

    return result.data?.[0] ?? null;
  } catch (error) {
    console.error("Strapi part error:", error);

    return null;
  }
}

/* =========================================================
   Site Settings
   ========================================================= */

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
