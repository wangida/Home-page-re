"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const COLS: [string, string[]][] = [
  ["데이터", ["공기측정데이터", "공기예보", "Air365", "기상데이터"]],
  ["서비스/제품", ["공기지능 컨설팅", "환기청정기", "공기빅데이터플랫폼", "기상장비"]],
  [
    "솔루션·레퍼런스",
    ["AI환기청정솔루션", "CRMaaS", "공기지능 사례", "날씨 경영 사례"],
  ],
  ["회사", ["기업소개", "IR자료실", "인재채용", "홍보센터"]],
];

const FAMILY_SITES = [
  { label: "날씨지도 (kweather map)", href: "https://map.kweather.co.kr" },
  { label: "날씨정보", href: "https://www.kweather.co.kr" },
  { label: "Air365", href: "https://www.air365.co.kr" },
  { label: "날씨환경청", href: "https://www.kweather.co.kr" },
  { label: "날씨앱", href: "https://www.kweather.co.kr" },
] as const;

export default function Footer() {
  const [familyOpen, setFamilyOpen] = useState(false);
  const familyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!familyOpen) return;
    const onClick = (e: MouseEvent) => {
      if (familyRef.current && !familyRef.current.contains(e.target as Node)) {
        setFamilyOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFamilyOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [familyOpen]);

  return (
    <footer
      style={{
        background: "var(--ink-950)",
        color: "rgba(255,255,255,0.7)",
        padding: "80px 0 36px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr repeat(4, 1fr)",
            gap: 36,
            marginBottom: 56,
          }}
        >
          <div>
            <Image
              src="/assets/logo_white.svg"
              alt="K-WEATHER"
              width={160}
              height={37}
              style={{ width: 160, height: "auto", display: "block" }}
            />
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              데이터 · AI · DSP.
              <br />
              안전한 공기와 신뢰할 수 있는 기후 데이터를 만듭니다.
            </p>
            <div
              style={{
                marginTop: 22,
                fontSize: 13,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              ㈜케이웨더 · 서울특별시 영등포구 영중로 15
              <br />
              TEL 02-6005-0700 · FAX 02-6005-0790
              <br />
              사업자등록번호 113-86-44841
            </div>
          </div>
          {COLS.map(([title, list]) => (
            <div key={title}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                {title}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 10,
                }}
              >
                {list.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <div>© {new Date().getFullYear()} K-WEATHER Co., Ltd. All rights reserved.</div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div className="footer-social">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="블로그"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="유튜브"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="페이스북"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="인스타그램"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
            <a
              href="#"
              style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}
            >
              개인정보처리방침
            </a>
            <a href="#">이용약관</a>
            <a href="#">사이트맵</a>
            <div className="footer-family" ref={familyRef}>
              <button
                type="button"
                className="footer-family-btn"
                aria-haspopup="listbox"
                aria-expanded={familyOpen}
                onClick={() => setFamilyOpen((v) => !v)}
              >
                <span>Family Site</span>
                <svg
                  className="footer-family-chev"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {familyOpen && (
                <ul className="footer-family-list" role="listbox">
                  {FAMILY_SITES.map((site) => (
                    <li key={site.label}>
                      <a
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setFamilyOpen(false)}
                      >
                        {site.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
