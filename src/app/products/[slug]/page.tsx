import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import Container from '@/components/Container';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getProductBySlug, getProducts } from '@/lib/strapi';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface ProductPageProps {
	params: Promise<{
		slug: string;
	}>;
}

/* =========================================================
   Static Params
========================================================= */

export async function generateStaticParams() {
	const products = await getProducts();

	return products
		.filter((product) => product.slug)
		.map((product) => ({
			slug: product.slug,
		}));
}

/* =========================================================
   Metadata
========================================================= */

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const { slug } = await params;

	const product = await getProductBySlug(slug);

	if (!product) {
		return {
			title: 'محصول یافت نشد | تکنو ماشین',
			robots: {
				index: false,
				follow: false,
			},
		};
	}

	const description = product.shortDescription || `معرفی ${product.title} و مشخصات این محصول از محصولات تکنو ماشین.`;

	return {
		title: `${product.title} | تکنو ماشین`,
		description,

		alternates: {
			canonical: `/products/${product.slug}`,
		},

		openGraph: {
			title: `${product.title} | تکنو ماشین`,
			description,
			type: 'website',
			url: `/products/${product.slug}`,
			locale: 'fa_IR',
			siteName: 'تکنو ماشین',

			...(product.image
				? {
						images: [
							{
								url: `${STRAPI_URL}${product.image.url}`,
								alt: product.image.alternativeText || product.title,
							},
						],
					}
				: {}),
		},

		twitter: {
			card: 'summary_large_image',
			title: `${product.title} | تکنو ماشین`,
			description,
			...(product.image
				? {
						images: [`${STRAPI_URL}${product.image.url}`],
					}
				: {}),
		},

		robots: {
			index: true,
			follow: true,
		},
	};
}

/* =========================================================
   Page
========================================================= */

export default async function ProductPage({ params }: ProductPageProps) {
	const { slug } = await params;

	const product = await getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	const imageUrl = product.image ? `${STRAPI_URL}${product.image.url}` : null;

	return (
		<main dir='rtl'>
			{/* =====================================================
          Breadcrumb SEO
      ====================================================== */}

			<BreadcrumbJsonLd
				items={[
					{
						name: 'صفحه اصلی',
						url: '/',
					},
					{
						name: 'محصولات',
						url: '/products',
					},
					{
						name: product.title,
					},
				]}
			/>

			{/* =====================================================
          Hero
      ====================================================== */}

			<section className='relative overflow-hidden bg-brand-black text-white'>
				{/* Decorative Background */}

				<div aria-hidden='true' className='pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl' />

				<div aria-hidden='true' className='pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl' />

				<Container>
					<div className='py-12 md:py-16'>
						{/* Breadcrumb */}

						<div className='mb-10 flex flex-wrap items-center gap-2 text-xs text-white/40'>
							<Link href='/' className='transition-colors hover:text-brand-gold'>
								صفحه اصلی
							</Link>

							<span>/</span>

							<Link href='/products' className='transition-colors hover:text-brand-gold'>
								محصولات
							</Link>

							<span>/</span>

							<span className='text-white/70'>{product.title}</span>
						</div>

						<div className='grid items-center gap-10 lg:grid-cols-[480px_1fr] lg:gap-16'>
							{/* =================================================
                  Product Image
              ================================================== */}

							<div className='order-1'>
								<div className='relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl'>
									{imageUrl ? (
										<img src={imageUrl} alt={product.image?.alternativeText || product.title} className='h-full w-full object-cover' />
									) : (
										<div className='relative flex h-full items-center justify-center'>
											<div className='absolute h-56 w-56 rounded-full border border-brand-gold/10' />

											<div className='absolute h-40 w-40 rounded-full border border-brand-gold/10' />

											<span className='relative text-8xl font-black tracking-tighter text-brand-gold/20'>TM</span>
										</div>
									)}

									{product.featured && <div className='absolute right-5 top-5 rounded-md bg-brand-gold px-4 py-2 text-xs font-black text-brand-black shadow-lg'>محصول ویژه</div>}

									<div aria-hidden='true' className='pointer-events-none absolute inset-4 rounded-2xl border border-brand-gold/20' />

									<div aria-hidden='true' className='pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent' />
								</div>
							</div>

							{/* =================================================
                  Product Info
              ================================================== */}

							<div className='order-2'>
								<div className='mb-5 flex items-center gap-3'>
									<span className='h-px w-8 bg-brand-gold' />

									<span className='text-sm font-bold text-brand-gold'>تکنو ماشین</span>
								</div>

								<h1 className='text-4xl font-black leading-[1.35] text-white md:text-5xl'>{product.title}</h1>

								{product.shortDescription && <p className='mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg'>{product.shortDescription}</p>}

								<div className='mt-8 flex flex-wrap gap-3'>
									<Link
										href={`/contact?product=${encodeURIComponent(product.title)}`}
										className='inline-flex h-12 items-center justify-center rounded-md bg-brand-gold px-7 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light'
									>
										استعلام قیمت
										<span className='mr-3'>←</span>
									</Link>

									<Link
										href='/products'
										className='inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-7 text-sm font-black text-white transition-all duration-300 hover:border-brand-gold hover:text-brand-gold'
									>
										بازگشت به محصولات
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* =====================================================
          Product Details
      ====================================================== */}

			<section className='bg-[#f7f7f5] py-14 md:py-20'>
				<Container>
					<div className='grid gap-10 lg:grid-cols-[1fr_320px]'>
						{/* =================================================
                Main Content
            ================================================== */}

						<div className='rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10'>
							<div className='mb-8'>
								<span className='text-sm font-bold text-brand-gold'>معرفی محصول</span>

								<h2 className='mt-2 text-2xl font-black text-brand-black md:text-3xl'>درباره {product.title}</h2>
							</div>

							{product.description && product.description.length > 0 ? (
								<div className='prose prose-sm max-w-none text-gray-600 md:prose-base'>
									<BlocksRenderer content={product.description} />
								</div>
							) : product.shortDescription ? (
								<p className='text-sm leading-8 text-gray-600 md:text-base'>{product.shortDescription}</p>
							) : (
								<p className='text-sm leading-8 text-gray-400'>اطلاعات تکمیلی این محصول در حال به‌روزرسانی است.</p>
							)}
						</div>

						{/* =================================================
                Sidebar CTA
            ================================================== */}

						<aside className='h-fit rounded-3xl bg-brand-black p-7 text-white shadow-xl'>
							<span className='text-xs font-bold text-brand-gold'>نیاز به اطلاعات بیشتر دارید؟</span>

							<h2 className='mt-3 text-xl font-black leading-8'>برای دریافت قیمت و مشاوره با ما در تماس باشید.</h2>

							<p className='mt-4 text-sm leading-7 text-white/50'>کارشناسان تکنو ماشین آماده پاسخگویی و ارائه اطلاعات فنی و تجاری مورد نیاز شما هستند.</p>

							<Link
								href={`/contact?product=${encodeURIComponent(product.title)}`}
								className='mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-brand-gold px-5 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light'
							>
								استعلام قیمت
								<span className='mr-3'>←</span>
							</Link>
						</aside>
					</div>
				</Container>
			</section>

			{/* =====================================================
          Bottom Navigation
      ====================================================== */}

			<section className='border-t border-gray-200 bg-white py-10'>
				<Container>
					<div className='flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center'>
						<div>
							<span className='text-xs font-bold text-brand-gold'>تکنو ماشین</span>

							<h2 className='mt-2 text-xl font-black text-brand-black'>مشاهده سایر محصولات</h2>
						</div>

						<Link
							href='/products'
							className='inline-flex h-11 items-center justify-center rounded-md border border-brand-black px-6 text-sm font-black text-brand-black transition-all duration-300 hover:bg-brand-black hover:text-white'
						>
							همه محصولات
							<span className='mr-3'>←</span>
						</Link>
					</div>
				</Container>
			</section>
		</main>
	);
}
