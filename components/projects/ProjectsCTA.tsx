import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="bg-brand-gold py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="mb-3 block text-sm font-bold text-brand-black/70">
              برای پروژه بعدی آماده‌ایم
            </span>

            <h2 className="text-3xl font-black text-brand-black md:text-4xl">
              برای اجرای پروژه صنعتی خود با ما در ارتباط باشید
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-brand-black/70">
              برای دریافت مشاوره، بررسی نیازهای پروژه و استعلام قیمت با
              کارشناسان تکنو ماشین صنعت تماس بگیرید.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-md bg-brand-black px-7 py-4 text-sm font-bold !text-white transition-colors hover:bg-brand-charcoal"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </section>
  );
}
