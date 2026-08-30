const steps = [
  {
    number: "01",
    title: "نیازسنجی و مشاوره",
    description:
      "ابتدا نیازهای پروژه، شرایط کاری و اهداف شما بررسی می‌شود تا مناسب‌ترین راهکار مشخص شود.",
  },
  {
    number: "02",
    title: "طراحی و برنامه‌ریزی",
    description:
      "پس از بررسی نیازها، طراحی فنی و برنامه اجرایی پروژه با توجه به مشخصات مورد نیاز انجام می‌شود.",
  },
  {
    number: "03",
    title: "ساخت و اجرا",
    description:
      "تجهیزات و ماشین‌آلات طبق مشخصات فنی تولید شده و مراحل اجرا و آماده‌سازی پروژه انجام می‌شود.",
  },
  {
    number: "04",
    title: "تحویل و پشتیبانی",
    description:
      "پس از راه‌اندازی، عملکرد تجهیزات بررسی شده و خدمات پشتیبانی و فنی در اختیار مجموعه قرار می‌گیرد.",
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-brand-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            فرآیند همکاری
          </span>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            از نیاز شما تا اجرای پروژه
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            تلاش می‌کنیم تمام مراحل همکاری با شفافیت و برنامه‌ریزی مشخص انجام
            شود.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="mb-7 flex items-center gap-4">
                <span className="text-4xl font-black text-brand-gold">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-white/15 lg:block" />
                )}
              </div>

              <h3 className="mb-4 text-xl font-black">{step.title}</h3>

              <p className="leading-8 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
