import Link from "next/link";

export default function PartsCTA() {
  return (
    <section className="bg-brand-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-bold text-brand-gold">
          قطعه مورد نظر خود را پیدا نکردید؟
        </span>

        <h2 className="mt-4 text-3xl font-black md:text-4xl">
          برای بررسی و تأمین قطعه با ما تماس بگیرید
        </h2>

        <p className="mt-5 leading-8 text-gray-400">
          کارشناسان ما می‌توانند بر اساس مدل دستگاه و نیاز پروژه، شما را برای
          انتخاب قطعه مناسب راهنمایی کنند.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-md bg-brand-gold px-7 py-3.5 text-sm font-bold text-brand-black transition-colors hover:bg-brand-gold-light"
        >
          تماس با ما
        </Link>
      </div>
    </section>
  );
}
