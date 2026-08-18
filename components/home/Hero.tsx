import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import { heroData } from "@/lib/home";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-brand-black">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroData.image.src}
          alt={heroData.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-brand-black via-brand-black/85 to-brand-black/35" />

      {/* Content */}
      <Container>
        <div className="flex min-h-[720px] items-center">
          <div className="max-w-3xl py-24">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-gold" />

              <span className="text-sm font-bold text-brand-gold">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.3] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              تجهیزات خردایش و{" "}
              <span className="text-brand-gold">
                دانه‌بندی
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              {heroData.description}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={heroData.primaryCta.href}
                className="inline-flex min-h-14 items-center justify-center rounded-md bg-brand-gold px-7 text-sm font-bold text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-dark"
              >
                {heroData.primaryCta.title}
              </Link>

              <Link
                href={heroData.secondaryCta.href}
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/30 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:text-brand-gold"
              >
                {heroData.secondaryCta.title}
              </Link>
            </div>

            {/* Benefits */}
            <div className="mt-14 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
              {heroData.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-gold/50 text-brand-gold">
                    ✓
                  </span>

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Slider Indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <span className="h-1.5 w-10 rounded-full bg-brand-gold" />
        <span className="h-1.5 w-2 rounded-full bg-white/30" />
        <span className="h-1.5 w-2 rounded-full bg-white/30" />
      </div>
    </section>
  );
}