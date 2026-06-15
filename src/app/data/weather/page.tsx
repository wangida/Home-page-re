import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "기상 데이터 | K-WEATHER",
  description: "케이웨더 기상 데이터 — 관측·예측 기반의 정밀 기상 데이터 서비스.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function WeatherDataPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_weather.jpg"
          title="기상 데이터"
          subtitle={"케이웨더는 기상데이터를 기반으로한 경영컨설팅과\n일기예보, 각종지수 등을 활용한 다양한 컨텐츠를 보유하고 있습니다."}
        />
        <div className="sub-blank" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}
