import JsonLd from './JsonLd';

export type BreadcrumbItem = {
	name: string;
	url?: string;
};

type BreadcrumbJsonLdProps = {
	items: BreadcrumbItem[];
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
	const itemListElement = items.map((item, index) => {
		const isLast = index === items.length - 1;

		return {
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			...(item.url && !isLast
				? {
						item: `${SITE_URL}${item.url}`,
					}
				: {}),
		};
	});

	return (
		<JsonLd
			data={{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement,
			}}
		/>
	);
}
