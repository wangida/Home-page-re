import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "홍보센터 | K-WEATHER",
  description: "케이웨더 홍보센터 — 보도자료와 소식을 전합니다.",
};

export default function PrCenterPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_prcenter.jpg"
          title="홍보센터"
          subtitle={"언론보도부터 기업 소식까지\n케이웨더의 다양한 이야기를 전합니다"}
        />

        {/* 본문 확정 전 임시 여백 — IR과 동일하게 안내 텍스트 노출 */}
        <div className="sub-blank">
          <p className="sub-blank__note">기존 내용 삽입</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
