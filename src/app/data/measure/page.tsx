import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기 측정 데이터",
  description: "케이웨더 공기 측정 데이터 — 국가관측망과 IoT 측정 기반 공기질 데이터.",
};

/* 국가관측망 한계 — 3개 카드 (뉴스 캡쳐 이미지) */
const LIMIT_CARDS = [
  { img: "data_measure01_thum01", top: "대표 지점 ≠ 생활 지점", bottom: "측정장비가 크다 보니,\n잘못된 곳에 설치" },
  { img: "data_measure01_thum02", top: "전국 592개 지점의 한계", bottom: "미세먼지 측정소 턱없이 부족" },
  { img: "data_measure01_thum03", top: "실시간 확인의 어려움", bottom: "최소 1시간 20분의 지연" },
];

/* 지자체 스마트시티 사업 설치 사례 — 1행 3컷 / 2행 3컷(마지막은 지도 와이드) */
const SMART_TOP = [
  { img: "data_measure_re02.png", w: 320, h: 344, cap: "주거지역" },
  { img: "data_measure_re03.png", w: 320, h: 344, cap: "대기측정소 옆" },
  { img: "data_measure_re04.png", w: 320, h: 344, cap: "바람길 및 공원" },
];
const SMART_BOTTOM = [
  { img: "data_measure_re05.png", w: 270, h: 344, cap: "이동형 측정기" },
  { img: "data_measure_re06.png", w: 270, h: 344, cap: "고정형 측정기" },
  {
    img: "data_measure_re07.jpg",
    w: 1173,
    h: 631,
    cap: "제주시 주요 관광지 및 정류장에 설치된 측정기 위치",
  },
];

/* 도입 분야 — 좌측(건설사·교육시설) / 우측(기업) */
const ADOPT_CONSTRUCT = {
  title: "건설사",
  list: "현대건설, 대우건설, LH공사, 우미건설, 호반건설, 중흥건설, 삼성물산, GS건설, 포스코건설 등",
  imgs: [
    { img: "data_measure_re08.png", w: 340, h: 322, alt: "건설현장 인근 도로에 설치된 케이웨더 공기질 표출 측정기" },
    { img: "data_measure_re09.png", w: 340, h: 322, alt: "건물 앞에 설치된 케이웨더 공기질 표출 측정기" },
  ],
};
const ADOPT_SCHOOL = {
  title: "교육시설",
  list: "동아유치원, 회천어린이집, 서이초, 강하초, 신양초, 신동초, 토산초, 윤중초·중, 외식고, 숭실대, 대전대, 순천향대 등",
  imgs: [
    { img: "data_measure_re10.png", w: 340, h: 322, alt: "학교 옥외 폴에 설치된 케이웨더 실외공기측정기" },
    { img: "data_measure_re11.png", w: 340, h: 322, alt: "어린이집 놀이터에 설치된 케이웨더 실외공기측정기" },
  ],
};
const ADOPT_COMPANY = {
  title: "기업",
  list: "포항제철소, 현대자동차그룹 등",
  imgs: [
    { img: "data_measure_re12.png", w: 340, h: 352, alt: "포항제철소 정문 전경" },
    { img: "data_measure_re13.png", w: 340, h: 352, alt: "현대자동차 사업장 전경" },
  ],
};

const OAQ_PLACES = [
  { img: "ad_img01", cap: "건물" },
  { img: "ad_img02", cap: "건물" },
  { img: "ad_img03", cap: "아파트" },
  { img: "ad_img04", cap: "보육시설\n(유치원, 어린이집)" },
  { img: "ad_img05", cap: "병원" },
  { img: "ad_img06", cap: "도서관" },
];

/* 실내 공간 수집 사례 */
const INDOOR_PLACES = [
  { img: "data_measure03_thum01", cap: "국공립/민간 어린이집" },
  { img: "data_measure03_thum02", cap: "도서관, 카페, 문화시설" },
  { img: "data_measure03_thum03", cap: "고속도로 휴게소" },
  { img: "data_measure03_thum04", cap: "공연장" },
];

export default function AirMeasurePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_air.jpg?v=5"
          title="공기 측정 데이터"
          subtitle={"고객이 숨 쉬는 그 자리의 공기를 가장 정확하게"}
        />

        <section className="oaq-limit">
          <h2 className="oaq__title">
            국가관측망만으로는 내 생활권의 공기를 알 수 없습니다
          </h2>
          <div className="oaq__desc">
            <p>
              국가관측망은 도시 단위의 큰 흐름을 보는 데는 강하지만,
              <br />
              개인이 머무는 공간을 촘촘하고 즉각적으로 보여주지는 못합니다.
            </p>
          </div>

          <ul className="oaq-limit__grid">
            {LIMIT_CARDS.map((c, i) => (
              <li className="oaq-limit__item" key={i}>
                <p className="oaq-limit__card-top">{c.top}</p>
                <div className="oaq-limit__card">
                  <div className="oaq-limit__thumb">
                    <img src={`/assets/sub/${c.img}.jpg`} alt={c.top} />
                  </div>
                  <p className="oaq-limit__card-bottom">{c.bottom}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="oaq">
          <h2 className="oaq__title">
            고객이 머무는 바로 그 자리의 실외공기 데이터 수집을 위한 케이웨더의 고밀도 측정망
          </h2>

          <div className="oaq__box">
            <img
              className="oaq__map"
              src="/assets/sub/data_measure_re01.jpg?v=2"
              width={1438}
              height={749}
              alt="케이웨더 공기질(미세먼지) 측정망 화면 — 수도권 지도에 케이웨더 측정소 1,848개와 환경부 측정소 323개 현황, 측정소별 공기질 상세 정보 표출"
            />

            {/* 두 줄 문구를 진한 블루 배너 안에 배치 */}
            <div className="oaq__banner">
              <p className="oaq__banner-title">
                “내 집 앞마당”, “우리 아파트 놀이터”, “우리 학교 운동장”
              </p>
              <p className="oaq__banner-ex">
                케이웨더는 고객이 실제로 머무는 곳마다 측정기를 직접 설치해 데이터를 수집합니다.
              </p>
            </div>

            <ul className="oaq__grid">
              {OAQ_PLACES.map((p, i) => (
                <li className="oaq__item" key={i}>
                  <div className="oaq__thumb">
                    <img
                      src={`/assets/sub/${p.img}.jpg?v=2`}
                      alt={`${p.cap.replace("\n", " ")} 실외공기측정기 설치 사례`}
                    />
                  </div>
                  <span className="oaq__cap">{p.cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="oaq smart">
          <h2 className="oaq__title">전국 지자체별 스마트시티 사업</h2>
          <div className="oaq__desc">
            <p>
              제주, 순천, 포항, 안양, 의정부, 시흥, 세종, 부산, 강릉, 밀양, 양주 등 지자체의
              스마트시티 사업과
              <br />
              서울시 약 3,000여 지점의 도시복합센서 및 스마트폴 구축을 통해 공기 측정망을
              지속적으로 확대하고 있습니다.
            </p>
          </div>

          {/* 6컷 모두 하나의 블루톤 박스 안에 */}
          <div className="oaq__box">
            <ul className="smart__row smart__row--top">
              {SMART_TOP.map((p, i) => (
                <li className="smart__item" key={i}>
                  <div className="smart__thumb">
                    <img
                      src={`/assets/sub/${p.img}`}
                      width={p.w}
                      height={p.h}
                      alt={`${p.cap} 실외공기측정기 설치 사례`}
                    />
                  </div>
                  <span className="oaq__cap">{p.cap}</span>
                </li>
              ))}
            </ul>
            <ul className="smart__row smart__row--bottom">
              {SMART_BOTTOM.map((p, i) => (
                <li className="smart__item" key={i}>
                  <div className="smart__thumb">
                    <img src={`/assets/sub/${p.img}`} width={p.w} height={p.h} alt={p.cap} />
                  </div>
                  <span className="oaq__cap">{p.cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="oaq">
          <h2 className="oaq__title">어린이집부터 학교, 아파트, 기업까지</h2>
          <div className="oaq__desc">
            <p>
              실외 공기질 측정정보의 중요성이 높아지면서
              <br />
              어린이집 및 학교 등 교육기관부터 대기업의 산업현장까지 케이웨더의 측정기를 도입하고
              있습니다.
            </p>
          </div>

          {/* 좌: 건설사·교육시설 2단 / 우: 기업 1단(세로 2컷) */}
          <div className="adopt">
            <div className="adopt__col">
              {[ADOPT_CONSTRUCT, ADOPT_SCHOOL].map((g) => (
                <div className="adopt__group" key={g.title}>
                  <h3 className="adopt__title">[{g.title}]</h3>
                  <p className="adopt__list">{g.list}</p>
                  <div className="adopt__box">
                    {g.imgs.map((p) => (
                      <img
                        key={p.img}
                        src={`/assets/sub/${p.img}`}
                        width={p.w}
                        height={p.h}
                        alt={p.alt}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="adopt__col">
              <div className="adopt__group">
                <h3 className="adopt__title">[{ADOPT_COMPANY.title}]</h3>
                <p className="adopt__list">{ADOPT_COMPANY.list}</p>
                <div className="adopt__box adopt__box--stack">
                  {ADOPT_COMPANY.imgs.map((p) => (
                    <img
                      key={p.img}
                      src={`/assets/sub/${p.img}`}
                      width={p.w}
                      height={p.h}
                      alt={p.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="oaq-ai">
          <p className="oaq-ai__desc">
            국가관측망 데이터와 AI(딥러닝) 보정 기법을 결합해,
            <br />
            실외공기측정기(OAQ)의 정확도를 지속적으로 검증합니다.
          </p>
          <div className="oaq-ai__box">
            <img
              src="/assets/sub/ad_img07.jpg?v=2"
              width={1400}
              height={644}
              alt="1월 OAQ / 국가관측망 데이터 비교 — 케이웨더 PM10과 환경부 PM10 시계열·상관관계 그래프 (y=0.7756x+8.0265, R²=0.7864)"
            />
          </div>
        </section>

        <section className="oaq-indoor">
          <h2 className="oaq__title">
            실외를 넘어, 고객이 머무는 바로 그 실내 공간까지
          </h2>
          <div className="oaq__desc">
            <p>
              케이웨더는 다양한 분야 3만여 개 공간의 실내 공기질 데이터를 수집하고 있으며,
              <br />
              국가 환경빅데이터 전문센터로 지정되어 데이터의 공공성과 신뢰성을 인정받았습니다.
            </p>
          </div>

          <ul className="oaq-indoor__grid">
            {INDOOR_PLACES.map((p, i) => (
              <li className="oaq-indoor__item" key={i}>
                <div className="oaq-indoor__imgbox">
                  <div className="oaq-indoor__thumb">
                    <img
                      src={`/assets/sub/${p.img}.jpg`}
                      alt={`${p.cap} 실내 공기질 측정 사례`}
                    />
                  </div>
                </div>
                <span className="oaq-indoor__cap">{p.cap}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="oaq-air2">
          <h2 className="oaq__title">
            실내외 공기질을 하나의 화면으로, 케이웨더 공기지도(Airmap)
          </h2>
          <div className="oaq__desc">
            <p>
              실외·실내에서 수집한 공기질 데이터를 GIS 기반으로 통합하고,
              <br />
              지역·시설 단위로 실시간 시각화합니다.
            </p>
          </div>
          <div className="oaq-air2__box">
            <img
              src="/assets/sub/ad_subvisual.jpg?v=2"
              width={1400}
              height={673}
              alt="케이웨더 Airmap — 실내외 공기질 빅데이터 시각화 서비스 화면 (Heat Map·Flow Map·측정소 현황)"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
