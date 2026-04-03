"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { GALLERY_IMAGES } from "@/app/lib/constants";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
    );
  }, []);

  return (
    <>
      <section id="gallery" className="bg-white">
        <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
          {/* Section Title */}
          <div className="text-center mb-10">
            <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
              Luxury Experience
            </small>
            <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px]">
              Gallery
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="overflow-hidden rounded-[10px] cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-4xl leading-none cursor-pointer z-10 hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 text-white text-5xl leading-none cursor-pointer z-10 hover:opacity-70 transition-opacity select-none"
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 text-white text-5xl leading-none cursor-pointer z-10 hover:opacity-70 transition-opacity select-none"
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
