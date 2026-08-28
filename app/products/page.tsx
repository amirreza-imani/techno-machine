import Link from "next/link";

import Container from "@/components/Container";
import { getProducts } from "@/lib/strapi";
import ProductsList from "@/components/products/ProductList";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "محصولات و تجهیزات",
  description:
    "معرفی ماشین‌آلات و تجهیزات صنعتی و معدنی تکنو ماشین صنعت؛ شامل سنگ شکن، سرند، نوار نقاله، ماسه‌ساز و تجهیزات خطوط خردایش.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "محصولات و تجهیزات | تکنو ماشین صنعت",
    description:
      "معرفی ماشین‌آلات و تجهیزات صنعتی و معدنی تکنو ماشین صنعت برای پروژه‌های خردایش و فرآوری.",
    type: "website",
    url: "/products",
    images: [
      {
        url: "/images/products.jpg",
        width: 1200,
        height: 630,
        alt: "محصولات و تجهیزات تکنو ماشین صنعت",
      },
    ],
  },
};

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default async function ProductsPage() {
  const products = await getProducts();

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
          },
        ]}
      />

      {/* =========================
          Hero
      ========================== */}

      <section className="relative overflow-hidden bg-brand-black text-white">
        {/* Decorative background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        />

        <Container>
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[480px_1fr] lg:gap-20">
            {/* Image - LEFT */}

            <div className="order-1 flex justify-start">
              <div className="relative h-[280px] w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl md:h-[330px]">
                <img
                  src="/images/products.jpg"
                  alt="محصولات و تجهیزات تکنو ماشین صنعت"
                  className="h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 rounded-2xl border border-brand-gold/30"
                />

                <div className="absolute bottom-5 right-5 rounded-lg border border-white/10 bg-brand-black/70 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-bold text-brand-gold">
                    محصولات تکنو ماشین
                  </span>
                </div>
              </div>
            </div>

            {/* Content - RIGHT */}

            <div className="order-2">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  تکنو ماشین صنعت
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.3] text-white md:text-5xl lg:text-6xl">
                محصولات و تجهیزات
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                مجموعه‌ای از ماشین‌آلات و تجهیزات تخصصی مورد استفاده در صنایع
                معدنی و صنعتی، با تمرکز بر کیفیت، عملکرد و راهکارهای متناسب با
                نیاز پروژه.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          Products
      ========================== */}

      <section className="bg-[#f7f7f5] py-14 md:py-18">
        <Container>
          {products.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-black text-xl font-black text-brand-gold">
                TM
              </div>

              <h2 className="mt-5 text-xl font-black text-brand-black">
                محصولی برای نمایش وجود ندارد
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                در حال حاضر محصولی در سیستم ثبت نشده است. لطفاً بعداً دوباره
                مراجعه کنید.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-brand-gold px-6 text-sm font-black text-brand-black transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light"
              >
                تماس با ما
              </Link>
            </div>
          ) : (
            <>
              {/* Section Header */}

              <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-sm font-bold text-brand-gold">
                    محصولات
                  </span>

                  <h2 className="mt-2 text-2xl font-black text-brand-black md:text-3xl">
                    محصولات تکنو ماشین
                  </h2>
                </div>

                <div className="text-sm text-gray-400">
                  {products.length} محصول
                </div>
              </div>

              <ProductsList products={products} strapiUrl={STRAPI_URL} />
            </>
          )}
        </Container>
      </section>

      {/* =========================
          Bottom CTA
      ========================== */}

      <section className="bg-brand-black py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold text-brand-gold">
                راهکار متناسب با پروژه شما
              </span>

              <h2 className="mt-2 text-xl font-black text-white md:text-2xl">
                محصول مناسب پروژه خود را پیدا نکردید؟
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-brand-gold px-6 text-sm font-black text-brand-black transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light"
            >
              درخواست مشاوره
              <span className="mr-3">←</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
