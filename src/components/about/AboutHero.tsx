export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-24 text-white md:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[60px] border-brand-gold/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 h-96 w-96 rounded-full border-[70px] border-white/5"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <span className="mb-5 inline-flex items-center gap-3 text-sm font-bold text-brand-gold">
          <span className="h-px w-8 bg-brand-gold" />
          درباره تکنو ماشین
        </span>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.25] md:text-6xl">
          مهندسی،
          <br />
          <span className="text-brand-gold">تخصص و اعتماد</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
          تکنو ماشین با تمرکز بر حوزه ماشین‌آلات و تجهیزات صنایع معدنی،
          راهکارهای مهندسی و صنعتی را با تکیه بر دانش فنی و تجربه ارائه می‌کند.
        </p>
      </div>
    </section>
  );
}
