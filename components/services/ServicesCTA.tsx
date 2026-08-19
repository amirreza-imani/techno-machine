import Link from "next/link";
import Container from "@/components/Container";

export default function ServicesCTA() {
  return (
    <section className="bg-[#f7f7f5] py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gold px-7 py-14 md:px-14 md:py-16">
          <div className="relative z-10 max-w-3xl">
            <span className="mb-4 block text-sm font-black text-brand-black/70">
              آماده شروع پروژه هستید؟
            </span>

            <h2 className="text-3xl font-black leading-tight text-brand-black md:text-5xl">
              برای انتخاب بهترین راهکار صنعتی
              <br className="hidden md:block" />
              با ما در ارتباط باشید.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-brand-black/70">
              کارشناسان تکنو ماشین صنعت آماده‌اند تا درباره نیاز پروژه، تجهیزات
              مورد نیاز و راهکار مناسب با شما گفتگو کنند.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-black px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-charcoal"
              >
                تماس با ما
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-brand-black/30 px-7 py-3.5 text-sm font-bold text-brand-black transition-colors hover:bg-brand-black hover:text-white"
              >
                مشاهده محصولات
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[40px] border-brand-black/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[50px] border-white/10"
          />
        </div>
      </Container>
    </section>
  );
}
