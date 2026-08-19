/* 기상데이터 3번째 탭 — 날씨 AI 팩토리.
   본문은 전달받은 다이어그램 이미지(data_AIfactory_01~06) 중심으로 구성한다. */

export default function AiFactory() {
  return (
    <div className="wd-panel aif" key="aif">
      <h3 className="wd-panel__lead">세계 최초의 날씨·기후 분야 특화 AI 팩토리</h3>
      <p className="aif__desc">
        엔비디아 AI 인프라를 활용해 케이웨더의 날씨 빅데이터를 AI 기상예측 모델에 적용하여
        <br />
        전지구 초정밀 격자 AI 예보 등과 같은 지능 토큰을 생산·유통하는 글로벌 날씨 분야
        ‘AI 팩토리’를 세계 최초로 구축합니다.
      </p>

      {/* 1.데이터 → 2.제조 및 가공 → 3.지능 토큰 공정 전체 */}
      <figure className="aif__fig">
        <img
          src="/assets/sub/data_AIfactory_01.png"
          width={1605}
          height={782}
          alt="관측·위성·공공·산업 데이터를 투입해(1단계) GPU 슈퍼컴퓨팅 클러스터로 정제·융합·연산하고(2단계) 초정밀 AI 기상 예보, 기후분석, 에너지 생산량 예측 등 지능 토큰을 생산하는(3단계) AI 팩토리 공정도"
        />
      </figure>

      {/* AI 팩토리 개념 설명 — 타이틀·설명은 다른 영역과 동일한 텍스트 규격 */}
      <section className="aif__block">
        <h4 className="aif__title">AI 팩토리란?</h4>
        <p className="aif__lead">
          원유를 정제해 석유를 만들듯 다양한 원시 데이터를 가공 및 표준화해 고부가가치의 지능
          토큰을 생산하는 데이터센터입니다.
        </p>
        <img
          className="aif__img"
          src="/assets/sub/data_AIfactory_02.png"
          width={1672}
          height={621}
          alt="원시 데이터 수집(Raw Data Mining) → 불순물 제거 및 데이터 정제(Filtering & Cleaning) → 구조화 및 토큰화(Tokenization & Formatting) → 지능 창출(Intelligence Generation) 4단계 공정과, 저장 중심의 과거 데이터센터 대비 지능을 생산하는 AI 시대 AI Factory의 차이"
        />
      </section>

      {/* 어스-2 모델 활용 */}
      <section className="aif__block">
        <h4 className="aif__title">
          케이웨더가 축적한 날씨 빅데이터 역량과 AI 기상예측 모델의 시너지
        </h4>
        <p className="aif__lead">
          케이웨더 날씨 AI 팩토리는 엔비디아의 AI 기상예측 모델인 어스-2의 모델들을 활용해
          <br />
          시간 단위 초단기 예측부터 향후 60일까지의 장기 예측을 시뮬레이션하고 초고해상도로
          시각화하는 등 최적의 결과를 도출합니다.
        </p>
        <div className="aif__bgbox">
          <img
            className="aif__img"
            src="/assets/sub/data_AIfactory_03_re.png"
            width={1817}
            height={726}
            alt="Earth-2 Atlas(전지구 관측 데이터 지도화), Earth-2 Nowcasting(초단기 예측), Global Data Assimilation(글로벌 데이터 동화), Earth-2 CorrDiff(고해상도 예측), Earth-2 FourCastNet 3(앙상블 예측) 등 5개 핵심 기술 소개"
          />
          <p className="aif__banner">
            구글, MS와 같은 글로벌 빅테크 기업이 개발한 젠캐스트, 오로라 등 AI 기상예측 모델들도
            적극 활용
          </p>
        </div>
      </section>

      {/* 산업별 활용 */}
      <section className="aif__block aif__block--ind">
        <h4 className="aif__title">
          물류, 에너지, 건설, 보험 등 각종 산업에서 활용되는 날씨 지능 토큰
        </h4>
        <p className="aif__lead">
          날씨 지능 토큰은 최적 물류경로 판단, 전력 발전량 예측, 조기 재난 대응 등
          <br />
          다양한 산업에서의 의사결정을 돕기 위해 활용됩니다.
        </p>
        <img
          className="aif__img"
          src="/assets/sub/data_AIfactory_04.png"
          width={1672}
          height={678}
          alt="물류·에너지·농업·항공·보험/리스크·스마트시티·건설·모빌리티/자율주행 8개 산업별 활용 방식과 주요 수요 분야, 판매·제공 형식"
        />
      </section>

      {/* 엔비디아 협력 — 로고·GPU 모두 검은 배경이라 어두운 밴드로 묶는다 */}
      <section className="aif__nv">
        <h4 className="aif__title">
          엔비디아와의 기술협력 및 AI 기상예측 모델 공동연구 추진
        </h4>
        <p className="aif__lead">
          케이웨더 날씨 AI 팩토리는 엔비디아 파트너사인 비엔아이엔씨와의 협력을 통해
          <br />
          H200, B200 등 엔비디아의 고성능 GPU를 활용하며 차세대 아키텍처 ‘베라루빈’도 본 사업에
          지원될 예정입니다.
          <br />
          이와 함께 AI 기상예측 모델에 대한 공동연구 등 엔비디아와의 글로벌 기술협력 채널을 적극
          연계합니다.
        </p>
        <div className="aif__nv-grid">
          <img
            src="/assets/sub/data_AIfactory_05.jpg"
            width={722}
            height={454}
            alt="엔비디아(NVIDIA) 로고"
          />
          <img
            src="/assets/sub/data_AIfactory_06.jpg"
            width={721}
            height={601}
            alt="엔비디아 AI 연산용 GPU 칩"
          />
        </div>
      </section>
    </div>
  );
}
