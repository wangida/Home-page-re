import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "모바일 정보 | K-WEATHER",
  description: "케이웨더 모바일 정보 — 모바일 환경에 최적화된 기상·공기 정보 서비스.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function MobilePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_mobile.jpg"
          title="모바일 정보"
          subtitle={"동별 맞춤 날씨와 미세먼지 정보를 실시간으로 제공하는\n케이웨더 대표 기상 애플리케이션"}
        />
        <div className="sub-blank" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}
