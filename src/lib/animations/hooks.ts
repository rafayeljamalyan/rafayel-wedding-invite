"use client";

import { useReducedMotion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { DURATION, EASING, VIEWPORT, MOBILE_BREAKPOINT } from './animation-config';

// Hook for respecting prefers-reduced-motion
export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    shouldAnimate: !shouldReduceMotion,
    duration: shouldReduceMotion ? 0.01 : DURATION.medium,
    // Return null transition if reduced motion is preferred
    getTransition: (duration: number) =>
      shouldReduceMotion ? { duration: 0.01 } : { duration, ease: EASING.smooth }
  };
}

// Hook for scroll-triggered animations
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: VIEWPORT.once,
    amount: VIEWPORT.amount,
    ...options
  });

  return { ref, isInView };
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
