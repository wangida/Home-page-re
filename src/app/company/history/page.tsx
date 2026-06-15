import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import HistoryTabs from "@/components/sub/HistoryTabs";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "연혁 | K-WEATHER",
  description:
    "케이웨더 연혁 — 민간 기상 예보 서비스에서 환경데이터 기반 친환경 서비스 기업으로.",
};

export default function HistoryPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_history.jpg"
          title="케이웨더 연혁"
          subtitle={"민간 기상 예보 서비스에서\n환경데이터 기반 친환경 서비스 기업으로"}
        />
        <HistoryTabs />
      </main>
      <Footer />
    </>
  );
}
