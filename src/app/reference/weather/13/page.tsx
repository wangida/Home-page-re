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
  title: "삼성물산",
  description:
    "케이웨더가 삼성물산 판교·성수·안산 등 건설현장에 도입한 실내외 폭염 관리 솔루션 — IoT 체감온도계와 실외 온열지수측정기로 체감온도·온열지수를 실시간 관리합니다.",
};

export default function ReferenceWeatherSamsungCTPage() {
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
            <p className="refd-titlebar__name">삼성물산</p>
            <p className="refd-titlebar__date">2026. 06. 12</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 + 리드문구 (라벤더 배경) */}
          <div className="refd-hero">
            <h2 className="refd-heading">
              삼성물산 건설현장에 설치된 실내외 폭염 관리 솔루션
            </h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference_wview12.png"
              alt="삼성물산 건설현장에 설치된 케이웨더 실외 온열지수측정기와 IoT 체감온도계"
            />

            {/* 강조 단락(중앙, 파랑) — 라벤더 박스 안 */}
            <p className="refd-lead">
              케이웨더가{" "}
              <span className="em-blue">삼성물산이 건설 중인 판교, 성수 안산 등 현장</span>에
              <br />
              <span className="em-blue">실내외 폭염 관리 솔루션</span>을 도입했습니다.
            </p>
          </div>

          {/* 강조 단락(중앙, 주황) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            건설현장과 같은 실외 작업장의 경우 태양 복사열이 근로자의 체온을 급격히 상승시킬 수 있기
            때문에,
            <br />
            IoT 체감온도계와 함께{" "}
            <span className="em-orange">
              실외 온열지수측정기를 설치해 체감온도와 온열지수를 실시간으로 관리
            </span>
            해야 합니다.
          </p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            동일한 건설현장이라도 타워크레인, 콘크리트 타설, 지하 등{" "}
            <strong>작업환경에 따라 체감온도와 온열지수가 큰 차이</strong>를 보이는 만큼, 삼성물산은{" "}
            <strong>폭염 관리 솔루션 도입을 통해 온열질환에 대한 능동적인 대응</strong>을 이어가고
            있습니다.
          </p>

          {/* 온열지수 각주 */}
          <p className="refd-note" style={{ marginTop: 20 }}>
            *온열지수(WBGT, Wet Bulb Globe Temperature) : 국제표준화기구(ISO)가 채택한 열 스트레스
            지표. 태양복사열까지 종합적으로 계산해 인체에 닿는 햇볕과 주변 환경의 열기를 종합적으로
            고려함으로써 실외 폭염정도 측정에 뛰어나다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            또한 작업장마다 설치된 IoT 체감온도계를 통해{" "}
            <strong className="em-blue">
              측정된 모든 현장 데이터는 빅데이터 플랫폼과 연동돼 통합적인 관리가 가능
            </strong>
            하며, 체감온도가 기준치 이상 상승 시{" "}
            <strong className="em-blue">경보 및 대응요령 푸시 알림</strong>을 통해 즉각적으로 현장
            대응에 나설 수도 있습니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ 데이터 통계를 기반으로 목적별 분석보고서도 자동으로 생성해주는 등
            <br />
            실무자들로부터 긍정적인 평가를 받는{" "}
            <span className="em-orange">케이웨더의 폭염 관리 솔루션</span>, 지금 문의하세요. ]
          </p>

          {/* 이미지 2 · 3 — 세로로 각각 */}
          <img
            className="refd-img refd-img--1"
            src="/assets/sub/reference_wview12_02.jpg"
            alt="삼성물산 건설현장 온습도 게시판 — 온·습도계와 체감온도 계산기, 폭염·한파 특보 기준 안내"
          />
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference_wview12_03.jpg"
            alt="폭염 관리 솔루션 웹 화면 — 현장별 체감온도·온열지수 실시간 추이 그래프"
          />

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/13" items={WEATHER_NAV_CASES} />
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
