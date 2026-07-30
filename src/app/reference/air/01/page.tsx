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
  title: "양산시 시나브로 복지관 AI 환기청정솔루션 공급",
  description:
    "케이웨더가 미세먼지·휘발성유기화합물 등 오염 물질에 취약한 장애인들을 위해 양산시 시나브로 복지관에 AI 환기청정솔루션을 제공했습니다.",
};

/* Figma sub_레퍼런스 > reference_air01 (1762:2183) — 양산시 시나브로 복지관 상세 */
export default function ReferenceAir01Page() {
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
            <p className="refd-titlebar__cat">공기지능 / 복지 ∙ 의료시설</p>
            <p className="refd-titlebar__name">양산시 시나브로 복지관</p>
            <p className="refd-titlebar__date">2024. 10. 12</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">
              양산시 시나브로 복지관 AI 환기청정솔루션 공급
            </h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference01_01.png?v=3"
              alt="양산시 시나브로 복지관 AI 환기청정기 설치 모습"
            />

            {/* 강조 단락 1 (라벤더 박스 안) */}
            <p className="refd-lead">
              케이웨더가 미세먼지, 휘발성유기화합물 등 오염 물질에 취약한
              <br />
              장애인들을 위해 양산시 시나브로 복지관에 AI 환기청정솔루션을 제공했습니다.
            </p>
          </div>

          {/* 강조 단락 2 */}
          <p className="refd-lead-sub">
            이번에 공급된 AI 환기청정기는 별도의 환기 없이도 공기질을 쾌적하게 관리할 수 있는데요.
          </p>

          {/* 본문 단락 3 */}
          <div className="refd-body">
            <p>
              유해 세균을 95% 이상 살균하는 고성능 집진필터를 사용하고 국가표준(KS)를 충족하는 우수한 열교환 효율을 자랑합니다.
            </p>
            <p>
              또한{" "}
              <strong className="em-blue">
                공기질 빅데이터 플랫폼 ‘Air365’와 연동해 환기, 청정, 바이패스 등 운전 모드를 실시간으로 자동제어
              </strong>
              합니다.
            </p>
          </div>

          {/* 각주 */}
          <p className="refd-note">*자동제어 기능은 ARC-600DA와 연동 필요</p>

          {/* 본문 단락 4 */}
          <p className="refd-body refd-body--gap40">
            이를 통해 케이웨더 AI 환기청정기는 공기를 청정하게 유지할 뿐만 아니라 냉난방 에너지를 재회수해{" "}
            <strong className="em-blue2">최대 30% 에너지 비용을절감</strong>할 수 있습니다.
          </p>

          {/* 마무리 문구 */}
          <p className="refd-closing">
            [ 이제 케이웨더 AI 환기청정기로 쾌적한 실내 공기를 선사하세요 ]
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference01_02.jpg"
            alt="양산시 시나브로 복지관 전경"
          />

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/air/01" />
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
