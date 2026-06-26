import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "공기지능 사례 | K-WEATHER",
  description: "현장에서 증명한 공기 관리 — 케이웨더 공기지능 컨설팅 적용 사례.",
};

/* 공기지능 사례 목록 — 썸네일 카드(Figma reference_air09) 클릭 시 상세로 이동 */
const CASES: { href: string; cat: string; name: string; thumb: string }[] = [
  { href: "/reference/air/01", cat: "복지 ∙ 의료시설", name: "양산시 시나브로 복지관", thumb: "/assets/sub/reference_thum01.png" },
  { href: "/reference/air/03", cat: "교육기관", name: "오송솔미초등학교", thumb: "/assets/sub/reference_thum02.png" },
  { href: "/reference/air/05", cat: "교육기관", name: "성남 내정초등학교", thumb: "/assets/sub/reference_thum03.png" },
  { href: "/reference/air/06", cat: "도서관", name: "은평구립도서관", thumb: "/assets/sub/reference_thum04.png" },
  { href: "/reference/air/04", cat: "주거공간", name: "포스코이앤씨 고양풍동 2지구", thumb: "/assets/sub/reference_thum05.png" },
  { href: "/reference/air/07", cat: "주거공간", name: "LH 전남 해남해리 공공주택", thumb: "/assets/sub/reference_thum06.png" },
  { href: "/reference/air/02", cat: "기상정보사업", name: "KPGA 맞춤형 기상정보", thumb: "/assets/sub/reference_thum07.png" },
  { href: "/reference/air/08", cat: "기타", name: "저온사과창고 CA 저장관리 솔루션", thumb: "/assets/sub/reference_thum08.png" },
  { href: "#", cat: "교육기관", name: "부산산업학교 미용실습실", thumb: "/assets/sub/reference_thum09.png" },
];

export default function ReferenceAirPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_reference01.jpg"
          title="공기지능 사례"
          subtitle={"현장에서 증명한 공기 관리\n케이웨더 공기지능 컨설팅 적용 사례"}
        />

        <section className="ref-cards">
          {CASES.map((c) => (
            <Link key={c.href} href={c.href} className="ref-card">
              <img className="ref-card__thumb" src={c.thumb} alt="" loading="lazy" />
              <p className="ref-card__cat">{c.cat}</p>
              <p className="ref-card__name">{c.name}</p>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
