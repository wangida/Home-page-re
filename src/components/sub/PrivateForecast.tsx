/* 케이웨더 민간예보 서비스 — 기상예보 페이지 「민간 기상예보」 탭 본문.
   구성은 Figma sub_기획_재작업 Frame 6 기준. */

import PrivateCases from "./PrivateCases";

export default function PrivateForecast() {
  return (
    <section className="company-intro" key="biz">
      <h2 className="company-intro__title">케이웨더 민간예보 서비스</h2>
      <p className="company-intro__desc">
        {
          "국내 최초 민간예보센터로써 상세 맞춤예보 생산 기술 경험을 토대로\n일기예보 민간개방을 위한 기상산업진흥법 시행에 앞서 설립되었습니다."
        }
      </p>

      {/* 제도 연혁 · 사업 구조 · 업종별 활용 사례 — Figma Frame 6 */}
      <PrivateCases />
    </section>
  );
}
