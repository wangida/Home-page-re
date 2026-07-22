import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import KitchenTabs from "@/components/sub/KitchenTabs";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "조리실 자동제어",
  description:
    "케이웨더 조리실 자동제어 솔루션 — 조리흄 측정·중앙제어·자동제어와 급배기 시스템으로 조리실 공기를 관리합니다.",
};

/* 상단 히어로 이미지 확정 전 — 빈 배경으로 우선 구현 */
export default function KitchenSolutionPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <section className="sub-hero sub-hero--blank">
          <h1 className="sub-hero__title">조리실 자동제어</h1>
        </section>

        <KitchenTabs />

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
