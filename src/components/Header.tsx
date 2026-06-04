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

type MegaCol = "data" | "service" | "product" | "solution" | "ref";

const MEGA: {
  air: Record<MegaCol, string[]>;
  weather: Record<MegaCol, string[]>;
  aboutFlat: string[];
} = {
  air: {
    data: [
      "공기측정데이터 (국가관측/IoT측정)",
      "공기예보",
      "동별미세먼지데이터",
      "Air365",
    ],
    service: ["공기질 측정진단", "공기개선 서비스", "유지관리 서비스"],
    product: ["공기측정기", "환기청정기", "공기빅데이터플랫폼"],
    solution: ["AI환기청정솔루션", "조리실 자동제어 솔루션"],
    ref: ["공기지능 사례", "공기지능 인증"],
  },
  weather: {
    data: ["기상데이터", "방송컨텐츠", "모바일정보"],
    service: ["날씨경영 컨설팅"],
    product: ["체감온도계", "기상장비"],
    solution: ["기후위험관리솔루션 (CMAaaS)"],
    ref: ["날씨 경영 사례"],
  },
  aboutFlat: [
    "기업소개",
    "연혁",
    "IR·주식정보",
    "홍보센터",
    "E-카탈로그",
    "인재채용",
  ],
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="gnb__logo">
      <Image
        src={light ? "/assets/logo_white.svg" : "/assets/logo_blue.svg"}
        alt="K-WEATHER"
        width={120}
        height={28}
        priority
        style={{ height: "28px", width: "auto", display: "block" }}
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
      <div className="container gnb__inner">
        <a href="#top" className="gnb__logo" aria-label="K-WEATHER home">
          <Logo light={!useDarkText} />
        </a>

        <nav className="gnb__nav">
          {NAV.map((n) => (
            <a
              key={n.key}
              href={`#${n.key}`}
              className="gnb__link"
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
        <div className="mega__row mega__row--air">
          <div className="mega__inner container">
            <div className="mega__row-label">공기</div>
            {(["data", "service", "product", "solution", "ref"] as MegaCol[]).map(
              (col) => (
                <ul key={`a-${col}`} className="mega__col">
                  {(MEGA.air[col] || []).map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )
            )}
            <ul className="mega__col mega__col--about">
              {MEGA.aboutFlat.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mega__row mega__row--weather">
          <div className="mega__inner container">
            <div className="mega__row-label">기상</div>
            {(["data", "service", "product", "solution", "ref"] as MegaCol[]).map(
              (col) => (
                <ul key={`w-${col}`} className="mega__col">
                  {(MEGA.weather[col] || []).map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )
            )}
            <div className="mega__col mega__col--spacer" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
}
