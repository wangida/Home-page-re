import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import CompanyVideo from "@/components/sub/CompanyVideo";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "기업소개",
  description:
    "케이웨더 기업소개 — 기상 & 공기 빅데이터플랫폼 기업, AI 시대 기후테크 기업으로 도약합니다.",
};

/* 기업 현황 표 — 홈페이지 주소는 푸터에 있어 제외 */
const COMPANY_STAT = [
  { label: "회사명", value: "케이웨더(주)" },
  { label: "설립일", value: "1997년 06월 17일" },
  { label: "상장일", value: "2024년 02월 22일", badge: true },
  { label: "인력현황", value: "80여명 (2025년 6월 기준)" },
  { label: "본사", value: "서울시 구로구 디지털로26길 5 (에이스하이엔드타워1차 401호)" },
  { label: "주요제품", value: "빅데이터플랫폼, AI환기청정솔루션" },
  { label: "자본금", value: "44.5억원" },
];

/* 사진 — 두 장 모두 300×200(3:2) 표시, 원본은 2배수 600×400 */
const COMPANY_PHOTOS = [
  {
    cap: "케이웨더 본사 (서울 구로)",
    src: "/assets/sub/company_thum01.jpg",
    alt: "케이웨더 본사 사무실 입구의 로고 조형물",
  },
  {
    cap: "케이웨더 인천검단공장",
    src: "/assets/sub/company_thum02.jpg",
    alt: "케이웨더 인천검단공장 건물 외관",
  },
];

export default function CompanyPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_company.jpg"
          title="날씨 빅데이터플랫폼 기업"
          subtitle="Weather Bigdata Platform"
          subEn
        />

        <section className="company-intro">
          <h2 className="company-intro__title">기상 &amp; 공기 빅데이터플랫폼 기업</h2>
          <p className="company-intro__desc">
            {
              "케이웨더는 국내 최대 민간기상사업자이자 유일한 날씨빅데이터 플랫폼 기업으로서\n개인과 기업고객의 대기분야 각종 재해의 피해를 최소화하고\n삶의 질을 향상시키는데 주력합니다."
            }
          </p>
          <img
            className="company-intro__img"
            src="/assets/sub/company_01img.png"
            width={1046}
            height={562}
            alt="기상·공기 빅데이터로 만드는 No.1 날씨전문기업 다이어그램"
          />
        </section>

        <section className="company-plat">
          <p>
            {
              "케이웨더는 기상빅데이터플랫폼을 통하여 기상청 데이터 유통뿐만 아니라 독자 민간예보 등의 맞춤 데이터를 4,000여 회원사에 제공합니다.\n이를 통해 고객이 날씨경영을 실현하고 기후변화에 따른 각종 기상 위험을 효과적으로 관리할 수 있도록 돕습니다."
            }
          </p>
          <p>
            {
              "공기빅데이터플랫폼을 통해서도 실외의 미세먼지, 오존 등 각종 대기오염 요소의 가장 정확한 공기질 데이터를 전달합니다.\n나아가 고객이 생활하는 실내공간의 공기질 상태를 측정, 분석하고 그 데이터를 기반으로 공간을 청정하게 개선하는 제품과 서비스를 제공합니다."
            }
          </p>
        </section>

        <section className="company-ceo">
          <img
            className="company-ceo__img"
            src="/assets/sub/company_ceo.png"
            width={665}
            height={561}
            alt="케이웨더 대표이사"
          />
          <div className="company-ceo__txt">
            <h3 className="company-ceo__title">
              AI 시대, <span className="accent">기후테크 기업</span>으로서
              <br />
              케이웨더가 앞장섭니다.
            </h3>
            <div className="company-ceo__body">
              <p>
                &lsquo;날씨산업을 통한 고부가가치 창출&rsquo;을 목표로 1997년 설립된
                케이웨더는 현재 약 4,000업체에 기상 콘텐츠를 제공하고 있습니다.
                날씨와 공기는 우리 삶에서 떼어놓을 수 없는 필수적인 무형자산입니다
              </p>
              <p>
                본격적인 AI 시대를 맞아 케이웨더는 기상 및 공기 빅데이터 운영에 대한
                노하우와 AI 기술을 결합한 &lsquo;AI 기후테크 기업&rsquo;으로의 도약을
                준비하고 있습니다. AI 기상예측모델 개발과 기후데이터 AI 인프라 구축
                추진 등을 통해 핵심 사업의 경쟁력을 강화하고 미래 기반 확보를 위한
                사업구조 고도화를 지속할 것입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 기업 현황 — 좌: 항목 표 / 우: 사옥 사진(에셋 수급 전이라 자리만) */}
        <section className="company-stat">
          <div className="company-stat__card">
            <h3 className="company-stat__title">기업 현황</h3>
            <dl className="company-stat__list">
              {COMPANY_STAT.map((row) => (
                <div className="company-stat__row" key={row.label}>
                  <dt className="company-stat__label">{row.label}</dt>
                  <dd className="company-stat__value">
                    {row.value}
                    {row.badge && (
                      <img
                        className="company-stat__kosdaq"
                        src="/assets/sub/company_kosdaq.jpg"
                        width={71}
                        height={30}
                        alt="코스닥 상장법인"
                      />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="company-stat__media">
            {COMPANY_PHOTOS.map((photo) => (
              <figure className="company-stat__fig" key={photo.cap}>
                {/* 테두리 박스에는 사진만 넣고, 캡션은 박스 밖 아래에 둔다 */}
                <div className="company-stat__frame">
                  <img
                    className="company-stat__photo"
                    src={photo.src}
                    width={600}
                    height={400}
                    alt={photo.alt}
                  />
                </div>
                <figcaption className="company-stat__cap">{photo.cap}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* DSP 사업모델 — 카피 아래 3분야 상호관계 다이어그램 */}
        <section className="company-sol">
          <h3 className="company-sol__title company-sol__title--dsp">
            케이웨더는 Data, Service, Product (DSP) 3분야가
            <br />
            상호 시너지를 발휘하는 독특한 사업모델을 가지고 있습니다.
          </h3>
          <div className="company-sol__box">
            {/* 2배수(2588×1782) JPG — 박스 배경색(#eef1fa)을 이미지에 구워 넣어
                투명도 없이 내보낸 버전. 1189px 로 0.46배 축소되므로 리샘플링이
                깔끔하게 떨어져 흰 제품 몸통의 우글거림이 눈에 걸리지 않는다.
                비워둔 베이스 + 제품컷 2장 겹치기(company_dsp02 + _img01/02) 방식은
                이걸로 대체했다 */}
            <img
              className="company-sol__img"
              src="/assets/sub/company_dsp.jpg"
              width={2588}
              height={1782}
              alt="케이웨더 DSP 사업모델 다이어그램. Data(기상데이터·공기데이터)는 국내 최대 날씨·공기 빅데이터를, Product(기상장비·공기측정기·환기청정기)는 국가인증 1등급 공기제품 제조 기술을, Service(날씨경영 컨설팅·공기지능 서비스)는 지능형 공기지능서비스 전문인력을 핵심역량으로 하며 세 분야가 서로 시너지를 낸다."
            />
          </div>
        </section>

        <CompanyVideo />
      </main>
      <Footer />
    </>
  );
}
