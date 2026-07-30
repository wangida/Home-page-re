"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Icon from "./Icon";
import AnimatedText from "./AnimatedText";
import { EASE_EXPO } from "@/lib/motion-variants";
import { useParallax } from "@/lib/use-parallax";

type SlideKey = "data" | "ai" | "heat" | "robot" | "idol";

type Slide = {
  key: SlideKey;
  eyebrow: string;
  title: string;
  bg: string;
  cta: { label: string; href: string };
};

const HERO_SLIDES: Slide[] = [
  {
    key: "data",
    eyebrow: "날씨 빅데이터 플랫폼",
    title: "국내 최대 기상·공기\n빅데이터를 보유합니다",
    bg: "/assets/hero_01.jpg",
    cta: { label: "바로가기", href: "/data/weather" },
  },
  {
    key: "ai",
    eyebrow: "AI 환기청정 솔루션 ㅣ We Air You",
    title: "보이지 않는 공기를\n보이게 측정하여\nAI로 공기질을 관리합니다",
    bg: "/assets/hero_02.jpg",
    cta: { label: "바로가기", href: "/product/circulation" },
  },
  {
    key: "heat",
    eyebrow: "폭염 관리 솔루션",
    title: '<span class="hero__title-thin hero__title-muted">새로운 산업재해</span> <strong>폭염</strong>\n<span class="hero__title-muted hero__title-sm">현장별 체감온도 데이터와</span>\n<span class="hero__title-muted hero__title-sm">예보로 통합 관리합니다</span>',
    bg: "/assets/hero_03.jpg?v=3",
    cta: { label: "바로가기", href: "/product/heat_re" },
  },
  {
    // 신설 슬라이드 — 로봇까지 합성된 완성 배경
    key: "robot",
    eyebrow: "에어로봇",
    title: "환경+영상 데이터와\nAI·온디바이스 기술로\n재난을 사전에 감지합니다",
    bg: "/assets/hero_robot.jpg?v=6",
    cta: { label: "바로가기", href: "/solution/airrobot" },
  },
  {
    key: "idol",
    eyebrow: "날씨의 아이돌",
    title: "오늘의 날씨를\n음악으로 전달합니다",
    bg: "/assets/hero_04_re.jpg?v=2",
    cta: { label: "바로가기", href: "https://weatheridols.ai/" },
  },
];

const SLIDE_MS = 7000;
const GAUGE_MS = 1800;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgY = useParallax(sectionRef, { strength: 0.2, mobileScale: 0.3 });

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % total),
      SLIDE_MS
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [total, paused]);

  const go = (i: number) => setIdx(((i % total) + total) % total);
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  const s = HERO_SLIDES[idx];

  return (
    <section id="top" className={`hero hero--${s.key}`} ref={sectionRef}>
      <motion.div
        key={s.key}
        className="hero__bg-image is-on"
        style={{
          backgroundImage: `url(${s.bg})`,
          y: bgY,
          willChange: "transform",
        }}
      />
      <div
        className={`hero__bg-image-veil is-on hero__bg-image-veil--${s.key}`}
      />

      {s.key === "idol" && (
        <div className="hero__water" aria-hidden="true">
          <img src="/assets/water_01.png" alt="" className="hero__water-drop hero__water-drop--1" />
          <img src="/assets/water_02.png" alt="" className="hero__water-drop hero__water-drop--2" />
          <img src="/assets/water_03.png" alt="" className="hero__water-drop hero__water-drop--3" />
        </div>
      )}

      {s.key === "data" && <DataFX />}

      {s.key === "heat" && (
        <motion.img
          key={`heat-${idx}`}
          src="/assets/hero_03_img02.png"
          alt="폭염관리 솔루션 — 온습지수측정계와 Air365 모니터링 대시보드"
          className="hero__product"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.0, ease: EASE_EXPO }}
        />
      )}

      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__noise" />

      <div className="hero__inner container">
        <div className={`hero__cols hero__cols--${s.key}`}>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_EXPO }}
            className="hero__text"
          >
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 1.0,
                ease: EASE_EXPO,
              }}
            >
              {s.eyebrow.includes("ㅣ")
                ? s.eyebrow.split("ㅣ").map((part, i, arr) => (
                    <span
                      key={i}
                      className={i > 0 ? "hero__eyebrow-en" : undefined}
                    >
                      {part.trim()}
                      {i < arr.length - 1 && (
                        <span className="hero__eyebrow-divider">ㅣ</span>
                      )}
                    </span>
                  ))
                : s.eyebrow}
            </motion.span>
            <AnimatedText
              as="h1"
              text={s.title}
              mode="line"
              className="hero__title"
              viewport={{ once: true, amount: 0.1 }}
            />
            <div className="hero__cta-row">
              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.75,
                  ease: EASE_EXPO,
                }}
                className={`btn ${
                  s.key === "data" || s.key === "heat" || s.key === "robot"
                    ? "btn--ondark"
                    : "btn--primary"
                }`}
                href={s.cta.href}
                target={s.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.cta.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {s.cta.label} <Icon name="arrow" size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero__nav">
        <div
          className="hero__nav-track"
          role="tablist"
          aria-label="히어로 슬라이드"
        >
          {HERO_SLIDES.map((sl, i) => (
            <button
              key={sl.key}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`슬라이드 ${i + 1}`}
              className={`hero__nav-item ${i === idx ? "is-active" : ""}`}
              onClick={() => go(i)}
            >
              <span
                className="hero__nav-fill"
                style={{
                  animationDuration: `${GAUGE_MS}ms`,
                  animationPlayState:
                    i === idx && !paused ? "running" : "paused",
                }}
              />
            </button>
          ))}
        </div>
        <div className="hero__nav-ctrls">
          <button
            type="button"
            className="hero__nav-btn"
            aria-label="이전 슬라이드"
            onClick={prev}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            type="button"
            className="hero__nav-btn"
            aria-label={paused ? "재생" : "일시정지"}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <polygon points="7 5 19 12 7 19" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="9" y1="5" x2="9" y2="19" />
                <line x1="15" y1="5" x2="15" y2="19" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="hero__nav-btn"
            aria-label="다음 슬라이드"
            onClick={next}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* Cinematic data-flow effect for hero_01 (data slide).
   - Twinkling stars, rising data stream from globe apex,
     horizontal particle river on the left, pulsing apex light.
   Positions are deterministic (index math) to avoid hydration mismatch. */
/* Pulsing measurement nodes — placed on the visible globe surface (right side of hero_01.jpg).
   Globe bright apex ≈ (80%, 47%); nodes sit on the curved surface below/around it.
   20 nodes scattered across the globe surface (x 67~94%, y 54~79%). */
const GLOBE_NODES: { x: number; y: number }[] = [
  { x: 67, y: 60 }, { x: 70, y: 54 },
  { x: 69, y: 71 }, { x: 72, y: 63 }, { x: 73, y: 77 },
  { x: 75, y: 57 }, { x: 76, y: 67 }, { x: 78, y: 74 },
  { x: 79, y: 60 }, { x: 80, y: 79 },
  { x: 82, y: 55 }, { x: 83, y: 65 }, { x: 84, y: 75 },
  { x: 86, y: 60 }, { x: 87, y: 71 },
  { x: 89, y: 56 }, { x: 90, y: 67 }, { x: 91, y: 76 },
  { x: 93, y: 62 }, { x: 94, y: 71 },
];

function DataFX() {
  const STARS = 48;
  const RISERS = 18;
  return (
    <div className="hero__data-fx" aria-hidden="true">
      <div className="hero__stars">
        {Array.from({ length: STARS }).map((_, i) => (
          <span
            key={i}
            className="hero__star"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${((i * 0.37) % 4).toFixed(2)}s`,
              animationDuration: `${(2 + (i % 5) * 0.6).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__apex-pulse" />

      <div className="hero__risers">
        {Array.from({ length: RISERS }).map((_, i) => (
          <span
            key={i}
            className={`hero__riser hero__riser--${i % 3}`}
            style={{
              left: `${(i * 5.6).toFixed(1)}%`,
              animationDelay: `${(i * 0.21).toFixed(2)}s`,
              animationDuration: `${(2.8 + (i % 4) * 0.8).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__nodes">
        {GLOBE_NODES.map((n, i) => (
          <span
            key={i}
            className="hero__node"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              animationDelay: `${(i * 0.42).toFixed(2)}s`,
              animationDuration: `${(2.4 + (i % 4) * 0.6).toFixed(2)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

