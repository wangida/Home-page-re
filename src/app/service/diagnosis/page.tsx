import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import DiagnosisTabs from "@/components/sub/DiagnosisTabs";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기질 측정·진단 | K-WEATHER",
  description: "실내외 공기질을 정밀하게 측정하고 오염 원인을 진단하는 케이웨더 공기질 측정·진단 서비스.",
};

/* 상단 비주얼만 우선 구현 — 본문 확정 후 교체 예정 */
export default function ServiceDiagnosisPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_service01.jpg?v=2"
          title="공기질 측정·진단"
          subtitle={"공정시험법에 의거, 반기별로 진행하는 ‘측정서비스’\n실시간 원격연속 측정을 통한 공기질 개선방안을 제공하는 ‘진단 서비스’"}
        />
        <DiagnosisTabs />
      </main>
      <Footer />
    </>
  );
}
