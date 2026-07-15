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

        <section className="air365-bd">
          <div className="air365-bd__box">
            <img
              className="air365-bd__img"
              src="/assets/sub/bigdata_img.jpg"
              width={1088}
              height={459}
              alt="케이웨더 공기빅데이터플랫폼 — Air365 플랫폼·클라우드 서비스·온 프레미스 제공 화면"
            />
            <ul className="air365-bd__cards">
              <li className="air365-bd__card air365-bd__card--saas">
                <span className="air365-bd__badge">SaaS 방식</span>
                <strong className="air365-bd__type">임대형</strong>
                <p className="air365-bd__desc">
                  사용자 계정 당 월정액 환산
                  <br />
                  계정당 월정액(MRR) : 50,000원
                </p>
              </li>
              <li className="air365-bd__card air365-bd__card--paas">
                <span className="air365-bd__badge">PaaS 방식</span>
                <strong className="air365-bd__type">설치형</strong>
                <p className="air365-bd__desc">
                  맞춤형 커스터마이징 / 운영 케이웨더
                  <br />
                  커스텀 및 운영비(월정액) : 별도 산정
                </p>
              </li>
              <li className="air365-bd__card air365-bd__card--onp">
                <span className="air365-bd__badge">On-premise 방식</span>
                <strong className="air365-bd__type">구축형</strong>
                <p className="air365-bd__desc">
                  고객사 내부에 서버 및 서비스
                  <br />
                  개발구축 및 운영비(월정액) : 별도산정
                </p>
              </li>
            </ul>
          </div>

          <table className="air365-bd__table">
            <tbody>
              <tr>
                <th>
                  Cloud Service
                  <br />
                  (클라우드서비스)
                </th>
                <td>
                  이용자의 모든 정보를 인터넷상의 서버에 저장하고, 이 정보를 각종 IT
                  기기를 통해 언제 어디서든 이용할 수 있는 기술
                </td>
              </tr>
              <tr>
                <th>
                  SaaS
                  <br />
                  (Software as a Service)
                </th>
                <td>개발이 완료된 소프트웨어를 서비스로 제공하는 서비스</td>
              </tr>
              <tr>
                <th>
                  PaaS
                  <br />
                  (Platform as a Service)
                </th>
                <td>
                  서비스를 개발할 수 있는 플랫폼과 그 플랫폼을 이용하는 응용
                  프로그램을 개발 할 수 있는 API까지 제공하는 형태
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
