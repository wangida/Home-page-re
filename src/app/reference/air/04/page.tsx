import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "포스코이앤씨 고양풍동 2지구, AI 환기청정기 도입 | K-WEATHER",
  description:
    "케이웨더가 4000세대가 넘는 대단지 신축아파트 및 오피스텔에 AI 환기청정기를 구축했습니다.",
};

/* Figma sub_레퍼런스 > reference_air05 (80:359) — 포스코이앤씨 고양풍동 2지구 (공기지능 사례 / 주거공간) */
export default function ReferenceAirPoscoPage() {
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
            <p className="refd-titlebar__cat">공기지능 / 주거공간</p>
            <p className="refd-titlebar__name">포스코이앤씨 고양풍동 2지구</p>
            <p className="refd-titlebar__date">2025. 03. 05</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 본문 제목 */}
          <h2 className="refd-heading">
            포스코이앤씨 고양풍동 2지구, AI 환기청정기 도입
          </h2>

          {/* 이미지 1 */}
          <img
            className="refd-img refd-img--1"
            src="/assets/sub/reference05_01.jpg"
            alt="포스코이앤씨 고양풍동 2지구 AI 환기청정기 설치 모습"
          />

          {/* 강조 단락(중앙) */}
          <p className="refd-lead">
            케이웨더가 4,000세대가 넘는 대단지 신축아파트 및 오피스텔에
            <br />
            AI 환기청정기를 구축했습니다.
          </p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            내부의 안 좋은 공기는 내보내고 들어오는 공기도 깨끗하게 걸러주는{" "}
            <strong className="em-blue">
              케이웨더 AI 환기청정기는 생활하는 실내 공간을 청정한 쉼터
            </strong>
            로 만들어 드립니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            특히 전열교환기를 적용해 밖으로 버려지는 에너지를 재사용하여{" "}
            <strong>자연환기 대비 약 30%의 절감효과</strong>를 볼 수 있으며,{" "}
            <strong className="em-blue">바이패스 모드</strong>를 통해 냉난방이 필요없는 봄과 가을엔 최소 한의 전력으로 청정한 공기를 공급합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            초미세먼지는 물론 부유 세균 및 바이러스까지 살균하는 필터는
            <br />
            룸 컨트롤러가 교체시기를 알려주는 등 아파트 입주민들에게 딱 맞는 편의성을 자랑합니다.
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference05_02.jpg"
            alt="포스코이앤씨 고양풍동 2지구 단지 전경"
          />

          {/* 이미지 3 */}
          <img
            className="refd-img refd-img--stack"
            src="/assets/sub/reference05_03.jpg"
            alt="포스코이앤씨 고양풍동 2지구 AI 환기청정기 적용 현장"
          />

          {/* 구분선 + 목록 버튼 */}
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
