"use client";

import { useEffect, useState } from "react";

type Card = {
  id: string;
  title: string;
  subSmall: string;
  subBig: string;
  bullets: string[];
  bigImg: string;
};

const CARDS: Card[] = [
  {
    id: "01",
    title: "AI 환기청정 솔루션",
    subSmall: "실내 공기질을 예측·분석\n환기와 청정을 자동 제어",
    subBig: "AI 기반 실내 공기질 예측, 공간 맞춤 환기·청정 제어,\n에너지 절감 및 운영 최적화",
    bullets: ["AI 환기청정기", "공간 맞춤 제어", "공기질 예측 운영", "에너지 절감 관리"],
    bigImg: "/assets/big_box01.png",
  },
  {
    id: "02",
    title: "공기 빅데이터 플랫폼",
    subSmall: "실외공기 빅데이터를\n실시간으로 수집·분석·시각화",
    subBig: "30,000만 여개의 공기 측정망 운영,\n실시간 동별 데이터 제공, Air365 기반 통합 관제",
    bullets: ["Air365 플랫폼", "동별 미세먼지 정보", "실시간 공기 모니터링", "데이터 분석 리포트"],
    bigImg: "/assets/big_box03.png",
  },
  {
    id: "03",
    title: "기후리스크 솔루션",
    subSmall: "기후변화와 ESG 대응을 위한\n기업 맞춤 리스크 관리 솔루션",
    subBig: "폭염 · 폭우 · ESG 대응, 기업 맞춤 리스크 분석\nCRMaaS 기반 통합 관리",
    bullets: ["CRMaaS 플랫폼", "ESG 대응", "폭염·재난 관리", "산업 안전 솔루션"],
    bigImg: "/assets/big_box02.png",
  },
  {
    id: "04",
    title: "날씨 빅데이터 플랫폼",
    subSmall: "정밀 기상 데이터와 예측 기술로\n산업 운영과 의사결정을 지원",
    subBig: "국내 최대 민간 기상 데이터, 4,000여 기업 고객 운영,\n산업별 수요예측 지원",
    bullets: ["민간 기상예보", "산업별 맞춤 예보", "수요예측 시스템", "날씨경영 컨설팅"],
    bigImg: "/assets/big_box04.png",
  },
];

const SMALL_W = 280;
const BIG_W = 480;
const CARD_H = 480;
const GAP = 18;
const EASE = "cubic-bezier(0.22,1,0.36,1)";
const SWAP_OPACITY = `opacity 0.28s ${EASE}`;
const SWAP_WIDTH = `width 0.5s ${EASE}`;

export default function Solutions() {
  const [active, setActive] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const effectiveActive = isMobile ? -1 : active;

  return (
    <section
      id="solutions"
      style={{
        position: "relative",
        background: "#10225a",
        color: "#fff",
        paddingTop: 120,
        paddingBottom: 160,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: 36,
              color: "#fff",
              margin: 0,
            }}
          >
            Solutions &amp; Products
          </h2>
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 300,
              fontSize: 26,
              color: "#919ec4",
              margin: "6px 0 0",
            }}
          >
            Weather &amp; Air Intelligence 기반의 AI 솔루션과 데이터 플랫폼
          </p>
        </header>

        <div
          className="solutions-track"
          onMouseLeave={isMobile ? undefined : () => setActive(0)}
          style={{
            display: "flex",
            gap: isMobile ? 14 : GAP,
            justifyContent: isMobile ? "flex-start" : "center",
            alignItems: "stretch",
            flexWrap: isMobile ? "nowrap" : "wrap",
            overflowX: isMobile ? "auto" : "visible",
            overflowY: "visible",
            scrollSnapType: isMobile ? "x mandatory" : undefined,
            WebkitOverflowScrolling: "touch",
            margin: isMobile ? "0 -16px" : 0,
            padding: isMobile ? "4px 16px 8px" : 0,
          }}
        >
          {CARDS.map((c, i) => {
            const isActive = effectiveActive === i;
            return (
              <article
                key={c.id}
                className="solutions-card"
                onMouseEnter={isMobile ? undefined : () => setActive(i)}
                aria-expanded={isActive}
                style={{
                  position: "relative",
                  width: isActive ? BIG_W : SMALL_W,
                  height: CARD_H,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: isMobile ? "default" : "pointer",
                  flexShrink: 0,
                  scrollSnapAlign: isMobile ? "start" : undefined,
                  background: "#08153b",
                  transition: SWAP_WIDTH,
                }}
              >
                {/* Big content */}
                <div
                  data-role="big"
                  aria-hidden={!isActive}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: BIG_W,
                    height: CARD_H,
                    opacity: isActive ? 1 : 0,
                    transition: SWAP_OPACITY,
                    transitionDelay: isActive ? "0.08s" : "0s",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <img
                    src={c.bigImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  />
                  <img
                    src="/assets/btn_bgo.svg"
                    alt=""
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      width: 44,
                      height: 44,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      padding: "25px 32px 0 32px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontWeight: 500,
                        fontSize: 28,
                        color: "#25deff",
                        margin: 0,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontWeight: 400,
                        fontSize: 19,
                        color: "#d5dfff",
                        margin: "4px 0 0",
                        lineHeight: "30px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {c.subBig}
                    </p>
                  </div>
                </div>

                {/* Small content */}
                <div
                  data-role="small"
                  aria-hidden={isActive}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: isActive ? 0 : 1,
                    transition: SWAP_OPACITY,
                    pointerEvents: isActive ? "none" : "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      padding: "38px 0 0",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontWeight: 500,
                        fontSize: 24,
                        color: "#afbce0",
                        margin: 0,
                      }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      marginTop: 28,
                      background: "#070f28",
                      height: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontWeight: 300,
                        fontSize: 18,
                        color: "#9ca3b7",
                        margin: 0,
                        whiteSpace: "pre-line",
                        lineHeight: "32px",
                        textAlign: "center",
                      }}
                    >
                      {c.subSmall}
                    </p>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "20px 0 0 40px",
                      margin: 0,
                      fontFamily: "Pretendard, sans-serif",
                      fontWeight: 300,
                      fontSize: 18,
                      color: "#b0b6c7",
                      lineHeight: "36px",
                    }}
                  >
                    {c.bullets.map((b) => (
                      <li key={b}>· {b}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "auto" }}>
                    <img
                      src="/assets/btn_product.svg"
                      alt="자세히 보기"
                      width={215}
                      height={80}
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <img
        src="/assets/bg03_bottom.png"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        width={2400}
        height={576}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "auto",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </section>
  );
}
