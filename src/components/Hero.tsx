"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Icon from "./Icon";
import AnimatedText from "./AnimatedText";
import { EASE_EXPO } from "@/lib/motion-variants";
import { useParallax } from "@/lib/use-parallax";

type SlideKey = "data" | "map" | "aif" | "ai" | "wellbian" | "heat" | "robot" | "idol";

type Slide = {
  key: SlideKey;
  eyebrow: string;
  title: string;
  bg: string;
  cta: { label: string; href: string };
  /* 보조 CTA — 지금은 웰비안 슬라이드만 쓴다(웰비안랩스 서비스로 바로 보내는 버튼) */
  cta2?: { label: string; href: string };
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
    /* 신설 2번 슬라이드 — 배경(우주)과 지구본을 따로 얹어 지구본만 별도 연출 */
    key: "map",
    eyebrow: "케이웨더 맵",
    title: "국내 예보부터\n글로벌 날씨를\n날씨지도로 제공합니다",
    bg: "/assets/hero_map_bg02.jpg",
    cta: { label: "바로가기", href: "https://kweathermap.com/" },
  },
  {
    /* 신설 3번 슬라이드 — 배경(데이터센터) 위에 모니터 뷰를 따로 얹는다.
       바로가기는 기상데이터 페이지의 세 번째 탭(날씨 AI 팩토리)으로 보낸다. */
    key: "aif",
    eyebrow: "날씨 AI 팩토리",
    title: "AI 인프라에 케이웨더\n빅데이터를 결합한\n세계 최초 날씨 AI 팩토리",
    bg: "/assets/hero_Aifactory_bg.jpg",
    cta: { label: "바로가기", href: "/data/weather?tab=aifactory" },
  },
  {
    key: "ai",
    eyebrow: "AI 환기청정 솔루션 ㅣ We Air You",
    title: "보이지 않는 공기를\n보이게 측정하여\nAI로 공기질을 관리합니다",
    bg: "/assets/hero_02.jpg",
    cta: { label: "바로가기", href: "/product/circulation" },
  },
  {
    /* 폭염 슬라이드 자리를 이어받은 날씨데이터 토큰 생성기(웰비안 × XRP Ledger).
       배경(보라 파티클 + 단상)과 제품 합성 이미지를 따로 얹는다 — aif 슬라이드와 같은 구조. */
    key: "wellbian",
    eyebrow: "날씨데이터 토큰 생성기",
    title: "내가 측정한 날씨 데이터가\n가치를 지닌 자산이 됩니다",
    bg: "/assets/hero_wellbian_bg.jpg",
    cta: { label: "바로가기", href: "/product/wellbian" },
    cta2: { label: "wellbian 바로가기", href: "https://wlbn.wellbianlabs.io/" },
  },
  /* ⏸ 2026-09-11 비노출 — 폭염 관리 솔루션 슬라이드(웰비안으로 교체).
     ▶ 원복: 아래 주석만 해제하면 그대로 돌아온다. SlideKey 의 "heat", 제품 이미지
       연출(s.key === "heat"), globals.css 의 .hero--heat / .hero__bg-image-veil--heat /
       .hero__product, 배경(hero_03.jpg) 전부 그대로 남아 있다. */
  // {
  //   key: "heat",
  //   eyebrow: "폭염 관리 솔루션",
  //   title: '<span class="hero__title-thin hero__title-muted">산업재해</span> <strong>폭염</strong>\n<span class="hero__title-muted hero__title-sm">체감온도 데이터와 현장별</span>\n<span class="hero__title-muted hero__title-sm">예보로 통합 관리합니다</span>',
  //   bg: "/assets/hero_03.jpg?v=3",
  //   cta: { label: "바로가기", href: "/product/heat_re" },
  // },
  {
    // 신설 슬라이드 — 로봇까지 합성된 완성 배경
    key: "robot",
    eyebrow: "에어로봇",
    title: "환경+영상 데이터와\nAI·온디바이스 기술로\n재난을 사전에 감지합니다",
    bg: "/assets/hero_robot.jpg?v=6",
    cta: { label: "바로가기", href: "/solution/airrobot" },
  },
  /* ⏸ 2026-08-20 임시 비노출 (대표님 컨펌 대기) — 날씨의 아이돌 슬라이드.
     ▶ 원복: 아래 주석만 해제하면 그대로 돌아온다. 이 블록 외에는 아무것도 지우지
       않았다 — SlideKey 의 "idol", 물방울 연출(s.key === "idol"), globals.css 의
       .hero--idol / .hero__bg-image-veil--idol / .hero__water*, 배경 이미지
       (hero_04_re.jpg), water_01~03.png 전부 그대로 남아 있다.
     ※ 슬라이드 수(도트·자동재생 순환)는 HERO_SLIDES.length 로 계산하므로
       주석 처리만으로 7개 → 6개가 자동 반영된다. 따로 고칠 곳 없다. */
  // {
  //   key: "idol",
  //   eyebrow: "날씨의 아이돌",
  //   title: "오늘의 날씨를\n음악으로 전달합니다",
  //   bg: "/assets/hero_04_re.jpg?v=2",
  //   cta: { label: "바로가기", href: "https://weatheridols.ai/" },
  // },
];

const SLIDE_MS = 7000;
/* 게이지는 잔여 시간 표시가 아니라 슬라이드 전환 연출이다.
   SLIDE_MS(7초)에 맞추면 너무 느리게 차올라 답답해 보이므로 의도적으로 짧게 유지한다. */
const GAUGE_MS = 1800;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  /* ⚠️ 이 값은 현재 화면에 반영되지 않는다 (의도된 현행 사양).
     .hero__bg-image 의 CSS 애니메이션(hero-bg-enter)이 transform 을 소유하는데,
     CSS 애니메이션은 캐스케이드에서 인라인 스타일보다 우선하므로 아래 y 가 영구히 덮인다.
     살리려면 세로로 여유 있는 배경(현재 전부 2400×780 — 히어로 높이를 꽉 채워 여유 0)을
     새로 뽑아야 하고, 그 전에 켜면 배경 확대 → 5개 슬라이드 구도와 GLOBE_NODES 좌표를
     전부 다시 맞춰야 한다. globals.css 의 .hero__bg-image 주석도 함께 볼 것. */
  const bgY = useParallax(sectionRef, { strength: 0.2, mobileScale: 0.3 });

  /* ── 배경 크로스페이드 레이어 ────────────────────────────────────────────
     예전에는 배경 div 하나를 key={s.key} 로 갈아끼웠다. 그러면 슬라이드가 바뀌는
     순간 이전 배경이 곧바로 언마운트되고 새 배경은 그때부터 내려받기 시작하므로,
     아직 캐시에 없는 슬라이드로 점프하면 .hero 의 바탕색(#000)이 그대로 드러났다.
     특히 4번(ai)은 유일하게 밝은 배경 + 짙은 남색 글자라, 그 순간 제목이 검정 위
     검정이 되어 "처음으로 되돌아간 것처럼" 보였다.
     → 새 레이어를 이전 레이어 '위에' 얹어 페이드인시키고, 다 덮은 뒤에 아래를 버린다.
        이전 레이어는 페이드아웃하지 않는다 — 둘 다 반투명해지는 구간이 생기면
        그 틈으로 다시 검정이 비친다. */
  const layerSeq = useRef(0);
  const [layers, setLayers] = useState<
    { id: number; key: SlideKey; bg: string }[]
  >(() => [{ id: 0, key: HERO_SLIDES[0].key, bg: HERO_SLIDES[0].bg }]);

  useEffect(() => {
    const sl = HERO_SLIDES[idx];
    setLayers((ls) => {
      if (ls[ls.length - 1]?.key === sl.key) return ls;
      layerSeq.current += 1;
      return [...ls, { id: layerSeq.current, key: sl.key, bg: sl.bg }];
    });
  }, [idx]);

  /* 히어로 이미지 선행 로드.
     배경 6장뿐 아니라 슬라이드마다 따로 얹는 오버레이(지구본·모니터·기기·방울)까지
     함께 받아둔다. 이게 없으면 각 슬라이드를 '처음' 여는 순간에만 빈 화면과 뒤늦은
     팝인이 생긴다. 첫 페인트를 밀어내지 않도록 idle 시점까지 미룬다. */
  useEffect(() => {
    const urls = [
      ...HERO_SLIDES.map((sl) => sl.bg),
      "/assets/hero_map_earth02.png",
      "/assets/hero_Aifactory_view.png",
      "/assets/hero_wellbian_img.png",
      "/assets/hero_wellbian_bubble.png",
    ];
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      for (const u of urls) {
        const img = new Image();
        img.decoding = "async";
        img.src = u;
      }
    };
    let timeoutId: number | undefined;
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(start, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(start, 1200);
    }
    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  /* idx를 의존성에 두어 수동 조작(도트·화살표) 직후에도 대기 시간이 초기화되게 한다.
     빼면 클릭 직후 남은 잔여 시간만큼만 지나고 바로 다음 슬라이드로 넘어간다. */
  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % total),
      SLIDE_MS
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [total, paused, idx]);

  const go = (i: number) => setIdx(((i % total) + total) % total);
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  const s = HERO_SLIDES[idx];

  return (
    <section id="top" className={`hero hero--${s.key}`} ref={sectionRef}>
      {layers.map((l, i) => {
        const isTop = i === layers.length - 1;
        return (
          <motion.div
            key={l.id}
            className="hero__bg-layer"
            initial={{ opacity: l.id === 0 ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: "linear" }}
            onAnimationComplete={() => {
              /* 맨 위 레이어가 아래를 완전히 덮은 뒤에만 아래를 버린다 */
              if (isTop) {
                setLayers((ls) => (ls.length > 1 ? ls.slice(-1) : ls));
              }
            }}
          >
            <motion.div
              className="hero__bg-image is-on"
              style={{
                backgroundImage: `url(${l.bg})`,
                y: bgY,
                willChange: "transform",
              }}
            />
            <div
              className={`hero__bg-image-veil is-on hero__bg-image-veil--${l.key}`}
            />
          </motion.div>
        );
      })}

      {s.key === "idol" && (
        <div className="hero__water" aria-hidden="true">
          <img src="/assets/water_01.png" alt="" className="hero__water-drop hero__water-drop--1" />
          <img src="/assets/water_02.png" alt="" className="hero__water-drop hero__water-drop--2" />
          <img src="/assets/water_03.png" alt="" className="hero__water-drop hero__water-drop--3" />
        </div>
      )}

      {s.key === "data" && <DataFX />}

      {/* 등장 연출(motion)과 상시 회전(CSS)이 같은 transform 을 다투지 않도록
          바깥 래퍼가 등장을, 안쪽 img 가 회전을 각각 소유한다. */}
      {s.key === "map" && (
        <motion.div
          key={`map-${idx}`}
          className="hero__earth"
          initial={{ opacity: 0, scale: 0.82, rotate: -10, y: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.9, ease: EASE_EXPO }}
        >
          {/* 일시정지 시 지구본도 멈춘다 — 슬라이드는 섰는데 혼자 움직이면 오작동처럼 보인다 */}
          <img
            className="hero__earth-img"
            src="/assets/hero_map_earth02.png"
            alt="전 지구 기압·기온 예보가 표출된 케이웨더 맵 지구본"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          />
        </motion.div>
      )}

      {s.key === "aif" && (
        <motion.img
          key={`aif-${idx}`}
          src="/assets/hero_Aifactory_view.png"
          alt="60일 예보 기온·강수 그래프와 기후 변화를 표현한 지구 이미지가 표출된 날씨 AI 팩토리 모니터"
          className="hero__aif-view"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.1, ease: EASE_EXPO }}
        />
      )}

      {/* 웰비안랩스 히어로의 공기 방울 4개를 그대로 옮겼다(air_bubble.png + v2BubIn/v2BubFloat).
          좌표는 원본과 같은 1920 무대 기준이고, 우리 배경도 2400 중 가운데 1920 이 화면 중앙에
          오므로 중앙 기준 px 오프셋으로 환산하면 그대로 맞는다 — globals.css .hero__bub 참고. */}
      {s.key === "wellbian" && (
        <div className="hero__bubs" aria-hidden="true" key={`bub-${idx}`}>
          <span className="hero__bub hero__bub--1"><span>CO<sub>2</sub></span></span>
          <span className="hero__bub hero__bub--2"><span>PM2.5</span></span>
          <span className="hero__bub hero__bub--3"><span>PM10</span></span>
          <span className="hero__bub hero__bub--4"><span>CO<sub>2</sub></span></span>
        </div>
      )}

      {s.key === "wellbian" && (
        <motion.img
          key={`wellbian-${idx}`}
          src="/assets/hero_wellbian_img.png"
          alt="날씨데이터 토큰 생성기 — 미세먼지·CO₂·온습도·VOCs를 표시하는 웰비안 실내 공기질 측정기와 NFT 라이선스 카드, 모바일 앱 화면"
          className="hero__wellbian-view"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.1, ease: EASE_EXPO }}
        />
      )}

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
                  s.key === "data" ||
                  s.key === "map" ||
                  s.key === "aif" ||
                  s.key === "wellbian" ||
                  s.key === "heat" ||
                  s.key === "robot"
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
              {s.cta2 && (
                <motion.a
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.75,
                    ease: EASE_EXPO,
                  }}
                  className="btn btn--ondark"
                  href={s.cta2.href}
                  target={s.cta2.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.cta2.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {s.cta2.label} <Icon name="arrow" size={16} />
                </motion.a>
              )}
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

