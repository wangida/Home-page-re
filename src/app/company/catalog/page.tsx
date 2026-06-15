import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "E-카탈로그 | K-WEATHER",
  description: "케이웨더 E-카탈로그 — 제품·서비스 카탈로그를 확인하세요.",
};

/* 카탈로그 17종 — 분류·명칭은 개편 리스트 기준, 다운로드 PDF 준비 전(href 추후 교체) */
const CATALOGS = [
  { cat: "종합", title: "케이웨더 통합제품 소개서" },
  { cat: "종합", title: "조달청 우수제품 카탈로그" },
  { cat: "종합", title: "교육기관용 카탈로그" },
  { cat: "종합", title: "IoT 체감온도 측정기 카탈로그" },
  { cat: "솔루션", title: "AI환기청정 솔루션" },
  { cat: "솔루션", title: "조리실 자동제어 솔루션" },
  { cat: "솔루션", title: "기후위험 관리솔루션(폭염)" },
  { cat: "솔루션", title: "기후위험 관리솔루션(건설)" },
  { cat: "솔루션", title: "기후위험 관리솔루션(해양/항만)" },
  { cat: "솔루션", title: "기후위험 관리솔루션(ESG)" },
  { cat: "실내공기측정기", title: "IAQ-C7 Series (ST, BX, BO)" },
  { cat: "실내공기측정기", title: "IAQ-CW" },
  { cat: "실내공기측정기", title: "IAQ-CL" },
  { cat: "실내공기측정기", title: "ARC-600DA" },
  { cat: "환기청정기(공기순환기)", title: "KW-400SC1" },
  { cat: "환기청정기(공기순환기)", title: "KW-800SC1/KW-1000SC1" },
  { cat: "환기청정기(공기순환기)", title: "KW-150WC1" },
].map((c, i) => ({
  ...c,
  thumb: `/assets/sub/catalog_${String(i + 1).padStart(2, "0")}.png`,
  href: "#",
}));

export default function CatalogPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/top_catalog.jpg"
          title="E-카탈로그"
          subtitle={"케이웨더의 제품과 솔루션을\n한눈에 확인할 수 있는 디지털 카탈로그"}
        />

        <section className="catalog">
          {CATALOGS.map((c) => (
            <div key={c.title} className="catalog__card">
              <img className="catalog__thumb" src={c.thumb} width={418} height={250} alt="" />
              <p className="catalog__cat">{c.cat}</p>
              <p className="catalog__title">{c.title}</p>
              <a className="catalog__down" href={c.href} download>
                다운로드
                <span className="ico" aria-hidden="true" />
              </a>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
