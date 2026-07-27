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
  title: "SK커뮤니케이션즈 - 네이트",
  description:
    "케이웨더가 SK커뮤니케이션즈 네이트 포털에 제공하는 날씨정보 — 통합대기·미세먼지·자외선·황사·오존 등 전국 대기정보 서비스.",
};

export default function ReferenceWeatherNatePage() {
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
            <p className="refd-titlebar__name">SK커뮤니케이션즈 - 네이트</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 날씨정보 화면 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">SK커뮤니케이션즈 - 네이트</h2>
            <p className="refd-lead wsi-desc wsi-desc--tight">네이트 포털 날씨정보 제공</p>

            <img
              className="wsi-web wsi-web--lg"
              src="/assets/sub/reference_wview06.png?v=2"
              alt="네이트 날씨 — 전국 대기정보(미세먼지) 및 구로구 실황"
            />

            {/* 제공내역 */}
            <div className="wsi-provide">
              <h3 className="wsi-provide__title">포털 고객을 위한 날씨데이터 제공</h3>
              <div className="wsi-provide__list">
                <p>
                  <strong>육상현재날씨_시단위</strong> | 육상단기예보_군단위 | 육상주간예보_군단위,{" "}
                  <strong>해상단기예보_40지역</strong> | 해상주간예보_40지역 | 동네예보_동단위
                </p>
                <p>
                  <strong>기상청 월간예보</strong> | 세계 현재날씨_5400지역 | 세계 단기예보_5400지역,{" "}
                  <strong>세계 주간예보_5400지역</strong> | 세계 기후정보_5400지역 | 기상특보_코드화
                </p>
                <p>
                  <strong>태풍정보</strong> | 레저날씨 | 케이웨더 생활지수_군단위 | 기상청 위성이미지,{" "}
                  <strong>기상청 레이더이미지</strong> | 대기오염 관측정보_318지역 | 대기오염예보_17지역
                </p>
              </div>
            </div>
          </div>

          {/* 네이트 예시 */}
          <h3 className="wsi-section-title">[ 네이트 예시 ]</h3>
          <div className="wsi-shotbox">
            <img
              className="wsi-web wsi-web--lg"
              src="/assets/sub/reference_wview06_02.png?v=3"
              alt="네이트 날씨 서비스 화면 (1)"
            />
          </div>
          <div className="wsi-shotbox">
            <img
              className="wsi-web wsi-web--lg"
              src="/assets/sub/reference_wview06_03.png"
              alt="네이트 날씨 서비스 화면 (2)"
            />
          </div>

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/11" items={WEATHER_NAV_CASES} />
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
