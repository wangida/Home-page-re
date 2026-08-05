"use client";

/* 기상예보(data/ai) — 히어로 하단 「민간 기상예보 / AI 기상예보」 탭.
   연혁(HistoryTabs)과 동일한 sub-tabs UI 사용. */

import { useState } from "react";
import PrivateForecast from "./PrivateForecast";
import AiForecast from "./AiForecast";

const TABS = ["민간 기상예보", "AI 기상예보"] as const;

export default function ForecastTabs() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div
        className="sub-tabs sub-tabs--two"
        role="tablist"
        aria-label="기상예보 종류 선택"
      >
        {TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`sub-tabs__btn ${i === active ? "is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="sub-tabpanel" role="tabpanel" key={active}>
        {active === 0 ? <PrivateForecast /> : <AiForecast />}
      </div>
    </>
  );
}
