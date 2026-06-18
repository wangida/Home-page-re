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
          subtitle={"보이지 않는 공기를 보이게 관리하는\n공기질 통합관리 소프트웨어"}
        />

        <section className="company-intro" style={{ paddingBottom: 500 }}>
          <h2 className="company-intro__title">실내·실외 공기 통합관리 서비스</h2>
          <p className="company-intro__desc air365-desc">
            케이웨더는 공기빅데이터플랫폼 Air365를 통해 공기측정기 사용자가
            데이터를 기반으로 실내 공기를 관리할 수 있도록 공기데이터 수집,
            <br />
            실시간 모니터링, 공간별 맞춤형 공기질 진단보고서, 공기 가전제품 제어
            등의 다양한 데이터와 기능을 SaaS 형태로 유료 제공합니다.
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
      </main>
      <Footer />
    </>
  );
}
