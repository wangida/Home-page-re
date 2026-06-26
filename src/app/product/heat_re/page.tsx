import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "체감온도계 | K-WEATHER",
  description: "케이웨더 체감온도계 제품 소개.",
};

/* 상단 비주얼만 우선 구현 — 타이틀·서브카피·본문 확정 후 교체 예정 */
export default function HeatPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_heat_re.jpg"
          title="체감온도계"
          subtitle={"폭염 위험을 실시간으로 확인하고 대응하는\n근로자 안전관리 및 온열질환 예방 솔루션"}
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
