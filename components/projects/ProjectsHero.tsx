import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-black text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border-[60px] border-brand-gold/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full border-[70px] border-white/5"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[520px] items-center gap-10 py-14 md:min-h-[560px] md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Image - LEFT */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl">
                <Image
                  src="/images/project.png"
                  alt="پروژه‌های صنعتی و معدنی تکنو ماشین "
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />

                {/* Subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/35 via-transparent to-transparent" />

                {/* Gold frame */}
                <div className="pointer-events-none absolute inset-4 rounded-2xl border border-brand-gold/25" />

                {/* Label */}
                <div className="absolute bottom-5 right-5 rounded-lg border border-white/10 bg-brand-black/75 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-bold text-brand-gold">
                    پروژه‌های تکنو ماشین
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - RIGHT */}
          <div className="order-1 lg:order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                پروژه‌های تکنو ماشین
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.25] md:text-5xl lg:text-6xl">
              تجربه و تخصص
              <br />
              <span className="text-brand-gold">در اجرای پروژه‌های صنعتی</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              بخشی از پروژه‌ها و فعالیت‌های تکنو ماشین در زمینه طراحی، ساخت و
              اجرای تجهیزات و ماشین‌آلات صنایع معدنی.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
