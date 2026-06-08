"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { key: "data", label: "데이터" },
  { key: "service", label: "서비스" },
  { key: "product", label: "제품" },
  { key: "solution", label: "솔루션" },
  { key: "ref", label: "레퍼런스" },
  { key: "about", label: "회사소개" },
] as const;

/* ===== 메가메뉴 — Figma navi(211:164) 좌표 그대로 (1920 기준, 프레임 x−240 보정)
   패널 상대 y = Figma y − 90(상단바 높이) ===== */
type MegaItem = { label: string; small?: string };
type MegaBlock = { y: number; items: MegaItem[] };

const MEGA_COLS: { key: string; x: number; blocks: MegaBlock[] }[] = [
  {
    key: "data",
    x: 282,
    blocks: [
      { y: 38, items: [{ label: "공기 측정", small: "(국가관측/IoT측정)" }] },
      {
        y: 106,
        items: [{ label: "공기 예보" }, { label: "동별 미세먼지" }, { label: "Air365" }],
      },
      {
        y: 353,
        items: [{ label: "기상 데이터" }, { label: "방송 컨텐츠" }, { label: "모바일 정보" }],
      },
    ],
  },
  {
    key: "service",
    x: 442,
    blocks: [
      {
        y: 32,
        items: [
          { label: "공기질 측정·진단" },
          { label: "공기 개선 서비스" },
          { label: "유지관리 서비스" },
        ],
      },
      { y: 353, items: [{ label: "날씨경영 컨설팅" }] },
    ],
  },
  {
    key: "product",
    x: 602,
    blocks: [
      {
        y: 32,
        items: [
          { label: "공기 측정기" },
          { label: "환기 청정기" },
          { label: "공기 빅데이터 플랫폼" },
        ],
      },
      { y: 353, items: [{ label: "체감온도계" }, { label: "기상장비" }] },
    ],
  },
  {
    key: "solution",
    x: 762,
    blocks: [
      { y: 32, items: [{ label: "AI 환기청정 솔루션" }, { label: "조리실 자동 제어" }] },
      { y: 358, items: [{ label: "기후위험 관리", small: "(폭염·건설·해양·ESG)" }] },
    ],
  },
  {
    key: "ref",
    x: 922,
    blocks: [
      { y: 32, items: [{ label: "공기지능 사례" }, { label: "공기지능 인증" }] },
      { y: 353, items: [{ label: "날씨경영 사례" }] },
    ],
  },
  {
    key: "about",
    x: 1082,
    blocks: [
      {
        y: 32,
        items: [
          { label: "기업소개" },
          { label: "연혁" },
          { label: "IR · 주식정보" },
          { label: "홍보센터" },
          { label: "E-카탈로그" },
          { label: "인재채용" },
        ],
      },
    ],
  },
];

/* 세로 점선(ia_line.png) x 좌표 — 피치 160, 시작 x=282 */
const MEGA_LINES_X = [282, 442, 602, 762, 922, 1082, 1242];

/* 패밀리 영역 — Figma family(371:528): 프레임 x=1477(뷰포트), y=34(패널 상대), 241×275
   썸네일 75×55 r10, 라벨 17px #515151 x=96, 버튼 btn_sgo 20×20 (라벨별 위치 상이) */
const FAMILY_ITEMS = [
  { label: "날씨지도", thumb: "/assets/ia_s_thum01.png", thumbTop: 0, textTop: 5, btnLeft: 163, btnTop: 16 },
  { label: "Air365", thumb: "/assets/ia_s_thum02.png", thumbTop: 70, textTop: 75, btnLeft: 156, btnTop: 86 },
  { label: "날씨환경청", thumb: "/assets/ia_s_thum03.png", thumbTop: 139, textTop: 144, btnLeft: 178, btnTop: 155 },
  { label: "날씨앱", thumb: "/assets/ia_s_thum04.png", thumbTop: 210, textTop: 201 },
] as const;

/* 날씨앱 하위 스토어 링크 — Figma: IOS x=97 / Android x=167, y=233, 16px #222 */
const FAMILY_APPS = [
  { label: "IOS", left: 83, btnLeft: 117 },
  { label: "Android", left: 153, btnLeft: 218 },
] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="gnb__logo">
      <Image
        src={light ? "/assets/logo_white.svg" : "/assets/logo_blue.svg"}
        alt="K-WEATHER"
        width={218}
        height={30}
        priority
        style={{ height: "26px", width: "auto", display: "block" }}
      />
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (k: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  const isOpenAny = open != null;
  const useDarkText = scrolled || isOpenAny;

  return (
    <header
      className={`gnb ${useDarkText ? "gnb--scrolled" : "gnb--top"} ${
        isOpenAny ? "is-mega-open" : ""
      }`}
      onMouseLeave={leave}
    >
      <div className="gnb__inner">
        <a href="#top" className="gnb__logo" aria-label="K-WEATHER home">
          <Logo light={!useDarkText} />
        </a>

        <nav className="gnb__nav">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={`#${n.key}`}
              className={`gnb__link ${open === n.key ? "is-active" : ""}`}
              onMouseEnter={() => enter(n.key)}
              onFocus={() => enter(n.key)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="gnb__utils">
          <a
            href="https://www.kweather.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="gnb__shop"
          >
            <span>쇼핑몰</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <a
            href="https://www.kweather.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="gnb__shop"
          >
            <span>날씨정보</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <button
            type="button"
            className="gnb__hamburger"
            aria-label="전체 메뉴"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className="mega"
        style={{
          opacity: isOpenAny ? 1 : 0,
          pointerEvents: isOpenAny ? "auto" : "none",
          transform: isOpenAny ? "none" : "translateY(-8px)",
        }}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={leave}
      >
        {/* 기상(하단) 영역 배경 — full-bleed */}
        <div className="mega__bottom-bg" aria-hidden="true" />

        <div className="mega__canvas">
          {/* 메뉴별 세로 점선 */}
          {MEGA_LINES_X.map((x) => (
            <img
              key={x}
              src="/assets/ia_line.png"
              alt=""
              aria-hidden="true"
              className="mega__line"
              style={{ left: x }}
              loading="lazy"
            />
          ))}

          <div className="mega__row-label mega__row-label--air">공기</div>
          <div className="mega__row-label mega__row-label--weather">기상</div>

          {MEGA_COLS.map((col) =>
            col.blocks.map((block, bi) => (
              <ul
                key={`${col.key}-${bi}`}
                className={`mega__list ${
                  col.key === "product" ? "mega__list--tight" : ""
                }`}
                style={{ left: col.x, top: block.y }}
              >
                {block.items.map((it) => (
                  <li key={it.label} className={it.small ? "has-small" : ""}>
                    <a href="#">
                      {it.label}
                      {it.small && (
                        <span className="mega__small">{it.small}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            ))
          )}

          {/* 패밀리 사이트 — Figma family(371:528) */}
          <div className="mega__family">
            {FAMILY_ITEMS.map((f) => (
              <div key={f.label}>
                <img
                  src={f.thumb}
                  alt=""
                  aria-hidden="true"
                  className="mega__family-thumb"
                  style={{ top: f.thumbTop }}
                  loading="lazy"
                />
                <a
                  href="#"
                  className="mega__family-label"
                  style={{ top: f.textTop }}
                >
                  {f.label}
                </a>
                {"btnLeft" in f && (
                  <a
                    href="#"
                    className="mega__family-btn"
                    style={{ left: f.btnLeft, top: f.btnTop }}
                    aria-label={`${f.label} 바로가기`}
                  >
                    <img src="/assets/btn_sgo.svg" alt="" />
                  </a>
                )}
              </div>
            ))}
            {FAMILY_APPS.map((a) => (
              <div key={a.label}>
                <a
                  href="#"
                  className="mega__family-label mega__family-label--app"
                  style={{ left: a.left, top: 233 }}
                >
                  {a.label}
                </a>
                <a
                  href="#"
                  className="mega__family-btn"
                  style={{ left: a.btnLeft, top: 244 }}
                  aria-label={`날씨앱 ${a.label} 바로가기`}
                >
                  <img src="/assets/btn_sgo.svg" alt="" />
                </a>
              </div>
            ))}
          </div>

          {/* 마스크 프로모 — Figma mask(371:527) */}
          <div className="mega__mask">
            <img
              src="/assets/mask_img.png"
              srcSet="/assets/mask_img.png 1x, /assets/mask_img@2x.png 2x"
              alt="데일리 마스크 + 세정티슈"
              className="mega__mask-img"
              loading="lazy"
            />
            <span className="mega__mask-small">차단·위생·세정 한번에</span>
            <strong className="mega__mask-title">데일리 마스크</strong>
            <a href="#" className="mega__mask-link" aria-label="데일리 마스크 바로가기">
              바로가기
              <img src="/assets/btn_sgo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
