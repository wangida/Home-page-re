"use client";

import { useState } from "react";
import { HISTORY_TABS } from "./historyData";

export default function HistoryTabs() {
  const [active, setActive] = useState(0);
  const tab = HISTORY_TABS[active];

  return (
    <>
      <div className="sub-tabs" role="tablist" aria-label="연혁 시기 선택">
        {HISTORY_TABS.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`sub-tabs__btn ${i === active ? "is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        className={`history ${tab.loose ? "history--loose" : ""}`}
        key={active}
      >
        <span className="history__line" aria-hidden="true" />
        {tab.years.map((g, gi) => (
          <div
            key={`${g.year}-${gi}`}
            className={`history__group history__group--${g.side}`}
          >
            <img
              src="/assets/sub/history_circle.png"
              alt=""
              aria-hidden="true"
              className="history__circle"
              width={26}
              height={26}
            />
            <strong className="history__year">{g.year}</strong>
            <ul className="history__list">
              {g.items.map((it, ii) => (
                <li key={ii} className="history__item">
                  <span className="history__month">{it.month ?? ""}</span>
                  <p className="history__text">{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
