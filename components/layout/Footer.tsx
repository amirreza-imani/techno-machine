import Link from "next/link";

import Container from "@/components/Container";
import { navigation } from "@/lib/site";
import { getSiteSettings } from "@/lib/strapi";
import Image from "next/image";

export default async function Footer() {
  const settings = await getSiteSettings();

  const phone = settings?.phone || "021-88776655";
  const email = settings?.email || "info@technomachine.ir";

  const address =
    settings?.address || "تهران، خیابان ولیعصر، دفتر مرکزی تکنو ماشین صنعت";

  const workingHours =
    settings?.workingHours || "شنبه تا چهارشنبه، ۸:۰۰ تا ۱۷:۰۰";

  const description =
    settings?.footerDescription ||
    "تأمین ماشین‌آلات، قطعات و تجهیزات تخصصی برای صنایع معدنی و صنعتی، همراه با خدمات فنی و مهندسی.";

  return (
    <footer
      dir="rtl"
      className="border-t border-white/10 bg-brand-black text-white"
    >
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src="/images/IMG_5071.PNG"
                  alt="تکنو ماشین صنعت"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <div className="text-sm font-black">تکنو ماشین</div>
                <div className="mt-1 text-xs font-bold text-brand-gold">
                  صنعت
                </div>
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
                  className="text-xs text-white/50 transition-colors hover:text-brand-gold"
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
              <a
                href={`tel:${phone}`}
                dir="ltr"
                className="block transition-colors hover:text-brand-gold"
              >
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                dir="ltr"
                className="block transition-colors hover:text-brand-gold"
              >
                {email}
              </a>

              <p className="leading-6">{address}</p>

              <p>{workingHours}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} تکنو ماشین صنعت. تمامی حقوق محفوظ است.
          </p>

          <p>طراحی و توسعه با رویکرد صنعتی</p>
        </div>
      </Container>
    </footer>
  );
}
