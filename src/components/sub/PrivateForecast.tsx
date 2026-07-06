/* 케이웨더 민간예보 서비스 — 기존 기상 데이터 탭(민간 예보 서비스)에서 이관.
   AI 기상예보 페이지 하단에 추가로 노출. */

export default function PrivateForecast() {
  return (
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
              <img src="/assets/sub/data_w_icon_01.svg?v=2" width={186} height={155} alt="" />
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
              <img src="/assets/sub/data_w_icon_02.svg?v=2" width={186} height={150} alt="" />
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
              <img src="/assets/sub/data_w_icon_03.svg?v=2" width={186} height={157} alt="" />
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
          <div className="biz-own__fig biz-own__fig--plain">
            <img
              src="/assets/sub/data_service03.jpg"
              width={1856}
              height={2266}
              alt="전담 예보관이 특정 업체만을 위해 생산·제공하는 맞춤 날씨정보 예시 화면"
            />
          </div>
        </div>

        <div className="biz-own__lead">
          <h3 className="biz-own__lead-title">장기 기상 전망</h3>
          <p className="biz-own__lead-desc">
            {
              "지속적인 날씨 변동의 경향을 파악하여 장기적인 계획 수립에 도움을 주며.\n다음 계절의 기후를 예측하여 유통, 패션, 에너지 등에 접목시켜 수요 예측이 가능"
            }
          </p>
          <div className="biz-own__fig biz-own__fig--plain biz-own__fig--long">
            <img
              src="/assets/sub/data_long.jpg"
              width={1385}
              height={814}
              alt="장기 기상 전망 — 계절별 기후 변동 경향을 분석한 장기 예보 자료 예시 화면"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
