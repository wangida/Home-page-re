import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "공기질 통합관리 | K-WEATHER",
  description: "케이웨더 공기질 통합관리 — 공간별 맞춤형 공기질 자동 제어 솔루션.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function AirAllPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_airall.jpg?v=2"
          title="공기질 통합관리"
          subtitle="공간별 맞춤형 공기질 자동 제어"
        />

        <section className="airall-sec">
          <h2 className="airall-sec__title">
            공간의 종류가 달라도, 공기를 다루는 원리는 하나입니다.
          </h2>
          <p className="airall-sec__lead">
            공기측정기로 공기질을 측정하고, AI로 오염정도를 판단하고, 중앙제어장치로 정화장치를 자동 제어합니다.
          </p>
          <p className="airall-sec__desc">
            케이웨더의 공기질 통합관리 솔루션은
            <br />
            공공 인프라부터 산업현장에 이르기까지 사람이 머무는 모든 공간에 동일한 구조로 적용됩니다.
          </p>

          <ol className="airall-flow">
            <li className="airall-flow__item">
              <span className="airall-flow__badge">01. SENSE</span>
              <strong className="airall-flow__name">환경센서</strong>
              <p className="airall-flow__txt">
                공기질·온습도·가스 등 공간의 상태를 실시간으로 측정
              </p>
            </li>
            <li className="airall-flow__item">
              <span className="airall-flow__badge">02. CONTROL</span>
              <strong className="airall-flow__name">중앙제어장치</strong>
              <p className="airall-flow__txt">
                냉난방·환기·루프·조명 등 설비를 자동/원격으로 제어
              </p>
            </li>
            <li className="airall-flow__item">
              <span className="airall-flow__badge">03. ANALYZE</span>
              <strong className="airall-flow__name">AI 보정·예측</strong>
              <p className="airall-flow__txt">
                측정값 보정 및 상태 예측 모델(LSTM·GRU 등)로 데이터 정확도 강화
              </p>
            </li>
            <li className="airall-flow__item">
              <span className="airall-flow__badge">04. SERVICE</span>
              <strong className="airall-flow__name">빅데이터 플랫폼</strong>
              <p className="airall-flow__txt">
                웹·모바일로 실시간 모니터링, 통계, 리포트 제공
              </p>
            </li>
          </ol>

          <div className="airall-sec__fig">
            <img
              src="/assets/sub/solution_airall01.jpg?v=2"
              width={1642}
              height={1074}
              alt="공기질 통합관리 구성도 — 공기측정기·냉난방기·루프시스템·공기정화기·자동문·LED조명을 중앙제어장치로 통합하고 빅데이터 플랫폼 센터·통합제어관리서비스와 연계"
            />
          </div>
        </section>

        <section className="airall-sec">
          <h2 className="airall-sec__title">공공·산업 현장 공기질 자동제어</h2>
          <p className="airall-sec__lead">
            공공장소, 정류장, 산업현장에 환경센서를 적용해 공기질을 자동 제어하고 미세먼지·폭염 등 유해환경에 대응합니다.
          </p>

          {/* 현장 썸네일 — 이미지 확정 전 자리(placeholder)만 구현 */}
          <div className="airall-sites">
            <div className="airall-sites__group airall-sites__group--wide">
              <h3 className="airall-sites__cat">[ 스마트 파고라 ]</h3>
              <div className="airall-sites__grid">
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum01.jpg" alt="서초구(공원녹지과) 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">서초구(공원녹지과)</figcaption>
                </figure>
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum02.jpg" alt="광명시(푸르지오) 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">광명시(푸르지오)</figcaption>
                </figure>
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum03.jpg" alt="포항시(철길숲) 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">포항시(철길숲)</figcaption>
                </figure>
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum04.jpg" alt="광명시(자이 더샵 포레나) 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">광명시(자이 더샵 포레나)</figcaption>
                </figure>
              </div>
            </div>
            <div className="airall-sites__group">
              <h3 className="airall-sites__cat">[ 스마트 쉘터 ]</h3>
              <div className="airall-sites__grid">
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum05.jpg" alt="강릉시 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">강릉시</figcaption>
                </figure>
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum06.jpg" alt="영천시 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">영천시</figcaption>
                </figure>
              </div>
            </div>
            <div className="airall-sites__group">
              <h3 className="airall-sites__cat">[ 산업 현장 ]</h3>
              <div className="airall-sites__grid">
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum07.jpg" alt="LH 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">LH</figcaption>
                </figure>
                <figure className="airall-sites__item">
                  <span className="airall-sites__thumb">
                    <img src="/assets/sub/solution_cook_thum08.jpg" alt="STX 현장" />
                  </span>
                  <figcaption className="airall-sites__cap">STX</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
