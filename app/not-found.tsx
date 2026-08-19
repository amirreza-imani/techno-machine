import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-[70vh] items-center justify-center bg-[#f7f7f5] px-5 py-20"
    >
      <div className="w-full max-w-3xl text-center">
        <span className="text-8xl font-black tracking-tight text-brand-gold/30 md:text-[10rem]">
          404
        </span>

        <h1 className="mt-2 text-3xl font-black text-brand-black md:text-5xl">
          صفحه مورد نظر پیدا نشد
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است آدرس آن
          تغییر کرده باشد.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3.5 text-sm font-bold text-brand-black transition-colors hover:bg-brand-gold-light"
          >
            بازگشت به صفحه اصلی
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md border border-brand-gold px-7 py-3.5 text-sm font-bold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>
    </main>
  );
}
