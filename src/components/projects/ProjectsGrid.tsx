import Image from 'next/image';

import Container from '@/components/Container';
import { getProjects } from '@/lib/strapi';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default async function ProjectsGrid() {
	const projects = await getProjects();

	if (projects.length === 0) {
		return (
			<section className='bg-[#f7f7f5] py-16 md:py-20'>
				<Container>
					<div className='rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm'>
						<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-black text-xl font-black text-brand-gold'>TM</div>

						<h2 className='mt-6 text-2xl font-black text-brand-black'>پروژه‌ای برای نمایش وجود ندارد</h2>

						<p className='mx-auto mt-3 max-w-lg text-sm leading-8 text-gray-500'>اطلاعات پروژه پس از ثبت و انتشار در سیستم نمایش داده خواهد شد.</p>
					</div>
				</Container>
			</section>
		);
	}

	return (
		<section className='bg-[#f7f7f5] py-16 md:py-24'>
			<Container>
				{projects.map((project) => {
					const mainImageUrl = project.image?.url ? (project.image.url.startsWith('http') ? project.image.url : `${STRAPI_URL}${project.image.url}`) : null;

					const gallery = project.gallery || [];

					return (
						<article key={project.documentId} className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
							{/* Header */}
							<div className='border-b border-gray-100 px-6 py-8 md:px-10 md:py-10'>
								<div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
									<div className='max-w-3xl'>
										<div className='flex items-center gap-3'>
											<span className='h-px w-8 bg-brand-gold' />

											<span className='text-sm font-bold text-brand-gold'>پروژه اجرا شده</span>
										</div>

										<h2 className='mt-4 text-3xl font-black leading-[1.35] text-brand-black md:text-4xl'>{project.title}</h2>
									</div>

									<span className='inline-flex w-fit rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-2 text-xs font-bold text-brand-gold'>تکنو ماشین</span>
								</div>

								{project.shortDescription && <p className='mt-6 max-w-3xl text-sm leading-8 text-gray-600 md:text-base'>{project.shortDescription}</p>}
							</div>

							{/* Gallery */}
							<div className='space-y-3 p-3'>
								{/* Main Image */}
								<div className='group relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-charcoal'>
									{mainImageUrl ? (
										<Image
											src={mainImageUrl}
											alt={project.image?.alternativeText || project.title}
											fill
											priority
											sizes='(max-width: 768px) 100vw, 1200px'
											className='object-cover transition-transform duration-700 group-hover:scale-105'
										/>
									) : (
										<div className='flex h-full items-center justify-center'>
											<span className='text-6xl font-black text-brand-gold/20'>TM</span>
										</div>
									)}

									<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent' />

									<div className='absolute bottom-5 right-5 rounded-lg border border-white/10 bg-brand-black/70 px-4 py-2 backdrop-blur-md'>
										<span className='text-xs font-bold text-brand-gold'>تصویر اصلی پروژه</span>
									</div>
								</div>

								{/* Secondary Images */}
								<div className='grid gap-3 md:grid-cols-2'>
									{gallery.slice(0, 2).map((image, index) => {
										const imageUrl = image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;

										return (
											<div key={image.documentId || image.id} className='group relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-charcoal'>
												<Image
													src={imageUrl}
													alt={image.alternativeText || `${project.title} - تصویر ${index + 2}`}
													fill
													sizes='(max-width: 768px) 100vw, 50vw'
													className='object-cover transition-transform duration-700 group-hover:scale-105'
												/>

												<div className='pointer-events-none absolute inset-0 bg-brand-black/10 transition-colors duration-300 group-hover:bg-brand-black/0' />
											</div>
										);
									})}
								</div>
							</div>
						</article>
					);
				})}
			</Container>
		</section>
	);
}
