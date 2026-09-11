import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import WellbianEconomy from "@/components/sub/WellbianEconomy";
import "@/components/sub/sub.css";
import "@/components/sub/wellbian.css";

export const metadata: Metadata = {
  title: "날씨데이터 토큰생성기",
  description:
    "케이웨더 날씨데이터 토큰생성기 — 내가 측정한 날씨·공기 데이터가 가치를 지닌 자산이 되는 웰비안 × XRP Ledger 서비스.",
};

/* 본문은 웰비안랩스 런처(/launch)의 「날씨데이터 경제란?」·「날씨데이터 토큰생성기™」 섹션을
   그대로 옮겨 온 것이다 — WellbianEconomy 컴포넌트 주석 참고.
   히어로 5번째 슬라이드(.hero--wellbian) 바로가기가 이 페이지로 들어온다. */
export default function WellbianPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_wellbian_bg.jpg"
          title="날씨데이터 토큰생성기"
          subtitle="날씨데이터가 자산이 됩니다"
          dim
        />

        <WellbianEconomy />
      </main>
      <Footer />
    </>
  );
}
