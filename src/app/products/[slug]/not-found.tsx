import Link from "next/link";

import Container from "@/components/Container";

export default function ProductNotFound() {
  return (
    <main dir="rtl">
      <section className="flex min-h-[calc(100vh-160px)] items-center bg-[#f7f7f5] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            {/* Logo */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-black text-2xl font-black text-brand-gold shadow-lg">
              TM
            </div>

            {/* Label */}
            <div className="mt-8">
              <span className="text-sm font-bold text-brand-gold">
                محصول پیدا نشد
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-3 text-3xl font-black leading-[1.4] text-brand-black md:text-4xl">
              این محصول در دسترس نیست
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-gray-500 md:text-base">
              محصولی که به دنبال آن هستید وجود ندارد، حذف شده یا آدرس آن تغییر
              کرده است. می‌توانید محصولات دیگر تکنو ماشین  را مشاهده کنید.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-md bg-brand-gold px-7 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
              >
                مشاهده محصولات
                <span className="mr-3">←</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 px-7 text-sm font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
