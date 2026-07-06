/* 케이웨더 맵 — 기존 기상 데이터 탭(케이웨더 맵)에서 이관.
   웨더 맵 페이지 본문으로 사용. */

export default function WeatherMap() {
  return (
    <section className="company-intro" key="map" style={{ paddingBottom: 320 }}>
      {/* 타이틀·서브카피는 상단 SubHero로 이관 */}
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
  );
}
