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
  title: "날씨수요예측",
  description:
    "향후 3~12개월의 날씨가 고객사의 핵심경영지표(매출액, 판매량 등)에 미치는 영향력을 통계·과학적으로 예측해 표·그래프 형태의 보고서로 제공하는 케이웨더 날씨수요예측 서비스.",
};

export default function ReferenceWeatherDemandForecastPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 날씨수요예측</p>
            <p className="refd-titlebar__name">날씨수요예측</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 상품상세 표 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">날씨수요예측</h2>
            <p className="refd-lead wsi-desc">
              향후 3~12개월의 날씨가 고객사의 핵심경영지표(매출액, 판매량 등)에 미치는 영향력을
              <br />
              통계, 과학적으로 예측하고 그 결과를 표 및 그래프 등의 형태로 고객사에 1회 보고서로 제공하는 서비스
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
                    <th scope="row" rowSpan={4}>
                      상품구성
                    </th>
                    <td className="wsi-table__sub">날씨영향분석</td>
                    <td>
                      날씨가 고객사의 핵심경영지표(매출액, 판매량 등)에 미치는 영향력을 통계, 과학적으로 분석
                    </td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">월별/순별 기상 전망</td>
                    <td>
                      향후 3~12개월의 각 기상인자(기온, 강수량 등)의 기상전망을 월별 또는 순별로 제공
                    </td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">악기상 발생전망</td>
                    <td>향후 3~12개월의 악기상 요소(폭우, 폭염, 황사 등) 전망을 월별로 제공</td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">월별/순별 수요예측</td>
                    <td>
                      상기 기상 전망을 토대로 향후 제품, 서비스에 대한 수요예측을 월별/순별로 제공
                    </td>
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

          {/* 날씨 수요 예측 보고서 예시 */}
          <h3 className="wsi-section-title">[ 날씨 수요 예측 보고서 예시 ]</h3>
          <img
            className="wsi-cal-img"
            src="/assets/sub/reference_wview09.jpg"
            alt="날씨 수요 예측 보고서 예시 — 2013년 F/W 품목 수요예측분석 그래프 및 결과분석"
          />

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/06" items={WEATHER_NAV_CASES} />
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
