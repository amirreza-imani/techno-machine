import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-black text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[560px] items-center gap-10 py-14 md:min-h-[600px] md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent" />

              {/* Gold frame */}
              <div className="pointer-events-none absolute inset-5 rounded-2xl border border-brand-gold/30" />

              {/* Small label */}
              <div className="absolute bottom-6 right-6 rounded-lg border border-white/10 bg-brand-black/70 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-bold text-brand-gold">
                  تکنو ماشین صنعت
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                {eyebrow}
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.3] md:text-5xl lg:text-6xl">
              {title}

              {highlight && (
                <>
                  <br />
                  <span className="text-brand-gold">{highlight}</span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3.5 text-sm font-bold text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-light"
                  >
                    {primaryAction.label}
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-brand-gold hover:text-brand-gold"
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
