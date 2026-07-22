import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ReferenceNav from "@/components/sub/ReferenceNav";
import { WEATHER_NAV_CASES } from "@/components/sub/referenceCases";
import "@/components/sub/sub.css";
import "@/components/sub/referenceDetail.css";

export const metadata: Metadata = {
  title: "포스코이앤씨 건설관리 솔루션 구축",
  description:
    "케이웨더가 포스코이앤씨와 함께 IoT 센서와 AI 기상예보 기반 건설 관리솔루션을 구축해 건설현장의 안전사고·시설물 피해를 예방합니다.",
};

/* Figma sub_레퍼런스 > reference_add (169:420) — 포스코이앤씨 (날씨경영 사례 / 건설관리 솔루션) */
export default function ReferenceWeatherPoscoPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_reference03.jpg"
          title="날씨경영 사례"
          subtitle={"날씨 데이터로 리스크를 줄이고 새로운 기회를 만든\n케이웨더 날씨경영 컨설팅 적용 사례"}
        />

        <article className="refd">
          {/* 타이틀바 */}
          <div className="refd-titlebar">
            <p className="refd-titlebar__cat">날씨경영 / 건설관리 솔루션</p>
            <p className="refd-titlebar__name">포스코이앤씨</p>
            <p className="refd-titlebar__date">2026. 06. 16</p>
            <span className="refd-titlebar__line" aria-hidden="true" />
          </div>

          {/* 상단 히어로: 제목 + 첫 이미지 + 리드문구 (라벤더 배경) */}
          <div className="refd-hero">
            {/* 본문 제목 */}
            <h2 className="refd-heading">
              포스코이앤씨 건설현장 안전 지키는 ‘건설관리 솔루션’ 구축
            </h2>

            {/* 이미지 1 — 상단 갤러리와 동일한 빅사이즈 이미지 */}
            <img
              className="refd-img refd-img--1"
              src="/assets/sub/reference_wthumbig01.png"
              alt="포스코이앤씨 건설현장 실외공기측정기 설치 모습"
            />

            {/* 강조 단락(중앙) — 라벤더 박스 안 */}
            <p className="refd-lead">
              케이웨더가 포스코이앤씨와 함께
              <br />
              IoT와 AI 기술 기반 <span className="em-orange">건설 관리솔루션</span>을 구축했습니다.
            </p>
          </div>

          {/* 본문 단락 1 */}
          <p className="refd-body">
            이 시스템은 주요 건설작업 위치에 설치된 IoT 센서와 AI 기상예보 기술을 활용하여 건설현장의 안전사고, 시설물 피해 등을 막기 위해 개발되었습니다.
          </p>

          {/* 본문 단락 2 */}
          <p className="refd-body refd-body--gap40">
            동일한 현장이라도 타워크레인, 콘크리트 타설 작업장, 지하 등 작업 장소와 환경에 따라 체감온도, 강우량 등이 큰 차이를 보이기 때문입니다.
          </p>

          {/* 본문 단락 3 */}
          <div className="refd-body refd-body--gap40">
            <p>
              케이웨더의 건설 관리솔루션은{" "}
              <strong className="em-blue">
                현장에 설치된 IoT 센서가 체감온도, 온·습도, 풍향·속, 강우량 등을 분석해 맞춤형 예보를 제공
              </strong>
              합니다.
            </p>
            <p>
              이를 통해 현장 관리자는 폭염, 호우, 돌풍 등을 미리 파악해 작업중단, 휴식 등 대응조치를 취할 수 있습니다.
            </p>
          </div>

          {/* 본문 단락 4 */}
          <p className="refd-body refd-body--gap40">
            특히 지난해 산업안전보건법 개정에 따라 의무화된{" "}
            <strong className="em-blue">
              폭염 관련 근로자 보건조치 이행을 위한 솔루션도 완벽하게 갖췄다는 점에서 호평
            </strong>{" "}
            받고 있습니다.
          </p>

          {/* 마무리 문구(중앙) */}
          <p className="refd-closing">
            [ 더욱 안전하고 규정을 준수하는{" "}
            <span className="em-orange">건설현장을 위한 필수 솔루션</span> 지금 만나보세요! ]
          </p>

          {/* 하단 구성도 — 라인 박스 안에 배치(저온저장창고 페이지와 동일 형식) */}
          <div className="refd-figbox refd-figbox--roomy">
            <img
              src="/assets/sub/reference_wview01.jpg"
              alt="포스코이앤씨 건설관리 솔루션 구성도 — 건설현장 실외공기측정기(OAQ-C300)·흑구/강수량 센서, 기상청 동네예보, 클라우드 데이터 처리, 기온 예측 AI 모델, 안전관리 웹페이지 연계"
            />
          </div>

          {/* 하단 네비게이션(이전/다음 + 썸네일) + 구분선 + 목록 버튼 */}
          <ReferenceNav current="/reference/weather/03" items={WEATHER_NAV_CASES} />
          <div className="refd-divider" aria-hidden="true" />
          <div className="refd-actions">
            <Link className="refd-btn-list" href="/reference/weather">
              목록
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
