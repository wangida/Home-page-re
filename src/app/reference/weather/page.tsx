import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import WeatherGallery from "@/components/sub/WeatherGallery";
import WeatherCaseGrid from "@/components/sub/WeatherCaseGrid";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "날씨경영 사례",
  description: "날씨 데이터로 리스크를 줄이고 새로운 기회를 만든 케이웨더 날씨경영 컨설팅 적용 사례.",
};

export default function ReferenceWeatherPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_reference03.jpg"
          title="날씨경영 사례"
          subtitle={"날씨 데이터로 리스크를 줄이고 새로운 기회를 만든\n케이웨더 날씨경영 컨설팅 적용 사례"}
        />

        <WeatherGallery />

        <WeatherCaseGrid />
      </main>
      <Footer />
    </>
  );
}
