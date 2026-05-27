"use client";

import { type ReactNode, type CSSProperties } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  fadeUp,
  reducedMotionFade,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from "@/lib/motion-variants";

const MOTION_TAGS = {
  section: motion.section,
  div: motion.div,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  aside: motion.aside,
  nav: motion.nav,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
} as const;

type Tag = keyof typeof MOTION_TAGS;

type Props = {
  as?: Tag;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  variants?: Variants;
  stagger?: number;
  delayChildren?: number;
  viewport?: { once?: boolean; amount?: number; margin?: string };
};

export default function MotionSection({
  as = "section",
  id,
  className,
  style,
  children,
  variants,
  stagger,
  delayChildren,
  viewport = VIEWPORT_DEFAULT,
}: Props) {
  const reduce = useReducedMotion();
  const Wrapper = MOTION_TAGS[as];
  const resolved: Variants = reduce
    ? reducedMotionFade
    : variants ??
      (typeof stagger === "number"
        ? staggerContainer(stagger, delayChildren ?? 0)
        : fadeUp);

  return (
    <Wrapper
      id={id}
      className={className}
      style={style}
      variants={resolved}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Wrapper>
  );
}
