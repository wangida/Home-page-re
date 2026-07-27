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
  title: "네이버",
  description:
    "케이웨더가 네이버에 제공하는 날씨정보 — 국내외 지역별 현재·예보, 기후정보, 주간날씨 등 생활기상 서비스.",
};

export default function ReferenceWeatherNaverPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 날씨정보 제공</p>
            <p className="refd-titlebar__name">네이버</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 날씨정보 화면 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">네이버</h2>

            {/* 제공내역 */}
            <div className="wsi-provide wsi-provide--tight">
              <h3 className="wsi-provide__title">미세먼지 예보와 VOD, 세계 기후 정보 제공</h3>
              <div className="wsi-provide__list">
                <p>세계기후/패션_162지역 | 대기오염예보_17지역</p>
              </div>
            </div>

            <img
              className="wsi-web wsi-web--lg"
              src="/assets/sub/reference_wview05.png"
              alt="네이버 날씨 — 미국 워싱턴 D.C. 기후정보 및 주간날씨"
            />
          </div>

          {/* 네이버 예시 */}
          <h3 className="wsi-section-title">[ 네이버 예시 ]</h3>
          <div className="wsi-shotbox">
            <img
              className="wsi-web wsi-web--lg"
              src="/assets/sub/reference_wview05_02.png"
              alt="네이버 날씨 서비스 화면 (1)"
            />
          </div>
          <div className="wsi-shotbox">
            <img
              className="wsi-web wsi-web--lg"
              src="/assets/sub/reference_wview05_03.png"
              alt="네이버 날씨 서비스 화면 (2)"
            />
          </div>

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/10" items={WEATHER_NAV_CASES} />
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
