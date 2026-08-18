import Link from "next/link";

import Container from "@/components/Container";

const quickLinks = [
  { title: "صفحه اصلی", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "خدمات", href: "/services" },
  { title: "پروژه‌ها", href: "/projects" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-gold text-xl font-black text-brand-black">
                TM
              </div>

              <div>
                <div className="text-sm font-black">تکنو ماشین</div>

                <div className="mt-1 text-xs font-bold text-brand-gold">
                  صنعت
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-gray-400">
              تکنو ماشین صنعت در زمینه طراحی، تولید و تأمین ماشین‌آلات صنعتی و
              تجهیزات معدنی فعالیت می‌کند.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xs font-bold text-gray-300 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xs font-bold text-gray-300 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                IN
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xs font-bold text-gray-300 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                TG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-base font-bold">دسترسی سریع</h2>

            <div className="mt-5 h-0.5 w-8 bg-brand-gold" />

            <nav className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-brand-gold"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-bold">اطلاعات تماس</h2>

            <div className="mt-5 h-0.5 w-8 bg-brand-gold" />

            <div className="mt-6 space-y-5 text-sm text-gray-400">
              <a
                href="tel:+982100000000"
                className="block transition-colors hover:text-brand-gold"
              >
                ۰۲۱-۰۰۰۰۰۰۰۰
              </a>

              <a
                href="mailto:info@technomachine.ir"
                className="block transition-colors hover:text-brand-gold"
              >
                info@technomachine.ir
              </a>

              <p className="leading-7">تهران، ایران</p>

              <p>شنبه تا چهارشنبه، ۸:۰۰ تا ۱۷:۰۰</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-base font-bold">ارسال پیام</h2>

            <div className="mt-5 h-0.5 w-8 bg-brand-gold" />

            <form className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full rounded-md border border-gray-700 bg-brand-charcoal px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-brand-gold"
              />

              <input
                type="tel"
                placeholder="شماره تماس"
                className="w-full rounded-md border border-gray-700 bg-brand-charcoal px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-brand-gold"
              />

              <textarea
                rows={3}
                placeholder="پیام شما"
                className="w-full resize-none rounded-md border border-gray-700 bg-brand-charcoal px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-brand-gold"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-brand-gold px-5 py-3 text-sm font-bold text-brand-black transition-colors hover:bg-brand-gold-dark"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col gap-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© ۱۴۰۵ تکنو ماشین صنعت. تمامی حقوق محفوظ است.</p>

            <p>طراحی و توسعه وب‌سایت</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
