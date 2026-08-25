import PartsCTA from "@/components/parts/PartsCTA";
import PartsGrid from "@/components/parts/PartsGrid";
import PartsHero from "@/components/parts/PartsHero";
import { getParts } from "@/lib/strapi";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
export default async function PartsPage() {
  const parts = await getParts();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          {
            name: "صفحه اصلی",
            url: "/",
          },
          {
            name: "قطعات",
          },
        ]}
      />
      <PartsHero />
      <PartsGrid parts={parts} />
      <PartsCTA />
    </main>
  );
}
