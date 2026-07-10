"use client";

import { useState } from "react";

const TABS = ["1단계", "2단계", "3단계"] as const;

const STEP_PANELS = [
  {
    title: "환기장치 가동 및 공기 필터링 상태 점검",
    images: [
      { src: "/assets/sub/sevice_01thum_01.jpg", cap: "점검구 오픈" },
      { src: "/assets/sub/sevice_01thum_02.jpg", cap: "급기부와 배기부 풍량점검" },
      { src: "/assets/sub/sevice_01thum_03.jpg", cap: "급기부와 배기부 풍량 확인" },
      { src: "/assets/sub/sevice_01thum_04.jpg", cap: "급기부 미세먼지 여과 효율 확인" },
    ],
  },
  {
    title: "환기장치별 맞춤형 필터 및 소자 교체",
    images: [
      { src: "/assets/sub/sevice_02thum_01.jpg", cap: "케이웨더 환기필터" },
      { src: "/assets/sub/sevice_02thum_02.jpg", cap: "환기장치 기존 필터 제거" },
      { src: "/assets/sub/sevice_02thum_03.jpg", cap: "케이웨더 환기필터 장착" },
      { src: "/assets/sub/sevice_02thum_04.jpg", cap: "소자 교체" },
    ],
  },
  {
    title: "실내 공기질 측정기를 이용하여 지속적인 실내공기질 관리",
    images: [
      { src: "/assets/sub/sevice_03thum_01.jpg", cap: "실시간 확인 가능" },
      { src: "/assets/sub/sevice_03thum_02.jpg", cap: "쾌적한 실내환경 관리" },
      { src: "/assets/sub/sevice_03thum_03.jpg", cap: "체계적인 공기질데이터 분석" },
    ],
  },
] as const;

export default function MaintenanceSteps() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="mnt-steps" role="tablist" aria-label="유지관리 3단계 과정 선택">
        {TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`mnt-steps__btn ${i === active ? "is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mnt-steps__panel" role="tabpanel" key={active}>
        {STEP_PANELS[active] ? (
          <div className="mnt-panel">
            <h3 className="mnt-panel__title">{STEP_PANELS[active].title}</h3>
            <div className="mnt-panel__grid">
              {STEP_PANELS[active].images.map((item) => (
                <div className="mnt-panel__item" key={item.src}>
                  <img className="mnt-panel__thumb" src={item.src} alt={item.cap} />
                  <p className="mnt-panel__cap">{item.cap}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 단계별 콘텐츠 준비 중 — 확정 후 교체 */
          <div aria-hidden="true" style={{ height: 400 }} />
        )}
      </div>

      {/* 필터 기술력 — 3단계에서만 노출 */}
      {active === 2 && (
        <section className="mnt-tech">
          <h2 className="mnt-tech__title">
            정밀한 점검 끝에 더해지는{" "}
            <span className="accent">케이웨더 환기필터의 청정 기술력</span>
          </h2>
          <div className="mnt-tech__grid">
            <article className="mnt-tech__col">
              <img
                className="mnt-tech__img"
                src="/assets/sub/service_3depth_01.jpg?v=2"
                alt="구리 항균필터 기술 설명"
              />
              <h3 className="mnt-tech__head">
                세균·바이러스 99.8% 박멸, 구리 항균필터
              </h3>
              <p className="mnt-tech__desc">
                미세먼지만 걸러만 주는 일반 필터는 내부 습기로 인해 세균이나 곰팡이가
                증식하기 쉽습니다. 케이웨더 필터는 섬유에 구리(Cu) 성분을 증착시켜
                필터 표면에 흡착된 유해균을 파괴하고 2차 오염을 원천 차단합니다.
              </p>
            </article>
            <article className="mnt-tech__col">
              <img
                className="mnt-tech__img"
                src="/assets/sub/service_3depth_02.jpg?v=2"
                alt="3중 케어 필터 카트리지"
              />
              <h3 className="mnt-tech__head">빈틈없는 3중 케어 필터 카트리지</h3>
              <p className="mnt-tech__desc">
                프리필터, 탈취필터, HEPA급 필터에 손쉽게 교체 가능한 카트리지 구조를
                적용하여 틈새로 유해물질이 새어 나가는 것을 방지하고 환기장치의 정화
                효율을 극대화합니다.
              </p>
            </article>
          </div>
        </section>
      )}
    </>
  );
}
