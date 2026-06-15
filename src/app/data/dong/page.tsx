import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "동별 미세먼지 | K-WEATHER",
  description: "케이웨더 동별 미세먼지 — 우리 동네 단위의 상세 미세먼지 정보.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
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

        <section className="company-intro">
          <h2 className="company-intro__title">공기분석데이터</h2>
          <p className="company-intro__desc fd-desc">
            {
              "국가미세먼지 관측값은 해당 구의 모든 지역이 동일한 미세먼지 농도로 표출된다는 단점을 보강하기 위해\n당사는 기존 구별로 제공되는 해당 지역을 세분화된 동별로 동별미세먼지데이터를 생산하여 제공하고 있습니다.\n동별미세먼지데이터는 국가대기관측망 데이터와 케이웨더 IoT 실외공기측정기(OAQ)가 측정하는 데이터를\n융·복합한 후 지역별 오염배출정보, 인구밀도, 지형 및 토지피복 등을 고려하여 인공지능을 적용,\n행정동별로 미세먼지 실황 값을 산출하는 공기분석데이터입니다."
            }
          </p>
        </section>

        <h3 className="fd-subtitle">동별 미세먼지 실황정보</h3>

        <div className="fd-box">
          <p className="fd-box__copy">
            국가관측정보 + 케이웨더 자체측정정보 + 케이웨더 인공지능(AI) 알고리즘
            <br />
            &ldquo;동별 미세먼지 실황 정보&rdquo; <span className="black">생산</span>
          </p>
          <img
            className="fd-box__img"
            src="/assets/sub/fd_img01.jpg"
            width={900}
            height={487}
            alt="국가관측망(590지역)과 케이웨더 측정정보(3,000지역), 기상관측·오염배출·인구밀도·지역적 특성을 융복합해 행정동별 미세먼지 실황 데이터를 산출하는 과정"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
