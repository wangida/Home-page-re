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
  title: "날씨판매지수",
  description:
    "날씨가 고객사 제품 판매에 미치는 영향을 분석해 제품 판매에 대한 날씨 리스크를 지수로 변환하여 고객사에 제공하는 케이웨더 날씨판매지수 서비스.",
};

export default function ReferenceWeatherSalesIndexPage() {
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
            <p className="refd-titlebar__cat">날씨경영 / 날씨판매지수</p>
            <p className="refd-titlebar__name">날씨판매지수</p>
            <p className="refd-titlebar__date">2025. 09. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 리드문구 + 상품상세 표 (라벤더 박스) */}
          <div className="refd-hero">
            <h2 className="refd-heading">날씨판매지수</h2>
            <p className="refd-lead wsi-desc">
              날씨가 고객사 제품 판매에 미치는 영향을 분석,
              <br />
              제품 판매에 대한 날씨 리스크를 지수로 변환하여 고객사에 제공하는 서비스
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
                    <td className="wsi-table__sub">기상개황</td>
                    <td>금일부터 향후 3일(D+0~D+3) 간의 날씨에 대한 정보를 제공함.</td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">날씨판매지수</td>
                    <td>
                      상기 기상 개황에 따른 금일부터 향후 3일(D+0~D+3) 간의 제품 별 날씨 판매지수를 표출.
                    </td>
                  </tr>
                  <tr>
                    <td className="wsi-table__sub">악기상 영향요약</td>
                    <td>
                      과거 악기상이 발생한 경우에 판매량 또는 방문객수의 변화 정도를 표출하여,
                      <br />
                      악기상으로 인한 매출 상의 영향에 대한 정보를 제공
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">개발기간</th>
                    <td colSpan={2}>평균 60 영업일 소요</td>
                  </tr>
                  <tr>
                    <th scope="row">주요대상업종</th>
                    <td colSpan={2}>의류, 유통, 레져, 외식업 등</td>
                  </tr>
                  <tr>
                    <th scope="row">개발인력</th>
                    <td colSpan={2}>프로젝트 당 3명 소요(총괄 1명, 보조 2명)</td>
                  </tr>
                  <tr>
                    <th scope="row">타겟기업</th>
                    <td colSpan={2}>유통, 제과/제빵업, 의류 등</td>
                  </tr>
                  <tr>
                    <th scope="row">제공형태</th>
                    <td colSpan={2}>
                      고객사 인트라넷 또는 POS 시스템에 S/W 또는 웹페이지 형태로 구축하여 제공
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 날씨 판매 지수 예시 */}
          <h3 className="wsi-section-title">[ 날씨 판매 지수 예시 ]</h3>
          <img
            className="wsi-cal-img"
            src="/assets/sub/reference_wview08.jpg"
            alt="날씨 판매 지수 예시 — 파리바게뜨 일별 날씨 판매지수 및 기상개황 화면"
          />

          {/* 하단 네비게이션 + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/05" items={WEATHER_NAV_CASES} />
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
