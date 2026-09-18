"use client";

/* 기상데이터 3번째 탭(날씨 AI 팩토리) 안의 서브 탭.
   UI는 서비스 > 유지관리의 단계 탭(.mnt-steps)과 같은 것을 쓴다. */

import { useState } from "react";
import AiFactory from "./AiFactory";
import AiForecastProducts from "./AiForecastProducts";

const TABS = ["날씨 AI 팩토리의 개요", "AI 기상예보 상품"] as const;

export default function AiFactoryTabs() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* 하위 탭 위 공통 머리말 — 두 하위 탭에 공통으로 걸리는 소개 */}
      <div className="aif-head">
        <h3 className="wd-panel__lead">케이웨더 날씨 AI 팩토리란</h3>
        <p className="aif__desc">
          날씨 빅데이터를 GPU AI 인프라와 AI 기상예측 모델에 적용해 자율주행, 스마트시티, 에너지 등{" "}
          <br />
          다양한 산업에서 활용할 수 있는 고부가가치 날씨 지능 토큰을 생산·유통하는 체계입니다.
        </p>
      </div>

      <div
        className="mnt-steps mnt-steps--two aif-subtabs"
        role="tablist"
        aria-label="날씨 AI 팩토리 하위 메뉴 선택"
      >
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

      {active === 0 ? <AiFactory /> : <AiForecastProducts />}
    </>
  );
}
