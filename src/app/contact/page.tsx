import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { Suspense } from 'react';
export default function ContactPage() {
	return (
		<main>
			<BreadcrumbJsonLd
				items={[
					{
						name: 'صفحه اصلی',
						url: '/',
					},
					{
						name: 'تماس با ما',
					},
				]}
			/>
			<ContactHero />
			<ContactInfo />
			<Suspense>
				<ContactForm />
			</Suspense>
		</main>
	);
}
