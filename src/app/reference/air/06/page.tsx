import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "은평구립도서관, 케이웨더 AI 환기청정솔루션으로 리모델링 | K-WEATHER",
  description:
    "새롭게 그린리모델링을 마친 은평구립도서관에 케이웨더의 AI 환기청정솔루션이 도입됐습니다.",
};

/* Figma sub_레퍼런스 > reference_air04 (80:379) — 은평구립도서관 (공기지능 사례 / 도서관) */
export default function ReferenceAirEunpyeongPage() {
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
            <p className="refd-titlebar__cat">공기지능 / 도서관</p>
            <p className="refd-titlebar__name">은평구립도서관</p>
            <p className="refd-titlebar__date">2025. 12. 15</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 본문 제목 */}
          <h2 className="refd-heading">
            은평구립도서관, 케이웨더 AI 환기청정솔루션으로 리모델링
          </h2>

          {/* 이미지 1 */}
          <img
            className="refd-img refd-img--1"
            src="/assets/sub/reference04_01.jpg"
            alt="은평구립도서관 AI 환기청정솔루션 도입 현장"
          />

          {/* 강조 단락 1(중앙) */}
          <p className="refd-lead">
            새롭게 그린리모델링을 마친 은평구립도서관에 케이웨더의 AI 환기청정솔루션이 도입됐습니다.
          </p>

          {/* 강조 단락 2(중앙, 주황) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            그린 리모델링이란 오래된 건축물에{" "}
            <span className="em-orange">
              친환경 및
              <br />
              에너지 절약 설비를 적용해 환경을 쾌적하게 개선하는 사업
            </span>
            입니다.
          </p>

          {/* 강조 단락 3(중앙, 파랑) */}
          <p className="refd-lead" style={{ marginTop: 48 }}>
            은평구립도서관은 이번 그린 리모델링 사업에서 케이웨더의
            <br />
            <span className="em-blue">KW-S800CB1, KW-S1000CB1 AI 환기청정기 제품</span>을 선택했는데요.
          </p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            일반적으로{" "}
            <strong>창문을 열어 환기를 시키는 경우에 비해 케이웨더의 AI 환기청정기는 최대 30%의 냉난방 에너지 절감효과</strong>를 내기 때문입니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            또한 도서관을 이용하는 주민들이 쾌적한 환경에서 독서와 공부 등에 집중할 수 있도록{" "}
            <strong>초미세먼지와 이산화탄소 등 각종 유해물질을 효과적으로 제거할 수 있다는 점</strong>도 선택의 이유가 됐다고 합니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            기후위기와 에너지 가격 상승이 일상이 된 지금,
            <br />
            케이웨더 AI 환기청정솔루션을 통해 에너지는 아끼고 쾌적함은 올려보세요.
          </p>

          {/* 이미지 2 */}
          <img
            className="refd-img refd-img--2"
            src="/assets/sub/reference04_02.jpg"
            alt="은평구립도서관 그린리모델링 전경"
          />

          {/* 이미지 3 */}
          <img
            className="refd-img refd-img--stack"
            src="/assets/sub/reference04_03.jpg"
            alt="은평구립도서관 AI 환기청정솔루션 적용 현장"
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
