"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { scaleIn, fadeInUp, fadeInUpMobile } from "@/lib/animations/animation-variants";
import { EASING } from "@/lib/animations/animation-config";
import { useIsMobile, useScrollParallax } from "@/lib/animations/hooks";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const { y } = useScrollParallax(16);
  const parallaxY = shouldReduceMotion || isMobile ? 0 : y;
  const fadeVariant = isMobile ? fadeInUpMobile : fadeInUp;

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex h-screen items-center relative size-full overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
          <Image
            alt="Wedding couple in Paris"
            className="object-cover grayscale blur-[2px]"
            fill
            priority
            src="/wedding-couple.jpg"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <div className="relative z-10 flex flex-col gap-[40px] items-start justify-center pb-[80px] pt-[200px] px-[120px] w-full">
          <motion.div
            className="relative shrink-0 size-[120px]"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.6, duration: 0.8, ease: EASING.smooth }}
          >
            <Image
              alt="Wedding Icon"
              className="block max-w-none size-full"
              src="/rings-white.svg"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-[32px] items-start max-w-[720px] relative shrink-0 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            transition={{ delay: 0.3, duration: 0.9, ease: EASING.smooth }}
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[60px] text-white w-full">
              Ռաֆայել և Լյուդմիլա
            </p>
            <motion.div
              className="h-0 relative shrink-0 w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.0, ease: EASING.smooth }}
              style={{ transformOrigin: "left" }}
            >
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </motion.div>
            <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[40px] w-full">
                Ամուսնանում ենք
              </p>
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[28px] w-full">
                <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
                <p>ձեզ հետ անցկացնել</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex h-screen min-[1561px]:hidden items-center relative size-full overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
          <Image
            alt="Wedding couple in Paris"
            className="object-cover grayscale blur-[2px]"
            fill
            priority
            src="/wedding-couple.jpg"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <div className="relative z-10 flex flex-col gap-[40px] items-start justify-center pb-[80px] pt-[200px] px-[120px] w-full">
          <motion.div
            className="relative shrink-0 size-[120px]"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.6, duration: 0.8, ease: EASING.smooth }}
          >
            <Image
              alt="Wedding Icon"
              className="block max-w-none size-full"
              src="/rings-white.svg"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-[32px] items-start max-w-[720px] relative shrink-0 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            transition={{ delay: 0.3, duration: 0.9, ease: EASING.smooth }}
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[60px] text-white w-full">
              Ռաֆայել և Լյուդմիլա
            </p>
            <motion.div
              className="h-0 relative shrink-0 w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.0, ease: EASING.smooth }}
              style={{ transformOrigin: "left" }}
            >
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-medium.svg"
                  width={100}
                  height={1}
                />
              </div>
            </motion.div>
            <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[48px] relative shrink-0 text-[40px] w-full">
                Ամուսնանում ենք
              </p>
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[28px] w-full">
                <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
                <p>ձեզ հետ անցկացնել</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden items-center relative size-full overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
          <Image
            alt="Wedding couple in Paris"
            className="object-cover grayscale blur-[2px]"
            fill
            priority
            src="/wedding-couple.jpg"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
        <div className="relative z-10 flex flex-col gap-[24px] items-start justify-center pb-[80px] pt-[200px] px-[40px] w-full">
          <motion.div
            className="relative shrink-0 size-[120px]"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.6, duration: 0.7, ease: EASING.smooth }}
          >
            <Image
              alt="Wedding Icon"
              className="block max-w-none size-full"
              src="/rings-white.svg"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-[24px] items-start max-w-[720px] relative shrink-0 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUpMobile}
            transition={{ delay: 0.3, duration: 0.8, ease: EASING.smooth }}
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] not-italic relative shrink-0 text-[50px] text-white w-full">
              Ռաֆայել և Լյուդմիլա
            </p>
            <motion.div
              className="h-0 relative shrink-0 w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.9, ease: EASING.smooth }}
              style={{ transformOrigin: "left" }}
            >
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-large.svg"
                  width={100}
                  height={1}
                />
              </div>
            </motion.div>
            <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[30px] w-full">
                Ամուսնանում ենք
              </p>
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-full">
                <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
                <p>ձեզ հետ անցկացնել</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col items-start size-full">
        <div className="relative flex flex-col gap-[24px] items-start justify-center pb-[80px] pt-[200px] px-[20px] w-full">
          <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
            <Image
              alt="Wedding couple in Paris"
              className="absolute inset-0 object-cover"
              fill
              priority
              src="/wedding-couple.jpg"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[rgba(17,12,9,0.3)]" />
          <motion.div
            className="relative shrink-0 size-[120px]"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.5, duration: 0.6, ease: EASING.smooth }}
          >
            <Image
              alt="Wedding Icon"
              className="block max-w-none size-full"
              src="/rings-white.svg"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-[24px] items-start max-w-[720px] relative w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUpMobile}
            transition={{ delay: 0.2, duration: 0.6, ease: EASING.smooth }}
          >
            <div className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] not-italic text-[50px] text-white w-full">
              <p className="mb-0">Ռաֆայել</p>
              <p>և Լյուդմիլա</p>
            </div>
            <motion.div
              className="h-0 relative shrink-0 w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.7, ease: EASING.smooth }}
              style={{ transformOrigin: "left" }}
            >
              <div className="absolute inset-[-1px_0_0_0]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/separator-mobile.svg"
                  width={100}
                  height={1}
                />
              </div>
            </motion.div>
            <div className="flex flex-col gap-[12px] items-start not-italic text-white w-full">
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] text-[30px] w-full">
                Ամուսնանում ենք
              </p>
              <div className="font-['OptimaModoki:Regular',sans-serif] leading-[28px] text-[20px] w-full">
                <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
                <p>ձեզ հետ անցկացնել</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
