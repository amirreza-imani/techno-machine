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

const siteName = "تکنو ماشین";

const siteDescription =
  "تکنو ماشین در زمینه تأمین و ارائه ماشین‌آلات صنعتی و تجهیزات معدنی، ماشین‌آلات خردایش، سنگ‌شکن، هیدروکن، ماسه‌ساز، سرند و نوار نقاله فعالیت می‌کند.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,

  title: {
    default: `${siteName} | ماشین‌آلات صنعتی و تجهیزات معدنی`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  applicationName: siteName,

  keywords: [
    "تکنو ماشین",
    "ماشین آلات صنعتی",
    "ماشین آلات معدنی",
    "تجهیزات معدنی",
    "سنگ شکن",
    "سنگ شکن فکی",
    "هیدروکن",
    "ماسه ساز",
    "سرند",
    "نوار نقاله",
    "خط خردایش",
    "تجهیزات خردایش",
    "ماشین آلات سنگ شکن",
  ],

  authors: [
    {
      name: siteName,
    },
  ],

  creator: siteName,
  publisher: siteName,

  alternates: {
    ...(siteUrl
      ? {
          canonical: siteUrl,
        }
      : {}),
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName,
    title: `${siteName} | ماشین‌آلات صنعتی و تجهیزات معدنی`,
    description: siteDescription,

    ...(siteUrl
      ? {
          url: siteUrl,
        }
      : {}),

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} | ماشین‌آلات صنعتی و تجهیزات معدنی`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ماشین‌آلات صنعتی و تجهیزات معدنی`,
    description: siteDescription,

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={vazirmatn.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <TopBar />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
