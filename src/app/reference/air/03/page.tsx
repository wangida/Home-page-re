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
  title: "오송솔미초등학교 학생들의 건강 지키는 AI 환기청정기",
  description:
    "케이웨더 AI 환기청정기가 새롭게 문을 연 오송솔미초등학교 학생들의 건강을 위해 설치됐습니다.",
};

/* Figma sub_레퍼런스 > reference_air02 (80:424) — 오송솔미초등학교 (공기지능 사례 / 교육기관) */
export default function ReferenceAirOsongPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_airmeter_re.jpg?v=9"
          imagePosition="center bottom"
          title="공기지능 사례"
          subtitle={"현장에서 증명한 공기 관리\n케이웨더 공기지능 컨설팅 적용 사례"}
        />

        <article className="refd">
          {/* 타이틀바 */}
          <div className="refd-titlebar">
            <p className="refd-titlebar__cat">공기지능 / 교육기관</p>
            <p className="refd-titlebar__name">오송솔미초등학교</p>
            <p className="refd-titlebar__date">2025. 02. 23</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">
              오송솔미초등학교 학생들의 건강 지키는 AI 환기청정기
            </h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference02_01.png"
              alt="오송솔미초등학교 AI 환기청정기 설치 모습"
            />

            {/* 강조 단락(중앙) — 라벤더 박스 안 */}
            <p className="refd-lead">
              케이웨더 AI 환기청정기가 새롭게 문을 연 오송솔미초등학교 학생들의 건강을 위해 설치됐습니다.
            </p>
          </div>

          {/* 서브 강조(중앙, 주황) */}
          <p className="refd-lead-sub">
            여러분 공기질이 학업에도 영향을 미친다는 사실을 알고 계신가요?
          </p>

          {/* 인용 강조(중앙, 파랑 강조) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            영국 레딩대학교 연구에 따르면{" "}
            <span className="em-blue">적절한 환기시설이 설치된 교실의 학생들은</span>
            <br />
            <span className="em-blue">그렇지 않은 경우보다 학습능력이 15%나 높았다</span>고 합니다.
          </p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            이번에 설치된 KW-S800CB1 AI 환기정청기는 프리필터 및 고성능 집진필터를 통해 공기 중 미세먼지를 비롯한 이산화탄소, 휘발성유기화합물, 라돈 등을 제거할 뿐만 아니라 환기로 인해 소실되는 열에너지를 전열교환소자로 재활용해 최대 30%의 냉난방 에너지 사용량을 감소 시켜줍니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            특히 모듈형 필터교체 방식을 채용해 저렴하게 필터교체 및 관리가 가능하며, BLDC 모터를 사용해 운전시 저소음을 실현한 케이웨더 AI 환기청정기는 학교와 같은 교육시설에 매우 적합합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ <span className="em-orange">케이웨더 AI 환기청정기</span>로 학생들의 학습능력과 건강을 모두 챙기세요. ]
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference02_02.jpg"
            alt="오송솔미초등학교 전경"
          />

          {/* 이미지 3 */}
          <img
            className="refd-img refd-img--stack"
            src="/assets/sub/reference02_03.jpg"
            alt="오송솔미초등학교 AI 환기청정기 적용 현장"
          />

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/air/03" />
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
