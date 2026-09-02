import Link from "next/link";

import Container from "@/components/Container";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
export default function AboutPage() {
  return (
    <main dir="rtl">
      <BreadcrumbJsonLd
        items={[
          {
            name: "صفحه اصلی",
            url: "/",
          },
          {
            name: "درباره ما",
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[24rem] w-[24rem] rounded-full bg-white/5 blur-3xl" />

        <Container>
          <div className="relative grid min-h-[420px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  درباره تکنو ماشین
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.35] text-white sm:text-5xl md:text-6xl">
                تخصص صنعتی،
                <span className="block text-brand-gold">
                  راهکار قابل اعتماد
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
                تکنو ماشین در زمینه تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای
                صنایع معدنی و صنعتی فعالیت می‌کند و تمرکز آن بر ارائه راهکارهای
                مطمئن و متناسب با نیاز واقعی هر پروژه است.
              </p>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="relative flex h-[300px] w-[300px] items-center justify-center">
                <div className="absolute inset-6 rotate-6 border border-brand-gold/20" />
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-8 rounded-full border border-brand-gold/10" />

                <div className="relative text-center">
                  <img
                    src="/images/IMG_5071.PNG"
                    alt="تکنو ماشین"
                    className="h-auto w-48 object-contain"
                  />

                  <div className="mt-3 text-[10px] font-bold tracking-[0.3em] text-white/30">
                    INDUSTRIAL SOLUTIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Introduction */}
      <section className="bg-[#f7f7f5] py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* Main Text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  معرفی شرکت
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-[1.45] text-brand-black md:text-4xl">
                همراه صنایع،
                <span className="block">برای راهکارهای تخصصی</span>
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-8 text-gray-600 md:text-base">
                <p>
                  تکنو ماشین با تمرکز بر حوزه ماشین‌آلات، قطعات و تجهیزات صنعتی
                  و معدنی فعالیت می‌کند. هدف ما ایجاد ارتباطی مطمئن میان نیاز
                  فنی پروژه و راهکار مناسب برای تأمین تجهیزات است.
                </p>

                <p>
                  در این مسیر تلاش می‌کنیم با شناخت دقیق‌تر نیازهای هر پروژه،
                  انتخاب تجهیزات و ارائه مشاوره تخصصی، راهکاری متناسب با شرایط
                  واقعی کار ارائه کنیم.
                </p>

                <p>
                  رویکرد ما صرفاً تأمین یک محصول نیست؛ بلکه تلاش می‌کنیم در مسیر
                  انتخاب، تأمین و پشتیبانی، همراهی تخصصی و قابل اعتماد برای
                  مجموعه‌های صنعتی داشته باشیم.
                </p>
              </div>
            </div>

            {/* Side Information */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border-r-2 border-brand-gold bg-white p-6 shadow-sm">
                <div className="text-xs font-bold text-brand-gold">
                  تمرکز اصلی
                </div>

                <h3 className="mt-2 text-xl font-black text-brand-black">
                  ماشین‌آلات و تجهیزات صنعتی
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  تأمین تجهیزات مورد نیاز صنایع معدنی و صنعتی با توجه به نیاز
                  فنی پروژه.
                </p>
              </div>

              <div className="border-r-2 border-brand-gold bg-white p-6 shadow-sm">
                <div className="text-xs font-bold text-brand-gold">
                  رویکرد ما
                </div>

                <h3 className="mt-2 text-xl font-black text-brand-black">
                  راهکار متناسب با پروژه
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  بررسی نیاز، انتخاب راهکار مناسب و همراهی در مسیر تأمین و
                  پشتیبانی.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                حوزه فعالیت
              </span>
            </div>

            <h2 className="text-3xl font-black text-brand-black md:text-4xl">
              آنچه در آن تخصص داریم
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="group border border-gray-200 bg-[#f7f7f5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 text-xs font-black text-brand-gold">۰۱</div>

              <h3 className="text-lg font-black text-brand-black">
                ماشین‌آلات صنعتی
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                تأمین ماشین‌آلات و تجهیزات تخصصی مورد استفاده در پروژه‌های صنعتی
                و معدنی.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>

            <div className="group border border-gray-200 bg-[#f7f7f5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 text-xs font-black text-brand-gold">۰۲</div>

              <h3 className="text-lg font-black text-brand-black">
                قطعات و تجهیزات
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                تأمین قطعات و تجهیزات مورد نیاز ماشین‌آلات با توجه به مشخصات فنی
                و نیاز پروژه.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>

            <div className="group border border-gray-200 bg-[#f7f7f5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 text-xs font-black text-brand-gold">۰۳</div>

              <h3 className="text-lg font-black text-brand-black">
                خدمات فنی و مهندسی
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                ارائه مشاوره و راهکارهای فنی برای انتخاب و استفاده مناسب از
                تجهیزات.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>

            <div className="group border border-gray-200 bg-[#f7f7f5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg">
              <div className="mb-8 text-xs font-black text-brand-gold">۰۴</div>

              <h3 className="text-lg font-black text-brand-black">
                پشتیبانی و مشاوره
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                همراهی تخصصی در مسیر انتخاب، تأمین و استفاده از راهکارهای مورد
                نیاز پروژه.
              </p>

              <div className="mt-6 h-px w-8 bg-brand-gold transition-all duration-300 group-hover:w-14" />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section className="bg-brand-black py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Heading */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <span className="text-sm font-bold text-brand-gold">
                  چرا تکنو ماشین؟
                </span>
              </div>

              <h2 className="text-3xl font-black leading-[1.45] text-white md:text-4xl">
                انتخاب درست،
                <span className="block text-brand-gold">
                  از شناخت نیاز شروع می‌شود.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-8 text-white/50">
                هدف ما ارائه راهکاری است که با شرایط واقعی پروژه، نیاز فنی و
                الزامات کاری مجموعه‌ها هماهنگ باشد.
              </p>
            </div>

            {/* Values */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              <div className="grid gap-4 py-6 sm:grid-cols-[80px_1fr]">
                <div className="text-sm font-black text-brand-gold">۰۱</div>

                <div>
                  <h3 className="text-lg font-black text-white">تخصص</h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    شناخت نیازهای فنی و صنعتی و تلاش برای ارائه راهکار متناسب با
                    شرایط پروژه.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-[80px_1fr]">
                <div className="text-sm font-black text-brand-gold">۰۲</div>

                <div>
                  <h3 className="text-lg font-black text-white">کیفیت</h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    تمرکز بر تجهیزات و راهکارهای قابل اعتماد و متناسب با نیاز
                    واقعی مجموعه‌ها.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-[80px_1fr]">
                <div className="text-sm font-black text-brand-gold">۰۳</div>

                <div>
                  <h3 className="text-lg font-black text-white">همراهی</h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    همراهی در مسیر انتخاب، تأمین و پشتیبانی برای ایجاد یک تجربه
                    مطمئن‌تر.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-[80px_1fr]">
                <div className="text-sm font-black text-brand-gold">۰۴</div>

                <div>
                  <h3 className="text-lg font-black text-white">
                    نگاه بلندمدت
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/45">
                    ایجاد ارتباط حرفه‌ای و پایدار با مجموعه‌هایی که به دنبال
                    راهکارهای تخصصی و قابل اعتماد هستند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7f5] py-14 md:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 border border-gray-200 bg-white p-7 shadow-sm sm:flex-row sm:items-center md:p-9">
            <div>
              <span className="text-sm font-bold text-brand-gold">
                آماده همکاری هستیم
              </span>

              <h2 className="mt-2 text-2xl font-black text-brand-black md:text-3xl">
                برای پروژه خود به یک راهکار تخصصی نیاز دارید؟
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                برای دریافت مشاوره و بررسی نیاز پروژه با ما در ارتباط باشید.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-brand-gold px-7 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8b52f]"
            >
              تماس با ما
              <span className="mr-3">←</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
