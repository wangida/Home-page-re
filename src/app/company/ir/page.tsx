import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "IR · 주식정보 | K-WEATHER",
  description:
    "케이웨더 IR · 주식정보 — 주주의 이익증대에 기여하는 기상 & 공기 빅데이터플랫폼 기업.",
};

export default function IrPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_ir.jpg"
          title="IR · 주식정보"
          subtitle={"케이웨더는 주주의 이익증대에\n기여하기 위해 노력합니다"}
        />

        {/* 본문 확정 전 임시 여백 — 피그마(3:341) 표기대로 안내 텍스트 노출 */}
        <div className="sub-blank">
          <p className="sub-blank__note">기존 내용 삽입</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
