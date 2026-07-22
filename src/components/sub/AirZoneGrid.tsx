"use client";

import { useState } from "react";

/* 공기지능 인증(Air I Zone) 썸네일 그리드 + 페이지네이션.
   날씨경영 사례 그리드(.refw)와 동일한 카드(이미지 + 라벨) 형식·크기·간격 재사용.
   1페이지 = reference_zonethum01~09, 2페이지 = reference_zonethum10~17(라벨 확정 후 교체 예정). */
type Zone = { name: string; thumb: string };

const PAGE1: Zone[] = [
  { name: "강릉 IoT 숨터", thumb: "/assets/sub/reference_zonethum01.jpg" },
  { name: "월드메르디앙 벤처센터 2차", thumb: "/assets/sub/reference_zonethum02.jpg" },
  { name: "로뎀 어린이집", thumb: "/assets/sub/reference_zonethum03.jpg" },
  { name: "꿈그린 어린이집", thumb: "/assets/sub/reference_zonethum04.jpg" },
  { name: "마서 어린이집", thumb: "/assets/sub/reference_zonethum05.jpg" },
  { name: "기림 어린이집", thumb: "/assets/sub/reference_zonethum06.jpg" },
  { name: "태인 불가마 사우나", thumb: "/assets/sub/reference_zonethum07.jpg" },
  { name: "서천 어린이집", thumb: "/assets/sub/reference_zonethum08.jpg" },
  { name: "성지 어린이집", thumb: "/assets/sub/reference_zonethum09.jpg" },
];

/* 2페이지 — 이미지 9개(zonethum10~18), 성일 어린이집 ~ 비인청정 어린이집 */
const PAGE2: Zone[] = [
  { name: "성일 어린이집", thumb: "/assets/sub/reference_zonethum10.jpg" },
  { name: "청솔 창의 어린이집", thumb: "/assets/sub/reference_zonethum11.jpg" },
  { name: "곡수 초등학교", thumb: "/assets/sub/reference_zonethum12.jpg" },
  { name: "원덕 초등학교", thumb: "/assets/sub/reference_zonethum13.jpg" },
  { name: "개군 초등학교", thumb: "/assets/sub/reference_zonethum14.jpg" },
  { name: "양평동 초등학교", thumb: "/assets/sub/reference_zonethum15.jpg" },
  { name: "해솔 어린이집", thumb: "/assets/sub/reference_zonethum16.jpg" },
  { name: "서면 어린이집", thumb: "/assets/sub/reference_zonethum17.jpg" },
  { name: "비인청정 어린이집", thumb: "/assets/sub/reference_zonethum18.jpg" },
];

const PAGES: Zone[][] = [PAGE1, PAGE2, [], []];

/* 그리드 세로 높이를 페이지 간 동일하게 유지하기 위한 슬롯 수 */
const SLOTS = Math.max(...PAGES.map((p) => p.length));

export default function AirZoneGrid() {
  const [page, setPage] = useState(1); // 1-base
  const total = PAGES.length;
  const items = PAGES[page - 1];
  const isFirst = page <= 1;
  const isLast = page >= total;
  // 썸네일이 적은 페이지는 noimg로 채워 3×3 그리드 높이를 유지
  const ghosts = Math.max(0, SLOTS - items.length);

  const go = (p: number) => setPage(Math.min(total, Math.max(1, p)));

  return (
    <section className="refw refw--static" aria-label="공기지능 인증 구역">
      <div className="wmedia__head">
        <h2 className="wmedia__title">공기지능 인증 구역</h2>
        <p className="wmedia__sub">케이웨더 Air I Zone 인증을 받은 주요 시설·기관</p>
      </div>

      <div className="refw-grid">
        {items.map((z) => (
          <div key={z.thumb} className="refw-card">
            <img className="refw-card__img" src={z.thumb} alt="" loading="lazy" />
            <span className="refw-card__label">{z.name}</span>
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
