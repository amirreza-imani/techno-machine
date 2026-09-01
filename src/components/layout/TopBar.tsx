import Container from "@/components/Container";
import { getSiteSettings } from "@/lib/strapi";

export default async function TopBar() {
  const settings = await getSiteSettings();

  const phone = settings?.phone || "09126445695";
  const email = settings?.email || "mohammad.mousaviii79@gmail.com";

  return (
    <div className="hidden border-b border-gray-100 bg-brand-black text-white/70 lg:block">
      <Container>
        <div className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${phone}`}
              dir="ltr"
              className="transition-colors hover:text-brand-gold"
            >
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              dir="ltr"
              className="transition-colors hover:text-brand-gold"
            >
              {email}
            </a>
          </div>

          <div className="text-white/40">
            راهکارهای تخصصی ماشین‌آلات و تجهیزات صنعتی
          </div>
        </div>
      </Container>
    </div>
  );
}
