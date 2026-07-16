/* 공기지능 사례 데이터 — 목록 카드(ReferenceAirCases)와 상세 하단 네비(ReferenceNav) 공용 */
export type ReferenceCase = {
  href: string;
  cat: string;
  name: string;
  thumb: string;
};

export const REFERENCE_CASES: ReferenceCase[] = [
  { href: "/reference/air/06", cat: "도서관", name: "은평구립도서관", thumb: "/assets/sub/reference_thum04.png" },
  { href: "/reference/air/08", cat: "기타", name: "탑프레쉬 저온사과창고", thumb: "/assets/sub/reference_thum08.png" },
  { href: "/reference/air/07", cat: "주거공간", name: "LH 해남해리 2BL 공공주택", thumb: "/assets/sub/reference_thum06.png" },
  { href: "/reference/air/02", cat: "기상정보사업", name: "KPGA (한국프로골프협회)", thumb: "/assets/sub/reference_thum07.png" },
  { href: "/reference/air/04", cat: "주거공간", name: "포스코이앤씨 고양풍동 2지구", thumb: "/assets/sub/reference_thum05.png" },
  { href: "/reference/air/05", cat: "교육기관", name: "성남 내정초등학교", thumb: "/assets/sub/reference_thum03.png" },
  { href: "/reference/air/03", cat: "교육기관", name: "오송솔미 초등학교", thumb: "/assets/sub/reference_thum02.png" },
  { href: "/reference/air/01", cat: "복지 ∙ 의료시설", name: "시나브로 복지관", thumb: "/assets/sub/reference_thum01.png" },
  { href: "#", cat: "교육기관", name: "부산산업학교 미용실습실", thumb: "/assets/sub/reference_thum09.png" },
];

/* 상세 페이지가 있는 사례만(플레이스홀더 "#" 제외) — 하단 네비 순서 기준 */
export const REFERENCE_NAV_CASES = REFERENCE_CASES.filter((c) => c.href !== "#");

/* 상단 피처 슬라이더에 노출되는 사례 — 하단 썸네일 그리드에서는 중복 제거 */
export const FEATURED_HREFS = [
  "/reference/air/06", // 은평구립도서관
  "/reference/air/08", // 탑프레쉬 저온사과창고
  "/reference/air/07", // LH 해남해리 2BL 공공주택
];
