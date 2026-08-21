/* 민간 기상예보 탭 — 제도 연혁(8p) + 데이터 사업 구조(9p) + 업종별 활용 사례(10~13p).
   Figma sub_기획_재작업 Frame 6.
   사례 데이터는 forecastCases.ts, 카드 마크업은 CaseCard.tsx 공유
   (날씨경영 컨설팅 슬라이더와 동일 소스). */

import CaseCard from "./CaseCard";
import { FORECAST_CASES } from "./forecastCases";

export default function PrivateCases() {
  return (
    <>
      {/* 민간예보 제도(8p) + 기상데이터 사업 구조(9p) — 라인 박스 하나에 */}
      <div className="pf-intro">
        <div className="pf-law">
          <div className="pf-law__card">
            <h4 className="pf-law__title">
              기상예보사업자제도
              <span className="pf-law__date">(1997년 7월)</span>
            </h4>
            <ul className="pf-law__list">
              <li>
                기상청이 아닌 민간 기상사업자가{" "}
                <b className="pf-law__hl">특정인을 대상으로 민간 예보 가능</b>
              </li>
              <li>민간기상사업자는 기상청이 허가</li>
              <li>일반인 대상 민간예보는 불가</li>
            </ul>
          </div>
          <div className="pf-law__card">
            <h4 className="pf-law__title">
              기상산업진흥법시행
              <span className="pf-law__date">(2009년 12월)</span>
            </h4>
            <ul className="pf-law__list">
              <li>기상산업을 하나의 산업으로 인정</li>
              <li>
                <b className="pf-law__hl">일반인</b> 대상 민간예보 가능
              </li>
              <li>
                기상사업자는{" "}
                <b className="pf-law__hl--blue">기상정보 출처 명시</b>
              </li>
            </ul>
          </div>
        </div>

        {/* 기상데이터 사업 구조 — 9p */}
        <div className="pf-eco">
          <img
            src="/assets/sub/2data_01re.png?v=4"
            srcSet="/assets/sub/2data_01re.png?v=4 1x, /assets/sub/2data_01re@2x.png?v=4 2x"
            width={1100}
            height={840}
            alt="기상청 자료·해외 제휴사 수치모델자료·기상관측장비를 받아 케이웨더가 독자 수치모델·전문예보관·AI로 관측데이터·기상데이터·방송컨텐츠를 생산하고, 모바일·인터넷·ERP·수요예측 시스템을 통해 건설·에너지·유통·레저·방재·방송·온라인포털 회원사에 제공하는 기상데이터 사업 구조"
          />
        </div>
      </div>

      {/* 업종별 활용 사례 — 10~13p */}
      <p className="pf-cases__lead">
        전국 4,000여 회원사에 날씨경영을 위한 맞춤 기상데이터 제공
      </p>

      {FORECAST_CASES.map((c) => (
        <CaseCard key={c.industry} data={c} />
      ))}

      {/* 예시) 파리바게뜨 — 14p */}
      <div className="pf-example">
        <img
          src="/assets/sub/02forecast04_04.png"
          width={2213}
          height={1775}
          alt="파리바게뜨 점포에 제공되는 날씨 판매지수 화면 — 상품별 일별 날씨 판매지수 순위표와 오늘·내일·모레 기상개황, 변동폭이 큰 중분류 상품 TOP3 표"
        />
      </div>
    </>
  );
}
