import type { Metadata } from "next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import ProductGallery, {
  type GalleryImage,
} from "@/components/products/ProductGallery";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

import { getProductBySlug, getProducts } from "@/lib/strapi";
import type { Product } from "@/types/product";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/* =========================================================
   Strapi Media URL
   ========================================================= */

function getStrapiMediaUrl(url?: string | null) {
  if (!url) {
    return null;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${STRAPI_URL}${url}`;
}

/* =========================================================
   Breadcrumb Schema
   ========================================================= */

function getBreadcrumbSchema(productTitle: string, slug: string) {
  const productUrl = `${SITE_URL}/products/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "صفحه اصلی",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "محصولات",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productTitle,
        item: productUrl,
      },
    ],
  };
}

/* =========================================================
   Product Schema
   ========================================================= */

function getProductSchema(product: Product) {
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const imageUrl = getStrapiMediaUrl(product.image?.url);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,

    description:
      product.shortDescription ||
      `مشخصات و اطلاعات ${product.title} از تکنو ماشین صنعت.`,

    url: productUrl,

    ...(imageUrl
      ? {
          image: [imageUrl],
        }
      : {}),

    brand: {
      "@type": "Brand",
      name: "تکنو ماشین صنعت",
    },
  };
}

/* =========================================================
   Metadata
   ========================================================= */

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "محصول پیدا نشد",
      description: "محصول مورد نظر شما پیدا نشد.",
    };
  }

  const description =
    product.shortDescription ||
    `مشاهده مشخصات و اطلاعات ${product.title} در تکنو ماشین صنعت.`;

  const productImage = getStrapiMediaUrl(product.image?.url);

  return {
    title: product.title,

    description,

    alternates: {
      canonical: `/products/${product.slug}`,
    },

    openGraph: {
      title: product.title,
      description,
      type: "website",
      url: `/products/${product.slug}`,

      ...(productImage
        ? {
            images: [
              {
                url: productImage,
                alt: product.image?.alternativeText || product.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description,

      ...(productImage
        ? {
            images: [productImage],
          }
        : {}),
    },
  };
}

/* =========================================================
   Page
   ========================================================= */

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();

  const relatedProducts = allProducts
    .filter((item: Product) => item.slug !== product.slug)
    .slice(0, 3);

  /* =======================================================
     Product Gallery
     ======================================================= */

  const productImage = getStrapiMediaUrl(product.image?.url);

  const galleryImages: GalleryImage[] = [
    ...(productImage && product.image
      ? [
          {
            id: product.image.id,
            url: productImage,
            alternativeText: product.image.alternativeText,
          },
        ]
      : []),

    ...(product.gallery ?? []).flatMap((image) => {
      const imageUrl = getStrapiMediaUrl(image.url);

      if (!imageUrl) {
        return [];
      }

      return [
        {
          id: image.id,
          url: imageUrl,
          alternativeText: image.alternativeText,
        },
      ];
    }),
  ];

  return (
    <main dir="rtl">
      <BreadcrumbJsonLd
        items={[
          {
            name: "صفحه اصلی",
            url: "/",
          },
          {
            name: "محصولات",
            url: "/products",
          },
          {
            name: product.title,
          },
        ]}
      />
      {/* =====================================================
          SEO Structured Data
          ===================================================== */}

      <JsonLd data={getBreadcrumbSchema(product.title, product.slug)} />

      <JsonLd data={getProductSchema(product)} />

      {/* =====================================================
          Hero
          ===================================================== */}

      <section className="relative overflow-hidden bg-brand-black">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <Container>
          <div className="relative py-12 md:py-16">
            {/* Breadcrumb */}

            <nav
              aria-label="مسیر صفحه"
              className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/40"
            >
              <Link
                href="/"
                className="transition-colors hover:text-brand-gold"
              >
                صفحه اصلی
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/products"
                className="transition-colors hover:text-brand-gold"
              >
                محصولات
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-white/70">{product.title}</span>
            </nav>

            <div className="max-w-4xl">
              {product.featured && (
                <span className="mb-4 inline-flex rounded-sm bg-brand-gold px-3 py-1.5 text-[11px] font-black text-brand-black">
                  محصول ویژه
                </span>
              )}

              <h1 className="text-3xl font-black leading-[1.4] text-white md:text-5xl">
                {product.title}
              </h1>

              {product.shortDescription && (
                <p className="mt-5 max-w-3xl text-sm leading-8 text-white/60 md:text-base">
                  {product.shortDescription}
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          Main Product
          ===================================================== */}

      <section className="bg-background py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            {/* Product Gallery */}

            <div className="overflow-hidden rounded-2xl border border-border-theme bg-surface shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden light:bg-white dark:bg-brand-charcoal">
                <ProductGallery images={galleryImages} title={product.title} />
              </div>

              {galleryImages.length === 0 && (
                <div className="border-t border-border-soft bg-surface px-5 py-4 text-center text-xs text-muted">
                  تصویر محصول به‌زودی اضافه می‌شود.
                </div>
              )}
            </div>

            {/* Product Information */}

            <div className="rounded-2xl border border-border-theme bg-surface p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  معرفی محصول
                </span>
              </div>

              <h2 className="text-2xl font-black text-foreground md:text-3xl">
                {product.title}
              </h2>

              {product.shortDescription && (
                <p className="mt-5 text-sm leading-8 text-foreground-soft">
                  {product.shortDescription}
                </p>
              )}

              {/* CTA */}

              <div className="mt-8 rounded-xl border border-border-theme bg-gradient-to-br from-[#f5f5f2] to-white p-6 shadow-sm dark:border-white/10 dark:from-brand-black dark:to-[#171717]">
                <div className="text-sm font-black text-foreground">
                  برای این محصول استعلام قیمت بگیرید
                </div>

                <p className="mt-2 text-xs leading-6 text-muted">
                  برای دریافت قیمت و اطلاعات بیشتر، درخواست خود را ثبت کنید تا
                  کارشناسان ما با شما تماس بگیرند.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      product.title,
                    )}`}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-brand-gold px-6 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
                  >
                    استعلام قیمت
                    <span className="mr-3">←</span>
                  </Link>

                  <Link
                    href={`/parts?product=${encodeURIComponent(product.title)}`}
                    className="inline-flex h-11 items-center justify-center rounded-md border border-brand-gold px-6 text-sm font-black text-brand-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-black"
                  >
                    قطعات {product.title}
                    <span className="mr-3">←</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          Full Product Description
          ===================================================== */}

      <section className="bg-surface-soft py-12 md:py-16">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                توضیحات محصول
              </span>
            </div>

            <div className="rounded-2xl border border-border-theme bg-surface p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-foreground md:text-3xl">
                درباره {product.title}
              </h2>

              <div className="mt-6 text-sm leading-9 text-foreground-soft md:text-base">
                {product.description ? (
                  <BlocksRenderer content={product.description} />
                ) : (
                  product.shortDescription
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          Gallery
          ===================================================== */}

      {product.gallery && product.gallery.length > 0 && (
        <section className="bg-surface py-12 md:py-16">
          <Container>
            <div className="mb-8">
              <span className="text-sm font-bold text-brand-gold">تصاویر</span>

              <h2 className="mt-2 text-2xl font-black text-foreground">
                تصاویر محصول
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((image) => {
                const imageUrl = getStrapiMediaUrl(image.url);

                if (!imageUrl) {
                  return null;
                }

                return (
                  <div
                    key={image.id}
                    className="group overflow-hidden rounded-xl border border-border-theme bg-surface-soft"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={image.alternativeText || product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* =====================================================
          Related Products
          ===================================================== */}

      {relatedProducts.length > 0 && (
        <section className="bg-surface-soft py-12 md:py-16">
          <Container>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold text-brand-gold">
                  محصولات دیگر
                </span>

                <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
                  محصولات مرتبط
                </h2>
              </div>

              <Link
                href="/products"
                className="text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
              >
                مشاهده همه محصولات ←
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item: Product) => {
                const imageUrl = getStrapiMediaUrl(item.image?.url);

                return (
                  <article
                    key={item.documentId}
                    className="group overflow-hidden rounded-xl border border-border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg"
                  >
                    <Link
                      href={`/products/${item.slug}`}
                      className="block"
                      aria-label={`مشاهده ${item.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden light:bg-white dark:bg-brand-charcoal">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={item.image?.alternativeText || item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <span className="text-6xl font-black text-brand-gold/20">
                              TM
                            </span>
                          </div>
                        )}

                        {item.featured && (
                          <span className="absolute right-4 top-4 rounded-sm bg-brand-gold px-3 py-1.5 text-[11px] font-black text-brand-black">
                            محصول ویژه
                          </span>
                        )}
                      </div>
                    </Link>

                    <div className="p-5">
                      <h3 className="text-lg font-black text-foreground">
                        {item.title}
                      </h3>

                      {item.shortDescription && (
                        <p className="mt-3 line-clamp-2 text-sm leading-7 text-foreground-soft">
                          {item.shortDescription}
                        </p>
                      )}

                      <Link
                        href={`/products/${item.slug}`}
                        className="mt-5 inline-flex text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
                      >
                        مشاهده محصول
                        <span className="mr-2">←</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* =====================================================
          Bottom CTA
          ===================================================== */}

      <section className="bg-[#f3f3f0] py-11 dark:bg-brand-black">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold text-brand-gold">
                تکنو ماشین صنعت
              </span>

              <h2 className="mt-2 text-xl font-black text-brand-black md:text-2xl dark:text-white">
                محصولات دیگر را هم بررسی کنید
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md border border-brand-black/20 px-6 text-sm font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold dark:border-white/20 dark:text-white"
            >
              مشاهده محصولات
              <span className="mr-3">←</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
