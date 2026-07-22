import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기관리 소프트웨어",
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
          title="공기관리 소프트웨어"
          subtitle={"실내외 공기질을 실시간으로 측정·수집하는\n케이웨더 공기 빅데이터 서비스"}
        />

        <section className="company-intro air365-intro">
          <h2 className="company-intro__title">보이지 않는 공기를 보이게 관리하는 소프트웨어</h2>
          <p className="company-intro__desc air365-desc">
            공기관리 소프트웨어(S/W)는 내가 머무는 공간의 공기질을 각종 데이터를 기반으로
            <br />
            과학적으로 분석하여 ‘보이지 않는 공기를 24시간 보이게 관리’ 할 수 있도록 돕습니다.
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

        <section className="air365-measure air365-software">
          <h2 className="air365-measure__title air365-software__title">측정 데이터</h2>
          <p className="air365-measure__desc">
            케이웨더의 실외·실내 공기측정기를 통하여 측정된 대용량의 공기데이터를 실시간으로 수집합니다.
            <br />
            미세먼지, 초미세먼지, 휘발성유기화합물(TVOCs), 온도, 습도 등 측정데이터를 한눈에 모니터링 가능합니다.
          </p>
          <div className="air365-software__fig">
            <img
              src="/assets/sub/data_software03.jpg"
              width={1711}
              height={482}
              alt="Air365 실내·실외 공기질 현황 및 초미세먼지 실내외 모니터링 화면 예시"
            />
          </div>
        </section>

        <section className="air365-measure air365-software">
          <h2 className="air365-measure__title air365-software__title">분석 데이터</h2>
          <p className="air365-measure__desc">
            측정된 데이터들을 요소별로 선택해 실시간 공기질 비교 분석이 가능합니다.
            <br />
            프리미엄 서비스를 이용하면 현재까지 축적된 모든 데이터의 조회 및 분석을 지원하며
            <br />
            고객 요구에 맞춘 통계별, 측정요소별, 기간별 등 공기질 분석 보고서도 제공합니다.
          </p>
          <div className="air365-software__fig">
            <img
              src="/assets/sub/data_software01.jpg"
              width={1713}
              height={484}
              alt="Air365 그래프분석 화면과 실외 공기질 분석 보고서 예시"
            />
          </div>
        </section>

        <section className="air365-measure air365-software">
          <h2 className="air365-measure__title air365-software__title">제어 데이터</h2>
          <p className="air365-measure__desc">
            각종 공기가전 제품을 측정기와 연동시켜 원격으로 제어합니다.
            <br />
            실외·실내 공기데이터에 따라 환기청정기 운영모드와 가동시기, 시간, 강도를 조절하여 에너지를 효율적으로 관리하고
            <br />
            공기를 청정하게 유지할 수 있도록 공간의 유형(사무실, 학교, 병원 등)과 목적에 따라 AI 알고리즘을 적용합니다.
          </p>
          <div className="air365-software__fig">
            <img
              src="/assets/sub/data_software02.jpg"
              width={1711}
              height={484}
              alt="Air365 환기청정기 원격 제어 화면과 운전 현황 모니터링 화면 예시"
            />
          </div>
        </section>

        <section className="air365-cert air365-cert--sw">
          <div className="air365-cert__inner">
          <div className="air365-cert__media">
            <img
              src="/assets/sub/data_software04.png"
              width={550}
              height={364}
              alt="Air365 V2.0 한국정보통신기술협회(TTA) 소프트웨어 품질 1등급(Good Software) 인증서 2종"
            />
          </div>
          <div className="air365-cert__text">
            <h3 className="air365-cert__title">
              <span className="air365-cert__brand">Air365</span> V2.0 굿소프트웨어
              1등급 인증
            </h3>
            <dl className="air365-cert__spec">
              <div className="air365-cert__item">
                <dt>인증기관</dt>
                <dd>한국정보통신기술협회(TTA)</dd>
              </div>
              <div className="air365-cert__item">
                <dt>시험범위</dt>
                <dd>Air365 웹서비스</dd>
              </div>
              <div className="air365-cert__item">
                <dt>기능 범위</dt>
                <dd>
                  모니터링 : 공기질현황조회/실외공기질현황조회
                  <br />
                  분석 : 실내/실외공기질비교, 수집데이터 조회, 통계 조회, 파일 다운로드
                  <br />
                  측정기 정보 조회
                  <br />
                  계정관리
                </dd>
              </div>
            </dl>
          </div>
          </div>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
