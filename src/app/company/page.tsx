import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import CompanyVideo from "@/components/sub/CompanyVideo";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "기업소개 | K-WEATHER",
  description:
    "케이웨더 기업소개 — 기상 & 공기 빅데이터플랫폼 기업, AI 시대 기후테크 기업으로 도약합니다.",
};

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

        <section className="company-sol">
          <h3 className="company-sol__title">
            날씨와 환경데이터의 분석을 통해 새로운 솔루션을 제시합니다.
          </h3>
          <img
            className="company-sol__img"
            src="/assets/sub/company_02img.png"
            width={1000}
            height={578}
            alt="날씨·환경 데이터와 빅데이터 분석, 인공지능 모델, 날씨경영을 잇는 K-WEATHER 솔루션 다이어그램"
          />
        </section>

        <CompanyVideo />
      </main>
      <Footer />
    </>
  );
}
