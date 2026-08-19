import Link from "next/link";

import Container from "@/components/Container";
import { navigation } from "@/lib/site";

const contactItems = [
  {
    label: "تلفن",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    href: "tel:+982112345678",
  },
  {
    label: "ایمیل",
    value: "info@technomachine.ir",
    href: "mailto:info@technomachine.ir",
  },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-brand-black text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <Container>
          <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
                aria-label="تکنو ماشین صنعت"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white text-lg font-black text-brand-black">
                  TM
                </div>

                <div className="leading-none">
                  <div className="text-sm font-black text-white">
                    تکنو ماشین
                  </div>

                  <div className="mt-1 text-[11px] font-bold text-brand-gold">
                    صنعت
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-sm text-xs leading-6 text-white/50">
                ارائه‌دهنده ماشین‌آلات، تجهیزات و راهکارهای تخصصی برای صنایع
                معدنی و صنعتی.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="mb-4 text-xs font-black text-white">
                دسترسی سریع
              </h2>

              <nav aria-label="دسترسی سریع">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-xs text-white/50 transition-colors hover:text-brand-gold"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h2 className="mb-4 text-xs font-black text-white">
                حوزه فعالیت
              </h2>

              <ul className="space-y-2 text-xs text-white/50">
                <li>ماشین‌آلات صنعتی</li>
                <li>تجهیزات معدنی</li>
                <li>تأمین قطعات</li>
                <li>خدمات فنی و مهندسی</li>
                <li>پروژه‌های صنعتی</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-4 text-xs font-black text-white">
                ارتباط با ما
              </h2>

              <div className="space-y-3">
                {contactItems.map((item) => (
                  <div key={item.label}>
                    <span className="ml-2 text-[10px] font-bold text-brand-gold">
                      {item.label}
                    </span>

                    <a
                      href={item.href}
                      className="text-xs text-white/60 transition-colors hover:text-white"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}

                <div>
                  <span className="ml-2 text-[10px] font-bold text-brand-gold">
                    آدرس
                  </span>

                  <span className="text-xs leading-6 text-white/50">
                    تهران، خیابان ...، پلاک ...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <Container>
        <div className="flex min-h-14 flex-col items-center justify-center gap-2 py-3 text-[10px] text-white/35 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} تکنو ماشین صنعت. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-5">
            <Link href="/" className="transition-colors hover:text-brand-gold">
              صفحه اصلی
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-brand-gold"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
