import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "방송 컨텐츠 | K-WEATHER",
  description: "케이웨더 방송 컨텐츠 — 방송·언론사에 제공하는 기상 콘텐츠.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function BroadcastPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_broad.jpg"
          title="방송 컨텐츠"
          subtitle={"전문 기상 분석을 바탕으로\n방송·언론에 최적화된 기상 콘텐츠 제공"}
        />
        {/* 날씨의 아이돌 */}
        <section className="broad-sec">
          <h2 className="broad-sec__title">
            세계 최초 날씨예보 AI 아이돌 그룹, 날씨의 아이돌
          </h2>
          <p className="broad-sec__desc">
            케이웨더 날씨의 아이돌은 정밀 기상 데이터와 생성형 AI 음원 기술이
            결합된 데이터 기반 아티스트 그룹입니다. 매일 아침 기온, 습도,
            미세먼지 등 기상 상황
            <br />및 예보를 실시간으로 분석해 그날에 맞는 ‘날씨 송’을 쇼츠, 틱톡
            등에 숏폼 영상으로 전달함으로써 수치중심 예보에서 벗어나 대중적 접점을
            확대하고 있습니다.
          </p>
          <div className="broad-figs">
            <div className="broad-figs__item broad-figs__item--a">
              <img
                src="/assets/sub/data_broad01.jpg"
                alt="케이웨더 AI 아이돌 그룹 ‘날씨의 아이돌’ 단체 사진"
              />
            </div>
            <div className="broad-figs__item broad-figs__item--b">
              <img
                src="/assets/sub/data_broad02.jpg"
                alt="날짜별 날씨를 ‘날씨 송’ 가사로 표현한 멤버별 숏폼 카드 4종"
              />
            </div>
          </div>
        </section>

        {/* AI 기상캐스터 */}
        <section className="broad-sec">
          <h2 className="broad-sec__title">AI 기상캐스터</h2>
          <p className="broad-sec__desc">
            케이웨더는 유명 종합편성채널과의 공동 오디션을 통해 선발된 AI
            기상캐스터를 기상예보 컨텐츠에 전격 개발 및 도입했습니다.
            <br />실시간 속보 등 다양한 포맷으로 콘텐츠 생산성을 획기적으로
            높였으며, 다국어 생성 능력을 바탕으로 글로벌 기상 컨텐츠 시장의 새로운
            표준을 제시합니다.
          </p>
          <div className="broad-figs">
            <div className="broad-figs__item broad-figs__item--eq">
              <img
                src="/assets/sub/data_broad03.jpg"
                alt="AI 기상캐스터가 일교차 그래프를 설명하는 기상예보 방송 화면"
              />
            </div>
            <div className="broad-figs__item broad-figs__item--eq">
              <img
                src="/assets/sub/data_broad04.jpg"
                alt="AI 기상캐스터가 서해·동해·남해 바다 날씨를 안내하는 방송 화면"
              />
            </div>
          </div>
        </section>

        {/* 기상방송 컨텐츠 */}
        <section className="broad-sec">
          <h2 className="broad-sec__title">기상방송 컨텐츠</h2>
          <p className="broad-sec__desc">
            독자적으로 생성한 기상데이터를 미디어 등의 방식으로 제공하는
            콘텐츠로, 방송사가 날씨방송을 위해 필요한 기상방송 장비와 각종 기상방송
            <br />데이터를 제공하고 있으며 직접 방송을 제작하기 어려운 방송사를
            위해서는 직접 기상방송 컨텐츠를 제작하여 VOD형태로 제공하고 있습니다.
          </p>
          <img
            className="broad-single"
            src="/assets/sub/data_broad05.jpg"
            alt="맞춤형 기상 VOD 제작 사례와 케이웨더 예보를 방송하는 언론사 날씨방송 화면 모음"
          />
        </section>

        {/* 날씨환경청 */}
        <section className="broad-sec">
          <h2 className="broad-sec__title">기후분석 전문 미디어, 날씨환경청</h2>
          <p className="broad-sec__desc">
            날씨환경청은 기상 전문성을 갖춘 ‘방송예보관(BM)’이 주도하는
            날씨·환경 전문 유튜브 채널입니다. 단순 실황 중계를 넘어 기상현상의
            원인과
            <br />기후변화 과정을 깊이 있게 해설하여, 날씨에 민감한 시청자들의
            궁금증을 해소하고 기후변화에 대한 신속한 대비를 돕습니다.
          </p>
          <div className="broad-figs">
            <div className="broad-figs__item broad-figs__item--c">
              <img
                src="/assets/sub/data_broad06.jpg"
                alt="날씨·환경 전문 채널 ‘날씨환경청’ 채널 로고"
              />
            </div>
            <div className="broad-figs__item broad-figs__item--d">
              <img
                src="/assets/sub/data_broad08.jpg"
                alt="찬 북서풍과 따뜻한 남풍 유입을 화살표로 해설한 날씨환경청 기상 분석 화면"
              />
            </div>
          </div>
        </section>

        {/* 본문 마감 여백 — 다음 섹션 추가 시 이 위에 삽입 */}
        <div aria-hidden="true" style={{ height: 240 }} />
      </main>
      <Footer />
    </>
  );
}
