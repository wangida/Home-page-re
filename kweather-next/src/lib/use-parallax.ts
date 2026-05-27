"use client";

import { useEffect, useState, type RefObject } from "react";
import {
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

type Options = {
  strength?: number;
  mobileScale?: number;
  mobileQuery?: string;
};

type ScaleOptions = Options & {
  from?: number;
  to?: number;
};

export function useIsMobile(query = "(max-width: 768px)") {
  const [is, setIs] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const update = () => setIs(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return is;
}

function useSectionProgress(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return scrollYProgress;
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  {
    strength = 0.25,
    mobileScale = 0.3,
    mobileQuery = "(max-width: 768px)",
  }: Options = {}
): MotionValue<number> {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile(mobileQuery);
  const progress = useSectionProgress(ref);

  const effective = reduce ? 0 : isMobile ? strength * mobileScale : strength;
  const range = effective * 320;

  return useTransform(progress, [0, 1], [range, -range]);
}

export function useParallaxScale(
  ref: RefObject<HTMLElement | null>,
  {
    from = 1.18,
    to = 0.94,
    mobileScale = 0.4,
    mobileQuery = "(max-width: 768px)",
  }: ScaleOptions = {}
): MotionValue<number> {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile(mobileQuery);
  const progress = useSectionProgress(ref);

  const damp = reduce ? 0 : isMobile ? mobileScale : 1;
  const f = 1 + (from - 1) * damp;
  const t = 1 + (to - 1) * damp;

  return useTransform(progress, [0, 1], [f, t]);
}

export function useParallaxOpacity(
  ref: RefObject<HTMLElement | null>,
  { peak = 1, edge = 0.4 }: { peak?: number; edge?: number } = {}
): MotionValue<number> {
  const progress = useSectionProgress(ref);
  return useTransform(progress, [0, 0.3, 0.7, 1], [edge, peak, peak, edge]);
}
