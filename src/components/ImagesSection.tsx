"use client";

import Image from "next/image";

const images = [
  { src: "/image-1.jpg", alt: "Wedding photo 1" },
  { src: "/image-2.jpg", alt: "Wedding photo 2" },
  { src: "/image-3.jpg", alt: "Wedding photo 3" },
  { src: "/image-4.jpg", alt: "Wedding photo 4" },
  { src: "/image-5.jpg", alt: "Wedding photo 5" },
  { src: "/image-6.jpg", alt: "Wedding photo 6" },
];

export default function ImagesSection() {
  return (
    <section className="bg-white w-full">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex content-center flex-wrap gap-[40px] items-center justify-center px-[200px] py-[120px] w-full">
        {images.map((image) => (
          <div key={image.src} className="h-[560px] min-w-[400px] relative shrink-0 w-[480px]">
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="480px" />
          </div>
        ))}
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden content-center flex-wrap gap-[32px] items-center justify-center px-[120px] py-[100px] w-full">
        {images.map((image) => (
          <div key={image.src} className="h-[520px] min-w-[340px] relative shrink-0 w-[420px]">
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="420px" />
          </div>
        ))}
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden content-center flex-wrap gap-[24px] items-center justify-center px-[40px] py-[80px] w-full">
        {images.map((image) => (
          <div key={image.src} className="h-[420px] min-w-[260px] relative shrink-0 w-[320px]">
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="320px" />
          </div>
        ))}
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col gap-[20px] items-center px-[20px] py-[64px] w-full">
        {images.map((image) => (
          <div key={image.src} className="h-[420px] relative w-full max-w-[520px]">
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
