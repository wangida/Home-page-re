import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "환기청정기",
  description: "케이웨더 환기청정기 제품 소개.",
};

/* 상단 비주얼만 우선 구현 — 타이틀·서브카피·본문 확정 후 교체 예정 */
export default function CirculationPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_circulation.jpg"
          title="환기청정기"
          subtitle={"공기청정을 넘어 환기까지 관리하는\n실 · 내외 공기질 개선 솔루션"}
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
