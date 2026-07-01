"use client";

import { useState } from "react";

const TABS = ["측정서비스", "진단서비스"] as const;

export default function DiagnosisTabs() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div
        className="sub-tabs sub-tabs--two"
        role="tablist"
        aria-label="공기질 측정·진단 서비스 선택"
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

      {/* 본문 준비 중 — 탭별 콘텐츠 확정 후 교체 */}
      <div className="service-panel" role="tabpanel" key={active}>
        <div aria-hidden="true" style={{ height: 1000 }} />
      </div>
    </>
  );
}
