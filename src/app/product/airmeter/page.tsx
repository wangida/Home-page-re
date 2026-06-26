import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기측정기 | K-WEATHER",
  description: "케이웨더 공기측정기 제품 소개.",
};

/* 상단 비주얼만 우선 구현 — 타이틀·서브카피·본문 확정 후 교체 예정 */
export default function AirMeterPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_airmeter.jpg"
          title="공기측정기"
          subtitle={"보이지 않는 공기를 데이터로 관리하는\n정확한 날씨 · 미세먼지 정보 제공"}
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
