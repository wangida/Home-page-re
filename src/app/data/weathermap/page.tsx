import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import WeatherMap from "@/components/sub/WeatherMap";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "웨더 맵 | K-WEATHER",
  description: "케이웨더 웨더 맵 — 전세계 기상 정보를 한눈에 보는 글로벌 실시간 기상 시각화 플랫폼.",
};

/* 상단 비주얼 미확정 — 임시로 관측 데이터 히어로 이미지 사용 */
export default function WeatherMapPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_weather.jpg"
          title="웨더 맵"
          subtitle={"케이웨더 맵은 전세계 기상 정보를 한눈에 볼 수 있는\n글로벌 실시간 기상 시각화 플랫폼"}
        />

        <WeatherMap />
      </main>
      <Footer />
    </>
  );
}
