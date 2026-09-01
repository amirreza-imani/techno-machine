import Link from "next/link";
import Container from "@/components/Container";
import { navigation } from "@/lib/site";
import { getSiteSettings } from "@/lib/strapi";
import Image from "next/image";

export default async function Footer() {
  const settings = await getSiteSettings();

  const phone1 = "09126445695";
  const phone2 = "09125094307";
  const email = "mohammad.mousaviii79@gmail.com";

  const address =
    "تهران، شهریار، جنب پمپ بنزین شاهد شهر، خیابان معاینه فنی، پلاک ۶";

  const whatsappUrl = "https://wa.me/989126445695";
  const telegramUrl = "https://t.me/09126445695";
  const instagramUrl = "https://instagram.com/techno_machine.co";

  const description =
    settings?.footerDescription ||
    "تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای صنایع معدنی و صنعتی، همراه با خدمات فنی و مهندسی.";

  return (
    <footer
      dir="rtl"
      className="border-t border-white/10 bg-brand-black text-white"
    >
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/images/IMG_5071.PNG"
                  alt="تکنو ماشین"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[17px] font-black tracking-tight text-white">
                  تکنو ماشین
                </span>

                <span className="mt-1.5 text-[8px] font-semibold tracking-[0.22em] text-white/40">
                  INDUSTRIAL SOLUTIONS
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              {description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-black text-white">دسترسی سریع</h3>

            <nav className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-white/50 transition-colors hover:!text-brand-gold"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-black text-white">اطلاعات تماس</h3>

            <div className="space-y-3 text-xs text-white/50">
              {/* Phone 1 */}
              <a
                href={`tel:${phone1}`}
                dir="ltr"
                className="block text-right transition-colors hover:text-brand-gold"
              >
                {phone1}
              </a>

              {/* Phone 2 */}
              <a
                href={`tel:${phone2}`}
                dir="ltr"
                className="block text-right transition-colors hover:text-brand-gold"
              >
                {phone2}
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                dir="ltr"
                className="block text-right transition-colors hover:text-brand-gold"
              >
                {email}
              </a>

              {/* Address */}
              <p className="max-w-sm leading-6">{address}</p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-3">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="واتساپ تکنو ماشین"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-brand-gold hover:text-brand-gold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.6 6L.2 24l6.3-1.6c1.7.9 3.6 1.3 5.5 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.4-8.4ZM12.1 21.7c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.7.9 1-3.6-.2-.4c-1-1.5-1.5-3.3-1.5-5.1C2.6 6.5 6.9 2.2 12.1 2.2c2.5 0 4.9 1 6.7 2.8a9.4 9.4 0 0 1 2.8 6.7c0 5.2-4.3 9.5-9.5 9.5Zm5.2-7.1c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.3-.3-.5.3-.5.8-1.7.1-.3.1-.5 0-.7-.1-.2-.7-1.6-1-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.9 3.4.8.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3Z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="تلگرام تکنو ماشین"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-brand-gold hover:text-brand-gold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M21.8 3.3 2.9 10.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.7c.2.6.1.8.8.8.5 0 .7-.2 1-.4l2.3-2.2 4.8 3.5c.9.5 1.5.3 1.7-.8l3.1-15c.3-1.4-.5-2-1.2-1.7ZM8.3 13.3l10.8-6.8c.5-.3.9-.1.5.2l-8.8 8-.3 3.2-1.5-4.6-.7-.1Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اینستاگرام تکنو ماشین"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-brand-gold hover:text-brand-gold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm9.9 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} تکنو ماشین. تمامی حقوق محفوظ است.</p>

          <p>طراحی و توسعه با رویکرد صنعتی</p>
        </div>
      </Container>
    </footer>
  );
}
