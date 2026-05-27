import type { Variants, Transition } from "motion/react";

export const EASE = [0.2, 0.7, 0.2, 1] as const;
export const EASE_OUT = [0.2, 0.8, 0.2, 1] as const;
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const VIEWPORT_DEFAULT = { once: true, amount: 0.25 } as const;
export const VIEWPORT_LOOSE = { once: true, amount: 0.1 } as const;
export const VIEWPORT_TIGHT = { once: true, amount: 0.45 } as const;

const baseTransition: Transition = { duration: 1.0, ease: EASE_EXPO };
const punchyTransition: Transition = { duration: 1.1, ease: EASE_EXPO };

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 64, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: baseTransition },
};

export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_EXPO } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: punchyTransition },
};

export const blurUp: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.94, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: EASE_EXPO },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_EXPO },
  },
};

// 가로 스크롤 트랙용: scale 확대 시 좌측 모서리가 트랙 밖으로 잘리는 것을 피하기 위해
// 좌우 움직임 없이 세로 상승만 한다.
export const cardRise: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_EXPO },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -64, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: punchyTransition },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 64, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: punchyTransition },
};

export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0.05
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: EASE_EXPO },
  },
};

export const textLineRise: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 1.05, ease: EASE_EXPO },
  },
};

export const reducedMotionFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
