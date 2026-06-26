import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "Air I Zone 공기지능 인증 | K-WEATHER",
  description:
    "미세먼지부터 이산화탄소·VOCs까지 종합 관리하는 IoT·인공지능 기반 공기지능 관리 구역.",
};

/* 상단 비주얼만 우선 구현 — 본문 확정 후 교체 예정 */
export default function ReferenceAirIZonePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_reference02.jpg"
          title="Air I Zone 공기지능 인증"
          subtitle={
            "미세먼지부터 이산화탄소·VOCs까지 종합 관리하는\nIoT·인공지능 기반 공기지능 관리 구역"
          }
        />

        {/* 본문 준비 중 — 푸터와 붙지 않도록 하단 여백 */}
        <div aria-hidden="true" style={{ height: 1000 }} />
      </main>
      <Footer />
    </>
  );
}
