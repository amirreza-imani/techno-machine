import JsonLd from './JsonLd';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const SITE_NAME = 'تکنو ماشین ';

const PHONE_1 = '09126445695';
const PHONE_2 = '09125094307';

const EMAIL = 'mohammad.mousaviii79@gmail.com';

const ADDRESS = 'تهران، شهریار، جنب پمپ بنزین شاهد شهر، خیابان معاینه فنی، پلاک 6';

const INSTAGRAM = 'https://www.instagram.com/techno_machine.co/';
const WHATSAPP = 'https://wa.me/989126445695';
const TELEGRAM = 'https://t.me/09126445695';

export default function SiteSchema() {
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${SITE_URL}/#organization`,
		name: SITE_NAME,
		url: SITE_URL,
		email: EMAIL,
		telephone: PHONE_1,
		description: 'تکنو ماشین  فعال در زمینه تأمین ماشین‌آلات صنعتی و معدنی، تجهیزات، قطعات و ارائه راهکارهای فنی و مهندسی.',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'شهریار',
			addressRegion: 'تهران',
			addressCountry: 'IR',
			streetAddress: 'جنب پمپ بنزین شاهد شهر، خیابان معاینه فنی، پلاک 6',
		},
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: PHONE_1,
				contactType: 'customer service',
				availableLanguage: ['fa', 'en'],
			},
			{
				'@type': 'ContactPoint',
				telephone: PHONE_2,
				contactType: 'customer service',
				availableLanguage: ['fa', 'en'],
			},
		],
		sameAs: [INSTAGRAM, WHATSAPP, TELEGRAM],
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		url: SITE_URL,
		name: SITE_NAME,
		description: 'تأمین ماشین‌آلات صنعتی و معدنی، تجهیزات، قطعات و ارائه خدمات فنی و مهندسی توسط تکنو ماشین .',
		publisher: {
			'@id': `${SITE_URL}/#organization`,
		},
		inLanguage: 'fa-IR',
	};

	return (
		<>
			<JsonLd data={organizationSchema} />
			<JsonLd data={websiteSchema} />
		</>
	);
}
