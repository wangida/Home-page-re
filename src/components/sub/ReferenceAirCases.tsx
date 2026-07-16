"use client";

import { useState } from "react";
import Link from "next/link";
import ReferenceFeature from "./ReferenceFeature";
import { FEATURED_HREFS } from "./referenceCases";

type Case = { href: string; cat: string; name: string; thumb: string };

/* 라이브 사이트 기준 카테고리 — 썸네일 위 가로형 필터 */
const CATS = [
  "전체",
  "복지 ∙ 의료시설",
  "교육기관",
  "도서관",
  "사무실",
  "카페",
  "주거공간",
  "기상정보사업",
  "기타",
] as const;

export default function ReferenceAirCases({ cases }: { cases: Case[] }) {
  const [active, setActive] = useState<(typeof CATS)[number]>("전체");
  // 상단 피처에 노출된 3개 사례는 하단 그리드에서 제외(중복 방지)
  const gridCases = cases.filter((c) => !FEATURED_HREFS.includes(c.href));
  const list = active === "전체" ? gridCases : gridCases.filter((c) => c.cat === active);

  return (
    <>
      <div className="ref-filter" role="tablist" aria-label="사례 카테고리">
        {CATS.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={`ref-filter__chip${active === cat ? " is-active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 대표 사례 피처 슬라이더 — 카테고리 필터 아래, 썸네일 위 */}
      <ReferenceFeature />

      <section className="ref-cards">
        {list.map((c) => (
          <Link key={`${c.href}-${c.name}`} href={c.href} className="ref-card">
            <img className="ref-card__thumb" src={c.thumb} alt="" loading="lazy" />
            <p className="ref-card__cat">{c.cat}</p>
            <p className="ref-card__name">{c.name}</p>
          </Link>
        ))}
      </section>

      {/* 페이지네이션 — 날씨경영과 동일(1차는 시안) */}
      <nav className="refw-pager" aria-label="페이지 이동">
        <span className="refw-pager__btn is-disabled" aria-hidden="true">«</span>
        <span className="refw-pager__btn is-disabled" aria-hidden="true">‹</span>
        <span className="refw-pager__num is-active" aria-current="page">1</span>
        <span className="refw-pager__num">2</span>
        <span className="refw-pager__btn" aria-hidden="true">›</span>
        <span className="refw-pager__btn" aria-hidden="true">»</span>
      </nav>
    </>
  );
}
