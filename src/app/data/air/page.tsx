import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기 예보 | K-WEATHER",
  description: "케이웨더 공기 예보 — 미세먼지·오존 등 대기질 예보 정보.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function AirForecastPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_air.jpg"
          title="공기 예보"
          subtitle={"독자적인 대기환경 분석 기술로,\n한발 더 정확하게 데이터 제공"}
        />

        <section className="company-intro">
          <h2 className="company-intro__title">
            공기 예보
            <span className="company-intro__sub">(미세먼지·대기오염)</span>
          </h2>
          <p className="company-intro__desc fd-desc">
            {
              "독자 개발한 예보 모델로 국립환경과학원보다 높은 정확도를 구현했으며,\n주요 포털과 언론사가 케이웨더의 예보를 선택해 사용하고 있습니다."
            }
          </p>
        </section>

        <section className="fc-case">
          <h3 className="fd-subtitle">언론사 사례</h3>
          <div className="fc-grid fc-grid--stack">
            <div className="fc-grid__item">
              <img
                src="/assets/sub/data_air01.png"
                width={1899}
                height={1150}
                alt="중앙일보에 제공되는 케이웨더 대기오염 예보 사례"
              />
            </div>
            <div className="fc-grid__item">
              <img
                src="/assets/sub/data_air02.png?v=2"
                width={1789}
                height={874}
                alt="조선일보·매일경제에 제공되는 케이웨더 미세먼지 예보 사례"
              />
            </div>
          </div>
        </section>

        <section className="fc-case">
          <h3 className="fd-subtitle">포털사이트 사례</h3>
          <div className="fc-grid fc-grid--stack">
            <div className="fc-grid__item">
              <img
                src="/assets/sub/data_air03.png"
                width={2122}
                height={2006}
                alt="네이버 날씨에 제공되는 케이웨더 미세먼지 예보 서비스 사례"
              />
            </div>
            <div className="fc-grid__item">
              <img
                src="/assets/sub/data_air04.png?v=2"
                width={2010}
                height={1019}
                alt="다음 대기정보에 제공되는 케이웨더 미세먼지 예보 서비스 사례"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
