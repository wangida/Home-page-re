"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* 날씨경영 상단 미디어 갤러리 — 헤더 + 가로 스크롤 카드 3개 + 하단 진행바/화살표(이미지 #27 형태). */
type Item = { cat: string; name: string; meta: string; image: string; href?: string };

const ITEMS: Item[] = [
  {
    cat: "날씨경영",
    name: "포스코이앤씨",
    meta: "건설관리 솔루션",
    image: "/assets/sub/reference_wthumbig01.png",
    href: "/reference/weather/03",
  },
  {
    cat: "날씨경영",
    name: "울산항만공사",
    meta: "울산항 스마트 방재기상정보 서비스",
    image: "/assets/sub/reference_wthumbig02.png",
    href: "/reference/weather/01",
  },
  {
    cat: "날씨경영",
    name: "현대자동차 (CRMaaS)",
    meta: "전국 주요시설 폭염 관리솔루션 구축",
    image: "/assets/sub/02reference01_01.jpg",
    href: "/reference/weather/02",
  },
  {
    cat: "날씨경영",
    name: "경기도시공사",
    meta: "날씨경영 컨설팅 적용 사례",
    image: "/assets/sub/reference_wthumsmall04.jpg",
  },
];

export default function WeatherGallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [thumb, setThumb] = useState(1);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
      // 게이지 길이는 "카드 1장 ÷ 전체" 기준 → 카드 수가 늘수록 짧아짐
      const card = el.querySelector(".wmedia__card") as HTMLElement | null;
      const cardW = card ? card.getBoundingClientRect().width : el.clientWidth;
      setThumb(el.scrollWidth > 0 ? cardW / el.scrollWidth : 1);
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
    };
    // 초기 중앙 정렬 — 가운데(2번) 카드 기준, 1·3번은 좌우로 반쯤 보이게
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".wmedia__card");
    const step = card
      ? (card as HTMLElement).getBoundingClientRect().width + 50 /* gap과 동일 */
      : el.clientWidth * 0.6;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="wmedia" aria-label="날씨경영 미디어">
      <div className="wmedia__head">
        <h2 className="wmedia__title">날씨경영 대표 사례</h2>
        <p className="wmedia__sub">케이웨더와 함께한 주요 기관·기업의 날씨경영 이야기</p>
      </div>

      {/* data-lenis-prevent-wheel: Lenis가 휠을 가로채 페이지 세로 스크롤로 바꾸는 것을 막아
          트랙 위에서는 네이티브 가로 스크롤이 동작하게 함 */}
      <div className="wmedia__track" ref={trackRef} data-lenis-prevent-wheel>
        {ITEMS.map((it) => (
          <div key={it.name} className="wmedia__card">
            {it.href ? (
              <Link className="wmedia__thumb" href={it.href} aria-label={`${it.name} 자세히 보기`}>
                <img src={it.image} alt="" loading="lazy" />
              </Link>
            ) : (
              <div className="wmedia__thumb">
                <img src={it.image} alt="" loading="lazy" />
              </div>
            )}

            <div className="wmedia__body">
              <div className="wmedia__body-text">
                <p className="wmedia__meta">{it.meta}</p>
                <h3 className="wmedia__name">{it.name}</h3>
              </div>

              {it.href ? (
                <Link className="wmedia__btn" href={it.href}>
                  자세히 보기
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </Link>
              ) : (
                <span className="wmedia__btn is-disabled" aria-disabled="true">
                  자세히 보기
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="wmedia__scroll">
        <button
          type="button"
          className="wmedia__arrow"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="이전"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>

        <div className="wmedia__bar">
          <span
            className="wmedia__bar-thumb"
            style={{
              width: `${Math.min(100, thumb * 100)}%`,
              left: `${progress * (100 - thumb * 100)}%`,
            }}
          />
        </div>

        <button
          type="button"
          className="wmedia__arrow"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="다음"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
}
