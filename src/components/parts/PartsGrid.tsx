"use client";

import { useState } from "react";
import PartCard from "./PartCard";
import type { Part } from "@/types/part";

interface PartsGridProps {
  parts: Part[];
}

export default function PartsGrid({ parts }: PartsGridProps) {
  const INITIAL_COUNT = 6;

  const [showAll, setShowAll] = useState(false);

  const visibleParts = showAll ? parts : parts.slice(0, INITIAL_COUNT);

  const hasMore = parts.length > INITIAL_COUNT;

  return (
    <section className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="mb-3 block text-sm font-bold text-brand-gold">
            قطعات ما
          </span>

          <h2 className="text-3xl font-black text-brand-black md:text-4xl">
            قطعات و تجهیزات
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {visibleParts.map((part) => (
            <PartCard key={part.documentId} {...part} />
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center rounded-md border border-brand-black px-8 py-3.5 text-sm font-bold text-brand-black transition-all duration-300 hover:bg-brand-black hover:text-white"
            >
              نمایش همه قطعات
              <span className="mr-2">←</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
