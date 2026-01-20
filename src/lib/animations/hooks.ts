"use client";

import { useReducedMotion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { DURATION, EASING, VIEWPORT, MOBILE_BREAKPOINT, MOBILE_DURATION_MULTIPLIER } from './animation-config';

// Hook for respecting prefers-reduced-motion
export function useAnimationConfig(isMobile = false) {
  const shouldReduceMotion = useReducedMotion();
  const durationMultiplier = isMobile ? MOBILE_DURATION_MULTIPLIER : 1;

  return {
    shouldAnimate: !shouldReduceMotion,
    duration: shouldReduceMotion ? 0.01 : DURATION.medium * durationMultiplier,
    // Return null transition if reduced motion is preferred
    getTransition: (duration: number) =>
      shouldReduceMotion ? { duration: 0.01 } : { duration: duration * durationMultiplier, ease: EASING.smooth }
  };
}

// Hook for scroll-triggered animations
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: VIEWPORT.once,
    amount: VIEWPORT.amount,
    margin: VIEWPORT.margin,
    ...options
  });

  return { ref, isInView };
}

// Hook for scroll-based parallax
export function useScrollParallax(maxOffset = 16) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [maxOffset, -maxOffset]);
  return { y };
}

// Hook for detecting mobile viewport
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
