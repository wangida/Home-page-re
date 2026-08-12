import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기 예보",
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

        {/* 도입부 타이틀·설명 규격은 공기 측정 데이터(.oaq)와 동일하게 */}
        <section className="oaq">
          <h2 className="oaq__title">
            언론사 및 포털이 신뢰하는 정확한 미세먼지·대기질 예보
          </h2>
          <div className="oaq__desc">
            <p>
              독자 개발한 예보 모델로 국립환경과학원보다 높은 정확도를 구현했으며,
              <br />
              주요 포털사이트와 언론사가 케이웨더의 예보를 선택해 사용하고 있습니다.
            </p>
          </div>
        </section>

        {/* 예보 화면 2종 — 케이웨더/환경부 비교 지도, 예보 모델 산출 지도 */}
        {/* 박스 라인은 공기 측정(.oaq-ai__box)과 동일 규격 */}
        <section className="fc-visual">
          <div className="fc-visual__box">
            <img
              src="/assets/sub/data_air_re01.png"
              width={1027}
              height={676}
              alt="케이웨더와 환경부의 미세먼지 예보 지도 비교 — WHO·환경부 권고치 함께 표출"
            />
            <img
              src="/assets/sub/data_air_re02.png"
              width={646}
              height={711}
              alt="케이웨더 대기질 예보 모델 산출 결과 지도"
            />
          </div>
        </section>

        <section className="fc-kind">
          <h3 className="fd-subtitle">케이웨더 공기예보의 종류</h3>
          {/* 박스 없이 텍스트로 — 좌측 이미지 + 우측에 미세먼지·대기오염 예보 순서로 */}
          <div className="fc-kind__body">
            <div className="fc-kind__row">
              <img
                className="fc-kind__img"
                src="/assets/sub/data_air_re03.jpg?v=3"
                width={453}
                height={397}
                alt="미세먼지가 짙게 낀 도심 도로 전경"
              />
              <div className="fc-kind__col">
                <div className="fc-kind__text">
                  <h4 className="fc-kind__title">미세먼지 예보</h4>
                  <ul className="fc-kind__list">
                    <li>
                      전국 1만 여 곳의 IoT 측정기에서 실시간 수집한 데이터를 기반으로 AI
                      알고리즘을 활용해 미세먼지(PM 10)와 초미세먼지(PM 2.5) 현황 및 예보를 생산
                    </li>
                    <li>
                      미세먼지·초미세먼지 농도와 단계(좋음, 보통, 약간 나쁨, 나쁨, 매우 나쁨),
                      WHO 및 환경부 권고치를 함께 표출해 다양한 정보의 비교분석이 용이하도록 제공
                    </li>
                  </ul>
                </div>
                <div className="fc-kind__text fc-kind__text--wide">
                  <h4 className="fc-kind__title">대기오염 예보</h4>
                  <ul className="fc-kind__list">
                    <li>오존, 황사, 자외선 등 다양한 종류의 대기오염 현황 및 예보를 생산</li>
                    <li>나들이, 빨래, 세차, 운동 등 각종 생활과 밀접한 지수정보 제공</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                src="/assets/sub/data_air02.png?v=4"
                width={1900}
                height={1004}
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
