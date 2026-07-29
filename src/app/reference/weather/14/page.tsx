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
  title: "BGF로지스",
  description:
    "케이웨더 폭염 관리 솔루션이 BGF로지스 전국 22개 물류센터에 설치됐습니다. IoT 체감온도계 140여 대로 근로자 체감온도를 실시간 모니터링합니다.",
};

export default function ReferenceWeatherBgfLogisPage() {
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
            <p className="refd-titlebar__name">BGF로지스</p>
            <p className="refd-titlebar__date">2026. 06. 11</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 + 리드문구 (라벤더 배경) */}
          <div className="refd-hero">
            <h2 className="refd-heading">BGF로지스 물류센터에 폭염 관리 솔루션 도입</h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference_wview13.png"
              alt="BGF로지스 물류센터 컨베이어 라인에 설치된 케이웨더 IoT 체감온도계"
            />

            {/* 강조 단락(중앙, 파랑) — 라벤더 박스 안 */}
            <p className="refd-lead">
              <span className="em-blue">BGF로지스의 전국 22개 물류센터</span>에{" "}
              <span className="em-blue">케이웨더의 폭염 관리 솔루션</span>이 설치됐습니다.
            </p>
          </div>

          {/* 강조 단락(중앙, 주황) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            작년부터{" "}
            <span className="em-orange">
              산업안전보건법 내 폭염 내용이 신설돼 관련 보건조치가 의무화
            </span>
            됨에 따라,
            <br />
            사업주는 작업장에 체감온도계를 배치하고 체감온도, 조치사항 등을 보관해야 하는데요.
          </p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            케이웨더 폭염 관리솔루션은 의무사항을 간단히 이행할 수 있을 뿐만 아니라 폭염 상황에 따라
            더욱 효율적으로 작업장을 운영하도록 돕습니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            BGF로지스는 <strong>총 140여대의 IoT 체감온도계들을 각 사업장에 배치</strong>함으로써
            근로자들의 체감온도를 실시간 모니터링하며 선제적 폭염관리에 나섰습니다.
          </p>

          {/* 본문 단락 3 */}
          <p className="refd-body refd-body--gap40">
            측정된 모든 현장 데이터는 빅데이터플랫폼을 통해 전용{" "}
            <strong className="em-blue">
              웹페이지와 앱을 통해 1분 단위로 기록 및 저장하는 등 통합적인 DB 관리가 가능
            </strong>
            하며, 체감온도가 기준치 이상 상승 시 경보 및 대응요령 푸시 알림도 제공합니다.
          </p>

          {/* 본문 단락 4 */}
          <p className="refd-body refd-body--gap40">
            또한 수집된 데이터 통계를 기반으로{" "}
            <strong className="em-blue">사용자의 목적별 분석보고서도 자동으로 생성</strong>해주는 등
            각종 편의기능도 지원합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ <span className="em-orange">케이웨더 폭염 관리 솔루션</span>으로
            <br />
            폭염 속 근로자 안전을 효과적으로 관리하세요. ]
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--1"
            src="/assets/sub/reference_wview13_02.jpg"
            alt="BGF로지스 물류센터 작업 현장과 기둥에 설치된 케이웨더 IoT 체감온도계"
          />

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/14" items={WEATHER_NAV_CASES} />
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
