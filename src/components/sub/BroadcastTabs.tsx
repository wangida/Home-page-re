"use client";

/* 방송 컨텐츠(data/broadcast) — 히어로 하단 「기상방송 컨텐츠 / AI 컨텐츠」 탭.
   연혁(HistoryTabs)과 동일한 sub-tabs UI 사용. */

import { useState } from "react";
import BroadcastMedia from "./BroadcastMedia";
import BroadcastAi from "./BroadcastAi";

const TABS = ["기상방송 컨텐츠", "AI 컨텐츠"] as const;

export default function BroadcastTabs() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div
        className="sub-tabs sub-tabs--two"
        role="tablist"
        aria-label="방송 컨텐츠 종류 선택"
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
        {active === 0 ? <BroadcastMedia /> : <BroadcastAi />}
      </div>
    </>
  );
}
