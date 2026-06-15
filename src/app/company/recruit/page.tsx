import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "인재채용 | K-WEATHER",
  description: "케이웨더 인재채용 — 케이웨더와 함께 성장할 인재를 기다립니다.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function RecruitPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_job.jpg"
          title="인재채용"
          subtitle={"도전과 성장의 기회가 있는 곳\n케이웨더에서 새로운 가능성을 펼쳐보세요"}
        />
        <div className="sub-blank" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}
