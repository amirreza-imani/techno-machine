import type { Metadata } from "next";

import PartsCTA from "@/components/parts/PartsCTA";
import PartsGrid from "@/components/parts/PartsGrid";
import PartsHero from "@/components/parts/PartsHero";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getParts } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "قطعات ماشین‌آلات صنعتی و معدنی | تکنو ماشین ",

  description:
    "تأمین و ارائه قطعات تخصصی ماشین‌آلات صنعتی و معدنی شامل قطعات سنگ‌شکن، هیدروکن، کوبیت، ماسه‌ساز و تجهیزات خردایش توسط تکنو ماشین .",

  alternates: {
    canonical: "/parts",
  },

  openGraph: {
    title: "قطعات ماشین‌آلات صنعتی و معدنی | تکنو ماشین ",

    description:
      "تأمین قطعات تخصصی ماشین‌آلات صنعتی و معدنی و تجهیزات خردایش از تکنو ماشین .",

    type: "website",

    url: "/parts",

    locale: "fa_IR",

    siteName: "تکنو ماشین ",
  },

  twitter: {
    card: "summary_large_image",

    title: "قطعات ماشین‌آلات صنعتی و معدنی | تکنو ماشین ",

    description:
      "تأمین قطعات تخصصی ماشین‌آلات صنعتی و معدنی و تجهیزات خردایش از تکنو ماشین .",
  },
};

export default async function PartsPage() {
  const parts = await getParts();

  return (
    <main dir="rtl">
      <BreadcrumbJsonLd
        items={[
          {
            name: "صفحه اصلی",
            url: "/",
          },
          {
            name: "قطعات",
            url: "/parts",
          },
        ]}
      />

      <PartsHero />

      <PartsGrid parts={parts} />

      <PartsCTA />
    </main>
  );
}
