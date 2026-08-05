"use client";

import { useState } from "react";

/* 관측 데이터 본문 — 기존 기상 데이터 탭(첫 번째)에서 이관.
   케이웨더 정보 / 기상청 정보 토글은 그대로 유지. */

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
    desc: (
      <>
        생활 지수, 스포츠/레저, 교통 날씨 등
        <br />
        다양한 환경에서 활용가능한 기상 컨텐츠
      </>
    ),
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

export default function ObservationData() {
  const [info, setInfo] = useState(0); // 0: 케이웨더 정보, 1: 기상청 정보

  return (
    <section className="company-intro" key="weather">
      {/* 타이틀·서브카피는 상단 SubHero로 대체(중복 제거) */}
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
            국내 최초 민간 예보센터의 전문예보관과 수치예보모델을 통해 생성되는 예보
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
          <ClientsSection />
        </div>
      )}
    </section>
  );
}
