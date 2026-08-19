import type { Product, StrapiResponse } from "@/types/product";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/products`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
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
    const response = await fetch(
      `${STRAPI_URL}/api/products?filters[slug][$eq]=${encodeURIComponent(
        slug,
      )}`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
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
