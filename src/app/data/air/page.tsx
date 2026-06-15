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
          subtitle={"독자적인 대기환경 분석 기술 기반\n더욱 정확한 공기예보 정보 제공"}
        />

        <section className="company-intro">
          <h2 className="company-intro__title">공기예보(미세먼지/대기오염)</h2>
          <p className="company-intro__desc fd-desc">
            {
              "환경부 산하 국립환경과학원에서 제공하는 미세먼지 예보보다 많은 장점과 높은 정확도의 공기예보(미세먼지/대기오염)를\n제공하고 있으며 많은 포털과 언론사에서는 환경부가 아닌 케이웨더 예보를 선택하여 제공 받고 있습니다."
            }
          </p>
        </section>

        <section className="fc-case">
          <h3 className="fd-subtitle">언론사 사례</h3>
          <div className="fc-grid">
            <div className="fc-grid__item">
              <img
                src="/assets/sub/fc_img01.jpg"
                width={759}
                height={824}
                alt="언론사에 제공되는 케이웨더 오늘 미세먼지·초미세먼지 예보 사례"
              />
            </div>
            <div className="fc-grid__item">
              <img
                src="/assets/sub/fc_img02.jpg"
                width={730}
                height={739}
                alt="언론사에 제공되는 케이웨더 공기예보 지면 사례"
              />
            </div>
          </div>
        </section>

        <section className="fc-case">
          <h3 className="fd-subtitle">포털사이트 사례</h3>
          <div className="fc-grid">
            <div className="fc-grid__item">
              <img
                src="/assets/sub/fc_img03.jpg"
                width={860}
                height={683}
                alt="포털사이트에 제공되는 케이웨더 공기예보 서비스 사례"
              />
            </div>
            <div className="fc-grid__item">
              <img
                src="/assets/sub/fc_img04.jpg"
                width={730}
                height={939}
                alt="포털사이트에 제공되는 케이웨더 미세먼지 예보 서비스 사례"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
