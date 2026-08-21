import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ConsultingCases from "@/components/sub/ConsultingCases";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "날씨경영 컨설팅",
  description: "날씨 데이터로 리스크를 줄이고 새로운 기회를 만드는 케이웨더 날씨경영 컨설팅.",
};

/* 상단 비주얼 + 기업 사례 슬라이더 — 나머지 본문은 확정 후 추가 예정 */
export default function ServiceConsultingPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_service04.jpg"
          title="날씨경영 컨설팅"
          subtitle={"날씨 영향력을 수치·통계적으로 분석하고,\n날씨 리스크를 효율적으로 관리하는 케이웨더 날씨경영 컨설팅"}
        />

        {/* 기업 사례 — 업종별 사례 4종 좌우 화살표 슬라이더 */}
        <ConsultingCases />
      </main>
      <Footer />
    </>
  );
}
