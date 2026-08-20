import Link from "next/link";

import Container from "@/components/Container";
import { getProducts } from "@/lib/strapi";

export const metadata = {
  title: "محصولات",
  description: "محصولات و تجهیزات تکنو ماشین صنعت برای صنایع معدنی و صنعتی.",
};

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <Container>
          <div className="relative py-14 md:py-18">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  تکنو ماشین صنعت
                </span>
              </div>

              <h1 className="text-4xl font-black leading-[1.35] text-white md:text-5xl">
                محصولات و تجهیزات
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
                مجموعه‌ای از ماشین‌آلات و تجهیزات تخصصی مورد استفاده در صنایع
                معدنی و صنعتی، با تمرکز بر کیفیت، عملکرد و راهکارهای متناسب با
                نیاز پروژه.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
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

              {/* Product Grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.documentId}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
                  >
                    {/* Image */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="block"
                      aria-label={`مشاهده ${product.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
                        {product.image ? (
                          <img
                            src={`${STRAPI_URL}${product.image.url}`}
                            alt={product.image.alternativeText || product.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="relative flex h-full items-center justify-center">
                            <div className="absolute h-44 w-44 rounded-full border border-brand-gold/10" />

                            <div className="absolute h-32 w-32 rounded-full border border-brand-gold/10" />

                            <span className="relative text-7xl font-black tracking-tighter text-brand-gold/20 transition-transform duration-500 group-hover:scale-110">
                              TM
                            </span>
                          </div>
                        )}

                        {/* Featured Badge */}
                        {product.featured && (
                          <span className="absolute right-4 top-4 rounded-sm bg-brand-gold px-3 py-1.5 text-[11px] font-black text-brand-black shadow-lg">
                            محصول ویژه
                          </span>
                        )}

                        {/* Hover Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-brand-black/0 transition-colors duration-300 group-hover:bg-brand-black/10" />
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-brand-black transition-colors group-hover:text-brand-gold">
                        {product.title}
                      </h3>

                      {product.shortDescription && (
                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                          {product.shortDescription}
                        </p>
                      )}

                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
                        <Link
                          href={`/products/${product.slug}`}
                          className="inline-flex items-center text-sm font-black text-brand-black transition-colors hover:text-brand-gold"
                        >
                          مشاهده محصول
                          <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                          </span>
                        </Link>

                        <Link
                          href={`/contact?product=${encodeURIComponent(
                            product.title,
                          )}`}
                          className="text-xs font-bold text-gray-400 transition-colors hover:text-brand-gold"
                        >
                          استعلام قیمت
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Bottom CTA */}
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
