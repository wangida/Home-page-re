import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "전국 현대자동차 주요시설에 ‘폭염 관리솔루션’ 구축 | K-WEATHER",
  description:
    "케이웨더가 현대자동차의 하이테크센터, 연구소 등 전국 38개 주요 시설에 폭염 관리솔루션을 구축했습니다.",
};

/* Figma sub_레퍼런스 > reference_weather01 (80:492) — 현대자동차 (CRMaaS) 폭염 관리솔루션 (날씨경영 사례 / 기상정보사업) */
export default function ReferenceWeatherHyundaiPage() {
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
            <p className="refd-titlebar__name">현대자동차 (CRMaaS)</p>
            <p className="refd-titlebar__date">2025. 08. 12</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 본문 제목 */}
          <h2 className="refd-heading">
            전국 현대자동차 주요시설에 ‘폭염 관리솔루션’ 구축
          </h2>

          {/* 이미지 1 */}
          <img
            className="refd-img refd-img--1"
            src="/assets/sub/02reference01_01.jpg"
            alt="현대자동차 주요시설 폭염 관리솔루션 구축 현장"
          />

          {/* 강조 단락 1(중앙, 파랑) */}
          <p className="refd-lead">
            케이웨더가{" "}
            <strong className="em-blue">현대자동차의 하이테크센터, 연구소 등 전국 38개 주요 시설</strong>에
            <br />
            폭염 관리솔루션을 구축했습니다.
          </p>

          {/* 강조 단락 2(중앙, 주황) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            지난해{" "}
            <span className="em-orange">고용노동부가 산업안전보건법 내 폭염관리 조치를 의무화</span>함에 따라,
            <br />
            사업주들은 근로자의 체감온도 확인을 위한 기기를 상시 갖추고 관련사항을 기록해야 합니다.
          </p>

          {/* 본문 단락 1 */}
          <div className="refd-body">
            <p>케이웨더의 폭염 관리솔루션은 태양 복사열 등 기상측정 데이터와 AI 알고리즘 분석을 통해 체감온도 실황을 신속하게</p>
            <p>알려주며, 근로자들의 체감온도가 기준치 이상으로 올라가는 경우 푸쉬 알람도 제공합니다.</p>
          </div>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            특히 전용 웹및 앱 플랫폼을 통해 모든 시설의 실황을 한눈에 모니터링할 수 있는 클라우드 기반의 기상 빅데이터 플랫폼으로 구축되어 운영 측면에서 높은 효율성을 자랑합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            심각한 기상 재난이 된 폭염,
            <br />
            케이웨더의 폭염 관리솔루션으로 근로자들의 건강을 지키세요!
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/02reference01_02.jpg"
            alt="현대자동차 폭염 관리솔루션 측정 장비"
          />

          {/* 이미지 3 */}
          <img
            className="refd-img refd-img--stack"
            src="/assets/sub/02reference01_03.jpg"
            alt="현대자동차 폭염 관리솔루션 모니터링 플랫폼"
          />

          {/* 구분선 + 목록 버튼 */}
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
