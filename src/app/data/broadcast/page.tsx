import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "방송 컨텐츠 | K-WEATHER",
  description: "케이웨더 방송 컨텐츠 — 방송·언론사에 제공하는 기상 콘텐츠.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function BroadcastPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_broad.jpg"
          title="방송 컨텐츠"
          subtitle={"전문 기상 분석을 바탕으로\n방송·언론에 최적화된 기상 콘텐츠 제공"}
        />
        <div className="sub-blank" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}
