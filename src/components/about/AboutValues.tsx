const values = [
  {
    number: "01",
    title: "تخصص فنی",
    description:
      "تصمیم‌گیری و اجرای پروژه‌ها با تمرکز بر دانش فنی و نیازهای واقعی صنعت.",
  },
  {
    number: "02",
    title: "کیفیت",
    description:
      "توجه به کیفیت ساخت، عملکرد تجهیزات و جزئیات در مراحل مختلف پروژه.",
  },
  {
    number: "03",
    title: "تعهد",
    description: "همراهی با مشتری از مراحل اولیه پروژه تا اجرا و پشتیبانی.",
  },
  {
    number: "04",
    title: "اعتماد",
    description:
      "ایجاد همکاری پایدار بر پایه شفافیت، مسئولیت‌پذیری و نتیجه‌محوری.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            ارزش‌های ما
          </span>

          <h2 className="text-3xl font-black text-brand-black md:text-4xl">
            اصولی که بر اساس آن کار می‌کنیم
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg"
            >
              <span className="text-4xl font-black text-brand-gold/30">
                {value.number}
              </span>

              <h3 className="mt-6 text-xl font-black text-brand-black">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
