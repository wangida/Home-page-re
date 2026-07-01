import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기개선 서비스 | K-WEATHER",
  description: "측정·진단 결과를 바탕으로 최적의 개선안을 제시하는 케이웨더 공기개선 서비스.",
};

/* 상단 비주얼만 우선 구현 — 본문 확정 후 교체 예정 */
export default function ServiceImprovementPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_service02.jpg"
          title="공기개선 서비스"
          subtitle={"주거·업무 등 모든 생활 공간의 오염된 공기를\n체계적 공정으로 개선하는 케이웨더 공기개선 서비스"}
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
