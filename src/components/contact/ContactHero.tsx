import Image from "next/image";

export default function ContactHero() {
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
        <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[480px_1fr] lg:gap-20">
          {/* =========================
              IMAGE - LEFT
          ========================== */}
          {/* Image - LEFT */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl lg:h-[330px] lg:w-[440px] lg:max-w-none lg:aspect-auto">
              <Image
                src="/images/contact-hero.png"
                alt="ارتباط با تکنو ماشین "
                fill
                priority
                sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 440px, 440px"
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

              {/* Gold frame */}
              <div className="pointer-events-none absolute inset-4 rounded-2xl border border-brand-gold/30" />

              {/* Label */}
              <div className="absolute bottom-5 right-5 rounded-lg border border-white/10 bg-brand-black/70 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-bold text-brand-gold">
                  تکنو ماشین
                </span>
              </div>
            </div>
          </div>
          {/* =========================
              CONTENT - RIGHT
          ========================== */}
          <div className="order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                تماس با تکنو ماشین
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.25] md:text-5xl lg:text-6xl">
              برای شروع همکاری
              <br />
              <span className="text-brand-gold">با ما در ارتباط باشید</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              برای دریافت مشاوره، استعلام قیمت و بررسی نیازهای پروژه، با
              کارشناسان تکنو ماشین تماس بگیرید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
