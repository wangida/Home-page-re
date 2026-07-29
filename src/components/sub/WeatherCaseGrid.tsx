"use client";

import { useState } from "react";
import Link from "next/link";

/* 날씨경영 사례 그리드 + 페이지네이션.
   상단 갤러리(WeatherGallery)는 페이지와 무관하게 항상 노출되고,
   여기 그리드만 페이지(1·2)에 따라 교체된다.
   href가 있는 카드는 상세 페이지로 이동, 없으면 썸네일만(준비중). */
type WeatherCase = { name: string; thumb?: string; href?: string };

const PAGES: WeatherCase[][] = [
  [
    // 상단 갤러리는 포스코이앤씨 + 신규 3사(삼성물산·BGF리테일·하이트진로)로 교체 →
    // 기존 갤러리 3건(울산항만공사·현대자동차·경기주택도시공사)은 여기 그리드로 이동
    { name: "울산항만공사", thumb: "/assets/sub/reference_wthumbig02.png", href: "/reference/weather/01" },
    { name: "현대자동차 (CRMaaS)", thumb: "/assets/sub/02reference01_01.jpg", href: "/reference/weather/02" },
    { name: "경기주택도시공사", thumb: "/assets/sub/reference_wthumsmall04.jpg", href: "/reference/weather/08" },
    { name: "카카오", thumb: "/assets/sub/reference_wthumsmall01.jpg?v=5", href: "/reference/weather/09" },
    { name: "네이버", thumb: "/assets/sub/reference_wthumsmall02.jpg?v=4", href: "/reference/weather/10" },
    { name: "SK커뮤니케이션즈 - 네이트", thumb: "/assets/sub/reference_wthumsmall03.jpg?v=4", href: "/reference/weather/11" },
  ],
  [
    { name: "날씨 달력", thumb: "/assets/sub/reference_wthumsmall05.jpg", href: "/reference/weather/04" },
    { name: "날씨판매지수", thumb: "/assets/sub/reference_wthumsmall06.jpg", href: "/reference/weather/05" },
    { name: "날씨수요예측", thumb: "/assets/sub/reference_wthumsmall07.jpg", href: "/reference/weather/06" },
    { name: "날씨영향분석", thumb: "/assets/sub/reference_wthumsmall08.jpg", href: "/reference/weather/07" },
  ],
];

/* 그리드 세로 높이를 페이지 간 동일하게 유지하기 위한 슬롯 수(가장 카드가 많은 페이지 기준) */
const SLOTS = Math.max(...PAGES.map((p) => p.length));

export default function WeatherCaseGrid() {
  const [page, setPage] = useState(1); // 1-base
  const total = PAGES.length;
  const cases = PAGES[page - 1];
  const isFirst = page <= 1;
  const isLast = page >= total;
  // 카드가 적은 페이지는 보이지 않는 빈 카드로 채워 2행 높이를 유지
  const ghosts = Math.max(0, SLOTS - cases.length);

  const go = (p: number) => setPage(Math.min(total, Math.max(1, p)));

  return (
    <section className="refw" aria-label="날씨경영 사례 목록">
      <div className="refw-grid">
        {cases.map((c) => {
          const inner = (
            <>
              {c.thumb ? (
                <img className="refw-card__img" src={c.thumb} alt="" loading="lazy" />
              ) : (
                <span className="refw-card__img refw-card__img--empty" aria-hidden="true" />
              )}
              <span className="refw-card__label">{c.name}</span>
            </>
          );
          return c.href ? (
            <Link key={c.name} className="refw-card refw-card--link" href={c.href}>
              {inner}
            </Link>
          ) : (
            <div key={c.name} className="refw-card">
              {inner}
            </div>
          );
        })}
        {Array.from({ length: ghosts }, (_, i) => (
          <div key={`ghost-${i}`} className="refw-card" aria-hidden="true">
            <img
              className="refw-card__img"
              src="/assets/sub/reference_wthum_noimg.jpg"
              alt=""
              loading="lazy"
            />
            <span className="refw-card__label">&nbsp;</span>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <nav className="refw-pager" aria-label="페이지 이동">
        <button
          type="button"
          className={`refw-pager__btn${isFirst ? " is-disabled" : ""}`}
          onClick={() => go(1)}
          disabled={isFirst}
          aria-label="첫 페이지"
        >
          «
        </button>
        <button
          type="button"
          className={`refw-pager__btn${isFirst ? " is-disabled" : ""}`}
          onClick={() => go(page - 1)}
          disabled={isFirst}
          aria-label="이전 페이지"
        >
          ‹
        </button>
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            className={`refw-pager__num${n === page ? " is-active" : ""}`}
            onClick={() => go(n)}
            aria-current={n === page ? "page" : undefined}
          >
            {n}
          </button>
        ))}
        <button
          type="button"
          className={`refw-pager__btn${isLast ? " is-disabled" : ""}`}
          onClick={() => go(page + 1)}
          disabled={isLast}
          aria-label="다음 페이지"
        >
          ›
        </button>
        <button
          type="button"
          className={`refw-pager__btn${isLast ? " is-disabled" : ""}`}
          onClick={() => go(total)}
          disabled={isLast}
          aria-label="마지막 페이지"
        >
          »
        </button>
      </nav>
    </section>
  );
}
