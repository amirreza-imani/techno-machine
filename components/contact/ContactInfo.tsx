import Container from "@/components/Container";
import { getSiteSettings } from "@/lib/strapi";

export default async function ContactInfo() {
  const settings = await getSiteSettings();

  const phone = settings?.phone || "09126445695";
  const secondaryPhone = "09125094307";
  const email = settings?.email || "mohammad.mousaviii79@gmail.com";
  const address =
    settings?.address ||
    "تهران، شهریار، جنب پمپ بنزین شاهدشهر، خیابان معاینه فنی، پلاک ۶";

  const whatsappNumber = "09126445695";
  const telegramUrl = "https://t.me/technomachine_co";
  const instagramUsername = "techno_machine.co";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/^0/, "98")}`;
  const instagramUrl = `https://instagram.com/${instagramUsername}`;

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

            <div className="mt-2 space-y-1" dir="ltr">
              <a
                href={`tel:${phone}`}
                className="block text-sm font-black text-brand-black transition-colors hover:text-brand-gold"
              >
                {phone}
              </a>

              <a
                href={`tel:${secondaryPhone}`}
                className="block text-sm font-black text-brand-black transition-colors hover:text-brand-gold"
              >
                {secondaryPhone}
              </a>
            </div>
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

          {/* Social Media */}
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
                <path d="M16 8a6 6 0 0 1 0 8" />
                <path d="M8 8a6 6 0 0 0 0 8" />
                <path d="M12 5v14" />
              </svg>
            </div>

            <span className="mt-4 text-xs font-bold text-brand-gold">
              شبکه‌های اجتماعی
            </span>

            <div className="mt-3 flex items-center gap-4">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساپ تکنو ماشین"
                title="واتساپ"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-black !text-brand-gold transition-all duration-300 hover:-translate-y-1 hover:bg-brand-gold hover:!text-brand-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53.0.2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.88 11.88 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.45-8.41ZM12.09 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.23-.38a9.88 9.88 0 1 1 8.39 4.65Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام تکنو ماشین"
                title="تلگرام"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-black !text-brand-gold transition-all duration-300 hover:-translate-y-1 hover:bg-brand-gold hover:!text-brand-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M21.7 3.2 2.3 10.7c-1.32.5-1.31 1.22-.24 1.53l4.98 1.55 1.91 5.98c.23.64.12.9.78.9.52 0 .75-.24 1.04-.52l2.42-2.35 5.03 3.71c.93.51 1.6.24 1.83-.86l3.29-15.5c.34-1.35-.51-1.96-1.64-1.44ZM17.95 7.3l-7.1 6.32-.28 3.02-1.2-3.75 7.99-5.04c.36-.22.69-.1.59.45Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام تکنو ماشین"
                title="اینستاگرام"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-black !text-brand-gold transition-all duration-300 hover:-translate-y-1 hover:bg-brand-gold hover:!text-brand-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
