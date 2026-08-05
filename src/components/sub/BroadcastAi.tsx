/* 방송 컨텐츠 — 「AI 컨텐츠」 탭 본문 (Figma sub_기획_재작업 Frame 10).
   AI 기상캐스터 → 날씨의 아이돌 순서. */

export default function BroadcastAi() {
  return (
    <>
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

      {/* 날씨의 아이돌 */}
      <section className="broad-sec broad-idol">
        <div className="broad-idol__top">
          <div className="broad-idol__photo">
            <img
              src="/assets/sub/data_song01.jpg"
              width={638}
              height={565}
              alt="케이웨더 AI 아이돌 그룹 ‘날씨의 아이돌’ 단체 사진"
            />
          </div>
          <div className="broad-idol__text">
            <p className="broad-idol__eyebrow">케이웨더 세계 최초 날씨예보</p>
            <h2 className="broad-idol__title">
              AI 아이돌 그룹, 날씨의 아이돌
            </h2>
            <p className="broad-idol__desc">
              케이웨더 날씨의 아이돌은 정밀 기상 데이터와 생성형 AI 음원 기술이 결합된 데이터
              <br />기반 아티스트 그룹입니다. 매일 아침 기온, 습도, 미세먼지 등 기상 상황 및 예보를
              <br />실시간으로 분석해 그날에 맞는 ‘날씨 송’을 쇼츠, 틱톡 등에 숏폼 영상으로 전달함으로써
              <br />수치중심 예보에서 벗어나 대중적 접점을 확대하고 있습니다.
            </p>
          </div>
        </div>
        <img
          className="broad-idol__cards"
          src="/assets/sub/data_song02.jpg"
          width={1237}
          height={424}
          alt="날짜별 날씨를 ‘날씨 송’ 콘셉트로 표현한 멤버별 숏폼 카드 4종 (Thunder·Cloudy·Rain·Sunny)"
        />
      </section>
    </>
  );
}
