import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ReferenceNav from "@/components/sub/ReferenceNav";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "KPGA(한국프로골프협회) 맞춤형 기상정보 제공",
  description:
    "케이웨더가 KPGA가 주최·주관하는 전체 대회에서 대회 전/중/후 3단계 맞춤형 기상정보와 예보관 현장 파견, 사후 기상분석 보고서를 제공합니다.",
};

/* Figma sub_레퍼런스 > reference_air06 (80:472) — KPGA 맞춤형 기상정보 (공기지능 사례 / 기상정보사업) */
export default function ReferenceAirKpgaPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_airmeter.jpg"
          title="공기지능 사례"
          subtitle={"현장에서 증명한 공기 관리\n케이웨더 공기지능 컨설팅 적용 사례"}
        />

        <article className="refd">
          {/* 타이틀바 */}
          <div className="refd-titlebar">
            <p className="refd-titlebar__cat">공기지능 / 기상정보사업</p>
            <p className="refd-titlebar__name">KPGA 맞춤형 기상정보</p>
            <p className="refd-titlebar__date">2025. 04. 21</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">
              KPGA(한국프로골프협회) 맞춤형 기상정보 제공
            </h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference07_01.jpg"
              alt="KPGA 대회 현장 기상정보 제공 모습"
            />

            {/* 강조 단락(중앙) — 라벤더 박스 안 */}
            <p className="refd-lead">
              케이웨더가 KPGA가 주최 및 주관하는 전체 대회에서
              <br />
              <span className="em-orange">맞춤형 기상정보</span>를 제공합니다.
            </p>
          </div>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            골프는 강수, 바람, 낙뢰, 안개 등 다양한 기상요건에 큰 영향을 받는 스포츠입니다. 이에 대회 운영에 있어 정확한 기상정보가 가장 중요합니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            케이웨더는 KPGA 대회에 필요한{" "}
            <strong>기상 정보를 총 3단계(대회 전/중/후)로 제공하며 대회 운영에 필요한 예보관 현장 파견, 사후 기상분석 보고서 등을 단계별로 제공</strong>합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ 우수한 전문 예보관들이 정확히 제공하는{" "}
            <span className="em-orange">케이웨더 맞춤형 기상정보 서비스</span>가
            <br />
            필요한 기관, 기업 관계자들은 문의주세요! ]
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference07_02.jpg"
            alt="KPGA 대회 기상 모니터링 화면"
          />

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/air/02" />
          <div className="refd-divider" aria-hidden="true" />
          <div className="refd-actions">
            <Link className="refd-btn-list" href="/reference/air">
              목록
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
