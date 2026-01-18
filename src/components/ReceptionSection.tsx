"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, scaleIn } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation, useIsMobile } from "@/lib/animations/hooks";

export default function ReceptionSection() {
  const isMobile = useIsMobile();

  // Separate refs for each responsive breakpoint
  const { ref: refDesktopLarge, isInView: isInViewDesktopLarge } = useScrollAnimation();
  const { ref: refDesktopMedium, isInView: isInViewDesktopMedium } = useScrollAnimation();
  const { ref: refTablet, isInView: isInViewTablet } = useScrollAnimation();
  const { ref: refMobile, isInView: isInViewMobile } = useScrollAnimation();

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-center justify-between w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <motion.div
            ref={refDesktopLarge}
            className="basis-0 bg-[#f5f4f1] flex flex-col gap-[40px] grow h-full items-start justify-center min-h-px min-w-px pl-[160px] pr-[120px] py-[80px] relative shrink-0"
            initial="hidden"
            animate={isInViewDesktopLarge ? "visible" : "hidden"}
            variants={slideInFromLeft}
            transition={{ duration: DURATION.slow, ease: EASING.smooth }}
          >
            <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <motion.div
                className="relative shrink-0 size-[120px]"
                animate={!isMobile ? { scale: [1.0, 1.05, 1.0] } : {}}
                transition={!isMobile ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
              >
                <Image
                  alt="Wedding Icon"
                  className="block max-w-none size-full"
                  src="/icon-large.svg"
                  width={120}
                  height={120}
                />
              </motion.div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#332d27] text-[24px] w-[min-content]">
                Պսակադրության արարողությունը՝
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Ոսկեվազ գինու գործարան (Voskevaz winery)
              </p>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
              </p>
            </div>
          </motion.div>
        </div>
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="Voskevaz Winery"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/winery-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden items-center justify-between w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <motion.div
            ref={refDesktopMedium}
            className="basis-0 bg-[#f5f4f1] flex flex-col gap-[40px] grow h-full items-start justify-center min-h-px min-w-px p-[80px] relative shrink-0"
            initial="hidden"
            animate={isInViewDesktopMedium ? "visible" : "hidden"}
            variants={slideInFromLeft}
            transition={{ duration: DURATION.slow, ease: EASING.smooth }}
          >
            <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <motion.div
                className="relative shrink-0 size-[120px]"
                animate={!isMobile ? { scale: [1.0, 1.05, 1.0] } : {}}
                transition={!isMobile ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
              >
                <Image
                  alt="Wedding Icon"
                  className="block max-w-none size-full"
                  src="/icon-medium.svg"
                  width={120}
                  height={120}
                />
              </motion.div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[#332d27] text-[24px] w-[min-content]">
                Պսակադրության արարողությունը՝
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Ոսկեվազ գինու գործարան (Voskevaz winery)
              </p>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
              </p>
            </div>
          </motion.div>
        </div>
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="Voskevaz Winery"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/winery-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden flex-col items-start w-full">
        <motion.div
          ref={refTablet}
          className="bg-[#f5f4f1] flex flex-col gap-[40px] items-start justify-center px-[40px] py-[80px] relative shrink-0 w-full"
          initial="hidden"
          animate={isInViewTablet ? "visible" : "hidden"}
          variants={slideInFromLeft}
          transition={{ duration: DURATION.medium, ease: EASING.smooth }}
        >
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <motion.div
              className="relative shrink-0 size-[80px]"
              animate={{ scale: [1.0, 1.02, 1.0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                alt="Wedding Icon"
                className="block max-w-none size-full"
                src="/icon-small.svg"
                width={80}
                height={80}
              />
            </motion.div>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#332d27] text-[20px] w-[min-content]">
              Պսակադրության արարողությունը՝
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
              Ոսկեվազ գինու գործարան (Voskevaz winery)
            </p>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
            </p>
          </div>
        </motion.div>
        <div className="h-[600px] overflow-clip relative shrink-0 w-full">
          <div className="absolute blur-[20px] filter inset-[-20px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/winery-image.jpg"
                width={640}
                height={720}
              />
            </div>
          </div>
          <div className="absolute h-[600px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[520px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="Voskevaz Winery"
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/winery-image.jpg"
                width={520}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col items-start w-full">
        <motion.div
          ref={refMobile}
          className="bg-[#f5f4f1] flex flex-col gap-[24px] items-start justify-center px-[20px] py-[64px] relative shrink-0 w-full"
          initial="hidden"
          animate={isInViewMobile ? "visible" : "hidden"}
          variants={slideInFromLeft}
          transition={{ duration: DURATION.fast, ease: EASING.smooth }}
        >
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[80px]">
              <Image
                alt="Wedding Icon"
                className="block max-w-none size-full"
                src="/icon-small.svg"
                width={80}
                height={80}
              />
            </div>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#332d27] text-[20px] w-[min-content]">
              Պսակադրության արարողությունը՝
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#110c09] text-[32px] w-full">
              Ոսկեվազ գինու գործարան (Voskevaz winery)
            </p>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Հայաստան, 0220, Արագածոտնի մարզ, Ոսկեվազ գյուղ
            </p>
          </div>
        </motion.div>
        <div className="h-[462px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[-20px]">
            <div className="absolute inset-[-7.97%_-9.09%]">
              <Image
                alt=""
                className="block max-w-none size-full object-cover"
                src="/winery-image-blurred.jpg"
                width={520}
                height={582}
              />
            </div>
          </div>
          <div className="absolute h-[462px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
            <Image
              alt="Voskevaz Winery"
              className="block max-w-none size-full object-cover"
              src="/winery-image.jpg"
              width={400}
              height={462}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
