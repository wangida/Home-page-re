import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "기후위험 관리 — 폭염 관리 솔루션",
  description:
    "케이웨더 폭염 관리 솔루션 — 공기 빅데이터 플랫폼 기반 IoT 측정 데이터와 폭염 예보로 사업장 폭염을 통합 관리합니다.",
};

/* 기후위험 관리(CRMaaS) — 1차: 폭염. 건설·해양·ESG는 추후 확장 */
export default function ClimateRiskHeatPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_heat_re.jpg?v=1"
          title="기후위험 관리"
          subtitle={"산업 현장의 기후위험을\n데이터로 관리합니다"}
        />

        {/* 1. 인트로 — 솔루션 개요 + 대시보드 목업 */}
        <section className="crm-sec">
          <h2 className="crm-intro__title">CRMaaS 폭염(폭염 관리 솔루션)</h2>
          <p className="crm-intro__desc">
            산업재해인 폭염에 능동적으로 대응하기 위해 공기 빅데이터 플랫폼을 기반으로 IoT 측정기의 측정 데이터와
            <br />
            폭염 예보를 활용하여 사업장 폭염을 통합 관리하는 솔루션
          </p>
          <div className="crm-intro__fig">
            <img
              src="/assets/sub/crmaas_heat01.png?v=1"
              width={675}
              height={519}
              alt="폭염 관리 솔루션 화면 — PC 대시보드의 최고 체감온도·최고 온도·위험단계 노출시간과 모바일 앱의 일자별 데이터 분석 화면"
            />
            <span className="crm-intro__div" aria-hidden="true" />
            <img
              src="/assets/sub/crmaas_heat01_02.png?v=1"
              width={750}
              height={538}
              alt="폭염 관리 솔루션 화면 — 측정 데이터 분석 대시보드와 폭염 안전관리 일일 보고서 화면"
            />
          </div>
        </section>

        {/* 2. 필요성 — 산업안전보건법 개정 */}
        <section className="crm-sec crm-sec--need">
          <div className="crm-need">
            <div className="crm-need__img">
              <img
                src="/assets/sub/crmaas_heat02.png?v=1"
                width={468}
                height={468}
                alt="폭염 속 도심을 배경으로 높은 온도를 가리키는 온도계"
              />
            </div>

            <div className="crm-need__body">
              <p className="crm-label">폭염 관리 솔루션의 필요성</p>
              <h3 className="crm-need__title">산업안전보건법 개정안 2025년 6월 시행</h3>
              <p className="crm-need__desc">
                폭염이 새로운 산업재해로 지정됨에 따라 근로자 온열질환 예방조치가 의무화됐으며,{" "}
                <br />
                체감온도를 기준으로 폭염 관리가 진행됩니다.
              </p>

              <div className="crm-law">
                <strong className="crm-law__head">
                  산업안전보건기준에 대한 규칙 제562조 2항 :
                </strong>
                <p className="crm-law__txt">
                  사업주는 근로자 작업장소에 <b>체감온도 측정기기를 구비</b>하고,
                  <br />
                  체감온도와 관련 조치사항을 <b>당해연도 말일까지 기록 및 보관</b>해야 한다.
                </p>
                <p className="crm-law__note">※ 위반 시 5년 이하 징역 또는 5천만원 이하 벌금</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 특장점 */}
        <section className="crm-sec crm-sec--feat">
          <p className="crm-label">폭염 관리 솔루션의 특장점</p>

          <div className="crm-feat">
            <h3 className="crm-feat__title">전국 현장별 통합 모니터링</h3>
            <ul className="crm-feat__list">
              <li>
                전국 다수 현장의 체감온도 데이터를 실시간으로 수집하여 통합 모니터링을 지원, 측정 요소 및 현장별 대시보드, 지도, 표 등 다양한 형태로 제공
              </li>
            </ul>
            <div className="crm-feat__fig crm-feat__fig--gray">
              <img
                src="/assets/sub/crmaas_heat03.png?v=2"
                width={1280}
                height={774}
                alt="전국 사업장 실황 화면 — 위험단계별 사업장 수 요약, 지도 기반 현장 체감온도 표시, 지역별 측정기 체감온도와 기상청 체감온도 비교표"
              />
            </div>
          </div>

          <div className="crm-feat">
            <h3 className="crm-feat__title">폭염 위험 관리</h3>
            <ul className="crm-feat__list">
              <li>
                체감온도 단계별 위험 경보 및 행동 요령, 푸시 알림 제공, 폭염 단계별 발생 횟수와 지속 시간 등 현장별 위험 노출 수준 관리 지원
              </li>
            </ul>
            <div className="crm-feat__fig crm-feat__fig--sm">
              <img
                src="/assets/sub/crmaas_heat04.jpg?v=2"
                width={811}
                height={564}
                alt="경보 피드 화면과 모바일 푸시 알림 — 체감온도 경고 단계 도달 시 휴식 및 옥외 작업 중지 등 폭염 대응 요령 안내"
              />
            </div>
          </div>

          <div className="crm-feat">
            <h3 className="crm-feat__title">IoT 측정 데이터 수집·관리·저장</h3>
            <ul className="crm-feat__list">
              <li>
                안전조치 이행 여부 증빙을 위한 객관적 관리 근거 및 자료로 활용 가능, 사용자 설정(기간, 현장, 측정 요소 등)에 따라 데이터 저장·분석 및 통계 제공
                <br />
                측정기별 데이터 수집 이력 제공으로 장비 운영 상태 및 현장 환경 변화 분석 지원
              </li>
            </ul>
            <div className="crm-feat__fig crm-feat__fig--gray2">
              <img
                src="/assets/sub/crmaas_heat05.jpg?v=2"
                width={2900}
                height={976}
                alt="현장 상세 대시보드 — 일 최고 체감온도 요약, 작업·휴식 안전 권고, 최근 7일 체감온도 분석, 단계별 지속시간, 체감온도 추이 그래프와 데이터 테이블"
              />
            </div>
          </div>

          <div className="crm-feat">
            <h3 className="crm-feat__title">측정·AI 예보 데이터 통합 서비스</h3>
            <ul className="crm-feat__list">
              <li>위치별 IoT 측정 데이터와 AI 예보 데이터를 통합 제공하여 폭염 사전대응을 지원</li>
            </ul>
            <div className="crm-feat__fig crm-feat__fig--gray">
              <img
                src="/assets/sub/crmaas_heat06.jpg?v=2"
                width={2526}
                height={951}
                alt="측정기 실시간 체감온도·온도·습도 게이지와 최근 24시간 그래프, 기상청 폭염 예보 및 기기별 AI 체감온도 예보 비교표"
              />
            </div>
          </div>

          <div className="crm-feat">
            <h3 className="crm-feat__title">분석 보고서 제공</h3>
            <ul className="crm-feat__list">
              <li>
                IoT 측정기의 수집·저장된 데이터를 기반으로 사용자 목적별 분석보고서 제공, 현장별·기간별 폭염 현황과 추이를 분석한 보고서로 안전관리 지원
                <br />
                폭염 단계별 기준값 초과, 발생 시간 등 통계 및 분석 가능
              </li>
            </ul>
            <div className="crm-feat__fig">
              <img
                src="/assets/sub/crmaas_heat07.jpg?v=2"
                width={1578}
                height={709}
                alt="폭염 안전관리 일일 보고서 — 측정 결과 요약, 폭염 위험단계별 노출시간, 시간별 체감온도 변화 그래프와 쾌적도 달력·일별 온도 변화 분석"
              />
            </div>
          </div>

          <div className="crm-feat">
            <h3 className="crm-feat__title">맞춤형 플랫폼 서비스</h3>
            <p className="crm-feat__lead">
              클라우드(Cloud)와 온프레미스(On-Premise) 기반의 빅데이터 플랫폼 지원
            </p>
            <div className="crm-feat__fig crm-feat__fig--plans">
              <img
                src="/assets/sub/crmaas_heat09.jpg?v=1"
                width={1088}
                height={388}
                alt="Air365 플랫폼 서비스 화면 — Air365 플랫폼, Air365 클라우드 서비스, Air365 온 프레미스"
              />

              <ul className="crm-plans">
                <li className="crm-plan crm-plan--saas">
                  <span className="crm-plan__badge">SaaS 방식</span>
                  <strong className="crm-plan__name">임대형</strong>
                  <p className="crm-plan__desc">사용자 계정 당 월정액 환산</p>
                </li>
                <li className="crm-plan crm-plan--paas">
                  <span className="crm-plan__badge">PaaS 방식</span>
                  <strong className="crm-plan__name">설치형</strong>
                  <p className="crm-plan__desc">
                    맞춤형 커스터마이징 / 운영 케이웨더
                    <br />
                    커스텀 및 운영비(월정액) : 별도 산정
                  </p>
                </li>
                <li className="crm-plan crm-plan--onprem">
                  <span className="crm-plan__badge">On-premise 방식</span>
                  <strong className="crm-plan__name">구축형</strong>
                  <p className="crm-plan__desc">
                    고객사 내부에 서버 및 서비스
                    <br />
                    개발구축 및 운영비(월정액) : 별도산정
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
