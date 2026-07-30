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
  title: "하이트진로",
  description:
    "케이웨더 폭염 관리 솔루션이 하이트진로 이천 공장과 물류센터에서 가동됩니다. IoT 체감온도계 28대로 작업장별 근로자 체감온도를 관리합니다.",
};

export default function ReferenceWeatherHiteJinroPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 폭염관리 솔루션</p>
            <p className="refd-titlebar__name">하이트진로</p>
            <p className="refd-titlebar__date">2026. 06. 22</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 + 리드문구 (라벤더 배경) */}
          <div className="refd-hero">
            <h2 className="refd-heading">
              하이트진로 공장과 물류센터에 폭염 관리 솔루션 가동
            </h2>

            {/* 이미지 1 */}
            <div className="refd-img-wrap">
              <img
                className="refd-img refd-img--1"
                src="/assets/sub/reference_wview11.png"
                alt="하이트진로 공장 생산라인에 설치된 케이웨더 IoT 체감온도계"
              />
              <span className="refd-img-badge">AI 생성이미지</span>
            </div>

            {/* 강조 단락(중앙, 파랑) — 라벤더 박스 안 */}
            <p className="refd-lead">
              <span className="em-blue">하이트진로의 공장과 물류센터</span>에서도{" "}
              <span className="em-blue">케이웨더의 폭염 관리 솔루션</span>이 가동됩니다.
            </p>
          </div>

          {/* 강조 단락(중앙, 주황) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            케이웨더의 폭염 관리 솔루션은 지난해부터 의무화된 산업안전보건법 내
            <br />
            <span className="em-orange">
              폭염 관련 보건조치를 간단히 이행하고 작업장 운영을 더욱 효율적으로 지원
            </span>
            합니다.
          </p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            하이트진로는 이천 공장과 자사 물류센터에{" "}
            <strong>총 28대의 IoT 체감온도계들을 배치</strong>해 작업장별 근로자들의 체감온도를 꼼꼼히
            관리하고 있습니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            폭염 관리솔루션은 관리자가{" "}
            <strong>
              전국 다수 사업장의 실황을 한눈에 모니터링할 수 있도록 IoT 기반의 빅데이터 플랫폼
            </strong>
            으로 구축되어 효율적인 관리를 지원합니다.
          </p>

          {/* 본문 단락 3 */}
          <p className="refd-body refd-body--gap40">
            <strong className="em-blue">
              웹·모바일을 통해 각 시설의 통합적인 기록 및 분석보고서 작성
            </strong>
            이 가능하며, 근로자 체감온도가 기준치 이상으로 올라가는 경우{" "}
            <strong className="em-blue">푸쉬 알람도 제공</strong>하는 등 근로자 안전 모니터링 및 작업
            가능여부 판단을 통해 높은 온열질환 예방효과를 입증하고 있습니다.
          </p>

          {/* 이미지 2 */}
          <div className="refd-img-wrap">
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference_wview11_02.jpg"
              alt="하이트진로 물류센터 병입 라인에 설치된 케이웨더 IoT 체감온도계"
            />
            <span className="refd-img-badge">AI 생성이미지</span>
          </div>

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/12" items={WEATHER_NAV_CASES} />
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
