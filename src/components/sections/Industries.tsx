"use client";

import { MouseEvent } from "react";
import { motion } from "motion/react";
import {
  cardReveal,
  fadeUp,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from "@/lib/motion-variants";

const REFERENCES: { key: string; label: string; img: string }[] = [
  { key: "biz",    label: "[ 기업 · 현대자동차 환경측정망 ]",      img: "/assets/thum_01_re.png" },
  { key: "gov",    label: "[ 공공기관 · 울산항만공사 방재기상 ]",       img: "/assets/thum_02_re.png" },
  { key: "med",    label: "[ 병원 · 양산시 시나브로 복지관 ]",          img: "/assets/thum_03_re.png" },
  { key: "house",  label: "[ 주거공간 · 포스코이앤씨 더샵 리오몬트 ]",  img: "/assets/thum_04_re.png" },
  { key: "edu",    label: "[ 학교 · 충북 오송2 초등학교 ]",             img: "/assets/thum_05_re.png" },
  { key: "sports", label: "[ 스포츠&레저 · KPGA ]",                     img: "/assets/thum_06_re.png" },
];

const PUBLIC_LOGOS = [
  "/assets/logo01_01.png",
  "/assets/logo01_02.png",
  "/assets/logo01_03.png",
  "/assets/logo01_04.png",
  "/assets/logo01_05.png",
  "/assets/logo01_06.png",
  "/assets/logo01_07.png",
  "/assets/logo01_08.png",
  "/assets/logo01_09.png",
  "/assets/logo01_10.png",
];

const PRIVATE_LOGOS = [
  "/assets/logo02_01.png",
  "/assets/logo02_02.png",
  "/assets/logo02_03.png",
  "/assets/logo02_04.png",
  "/assets/logo02_05.png",
  "/assets/logo02_06.png",
  "/assets/logo02_07.png",
  "/assets/logo02_08.png",
  "/assets/logo02_09.png",
  "/assets/logo02_10.png",
];

function LogoMarquee({
  items,
  reverse = false,
  image = false,
}: {
  items: string[];
  reverse?: boolean;
  image?: boolean;
}) {
  const doubled = [...items, ...items];
  const onEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.color = "var(--brand-600)";
    e.currentTarget.style.borderColor = "var(--brand-200)";
    e.currentTarget.style.filter = "grayscale(0)";
  };
  const onLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.color = "var(--ink-400)";
    e.currentTarget.style.borderColor = "var(--ink-200)";
    e.currentTarget.style.filter = "grayscale(1)";
  };
  return (
    <div className="marquee">
      <div
        className="marquee__track"
        style={{
          animation: "marquee 300s linear infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="logo-chip"
            style={{
              height: image ? 112 : 88,
              minWidth: image ? "auto" : 220,
              borderRadius: 18,
              background: image ? "transparent" : "#fff",
              border: image ? "none" : "1px solid var(--ink-200)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: image ? 0 : "0 28px",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--ink-400)",
              transition:
                "color 200ms ease, border-color 200ms ease, transform 200ms ease",
              filter: image ? "none" : "grayscale(1)",
              cursor: "default",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={image ? undefined : onEnter}
            onMouseLeave={image ? undefined : onLeave}
          >
            {image ? (
              <img
                src={name}
                alt=""
                style={{ maxHeight: "100%", maxWidth: 230, objectFit: "contain" }}
              />
            ) : (
              name
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="sec sec--gray">
      <div className="container">
        <header style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: 36,
              color: "var(--ink-900)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Industries &amp; References
          </h2>
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 400,
              fontSize: 26,
              color: "var(--ink-500)",
              margin: "6px 0 0",
            }}
          >
            6개 산업 · 4,000 회원사가 선택한 28년 현장 레퍼런스
          </p>
        </header>

        <motion.div
          className="references-grid"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          {REFERENCES.map((ref) => (
            <motion.div key={ref.key} className="references-card" variants={cardReveal}>
              <div className="references-card__label">{ref.label}</div>
              <div className="references-card__thumb">
                <img src={ref.img} alt="" loading="lazy" decoding="async" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <LogoMarquee items={PUBLIC_LOGOS} image />
          <LogoMarquee items={PRIVATE_LOGOS} reverse image />
        </motion.div>
      </div>
    </section>
  );
}
