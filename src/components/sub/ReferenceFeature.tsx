"use client";

import { useState } from "react";
import Link from "next/link";

/* 공기지능 사례 상단 대표 사례 슬라이더.
   좌: 텍스트(에이브로우·부제·제목·본문) / 우: 대표 이미지. 카드 클릭 시 상세 이동, 좌우 화살표로 전환. */
type Feature = {
  eyebrow: string;
  subtitle: string;
  title: string;
  body: string;
  image: string;
  thumb: string;
  href: string;
};

const FEATURES: Feature[] = [
  {
    eyebrow: "도서관",
    subtitle: "케이웨더 AI 환기청정솔루션으로 리모델링",
    title: "은평구립도서관",
    body: "새롭게 그린리모델링을 마친 은평구립도서관에 케이웨더의 AI 환기청정솔루션이 도입됐습니다. 창문을 열어 환기하는 경우에 비해 최대 30%의 냉난방 에너지 절감효과를 내는 KW-S800CB1·KW-S1000CB1 AI 환기청정기를 적용했습니다.",
    image: "/assets/sub/reference04_01.jpg",
    thumb: "/assets/sub/reference_thum04.png",
    href: "/reference/air/06",
  },
  {
    eyebrow: "기타",
    subtitle: "환경센서·AI 환기장치 기반 CA 저장관리",
    title: "탑프레쉬 저온사과창고",
    body: "케이웨더가 탑프레쉬와 공동으로 환경센서와 AI 환기장치를 이용한 농작물 저장장치 솔루션 구축에 나섰습니다. CA(Controlled Atmosphere) 저장관리 솔루션은 창고 내 유해물질·가스 농도를 실시간 측정·배출해 사과의 신선도와 품질을 높이고 저장기간 연장을 돕습니다.",
    image: "/assets/sub/reference08_01.jpg",
    thumb: "/assets/sub/reference_thum08.png",
    href: "/reference/air/08",
  },
  {
    eyebrow: "주거공간",
    subtitle: "LH 공공주택 400세대 천장형 환기청정기 납품",
    title: "LH 해남해리 2BL 공공주택",
    body: "케이웨더가 LH(한국토지주택공사) 전남 해남해리 공공주택 400세대에 천장형 환기청정기를 납품했습니다. 내부의 오염된 공기를 배출하고 외부 공기를 정화 후 자동 유입시켜 별도의 관리 없이도 쾌적한 실내 공기를 24시간 유지하며, 최대 30% 에너지 절감효과를 제공합니다.",
    image: "/assets/sub/reference06_01.jpg",
    thumb: "/assets/sub/reference_thum06.png",
    href: "/reference/air/07",
  },
];

export default function ReferenceFeature() {
  const [idx, setIdx] = useState(0);
  const total = FEATURES.length;
  const go = (i: number) => setIdx(Math.max(0, Math.min(total - 1, i)));
  const f = FEATURES[idx];
  const isFirst = idx === 0;
  const isLast = idx === total - 1;

  return (
    <section className="ref-feature" aria-label="대표 사례">
      <div className="ref-feature__wrap">
        <button
          type="button"
          className={`ref-feature__arrow ref-feature__arrow--prev${isFirst ? " is-disabled" : ""}`}
          onClick={() => go(idx - 1)}
          disabled={isFirst}
          aria-label="이전 대표 사례"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>

        <div className="ref-feature__inner">
          {/* 카드 전체 클릭 → 상세(인디케이터/화살표는 위에 올려 분리) */}
          <Link
            className="ref-feature__overlay"
            href={f.href}
            aria-label={`${f.title} 상세 보기`}
          />

          <div className="ref-feature__text">
            <p className="ref-feature__eyebrow">{f.eyebrow}</p>
            <p className="ref-feature__subtitle">{f.subtitle}</p>
            <h3 className="ref-feature__title">{f.title}</h3>
            <p className="ref-feature__body">{f.body}</p>

            <div className="ref-feature__dots" role="tablist" aria-label="대표 사례 선택">
              {FEATURES.map((ff, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === idx}
                  className={`ref-feature__dot${i === idx ? " is-active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`${i + 1}번째 대표 사례`}
                >
                  <img src={ff.thumb} alt="" loading="lazy" />
                  <span className="ref-feature__dot-num">{String(i + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ref-feature__media">
            <img src={f.image} alt="" loading="lazy" />
          </div>
        </div>

        <button
          type="button"
          className={`ref-feature__arrow ref-feature__arrow--next${isLast ? " is-disabled" : ""}`}
          onClick={() => go(idx + 1)}
          disabled={isLast}
          aria-label="다음 대표 사례"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
}
