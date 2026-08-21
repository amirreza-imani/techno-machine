import Image from "next/image";
import Link from "next/link";
import type { StrapiMedia } from "@/types/part";

interface PartCardProps {
  title: string;
  slug: string;
  shortDescription: string;
  image?: StrapiMedia | null;
}

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function PartCard({
  title,
  slug,
  shortDescription,
  image,
}: PartCardProps) {
  const imageUrl = image?.url
    ? image.url.startsWith("http")
      ? image.url
      : `${STRAPI_URL}${image.url}`
    : null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl">
      {/* Image */}
      <Link
        href={`/parts/${slug}`}
        className="relative block aspect-[4/3] overflow-hidden light:white dark:bg-brand-charcoal"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alternativeText || title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-5xl font-black text-brand-gold/20">TM</span>
          </div>
        )}

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-black text-foreground">{title}</h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
          {shortDescription}
        </p>

        <Link
          href={`/parts/${slug}`}
          className="mt-5 inline-flex items-center text-sm font-bold text-foreground transition-colors hover:text-brand-gold"
        >
          مشاهده جزئیات
          <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </Link>
      </div>
    </article>
  );
}
