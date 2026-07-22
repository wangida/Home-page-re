import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ReferenceAirCases from "@/components/sub/ReferenceAirCases";
import { REFERENCE_CASES } from "@/components/sub/referenceCases";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "공기지능 사례",
  description: "현장에서 증명한 공기 관리 — 케이웨더 공기지능 컨설팅 적용 사례.",
};

export default function ReferenceAirPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_reference01.jpg"
          title="공기지능 사례"
          subtitle={"현장에서 증명한 공기 관리\n케이웨더 공기지능 컨설팅 적용 사례"}
        />

        <ReferenceAirCases cases={REFERENCE_CASES} />
      </main>
      <Footer />
    </>
  );
}
