"use client";

import { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import { fadeUpSm, VIEWPORT_DEFAULT } from "@/lib/motion-variants";

type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function SecHead({
  eyebrow,
  title,
  sub,
  align = "left",
  children,
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className="sec-head"
      style={
        {
          alignItems: isCenter ? "center" : "flex-start",
          textAlign: align,
        } as CSSProperties
      }
    >
      <motion.div
        className="eyebrow"
        variants={fadeUpSm}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULT}
      >
        {eyebrow}
      </motion.div>
      <div
        className="sec-head__row"
        style={{
          width: "100%",
          justifyContent: isCenter ? "center" : "space-between",
          gap: "0px",
        }}
      >
        <AnimatedText
          as="h2"
          text={title}
          mode="word"
          stagger={0.09}
          delayChildren={0.15}
          className="h-section"
          style={{ maxWidth: 820, textWrap: "pretty" as never }}
        />
        {!isCenter && sub && (
          <motion.p
            className="lead"
            style={{ maxWidth: 420, width: "720px" }}
            variants={fadeUpSm}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            {sub}
          </motion.p>
        )}
        {children}
      </div>
      {isCenter && sub && (
        <motion.p
          className="lead sec-head__sub-center"
          style={{ marginTop: 18 }}
          variants={fadeUpSm}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
