import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "유지관리 서비스 | K-WEATHER",
  description: "쾌적한 실내 공기질을 지속적으로 관리하는 케이웨더 유지관리 서비스.",
};

/* 상단 비주얼만 우선 구현 — 본문 확정 후 교체 예정 */
export default function ServiceMaintenancePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_service03.jpg"
          title="유지관리 서비스"
          subtitle={"전문 공기지능 컨설턴트가 환기장치의 성능을\n점검하고 지속적으로 관리하는 케이웨더 유지관리 서비스"}
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
