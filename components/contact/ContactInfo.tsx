import Container from "@/components/Container";
import { getSiteSettings } from "@/lib/strapi";

export default async function ContactInfo() {
  const settings = await getSiteSettings();

  const phone = settings?.phone || "021-12345678";
  const email = settings?.email || "info@technomachine.ir";
  const address = settings?.address || "تهران، خیابان مثال، پلاک ۱۲۳";
  const workingHours =
    settings?.workingHours || "شنبه تا چهارشنبه، ۸:۰۰ تا ۱۷:۰۰";

  return (
    <section className="bg-[#f7f7f5] py-8 md:py-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-black text-brand-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>
            </div>

            <span className="mt-4 text-xs font-bold text-brand-gold">
              شماره تماس
            </span>

            <a
              href={`tel:${phone}`}
              dir="ltr"
              className="mt-2 text-sm font-black text-brand-black transition-colors hover:text-brand-gold"
            >
              {phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-black text-brand-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            <span className="mt-4 text-xs font-bold text-brand-gold">
              ایمیل
            </span>

            <a
              href={`mailto:${email}`}
              dir="ltr"
              className="mt-2 break-all text-sm font-black text-brand-black transition-colors hover:text-brand-gold"
            >
              {email}
            </a>
          </div>

          {/* Address */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-black text-brand-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <span className="mt-4 text-xs font-bold text-brand-gold">آدرس</span>

            <p className="mt-2 text-sm font-black leading-7 text-brand-black">
              {address}
            </p>
          </div>

          {/* Working Hours */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-black text-brand-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>

            <span className="mt-4 text-xs font-bold text-brand-gold">
              ساعات کاری
            </span>

            <p className="mt-2 text-sm font-black leading-7 text-brand-black">
              {workingHours}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
