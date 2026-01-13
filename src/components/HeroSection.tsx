"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn, fadeInUp, fadeInUpMobile } from "@/lib/animations/animation-variants";
import { EASING } from "@/lib/animations/animation-config";
import { useIsMobile } from "@/lib/animations/hooks";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const fadeVariant = isMobile ? fadeInUpMobile : fadeInUp;

  return (
    <div className="relative size-full bg-white">
      {/* Desktop Large (1920-1561px and 1920+) */}
      <div className="hidden min-[1561px]:flex items-center justify-between size-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-[#f5f4f1] flex flex-col gap-[40px] grow h-full items-start justify-center min-h-px min-w-px pl-[160px] pr-[120px] py-[80px] relative shrink-0">
            <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
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
                  src="/icon-large.svg"
                  width={120}
                  height={120}
                />
              </motion.div>
              <motion.p
                className="font-['OptimaModoki:Regular',sans-serif] leading-[72px] min-w-full not-italic relative shrink-0 text-[#110c09] text-[60px] w-[min-content]"
                initial="hidden"
                animate="visible"
                variants={fadeVariant}
                transition={{ delay: 0.3, duration: 0.9, ease: EASING.smooth }}
              >
                Ռաֆայել և Լյուդմիլա
              </motion.p>
            </div>
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
            <motion.div
              className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
              initial="hidden"
              animate="visible"
              variants={fadeVariant}
              transition={{ delay: 1.0, duration: 0.8, ease: EASING.smooth }}
            >
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Ամուսնանում ենք
              </p>
              <div className="font-['Arti_v05:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#332d27] text-[28px] w-full">
                <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
                <p>ձեզ հետ անցկացնել</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="Wedding couple in Paris"
              className="absolute h-[118.52%] left-0 max-w-none top-[-12.81%] w-full"
              src="/wedding-couple.jpg"
              width={640}
              height={853}
            />
          </div>
        </div>
      </div>

      {/* Desktop Medium (1560-1201px) */}
      <div className="hidden min-[1201px]:flex min-[1561px]:hidden items-center justify-between size-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-[#f5f4f1] flex flex-col gap-[40px] grow h-full items-start justify-center min-h-px min-w-px p-[80px] relative shrink-0">
            <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
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
                  src="/icon-medium.svg"
                  width={120}
                  height={120}
                />
              </motion.div>
              <motion.p
                className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] min-w-full not-italic relative shrink-0 text-[#110c09] text-[50px] w-[min-content]"
                initial="hidden"
                animate="visible"
                variants={fadeVariant}
                transition={{ delay: 0.3, duration: 0.9, ease: EASING.smooth }}
              >
                Ռաֆայել և Լյուդմիլա
              </motion.p>
            </div>
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
            <motion.div
              className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
              initial="hidden"
              animate="visible"
              variants={fadeVariant}
              transition={{ delay: 1.0, duration: 0.8, ease: EASING.smooth }}
            >
              <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
                Ամուսնանում ենք
              </p>
              <div className="font-['Arti_v05:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#332d27] text-[24px] w-full">
                <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
                <p>ձեզ հետ անցկացնել</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-[720px] relative shrink-0 w-[640px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              alt="Wedding couple in Paris"
              className="absolute h-[118.52%] left-0 max-w-none top-[-12.81%] w-full"
              src="/wedding-couple.jpg"
              width={640}
              height={853}
            />
          </div>
        </div>
      </div>

      {/* Tablet (1200-769px) */}
      <div className="hidden min-[769px]:flex min-[1201px]:hidden flex-col items-start size-full">
        <div className="bg-[#f5f4f1] flex flex-col gap-[40px] items-start justify-center px-[40px] py-[80px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <motion.div
              className="relative shrink-0 size-[80px]"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ delay: 0.6, duration: 0.6, ease: EASING.smooth }}
            >
              <Image
                alt="Wedding Icon"
                className="block max-w-none size-full"
                src="/icon-small.svg"
                width={80}
                height={80}
              />
            </motion.div>
            <motion.p
              className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] min-w-full not-italic relative shrink-0 text-[#110c09] text-[50px] w-[min-content]"
              initial="hidden"
              animate="visible"
              variants={fadeInUpMobile}
              transition={{ delay: 0.3, duration: 0.7, ease: EASING.smooth }}
            >
              Ռաֆայել և Լյուդմիլա
            </motion.p>
          </div>
          <motion.div
            className="h-0 relative shrink-0 w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASING.smooth }}
            style={{ transformOrigin: "left" }}
          >
            <div className="absolute inset-[-1px_0_0_0]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src="/separator-tablet.svg"
                width={100}
                height={1}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUpMobile}
            transition={{ delay: 0.9, duration: 0.6, ease: EASING.smooth }}
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[44px] relative shrink-0 text-[#110c09] text-[40px] w-full">
              Ամուսնանում ենք
            </p>
            <div className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              <p className="mb-0">Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը</p>
              <p>ձեզ հետ անցկացնել</p>
            </div>
          </motion.div>
        </div>
        <div className="h-[600px] overflow-clip relative shrink-0 w-full">
          <div className="absolute blur-[20px] filter inset-[-20px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                className="absolute h-[118.52%] left-0 max-w-none top-[-12.81%] w-full"
                src="/wedding-couple.jpg"
                width={640}
                height={853}
              />
            </div>
          </div>
          <div className="absolute h-[600px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[520px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt="Wedding couple in Paris"
                className="absolute h-[118.52%] left-0 max-w-none top-[-12.81%] w-full"
                src="/wedding-couple.jpg"
                width={520}
                height={711}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (768-375px and 374px-) */}
      <div className="flex min-[769px]:hidden flex-col items-start size-full">
        <div className="bg-[#f5f4f1] flex flex-col gap-[24px] items-start justify-center px-[20px] py-[64px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <motion.div
              className="relative shrink-0 size-[80px]"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ delay: 0.5, duration: 0.5, ease: EASING.smooth }}
            >
              <Image
                alt="Wedding Icon"
                className="block max-w-none size-full"
                src="/icon-small.svg"
                width={80}
                height={80}
              />
            </motion.div>
            <motion.div
              className="font-['OptimaModoki:Regular',sans-serif] leading-[56px] min-w-full not-italic relative shrink-0 text-[#110c09] text-[50px] w-[min-content]"
              initial="hidden"
              animate="visible"
              variants={fadeInUpMobile}
              transition={{ delay: 0.2, duration: 0.6, ease: EASING.smooth }}
            >
              <p className="mb-0">Ռաֆայել</p>
              <p>և Լյուդմիլա</p>
            </motion.div>
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
          <motion.div
            className="flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUpMobile}
            transition={{ delay: 0.8, duration: 0.5, ease: EASING.smooth }}
          >
            <p className="font-['OptimaModoki:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#110c09] text-[28px] w-full">
              Ամուսնանում ենք
            </p>
            <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#332d27] text-[20px] w-full">
              Եվ շատ ցանկանում ենք մեր ամենաուրախ օրը ձեզ հետ անցկացնել
            </p>
          </motion.div>
        </div>
        <div className="h-[462px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[-20px]">
            <div className="absolute inset-[-7.97%_-9.09%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src="/wedding-couple-blurred.jpg"
                width={520}
                height={582}
              />
            </div>
          </div>
          <div className="absolute h-[462px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px]">
            <Image
              alt="Wedding couple in Paris"
              className="block max-w-none size-full"
              src="/wedding-couple-mobile.jpg"
              width={400}
              height={462}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
