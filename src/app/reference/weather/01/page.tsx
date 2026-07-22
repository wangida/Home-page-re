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
  title: "울산항 스마트 방재기상정보 서비스",
  description:
    "케이웨더는 울산항만공사와 협업해 IoT 기반 관측장비와 AI 해양예보를 통합한 울산항 스마트 방재기상정보 서비스를 운영합니다.",
};

/* Figma sub_레퍼런스 > reference_weather01 (80:513) — 울산항만공사 (날씨경영 사례 / 기상정보사업) */
export default function ReferenceWeatherUlsanPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 울산항 방재기상서비스</p>
            <p className="refd-titlebar__name">울산항만공사</p>
            <p className="refd-titlebar__date">2025. 06. 30</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 + 리드문구 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">울산항 스마트 방재기상정보 서비스</h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/02reference02_01.png"
              alt="울산항 스마트 방재기상정보 서비스 현장"
            />

            {/* 강조 단락(중앙) — 라벤더 박스 안 */}
            <p className="refd-lead">
              바다와 인접한 해양/항만시설은 해륙풍과 높은 습도 등으로
              <br />
              대기가 불안정해 <span className="em-orange">다양한 기상환경 리스크에 노출</span>되어 있습니다
            </p>
          </div>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            케이웨더의{" "}
            <strong className="em-blue">울산항 스마트 방재기상정보 서비스</strong>는 IoT 기반 관측장비와 AI 해양예보를 통합하여 입출항 선박의 안전 운항, 해양사고 예방, 시설물 보호를 지원합니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            또한{" "}
            <strong>구역별 미세먼지 및 선박 매연 농도, 파고, 시정 등 측정 및 예보</strong>를 통해 항만 지역의 전체적인 환경관리를 아우르며, 문제상황 발생 시{" "}
            <strong>웹, SMS, 카카오톡 등 다채널 알림 시스템</strong>으로 상황별 신속한 대응이 가능토록 합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ 케이웨더는 울산항만공사와 협업해{" "}
            <span className="em-orange">울산항 스마트 방재기상정보</span>
            <br />
            서비스를 성공적으로 운영하며 서비스 완성도를 점차 고도화시키고 있습니다. ]
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/02reference02_02.jpg"
            alt="울산항 방재기상정보 모니터링 화면"
          />

          {/* 이미지 3 */}
          <img
            className="refd-img refd-img--stack"
            src="/assets/sub/02reference02_03.jpg"
            alt="울산항 해양예보 통합 관제 화면"
          />

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/01" items={WEATHER_NAV_CASES} />
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
