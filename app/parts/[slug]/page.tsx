import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import { getPartBySlug } from "@/lib/strapi";
import JsonLd from "@/components/seo/JsonLd";

interface PartPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function PartPage({ params }: PartPageProps) {
  const { slug } = await params;

  const part = await getPartBySlug(slug);

  if (!part) {
    notFound();
  }

  const imageUrl = part.image?.url
    ? part.image.url.startsWith("http")
      ? part.image.url
      : `${STRAPI_URL}${part.image.url}`
    : null;

  const partUrl = `${SITE_URL}/parts/${part.slug}`;

  const breadcrumbJsonLd = {
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
        name: "قطعات",
        item: `${SITE_URL}/parts`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: part.title,
        item: partUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <main dir="rtl">
        {/* Hero */}
        <section className="bg-brand-black py-16 text-white md:py-24">
          <Container>
            <div className="max-w-4xl">
              <Link
                href="/parts"
                className="mb-8 inline-flex items-center text-sm font-semibold text-white/50 transition-colors hover:text-brand-gold"
              >
                <span className="ml-2">→</span>
                بازگشت به قطعات
              </Link>

              <span className="mb-4 block text-sm font-bold text-brand-gold">
                قطعات ماشین‌آلات
              </span>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                {part.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
                {part.shortDescription}
              </p>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="bg-surface-soft py-16 transition-colors duration-300 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl border border-border-theme light:white dark:bg-brand-charcoal">
                <div className="relative aspect-[4/3]">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={part.image?.alternativeText || `تصویر ${part.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-7xl font-black text-brand-gold/20">
                        TM
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Information */}
              <div className="rounded-2xl border border-border-theme bg-surface p-7 shadow-sm md:p-9">
                <span className="text-sm font-bold text-brand-gold">
                  مشخصات قطعه
                </span>

                <h2 className="mt-3 text-2xl font-black text-foreground md:text-3xl">
                  {part.title}
                </h2>

                <div className="mt-7 h-px bg-border-theme" />

                <div className="mt-7">
                  <h3 className="text-base font-black text-foreground">
                    توضیحات
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-muted md:text-base">
                    {part.shortDescription}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/contact?part=${encodeURIComponent(part.title)}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-gold px-7 text-sm font-bold text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
                  >
                    استعلام و تأمین قطعه
                    <span className="mr-3">←</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-[#f3f3f0] py-16 text-brand-black transition-colors duration-300 dark:bg-brand-black dark:text-white md:py-20">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="text-sm font-bold text-brand-gold">
                  نیاز به این قطعه دارید؟
                </span>

                <h2 className="mt-2 text-2xl font-black md:text-3xl">
                  برای استعلام و تأمین قطعه با ما در تماس باشید.
                </h2>
              </div>

              <Link
                href={`/contact?part=${encodeURIComponent(part.title)}`}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-brand-gold px-7 text-sm font-bold text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
              >
                تماس با ما
                <span className="mr-3">←</span>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
