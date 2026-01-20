"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  fadeInUpMobile,
} from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation } from "@/lib/animations/hooks";

export default function ScheduleSection() {


  // Desktop Large refs
  const { ref: refDesktopLarge, isInView: isInViewDesktopLarge } =
    useScrollAnimation();

  // Desktop Medium refs
  const { ref: refDesktopMedium, isInView: isInViewDesktopMedium } =
    useScrollAnimation();

  // Tablet refs
  const { ref: refTablet, isInView: isInViewTablet } = useScrollAnimation();

  // Mobile refs
  const { ref: refMobile, isInView: isInViewMobile } = useScrollAnimation();

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-start gap-[80px] bg-white px-[200px] py-[120px] w-full">
        <motion.div
          ref={refDesktopLarge}
          variants={staggerContainer}
          initial="hidden"
          animate={isInViewDesktopLarge ? "visible" : "hidden"}
          className="flex flex-1 flex-col gap-[32px] items-center min-h-px min-w-px relative"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="relative shrink-0 size-[120px]"
          >
            <Image
              alt=""
              className="block max-w-none size-full"
              src="/icon-large.svg"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
              17:00
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInViewDesktopLarge ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: DURATION.medium, ease: EASING.smooth, delay: 0.2 }}
                style={{ originX: 0.5 }}
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
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] text-center w-full">
              Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInViewDesktopLarge ? "visible" : "hidden"}
          className="flex flex-1 flex-col gap-[32px] items-center min-h-px min-w-px relative"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="relative shrink-0 size-[120px]"
          >
            <Image
              alt=""
              className="block max-w-none size-full"
              src="/icon-medium.svg"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
              18:00
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInViewDesktopLarge ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: DURATION.medium, ease: EASING.smooth, delay: 0.2 }}
                style={{ originX: 0.5 }}
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
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] text-center w-full">
              Ընթրիք ու լիիիքը պար
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden bg-white gap-[80px] items-start px-[120px] py-[100px] w-full">
        <motion.div
          ref={refDesktopMedium}
          variants={staggerContainer}
          initial="hidden"
          animate={isInViewDesktopMedium ? "visible" : "hidden"}
          className="flex flex-1 flex-col gap-[32px] items-center min-h-px min-w-px"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="relative shrink-0 size-[120px]"
          >
            <Image alt="" className="block max-w-none size-full" src="/wine.svg" width={120} height={120} />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
              17:00
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image alt="" className="block max-w-none size-full" src="/separator-medium.svg" width={100} height={1} />
              </div>
            </div>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] text-center w-full">
              Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInViewDesktopMedium ? "visible" : "hidden"}
          className="flex flex-1 flex-col gap-[32px] items-center min-h-px min-w-px"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="relative shrink-0 size-[120px]"
          >
            <Image alt="" className="block max-w-none size-full" src="/dinner.svg" width={120} height={120} />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="flex flex-col gap-[20px] items-start relative shrink-0 w-full"
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
              18:00
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <Image alt="" className="block max-w-none size-full" src="/separator-medium.svg" width={100} height={1} />
              </div>
            </div>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[28px] text-center w-full">
              Ընթրիք ու լիիիքը պար
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden flex-col items-start w-full">
        <motion.div
          ref={refTablet}
          variants={staggerContainer}
          initial="hidden"
          animate={isInViewTablet ? "visible" : "hidden"}
          className="bg-white flex flex-col gap-[64px] items-center px-[40px] py-[80px] relative shrink-0 w-full"
        >
          <motion.div
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="flex flex-col gap-[32px] items-center max-w-[720px] relative shrink-0 w-full"
          >
            <div className="relative shrink-0 size-[100px]">
              <Image alt="" className="block max-w-none size-full" src="/wine.svg" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
                17:00
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInViewTablet ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: DURATION.medium,
                    ease: EASING.smooth,
                    delay: 0.2,
                  }}
                  style={{ originX: 0 }}
                  className="absolute inset-[-1px_0_0_0]"
                >
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-tablet.svg"
                    width={100}
                    height={1}
                  />
                </motion.div>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#332d27] text-[24px] text-center w-full">
                Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.medium, ease: EASING.smooth }}
            className="flex flex-col gap-[32px] items-center max-w-[720px] relative shrink-0 w-full"
          >
            <div className="relative shrink-0 size-[100px]">
              <Image alt="" className="block max-w-none size-full" src="/dinner.svg" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
                18:00
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInViewTablet ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: DURATION.medium,
                    ease: EASING.smooth,
                    delay: 0.4,
                  }}
                  style={{ originX: 0 }}
                  className="absolute inset-[-1px_0_0_0]"
                >
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/separator-tablet.svg"
                    width={100}
                    height={1}
                  />
                </motion.div>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#332d27] text-[24px] text-center w-full">
                Ընթրիք ու լիիիքը պար
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col items-start w-full">
        <motion.div
          ref={refMobile}
          variants={staggerContainer}
          initial="hidden"
          animate={isInViewMobile ? "visible" : "hidden"}
          className="bg-white flex flex-col gap-[64px] items-start px-[20px] py-[80px] relative shrink-0 w-full"
        >
          <motion.div
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.fast, ease: EASING.smooth }}
            className="flex flex-col gap-[32px] items-center max-w-[720px] relative shrink-0 w-full"
          >
            <div className="relative shrink-0 size-[100px]">
              <Image alt="" className="block max-w-none size-full" src="/wine.svg" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
                17:00
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-mobile.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#332d27] text-[20px] text-center w-full">
                Ամուսնության պաշտոնական գրանցում և գինու հյուրասիրություն
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMobile}
            transition={{ duration: DURATION.fast, ease: EASING.smooth }}
            className="flex flex-col gap-[32px] items-center max-w-[720px] relative shrink-0 w-full"
          >
            <div className="relative shrink-0 size-[100px]">
              <Image alt="" className="block max-w-none size-full" src="/dinner.svg" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#110c09] text-[40px] text-center w-full">
                18:00
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image alt="" className="block max-w-none size-full" src="/separator-mobile.svg" width={100} height={1} />
                </div>
              </div>
              <p className="font-['Arti_v05:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#332d27] text-[20px] text-center w-full">
                Ընթրիք ու լիիիքը պար
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
