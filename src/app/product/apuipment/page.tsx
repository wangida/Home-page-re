import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "기상장비 | K-WEATHER",
  description: "케이웨더 기상장비 제품 소개.",
};

/* 상단 비주얼만 우선 구현 — 타이틀·서브카피·본문 확정 후 교체 예정 */
export default function EquipmentPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_aquipment.jpg"
          title="기상장비"
          subtitle={"국내 최대 기상서비스 기업의 기술력으로\n제공하는 고품질 기상관측 장비"}
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
