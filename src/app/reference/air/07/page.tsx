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
  title: "LH 신축 아파트에 환기청정기 대규모 공급",
  description:
    "케이웨더가 LH(한국토지주택공사) 전남 해남해리 공공주택 400세대에 천장형 환기청정기를 납품했습니다.",
};

/* Figma sub_레퍼런스 > reference_air07 (82:548) — LH 전남 해남해리 공공주택 (공기지능 사례 / 주거공간) */
export default function ReferenceAirLhHaenamPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_airmeter_re.jpg?v=4"
          imagePosition="center bottom"
          title="공기지능 사례"
          subtitle={"현장에서 증명한 공기 관리\n케이웨더 공기지능 컨설팅 적용 사례"}
        />

        <article className="refd">
          {/* 타이틀바 */}
          <div className="refd-titlebar">
            <p className="refd-titlebar__cat">공기지능 / 주거공간</p>
            <p className="refd-titlebar__name">LH 전남 해남해리 공공주택</p>
            <p className="refd-titlebar__date">2025. 10. 09</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">LH 신축 아파트에 환기청정기 대규모 공급</h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference06_01.png"
              alt="LH 전남 해남해리 공공주택 천장형 환기청정기 설치 현장"
            />

            {/* 강조 단락(중앙) — 라벤더 박스 안 */}
            <p className="refd-lead">
              케이웨더가 LH(한국토지주택공사) 전남 해남해리 공공주택
              <br />
              <span className="em-orange">400세대에 천장형 환기청정기를 납품</span>했습니다.
            </p>
          </div>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            LH 신축 아파트에 공급한 천장형 환기청정기는{" "}
            <strong>내부의 오염된 공기를 배출하고 외부 공기를 정화 후 자동 유입</strong>시켜 별도의 관리 없어도 쾌적한 실내 공기를 24시간 유지합니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            특히 <strong>공기질 빅데이터 플랫폼 기반의 AI 운영 알고리즘</strong>과{" "}
            <strong>우수한 전열교환 소자</strong>를 사용해 공기질을 상시 청정하게 하고 최대 30% 에너지 절감효과를 제공합니다.
          </p>

          {/* 본문 단락 3 */}
          <p className="refd-body refd-body--gap40">
            케이웨더는 이외에도{" "}
            <strong className="em-blue">전북 장수, 관악 봉천, 양주 회천, 제주 화북 등 LH 신축아파트들에 환기청정기</strong>를 대량 수주 중입니다
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ 다양한 아파트 입주민들에게 쾌적한 주거 환경을 제공하며
            <br />
            <span className="em-orange">환기 청정 산업의 새로운 트렌드</span>로 자리매김해 나가고 있습니다. ]
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference06_02.jpg"
            alt="LH 전남 해남해리 공공주택 단지 전경"
          />

          {/* 이미지 3 */}
          <img
            className="refd-img refd-img--stack"
            src="/assets/sub/reference06_03.jpg"
            alt="LH 전남 해남해리 공공주택 천장형 환기청정기 적용 현장"
          />

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/air/07" />
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
