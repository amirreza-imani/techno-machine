import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import Container from "@/components/Container";
import JsonLd from "@/components/seo/JsonLd";
import { getProducts } from "@/lib/strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/* =========================================================
   Metadata
========================================================= */

export const metadata: Metadata = {
  title: "تکنو ماشین صنعت | ماشین‌آلات و تجهیزات صنعتی و معدنی",

  description:
    "تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای صنایع معدنی و صنعتی همراه با خدمات فنی و مهندسی و راهکارهای متناسب با نیاز پروژه.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "تکنو ماشین صنعت | ماشین‌آلات و تجهیزات صنعتی و معدنی",

    description:
      "تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای صنایع معدنی و صنعتی.",

    type: "website",

    url: SITE_URL,

    locale: "fa_IR",

    siteName: "تکنو ماشین صنعت",

    images: [
      {
        url: `${SITE_URL}/images/IMG_5071.PNG`,
        alt: "لوگوی تکنو ماشین صنعت",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "تکنو ماشین صنعت | ماشین‌آلات و تجهیزات صنعتی و معدنی",

    description:
      "تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای صنایع معدنی و صنعتی.",

    images: [`${SITE_URL}/images/IMG_5071.PNG`],
  },
};

/* =========================================================
   Helpers
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
   Home
========================================================= */

export default async function Home() {
  const products = await getProducts();

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  /* =========================================================
     JSON-LD
  ========================================================= */

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${SITE_URL}/#organization`,

    name: "تکنو ماشین صنعت",

    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/IMG_5071.PNG`,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    name: "تکنو ماشین صنعت",

    url: SITE_URL,

    inLanguage: "fa-IR",

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />

      <JsonLd data={websiteJsonLd} />

      <main dir="rtl">
        {/* =========================================================
            Hero
        ========================================================= */}

        <section
          aria-labelledby="home-hero-title"
          className="relative overflow-hidden bg-brand-black"
        >
          {/* Decorative elements */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-charcoal blur-3xl"
          />

          <Container>
            <div className="grid min-h-[calc(100vh-180px)] items-center gap-10 py-12 lg:grid-cols-2 lg:py-14">
              {/* Hero Content */}

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-brand-gold"
                  />

                  <span className="text-sm font-bold text-brand-gold">
                    تکنو ماشین
                  </span>
                </div>

                <h1
                  id="home-hero-title"
                  className="max-w-3xl text-4xl font-black leading-[1.3] text-white sm:text-5xl lg:text-6xl"
                >
                  تولید کننده
                  <span className="block text-brand-gold">
                    ماشین‌آلات و تجهیزات معدنی
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                  گروه صنعتی تکنو ماشین با ۳۰ سال سابقه‌ی درخشان در زمینه تولید
                  و تأمین ماشین‌آلات، تجهیزات و قطعات خطوط خردایش، انتقال و
                  دانه‌بندی معادن فعالیت می‌کند. این مجموعه با بهره‌گیری از
                  نیروهای مجرب در بخش‌های طراحی، مهندسی و تولید، آماده ارائه
                  محصولات و تجهیزات مورد نیاز معادن و صنایع مرتبط می‌باشد.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products"
                    className="inline-flex h-12 items-center justify-center rounded-sm bg-brand-gold px-7 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
                    aria-label="مشاهده محصولات و ماشین‌آلات تکنو ماشین"
                  >
                    مشاهده محصولات
                    <span aria-hidden="true" className="mr-3">
                      ←
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-7 text-sm font-bold !text-white transition-all duration-300 hover:border-brand-gold hover:!text-brand-gold"
                    aria-label="تماس با تکنو ماشین و دریافت استعلام قیمت"
                  >
                    استعلام قیمت
                  </Link>
                </div>

                {/* Stats */}

                <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
                  <div>
                    <div className="text-2xl font-black text-white">۱۰+</div>

                    <div className="mt-1 text-xs text-white/40">سال تجربه</div>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-white">۵۰+</div>

                    <div className="mt-1 text-xs text-white/40">
                      پروژه صنعتی
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-white">۲۴/۷</div>

                    <div className="mt-1 text-xs text-white/40">پشتیبانی</div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}

              <div className="relative hidden lg:block">
                <div className="relative mx-auto aspect-square max-w-[440px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-8 rotate-3 border border-brand-gold/20"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border border-white/10 bg-brand-charcoal/60">
                      <div
                        aria-hidden="true"
                        className="absolute h-[280px] w-[280px] rounded-full border border-brand-gold/10"
                      />

                      <div className="text-center">
                        <Image
                          src="/images/IMG_5071.PNG"
                          alt="لوگوی تکنو ماشین صنعت"
                          width={192}
                          height={192}
                          priority
                          className="mx-auto h-auto w-48 object-contain"
                        />

                        <div className="mt-2 text-xs font-bold tracking-[0.3em] text-white/30">
                          INDUSTRIAL SOLUTIONS
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating label */}

                  <div className="absolute right-0 top-20 border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                    <div className="text-[10px] text-white/40">تخصص</div>

                    <div className="mt-1 text-sm font-bold text-white">
                      مهندسی صنعتی
                    </div>
                  </div>

                  {/* Floating label */}

                  <div className="absolute bottom-16 left-0 border border-brand-gold/20 bg-brand-gold/10 px-5 py-3 backdrop-blur-sm">
                    <div className="text-[10px] text-brand-gold/70">راهکار</div>

                    <div className="mt-1 text-sm font-bold text-brand-gold">
                      از تأمین تا اجرا
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            Intro
        ========================================================= */}

        <section
          aria-labelledby="about-intro-title"
          className="bg-surface-soft py-16 transition-colors duration-300 md:py-20"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-brand-gold" />

                  <span className="text-sm font-bold text-brand-gold">
                    درباره تکنو ماشین
                  </span>
                </div>

                <h2
                  id="about-intro-title"
                  className="max-w-xl text-3xl font-black leading-[1.4] text-foreground md:text-4xl"
                >
                  تخصص صنعتی،
                  <span className="block">راهکار قابل اعتماد.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-foreground-soft md:text-base">
                  تکنو ماشین صنعت در زمینه تأمین ماشین‌آلات، قطعات و تجهیزات
                  تخصصی برای صنایع معدنی و صنعتی فعالیت می‌کند. تمرکز ما ارائه
                  راهکارهای مطمئن، تخصصی و متناسب با نیاز واقعی هر پروژه است.
                </p>

                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center text-sm font-black text-foreground transition-colors hover:text-brand-gold"
                >
                  بیشتر درباره ما
                  <span aria-hidden="true" className="mr-3">
                    ←
                  </span>
                </Link>
              </div>

              {/* Values */}

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="border-r-2 border-brand-gold bg-surface px-6 py-5 shadow-sm transition-colors duration-300">
                  <h3 className="text-lg font-black text-foreground">تخصص</h3>

                  <p className="mt-1 text-xs leading-6 text-muted">
                    شناخت نیازهای فنی و صنعتی پروژه
                  </p>
                </div>

                <div className="border-r-2 border-brand-gold bg-surface px-6 py-5 shadow-sm transition-colors duration-300">
                  <h3 className="text-lg font-black text-foreground">کیفیت</h3>

                  <p className="mt-1 text-xs leading-6 text-muted">
                    تمرکز بر تجهیزات و راهکارهای قابل اعتماد
                  </p>
                </div>

                <div className="border-r-2 border-brand-gold bg-surface px-6 py-5 shadow-sm transition-colors duration-300">
                  <h3 className="text-lg font-black text-foreground">
                    پشتیبانی
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-muted">
                    همراهی از تأمین تا اجرای راهکار
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            Services
        ========================================================= */}

        <section
          aria-labelledby="services-title"
          className="bg-background py-16 transition-colors duration-300 md:py-20"
        >
          <Container>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-brand-gold" />

                  <span className="text-sm font-bold text-brand-gold">
                    خدمات و توانمندی‌ها
                  </span>
                </div>

                <h2
                  id="services-title"
                  className="max-w-2xl text-3xl font-black leading-[1.4] text-foreground md:text-4xl"
                >
                  راهکار تخصصی،
                  <span className="block text-brand-gold">
                    از تأمین تا اجرا
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-muted">
                مجموعه‌ای از خدمات تخصصی برای تأمین تجهیزات، قطعات و ارائه
                راهکارهای فنی متناسب با نیاز پروژه‌های صنعتی و معدنی.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "۰۱",
                  title: "تأمین ماشین‌آلات",
                  description:
                    "تأمین ماشین‌آلات و تجهیزات تخصصی مورد نیاز صنایع معدنی و صنعتی با تمرکز بر انتخاب راهکار مناسب.",
                },
                {
                  number: "۰۲",
                  title: "تأمین قطعات",
                  description:
                    "تأمین قطعات و تجهیزات مورد نیاز ماشین‌آلات صنعتی با توجه به مشخصات فنی و نیاز واقعی پروژه.",
                },
                {
                  number: "۰۳",
                  title: "خدمات فنی و مهندسی",
                  description:
                    "ارائه مشاوره و راهکارهای فنی و مهندسی برای انتخاب و استفاده صحیح از تجهیزات متناسب با پروژه.",
                },
                {
                  number: "۰۴",
                  title: "پشتیبانی و مشاوره",
                  description:
                    "همراهی و پشتیبانی تخصصی در مسیر انتخاب، تأمین و اجرای راهکارهای مورد نیاز پروژه.",
                },
              ].map((service) => (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-sm border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="text-xs font-bold tracking-wider text-brand-gold">
                      {service.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-2xl text-muted/30 transition-colors duration-300 group-hover:text-brand-gold/50"
                    >
                      ◇
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            Products
        ========================================================= */}

        <section
          aria-labelledby="products-title"
          className="bg-surface-soft py-20 transition-colors duration-300"
        >
          <Container>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold text-brand-gold">
                  محصولات
                </span>

                <h2
                  id="products-title"
                  className="mt-2 text-3xl font-black text-foreground"
                >
                  محصولات منتخب
                </h2>
              </div>

              <Link
                href="/products"
                className="text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
              >
                مشاهده همه محصولات
                <span aria-hidden="true"> ←</span>
              </Link>
            </div>

            {featuredProducts.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((product) => {
                  const imageUrl = getStrapiMediaUrl(product.image?.url);

                  return (
                    <article
                      key={product.documentId}
                      className="group overflow-hidden rounded-xl border border-border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        aria-label={`مشاهده ${product.title}`}
                        className="block"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-white dark:bg-brand-charcoal">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={
                                product.image?.alternativeText ||
                                `تصویر ${product.title}`
                              }
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Image
                                src="/images/IMG_5071.PNG"
                                alt="تکنو ماشین صنعت"
                                width={220}
                                height={220}
                                className="h-auto w-full max-w-[220px] object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </Link>

                      <div className="p-6">
                        {product.featured && (
                          <span className="text-xs font-bold text-brand-gold">
                            محصول ویژه
                          </span>
                        )}

                        <h3 className="mt-2 text-xl font-black text-foreground">
                          {product.title}
                        </h3>

                        {product.shortDescription && (
                          <p className="mt-3 line-clamp-2 text-sm leading-7 text-foreground-soft">
                            {product.shortDescription}
                          </p>
                        )}

                        <Link
                          href={`/products/${product.slug}`}
                          aria-label={`جزئیات محصول ${product.title}`}
                          className="mt-5 inline-flex text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
                        >
                          مشاهده محصول
                          <span aria-hidden="true" className="mr-2">
                            ←
                          </span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-border-theme bg-surface p-8 text-center">
                <p className="text-sm text-muted">
                  محصولات به‌زودی در سایت قرار خواهند گرفت.
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* =========================================================
            Why Us
        ========================================================= */}

        <section
          aria-labelledby="why-us-title"
          className="bg-background py-16 transition-colors duration-300 md:py-20"
        >
          <Container>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold text-brand-gold">
                  چرا تکنو ماشین؟
                </span>

                <h2
                  id="why-us-title"
                  className="mt-2 text-3xl font-black text-foreground"
                >
                  یک همراه تخصصی برای پروژه‌های صنعتی
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-muted">
                از انتخاب تجهیزات مناسب تا تأمین قطعات و پشتیبانی فنی، در کنار
                شما هستیم تا راهکار مناسب پروژه‌تان را پیدا کنیم.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="group rounded-xl border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-black text-lg font-black text-brand-gold">
                  01
                </div>

                <h3 className="mt-5 text-xl font-black text-foreground">
                  تخصص فنی
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  شناخت نیازهای فنی صنایع و ارائه تجهیزات و قطعات متناسب با
                  شرایط واقعی هر پروژه.
                </p>
              </article>

              <article className="group rounded-xl border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-black text-lg font-black text-brand-gold">
                  02
                </div>

                <h3 className="mt-5 text-xl font-black text-foreground">
                  تأمین مطمئن
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  تمرکز بر تأمین ماشین‌آلات، قطعات و تجهیزات صنعتی با کیفیت و
                  متناسب با نیاز پروژه.
                </p>
              </article>

              <article className="group rounded-xl border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-black text-lg font-black text-brand-gold">
                  03
                </div>

                <h3 className="mt-5 text-xl font-black text-foreground">
                  پشتیبانی تخصصی
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  همراهی و پشتیبانی فنی برای ایجاد اطمینان بیشتر در مسیر تأمین و
                  استفاده از تجهیزات.
                </p>
              </article>
            </div>
          </Container>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}

        <section
          aria-labelledby="home-cta-title"
          className="bg-brand-black py-16"
        >
          <Container>
            <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
              <div>
                <span className="text-sm font-bold text-brand-gold">
                  آماده همکاری هستیم
                </span>

                <h2
                  id="home-cta-title"
                  className="mt-2 text-2xl font-black text-white md:text-3xl"
                >
                  برای پروژه خود به یک راهکار تخصصی نیاز دارید؟
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-brand-gold px-7 text-sm font-black text-brand-black transition-all hover:bg-brand-gold-light"
                aria-label="تماس با تکنو ماشین صنعت"
              >
                با ما در تماس باشید
                <span aria-hidden="true" className="mr-3">
                  ←
                </span>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
