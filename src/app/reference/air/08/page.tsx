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
  title: "케이웨더의 저온사과창고 CA 저장관리 솔루션",
  description:
    "케이웨더가 탑프레쉬와 공동으로 환경센서와 AI 환기장치를 이용한 농작물 저장장치 솔루션을 구축했습니다.",
};

/* Figma sub_레퍼런스 > reference_air08 (82:570) — 저온사과창고 CA 저장관리 솔루션 (공기지능 사례 / 기타) */
export default function ReferenceAirAppleStoragePage() {
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
            <p className="refd-titlebar__cat">공기지능 / 기타</p>
            <p className="refd-titlebar__name">저온사과창고 CA 저장관리 솔루션</p>
            <p className="refd-titlebar__date">2025. 11. 18</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">
              케이웨더의 저온사과창고 CA 저장관리 솔루션
            </h2>

            {/* 이미지 1 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference08_01.png"
              alt="케이웨더 저온사과창고 CA 저장관리 솔루션 현장"
            />

            {/* 강조 단락(중앙, 주황) — 라벤더 박스 안 */}
            <p className="refd-lead">
              케이웨더가 탑프레쉬와 공동으로{" "}
              <span className="em-orange">
                환경센서와 AI 환기장치를 이용한
                <br />
                농작물 저장장치 솔루션 구축
              </span>
              에 나섰습니다.
            </p>
          </div>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            우리가 자주 즐기는 과일인 사과는 저장 시 사과에서 에틸렌 가스, 이산화탄소, 부패균들이 배출돼 쉽게 상하거나 악취가 날 수 있는데요.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            <strong className="em-blue">케이웨더의 CA(Controlled Atmosphere) 저장관리 솔루션</strong>은 AI 환경센서가 저온사과창고 내 발생하는 각종 유해물질과 가스의 농도를 실시간 측정하고 AI 환기장치가 이를 원활히 배출시킴으로써{" "}
            <strong>사과의 신선도와 품질을 향상시키고 저장기간 연장</strong>을 돕습니다.
          </p>

          {/* 본문 단락 3 */}
          <p className="refd-body refd-body--gap40">
            또한 <strong>클라우드 플랫폼을 통해 최적의 운전모드를 선정</strong>하는 만큼, 농장주는 안심하고 창고를 맡길 수 있습니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ 케이웨더의 공기지능 기술력은 사람 뿐만 아니라
            <br />
            <span className="em-orange">농작물도 쾌적의 상태로 케어</span>합니다. ]
          </p>

          {/* 2단 이미지 + 캡션 */}
          <div className="refd-imgpair">
            <figure>
              <img src="/assets/sub/reference08_02.jpg" alt="AI 환경센서" />
              <figcaption className="refd-imgcap">[ AI 환경센서 ]</figcaption>
            </figure>
            <figure>
              <img src="/assets/sub/reference08_03.jpg" alt="AI 저온창고 환기장치" />
              <figcaption className="refd-imgcap">[ AI 저온창고 환기장치 ]</figcaption>
            </figure>
          </div>

          {/* 와이드 구성도 — 저온저장창고 솔루션의 최신 이미지, 라인 박스 안에 확대 배치 */}
          <div className="refd-figbox">
            <img
              src="/assets/sub/subtop_coldimg01.jpg?v=2"
              alt="환경센서를 이용한 CA 저장관리 솔루션 구성도 — 저온저장창고 내부·외부 핵심 측정요소(에틸렌·이산화탄소·산소·암모니아·온습도)와 AI 환기장치·환경센서·LTE 라우터·플랫폼 연계"
            />
          </div>

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/air/08" />
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
