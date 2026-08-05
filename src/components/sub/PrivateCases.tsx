/* 민간 기상예보 탭 — 제도 연혁(8p) + 데이터 사업 구조(9p) + 업종별 활용 사례(10~13p).
   Figma sub_기획_재작업 Frame 6.
   썸네일 이미지는 컷팅 전 — .pf-case__thumb 자리표시 박스를 <img>로 교체하면 됨. */

type Point = {
  text: string;
  /** 화살표 뒤 결과 문구 (없으면 단문 항목) */
  result?: string;
  /** 같은 줄 오른쪽에 붙는 보조 문구 */
  note?: string;
  /** 2열 배치에서 한 줄 전체를 차지 */
  span?: boolean;
};

type Case = {
  industry: string;
  clients: string[];
  /** 썸네일 3종 캡션 — 이미지 순서와 동일 */
  figs: string[];
  /** 썸네일 3종 이미지 — 없으면 자리표시 박스 */
  imgs?: string[];
  /** 썸네일 원본 크기 [가로, 세로] — 업종마다 세로가 다름 */
  imgSize?: [number, number];
  points: Point[];
  /** 효과 목록을 2열로 배치 */
  twoCol?: boolean;
};

const CASES: Case[] = [
  {
    industry: "건설업",
    clients: ["대우건설", "현대건설", "GS건설 등"],
    figs: ["건설기상정보시스템", "포인트 예보", "작업기상도"],
    imgs: [
      "/assets/sub/02forecast01_01.png",
      "/assets/sub/02forecast01_02.png",
      "/assets/sub/02forecast01_03.png",
    ],
    imgSize: [731, 714],
    twoCol: true,
    points: [
      {
        text: "기상정보 시스템 활용으로, 효율적인 ‘공정관리’ 가능",
        result: "공사 기간 단축",
      },
      { text: "갑작스런 기상 변화에 대비", result: "공사장 ‘안전사고’ 크게 감소" },
      { text: "건설 기상정보 시스템을 활용", result: "연간 수 억원의 비용 절감" },
      { text: "공정관리 45.4%, 시공관리 36.4%, 품질관리 18.2%에 활용" },
    ],
  },
  {
    industry: "에너지",
    clients: ["한국전력", "한국지역난방공사", "한국가스공사 등"],
    figs: ["난방예보시스템", "포인트 예보", "난방지수"],
    imgs: [
      "/assets/sub/02forecast02_01.png",
      "/assets/sub/02forecast02_02.png",
      "/assets/sub/02forecast02_03.png",
    ],
    imgSize: [731, 714],
    twoCol: true,
    points: [
      { text: "난방수요예측을 통해 난방에 필요한 원자재 비용 최소화" },
      { text: "난방지수를 통한 지역난방 이용 고객의 만족도 증가" },
      { text: "객관적인 난방공급의 기준 마련으로 안정적인 난방공급 가능" },
      { text: "매년 수십억원 규모의 이익 증대 효과" },
    ],
  },
  {
    industry: "레저업(골프장, 콘도, 리조트)",
    clients: ["스카이72", "오크밸리", "렉스필드 등"],
    figs: ["AWS (자동기상관측장비)", "골프장 포인트 예보", "예보관전담서비스"],
    imgs: [
      "/assets/sub/02forecast03_01.png",
      "/assets/sub/02forecast03_02.png",
      "/assets/sub/02forecast03_03.png",
    ],
    imgSize: [731, 863],
    twoCol: true,
    /* 첫 줄에 1·3번 항목을 나란히, 긴 2번 항목은 다음 줄 전체 폭 */
    points: [
      { text: "기상관측장비 설치로 골프장 잔디 관리 및 스키장 운영관리" },
      { text: "예보관 전담예보를 통해 객수 예측 및 직원 배치에 활용" },
      {
        text: "정확한 포인트 예보를 통해 골프장 코스 예보 및 스키장 인공 눈 살포 시기 결정",
        span: true,
      },
    ],
  },
  {
    industry: "편의점, 할인점, 백화점, 제과점 등 유통업",
    clients: ["CU", "GS25", "홈플러스 등"],
    figs: ["점포 지역 포인트 예보", "POS 물품 발주시스템", "판매영향 지수"],
    imgs: [
      "/assets/sub/02forecast04_01.png",
      "/assets/sub/02forecast04_02.png",
      "/assets/sub/02forecast04_03.png",
    ],
    imgSize: [731, 893],
    points: [
      {
        text: "기상정보를 POS에 활용",
        result: "제품의 수요공급량을 조절하여 매출 극대화",
        note: "각 점포당 하루 평균매출 15% 증가, 아이스크림류는 각 점포당 평균 매출 20%이상 증가",
      },
      {
        text: "기상정보 예측시스템 구축",
        result: "‘날씨변화’에 따른 판매 및 운영 지수에 따른 효율적인 대응",
      },
      {
        text: "상품의 재고 회전율 평균 14일에서 10일로 4일 감소",
        result: "재고비용 수십억 절감",
      },
    ],
  },
];

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

      {CASES.map((c) => (
        <div className="pf-case" key={c.industry}>
          <div className="pf-case__head">
            <h4 className="pf-case__industry">{c.industry}</h4>
            <p className="pf-case__clients">
              {c.clients.map((name, i) => (
                <span key={name}>
                  {i > 0 && <i className="pf-case__bar">|</i>}
                  {name}
                </span>
              ))}
            </p>
          </div>

          <div className="pf-case__body">
            <div className="pf-case__figs">
              {c.figs.map((cap, i) => (
                <div className="pf-case__fig" key={cap}>
                  {c.imgs?.[i] ? (
                    <img
                      className="pf-case__thumb-img"
                      src={c.imgs[i]}
                      width={c.imgSize?.[0] ?? 731}
                      height={c.imgSize?.[1] ?? 714}
                      alt={`${c.industry} 기상정보 활용 사례 — ${cap} 화면`}
                    />
                  ) : (
                    /* 컷팅 이미지 들어올 자리 */
                    <div className="pf-case__thumb">이미지 준비 중</div>
                  )}
                  <p className="pf-case__cap">{cap}</p>
                </div>
              ))}
            </div>

            <ul
              className={`pf-case__list ${c.twoCol ? "pf-case__list--2col" : ""}`}
            >
              {c.points.map((p) => (
                <li key={p.text} className={p.span ? "is-span" : undefined}>
                  <p className="pf-case__point">
                    <span>{p.text}</span>
                    {p.result && (
                      <>
                        <i className="pf-case__arrow" aria-hidden>
                          →
                        </i>
                        <b>{p.result}</b>
                      </>
                    )}
                  </p>
                  {p.note && <p className="pf-case__note">{p.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
