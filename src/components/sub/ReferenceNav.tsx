import Link from "next/link";
import { REFERENCE_NAV_CASES } from "./referenceCases";

/* 상세 페이지 하단 네비게이션 — 좌우 이전/다음 화살표 + 가운데 썸네일 목록.
   썸네일 클릭 시 해당 사례 상세로 이동, 현재 페이지는 강조. */
export default function ReferenceNav({ current }: { current: string }) {
  const items = REFERENCE_NAV_CASES;
  const idx = items.findIndex((c) => c.href === current);
  const prev = idx > 0 ? items[idx - 1] : null;
  const next = idx >= 0 && idx < items.length - 1 ? items[idx + 1] : null;

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
        {items.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`refd-nav__thumb${c.href === current ? " is-current" : ""}`}
            aria-label={c.name}
            aria-current={c.href === current ? "page" : undefined}
          >
            <img src={c.thumb} alt="" loading="lazy" />
          </Link>
        ))}
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
