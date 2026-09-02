import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

import './globals.css';

import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';

const vazirmatn = Vazirmatn({
	variable: '--font-vazirmatn',
	subsets: ['arabic', 'latin'],
	display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),

	title: {
		default: 'تکنو ماشین  | ماشین‌آلات صنعتی و تجهیزات معدنی',
		template: '%s | تکنو ماشین ',
	},

	description: 'تکنو ماشین  تأمین‌کننده ماشین‌آلات صنعتی و معدنی، تجهیزات، قطعات و ارائه‌دهنده خدمات فنی و مهندسی برای پروژه‌های صنعتی و معدنی.',

	keywords: [
		'تکنو ماشین ',
		'تکنو ماشین',
		'ماشین آلات صنعتی',
		'ماشین آلات معدنی',
		'تجهیزات معدنی',
		'سنگ شکن',
		'سنگ شکن فکی',
		'هیدروکن',
		'ماسه ساز',
		'سرند',
		'نوار نقاله',
		'خط خردایش',
		'قطعات سنگ شکن',
		'تجهیزات صنعتی',
	],

	authors: [
		{
			name: 'تکنو ماشین ',
		},
	],

	creator: 'تکنو ماشین ',
	publisher: 'تکنو ماشین ',

	applicationName: 'تکنو ماشین ',

	formatDetection: {
		telephone: true,
		email: true,
		address: false,
	},

	alternates: {
		canonical: '/',
	},

	openGraph: {
		type: 'website',
		locale: 'fa_IR',
		url: SITE_URL,
		siteName: 'تکنو ماشین ',
		title: 'تکنو ماشین  | ماشین‌آلات صنعتی و تجهیزات معدنی',
		description: 'تأمین ماشین‌آلات صنعتی و معدنی، تجهیزات، قطعات و ارائه خدمات فنی و مهندسی توسط تکنو ماشین .',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'تکنو ماشین  | ماشین‌آلات صنعتی و تجهیزات معدنی',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'تکنو ماشین  | ماشین‌آلات صنعتی و تجهیزات معدنی',
		description: 'تأمین ماشین‌آلات صنعتی و معدنی، تجهیزات، قطعات و خدمات فنی و مهندسی.',
		images: ['/images/og-image.jpg'],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fa' dir='rtl' className={vazirmatn.variable} suppressHydrationWarning>
			<body className='min-h-screen bg-background font-sans text-foreground antialiased'>
				<JsonLd
					data={{
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'Organization',
								'@id': `${SITE_URL}/#organization`,
								name: 'تکنو ماشین ',
								url: SITE_URL,

								logo: {
									'@type': 'ImageObject',
									url: `${SITE_URL}/images/IMG_5071.PNG`,
								},

								email: 'mohammad.mousaviii79@gmail.com',

								telephone: ['+989126445695', '+989125094307'],

								address: {
									'@type': 'PostalAddress',
									addressLocality: 'شهریار',
									addressRegion: 'تهران',
									addressCountry: 'IR',
									streetAddress: 'جنب پمپ بنزین شاهد شهر، خیابان معاینه فنی، پلاک 6',
								},

								sameAs: ['https://www.instagram.com/techno_machine.co/', 'https://wa.me/989126445695', 'https://t.me/989126445695'],
							},

							{
								'@type': 'WebSite',
								'@id': `${SITE_URL}/#website`,
								url: SITE_URL,
								name: 'تکنو ماشین ',

								publisher: {
									'@id': `${SITE_URL}/#organization`,
								},

								inLanguage: 'fa-IR',
							},
						],
					}}
				/>

				<TopBar />

				<Header />

				<main>{children}</main>

				<Footer />
			</body>
		</html>
	);
}
