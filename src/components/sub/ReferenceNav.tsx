import Link from "next/link";
import { REFERENCE_NAV_CASES, type ReferenceCase } from "./referenceCases";

/* 상세 페이지 하단 네비게이션 — 좌우 이전/다음 화살표 + 가운데 썸네일 목록.
   썸네일 클릭 시 해당 사례 상세로 이동, 현재 페이지는 강조.
   items 미지정 시 공기지능 사례(REFERENCE_NAV_CASES) 기준. */
export default function ReferenceNav({
  current,
  items = REFERENCE_NAV_CASES,
}: {
  current: string;
  items?: ReferenceCase[];
}) {
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

      <div className="refd-nav__thumbs">
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
