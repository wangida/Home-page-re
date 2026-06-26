import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "성남 내정초등학교 조리실 자동제어 솔루션 구축 | K-WEATHER",
  description:
    "케이웨더 조리실 자동제어 솔루션으로 조리흄을 관리해 조리실 종사자의 건강을 지킵니다. 성남 내정초등학교 구축 사례.",
};

/* Figma sub_레퍼런스 > reference_air03 (80:401) — 성남 내정초등학교 (공기지능 사례 / 교육기관) */
export default function ReferenceAirSeongnamPage() {
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
            <p className="refd-titlebar__cat">공기지능 / 교육기관</p>
            <p className="refd-titlebar__name">성남 내정초등학교</p>
            <p className="refd-titlebar__date">2025. 02. 25</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 본문 제목 */}
          <h2 className="refd-heading">
            성남 내정초등학교 조리실 자동제어 솔루션 구축
          </h2>

          {/* 이미지 1 */}
          <img
            className="refd-img refd-img--1"
            src="/assets/sub/reference03_01.jpg"
            alt="성남 내정초등학교 조리실 자동제어 솔루션 구축 현장"
          />

          {/* 인용 강조(중앙) */}
          <p className="refd-lead">
            <span className="em-blue">조리흄</span>이란 요리를 할 때 발생하며 장기간 노출 시 폐암을 야기하는 WHO 지정 발암물질입니다.
            <br />
            특히 17개 시∙도 교육청 조리원 42,077명 중 13,653명(32%)이 폐 이상 소견을 받는 등
            <br />
            학교 조리실이 ‘죽음의 공간’이 되어가는 실정입니다.
          </p>

          {/* 서브 강조(중앙, 주황) */}
          <p className="refd-lead-sub">하지만 이제는 걱정하지 마세요!</p>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            케이웨더의{" "}
            <strong className="em-blue">‘조리실 자동제어 솔루션’</strong>은 실시간 측정한 조리흄 지수를 알려줄 뿐만 아니라 오염도에 따라 측정기 화면과 DID를 통해 시각화 및 경보 기능을 제공합니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            또한 중앙제어 및 자동제어 장치를 통해 급배기, 후드 장치 등 다양한 공조시스템을 자동으로 연동제어해 쾌적한 조리실 환경을 유지합니다.
          </p>

          {/* 본문 단락 3 */}
          <div className="refd-body refd-body--gap40">
            <p>
              케이웨더 조리실 자동제어 솔루션은{" "}
              <strong>공기질 빅데이터 플랫폼 ‘Air365’로 조리흄 통계를 제공</strong>하며, 데이터에 기반한 분석 및
            </p>
            <p>평가 보고서를 통해 설치 전후의 객관적 사후평가도 가능합니다.</p>
          </div>

          {/* 본문 단락 4 */}
          <p className="refd-body refd-body--gap40">
            현재 케이웨더의 조리실 자동제어 솔루션은{" "}
            <strong>전국 120여개 학교에 납품 및 운영</strong>되며 조리흄 관리의 새 기준으로 자리매김하고 있습니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            가장 효과적인 조리흄 개선 솔루션
            <br />
            <span className="em-blue">케이웨더 조리실 자동제어 솔루션</span>으로 조리실 종사자들의 건강을 지키세요!
          </p>

          {/* 이미지 2 */}
          {/* 이미지 2 · 3 (나란히, 세로 높이 통일) */}
          <div className="refd-imgpair refd-imgpair--even">
            <figure>
              <img src="/assets/sub/reference03_02.jpg" alt="성남 내정초등학교 조리실 실내공기측정기" />
            </figure>
            <figure>
              <img src="/assets/sub/reference03_03.jpg" alt="성남 내정초등학교 조리흄 중앙제어장치" />
            </figure>
          </div>

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
