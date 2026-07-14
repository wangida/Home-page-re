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

/* 실내 공간 수집 사례 — 썸네일은 임시 플레이스홀더(indoor0X.jpg), 추후 실제 이미지로 교체 예정 */
const INDOOR_PLACES = [
  { img: "indoor01", cap: "국공립/민간 어린이집" },
  { img: "indoor02", cap: "도서관, 카페, 문화시설" },
  { img: "indoor03", cap: "고속도로 휴게소" },
  { img: "indoor04", cap: "공연장" },
];

export default function AirMeasurePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_air.jpg?v=4"
          title="공기 측정 데이터"
          subtitle={"국가관측망과 IoT 측정 데이터를 기반으로\n신뢰도 높은 공기질 측정 데이터 제공"}
        />

        <section className="oaq">
          <h2 className="oaq__title">
            건물부터 어린이집까지, 고객이 머무는 바로 그 자리의 실외공기 정보
          </h2>
          <div className="oaq__desc">
            <p>
              케이웨더는 고객이 실제로 머무는 곳마다 측정기를 직접 설치해 데이터를 수집합니다.
            </p>
          </div>

          <div className="oaq__box">
            {/* '내 집 앞마당' 예시 — 블루톤 박스 안 배너로 배치 */}
            <div className="oaq__banner">
              <p className="oaq__banner-title">
                “내 집 앞마당”, “우리 아파트 놀이터”, “우리 학교 운동장”
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
          <p className="oaq-ai__desc">
            국가관측망 데이터와 AI(딥러닝) 보정 기법을 결합해,
            <br />
            실외공기측정기(OAQ)의 정확도를 지속적으로 검증합니다.
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

        <section className="oaq-indoor">
          <h2 className="oaq__title">
            실외를 넘어, 고객이 머무는 바로 그 실내 공간까지
          </h2>
          <div className="oaq__desc">
            <p>
              케이웨더는 다양한 분야 3만여 개 공간의 실내 공기질 데이터를 수집하고 있으며,
              <br />
              국가 환경빅데이터 전문센터로 지정되어 데이터의 공공성과 신뢰성을 인정받았습니다.
            </p>
          </div>

          <ul className="oaq-indoor__grid">
            {INDOOR_PLACES.map((p, i) => (
              <li className="oaq-indoor__item" key={i}>
                <div className="oaq-indoor__thumb">
                  <img
                    src={`/assets/sub/${p.img}.jpg`}
                    alt={`${p.cap} 실내 공기질 측정 사례`}
                  />
                </div>
                <span className="oaq-indoor__cap">{p.cap}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="oaq-air2">
          <h2 className="oaq__title">
            실내외 공기질을 하나의 화면으로, 케이웨더 공기지도(Airmap)
          </h2>
          <div className="oaq__desc">
            <p>
              실외·실내에서 수집한 공기질 데이터를 GIS 기반으로 통합하고,
              <br />
              지역·시설 단위로 실시간 시각화합니다.
            </p>
          </div>
          <div className="oaq-air2__box">
            <img
              src="/assets/sub/ad_subvisual.jpg?v=2"
              width={1400}
              height={673}
              alt="케이웨더 Airmap — 실내외 공기질 빅데이터 시각화 서비스 화면 (Heat Map·Flow Map·측정소 현황)"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
