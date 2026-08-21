export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-24 text-white md:py-32">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[60px] border-brand-gold/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 h-96 w-96 rounded-full border-[70px] border-white/5"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Content */}
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-sm font-bold text-brand-gold">
              <span className="h-px w-8 bg-brand-gold" />
              خدمات تکنو ماشین
            </span>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.25] md:text-6xl">
              راهکارهای تخصصی
              <br />
              <span className="text-brand-gold">برای صنایع معدنی</span>
              <br />و ماشین‌آلات
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              از طراحی و تولید تجهیزات تا تأمین، نصب و پشتیبانی؛ تکنو ماشین صنعت
              در تمام مراحل پروژه در کنار شماست.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3.5 text-sm font-bold text-brand-black transition-colors hover:bg-brand-gold-light"
              >
                مشاهده خدمات
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                درخواست مشاوره
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
              <div className="mb-8 border-b border-white/10 pb-7">
                <span className="text-sm text-gray-400">تخصص ما</span>

                <p className="mt-3 text-2xl font-black">
                  طراحی، ساخت و پشتیبانی
                </p>
              </div>

              <div className="grid grid-cols-2 gap-7">
                <div>
                  <span className="text-4xl font-black text-brand-gold">
                    01
                  </span>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    مشاوره و طراحی
                  </p>
                </div>

                <div>
                  <span className="text-4xl font-black text-brand-gold">
                    02
                  </span>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    ساخت تجهیزات
                  </p>
                </div>

                <div>
                  <span className="text-4xl font-black text-brand-gold">
                    03
                  </span>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    نصب و راه‌اندازی
                  </p>
                </div>

                <div>
                  <span className="text-4xl font-black text-brand-gold">
                    04
                  </span>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    پشتیبانی فنی
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
