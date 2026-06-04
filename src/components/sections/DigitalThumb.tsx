import { CSSProperties, ReactNode } from "react";

export default function DigitalThumb({
  idx,
  soon,
}: {
  idx: number;
  soon: boolean;
}) {
  const wrap = (
    children: ReactNode,
    bg = "linear-gradient(135deg, #EEF4FF, #D9E5FE)"
  ) => (
    <div
      style={
        {
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 12,
          background: bg,
          overflow: "hidden",
          filter: soon ? "grayscale(0.85) opacity(0.85)" : "none",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );

  if (idx === 0) {
    return wrap(
      <svg
        viewBox="0 0 280 200"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="wb-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4D7DF4" />
            <stop offset="100%" stopColor="#0E2877" />
          </linearGradient>
        </defs>
        <rect x="90" y="18" width="100" height="180" rx="16" fill="#0E1320" />
        <rect x="96" y="24" width="88" height="168" rx="10" fill="url(#wb-sky)" />
        <circle cx="140" cy="34" r="2" fill="#fff" opacity="0.6" />
        <rect x="105" y="32" width="14" height="4" rx="2" fill="#fff" opacity="0.5" />
        <rect x="166" y="32" width="14" height="4" rx="2" fill="#fff" opacity="0.5" />
        <circle cx="140" cy="84" r="22" fill="#FFE9B0" />
        <circle cx="140" cy="84" r="14" fill="#FFD680" />
        <text
          x="140"
          y="124"
          textAnchor="middle"
          fill="#fff"
          fontSize="20"
          fontWeight="800"
          fontFamily="'Pretendard Variable'"
        >
          23°
        </text>
        <text
          x="140"
          y="138"
          textAnchor="middle"
          fill="#fff"
          fontSize="8"
          opacity="0.8"
          fontFamily="'Pretendard Variable'"
        >
          서울 · 맑음
        </text>
        <rect x="102" y="148" width="22" height="34" rx="6" fill="rgba(255,255,255,0.18)" />
        <rect x="129" y="148" width="22" height="34" rx="6" fill="rgba(255,255,255,0.28)" />
        <rect x="156" y="148" width="22" height="34" rx="6" fill="rgba(255,255,255,0.18)" />
        <text x="113" y="167" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="'Pretendard Variable'" fontWeight="700">15시</text>
        <text x="140" y="167" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="'Pretendard Variable'" fontWeight="700">16시</text>
        <text x="167" y="167" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="'Pretendard Variable'" fontWeight="700">17시</text>
        <ellipse cx="50" cy="60" rx="40" ry="14" fill="#fff" opacity="0.35" />
        <ellipse cx="230" cy="150" rx="50" ry="16" fill="#fff" opacity="0.3" />
      </svg>
    );
  }

  if (idx === 1) {
    const members = [
      { x: 60, color: "#FFD680" },
      { x: 110, color: "#84A8FA" },
      { x: 170, color: "#E2E5EA" },
      { x: 220, color: "#FF7A9C" },
    ];
    return wrap(
      <svg
        viewBox="0 0 280 200"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="idol-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7B3FE4" />
            <stop offset="50%" stopColor="#2256E6" />
            <stop offset="100%" stopColor="#FF7A9C" />
          </linearGradient>
        </defs>
        <rect width="280" height="200" fill="url(#idol-bg)" />
        <ellipse cx="140" cy="200" rx="160" ry="60" fill="rgba(255,255,255,0.15)" />
        {members.map((m, i) => (
          <g key={i} transform={`translate(${m.x}, 80)`}>
            <circle cx="0" cy="0" r="14" fill={m.color} />
            <circle cx="0" cy="0" r="14" fill="rgba(0,0,0,0.15)" />
            <circle cx="0" cy="0" r="11" fill={m.color} />
            <path d="M -14,16 Q 0,12 14,16 L 11,70 L -11,70 Z" fill={m.color} opacity="0.95" />
            <path d="M -14,16 Q 0,12 14,16 L 11,70 L -11,70 Z" fill="rgba(0,0,0,0.15)" />
            <circle cx="-4" cy="-2" r="1.4" fill="#1A1F2B" />
            <circle cx="4" cy="-2" r="1.4" fill="#1A1F2B" />
            <path d="M -3,4 Q 0,6 3,4" stroke="#1A1F2B" strokeWidth="1" fill="none" strokeLinecap="round" />
          </g>
        ))}
        <g transform="translate(140, 28)" textAnchor="middle">
          <text fill="#fff" fontSize="13" fontWeight="800" fontFamily="'Pretendard Variable'" letterSpacing="0.06em">
            WEATHER IDOLS
          </text>
        </g>
        {[8, 18, 12, 22, 16, 10, 24, 14, 8].map((h, i) => (
          <rect
            key={i}
            x={50 + i * 22}
            y={188 - h}
            width="6"
            height={h}
            rx="2"
            fill="#fff"
            opacity="0.7"
          >
            <animate
              attributeName="height"
              values={`${h};${h + 8};${h}`}
              dur={`${1.2 + i * 0.1}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values={`${188 - h};${188 - h - 8};${188 - h}`}
              dur={`${1.2 + i * 0.1}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </svg>
    );
  }

  if (idx === 2) {
    return wrap(
      <svg viewBox="0 0 280 200" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="cast-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E1320" />
            <stop offset="100%" stopColor="#1A1F2B" />
          </linearGradient>
          <radialGradient id="cast-screen" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#4D7DF4" />
            <stop offset="100%" stopColor="#0E2877" />
          </radialGradient>
        </defs>
        <rect width="280" height="200" fill="url(#cast-bg)" />
        <rect x="20" y="22" width="240" height="140" rx="6" fill="url(#cast-screen)" />
        <path
          d="M150,40 C130,42 122,55 130,72 C140,90 135,108 150,118 C168,128 180,118 178,100 C176,82 188,72 182,58 C176,46 168,38 150,40 Z"
          fill="rgba(255,255,255,0.18)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <circle cx="148" cy="68" r="3" fill="#FFD680" />
        <circle cx="160" cy="92" r="2.5" fill="#84A8FA" />
        <circle cx="152" cy="108" r="2.5" fill="#fff" />
        <g transform="translate(70, 70)">
          <circle cx="0" cy="0" r="20" fill="#FFE0CC" />
          <path d="M -18,-6 Q -20,-22 -6,-22 Q 10,-26 18,-12 Q 20,-2 14,4" fill="#2C3340" />
          <rect x="-26" y="20" width="52" height="80" rx="14" fill="#2256E6" />
          <rect x="-22" y="22" width="44" height="20" rx="10" fill="#fff" />
          <path d="M 0,42 L -5,52 L 0,72 L 5,52 Z" fill="#FF3B30" />
        </g>
        <g>
          <rect x="34" y="34" width="54" height="20" rx="10" fill="#FF3B30" />
          <circle cx="46" cy="44" r="4" fill="#fff">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <text x="56" y="48" fill="#fff" fontSize="10" fontWeight="800" fontFamily="'Pretendard Variable'">
            LIVE
          </text>
        </g>
        <rect x="0" y="166" width="280" height="34" fill="rgba(0,0,0,0.7)" />
        <text x="16" y="184" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Pretendard Variable'">
          전국 날씨 — 오늘의 한반도
        </text>
        <rect x="16" y="190" width="120" height="3" rx="1.5" fill="#4D7DF4" />
      </svg>
    );
  }

  if (idx === 3) {
    return wrap(
      <svg viewBox="0 0 280 200" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
        <rect width="280" height="200" fill="#0E1320" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={20 + i * 18} x2="280" y2={20 + i * 18} stroke="rgba(132,168,250,0.08)" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 18} y1="0" x2={i * 18} y2="200" stroke="rgba(132,168,250,0.08)" />
        ))}
        {Array.from({ length: 12 }).map((_, r) =>
          Array.from({ length: 12 }).map((__, c) => {
            const x = 30 + c * 18;
            const y = 30 + r * 12;
            const v = Math.sin(r * 0.7) * Math.cos(c * 0.5);
            const op = (Math.max(0, v) * 0.8 + 0.05).toFixed(3);
            return (
              <circle
                key={`${r}-${c}`}
                cx={x}
                cy={y}
                r="3"
                fill={v > 0.2 ? "#FF7A9C" : v > -0.2 ? "#84A8FA" : "#4D7DF4"}
                opacity={op}
              />
            );
          })
        )}
        {[[40, 140], [80, 130], [120, 150], [160, 135], [200, 145], [240, 138]].map(
          ([x, y], i, a) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="#fff" />
              {a[i + 1] && (
                <line
                  x1={x}
                  y1={y}
                  x2={a[i + 1][0]}
                  y2={a[i + 1][1]}
                  stroke="rgba(132,168,250,0.6)"
                  strokeWidth="1"
                />
              )}
            </g>
          )
        )}
        <g fontFamily="'JetBrains Mono', ui-monospace, monospace">
          <text x="14" y="22" fill="rgba(132,168,250,0.7)" fontSize="9" letterSpacing="0.18em">
            FORECAST · v2.0
          </text>
          <text x="14" y="190" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="0.1em">
            T+48h · Δ0.5°C
          </text>
        </g>
      </svg>
    );
  }

  return wrap(
    <svg viewBox="0 0 280 200" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="chain-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E2877" />
          <stop offset="100%" stopColor="#050F35" />
        </linearGradient>
      </defs>
      <rect width="280" height="200" fill="url(#chain-bg)" />
      {[40, 80, 120, 160].map((y, i) => (
        <path
          key={i}
          d={`M 0 ${y} Q 70 ${y - 20} 140 ${y} T 280 ${y}`}
          fill="none"
          stroke="rgba(132,168,250,0.18)"
          strokeWidth="0.8"
        />
      ))}
      {[
        { x: 30, icon: "☀" },
        { x: 100, icon: "☁" },
        { x: 170, icon: "☂" },
        { x: 240, icon: "$" },
      ].map((b, i, arr) => (
        <g key={i} transform={`translate(${b.x}, 86)`}>
          <path
            d="M 0,0 L 28,-12 L 56,0 L 56,32 L 28,44 L 0,32 Z"
            fill="rgba(132,168,250,0.12)"
            stroke="#84A8FA"
            strokeWidth="1.2"
          />
          <path d="M 0,0 L 28,12 L 56,0" fill="none" stroke="#84A8FA" strokeWidth="1.2" />
          <path d="M 28,12 L 28,44" stroke="#84A8FA" strokeWidth="1.2" />
          <text x="28" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="'Pretendard Variable'">
            {b.icon}
          </text>
          {arr[i + 1] && (
            <g>
              <line x1="56" y1="14" x2="70" y2="14" stroke="#4D7DF4" strokeWidth="1.5" strokeDasharray="2 3" />
              <circle cx="63" cy="14" r="2" fill="#84A8FA">
                <animate attributeName="cx" values="56;70;56" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </g>
      ))}
      <g fontFamily="'JetBrains Mono', ui-monospace, monospace" fill="rgba(132,168,250,0.55)" fontSize="9">
        <text x="14" y="22">0xKW · WEATHER CHAIN</text>
        <text x="14" y="184">block #4,217 · hash 0xae3f…91c</text>
      </g>
    </svg>
  );
}
