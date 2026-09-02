import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-brand-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-bold text-brand-gold">
          آماده همکاری هستیم
        </span>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black md:text-4xl">
          برای پروژه صنعتی خود با ما در ارتباط باشید
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
          برای دریافت مشاوره و بررسی نیاز پروژه، با کارشناسان تکنو ماشین 
          تماس بگیرید.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3.5 text-sm font-bold text-brand-black transition-colors hover:bg-brand-gold-light"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </section>
  );
}
