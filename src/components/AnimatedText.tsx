"use client";

import { type CSSProperties } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  EASE_OUT,
  VIEWPORT_DEFAULT,
  reducedMotionFade,
} from "@/lib/motion-variants";

type Mode = "line" | "word" | "char";

const MOTION_TAGS = {
  span: motion.span,
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
} as const;

type Tag = keyof typeof MOTION_TAGS;

type Props = {
  text: string;
  as?: Tag;
  mode?: Mode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  style?: CSSProperties;
  viewport?: { once?: boolean; amount?: number; margin?: string };
};

const splitBy: Record<Mode, (t: string) => string[]> = {
  line: (t) => t.split("\n"),
  word: (t) => t.split(" "),
  char: (t) => Array.from(t),
};

export default function AnimatedText({
  text,
  as = "span",
  mode = "line",
  stagger = 0.08,
  delayChildren = 0.05,
  className,
  style,
  viewport = VIEWPORT_DEFAULT,
}: Props) {
  const reduce = useReducedMotion();
  const parts = splitBy[mode](text);
  const Wrapper = MOTION_TAGS[as];

  if (reduce) {
    return (
      <Wrapper
        className={className}
        style={style}
        variants={reducedMotionFade}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {text}
      </Wrapper>
    );
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };

  const item: Variants = {
    hidden: { y: "110%", opacity: mode === "char" ? 0 : 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: EASE_OUT },
    },
  };

  return (
    <Wrapper
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {parts.map((part, i) => {
        const isLast = i === parts.length - 1;
        const blockStyle: CSSProperties =
          mode === "line"
            ? { display: "block", overflow: "hidden", paddingBottom: 4 }
            : {
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                marginRight: mode === "word" && !isLast ? "0.28em" : 0,
              };

        return (
          <span key={i} style={blockStyle}>
            <motion.span
              variants={item}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {part}
            </motion.span>
          </span>
        );
      })}
    </Wrapper>
  );
}
