"use client";

import { motion } from "motion/react";
import Icon from "../Icon";
import {
  cardReveal,
  fadeUp,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from "@/lib/motion-variants";

const NEWS = [
  {
    date: "2026.05.02",
    cat: "TECH",
    title: "웨더체인 베타 — 기상 데이터 온체인 검증 PoC 공개",
    excerpt:
      "기상관측·예보 데이터의 무결성을 분산원장으로 보장하는 첫 검증 사례를 발표했습니다.",
  },
  {
    date: "2026.04.21",
    cat: "IR",
    title: "케이웨더, 1분기 매출 전년 동기 대비 32% 증가",
    excerpt: "디지털 사업과 솔루션 매출이 동반 성장하며 흑자 전환을 이어갑니다.",
  },
  {
    date: "2026.04.04",
    cat: "NEWS",
    title: "서초구 350개소 청정위생공간 운영 1주년",
    excerpt: "실내 PM10 평균 25% 저감, 학부모 만족도 91%를 기록했습니다.",
  },
  {
    date: "2026.03.18",
    cat: "TECH",
    title: "AI 환기청정솔루션 NeT 신기술 재인증",
    excerpt: "5년 만에 갱신된 NeT 인증으로 기술력을 다시 확인받았습니다.",
  },
];

export default function NewsAndContact() {
  return (
    <section id="news" className="sec sec--gray">
      <div className="container">
        <motion.header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          <div>
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
              News &amp; Insights
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 400,
                fontSize: 26,
                color: "var(--ink-500)",
                margin: "8px 0 0",
              }}
            >
              최신 소식 · IR 정보 · 채용 · 비즈니스 문의
            </p>
          </div>
          <a href="#" className="btn btn--ghost" style={{ flexShrink: 0 }}>
            전체 보기 <Icon name="arrow" size={16} />
          </a>
        </motion.header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          <motion.div
            className="news-list"
            variants={staggerContainer(0.14, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            {NEWS.map((n) => (
              <motion.a
                key={n.title}
                href="#"
                className="card lift"
                variants={cardReveal}
                style={{ flex: 1, padding: "14px 28px" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr auto",
                    gap: 24,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      className="mono"
                      style={{ fontSize: 12, color: "var(--ink-500)" }}
                    >
                      {n.date}
                    </div>
                    <span className="pill pill--brand" style={{ marginTop: 8 }}>
                      {n.cat}
                    </span>
                  </div>
                  <div>
                    <div className="h-card" style={{ marginBottom: 8 }}>
                      {n.title}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--ink-500)",
                        lineHeight: 1.6,
                      }}
                    >
                      {n.excerpt}
                    </div>
                  </div>
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background: "var(--ink-100)",
                      display: "grid",
                      placeItems: "center",
                      color: "var(--ink-600)",
                    }}
                  >
                    <Icon name="arrow-up-right" size={18} />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateRows: "auto 1fr",
              gap: 14,
              height: "100%",
            }}
          >
            {/* IR자료실 + 인재채용: 좌우 2개 그라데이션 박스 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <motion.a
                href="#"
                id="ir"
                className="lift"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULT}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 175,
                  padding: 22,
                  borderRadius: 20,
                  color: "#fff",
                  overflow: "hidden",
                  background: "#5D83E3",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, opacity: 0.92 }}>
                  IR 자료실
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: 21,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                  }}
                >
                  재무·실적
                  <br />
                  공시 자료
                </div>
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  바로가기 <Icon name="arrow" size={15} />
                </div>
              </motion.a>

              <motion.a
                href="#"
                className="lift"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULT}
                transition={{ delay: 0.08 }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 175,
                  padding: 22,
                  borderRadius: 20,
                  color: "#fff",
                  overflow: "hidden",
                  background: "#69C4D3",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, opacity: 0.95 }}>
                  인재채용
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: 21,
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                  }}
                >
                  함께 성장할
                  <br />
                  인재 모집
                </div>
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  채용 보기 <Icon name="arrow" size={15} />
                </div>
              </motion.a>
            </div>

            {/* 영업문의: 다크 카드 */}
            <motion.a
              href="#contact"
              id="contact"
              className="lift news-contact"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_DEFAULT}
              transition={{ delay: 0.1 }}
              style={{
                background: "var(--brand-950)",
                color: "#fff",
                borderRadius: "var(--rad-lg)",
                padding: 28,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name="mail" size={26} />
                </div>
                <div>
                  <div
                    className="h-card"
                    style={{
                      color: "#fff",
                      fontFamily: "var(--font-display), sans-serif",
                    }}
                  >
                    영업 문의
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    1577-7263 · sales@kweather.co.kr
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.65,
                  margin: "0 0 20px",
                }}
              >
                AI 환기청정·기후 리스크·데이터 라이센스, 비즈니스 매니저가 직접
                답합니다.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 18,
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                <span>문의하기</span>
                <Icon name="arrow" size={16} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
