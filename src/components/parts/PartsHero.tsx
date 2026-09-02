import Image from "next/image";

export default function PartsHero() {
  return (
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[480px_1fr] lg:gap-20">
          {/* Image - LEFT */}
          <div className="order-1 flex justify-start">
            <div className="relative h-[280px] w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl md:h-[330px]">
              <Image
                src="/images/parts.png"
                alt="قطعات تخصصی ماشین‌آلات صنعتی و معدنی"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

              {/* Gold frame */}
              <div className="pointer-events-none absolute inset-4 rounded-2xl border border-brand-gold/30" />

              {/* Label */}
              <div className="absolute bottom-5 right-5 rounded-lg border border-white/10 bg-brand-black/70 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-bold text-brand-gold">
                  قطعات تکنو ماشین
                </span>
              </div>
            </div>
          </div>

          {/* Content - RIGHT */}
          <div className="order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                قطعات ماشین‌آلات
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.3] md:text-5xl lg:text-6xl">
              قطعات تخصصی
              <br />
              <span className="text-brand-gold">ماشین‌آلات صنعتی و معدنی</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              مجموعه‌ای از قطعات و تجهیزات مورد استفاده در ماشین‌آلات صنایع
              معدنی، با تمرکز بر کیفیت، دوام و عملکرد مناسب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
