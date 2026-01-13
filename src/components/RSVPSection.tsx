"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitRSVP } from "@/app/actions/submitRSVP";
import { scaleIn } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation } from "@/lib/animations/hooks";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { ref, isInView } = useScrollAnimation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!name.trim()) {
      setErrorMessage("Անունը պարտադիր է");
      setSubmitStatus("error");
      return;
    }

    const countNum = parseInt(count);
    if (!count || isNaN(countNum) || countNum < 1 || countNum > 20) {
      setErrorMessage("Անդամների քանակը պետք է լինի 1-ից 20-ի միջև");
      setSubmitStatus("error");
      return;
    }

    // Submit to server
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await submitRSVP({ name: name.trim(), count: countNum });

      if (result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Ուղարկումը ձախողվեց, խնդրում ենք կրկին փորձել");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative size-full bg-white">
      {/* Mobile (max-width: 768px) & Tablet MD (769px-1200px) & Desktop L (1201px-1560px) & Desktop XL (1561px+) */}
      <div className="flex flex-col gap-[10px] items-center justify-center px-[20px] md:px-[40px] min-[1201px]:px-[80px] py-[64px] md:py-[120px] min-[1201px]:py-[160px] relative size-full">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ scale: [1.0, 1.1] }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <Image
            alt=""
            className="absolute inset-0 max-w-none object-cover size-full"
            src="/rsvp-bg.jpg"
            fill
            style={{ objectPosition: "50% 50%" }}
          />
        </motion.div>
        <motion.div
          ref={ref}
          className="bg-white flex flex-col gap-[24px] min-[1201px]:gap-[40px] items-end p-[20px] md:p-[24px] min-[1201px]:p-[40px] relative shrink-0 w-full min-[1201px]:max-w-[600px] min-[1201px]:w-[600px] z-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
          transition={{ duration: DURATION.medium, ease: EASING.smooth }}
        >
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: EASING.smooth }}
                className="flex flex-col gap-[24px] items-center w-full"
              >
                <div className="text-[#2d5016] text-center">
                  <p className="font-['Arti_v05:Regular',sans-serif] text-[24px] min-[1201px]:text-[28px] leading-[32px] min-[1201px]:leading-[36px] mb-[12px]">
                    ✓ Շնորհակալություն!
                  </p>
                  <p className="font-['Arti_v05:Regular',sans-serif] text-[18px] min-[1201px]:text-[20px] leading-[24px] min-[1201px]:leading-[28px]">
                    Ձեր RSVP-ն հաջողությամբ ուղարկվել է։ Կտեսնվենք մարտի 28-ին։
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-[24px] min-[1201px]:gap-[40px] items-end w-full"
              >
                <p className="font-['Arti_v05:Regular',sans-serif] leading-[24px] min-[1201px]:leading-[28px] min-[1561px]:leading-[36px] not-italic relative shrink-0 text-[#332d27] text-[20px] min-[1201px]:text-[24px] min-[1561px]:text-[28px] w-full">
                  Խնդրում ենք ստորև մուտքագրել Ձեր անունը և ազգանունը, ինչպես նաև նշել անդամների քանակը՝ մասնակցությունը հաստատելու համար։
                </p>
                <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <motion.div
                    className="border-[#e3e3df] border-b border-solid flex items-center pb-[16px] pt-[14px] px-[16px] relative shrink-0 w-full"
                    whileFocus={{ boxShadow: "0 2px 0 0 rgba(17, 12, 9, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Անուն ազգանուն"
                      disabled={isSubmitting}
                      className="flex-1 font-['Arti_v05:Regular',sans-serif] leading-[20px] min-[1201px]:leading-[24px] not-italic text-[#6b6b6b] text-[18px] min-[1201px]:text-[20px] bg-transparent outline-none placeholder:text-[#6b6b6b] disabled:opacity-50"
                    />
                  </motion.div>
                  <motion.div
                    className="border-[#e3e3df] border-b border-solid flex items-center pb-[16px] pt-[14px] px-[16px] relative shrink-0 w-full"
                    whileFocus={{ boxShadow: "0 2px 0 0 rgba(17, 12, 9, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="number"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      placeholder="Անդամների քանակ"
                      disabled={isSubmitting}
                      min="1"
                      max="20"
                      className="flex-1 font-['Arti_v05:Regular',sans-serif] leading-[20px] min-[1201px]:leading-[24px] not-italic text-[#6b6b6b] text-[18px] min-[1201px]:text-[20px] bg-transparent outline-none placeholder:text-[#6b6b6b] disabled:opacity-50"
                    />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {submitStatus === "error" && errorMessage && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-['Arti_v05:Regular',sans-serif] text-[16px] text-[#c41e3a] w-full text-right"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  animate={isSubmitting ? { scale: [1, 1.02, 1] } : {}}
                  transition={isSubmitting ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
                  className="bg-[#110c09] flex items-center justify-center pb-[16px] pt-[14px] px-[40px] relative shrink-0 w-full md:w-auto md:self-end disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <p className="font-['OptimaModoki:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                    {isSubmitting ? "Ուղարկվում է..." : "Ուղարկել"}
                  </p>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
