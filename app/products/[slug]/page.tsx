import type { Metadata } from "next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import ProductGallery, {
  type GalleryImage,
} from "@/components/products/ProductGallery";

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
   Static Params
   ========================================================= */

export async function generateStaticParams() {
  try {
    const products = await getProducts();

    return products
      .filter((product) => product.slug)
      .map((product) => ({
        slug: product.slug,
      }));
  } catch {
    return [];
  }
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    product.shortDescription?.trim() ||
    `مشاهده مشخصات، تصاویر و اطلاعات ${product.title} در تکنو ماشین.`;

  const productImage = getStrapiMediaUrl(product.image?.url);

  const canonicalUrl = `${SITE_URL}/products/${product.slug}`;

  return {
    title: product.title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: product.title,
      description,
      url: canonicalUrl,
      siteName: "تکنو ماشین",
      locale: "fa_IR",
      type: "website",

      ...(productImage
        ? {
            images: [
              {
                url: productImage,
                alt: product.image?.alternativeText?.trim() || product.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: productImage ? "summary_large_image" : "summary",
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
   JSON-LD
   ========================================================= */

function ProductJsonLd({
  product,
  productImage,
}: {
  product: Product;
  productImage: string | null;
}) {
  const productUrl = `${SITE_URL}/products/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.title,

    description:
      product.shortDescription?.trim() ||
      `مشاهده اطلاعات و مشخصات ${product.title} در تکنو ماشین.`,

    url: productUrl,

    ...(productImage
      ? {
          image: [productImage],
        }
      : {}),

    brand: {
      "@type": "Brand",
      name: "تکنو ماشین",
    },

    manufacturer: {
      "@type": "Organization",
      name: "تکنو ماشین",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

/* =========================================================
   Breadcrumb JSON-LD
   ========================================================= */

function BreadcrumbJsonLd({ product }: { product: Product }) {
  const items = [
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
      name: product.title,
      item: `${SITE_URL}/products/${product.slug}`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
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
     Gallery
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
      {/* =====================================================
          SEO Structured Data
          ===================================================== */}

      <ProductJsonLd product={product} productImage={productImage} />

      <BreadcrumbJsonLd product={product} />

      {/* =====================================================
          Hero
          ===================================================== */}

      <section className="relative overflow-hidden bg-brand-black">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        />

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
                    <span className="mr-3" aria-hidden="true">
                      ←
                    </span>
                  </Link>

                  <Link
                    href={`/parts?product=${encodeURIComponent(product.title)}`}
                    className="inline-flex h-11 items-center justify-center rounded-md border border-brand-gold px-6 text-sm font-black text-brand-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-black"
                  >
                    قطعات {product.title}
                    <span className="mr-3" aria-hidden="true">
                      ←
                    </span>
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

            <article className="rounded-2xl border border-border-theme bg-surface p-6 shadow-sm md:p-8">
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
            </article>
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
                تصاویر {product.title}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((image) => {
                const imageUrl = getStrapiMediaUrl(image.url);

                if (!imageUrl) {
                  return null;
                }

                return (
                  <figure
                    key={image.id}
                    className="group overflow-hidden rounded-xl border border-border-theme bg-surface-soft"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={
                          image.alternativeText?.trim() ||
                          `${product.title} - تصویر محصول`
                        }
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </figure>
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
              {relatedProducts.map((item) => {
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
                            alt={
                              item.image?.alternativeText?.trim() || item.title
                            }
                            loading="lazy"
                            decoding="async"
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
                        <span className="mr-2" aria-hidden="true">
                          ←
                        </span>
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
                تکنو ماشین
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
              <span className="mr-3" aria-hidden="true">
                ←
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
