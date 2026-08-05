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

        {/* 상단 도입 — Figma sub_기획_재작업 Frame 8 */}
        <section className="wd-intro">
          <p className="tab-lead">
            전국 4,000여 회원사에 날씨경영을 위한 맞춤 기상데이터 제공
          </p>
          <div className="biz-own__fig biz-own__fig--plain">
            <img
              src="/assets/sub/2data_01re.png?v=4"
              srcSet="/assets/sub/2data_01re.png?v=4 1x, /assets/sub/2data_01re@2x.png?v=4 2x"
              width={1100}
              height={840}
              alt="기상청 자료·해외 제휴사 수치모델자료·기상관측장비를 받아 케이웨더가 독자 수치모델·전문예보관·AI로 관측데이터·기상데이터·방송컨텐츠를 생산하고, 모바일·인터넷·ERP·수요예측 시스템을 통해 건설·에너지·유통·레저·방재·방송·온라인포털 회원사에 제공하는 기상데이터 사업 구조"
            />
          </div>
        </section>

        <ObservationData />
      </main>
      <Footer />
    </>
  );
}
