import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "Air365 | K-WEATHER",
  description: "케이웨더 Air365 — 실내외 공기질을 365일 관리하는 공기관리 서비스.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function Air365Page() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_air365.jpg"
          title="Air365"
          subtitle={"실내외 공기질을 실시간으로 측정·수집하는\n케이웨더 공기 빅데이터 서비스"}
        />

        <section className="company-intro air365-intro">
          <h2 className="company-intro__title">수집에서 제공까지, 케이웨더 공기 데이터</h2>
          <p className="company-intro__desc air365-desc">
            국가관측 데이터와 전국 측정기 데이터를 실시간으로 수집·분석해, 웹·앱부터
            <br />
            시각화 맵·환경에너지까지 다양한 채널로 공기 데이터를 제공합니다.
          </p>
          <div className="air365-box">
            <img
              className="air365-img"
              src="/assets/sub/data_air365_img01.jpg"
              width={1400}
              height={776}
              alt="Air365 실내·실외 공기 통합관리 서비스 구성 화면"
            />
          </div>
        </section>

        <section className="air365-measure">
          <h2 className="air365-measure__title">
            미세먼지부터 소음까지, 측정하는 공기 데이터
          </h2>
          <p className="air365-measure__desc">
            미세먼지·초미세먼지·이산화탄소·온도·습도·휘발성유기화합물(VOC)·소음 등 8가지 기본 항목을 비롯해
            <br />
            최대 20가지 측정 정보를 제공하며, 관심 지역을 설정하면 현재 날씨까지 함께 확인할 수 있습니다.
          </p>
          <div className="air365-measure__box">
            <span className="air365-measure__badge">기본 8종 · 최대 20종 측정</span>
            <ul className="air365-measure__grid">
            <li className="air365-measure__card">
              <span className="air365-measure__name">미세먼지</span>
              <span className="air365-measure__unit">PM10 · ㎍/㎥</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">초미세먼지</span>
              <span className="air365-measure__unit">PM2.5 · ㎍/㎥</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">이산화탄소</span>
              <span className="air365-measure__unit">CO2 · ppm</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">온도</span>
              <span className="air365-measure__unit">℃</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">습도</span>
              <span className="air365-measure__unit">RH %</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">휘발성유기화합물</span>
              <span className="air365-measure__unit">VOC · ppb</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">소음</span>
              <span className="air365-measure__unit">dB</span>
            </li>
            <li className="air365-measure__card">
              <span className="air365-measure__name">관심지역 날씨</span>
              <span className="air365-measure__unit">날씨 연동</span>
            </li>
            </ul>
          </div>
        </section>

        <section className="air365-measure">
          <h2 className="air365-measure__title">
            복잡한 측정값을 한눈에 보는 통합실내쾌적지수
          </h2>
          <p className="air365-measure__desc">
            케이웨더가 자체 개발한 통합실내쾌적지수는 여러 측정 요소를 종합해 누구나 쉽게 이해할 수 있는 등급으로 환산합니다.
            <br />
            좋음·보통·나쁨·매우 나쁨의 4단계로, 현재 공간의 공기 상태를 직관적으로 파악할 수 있습니다.
          </p>
          <div className="air365-comfort__fig">
            <p className="air365-comfort__fig-title">케이웨더 통합실내쾌적지수</p>
            <p className="air365-comfort__fig-cap">
              여러 측정값을 종합해 한눈에 이해할 수 있는 등급으로 환산
            </p>
            <ul className="air365-comfort__grades">
              <li className="air365-comfort__grade">
                <span className="air365-comfort__bar air365-comfort__bar--good">좋음</span>
                <span className="air365-comfort__range">100 – 90</span>
              </li>
              <li className="air365-comfort__grade">
                <span className="air365-comfort__bar air365-comfort__bar--normal">보통</span>
                <span className="air365-comfort__range">89 – 80</span>
              </li>
              <li className="air365-comfort__grade">
                <span className="air365-comfort__bar air365-comfort__bar--bad">나쁨</span>
                <span className="air365-comfort__range">79 – 50</span>
              </li>
              <li className="air365-comfort__grade">
                <span className="air365-comfort__bar air365-comfort__bar--vbad">매우 나쁨</span>
                <span className="air365-comfort__range">49 – 0</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="air365-measure">
          <h2 className="air365-measure__title">
            실시간부터 API까지, 데이터 제공·연동
          </h2>
          <p className="air365-measure__desc">
            수집·분석된 공기 데이터는 실시간 현황, 기간별 통계, 분석보고서 형태로 제공됩니다.
            <br />
            또한 REST·OpenAPI 연동을 통해 외부 시스템·앱에서도 데이터를 활용할 수 있어, 다양한 서비스로 확장됩니다.
          </p>
          <div className="air365-box air365-box--flow">
            <img
              className="air365-img"
              src="/assets/sub/data_air365_img02.jpg"
              width={1400}
              height={260}
              alt="통계분석·보고서·추적 항목별 현황 등 다양한 형태로 제공되는 공기 데이터 화면 예시"
            />
          </div>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
