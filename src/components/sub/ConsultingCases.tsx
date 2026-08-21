"use client";

/* 날씨경영 컨설팅 — 기업 사례 슬라이더.
   기상예보(민간 기상예보) 업종별 사례 카드 4종을 좌우 화살표로 넘긴다.
   카드 마크업·데이터는 CaseCard / forecastCases 공유. */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Icon from "@/components/Icon";
import CaseCard from "./CaseCard";
import { FORECAST_CASES } from "./forecastCases";

export default function ConsultingCases() {
  const [index, setIndex] = useState(0);
  /* 터치 스와이프 시작 좌표 */
  const startX = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  /* 업종마다 카드 높이가 달라, 보이는 카드 높이에 맞춰 영역을 줄인다 */
  const [height, setHeight] = useState<number | undefined>(undefined);
  /* 화살표 세로 위치 — 카드 높이가 바뀌어도 움직이지 않게 썸네일 영역 중앙에 고정 */
  const [arrowTop, setArrowTop] = useState<number | undefined>(undefined);
  const last = FORECAST_CASES.length - 1;

  const go = (dir: number) =>
    setIndex((i) => Math.min(last, Math.max(0, i + dir)));

  useEffect(() => {
    const viewport = viewportRef.current;
    const slide =
      viewport?.querySelectorAll<HTMLElement>(".cc-cases__slide")[index];
    if (!viewport || !slide) return;
    const measure = () => {
      setHeight(slide.offsetHeight);
      const figs = slide.querySelector(".pf-case__figs");
      if (figs) {
        const box = figs.getBoundingClientRect();
        setArrowTop(
          box.top - viewport.getBoundingClientRect().top + box.height / 2,
        );
      }
    };
    measure();
    /* 썸네일 로딩·창 크기 변화로 높이가 바뀌면 다시 측정 */
    const ro = new ResizeObserver(measure);
    ro.observe(slide);
    return () => ro.disconnect();
  }, [index]);

  return (
    <section className="cc-cases" aria-label="날씨경영 컨설팅 기업 사례">
      <h2 className="cc-cases__title">날씨경영 컨설팅 기업 사례</h2>

      <div
        className="cc-cases__stage"
        style={
          arrowTop === undefined
            ? undefined
            : ({ "--cc-arrow-top": `${arrowTop}px` } as CSSProperties)
        }
      >
        <div
          className="cc-cases__viewport"
          ref={viewportRef}
          style={{ height }}
          onTouchStart={(e) => {
            startX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (startX.current === null) return;
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            startX.current = null;
          }}
        >
          <div
            className="cc-cases__track"
            style={{
              transform: `translateX(calc(${-index} * (var(--cc-slide) + var(--cc-gap))))`,
            }}
          >
            {FORECAST_CASES.map((c, i) => (
              <div
                className="cc-cases__slide"
                key={c.industry}
                aria-hidden={i !== index}
                /* 화면 밖 카드는 탭 이동·읽기 대상에서 제외 */
                inert={i !== index}
              >
                <CaseCard data={c} />
              </div>
            ))}
          </div>
        </div>

        {/* 메인 디지털 비즈니스 섹션과 동일한 원형 화살표 */}
        <button
          type="button"
          className="cc-cases__arrow cc-cases__arrow--prev digital-arrow"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="이전 사례"
        >
          <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
            <Icon name="chev" size={22} stroke={2.4} />
          </span>
        </button>

        <button
          type="button"
          className="cc-cases__arrow cc-cases__arrow--next digital-arrow"
          onClick={() => go(1)}
          disabled={index === last}
          aria-label="다음 사례"
        >
          <Icon name="chev" size={22} stroke={2.4} />
        </button>
      </div>

      <div className="cc-cases__dots">
        {FORECAST_CASES.map((c, i) => (
          <button
            key={c.industry}
            type="button"
            className={`cc-cases__dot ${i === index ? "is-on" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`${c.industry} 사례 보기`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
