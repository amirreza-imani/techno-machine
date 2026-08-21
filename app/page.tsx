import Link from "next/link";

import Container from "@/components/Container";
import { getProducts } from "@/lib/strapi";

export default async function Home() {
  const products = await getProducts();

  return (
    <main dir="rtl">
      {/* =========================================================
          Hero
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-black">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-charcoal blur-3xl" />

        <Container>
          <div className="grid min-h-[calc(100vh-180px)] items-center gap-10 py-12 lg:grid-cols-2 lg:py-14">
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  تکنو ماشین صنعت
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.3] text-white sm:text-5xl lg:text-6xl">
                راهکارهای تخصصی
                <span className="block text-brand-gold">
                  ماشین‌آلات و تجهیزات صنعتی
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای صنایع معدنی و
                صنعتی، همراه با خدمات فنی و مهندسی و پشتیبانی تخصصی.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-brand-gold px-7 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
                >
                  مشاهده محصولات
                  <span className="mr-3">←</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-7 text-sm font-bold !text-white transition-all duration-300 hover:border-brand-gold hover:!text-brand-gold"
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

                  <div className="mt-1 text-xs text-white/40">پروژه صنعتی</div>
                </div>

                <div>
                  <div className="text-2xl font-black text-white">۲۴/۷</div>

                  <div className="mt-1 text-xs text-white/40">پشتیبانی</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-[440px]">
                {/* Outer frame */}
                <div className="absolute inset-8 rotate-3 border border-brand-gold/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border border-white/10 bg-brand-charcoal/60">
                    <div className="absolute h-[280px] w-[280px] rounded-full border border-brand-gold/10" />

                    <div className="text-center">
                      <img
                        src="/images/IMG_5071.PNG"
                        alt="تکنو ماشین صنعت"
                        className="h-auto w-48 object-contain"
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
      <section className="bg-surface-soft py-16 transition-colors duration-300 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  درباره تکنو ماشین صنعت
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-black leading-[1.4] text-foreground md:text-4xl">
                تخصص صنعتی،
                <span className="block">راهکار قابل اعتماد.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-foreground-soft md:text-base">
                تکنو ماشین صنعت در زمینه تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی
                برای صنایع معدنی و صنعتی فعالیت می‌کند. تمرکز ما ارائه راهکارهای
                مطمئن، تخصصی و متناسب با نیاز واقعی هر پروژه است.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center text-sm font-black text-foreground transition-colors hover:text-brand-gold"
              >
                بیشتر درباره ما
                <span className="mr-3">←</span>
              </Link>
            </div>

            {/* Values */}
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="border-r-2 border-brand-gold bg-surface px-6 py-5 shadow-sm transition-colors duration-300">
                <div className="text-lg font-black text-foreground">تخصص</div>

                <p className="mt-1 text-xs leading-6 text-muted">
                  شناخت نیازهای فنی و صنعتی پروژه
                </p>
              </div>

              <div className="border-r-2 border-brand-gold bg-surface px-6 py-5 shadow-sm transition-colors duration-300">
                <div className="text-lg font-black text-foreground">کیفیت</div>

                <p className="mt-1 text-xs leading-6 text-muted">
                  تمرکز بر تجهیزات و راهکارهای قابل اعتماد
                </p>
              </div>

              <div className="border-r-2 border-brand-gold bg-surface px-6 py-5 shadow-sm transition-colors duration-300">
                <div className="text-lg font-black text-foreground">
                  پشتیبانی
                </div>

                <p className="mt-1 text-xs leading-6 text-muted">
                  همراهی از تأمین تا اجرای راهکار
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          Services & Capabilities
      ========================================================= */}
      <section className="bg-background py-16 transition-colors duration-300 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  خدمات و توانمندی‌ها
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-[1.4] text-foreground md:text-4xl">
                راهکار تخصصی،
                <span className="block text-brand-gold">از تأمین تا اجرا</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted">
              مجموعه‌ای از خدمات تخصصی برای تأمین تجهیزات، قطعات و ارائه
              راهکارهای فنی متناسب با نیاز پروژه‌های صنعتی و معدنی.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Service 01 */}
            <div className="group relative overflow-hidden rounded-sm border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-bold tracking-wider text-brand-gold">
                  ۰۱
                </span>

                <span className="text-2xl text-muted/30 transition-colors duration-300 group-hover:text-brand-gold/50">
                  ◇
                </span>
              </div>

              <h3 className="text-lg font-black text-foreground">
                تأمین ماشین‌آلات
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                تأمین ماشین‌آلات و تجهیزات تخصصی مورد نیاز صنایع معدنی و صنعتی
                با تمرکز بر انتخاب راهکار مناسب.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>

            {/* Service 02 */}
            <div className="group relative overflow-hidden rounded-sm border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-bold tracking-wider text-brand-gold">
                  ۰۲
                </span>

                <span className="text-2xl text-muted/30 transition-colors duration-300 group-hover:text-brand-gold/50">
                  ◇
                </span>
              </div>

              <h3 className="text-lg font-black text-foreground">
                تأمین قطعات
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                تأمین قطعات و تجهیزات مورد نیاز ماشین‌آلات صنعتی با توجه به
                مشخصات فنی و نیاز واقعی پروژه.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>

            {/* Service 03 */}
            <div className="group relative overflow-hidden rounded-sm border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-bold tracking-wider text-brand-gold">
                  ۰۳
                </span>

                <span className="text-2xl text-muted/30 transition-colors duration-300 group-hover:text-brand-gold/50">
                  ◇
                </span>
              </div>

              <h3 className="text-lg font-black text-foreground">
                خدمات فنی و مهندسی
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                ارائه مشاوره و راهکارهای فنی و مهندسی برای انتخاب و استفاده صحیح
                از تجهیزات متناسب با پروژه.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>

            {/* Service 04 */}
            <div className="group relative overflow-hidden rounded-sm border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-bold tracking-wider text-brand-gold">
                  ۰۴
                </span>

                <span className="text-2xl text-muted/30 transition-colors duration-300 group-hover:text-brand-gold/50">
                  ◇
                </span>
              </div>

              <h3 className="text-lg font-black text-foreground">
                پشتیبانی و مشاوره
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                همراهی و پشتیبانی تخصصی در مسیر انتخاب، تأمین و اجرای راهکارهای
                مورد نیاز پروژه.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          Products
      ========================================================= */}
      <section className="bg-surface-soft py-20 transition-colors duration-300">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold text-brand-gold">محصولات</span>

              <h2 className="mt-2 text-3xl font-black text-foreground">
                محصولات منتخب
              </h2>
            </div>

            <Link
              href="/products"
              className="text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
            >
              مشاهده همه محصولات ←
            </Link>
          </div>

          {products.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <article
                  key={product.documentId}
                  className="group overflow-hidden rounded-xl border border-border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden light:white dark:bg-brand-charcoal">
                    {product.image?.url ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}`}
                        alt={product.image.alternativeText || product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <img
                          src="/images/IMG_5071.PNG"
                          alt="تکنو ماشین صنعت"
                          className="h-auto w-full max-w-[220px] object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {product.featured && (
                      <span className="text-xs font-bold text-brand-gold">
                        محصول ویژه
                      </span>
                    )}

                    <h3 className="mt-2 text-xl font-black text-foreground">
                      {product.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-foreground-soft">
                      {product.shortDescription}
                    </p>

                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-5 inline-flex text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
                    >
                      مشاهده محصول
                      <span className="mr-2">←</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================
          Why Us
      ========================================================= */}
      <section className="bg-background py-16 transition-colors duration-300 md:py-20">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold text-brand-gold">
                چرا تکنو ماشین صنعت؟
              </span>

              <h2 className="mt-2 text-3xl font-black text-foreground">
                یک همراه تخصصی برای پروژه‌های صنعتی
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted">
              از انتخاب تجهیزات مناسب تا تأمین قطعات و پشتیبانی فنی، در کنار شما
              هستیم تا راهکار مناسب پروژه‌تان را پیدا کنیم.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Item 1 */}
            <div className="group rounded-xl border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-black text-lg font-black text-brand-gold">
                01
              </div>

              <h3 className="mt-5 text-xl font-black text-foreground">
                تخصص فنی
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                شناخت نیازهای فنی صنایع و ارائه تجهیزات و قطعات متناسب با شرایط
                واقعی هر پروژه.
              </p>
            </div>

            {/* Item 2 */}
            <div className="group rounded-xl border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
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
            </div>

            {/* Item 3 */}
            <div className="group rounded-xl border border-border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
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
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-brand-black py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <span className="text-sm font-bold text-brand-gold">
                آماده همکاری هستیم
              </span>

              <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                برای پروژه خود به یک راهکار تخصصی نیاز دارید؟
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-brand-gold px-7 text-sm font-black text-brand-black transition-all hover:bg-brand-gold-light"
            >
              با ما در تماس باشید
              <span className="mr-3">←</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
