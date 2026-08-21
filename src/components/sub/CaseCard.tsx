/* 업종별 활용 사례 카드 한 장 — 업종 헤더바 + 썸네일 3종 + 효과 목록.
   민간 기상예보(PrivateCases)와 날씨경영 컨설팅 슬라이더(ConsultingCases)가 공유. */

import type { Case } from "./forecastCases";

export default function CaseCard({ data: c }: { data: Case }) {
  return (
    <div className="pf-case">
      <div className="pf-case__head">
        <h4 className="pf-case__industry">{c.industry}</h4>
        <p className="pf-case__clients">
          {c.clients.map((name, i) => (
            <span key={name}>
              {i > 0 && <i className="pf-case__bar">|</i>}
              {name}
            </span>
          ))}
        </p>
      </div>

      <div className="pf-case__body">
        <div className="pf-case__figs">
          {c.figs.map((cap, i) => (
            <div className="pf-case__fig" key={cap}>
              {c.imgs?.[i] ? (
                <img
                  className="pf-case__thumb-img"
                  src={c.imgs[i]}
                  width={c.imgSize?.[0] ?? 731}
                  height={c.imgSize?.[1] ?? 714}
                  alt={`${c.industry} 기상정보 활용 사례 — ${cap} 화면`}
                />
              ) : (
                /* 컷팅 이미지 들어올 자리 */
                <div className="pf-case__thumb">이미지 준비 중</div>
              )}
              <p className="pf-case__cap">{cap}</p>
            </div>
          ))}
        </div>

        <ul
          className={`pf-case__list ${c.twoCol ? "pf-case__list--2col" : ""}`}
        >
          {c.points.map((p) => (
            <li key={p.text} className={p.span ? "is-span" : undefined}>
              <p className="pf-case__point">
                <span>{p.text}</span>
                {p.result && (
                  <>
                    <i className="pf-case__arrow" aria-hidden>
                      →
                    </i>
                    <b>{p.result}</b>
                  </>
                )}
              </p>
              {p.note && <p className="pf-case__note">{p.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
