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
  title: "날씨영향분석",
  description:
    "날씨가 고객사의 핵심경영지표(매출액, 판매량 등)에 미치는 영향을 통계·과학적으로 분석해 표·그래프 형태로 고객사에 제공하는 케이웨더 날씨영향분석 서비스.",
};

export default function ReferenceWeatherImpactAnalysisPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 날씨영향분석</p>
            <p className="refd-titlebar__name">날씨영향분석</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 상품상세 표 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">날씨영향분석</h2>
            <p className="refd-lead wsi-desc">
              날씨가 고객사의 핵심경영지표(매출액, 판매량 등)에 미치는 영향을
              <br />
              통계, 과학적으로 분석하고 그 결과를 표 및 그래프 등의 형태로 고객사에 제공하는 서비스
            </p>

            {/* 상품상세 표 */}
            <h3 className="wsi-section-title">상품상세</h3>
            <div className="wsi-table-wrap">
              <table className="wsi-table">
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col" colSpan={2}>
                      주요내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" rowSpan={5}>
                      상품구성
                    </th>
                    <td className="wsi-table__sub">기온 영향분석</td>
                    <td>
                      핵심경영지표와 기온과의 상관관계에 대한 분석
                      <br />- 예: A 상품의 판매량은 10°C에서 급증하여 22.3°C에서 가장 잘 판매됨
                    </td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">악기상 영향분석</td>
                    <td>
                      핵심경영지표와 강수, 강설 등 악기상과의 상관관계에 대한 분석
                      <br />- 예: A 상품의 판매량은 강수 10mm 발생 시 매출이 40% 감소함)
                    </td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">날씨 상관분석</td>
                    <td>
                      상품들 중 날씨인자(기온, 강수량 등)에 대한 대체성, 보완성을 수치적으로 찾아내는 분석
                    </td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">기온 민감도 분석</td>
                    <td>각 상품이 시기별로 기온에 대해 받는 영향을 연도별로 비교하여 분석</td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">날씨 색상 분석</td>
                    <td>날씨에 따라 매출 가능성이 높은 색상을 찾아내고 색상간 상관관계 제시</td>
                  </tr>
                  <tr>
                    <th scope="row">개발기간</th>
                    <td colSpan={2}>
                      1회 차 보고서 작성 시에는 40 영업일 소요, 2회 차 부터 15 영업일 소요 (아이템 수에 무관)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">주요대상업종</th>
                    <td colSpan={2}>의류, 유통, 레져, 외식업 등</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 날씨영향 분석 보고서 예시 */}
          <h3 className="wsi-section-title">[ 날씨영향 분석 보고서 예시 ]</h3>
          <img
            className="wsi-cal-img wsi-cal-img--90"
            src="/assets/sub/reference_wview10.jpg"
            alt="날씨영향 분석 보고서 예시 — 과거 5년간 10월 긴팔 라운드셔츠 F/W 판매량 월별 판매경향 분석"
          />
          <img
            className="wsi-cal-img wsi-cal-img--90 wsi-cal-img--stack"
            src="/assets/sub/reference_wview10_02.jpg"
            alt="날씨영향 분석 보고서 예시 (2)"
          />

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/07" items={WEATHER_NAV_CASES} />
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
