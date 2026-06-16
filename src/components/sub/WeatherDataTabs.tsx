"use client";

import { useState } from "react";

/* 연혁(HistoryTabs)과 동일한 .sub-tabs UI — 클릭 시 같은 페이지에서 콘텐츠 전환.
   각 탭 본문은 추후 구현 예정. */
const TABS = ["기상데이터", "민간 예보 서비스", "케이웨더 맵"];

/* 케이웨더 정보 — 자체 예보 3종 */
const KW_CARDS = [
  {
    img: "wd_sec1_img01.jpg",
    title: "단기 및 장기예보",
    desc: "날씨변동의 경향을 파악하여 기후를 예측하고 여러 산업군에 접목시켜 수요 예측이 가능한 예보",
  },
  {
    img: "wd_sec1_img02.jpg",
    title: "세계날씨",
    desc: "5,400여개의 전세계 관측 데이터, 주간 예보 제공",
  },
  {
    img: "wd_sec1_img03.jpg",
    title: "응용정보",
    desc: "생활 지수, 스포츠/레저, 교통 날씨 등 다양한 환경에서 활용가능한 기상 컨텐츠",
  },
];

/* 기상청 정보 — 수집 데이터 3종 */
const KMA_CARDS = [
  {
    img: "wd_sec1_img04.jpg",
    title: "관측 정보",
    desc: "기상청에서 운영 중인 자동기상관측장비에서 생산되는 기상관측 자료",
  },
  {
    img: "wd_sec1_img05.jpg",
    title: "영상 이미지",
    desc: "천리안2A호, 기상레이더 등에서 관측, 분석한 영상 및 이미지 자료",
  },
  {
    img: "wd_sec1_img06.jpg",
    title: "예보",
    desc: "기온, 강수, 적설, 하늘상태, 습도, 바람 등의 정보를 시, 공간적으로 세분화하여 발표하는 예보",
  },
];

/* 케이웨더 데이터가 특별한 이유 — 케이웨더/기상청 정보 패널 공통 마감 밴드 */
function WhySection() {
  return (
    <section className="wd-why">
      <div className="wd-why__inner">
        <h3 className="wd-why__title">
          케이웨더의 기상데이터가
          <br />
          <b>특별한 이유</b>
        </h3>
        <div className="wd-why__body">
          <p>
            케이웨더는 국내 최초의 민간 예보 센터이자,
            <br />
            기상의 모든 분야를 서비스 하는 국내 최대 민간 기상 사업자 입니다.
          </p>
          <p>
            오랜 노하우와 전문가들을 보유한 케이웨더는
            <br />
            기상청 관측, 예보, 생활지수, 영상과 독자적인 예보, 지수 데이터를 활용
            <br />
            가능한 다양한 형태로 제공하는 기상데이터 전문 기업입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

/* 케이웨더 데이터 에코시스템 — 케이웨더/기상청 정보 패널 공통 */
function EcoSection() {
  return (
    <section className="wd-eco">
      <h3 className="wd-eco__lead">
        케이웨더는 다양한 분야의{" "}
        <b>
          약 4천여 회원사에 특화된
          <br />
          맞춤 기상데이터를 제공
        </b>
        합니다.
      </h3>
      <img
        className="wd-eco__img"
        src="/assets/sub/wd_sec3_img01.jpg"
        alt="기상청 자료·해외 제휴사 수치모델자료·기상관측장비를 받아 케이웨더가 관측데이터·기상예보·방송컨텐츠를 모바일·인터넷·ERP·수요예측 시스템으로 제공하고, 건설·에너지·유통·레저·방재·방송·온라인 포털 등 다양한 산업 회원사가 활용하는 데이터 에코시스템"
      />
    </section>
  );
}

/* 활용 기업 로고 — 케이웨더/기상청 정보 패널 공통 */
function ClientsSection() {
  return (
    <section className="wd-clients">
      <h3 className="wd-clients__lead">
        케이웨더 기상데이터를 활용하는 기업들입니다.
      </h3>
      <img
        className="wd-clients__img"
        src="/assets/sub/wd_sec3_img02.jpg"
        alt="롯데멤버스·네이버·현대엠엔소프트·카카오M·삼성물산·CJ·현대·LG·SK·대우건설·롯데건설·GS건설·현대중공업·스타벅스·CU·미니스톱·에버랜드·JTBC·MBC·연합뉴스·한화생명·한국수력원자력·한국가스공사·올리브영 등 케이웨더 기상데이터를 활용하는 주요 기업 로고"
      />
    </section>
  );
}

/* 배포 게이트 — true면 '민간 예보 서비스' 탭만 빈 화면으로 노출(작업 중).
   배포 커밋엔 true, 로컬 작업 시 false로 두면 전체 내용 노출. */
const HIDE_BIZ_TAB = true;

export default function WeatherDataTabs() {
  const [active, setActive] = useState(0);
  const [info, setInfo] = useState(0); // 0: 케이웨더 정보, 1: 기상청 정보

  return (
    <>
      <div className="sub-tabs" role="tablist" aria-label="기상 데이터 카테고리">
        {TABS.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`sub-tabs__btn ${i === active ? "is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 탭별 본문 */}
      {active === 0 ? (
        <section className="company-intro" key="weather">
          <h2 className="company-intro__title">기상 데이터</h2>
          <p className="company-intro__desc">
            케이웨더는 케이웨더 예보, 기상청 예보, 각종지수 등을 활용한 다양한
            기상데이터를 제공하고 있습니다.
          </p>

          {/* 케이웨더 정보 / 기상청 정보 토글 */}
          <div className="wd-toggle" role="tablist" aria-label="정보 출처 선택">
            <button
              type="button"
              role="tab"
              aria-selected={info === 0}
              className={info === 0 ? "is-on" : ""}
              onClick={() => setInfo(0)}
            >
              케이웨더 정보
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={info === 1}
              className={info === 1 ? "is-on" : ""}
              onClick={() => setInfo(1)}
            >
              기상청 정보
            </button>
          </div>

          {info === 0 ? (
            <div className="wd-panel" key="kw">
              <h3 className="wd-panel__lead">
                국내 최초 민간 예보센터의 자체 수치예보모델을 통해 생성되는 예보
              </h3>
              <div className="wd-cards">
                {KW_CARDS.map((c) => (
                  <article key={c.title} className="wd-card">
                    <div className="wd-card__thumb">
                      <img src={`/assets/sub/${c.img}`} alt={`${c.title} 화면 예시`} />
                    </div>
                    <h4 className="wd-card__title">{c.title}</h4>
                    <p className="wd-card__desc">{c.desc}</p>
                  </article>
                ))}
              </div>

              {/* 제공 기상정보 상세 — 2단 표 */}
              <div className="wd-spec">
                <h3 className="wd-spec__title">제공 기상정보 상세</h3>
                <div className="wd-spec__grid">
                  {/* 좌측 표 */}
                  <table className="wd-spec__table">
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "25%" }} />
                      <col style={{ width: "27%" }} />
                      <col style={{ width: "28%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>콘텐츠명</th>
                        <th>예보주기</th>
                        <th>지역/단위</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 예보 (18행) */}
                      <tr>
                        <td className="c1" rowSpan={18}>예보</td>
                        <td className="c2">육상전담예보</td>
                        <td className="c3">1시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr>
                        <td className="c2">해상전담예보</td>
                        <td className="c3">1시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      {/* 단기예보 (7행) */}
                      <tr>
                        <td className="c2" rowSpan={7}>단기예보</td>
                        <td className="c3" rowSpan={4}>1시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c3" rowSpan={3}>3시간 단위</td>
                        <td>광역 단위</td>
                      </tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      {/* 주간예보 (8행) */}
                      <tr>
                        <td className="c2" rowSpan={8}>주간예보</td>
                        <td className="c3" rowSpan={4}>6시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c3" rowSpan={4}>12시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      {/* 30일예보 */}
                      <tr>
                        <td className="c2">30일예보</td>
                        <td className="c3">일 단위</td>
                        <td>8개 주요도시</td>
                      </tr>
                      {/* 미세먼지 (6행) */}
                      <tr>
                        <td className="c1" rowSpan={6}>미세먼지</td>
                        <td className="c2" rowSpan={3}>실황</td>
                        <td className="c3" rowSpan={3}>매 시각</td>
                        <td>광역 단위</td>
                      </tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c2" rowSpan={3}>예보</td>
                        <td className="c3" rowSpan={3}>3시간 단위</td>
                        <td>광역 단위</td>
                      </tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      {/* 장기전망보고서 6개월 전망 (2행) */}
                      <tr>
                        <td className="c1" rowSpan={2}>장기전망보고서<br />6개월 전망</td>
                        <td className="c2">표준형</td>
                        <td className="c3" rowSpan={2}>순별 단위<br />(10일 단위)</td>
                        <td>광역 단위</td>
                      </tr>
                      <tr>
                        <td className="c2">맞춤형</td>
                        <td>광역 단위</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* 우측 표 */}
                  <table className="wd-spec__table">
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "25%" }} />
                      <col style={{ width: "27%" }} />
                      <col style={{ width: "28%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>콘텐츠명</th>
                        <th>예보주기</th>
                        <th>지역/단위</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 세계날씨 (7행) */}
                      <tr>
                        <td className="c1" rowSpan={7}>세계날씨</td>
                        <td className="c2" rowSpan={2}>실황</td>
                        <td className="c3" rowSpan={2}>매 시각</td>
                        <td>162 지역</td>
                      </tr>
                      <tr><td>5400 지역</td></tr>
                      <tr>
                        <td className="c2" rowSpan={2}>단기예보</td>
                        <td className="c3" rowSpan={2}>1시간 단위</td>
                        <td>162 지역</td>
                      </tr>
                      <tr><td>5400 지역</td></tr>
                      <tr>
                        <td className="c2" rowSpan={2}>주간예보</td>
                        <td className="c3" rowSpan={2}>일 단위</td>
                        <td>162 지역</td>
                      </tr>
                      <tr><td>5400 지역</td></tr>
                      <tr>
                        <td className="c2">세계 기후/패션</td>
                        <td className="c3">월 단위</td>
                        <td>162 지역</td>
                      </tr>
                      {/* 지수 (4행) */}
                      <tr>
                        <td className="c1" rowSpan={4}>지수</td>
                        <td className="c2" rowSpan={4}>생활지수</td>
                        <td className="c3" rowSpan={4}>12시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      {/* 웨더원 영상 (9행) */}
                      <tr>
                        <td className="c1" rowSpan={9}>웨더원 영상</td>
                        <td className="c2">레이더 이미지</td>
                        <td className="c3" rowSpan={9}>1시간 단위</td>
                        <td>합성영상</td>
                      </tr>
                      <tr><td className="c2">위성 이미지</td><td>적외영상</td></tr>
                      <tr><td className="c2">레이더 동영상</td><td>합성영상</td></tr>
                      <tr><td className="c2">위성 동영상</td><td>적외영상</td></tr>
                      <tr><td className="c2" rowSpan={5}>예상도</td><td>강수</td></tr>
                      <tr><td>구름</td></tr>
                      <tr><td>바람</td></tr>
                      <tr><td>기온</td></tr>
                      <tr><td>일기도</td></tr>
                      {/* SMS (5행) */}
                      <tr>
                        <td className="c1" rowSpan={5}>SMS</td>
                        <td className="c2" rowSpan={3}>일반</td>
                        <td className="c3" rowSpan={5}>일 단위</td>
                        <td>날씨</td>
                      </tr>
                      <tr><td>특보</td></tr>
                      <tr><td>날씨&amp;특보</td></tr>
                      <tr><td className="c2" rowSpan={2}>프리미엄</td><td>전담예보 sms</td></tr>
                      <tr><td>예보관 날씨알림</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <WhySection />
              <EcoSection />
              <ClientsSection />
            </div>
          ) : (
            <div className="wd-panel" key="kma">
              <h3 className="wd-panel__lead">
                기상청으로부터 수집 된 데이터를 고객 니즈에 맞춰 제공합니다.
              </h3>
              <div className="wd-cards">
                {KMA_CARDS.map((c) => (
                  <article key={c.title} className="wd-card">
                    <div className="wd-card__thumb">
                      <img src={`/assets/sub/${c.img}`} alt={`${c.title} 화면 예시`} />
                    </div>
                    <h4 className="wd-card__title">{c.title}</h4>
                    <p className="wd-card__desc">{c.desc}</p>
                  </article>
                ))}
              </div>

              {/* 제공 기상정보 상세 — 기상청 정보 2단 표 */}
              <div className="wd-spec wd-spec--kma">
                <h3 className="wd-spec__title">제공 기상정보 상세</h3>
                <div className="wd-spec__grid">
                  {/* 좌측 표 */}
                  <table className="wd-spec__table">
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "25%" }} />
                      <col style={{ width: "27%" }} />
                      <col style={{ width: "28%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>콘텐츠명</th>
                        <th>예보주기</th>
                        <th>지역/단위</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 실황 (6행) */}
                      <tr>
                        <td className="c1" rowSpan={6}>실황</td>
                        <td className="c2" rowSpan={4}>육상</td>
                        <td className="c3" rowSpan={4}>현재 시각</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c2" rowSpan={2}>해상</td>
                        <td className="c3" rowSpan={2}>현재 시각</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>25 지역</td></tr>
                      {/* 예보 (16행) */}
                      <tr>
                        <td className="c1" rowSpan={16}>예보</td>
                        <td className="c2" rowSpan={8}>단기예보</td>
                        <td className="c3" rowSpan={4}>3시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c3" rowSpan={4}>12시간 단위</td>
                        <td>전국</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c2" rowSpan={4}>주간예보</td>
                        <td className="c3" rowSpan={4}>12시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      <tr>
                        <td className="c2" rowSpan={2}>단기예보(해상)</td>
                        <td className="c3" rowSpan={2}>12시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>46지역</td></tr>
                      <tr>
                        <td className="c2" rowSpan={2}>주간예보(해상)</td>
                        <td className="c3" rowSpan={2}>12시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>46지역</td></tr>
                      {/* 미세먼지 (2행) */}
                      <tr>
                        <td className="c1" rowSpan={2}>미세먼지</td>
                        <td className="c2">실황</td>
                        <td className="c3">현재 시각</td>
                        <td>광역 단위</td>
                      </tr>
                      <tr>
                        <td className="c2">예보</td>
                        <td className="c3">12시간 단위</td>
                        <td>광역 단위</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* 우측 표 */}
                  <table className="wd-spec__table">
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "25%" }} />
                      <col style={{ width: "27%" }} />
                      <col style={{ width: "28%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>콘텐츠명</th>
                        <th>예보주기</th>
                        <th>지역/단위</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 지수 (4행) */}
                      <tr>
                        <td className="c1" rowSpan={4}>지수</td>
                        <td className="c2" rowSpan={4}>생활지수</td>
                        <td className="c3" rowSpan={4}>12시간 단위</td>
                        <td>1지역</td>
                      </tr>
                      <tr><td>광역 단위</td></tr>
                      <tr><td>시·군·구 단위</td></tr>
                      <tr><td>읍·면·동 단위</td></tr>
                      {/* 특보 + 악기상 (발령 시 5행 병합) */}
                      <tr>
                        <td className="c1">특보</td>
                        <td className="c2">기상특보</td>
                        <td className="c3" rowSpan={5}>발령 시</td>
                        <td>162 지역</td>
                      </tr>
                      <tr>
                        <td className="c1" rowSpan={4}>악기상</td>
                        <td className="c2">태풍정보</td>
                        <td>전국</td>
                      </tr>
                      <tr><td className="c2">지진정보</td><td>전국</td></tr>
                      <tr><td className="c2">낙뢰정보</td><td>전국</td></tr>
                      <tr><td className="c2">황사정보</td><td>28개 관측소</td></tr>
                      {/* 과거자료 (6행) */}
                      <tr>
                        <td className="c1" rowSpan={6}>과거자료</td>
                        <td className="c2" rowSpan={6}>1개 관측소</td>
                        <td className="c3" rowSpan={6}>일단위</td>
                        <td>1일</td>
                      </tr>
                      <tr><td>7일</td></tr>
                      <tr><td>30일</td></tr>
                      <tr><td>3개월</td></tr>
                      <tr><td>30일</td></tr>
                      <tr><td>3개월</td></tr>
                      {/* 기상 이미지 (11행) */}
                      <tr>
                        <td className="c1" rowSpan={11}>기상<br />이미지</td>
                        <td className="c2" rowSpan={6}>
                          천리안<br />COMS<br />위성영상
                        </td>
                        <td className="c3" rowSpan={11}>1시간 단위</td>
                        <td>가시영상</td>
                      </tr>
                      <tr><td>단파적외영상</td></tr>
                      <tr><td>강조적외영상</td></tr>
                      <tr><td>수증기영상</td></tr>
                      <tr><td>적외영상</td></tr>
                      <tr><td>합성영상</td></tr>
                      <tr><td className="c2" rowSpan={2}>레이더영상</td><td>개별영상</td></tr>
                      <tr><td>합성영상</td></tr>
                      <tr><td className="c2" rowSpan={3}>일기도</td><td>편집일기도</td></tr>
                      <tr><td>지상일기도</td></tr>
                      <tr><td>상층일기도</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <WhySection />
              <EcoSection />
              <ClientsSection />
            </div>
          )}
        </section>
      ) : !HIDE_BIZ_TAB && active === 1 ? (
        <section className="company-intro" key="biz">
          <h2 className="company-intro__title">케이웨더 민간예보 서비스</h2>
          <p className="company-intro__desc">
            {
              "국내 최초 민간예보센터로써 상세 맞춤예보 생산 기술 경험을 토대로\n일기예보 민간개방을 위한 기상산업진흥법 시행에 앞서 설립되었습니다.\n\n자체 수치예보 모델을 통한 예보 생산과 전문 예보관들의 24시간 실시간 근무를 통하여 독자적인 예보를 생산합니다."
            }
          </p>

          {/* 케이웨더 만의 독자적 예보 */}
          <section className="biz-own">
            <h3 className="biz-own__title">
              케이웨더 만의 <b>독자적 예보</b>
            </h3>
            <div className="biz-own__card">
              {/* 1. 독자적 수치예보모델 */}
              <div className="biz-own__row">
                <div className="biz-own__icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="13" width="3.2" height="7" rx="0.6" />
                    <rect x="8.4" y="10" width="3.2" height="10" rx="0.6" />
                    <rect x="13.8" y="12" width="3.2" height="8" rx="0.6" />
                    <rect x="19.2" y="8" width="3.2" height="12" rx="0.6" />
                    <polyline points="4.6 8.5 10 5.5 15.4 7.5 20.8 3.5" />
                    <circle cx="4.6" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="10" cy="5.5" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="15.4" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="20.8" cy="3.5" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="biz-own__body">
                  <h4 className="biz-own__heading">
                    전국 관측자료,{" "}
                    <b>전세계 수치예보모델 및 AI 기반 기상예측 모델을 통한 예보</b>{" "}
                    생산
                  </h4>
                  <ul className="biz-own__list">
                    <li>
                      기상청 및 전 세계 선진 수치예보모델을 이용한 통합 분석 및
                      예측
                    </li>
                    <li>AI 기반 기상예측모델을 융합해 예보 정밀도 극대화</li>
                  </ul>
                </div>
              </div>

              {/* 2. 24시간 실시간 예보 */}
              <div className="biz-own__row">
                <div className="biz-own__icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="7.5" />
                    <polyline points="12 5.5 12 10 15 12" />
                    <text x="12" y="22.2" textAnchor="middle" fontSize="5.4" fontWeight="700" fill="currentColor" stroke="none">24</text>
                  </svg>
                </div>
                <div className="biz-own__body">
                  <h4 className="biz-own__heading">
                    <b>실시간 예보근무</b>, 독자적 예보 생산 및 맞춤형 예보지원
                  </h4>
                  <ul className="biz-own__list">
                    <li>전문예보관들의 상시 근무 체계를 통해 실시간 기상감시</li>
                    <li>정밀 분석을 거친 케이웨더만의 독자적 예보 수립</li>
                    <li>
                      일상생활부터 기업 비즈니스까지 활용 목적에 최적화된 기상정보
                      지원
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. 단기·중기·장기예보 */}
              <div className="biz-own__row">
                <div className="biz-own__icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v1.5" />
                    <path d="M3.6 4.8 4.7 5.9" />
                    <path d="M3 9h1.5" />
                    <path d="M12.4 4.8 11.3 5.9" />
                    <path d="M11.2 9.7a3.2 3.2 0 1 0-5.2 2.3" />
                    <path d="M16.5 19H8a3.5 3.5 0 1 1 .7-6.93A5 5 0 1 1 17 14.5a3.25 3.25 0 0 1-.5 4.5Z" />
                  </svg>
                </div>
                <div className="biz-own__body">
                  <h4 className="biz-own__heading">
                    <b>단기, 중기, 장기예보</b> 생산
                  </h4>
                  <ul className="biz-own__list">
                    <li>단기 : 오늘~모레 예보 생산</li>
                    <li>중기 : 주간 예보 생산</li>
                    <li>장기예보 및 계절예보 : 1개월 예보 및 계절예보 생산</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="biz-own__lead">
              <h3 className="biz-own__lead-title">전담 예보관 서비스</h3>
              <p className="biz-own__lead-desc">
                {
                  "나만의 전담 예보관을 갖는 신개념 서비스\n365일 24시간 특정 업체만을 위해 날씨정보를 생산하고 제공하는 전담예보 서비스"
                }
              </p>
            </div>
          </section>
        </section>
      ) : active === 2 ? (
        <section
          className="company-intro"
          key="map"
          style={{ paddingBottom: 320 }}
        >
          <h2 className="company-intro__title">케이웨더 맵</h2>
          <p className="company-intro__desc">
            {
              "케이웨더 맵은 전세계 기상 정보를 한눈에 볼 수 있는 글로벌 실시간 기상 시각화 플랫폼입니다."
            }
          </p>

          {/* 블록 1 — 시각적 직관성 */}
          <div className="map-block">
            <h3 className="map-block__title">
              눈으로 직접 확인하는 시각적 직관성
            </h3>
            <p className="map-block__desc">
              숫자와 아이콘 위주의 기존 예보에서 벗어나, ‘비구름이 어디서
              몰려오는지’, ‘바람은 어디로 부는지’ 지구 전체의 흐름을 역동적인
              영상으로 구현합니다.
              <br />
              지상부터 10km 상공까지 고도별 기상 레이어(기온, 바람, 기압)를
              표출하여 복잡한 데이터를 직관적으로 파악할 수 있습니다.
            </p>
            <div className="map-block__figure">
              <img
                src="/assets/sub/data_map01.jpg"
                alt="케이웨더 맵 화면 — 한반도 주변 대기오염·기상 레이어를 색상으로 시각화한 실시간 지도와 하단 시간별 미세먼지 예보"
              />
            </div>
          </div>

          {/* 블록 2 — 맞춤형 정밀 예보 */}
          <div className="map-block">
            <h3 className="map-block__title">
              맞춤형 정밀 예보 및 촘촘한 환경 데이터
            </h3>
            <p className="map-block__desc">
              도로명 주소 기반의 정밀 검색으로 지역별 맞춤 예보를 제공하며, 동
              단위 미세먼지·초미세먼지 실시간 관측값과 대기질 예보를 통합하여
              제공합니다.
            </p>
            <div className="map-block__figure">
              <img
                src="/assets/sub/data_map02.jpg"
                alt="케이웨더 맵 화면 — 도로명 주소 검색과 동 단위 미세먼지·강수 레이어, 하단 시간별 기온·강수·풍속 예보"
              />
            </div>
          </div>

          {/* 블록 3 — 글로벌 예측 모델 */}
          <div className="map-block">
            <h3 className="map-block__title">
              글로벌 예측 모델 및 실시간 관측 자료 탑재
            </h3>
            <p className="map-block__desc">
              한국형 수치예보모델(KIM)과 미국 GFS 등 타 플랫폼과 차별화된 다양한
              글로벌 예측 모델을 탑재하고,
              <br />
              최신 기상 레이더 및 위성 사진을 실시간 연동하여 데이터의 깊이를
              더했습니다.
            </p>
            <div className="map-block__figure">
              <img
                src="/assets/sub/data_map03.jpg"
                alt="케이웨더 맵 화면 — 아시아·태평양 전역의 기온·기압 글로벌 예측 모델 시각화와 KIM·GFS 모델 선택 옵션"
              />
            </div>
          </div>

          {/* 블록 4 — 선제적 위험기상 감시 */}
          <div className="map-block">
            <h3 className="map-block__title">선제적 위험기상 감시</h3>
            <p className="map-block__desc">
              각종 기상 특보와 태풍의 이동 경로를 실시간으로 추적·시각화하여,
              자연재해 및 위험 기상 상황에 유연하고 신속하게 대응할 수 있도록
              돕습니다.
            </p>
            <div className="map-block__figure">
              <img
                src="/assets/sub/data_map04.jpg"
                alt="케이웨더 맵 화면 — 태풍 이동 경로와 강수 레이더, 확률반경·태풍중심 이동경로를 시각화한 위험기상 감시 지도"
              />
            </div>
          </div>
        </section>
      ) : (
        /* 빈 화면 — 작업 중 탭(배포 시) */
        <div className="sub-blank" aria-hidden="true" />
      )}
    </>
  );
}
