import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ObservationData from "@/components/sub/ObservationData";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "관측 데이터",
  description: "케이웨더 기상 데이터 — 관측·예측 기반의 정밀 기상 데이터 서비스.",
};

export default function WeatherDataPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_weather.jpg"
          title="기상데이터"
          subtitle={"기상데이터를 기반으로 한 경영컨설팅과 일기예보,\n각종지수를 활용한 케이웨더의 다양한 기상 콘텐츠"}
        />

        {/* 사업 구조 도입부(.wd-intro)는 ObservationData 내부로 이동
            — 표 다음, 「특별한 이유」 밴드 앞에서 두 탭 공통으로 노출 */}
        <ObservationData />
      </main>
      <Footer />
    </>
  );
}
