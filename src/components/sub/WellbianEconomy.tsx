"use client";
/* 날씨데이터 토큰생성기 서브 본문 — 웰비안랩스 런처(/launch)의
   「날씨데이터 경제란?」 섹션(#how)과 「날씨데이터 토큰생성기™」 제품 섹션(#spec)을 그대로 옮겼다.
   마크업·클래스명·수치는 원본(wellbianlabs src/components/launch/Landing.tsx +
   src/app/launch/store.css)을 유지하고, 다국어(i18n)만 걷어내 한국어로 고정했다.
   스타일은 wellbian.css 가 .wb-store 스코프 안에서 원본 규칙을 그대로 들고 있다. */
import { useEffect, useRef, useState } from "react";

/* 제품 갤러리 — 원본 SPEC_GALLERY. 5장 모두 2000×1125 파일이지만 실제 사진은 가운데 4:3 이고
   좌우 250px 는 블러 밴드다. 그래서 .spec-main 을 4/3 으로 두어 밴드만 잘라낸다(원본 주석). */
const GALLERY = [
  { src: "/assets/sub/wellbian/product-1.jpg", alt: "패키지 앞뒷면과 제품" },
  { src: "/assets/sub/wellbian/product-2.jpg", alt: "주방 설치 연출" },
  { src: "/assets/sub/wellbian/product-3.jpg", alt: "거실 설치 연출" },
  { src: "/assets/sub/wellbian/product-4.jpg", alt: "패키지 앞뒷면 (골드)" },
  { src: "/assets/sub/wellbian/product-5.jpg", alt: "패키지 앞면" },
];

/* 제조사 공식 사양표 15항목 — 원본 data.ts SPECS 그대로 */
const SPECS: { k: string; v: string }[] = [
  { k: "측정 항목", v: "PM2.5 · PM10 · CO₂ · TVOC · 온도 · 습도 · 체감온도" },
  { k: "모델명", v: "ARC-600DA" },
  { k: "디스플레이", v: "5인치 풀터치 컬러 LCD" },
  { k: "전원", v: "12VDC · 300mA - 월 전기료 1,000원 미만" },
  { k: "통신 방식", v: "Wi-Fi · 블루투스 (802.11a/b/g/n)" },
  { k: "성능인증(정확도)", v: "CO₂ 1등급 · PM2.5 1등급" },
  { k: "측정 범위 / 분해능", v: "0~1,000㎍/m³ (PM2.5 기준) / 1㎍/m³" },
  { k: "유량", v: "0.1L/min" },
  { k: "측정 원리", v: "Light scattering laser photometer" },
  { k: "팬 수명", v: "32,000시간 (일반 환경)" },
  { k: "운영 온도", v: "−10 ~ 60°C" },
  { k: "제원 / 중량", v: "120(W) × 118(H) × 36(D) mm / 260g 이하" },
  { k: "재질", v: "ABS" },
  { k: "설치", v: "벽걸이 · 탁상 겸용" },
  { k: "인증", v: "KC · 성능인증" },
];

/* 3단계 아이콘(icon01~03, 100×80) · 선순환 칩 아이콘(icon04~07, 104×68).
   SVG 파일 안에 배경 사각형(#EBECFB, radius 8)이 들어 있어 감싸는 쪽에서 배경을 그리지 않는다. */
const StepIcon = ({ n }: { n: 1 | 2 | 3 }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={`/assets/sub/wellbian/icon0${n}.svg`} alt="" width={100} height={80} aria-hidden />
);
const LoopIcon = ({ n }: { n: 4 | 5 | 6 | 7 }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={`/assets/sub/wellbian/icon0${n}.svg`} alt="" width={104} height={68} aria-hidden />
);

function HowCard({ n, step, title, desc }: { n: 1 | 2 | 3; step: string; title: string; desc: React.ReactNode }) {
  return (
    <div className="how-card">
      <div className="how-card__top">
        <div className="how-card__head">
          <span className="how-card__badge">{step}</span>
          <span className="how-card__title">{title}</span>
        </div>
        <StepIcon n={n} />
      </div>
      <p className="how-card__desc">{desc}</p>
    </div>
  );
}

export default function WellbianEconomy() {
  const [specImg, setSpecImg] = useState(0);
  const [playing, setPlaying] = useState(false);

  /* 영상이 끝나면 마지막 프레임에 그대로 멈춰 있었다(딤·재생버튼만 다시 뜸).
     끝나고 2초 뒤 포스터 화면으로 되돌린다 — load() 를 써야 currentTime 만
     0 으로 돌릴 때와 달리 poster 이미지가 다시 표시된다.
     2초 안에 사용자가 다시 재생하면 되돌리기를 취소한다. */
  const videoRef = useRef<HTMLVideoElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelReset = () => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }
  };
  useEffect(() => cancelReset, []);

  return (
    <div className="wb-store">
      {/* ── 홍보 영상 ── */}
      <section className="wb-sec">
        <div className="wb-wrap">
          <h2 className="wb-h2">날씨 데이터가 자산이 되는 세상</h2>
          <div className="wb-film">
            <video
              ref={videoRef}
              className="wb-film__video"
              src="/assets/sub/wellbian/intro.mp4"
              poster="/assets/sub/wellbian/intro.jpg"
              controls
              playsInline
              preload="metadata"
              onPlay={() => {
                cancelReset();
                setPlaying(true);
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => {
                setPlaying(false);
                cancelReset();
                resetTimer.current = setTimeout(() => {
                  resetTimer.current = null;
                  videoRef.current?.load();
                }, 2000);
              }}
            />
            {/* 멈춰 있을 때만 딤 + 재생 버튼. pointer-events:none 이라 기본 컨트롤은 그대로 눌린다 */}
            {!playing && (
              <div className="wb-film__veil">
                <button
                  type="button"
                  className="wb-film__play"
                  aria-label="영상 재생"
                  onClick={(e) => (e.currentTarget.closest(".wb-film")?.querySelector("video") as HTMLVideoElement | null)?.play()}
                >
                  <svg viewBox="0 0 24 24" aria-hidden><path d="M8 5.2v13.6L19 12z" fill="currentColor" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 날씨데이터 경제란? ── */}
      <section className="wb-sec" id="how">
        <div className="wb-wrap wb-wrap--center">
          <div className="wb-head">
            <h2 className="wb-h2">날씨데이터 경제란?</h2>
            <p className="wb-slogan">내가 측정한 날씨데이터가 가치를 지닌 자산이 됩니다.</p>
          </div>
          <p className="wb-lead">
            내가 생활하는 공간에서 측정한 날씨가 데이터가 되고, 데이터가 가치를 인정받아 보상으로 돌아오고,
            수집된 데이터는 다양한 날씨서비스가 되는 날씨 데이터 경제를 구축하고자 합니다.
          </p>

          <div className="how-grid">
            <HowCard n={1} step="1단계" title="날씨 측정" desc="CO₂·미세먼지·온습도 등 실내 날씨 데이터 측정 통한 건강관리" />
            <HowCard n={2} step="2단계" title="데이터 검증" desc="데이터 품질과 성실성 기준으로 보상 산정" />
            <HowCard
              n={3}
              step="3단계"
              title="토큰 보상"
              desc={<>검증된 데이터를 네트워크 원칙에 따라 WLBN 지급 <span className="how-card__note">지급량과 가치는 보장되지 않습니다</span></>}
            />
          </div>

          {/* 선순환 — 데이터가 실수요처로 유통되어 보상 재원이 되는 구조 */}
          <div className="loop-box">
            <div className="loop-2col">
              <div>
                <div className="loop-row">
                  <span className="loop-chip"><LoopIcon n={4} /><span>검증된 데이터</span></span>
                  <span className="loop-arrow" aria-hidden>→</span>
                  <span className="loop-chip"><LoopIcon n={5} /><span>기업/기관 구매</span></span>
                  <span className="loop-arrow" aria-hidden>→</span>
                  <span className="loop-chip"><LoopIcon n={6} /><span>보상 재원 확보</span></span>
                  <span className="loop-arrow" aria-hidden>→</span>
                  <span className="loop-chip"><LoopIcon n={7} /><span>측정망 확대</span></span>
                </div>
                {/* 마지막 칩에서 첫 칩으로 되돌아가는 고리 — 폭이 칩 치수를 따라야 해서 CSS 로 그린다 */}
                <div className="loop-return">
                  <div className="lr-u" aria-hidden />
                  <span>촘촘해진 데이터가 다음 바퀴의 수요를 키웁니다</span>
                </div>
              </div>
              <div className="loop-right">
                <div className="loop-title">데이터가 흐를수록 단단해지는 선순환</div>
                <p className="loop-body">
                  노드가 모은 날씨 데이터는 품질 검증을 거쳐 기업·API·AI 서비스로 유통됩니다.
                  <br />
                  그 판매 대금이 다시 노드 보상의 재원이 되고, 보상이 노드를 늘리면 측정망이 촘촘해집니다.
                </p>
                <p className="loop-note">측정값은 날씨 데이터뿐입니다 · 개인을 식별하는 정보는 수집하지 않습니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 날씨데이터 토큰생성기™ — 제품 갤러리 + 스펙표 ── */}
      <section className="wb-sec wb-sec--spec" id="spec">
        <h2 className="wb-h2 wb-h2--spec">날씨데이터 토큰생성기<span className="wb-tm" aria-hidden>™</span></h2>
        <div className="wb-spec-band">
            <div className="spec-chips">
              <span className="cert-chip">KC 인증</span>
              <span className="cert-chip">성능인증</span>
              <p className="spec-model">실내공기측정기 · 모델명 ARC-600DA</p>
            </div>

            <div className="spec-cols">
              {/* 좌측 — 큰 이미지 + 썸네일. 오버·클릭·포커스 모두로 바뀐다(터치 기기엔 hover 가 없다) */}
              <div className="spec-left">
                <div
                  className="spec-main"
                  style={{ backgroundImage: `url(${GALLERY[specImg].src})` }}
                  role="img"
                  aria-label={GALLERY[specImg].alt}
                />
                <div className="spec-thumbs">
                  {GALLERY.map((g, i) => (
                    <button
                      key={g.src}
                      type="button"
                      className={`spec-thumb${i === specImg ? " on" : ""}`}
                      style={{ backgroundImage: `url(${g.src})` }}
                      onMouseEnter={() => setSpecImg(i)}
                      onFocus={() => setSpecImg(i)}
                      onClick={() => setSpecImg(i)}
                      aria-pressed={i === specImg}
                      aria-label={g.alt}
                    />
                  ))}
                </div>
              </div>

              {/* 우측 — 스펙표. 원본(런처)은 접기/펼치기였지만 여기서는 15항목을 전부 펼쳐 둔다 */}
              <div className="spec-right">
                <div className="spec-table">
                  {SPECS.map((sp) => (
                    <div key={sp.k} className="spec-row">
                      <span className="spec-k">{sp.k}</span>
                      <span className="spec-v">{sp.v}</span>
                    </div>
                  ))}
                </div>
                <div className="spec-src">제조사 공식 사양표 기준입니다.</div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
