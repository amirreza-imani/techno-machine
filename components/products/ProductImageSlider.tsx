"use client";

import { useEffect, useState } from "react";

type GalleryImage = {
  id: number | string;
  url: string;
  alternativeText?: string | null;
};

type ProductImageSliderProps = {
  images: GalleryImage[];
  title: string;
};

export default function ProductImageSlider({
  images,
  title,
}: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute h-64 w-64 rounded-full border border-brand-gold/10" />
        <div className="absolute h-48 w-48 rounded-full border border-brand-gold/10" />

        <div className="relative text-center">
          <div className="text-8xl font-black tracking-tighter text-brand-gold/20">
            TM
          </div>

          <div className="mt-2 text-[10px] font-bold tracking-[0.3em] text-white/30">
            INDUSTRIAL SOLUTIONS
          </div>
        </div>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative h-full w-full">
      <img
        key={currentImage.id}
        src={currentImage.url}
        alt={currentImage.alternativeText || title}
        className="h-full w-full object-cover"
      />

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/50 px-3 py-2 backdrop-blur-sm">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              aria-label={`نمایش تصویر ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "w-6 bg-brand-gold"
                    : "w-1.5 bg-white/50 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
