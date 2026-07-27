import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ReferenceNav from "@/components/sub/ReferenceNav";
import { WEATHER_NAV_CASES } from "@/components/sub/referenceCases";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "경기주택도시공사",
  description:
    "케이웨더가 경기주택도시공사에 구축한 미세먼지 저감 시스템·방재시스템 — 실시간 강수현황, 현장별 강우기록, 기상특보 등 통합 방재 관제 서비스.",
};

export default function ReferenceWeatherGHPage() {
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

        <article className="refd">
          {/* 타이틀바 */}
          <div className="refd-titlebar">
            <p className="refd-titlebar__cat">날씨경영 / 미세먼지 저감·방재시스템</p>
            <p className="refd-titlebar__name">경기주택도시공사</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 구축 화면 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">경기주택도시공사</h2>
            <p className="refd-lead wsi-desc wsi-desc--tight">미세먼지 저감 시스템, 방재시스템 제공</p>

            {/* 구축 화면 */}
            <img
              className="wsi-cal-img wsi-cal-img--90 wsi-cal-img--stack"
              src="/assets/sub/reference_wview03.png"
              alt="경기주택도시공사 미세먼지 저감·방재시스템 — 실시간 강수현황 및 현장별 강우기록 화면"
            />
          </div>

          {/* 주택도시공사 예시 */}
          <h3 className="wsi-section-title">[ 주택도시공사 예시 ]</h3>
          <div className="wsi-shotbox">
            <img
              className="wsi-cal-img"
              src="/assets/sub/reference_wview03_02.png"
              alt="경기주택도시공사 기상상황 — 전국현장실황 화면"
            />
          </div>

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/08" items={WEATHER_NAV_CASES} />
          <div className="refd-divider" aria-hidden="true" />
          <div className="refd-actions">
            <Link className="refd-btn-list" href="/reference/weather">
              목록
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
