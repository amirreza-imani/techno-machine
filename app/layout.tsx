import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";

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
    "ماشین آلات معدنی",
    "سنگ شکن",
    "سنگ شکن فکی",
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
      <body>
        <TopBar />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
