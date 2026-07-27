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
  title: "날씨 달력",
  description:
    "날씨가 판매 상품에 미치는 영향과 장기 전망을 고려해 아이템별 적정 판매·이벤트 시점을 달력 형태의 보고서로 주기적으로 제공하는 케이웨더 날씨 달력 서비스.",
};

export default function ReferenceWeatherCalendarPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 날씨 달력</p>
            <p className="refd-titlebar__name">날씨 달력</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 상품상세 표 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">날씨 달력</h2>
            <p className="refd-lead wsi-desc">
              날씨가 판매 상품에 미치는 영향과 장기 전망을 고려하여
              <br />
              아이템별 적정판매 개시 또는 종료 시점, 적정 이벤트 진행 시점 등을
              <br />
              달력 형태의 보고서로 작성하여 주기적으로 제공하는 서비스
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
                    <th scope="row" rowSpan={3}>
                      상품구성
                    </th>
                    <td className="wsi-table__sub">중/장기 기상 전망 요약</td>
                    <td>향후 6개월 간의 중/장기 기상전망 요약</td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">날씨 달력</td>
                    <td>상품 판매의 개시/종료 시점, 마케팅 시점제공</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>필요한 경우, 달력 내에 판매 지수 또는 분석 내용 제공</td>
                  </tr>
                  <tr>
                    <th scope="row" rowSpan={2}>
                      개발기간
                    </th>
                    <td colSpan={2}>1회차 보고서 작성을 위하여 평균 60 영업일 소요</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>2회차 부터 7 영업일에 작성</td>
                  </tr>
                  <tr>
                    <th scope="row">주요대상업종</th>
                    <td colSpan={2}>유통, 홈쇼핑, 쇼핑몰 등</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 날씨 달력 예시 */}
          <h3 className="wsi-section-title">[ 날씨 달력 예시 ]</h3>
          <div className="wsi-cal-pill">2013년 10월 October</div>

          <img
            className="wsi-cal-img"
            src="/assets/sub/reference_wview07.jpg"
            alt="날씨 달력 예시 — 2013년 10월 방한용품 판매지수 달력"
          />

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/04" items={WEATHER_NAV_CASES} />
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
