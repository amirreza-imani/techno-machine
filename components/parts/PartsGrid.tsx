import PartCard from "./PartCard";

const parts = [
  {
    title: "فک سنگ‌شکن",
    category: "سنگ‌شکن فکی",
    description: "قطعه مقاوم و مناسب برای استفاده در مجموعه سنگ‌شکن‌های فکی.",
  },
  {
    title: "بغل‌بند سنگ‌شکن",
    category: "سنگ‌شکن فکی",
    description: "قطعه مصرفی با طراحی مناسب برای محافظت از بخش داخلی دستگاه.",
  },
  {
    title: "چکش سنگ‌شکن",
    category: "سنگ‌شکن",
    description: "مناسب برای تجهیزات خردایش و کاربردهای صنعتی مختلف.",
  },
  {
    title: "روتور",
    category: "تجهیزات خردایش",
    description:
      "قطعه‌ای مهم در تجهیزات خردایش با قابلیت استفاده در شرایط کاری صنعتی.",
  },
  {
    title: "لاینر",
    category: "قطعات مصرفی",
    description: "قطعات مقاوم در برابر سایش برای افزایش دوام تجهیزات.",
  },
  {
    title: "یاتاقان",
    category: "قطعات مکانیکی",
    description: "مناسب برای استفاده در مجموعه‌های مکانیکی ماشین‌آلات صنعتی.",
  },
];

export default function PartsGrid() {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            محصولات قطعات
          </span>

          <h2 className="text-3xl font-black text-brand-black md:text-4xl">
            قطعات و تجهیزات
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((part) => (
            <PartCard key={part.title} {...part} />
          ))}
        </div>
      </div>
    </section>
  );
}
