import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import WeatherGallery from "@/components/sub/WeatherGallery";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "날씨경영 사례 | K-WEATHER",
  description: "날씨 데이터로 리스크를 줄이고 새로운 기회를 만든 케이웨더 날씨경영 컨설팅 적용 사례.",
};

/* 날씨경영 사례 목록 — 1차 구현.
   실제 썸네일 4장(reference_rethum01~04)만 반영, 나머지는 이미지 확정 후 교체 예정. */
type WeatherCase = { name: string; thumb?: string };

const CASES: WeatherCase[] = [
  // 울산항만공사·현대자동차·경기도시공사는 상단 갤러리에 노출 → 그리드에서 제외
  { name: "카카오", thumb: "/assets/sub/reference_rethum03.jpg" },
  { name: "네이버", thumb: "/assets/sub/reference_rethum02.jpg" },
  { name: "SK커뮤니케이션즈 - 네이트", thumb: "/assets/sub/reference_rethum01.jpg" },
  { name: "날씨 달력" },
  { name: "날씨판매지수" },
  { name: "날씨수요예측" },
];

export default function ReferenceWeatherPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_reference03.jpg"
          title="날씨경영 사례"
          subtitle={"날씨 데이터로 리스크를 줄이고 새로운 기회를 만든\n케이웨더 날씨경영 컨설팅 적용 사례"}
        />

        <WeatherGallery />

        <section className="refw" aria-label="날씨경영 사례 목록">
          <div className="refw-grid">
            {CASES.map((c) => (
              <div key={c.name} className="refw-card">
                {c.thumb ? (
                  <img className="refw-card__img" src={c.thumb} alt="" loading="lazy" />
                ) : (
                  <span className="refw-card__img refw-card__img--empty" aria-hidden="true" />
                )}
                <span className="refw-card__label">{c.name}</span>
              </div>
            ))}
          </div>

          {/* 페이지네이션 — 1차는 시안(비활성) */}
          <nav className="refw-pager" aria-label="페이지 이동">
            <span className="refw-pager__btn is-disabled" aria-hidden="true">«</span>
            <span className="refw-pager__btn is-disabled" aria-hidden="true">‹</span>
            <span className="refw-pager__num is-active" aria-current="page">1</span>
            <span className="refw-pager__num">2</span>
            <span className="refw-pager__btn" aria-hidden="true">›</span>
            <span className="refw-pager__btn" aria-hidden="true">»</span>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
