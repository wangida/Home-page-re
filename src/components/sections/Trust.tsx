"use client";

import { CSSProperties } from "react";
import { motion } from "motion/react";
import CountUp from "../CountUp";
import {
  cardReveal,
  fadeUp,
  fadeUpSm,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from "@/lib/motion-variants";

type StatBox = {
  to: number;
  suffix: string;
  label: [string, string];
  numColor: string;
  bg: string;
};

// 상단 4개 수치 박스 (Figma: box_01~04) — 숫자는 CountUp 애니메이션 유지
const STAT_BOXES: StatBox[] = [
  { to: 30000, suffix: "+", label: ["전국 공기", "데이터 측정망"], numColor: "#D5DDF2", bg: "/assets/trust_box01.png" },
  { to: 25000, suffix: "+", label: ["행정동 기반", "실시간 공기 데이터"], numColor: "#D5DDF2", bg: "/assets/trust_box02.png" },
  { to: 4000, suffix: "+", label: ["날씨·공기 데이터", "운영 고객"], numColor: "#D5DDF2", bg: "/assets/trust_box03.png" },
  { to: 98, suffix: "건", label: ["특허·실용신안", "출원 IP"], numColor: "#D5DDF2", bg: "/assets/trust_box04.png" },
];

// 중간 흰색 띠 통계 (Figma: text_02) — 앞 라벨은 SemiBold
const COMPANY_FACTS: { head: string; rest: string }[] = [
  { head: "1997년:", rest: " 국내 1호 민간 기상사업자" },
  { head: "2024년:", rest: " 코스닥 상장" },
  { head: "44.5억:", rest: " 자본금" },
  { head: "28년:", rest: " Weather & Air 운영 경험" },
];

// 인증 6개 (Figma: award_01~06) — 이미지 유지, 라벨은 하단 + 대괄호
const AWARDS: { src: string; label: string }[] = [
  { src: "/assets/award_01.png", label: "NET 신기술 인증" },
  { src: "/assets/award_02.png", label: "혁신제품 지정인증" },
  { src: "/assets/award_03.png", label: "100대 유망 벤처기업" },
  { src: "/assets/award_04.png", label: "그린뉴딜 유망기업 100" },
  { src: "/assets/award_05.png", label: "우수기업육성 사업 지정" },
  { src: "/assets/award_06.png", label: "해외조달시장 진출유망기업" },
];

const FONT_ROBOTO = "'Roboto', 'Pretendard Variable', sans-serif";
const FONT_PAPERLOGY = "var(--font-display), sans-serif";
const FONT_PRETENDARD = "'Pretendard Variable', Pretendard, sans-serif";

export default function Trust() {
  return (
    <section
      id="trust"
      className="sec trust-section"
      style={{ background: "#EAEDF6", color: "#222" }}
    >
      <div className="container">
        {/* 타이틀 / 서브타이틀 */}
        <motion.div
          style={{ textAlign: "center", marginBottom: 44 }}
          variants={fadeUpSm}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          <h2
            style={{
              fontFamily: FONT_ROBOTO,
              fontWeight: 700,
              fontSize: 36,
              color: "var(--ink-900)",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Trusted by Customers &amp; Data
          </h2>
          <p
            style={{
              fontFamily: FONT_PAPERLOGY,
              fontWeight: 400,
              fontSize: 26,
              color: "var(--ink-500)",
              margin: "16px 0 0",
              lineHeight: 1.3,
            }}
          >
            데이터 자산부터 국가 인증까지, 케이웨더를 입증하는 모든 것
          </p>
        </motion.div>

        {/* 상단 4개 수치 박스 */}
        <motion.div
          className="trust-boxes"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          {STAT_BOXES.map((b) => (
            <motion.div
              key={b.label[0]}
              className="trust-box"
              variants={cardReveal}
              style={{
                backgroundImage: `url(${b.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span
                className="trust-box__num"
                style={{
                  fontFamily: FONT_ROBOTO,
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3vw, 38px)",
                  color: b.numColor,
                  lineHeight: 1,
                }}
              >
                <CountUp to={b.to} suffix={b.suffix} />
              </span>
              <span
                className="trust-box__label"
                style={{
                  fontFamily: FONT_PAPERLOGY,
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.9vw, 28px)",
                  color: "#b0b6c7",
                  lineHeight: 1.4,
                }}
              >
                {b.label[0]}
                <br />
                {b.label[1]}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 중간 흰색 띠 통계 */}
        <motion.div
          className="trust-facts"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          {COMPANY_FACTS.map((f, i) => (
            <div
              key={f.head}
              className={`trust-facts__item${i ? " trust-facts__item--divided" : ""}`}
              style={{
                fontFamily: FONT_PRETENDARD,
                fontSize: "clamp(13px, 1.4vw, 20px)",
                color: "#3b3b3b",
              }}
            >
              <span style={{ fontWeight: 600 }}>{f.head}</span>
              <span style={{ fontWeight: 400 }}>{f.rest}</span>
            </div>
          ))}
        </motion.div>

        {/* 중간 타이틀 (인증 설명) */}
        <motion.p
          variants={fadeUpSm}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          style={{
            fontFamily: FONT_PRETENDARD,
            fontWeight: 600,
            fontSize: "clamp(18px, 2vw, 26px)",
            color: "#3b3b3b",
            textAlign: "center",
            margin: "0 0 36px",
            lineHeight: 1.4,
          }}
        >
          국가 인증과 공공 레퍼런스를 기반으로 기술 신뢰성과 운영 안정성을 검증받음
        </motion.p>

        {/* 인증 6개 — 이미지 + 하단 라벨 */}
        <motion.div
          className="trust-awards"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          {AWARDS.map((a) => (
            <motion.div key={a.src} className="trust-award" variants={cardReveal}>
              <img
                src={a.src}
                alt={a.label}
                loading="lazy"
                decoding="async"
                className="trust-award__img"
              />
              <span
                className="trust-award__label"
                style={
                  {
                    fontFamily: FONT_PRETENDARD,
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.3vw, 18px)",
                    color: "#3b3b3b",
                  } as CSSProperties
                }
              >
                [ {a.label} ]
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
