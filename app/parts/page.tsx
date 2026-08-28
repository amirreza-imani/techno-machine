import type { Metadata } from "next";

import PartsCTA from "@/components/parts/PartsCTA";
import PartsGrid from "@/components/parts/PartsGrid";
import PartsHero from "@/components/parts/PartsHero";
import { getParts } from "@/lib/strapi";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "قطعات ماشین‌آلات صنعتی و معدنی",
  description:
    "خرید و تأمین قطعات ماشین‌آلات صنعتی و معدنی شامل قطعات سنگ شکن، هیدروکن، کوبیت، ماسه ساز و تجهیزات خردایش از تکنو ماشین صنعت.",
};

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
