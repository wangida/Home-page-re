import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기 빅데이터 플랫폼 | K-WEATHER",
  description:
    "케이웨더 공기 빅데이터 플랫폼 — 실내외 공기질 데이터를 통합 수집·분석하는 Air365 플랫폼.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현(내용 추가 예정) */
export default function AirPlatformPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/product_air365.jpg"
          title="공기 빅데이터 플랫폼"
          subtitle={"보이지 않는 공기를 보이게 관리하는\n공기질 통합관리 소프트웨어"}
        />

        <section className="company-intro air365-intro">
          <h2 className="company-intro__title">
            국내 최초·최대 공기질 빅데이터 플랫폼
          </h2>
          <p className="company-intro__desc">
            공기데이터 수집·실시간 모니터링·공간별 진단보고서·가전 제어를 SaaS 형태로 제공하는 통합 공기질 관리 소프트웨어입니다.
            <br />
            국가관측 데이터와 전국 3만여 개 측정기의 대용량 데이터를 실시간으로 수집·분석해, 웹과 모바일에서 동시에 서비스됩니다.
          </p>
        </section>

        <section className="air365-feat">
          <div className="air365-feat__row">
            <div className="air365-feat__media">
              <img
                src="/assets/sub/air365_img02.png"
                width={559}
                height={308}
                alt="Air365 모니터링 화면 — 실내·실외 공기질 현황을 측정 항목별 게이지와 통합실내쾌적지수로 표시"
              />
            </div>
            <div className="air365-feat__text">
              <p className="air365-feat__label">모니터링</p>
              <h3 className="air365-feat__head">
                측정데이터를 한 눈에 모니터링 할 수 있도록 제공
              </h3>
              <p className="air365-feat__desc">
                설치된 공기측정기의 미세먼지, 초미세먼지, 이산화탄소,
                휘발성유기화합물, 온도, 습도의 측정데이터를 한 눈에 모니터링 할 수
                있도록 제공하며 당사가 개발한 통합실내쾌적지수(CICI) 정보를
                제공합니다. 다수의 측정기로부터 취합된 실시간 정보와 통계 데이터를
                다양한 사용자 환경으로 제공합니다.
              </p>
            </div>
          </div>

          <div className="air365-feat__row air365-feat__row--reverse">
            <div className="air365-feat__media">
              <img
                src="/assets/sub/air365_img03.png"
                width={559}
                height={308}
                alt="Air365 데이터 분석 화면 — 공기질 요소별 측정값을 시계열 그래프로 비교·분석"
              />
            </div>
            <div className="air365-feat__text">
              <p className="air365-feat__label">데이터 분석</p>
              <h3 className="air365-feat__head">
                공기질 상태를 실시간으로 비교·분석가능
              </h3>
              <p className="air365-feat__desc">
                다양한 공기질 요소를 선택해 공기질 상태를 실시간으로 비교·분석 할
                수 있게 해준다. 프리미엄 서비스를 이용하면 현재까지 축적된 과거의
                모든 데이터 조회와 분석이 가능하다.
              </p>
            </div>
          </div>

          <div className="air365-feat__row">
            <div className="air365-feat__media">
              <img
                src="/assets/sub/air365_img04.png"
                width={559}
                height={308}
                alt="Air365 월별 분석보고서 — 통합지수 분석 결과와 측정 기간별 공기질 등급을 정리한 실외 공기질 분석 보고서"
              />
            </div>
            <div className="air365-feat__text">
              <p className="air365-feat__label">월별 분석보고서</p>
              <h3 className="air365-feat__head">
                수집된 공기데이터를 분석하여 공기질 분석보고서를 제공
              </h3>
              <p className="air365-feat__desc">
                Air365는 공기빅데이터플랫폼에 수집된 일정기간 수집된 공기데이터를
                고객이 요구에 맞춰 통계별, 측정요소별, 기간별 등으로 분석하여
                공기질 분석보고서를 제공합니다.
              </p>
            </div>
          </div>

          <div className="air365-feat__row air365-feat__row--reverse">
            <div className="air365-feat__media">
              <img
                src="/assets/sub/air365_img05.png"
                width={559}
                height={308}
                alt="Air365 공기가전 제어 화면 — 실내·실외 측정값에 따라 환기청정기 운영모드와 가동 강도를 원격 제어"
              />
            </div>
            <div className="air365-feat__text">
              <p className="air365-feat__label">공기가전 제어</p>
              <h3 className="air365-feat__head">
                공기가전 제품을 측정기와 연동시켜 작동할 수
                <br />
                있도록 원격으로 제어
              </h3>
              <p className="air365-feat__desc">
                환기청정기를 포함한 다양한 공기가전 제품들을 공기질측정기와
                연동시켜 실내환경에서 적합하게 작동할 수 있도록 원격으로
                제어합니다. 실외·실내 공기데이터에 따라
                환기청정/공기청정/바이패스 운영모드와 환기청정기의 가동시기, 시간,
                강도를 조절하여 에너지를 효율적으로 관리하면서 공기를 청정하게
                관리해주는 기능입니다. 또한 설치 공간의 유형(사무실, 학교, 병원
                등)과 사용목적에 따라 맞춤형 환기청정기 운영 AI알고리즘을
                적용합니다.
              </p>
            </div>
          </div>

        </section>

        <section className="company-intro air365-intro">
          <h2 className="company-intro__title">GS 1등급 인증 · 공공기관 도입</h2>
          <p className="company-intro__desc">
            Air365 V2.0은 한국정보통신기술협회(TTA) 소프트웨어 품질 1등급(Good Software) 인증을 획득했습니다.
            <br />
            클린서초 · 서울시설관리공단 · 인천서구시설관리공단 · 성남도시개발공사 등 공공기관에서 운영 중이며, 도입 규모와 환경에 따라 맞춤 견적을 안내합니다.
          </p>
        </section>

        <section className="air365-cert">
          <div className="air365-cert__inner">
          <div className="air365-cert__media">
            <img
              src="/assets/sub/air365_img06.png"
              width={550}
              height={364}
              alt="Air365 V2.0 한국정보통신기술협회(TTA) 소프트웨어 품질 1등급(Good Software) 인증서 2종"
            />
          </div>
          <div className="air365-cert__text">
            <h3 className="air365-cert__title">
              <span className="air365-cert__brand">Air365</span> V2.0 굿소프트웨어
              1등급 인증
            </h3>
            <dl className="air365-cert__spec">
              <div className="air365-cert__item">
                <dt>인증기관</dt>
                <dd>한국정보통신기술협회(TTA)</dd>
              </div>
              <div className="air365-cert__item">
                <dt>시험범위</dt>
                <dd>Air365 웹서비스</dd>
              </div>
              <div className="air365-cert__item">
                <dt>기능 범위</dt>
                <dd>
                  모니터링 : 공기질현황조회/실외공기질현황조회
                  <br />
                  분석 : 실내/실외공기질비교, 수집데이터 조회, 통계 조회, 파일 다운로드
                  <br />
                  측정기 정보 조회
                  <br />
                  계정관리
                </dd>
              </div>
            </dl>
          </div>
          </div>
        </section>

        <section className="air365-price">
          <h2 className="air365-measure__title">프리미엄 서비스 및 가격</h2>
          <div className="air365-price__scroll">
            <table className="air365-price__table">
              <colgroup>
                <col style={{ width: "11%" }} />
                <col style={{ width: "13%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "43%" }} />
                <col style={{ width: "15%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th colSpan={2}>서비스명</th>
                  <th>메뉴</th>
                  <th>내용</th>
                  <th>과금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="c1" rowSpan={2}>기본<br />서비스</td>
                  <td className="c2" rowSpan={2}>모니터링<br />서비스</td>
                  <td className="c3">실내 실외 공기질 현황</td>
                  <td className="c4">전광판 모드 / 리스트 모드</td>
                  <td className="c5" rowSpan={2}>무료</td>
                </tr>
                <tr>
                  <td className="c3">데이터 조회</td>
                  <td className="c4">
                    그래프/표<br />
                    검색 최대 구간:1일<br />
                    데이터 유효 구간 : 직전 월 1일 ~ 당일
                  </td>
                </tr>
                <tr>
                  <td className="c1" rowSpan={6}>프리미엄<br />서비스</td>
                  <td className="c2" rowSpan={3}>분석<br />서비스</td>
                  <td className="c3">그래프 분석</td>
                  <td className="c4">
                    그래프 구간 조회, 그래프 다운로드<br />
                    검색 최대 구간 : 7일<br />
                    데이터 유효기간:결제된 년월
                  </td>
                  <td className="c5" rowSpan={3}>옵션 1<br />+10,000원</td>
                </tr>
                <tr>
                  <td className="c3">데이터 분석</td>
                  <td className="c4">
                    그래프 구간 조회, 그래프 다운로드<br />
                    검색 최대 구간 : 7일<br />
                    데이터 유효기간:결제된 년월
                  </td>
                </tr>
                <tr>
                  <td className="c3">통계 분석</td>
                  <td className="c4">
                    표 구간 조회, 그래프 다운로드<br />
                    검색 최대 구간 : 7일<br />
                    데이터 유효기간:결제된 년월
                  </td>
                </tr>
                <tr>
                  <td className="c2" rowSpan={2}>보고서 서비스</td>
                  <td className="c3">분석 보고서(기본)</td>
                  <td className="c4">
                    실내, 실외 분석보고서(간소화)<br />
                    데이터 유효구간: 결제된 년월
                  </td>
                  <td className="c5">옵션 2<br />+30,000원</td>
                </tr>
                <tr>
                  <td className="c3">분석 보고서(고급)</td>
                  <td className="c4">실내 · 실외 분석보고서(상세)</td>
                  <td className="c5">옵션 3<br />상담</td>
                </tr>
                <tr>
                  <td className="c2">공기가전 제어<br />서비스</td>
                  <td className="c3">환기청정기</td>
                  <td className="c4">
                    공기가전 작동<br />
                    원격제어 (전원,풍량)<br />
                    AI 자동모드 설정
                  </td>
                  <td className="c5">옵션 4<br />+10,000원<br />(최초 1년 무료)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
