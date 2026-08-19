import ServiceCard from "@/components/services/ServiceCard";

const services = [
  {
    number: "01",
    title: "طراحی و مهندسی",
    description:
      "طراحی و مهندسی تجهیزات و ماشین‌آلات صنعتی متناسب با نیاز پروژه و شرایط کاری مجموعه شما.",
  },
  {
    number: "02",
    title: "ساخت ماشین‌آلات",
    description:
      "ساخت و تولید ماشین‌آلات و تجهیزات مورد نیاز صنایع معدنی با تمرکز بر کیفیت، استحکام و عملکرد پایدار.",
  },
  {
    number: "03",
    title: "نصب و راه‌اندازی",
    description:
      "نصب، مونتاژ و راه‌اندازی تجهیزات در محل پروژه و اطمینان از عملکرد صحیح مجموعه.",
  },
  {
    number: "04",
    title: "تعمیر و نگهداری",
    description:
      "ارائه خدمات فنی، تعمیرات و نگهداری برای افزایش طول عمر تجهیزات و کاهش زمان توقف خط تولید.",
  },
  {
    number: "05",
    title: "تأمین قطعات",
    description:
      "تأمین قطعات مصرفی و یدکی ماشین‌آلات و تجهیزات برای حفظ عملکرد مستمر خطوط تولید.",
  },
  {
    number: "06",
    title: "مشاوره فنی",
    description:
      "ارائه مشاوره تخصصی برای انتخاب تجهیزات، طراحی خطوط و بهینه‌سازی فرآیندهای صنعتی.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#f7f7f5] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            خدمات ما
          </span>

          <h2 className="text-3xl font-black leading-tight text-brand-black md:text-5xl">
            از ایده تا اجرای پروژه
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            مجموعه‌ای از خدمات تخصصی تکنو ماشین صنعت برای پاسخ‌گویی به نیازهای
            مختلف صنایع معدنی و ماشین‌آلات.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
