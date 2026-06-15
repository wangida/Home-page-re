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

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
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

        <section className="company-intro">
          <p className="company-intro__desc">기존내용 삽입</p>
        </section>

        <div className="sub-blank" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}
