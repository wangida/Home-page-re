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
    date: "2026.05.28",
    cat: "보도자료",
    title: "케이웨더, 산업현장 온열질환 예방 ‘폭염 관리솔루션’ 구축 확대",
    excerpt:
      "고용노동부에 체감온도계 4만3천여 대 공급계약을 체결했습니다.",
  },
  {
    date: "2026.05.21",
    cat: "보도자료",
    title: "케이웨더, AI 기술로 60일 일별 기상예보 도전한다",
    excerpt: "AI 모델 기반 차세대 기상예보 서비스로 예보기간을 60일까지 확장합니다.",
  },
  {
    date: "2026.05.20",
    cat: "K-STORY",
    title: "올해 역대급 폭염, 근로자 안전관리 준비되셨나요?",
    excerpt: "AI 체감온도 분석과 실시간 모니터링으로 산업현장 온열질환을 예방합니다.",
  },
  {
    date: "2026.05.08",
    cat: "뉴스레터",
    title: "세균·바이러스 99.8% 박멸, 구리 항균 기술의 원리",
    excerpt: "구리 이온이 세균 세포막을 파괴해 강력한 항균 작용을 제공합니다.",
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
          <a
            href="https://www.kweather.co.kr/sub/news/?page=1&tp=4&c=4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
            style={{ flexShrink: 0 }}
          >
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
                    <Icon name="arrow" size={18} />
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
