"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, fadeInUp } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation } from "@/lib/animations/hooks";

export default function ReceptionSection() {
  // Separate refs for each responsive breakpoint
  const { ref: refDesktopLarge, isInView: isInViewDesktopLarge } = useScrollAnimation();
  const { ref: refDesktopMedium, isInView: isInViewDesktopMedium } = useScrollAnimation();
  const { ref: refTablet, isInView: isInViewTablet } = useScrollAnimation();
  const { ref: refMobile, isInView: isInViewMobile } = useScrollAnimation();

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-start justify-start relative w-full overflow-hidden">
        <Image
          alt="Voskevaz Winery"
          className="absolute inset-0 h-full w-full object-cover"
          src="/winery-image.jpg"
          width={1920}
          height={720}
        />
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <motion.div
          ref={refDesktopLarge}
          className="relative flex flex-col gap-[24px] items-start justify-center pb-[100px] pt-[360px] px-[200px] w-full"
          initial="hidden"
          animate={isInViewDesktopLarge ? "visible" : "hidden"}
          variants={slideInFromLeft}
          transition={{ duration: DURATION.slow, ease: EASING.smooth }}
        >
          <motion.div
            variants={fadeInUp}
            custom={{ duration: DURATION.medium }}
            className="flex flex-col gap-[32px] items-start max-w-[720px] relative shrink-0 w-full"
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-white w-full">
              հարսանյաց խնջույք`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInViewDesktopLarge ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: DURATION.medium, ease: EASING.smooth, delay: 0.2 }}
                style={{ originX: 0 }}
                className="absolute inset-[-1px_0_0_0]"
              >
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full">
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[40px] w-full">
                <p className="mb-0">Ոսկեվազ գինու գործարան</p>
                <p>(Voskevaz winery)</p>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[28px] w-full">
                Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden items-center relative w-full overflow-hidden">
        <Image
          alt="Voskevaz Winery"
          className="object-cover grayscale"
          fill
          priority={false}
          src="/winery-image.jpg"
        />
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <motion.div
          ref={refDesktopMedium}
          className="relative z-10 flex flex-col gap-[32px] items-start justify-center pb-[100px] pt-[360px] px-[120px] w-full"
          initial="hidden"
          animate={isInViewDesktopMedium ? "visible" : "hidden"}
          variants={slideInFromLeft}
          transition={{ duration: DURATION.slow, ease: EASING.smooth }}
        >
          <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-white w-full">
            հարսանյաց խնջույք`
          </p>
          <div className="h-0 relative shrink-0 w-full max-w-[720px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <Image alt="" className="block max-w-none size-full" src="/separator-medium.svg" width={100} height={1} />
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full max-w-[720px]">
            <div className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[40px] w-full">
              <p className="mb-0">Ոսկեվազ գինու գործարան</p>
              <p>(Voskevaz winery)</p>
            </div>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[28px] w-full">
              Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden items-start relative w-full overflow-hidden">
        <Image
          alt="Voskevaz Winery"
          className="absolute inset-0 h-full w-full object-cover"
          src="/winery-image.jpg"
          width={1200}
          height={720}
        />
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <motion.div
          ref={refTablet}
          className="relative flex flex-col gap-[24px] items-start justify-center pb-[100px] pt-[360px] px-[40px] w-full"
          initial="hidden"
          animate={isInViewTablet ? "visible" : "hidden"}
          variants={slideInFromLeft}
          transition={{ duration: DURATION.medium, ease: EASING.smooth }}
        >
          <div className="flex flex-col gap-[32px] items-start max-w-[720px] relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">
              հարսանյաց խնջույք`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image alt="" className="block max-w-none size-full" src="/separator-tablet.svg" width={100} height={1} />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full">
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[30px] w-full">
                <p className="mb-0">Ոսկեվազ գինու գործարան</p>
                <p>(Voskevaz winery)</p>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-full">
                Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden items-start relative w-full overflow-hidden">
        <Image
          alt="Voskevaz Winery"
          className="absolute inset-0 h-full w-full object-cover"
          src="/winery-image.jpg"
          width={768}
          height={1024}
        />
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <motion.div
          ref={refMobile}
          className="relative flex flex-col gap-[24px] items-start justify-center pb-[100px] pt-[360px] px-[20px] w-full"
          initial="hidden"
          animate={isInViewMobile ? "visible" : "hidden"}
          variants={slideInFromLeft}
          transition={{ duration: DURATION.fast, ease: EASING.smooth }}
        >
          <div className="flex flex-col gap-[32px] items-start max-w-[720px] relative shrink-0 w-full">
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white w-full">
              հարսանյաց խնջույք`
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image alt="" className="block max-w-none size-full" src="/separator-mobile.svg" width={100} height={1} />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full">
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[30px] w-full">
                <p className="mb-0">Ոսկեվազ գինու գործարան</p>
                <p>(Voskevaz winery)</p>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">
                Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
