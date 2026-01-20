"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerContainerFast, imageReveal, fadeInUpSoft } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation } from "@/lib/animations/hooks";

const images = [
  { src: "/image-1.jpg", alt: "Wedding photo 1" },
  { src: "/image-2.jpg", alt: "Wedding photo 2" },
  { src: "/image-3.jpg", alt: "Wedding photo 3" },
  { src: "/image-4.jpg", alt: "Wedding photo 4" },
  { src: "/image-5.jpg", alt: "Wedding photo 5" },
  { src: "/image-6.jpg", alt: "Wedding photo 6" },
];

export default function ImagesSection() {
  const { ref: refDesktopLarge, isInView: isInViewDesktopLarge } = useScrollAnimation();
  const { ref: refDesktopMedium, isInView: isInViewDesktopMedium } = useScrollAnimation();
  const { ref: refTablet, isInView: isInViewTablet } = useScrollAnimation();
  const { ref: refMobile, isInView: isInViewMobile } = useScrollAnimation({ amount: 0.1, margin: "0px" });

  return (
    <section className="bg-white w-full">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <motion.div
        ref={refDesktopLarge}
        className="hidden min-[1561px]:flex content-center flex-wrap gap-[40px] items-center justify-center px-[200px] pt-[60px] pb-[120px] w-full"
        initial="hidden"
        animate={isInViewDesktopLarge ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {images.map((image) => (
          <motion.div
            key={image.src}
            className="h-[560px] min-w-[400px] relative shrink-0 w-[480px]"
            variants={fadeInUpSoft}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
          >
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="480px" />
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Medium (1560-1201px) */}
      <motion.div
        ref={refDesktopMedium}
        className="hidden min-[1201px]:flex min-[1561px]:hidden content-center flex-wrap gap-[32px] items-center justify-center px-[120px] pt-[60px] pb-[100px] w-full"
        initial="hidden"
        animate={isInViewDesktopMedium ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {images.map((image) => (
          <motion.div
            key={image.src}
            className="h-[520px] min-w-[340px] relative shrink-0 w-[420px]"
            variants={fadeInUpSoft}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
          >
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="420px" />
          </motion.div>
        ))}
      </motion.div>

      {/* Tablet (1200-769px) */}
      <motion.div
        ref={refTablet}
        className="hidden min-[769px]:flex min-[1201px]:hidden content-center flex-wrap gap-[24px] items-center justify-center px-[40px] py-[80px] w-full"
        initial="hidden"
        animate={isInViewTablet ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {images.map((image) => (
          <motion.div
            key={image.src}
            className="h-[420px] min-w-[260px] relative shrink-0 w-[320px]"
            variants={imageReveal}
            transition={{ duration: DURATION.medium * 0.9, ease: EASING.smooth }}
          >
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="320px" />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile (768-375px and 374px-) */}
      <div
        ref={refMobile}
        className="flex min-[769px]:hidden flex-col gap-[20px] items-center px-[20px] py-[64px] w-full"
      >
        {images.map((image) => (
          <motion.div
            key={image.src}
            className="h-[420px] relative w-full max-w-[520px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "0px", once: true }}
            variants={imageReveal}
            transition={{ duration: DURATION.fast, ease: EASING.smooth }}
          >
            <Image alt={image.alt} className="object-cover" fill src={image.src} sizes="100vw" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
