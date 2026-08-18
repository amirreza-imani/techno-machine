import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "تکنو ماشین صنعت | ماشین‌آلات صنعتی و تجهیزات معدنی",
    template: "%s | تکنو ماشین صنعت",
  },
  description:
    "تکنو ماشین صنعت، طراح و تولیدکننده ماشین‌آلات صنعتی، تجهیزات معدنی، خطوط خردایش، سنگ‌شکن، هیدروکن، ماسه‌ساز، سرند و نوار نقاله.",
  keywords: [
    "تکنو ماشین صنعت",
    "ماشین آلات صنعتی",
    "ماشین‌آلات معدنی",
    "سنگ شکن",
    "سنگ‌شکن فکی",
    "هیدروکن",
    "ماسه ساز",
    "سرند",
    "نوار نقاله",
    "خط خردایش",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>{children}</body>
    </html>
  );
}
