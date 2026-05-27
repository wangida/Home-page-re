# Handoff: K-WEATHER Main Page Renewal

## Overview
케이웨더(K-Weather) 메인 페이지 리뉴얼 디자인. 4개의 히어로 슬라이드 + 5개의 콘텐츠 섹션(Digital Business / Solutions / Industries / Proof / Trust / News·IR·Contact)으로 구성된 풀스크롤 랜딩 페이지.

## About the Design Files
번들에 포함된 파일들은 **HTML/CSS/JSX로 만든 디자인 레퍼런스(프로토타입)** 입니다. 그대로 프로덕션에 배포하는 코드가 아니라, 의도된 외형/인터랙션을 보여주는 참고용 자료입니다.

작업 방식:
- **이미 사용 중인 프론트엔드 환경이 있는 경우** (Next.js, Vite + React, Vue 등) → 그 환경의 컴포넌트/스타일 컨벤션에 맞춰 **다시 구현** 해주세요.
- **새 프로젝트라면** → Next.js + Tailwind 또는 익숙한 스택으로 셋업 후 구현.

CSS는 vanilla CSS로 작성돼 있으니, CSS Modules / Tailwind / styled-components 등 프로젝트 컨벤션에 맞춰 변환하면 됩니다.

## Fidelity
**Hi-fidelity (hifi)**. 색상, 타이포(폰트 패밀리/굵기/크기), 여백, 컨테이너 폭, 애니메이션 타이밍까지 모두 최종값. 픽셀 단위로 재현 가능.

다만, DSP 슬라이드의 3원 벤다이어그램은 **`assets/dsp-circle.png` 비트맵 이미지**를 사용 중. 필요하다면 SVG로 다시 그리는 것을 권장.

## Tech Stack (현재 프로토타입)
- **HTML + React 18.3.1** (CDN 로드)
- **Babel Standalone** (브라우저 내 트랜스파일, 데모용)
- **Vanilla CSS** with custom properties
- **Web fonts**: Pretendard (본문), Paperlogy (타이틀), Roboto (영문/숫자)

프로덕션에선 Babel 브라우저 트랜스파일 제거하고 빌드 단계에서 처리.

---

## Layout Foundation
| Token | Value | 용도 |
|---|---|---|
| `--container` | `1728px` | 컨텐츠 최대 폭 |
| `--bg-max` | `2400px` | 히어로 배경 이미지 max 폭 (배경은 1920 기준 + 최대 2400까지 cover) |
| 히어로 높이 | `780px` (≥1100px) / `100vh` clamp 640~900 (모바일) | |
| 섹션 padding | `140px 0` (데스크탑) / `96px 0` (모바일) | |

## Color Tokens

### Brand Blue Scale
```
--brand-50:  #EEF4FF
--brand-100: #D9E5FE
--brand-200: #B5CCFD
--brand-300: #84A8FA
--brand-400: #4D7DF4
--brand-500: #2256E6   ← Primary point
--brand-600: #1742C6
--brand-700: #12349C
--brand-800: #0E2877
--brand-900: #081A52
--brand-950: #050F35
```

### Neutrals (ink)
```
--ink-0:    #ffffff
--ink-50:   #F7F8FA
--ink-100:  #EFF1F4
--ink-200:  #E2E5EA
--ink-300:  #C9CED6
--ink-400:  #9098A4
--ink-500:  #6B7280
--ink-600:  #4B5563
--ink-700:  #2C3340
--ink-800:  #1A1F2B
--ink-900:  #0E1320
--ink-950:  #060912
```

### Accent (DSP / 부가 색상)
- DSP 빨간점 마커: `rgb(236,130,130)` (#EC8282)
- DSP 다크 그린(타이틀 등): `rgb(0,56,48)`
- DATA 슬라이드 cyan eyebrow: `#53D9FF`
- AI / IDOL 슬라이드 dark text: `rgb(5,16,50)`

## Typography

```
--font-sans:    'Roboto', 'Pretendard Variable', system-ui, sans-serif   /* 본문 */
--font-display: 'Paperlogy', 'Pretendard Variable', system-ui, sans-serif /* 타이틀 */
--font-num:     'Roboto', 'Pretendard Variable', system-ui, sans-serif    /* 영문/숫자 */
```

폰트 패밀리 chain에서 Roboto가 앞에 있어 라틴 글리프(영문/숫자)는 Roboto로, 한글은 Pretendard로 자동 분기.

| Class | Family | Weight | Size | Letter spacing | Line height |
|---|---|---|---|---|---|
| `.h-display` (Hero 타이틀) | Paperlogy | 500 | `clamp(40px, 5.4vw, 76px)` | -0.02em | 1.02 |
| `.h-section` (섹션 타이틀) | Paperlogy | 500 | `clamp(32px, 3.6vw, 54px)` | -0.02em | 1.05 |
| `.h-card` (카드 타이틀) | Pretendard | 700 | `22px` | -0.015em | 1.2 |
| `.lead` (리드 카피) | Pretendard | 400 | `clamp(16px, 1.2vw, 18px)` | — | 1.6 |
| `.eyebrow` | Pretendard | 600 | `13px` | 0.16em (uppercase) | — |

피그마 기준 히어로 타이틀은 **Paperlogy 5 Medium 60px**, eyebrow는 **Paperlogy 3 Light 32px**.

## Radius & Effects
```
--rad-sm: 8px
--rad:    14px
--rad-lg: 22px
--rad-xl: 28px
```

---

## Screens / Views

### 1. GNB (Global Navigation Bar)
**파일**: `src/chrome.jsx` → `Header`, `styles.css` → `.gnb*`

- 고정 헤더 (`position: fixed`), 높이 76px
- 6개 메뉴: 데이터 / 서비스 / 제품 / 솔루션 / 레퍼런스 / 회사소개
- **Top state** (스크롤 0): 투명 배경, 흰 텍스트 + 0 2px 2px rgba(0,0,0,0.25) 그림자
- **Scrolled state** (스크롤 24px+): `rgba(255,255,255,0.92)` + `backdrop-filter: blur(14px)` + 하단 1px 라인
- **Hover 효과**: 텍스트 아래 2px 언더라인이 **중앙에서 양옆으로 펼쳐지는** 애니메이션 (280ms ease)
  - Top 상태일 땐 색상 `#BFE3FF`, scrolled 상태에선 `var(--brand-600)`
- 메가메뉴: 호버 시 풀-width 2단 패널(공기 / 기상) 노출. 자세한 항목은 `MEGA` 상수 참고.

### 2. Hero Section (4 slides)
**파일**: `src/chrome.jsx` → `Hero`, `HERO_SLIDES`, `styles.css` → `.hero*`

#### 슬라이드 데이터 (`HERO_SLIDES`)
| idx | key | eyebrow | title | bg | cta |
|---|---|---|---|---|---|
| 1 | data | 국가관측망이 못 보는 곳까지 | 국내 최대 공기 · 날씨\n빅데이터를 보유합니다 | `assets/hero_01.jpg` | 데이터 자산 보기 |
| 2 | ai | 산업·공간 맞춤 AI 모델 | AI로 공기와 기후를\n관리합니다 | `assets/hero_02.jpg` | AI 솔루션 |
| 3 | dsp | 측정 → 진단 → 제어 → 리포트 | Data · Service · Product\n하나의 사이클 | `assets/hero_03.jpg` | (CTA 없음, 다이어그램이 메인) |
| 4 | idol | 오늘의 날씨를 음악으로 플레이하다 | 나만의 날씨 아이돌 | `assets/hero_04.jpg` | 바로가기 |

#### 슬라이드별 텍스트 위치/색상
- **DATA**: 좌측정렬, 흰 타이틀 + `#53D9FF` cyan eyebrow
- **AI**: 우측정렬, `rgb(5,16,50)` 짙은 텍스트 (배경 밝아서)
- **DSP**: 절대좌표 스테이지 — 좌측 텍스트 + 중앙~우측 다이어그램 + 3개 플로팅 라벨 (자세한 건 아래)
- **IDOL**: 우측 + 가운데 정렬, `rgb(24,24,24)` 짙은 텍스트

#### 배경 이미지 규칙
- `position: absolute, left: 50%, transform: translateX(-50%)`, `min-width: 1920px, max-width: 2400px`, `background-size: cover, background-position: center`
- 슬라이드별 가독성 veil (`.hero__bg-image-veil--{key}`) — 그라디언트로 가독성 보강
- 슬라이드 전환 시 React `key={s.key}` remount → CSS `@keyframes hero-bg-enter` (1.1s, transform scale 1.06→1) 부드러운 줌인

#### DSP 슬라이드 (3번째) — 특별 구조
좌측 텍스트 + 절대좌표 스테이지로 다이어그램과 플로팅 라벨 배치. 디자인 폭 1728px 기준.

```html
<div class="hero-dsp-stage">          <!-- position: relative -->
  <div class="hero-dsp-text">         <!-- left: 0, top: 50%, max-width: 380px -->
    <span class="hero-dsp-eyebrow">측정 → 진단 → 제어 → 리포트</span>
    <h1 class="hero-dsp-title">Data · Service · Product<br />하나의 사이클</h1>
  </div>
  <img class="hero-dsp-img" src="assets/dsp-circle.png" />  <!-- left: 52%, top: 50%, width clamp(360, 32vw, 560) -->
  <div class="hero-dsp-label hero-dsp-label--tr">3만여 자체 공기측정망 인프라<br/>국내 최대 날씨·공기 빅데이터</div>  <!-- top: 24%, left: 71% -->
  <div class="hero-dsp-label hero-dsp-label--ml">국가인증 1등급 제조 기술력<br/>고정밀 기상 및 청정 시스템</div>      <!-- top: 66%, right: 60%, text-align: right -->
  <div class="hero-dsp-label hero-dsp-label--br">데이터에 기반한 전문 컨설팅<br/>맞춤형 공기지능 솔루션</div>        <!-- top: 92%, left: 71% -->
</div>
```

#### 슬라이드 인디케이터 (좌측 하단)
**구조**: `dots row + 컨트롤 버튼(prev / pause·play / next)`
- 비활성: 8×8 원형 닷, opacity 0.45
- 활성: 8×96 pill 모양으로 stretch (480ms cubic-bezier)
- 활성 pill 안에 흰 게이지 fill 애니메이션 — **1.8초** 동안 0%→100%
- 슬라이드 자동전환은 **7초** 간격
- 게이지/슬라이드는 분리된 타이머 — 게이지는 빨리 차고 멈춰 있다가, 슬라이드 7초마다 넘김
- 짙은 배경 슬라이드(AI/IDOL)에선 닷/게이지/버튼이 dark variant (`rgb(5,16,50)`)

### 3. Digital Business Section
**파일**: `src/sections.jsx` → `DigitalBusiness`, `DIGITAL` 상수

5개 카드 가로 스크롤. 각 카드는 SVG 썸네일 + 영문/한글 이름 + 설명 + CTA.
- Wellbian App / 날씨 아이돌 / AI 기상캐스터 / AI 날씨예측모델(soon) / 웨더체인(soon)
- 컨트롤: 좌하단 progress bar + 좌우 화살표
- 모바일에서 2/1/2 → 1열로 스택

### 4. Solutions (S1, dark theme)
**파일**: `src/sections.jsx` → `Solutions`, `SOLUTIONS` 상수

4개 카드 그리드 (`grid-template-columns: repeat(4, 1fr)`). `var(--ink-950)` 다크 배경. 각 카드: 아이콘 박스 + 인덱스 번호 + 이름 + 서브 + 설명 + 화살표.

### 5. Industries (S2, light gray)
**파일**: `src/sections.jsx` → `Industries`, `INDUSTRIES`, `CUSTOMER_LOGOS`

3×2 산업군 카드 그리드 + 하단 customer 로고 마퀴(seamless loop). 로고 chip은 grayscale → hover 시 컬러.

### 6. Proof in Numbers (S3, brand dark)
**파일**: `src/sections.jsx` → `Proof`, `PROOF_STATS`

`var(--brand-950)` 배경에 4개 KPI를 가로로 나열. 각 KPI는 화살표(▼) + 큰 숫자(CountUp 애니메이션) + suffix + 라벨 + 설명. 좌우는 1px 흰 라인으로 구분.

### 7. Trust (S4, light)
**파일**: `src/sections.jsx` → `Trust`, `CERTS`

좌측 인증서 2×3 그리드 + 우측 "특허 / IP 98건" 다크 박스 + 설립/상장/자본금 정보.

### 8. News & IR & Contact (S5, gray)
**파일**: `src/sections.jsx` → `NewsAndContact`, `NEWS`

좌측 뉴스 리스트(4개 카드, date + cat + title + excerpt) + 우측 IR 자료실 다크 카드 + 영업문의 카드.

### 9. Footer
**파일**: `src/chrome.jsx` → `Footer`

`var(--ink-950)` 다크 배경. 5컬럼 (회사 정보 + 4 메뉴 그룹) + 카피라이트 + 약관 링크.

---

## Interactions & Behavior

### Reveal-on-scroll
- 모든 `[data-reveal]` 요소는 IntersectionObserver로 viewport 진입 시 `.is-in` 추가
- 기본: `opacity 0 + translateY(28px)` → `opacity 1 + 0`
- variants: `data-reveal="scale" | "left" | "right"`
- 스태거: `style={{ '--rd': '${i*80}ms' }}` — CSS에서 `transition-delay: var(--rd)`

### Parallax
- `[data-parallax]` 요소는 스크롤 위치 기반 transform Y. 값은 데이터 어트리뷰트 숫자 (e.g. `data-parallax="0.15"`).

### Hero
- 자동전환 **7000ms**, pause 토글 시 정지
- 게이지 fill **1800ms** ease-out (cubic-bezier(.2,.65,.2,1))
- 슬라이드 변경 시 React `key` 변경으로 컴포넌트 re-mount → 배경 줌인 1.1s + 텍스트 translateY 0.9s

### Count-up
- IntersectionObserver로 viewport 진입 첫 1회만 카운트. easeOutCubic over `duration`.

### GNB underline
- `::after` pseudo, `left: 50%; right: 50%`로 시작해 hover/focus/active 시 `left/right: 6px`로 펼쳐짐. 280ms cubic-bezier(.2,.7,.2,1).

---

## State Management
모두 컴포넌트 로컬 state. 글로벌 store 불필요.

- `Hero`: `idx` (현재 슬라이드), `paused` (자동전환 일시정지)
- `DigitalBusiness`: `progress, canPrev, canNext` (스크롤 컨테이너 상태)

---

## Animation timings 요약
| 대상 | duration | easing |
|---|---|---|
| Hero 배경 줌인 | 1100ms | cubic-bezier(.2,.7,.2,1) |
| Hero 텍스트 슬라이드업 | 900ms | cubic-bezier(.2,.7,.2,1) |
| Hero 인디케이터 게이지 | 1800ms | cubic-bezier(.2,.65,.2,1) |
| Hero pill 모양 변경 | 480ms | cubic-bezier(.6,.05,.2,1) |
| Hero 자동전환 간격 | 7000ms | — |
| GNB underline 펼침 | 280ms | cubic-bezier(.2,.7,.2,1) |
| GNB 배경 전환 | 220ms | ease |
| reveal 진입 | ~800ms | cubic-bezier(.2,.7,.2,1) |

---

## Assets

- `assets/hero_01.jpg` ~ `hero_04.jpg` — 히어로 4개 슬라이드 배경 (1920+ 폭)
- `assets/dsp-circle.png` — DSP 슬라이드 3원 벤다이어그램 (682×570 PNG with alpha)
- `assets/logo_white.svg` / `logo_blue.svg` — K-WEATHER 로고

---

## Files in this bundle

```
design_handoff_kweather_main/
├── README.md                ← (이 파일)
├── index.html               ← entry HTML (스크립트 로딩만)
├── styles.css               ← 모든 스타일 (1100라인)
├── src/
│   ├── app.jsx              ← React 엔트리 (App 컴포넌트)
│   ├── chrome.jsx           ← Header, Hero (HeroVisualDSP 포함), Footer, Icon, Logo, SplitText, CountUp, useReveal, useParallax
│   └── sections.jsx         ← DigitalBusiness, Solutions, Industries, Proof, Trust, NewsAndContact, SecHead
└── assets/
    ├── hero_01.jpg ~ hero_04.jpg
    ├── dsp-circle.png
    ├── logo_white.svg
    └── logo_blue.svg
```

## Web Fonts (CDN)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800;900&display=swap" />
<!-- Paperlogy: 3Light, 4Regular, 5Medium, 7Bold (jsdelivr noonfonts repository, see styles.css head) -->
```

프로덕션에선 폰트를 self-host 권장 (CLS 방지 + 안정성).

---

## 알려진 이슈 / TODO
- [ ] DSP 다이어그램은 비트맵 PNG. SVG로 다시 그리면 sharp + 색상 토큰화 가능.
- [ ] 인쇄 / a11y prefer-reduced-motion 미지원 — `@media (prefers-reduced-motion)`로 애니메이션 비활성 처리 필요.
- [ ] 모바일 GNB 햄버거 메뉴 미구현 (`< 820px`에서 nav 숨김만).
- [ ] 폼 제출(영업문의) 등 인터랙티브 부분은 mock 링크만 있음.
