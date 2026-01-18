"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInUpMobile } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation, useIsMobile } from "@/lib/animations/hooks";

export default function DetailsSection() {
  const isMobile = useIsMobile();
  const fadeVariant = isMobile ? fadeInUpMobile : fadeInUp;

  // Separate refs for each responsive breakpoint
  const { ref: refDesktopLarge, isInView: isInViewDesktopLarge } = useScrollAnimation();
  const { ref: refDesktopMedium, isInView: isInViewDesktopMedium } = useScrollAnimation();
  const { ref: refTablet, isInView: isInViewTablet } = useScrollAnimation();
  const { ref: refMobile, isInView: isInViewMobile } = useScrollAnimation();

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-center justify-between w-full">
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="St. Gevorg Church"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/church-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <motion.div
            ref={refDesktopLarge}
            className="basis-0 bg-white flex flex-col gap-[64px] grow h-full items-start justify-center min-h-px min-w-px pl-[120px] pr-[160px] py-[80px] relative shrink-0"
            initial="hidden"
            animate={isInViewDesktopLarge ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության օր՝
              </p>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] relative shrink-0 text-[#110c09] text-[48px] w-full">
                28.03.2026
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության ժամ՝
              </p>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] relative shrink-0 text-[#110c09] text-[48px] w-full">
                15:30
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության վայր՝
              </p>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Սուրբ Գևորգ Եկեղեցի, Մուղնի
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden items-center justify-between w-full">
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="St. Gevorg Church"
              className="absolute h-full left-0 max-w-none w-full object-cover"
              src="/church-image.jpg"
              width={640}
              height={720}
            />
          </div>
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <motion.div
            ref={refDesktopMedium}
            className="basis-0 bg-white flex flex-col gap-[64px] grow h-full items-start justify-center min-h-px min-w-px p-[80px] relative shrink-0"
            initial="hidden"
            animate={isInViewDesktopMedium ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության օր՝
              </p>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] relative shrink-0 text-[#110c09] text-[48px] w-full">
                28.03.2026
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության ժամ՝
              </p>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] relative shrink-0 text-[#110c09] text-[48px] w-full">
                15:30
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              variants={fadeVariant}
              transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            >
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                Պսակադրության վայր՝
              </p>
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
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
          className="bg-white flex flex-col gap-[56px] items-start justify-center px-[40px] py-[80px] relative shrink-0 w-full"
          initial="hidden"
          animate={isInViewTablet ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Պսակադրության օր՝
            </p>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] relative shrink-0 text-[#110c09] text-[48px] w-full">
              28.03.2026
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Պսակադրության ժամ՝
            </p>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] relative shrink-0 text-[#110c09] text-[48px] w-full">
              15:30
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.medium * 0.8, ease: EASING.smooth }}
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Պսակադրության վայր՝
            </p>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
              Սուրբ Գևորգ Եկեղեցի, Մուղնի
            </p>
          </motion.div>
        </motion.div>
        <div className="h-[600px] overflow-clip relative shrink-0 w-full">
          <div className="absolute blur-[20px] filter inset-[-20px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/church-image.jpg"
                width={640}
                height={720}
              />
            </div>
          </div>
          <div className="absolute h-[600px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[520px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="St. Gevorg Church"
                className="absolute h-full left-0 max-w-none w-full object-cover"
                src="/church-image.jpg"
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
          className="bg-white flex flex-col gap-[40px] items-start justify-center px-[20px] py-[64px] relative shrink-0 w-full"
          initial="hidden"
          animate={isInViewMobile ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.fast, ease: EASING.smooth }}
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Պսակադրության օր՝
            </p>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
              28.03.2026
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.fast, ease: EASING.smooth }}
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Պսակադրության ժամ՝
            </p>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
              15:30
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.fast, ease: EASING.smooth }}
          >
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Պսակադրության վայր՝
            </p>
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#110c09] text-[32px] w-full">
              Սուրբ Գևորգ Եկեղեցի, Մուղնի
            </p>
          </motion.div>
        </motion.div>
        <div className="h-[462px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[-20px]">
            <div className="absolute inset-[-7.97%_-9.09%]">
              <Image
                alt=""
                className="block max-w-none size-full object-cover"
                src="/church-image-blurred.jpg"
                width={520}
                height={582}
              />
            </div>
          </div>
          <div className="absolute h-[462px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
            <Image
              alt="St. Gevorg Church"
              className="block max-w-none size-full object-cover"
              src="/church-image-mobile.jpg"
              width={400}
              height={462}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
