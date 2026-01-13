// Easing functions (cubic-bezier curves)
export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
  spring: [0.6, 0.05, -0.01, 0.9] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number]
};

// Duration constants (in seconds)
export const DURATION = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.9,
  verySlow: 1.2
};

// Viewport intersection thresholds for useInView
export const VIEWPORT = {
  once: true,          // Animate only once
  amount: 0.3,         // Trigger when 30% visible
  margin: "-100px"     // Start animation 100px before viewport
};

// Mobile-specific overrides
export const MOBILE_DURATION_MULTIPLIER = 0.7; // 30% faster on mobile
export const MOBILE_REDUCE_MOTION = true;

// Mobile breakpoint (matches Tailwind)
export const MOBILE_BREAKPOINT = 769;
