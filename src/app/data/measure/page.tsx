import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기 측정 데이터 | K-WEATHER",
  description: "케이웨더 공기 측정 데이터 — 국가관측망과 IoT 측정 기반 공기질 데이터.",
};

const OAQ_PLACES = [
  { img: "ad_img01", cap: "건물" },
  { img: "ad_img02", cap: "건물" },
  { img: "ad_img03", cap: "아파트" },
  { img: "ad_img04", cap: "보육시설\n(유치원, 어린이집)" },
  { img: "ad_img05", cap: "병원" },
  { img: "ad_img06", cap: "도서관" },
];

export default function AirMeasurePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_air.jpg"
          title="공기 측정"
          subtitle={"국가관측망과 IoT 측정 데이터를 기반으로\n신뢰도 높은 공기질 측정 데이터 제공"}
        />

        <section className="oaq">
          <h2 className="oaq__title">
            실외공기측정기(OAQ)를 활용한 생활권 공기질 서비스
          </h2>
          <div className="oaq__desc">
            <p>
              국가 관측망으로 확인하기 어려운 생활권 단위의 실외공기 상태를 실시간으로 측정합니다.
              건물·아파트·학교·병원 등 실제 생활 공간의 공기질 정보를 제공하고, 실내·실외 공기 비교를
              통한 스마트 환기 정보까지 확인할 수 있습니다.
            </p>
          </div>

          <div className="oaq__box">
            <div className="oaq__banner">
              <p className="oaq__banner-title">내가 사는 지점의 실외공기 정보</p>
              <p className="oaq__banner-ex">
                ex) ‘내집 앞 마당’, ‘우리 아파트놀이터’, ‘우리 학교 운동장’
              </p>
            </div>

            <ul className="oaq__grid">
              {OAQ_PLACES.map((p, i) => (
                <li className="oaq__item" key={i}>
                  <div className="oaq__thumb">
                    <img
                      src={`/assets/sub/${p.img}.jpg`}
                      alt={`${p.cap.replace("\n", " ")} 실외공기측정기 설치 사례`}
                    />
                  </div>
                  <span className="oaq__cap">{p.cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="oaq-ai">
          <h2 className="oaq__title">AI기술을 활용한 정확도 높은 데이터</h2>
          <p className="oaq-ai__desc">
            국가관측망 데이터와 AI(Deep learning) 기법을 활용하여 실외공기측정기(OAQ)를 지속적으로
            보정, 보다 정확한 데이터를 만들고 있습니다.
          </p>
          <div className="oaq-ai__box">
            <img
              src="/assets/sub/ad_img07.jpg?v=2"
              width={1400}
              height={644}
              alt="1월 OAQ / 국가관측망 데이터 비교 — 케이웨더 PM10과 환경부 PM10 시계열·상관관계 그래프 (y=0.7756x+8.0265, R²=0.7864)"
            />
          </div>
        </section>

        <section className="oaq-airmap">
          <h2 className="oaq__title">실내/외 공기질 빅데이터 시각화 서비스</h2>
          <div className="oaq-airmap__body">
            <p>
              동사는 30,000여 개의 실외/실내공기질 데이터를 비롯하여 다양한 목적으로 설치가 증가되는
              모든 실외, 실내 공기측정기 데이터를 GIS 개념으로 통합적으로 관리하여야 합니다. 이를 위해서
              대기오염물질, 풍향, 온도, 습도 등의 모든 공기요소를 Point Map, Flow Map, Heat Map으로
              나타내는 시각화 기술을 통하여 고도화하여야 합니다. 해당 기술을 고도화하기 위해서는
              실외/실내공기질 데이터를 수집, 가공 분석할 수 있는 빅데이터 플랫폼이 대용량의 시계열
              데이터의 처리가 용이한 하둡 기반으로 안정적으로 확대 운영될 수 있는 기술과 다양한 시각화
              기술이 적용된 공기지도(Airmap)이 필수적입니다.
            </p>
            <p>
              {
                "공기지도 중 Point Map은 대기오염물질의 측정값이 수치화되고, 그래프화되어 표출됩니다. Flow Map은 GIS를 기반으로 풍향/풍속에 대한 정보를 500m×500m 격자화한 데이터 레이어를 기반으로 산출하며, 데이터 미확보지역은 ’이중 선형 보간법‘을 통해 도출한 값을 실시간으로 시각화합니다.\nHeat Map은 GIS를 기반으로 미세먼지, 초미세먼지, 온도, 습도에 대한 정보를 500m×500m 격자화한 데이터 레이어를 기반으로 산출하며, 데이터 미확보 지역은 'IDW 보간법(Inverse Distance Weighted)' 또는 '크리깅 보간법(Kriging Interpolation)'을 통해 산출된 데이터를 실시간으로 시각화합니다."
              }
            </p>
          </div>
        </section>

        <section className="oaq-air2">
          <h2 className="oaq__title">실내외 공기질 시각화 Airmap 서비스</h2>
          <div className="oaq-air2__box">
            <img
              src="/assets/sub/ad_subvisual.jpg?v=2"
              width={1400}
              height={673}
              alt="케이웨더 Airmap — 실내외 공기질 빅데이터 시각화 서비스 화면 (Heat Map·Flow Map·측정소 현황)"
            />
          </div>
          <div className="oaq-air2__body">
            <p>
              {
                "이렇게 Point Map, Flow Map, Heat Map 격자화된 데이터 레이어 기반으로 저장된 모든 GIS 기반의 모든 데이터들은 레이어별, 측정요소별로 시공간에 따라 자유자재로 효과적으로 시각화되어 표출됨으로써 공간의 공기상태를 시계열로 분석, 예측하는데 효과적인 도구로 활용될 것입니다. 실외·실내 공기질 빅데이터 시각화 서비스를 통해 동사는 세계 유일의 전문 공기데이터플랫폼 기술 보유기업으로써 시장의 우위를 점하고 고부가가치의 공기데이터 유통시장을 창출할 것입니다.\n현재 빅데이터 시각화 서비스(Airmap)는 개발이 완료되었으며, 고객의 프로그램 사용 편의성 증대 및 데이터의 정확성 등을 높이기 위한 고도화 작업과정에 있습니다.\n이 서비스는 동사가 사업을 영위하면서 추가적으로 확보되는 공기질 데이터를 바탕으로 끊임없이 개선되어 향후 다양한 고객들의 니즈를 충족시킬 것으로 기대하고 있습니다."
              }
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
