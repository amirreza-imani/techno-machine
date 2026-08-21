"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductsListProps {
  products: Product[];
  strapiUrl: string;
}

export default function ProductsList({
  products,
  strapiUrl,
}: ProductsListProps) {
  const INITIAL_COUNT = 6;

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_COUNT);

  const hasMore = products.length > INITIAL_COUNT;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article
            key={product.documentId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
          >
            {/* Image */}
            <Link
              href={`/products/${product.slug}`}
              className="block"
              aria-label={`مشاهده ${product.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden light:white dark:bg-brand-charcoal">
                {product.image ? (
                  <img
                    src={`${strapiUrl}${product.image.url}`}
                    alt={product.image.alternativeText || product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative flex h-full items-center justify-center">
                    <div className="absolute h-44 w-44 rounded-full border border-brand-gold/10" />
                    <div className="absolute h-32 w-32 rounded-full border border-brand-gold/10" />

                    <span className="relative text-7xl font-black tracking-tighter text-brand-gold/20 transition-transform duration-500 group-hover:scale-110">
                      TM
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {product.featured && (
                  <span className="absolute right-4 top-4 rounded-sm bg-brand-gold px-3 py-1.5 text-[11px] font-black text-brand-black shadow-lg">
                    محصول ویژه
                  </span>
                )}

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-brand-black/0 transition-colors duration-300 group-hover:bg-brand-black/10" />
              </div>
            </Link>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-black text-brand-black transition-colors group-hover:text-brand-gold">
                {product.title}
              </h3>

              {product.shortDescription && (
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                  {product.shortDescription}
                </p>
              )}

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center text-sm font-black text-brand-black transition-colors hover:text-brand-gold"
                >
                  مشاهده محصول
                  <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                </Link>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="text-xs font-bold text-gray-400 transition-colors hover:text-brand-gold"
                >
                  استعلام قیمت
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Show All */}
      {hasMore && !showAll && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex h-12 items-center justify-center rounded-md border border-brand-black px-8 text-sm font-black text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-black hover:text-white"
          >
            نمایش همه محصولات
            <span className="mr-3">←</span>
          </button>
        </div>
      )}
    </>
  );
}
