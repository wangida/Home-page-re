import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ForecastTabs from "@/components/sub/ForecastTabs";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "기상예보",
  description:
    "케이웨더 기상예보 — 국내 최초 민간예보센터의 민간 기상예보와 딥러닝 기반 AI 기상예보.",
};

export default function ForecastPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_AI03.jpg"
          title="기상예보"
          subtitle={"케이웨더는 기상데이터를 기반으로 한 경영컨설팅과 일기예보,\n각종지수 등을 활용한 다양한 컨텐츠를 보유하고 있습니다."}
        />

        <ForecastTabs />

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 100 }} />
      </main>
      <Footer />
    </>
  );
}
