"use client";

import { useState } from "react";

/* 날씨경영 사례 그리드 + 페이지네이션.
   상단 갤러리(WeatherGallery)는 페이지와 무관하게 항상 노출되고,
   여기 그리드만 페이지(1·2)에 따라 교체된다. */
type WeatherCase = { name: string; thumb?: string };

const PAGES: WeatherCase[][] = [
  [
    // 울산항만공사·현대자동차·경기주택도시공사는 상단 갤러리에 노출 → 그리드에서 제외
    { name: "카카오", thumb: "/assets/sub/reference_wthumsmall01.jpg?v=5" },
    { name: "네이버", thumb: "/assets/sub/reference_wthumsmall02.jpg?v=4" },
    { name: "SK커뮤니케이션즈 - 네이트", thumb: "/assets/sub/reference_wthumsmall03.jpg?v=4" },
    { name: "날씨 달력", thumb: "/assets/sub/reference_wthumsmall05.jpg" },
    { name: "날씨판매지수", thumb: "/assets/sub/reference_wthumsmall06.jpg" },
    { name: "날씨수요예측", thumb: "/assets/sub/reference_wthumsmall07.jpg" },
  ],
  [
    { name: "날씨영향분석", thumb: "/assets/sub/reference_wthumsmall08.jpg" },
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
        {cases.map((c) => (
          <div key={c.name} className="refw-card">
            {c.thumb ? (
              <img className="refw-card__img" src={c.thumb} alt="" loading="lazy" />
            ) : (
              <span className="refw-card__img refw-card__img--empty" aria-hidden="true" />
            )}
            <span className="refw-card__label">{c.name}</span>
          </div>
        ))}
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
