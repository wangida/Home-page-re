import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "동별 미세먼지",
  description: "케이웨더 동별 미세먼지 — 우리 동네 단위의 상세 미세먼지 정보.",
};

/* 출처 라벨 옆 안내 아이콘 — 원본 캡처의 ⓘ 표기 */
function InfoMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" focusable="false">
      <circle cx="8.5" cy="8.5" r="7.6" fill="none" stroke="#9a9a9a" strokeWidth="1.1" />
      <circle cx="8.5" cy="4.9" r="1" fill="#9a9a9a" />
      <rect x="7.7" y="7" width="1.6" height="5.4" rx="0.8" fill="#9a9a9a" />
    </svg>
  );
}

export default function DongDustPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_dong.jpg"
          title="동별 미세먼지"
          subtitle={"국가 관측망과 자체 측정 데이터를 기반으로\n행정동 단위의 정밀 공기분석 데이터 제공"}
        />

        <section className="company-intro dong-intro">
          <h2 className="company-intro__title">공기 분석 데이터</h2>
          <p className="company-intro__desc fd-desc">
            {
              "국가미세먼지 관측값은 해당 구의 모든 지역이 동일한 미세먼지 농도로 표출된다는 단점을 보강하기 위해\n당사는 기존 구별로 제공되는 해당 지역을 세분화된 동별로 동별미세먼지데이터를 생산하여 제공하고 있습니다.\n\n동별미세먼지데이터는 국가대기관측망 데이터와 케이웨더 IoT 실외공기측정기(OAQ)가 측정하는 데이터를\n융·복합한 후 지역별 오염배출정보, 인구밀도, 지형 및 토지피복 등을 고려하여 인공지능을 적용,\n행정동별로 미세먼지 실황 값을 산출하는 공기분석데이터입니다."
            }
          </p>
        </section>

        <h3 className="fd-subtitle">동별 미세먼지 실황정보</h3>

        <p className="fd-box__copy fd-copy">
          국가관측정보 + 케이웨더 자체측정정보 + 케이웨더 인공지능(AI) 알고리즘, <span className="black">동별 미세먼지 실황 정보 생산</span>
        </p>

        <img
          className="fd-img fd-img--flow"
          src="/assets/sub/data_dong_re00.jpg"
          width={1300}
          height={990}
          alt="국가관측망(590지역)과 케이웨더 측정정보(3,000지역), 기상관측·오염배출·인구밀도·지역적 특성을 융복합해 행정동별 미세먼지 실황 데이터를 산출하는 과정"
        />

        {/* 좌: 전국(환경부 vs 케이웨더) / 우: 서울시(환경부 vs 케이웨더) */}
        <div className="dong-cmp">
          <div className="dong-cmp__box">
            <img
              src="/assets/sub/data_dong_re01.jpg"
              width={1037}
              height={1164}
              alt="환경부 전국 미세먼지 지도 — 시·도 단위로 넓은 영역이 하나의 농도로 표출"
            />
            <img
              src="/assets/sub/data_dong_re02.jpg"
              width={1037}
              height={1164}
              alt="케이웨더 전국 미세먼지 지도 — 행정동 단위로 세분화된 농도 표출"
            />
          </div>
          <div className="dong-cmp__box">
            {/* 캡처는 케이웨더가 먼저였지만 이미지 순서(환경부 → 케이웨더)에 맞춰 라벨을 뒤집음 */}
            <figure className="dong-cmp__item">
              <figcaption className="dong-cmp__cap">
                <span className="dong-cmp__src">
                  환경부
                  <InfoMark />
                </span>
                <span className="dong-cmp__meta">
                  기준: 2026. 08. 11 11:00 (업데이트 간격 : 1시간)
                </span>
              </figcaption>
              <img
                src="/assets/sub/data_dong_re03.jpg?v=2"
                width={942}
                height={1249}
                alt="환경부 서울특별시 미세먼지 — 시 전체가 하나의 농도로 표출"
              />
            </figure>
            <figure className="dong-cmp__item">
              <figcaption className="dong-cmp__cap">
                <span className="dong-cmp__src">
                  케이웨더
                  <InfoMark />
                </span>
                <span className="dong-cmp__meta">
                  기준: 2026. 08. 11 11:20 (업데이트 간격 : 10분)
                </span>
              </figcaption>
              <img
                src="/assets/sub/data_dong_re04.jpg?v=2"
                width={942}
                height={1249}
                alt="케이웨더 서울특별시 동별 미세먼지 — 행정동별 농도와 BEST·WORST 지역 표출"
              />
            </figure>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
