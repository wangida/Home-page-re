"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { REFERENCE_NAV_CASES, type ReferenceCase } from "./referenceCases";

/* 상세 페이지 하단 네비게이션 — 좌우 이전/다음 화살표 + 가운데 썸네일 목록.
   썸네일 클릭 시 해당 사례 상세로 이동, 현재 페이지는 강조.
   사례가 늘어도 썸네일 크기는 고정(약 10개 노출) — 넘치는 만큼 가로 스크롤.
   items 미지정 시 공기지능 사례(REFERENCE_NAV_CASES) 기준. */
export default function ReferenceNav({
  current,
  items = REFERENCE_NAV_CASES,
}: {
  current: string;
  items?: ReferenceCase[];
}) {
  const stripRef = useRef<HTMLDivElement | null>(null);

  /* 현재 사례 썸네일이 보이도록 스트립 위치를 잡되, 썸네일 1칸 단위로 스냅해
     좌우 끝에 잘린 썸네일이 남지 않게 한다(초기 위치라 애니메이션 없음). */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const cur = strip.querySelector<HTMLElement>(".is-current");
    const first = strip.children[0] as HTMLElement | undefined;
    const second = strip.children[1] as HTMLElement | undefined;
    if (!cur || !first) return;

    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    const max = strip.scrollWidth - strip.clientWidth;
    if (step <= 0 || max <= 0) return;

    const centered = cur.offsetLeft - (strip.clientWidth - cur.clientWidth) / 2;
    strip.scrollLeft = Math.min(max, Math.max(0, Math.round(centered / step) * step));
  }, [current]);

  const idx = items.findIndex((c) => c.href === current);
  // 상세페이지가 있는(=플레이스홀더 "#"가 아닌) 가장 가까운 이전/다음 사례로 이동
  const findBuilt = (dir: number) => {
    for (let i = idx + dir; i >= 0 && i < items.length; i += dir) {
      if (items[i].href !== "#") return items[i];
    }
    return null;
  };
  const prev = idx > 0 ? findBuilt(-1) : null;
  const next = idx >= 0 && idx < items.length - 1 ? findBuilt(1) : null;

  return (
    <nav className="refd-nav" aria-label="사례 페이지 이동">
      {prev ? (
        <Link className="refd-nav__arrow" href={prev.href} aria-label={`이전 사례: ${prev.name}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </Link>
      ) : (
        <span className="refd-nav__arrow is-disabled" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </span>
      )}

      <div className="refd-nav__thumbs" ref={stripRef}>
        {items.map((c, i) =>
          c.href === "#" ? (
            // 상세페이지 미제작 사례 — 썸네일만 표시(이동 불가)
            <span
              key={`ph-${i}`}
              className="refd-nav__thumb is-placeholder"
              aria-label={`${c.name} (준비중)`}
            >
              <img src={c.thumb} alt="" loading="lazy" />
            </span>
          ) : (
            <Link
              key={c.href}
              href={c.href}
              className={`refd-nav__thumb${c.href === current ? " is-current" : ""}`}
              aria-label={c.name}
              aria-current={c.href === current ? "page" : undefined}
            >
              <img src={c.thumb} alt="" loading="lazy" />
            </Link>
          )
        )}
      </div>

      {next ? (
        <Link className="refd-nav__arrow" href={next.href} aria-label={`다음 사례: ${next.name}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </Link>
      ) : (
        <span className="refd-nav__arrow is-disabled" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </span>
      )}
    </nav>
  );
}
