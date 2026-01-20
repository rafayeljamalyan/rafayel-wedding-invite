"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInUpMobile, imageReveal } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation, useIsMobile } from "@/lib/animations/hooks";

export default function DetailsSection() {
  const isMobile = useIsMobile();
  const fadeVariant = isMobile ? fadeInUpMobile : fadeInUp;

  // Separate refs for each responsive breakpoint
  const { ref: refDesktopLarge, isInView: isInViewDesktopLarge } = useScrollAnimation();
  const { ref: refDesktopMedium, isInView: isInViewDesktopMedium } = useScrollAnimation();
  const { ref: refTablet, isInView: isInViewTablet } = useScrollAnimation();
  const { ref: refMobile, isInView: isInViewMobile } = useScrollAnimation({ amount: 0.1, margin: "0px" });

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-center gap-[120px] bg-[#f5f4f1] px-[200px] py-[120px] w-full">
        <motion.div
          className="h-[720px] relative shrink-0 w-[640px]"
          initial="hidden"
          animate={isInViewDesktopLarge ? "visible" : "hidden"}
          variants={imageReveal}
          transition={{ duration: DURATION.medium, ease: EASING.smooth }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="St. Gevorg Church"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/church-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </motion.div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <motion.div
            ref={refDesktopLarge}
            className="basis-0 flex flex-col gap-[80px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0"
            initial="hidden"
            animate={isInViewDesktopLarge ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                Պսակադրության օր՝
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
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                28.03.2026
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                Պսակադրության ժամ՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInViewDesktopLarge ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: DURATION.medium, ease: EASING.smooth, delay: 0.4 }}
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
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                15:30
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                Պսակադրության վայր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInViewDesktopLarge ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: DURATION.medium, ease: EASING.smooth, delay: 0.6 }}
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
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Սուրբ Գևորգ Եկեղեցի, Մուղնի
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden items-center gap-[80px] bg-[#f5f4f1] px-[120px] py-[100px] w-full">
        <motion.div
          className="h-[720px] relative shrink-0 w-[640px]"
          initial="hidden"
          animate={isInViewDesktopMedium ? "visible" : "hidden"}
          variants={imageReveal}
          transition={{ duration: DURATION.medium, ease: EASING.smooth }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="St. Gevorg Church"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/church-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </motion.div>
        <div className="flex flex-1 items-center self-stretch">
          <motion.div
            ref={refDesktopMedium}
            className="flex flex-1 flex-col gap-[80px] items-start justify-center min-h-px min-w-px relative"
            initial="hidden"
            animate={isInViewDesktopMedium ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                Պսակադրության օր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-medium.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                28.03.2026
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                Պսակադրության ժամ՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-medium.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                15:30
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                Պսակադրության վայր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-medium.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Սուրբ Գևորգ Եկեղեցի, Մուղնի
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden flex-col items-start w-full">
        <motion.div
          ref={refTablet}
          className="bg-[#f5f4f1] flex flex-col gap-[40px] items-center px-[40px] py-[80px] relative shrink-0 w-full"
          initial="hidden"
          animate={isInViewTablet ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="h-[600px] max-w-[640px] relative shrink-0 w-full"
            initial="hidden"
            animate={isInViewTablet ? "visible" : "hidden"}
            variants={imageReveal}
            transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="St. Gevorg Church"
                className="absolute inset-0 max-w-none size-full object-cover"
                src="/church-image.jpg"
                width={640}
                height={600}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[64px] items-start justify-center relative shrink-0 w-full"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-[20px] items-start max-w-[720px] relative shrink-0 w-full"
              variants={fadeInUpMobile}
              transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության օր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-tablet.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#110c09] text-[30px] w-[min-content]">
                28.03.2026
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start max-w-[720px] relative shrink-0 w-full"
              variants={fadeInUpMobile}
              transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության ժամ՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-tablet.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#110c09] text-[30px] w-[min-content]">
                15:30
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start max-w-[720px] relative shrink-0 w-full"
              variants={fadeInUpMobile}
              transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության վայր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-tablet.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#110c09] text-[30px] w-[min-content]">
                Սուրբ Գևորգ եկեղեցի, Մուղնի
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col items-start w-full">
        <motion.div
          ref={refMobile}
          className="bg-[#f5f4f1] flex flex-col gap-[40px] items-center px-[20px] py-[80px] relative shrink-0 w-full"
          initial="hidden"
          animate={isInViewMobile ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="h-[400px] max-w-[640px] relative shrink-0 w-full"
            initial="hidden"
            animate={isInViewMobile ? "visible" : "hidden"}
            variants={imageReveal}
            transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="St. Gevorg Church"
                className="absolute inset-0 max-w-none size-full object-cover"
                src="/church-image.jpg"
                width={640}
                height={400}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[64px] items-start justify-center relative shrink-0 w-full"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-[20px] items-start max-w-[720px] relative shrink-0 w-full"
              variants={fadeInUpMobile}
              transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[20px] w-full">
                Պսակադրության օր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-mobile.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#110c09] text-[30px] w-[min-content]">
                28.03.2026
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start max-w-[720px] relative shrink-0 w-full"
              variants={fadeInUpMobile}
              transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[20px] w-full">
                Պսակադրության ժամ՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-mobile.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#110c09] text-[30px] w-[min-content]">
                15:30
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] items-start max-w-[720px] relative shrink-0 w-full"
              variants={fadeInUpMobile}
              transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[20px] w-full">
                Պսակադրության վայր՝
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-mobile.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] min-w-full relative shrink-0 text-[#110c09] text-[30px] w-[min-content]">
                Սուրբ Գևորգ եկեղեցի, Մուղնի
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
