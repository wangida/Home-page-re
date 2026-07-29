import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import AirRobotVideo from "@/components/sub/AirRobotVideo";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "에어로봇",
  description: "케이웨더 에어로봇 — 레일형 재난 사전감지 로봇.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function AirRobotPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_airrobot.jpg?v=4"
          title="재난 사전감지 로봇, 에어로봇"
          subtitle={"레일형 재난 사전감지 로봇\n에어로봇"}
        />

        <section className="robot-sec">
          <h2 className="robot-sec__title">로봇과 AI의 결합</h2>
          <p className="robot-sec__desc">
            에어로봇은 시설 내 천장 레일을 따라 이동하며, 케이웨더의 빅데이터·AI 기술과
            <br />
            클라이메이트의 로봇 기술을 결합해 재난을 사전감지·확산방지·예방하는 통합 솔루션을 제공합니다.
          </p>
          <div className="robot-sec__fig">
            <img
              src="/assets/sub/solution_robot01.jpg"
              width={1851}
              height={1074}
              alt="에어로봇 구성도 — Air Robot·Air TV(디지털 감지기술·환경센서·AI 모델·온디바이스 AI)와 측정기, 레일 및 설비·관제·플랫폼 연계"
            />
          </div>
        </section>

        <section className="robot-nn">
          <h2 className="robot-nn__title">감시 → 판단 → 대응, AI 융복합 신경망 기술</h2>
          <p className="robot-nn__lead">
            영상·환경 데이터 100만 건 이상을 학습한 AI 신경망이 사고 발생 위험도를 실시간으로 판단합니다.
          </p>
          <div className="robot-nn__body">
            <div className="robot-nn__media">
              <img
                src="/assets/sub/solution_robot02.jpg"
                width={740}
                height={768}
                alt="에어로봇 본체 — 좌우 360° 감시 카메라와 환경센서 탑재"
              />
            </div>
            <ol className="robot-steps">
              <li className="robot-step">
                <span className="robot-step__num" aria-hidden="true">01</span>
                <div className="robot-step__text">
                  <h3 className="robot-step__title">360° 감시</h3>
                  <p className="robot-step__desc">
                    영상·열화상 카메라가 좌우 360°를 감시하고, 환경센서가 온습도 · 산소 이산화탄소를 실시간 수집합니다.
                  </p>
                </div>
              </li>
              <li className="robot-step">
                <span className="robot-step__num" aria-hidden="true">02</span>
                <div className="robot-step__text">
                  <h3 className="robot-step__title">AI 위험도 판단</h3>
                  <p className="robot-step__desc">
                    AI 융복합 신경망이 영상·환경 데이터를 분석해 사고 발생 위험도를 사전에 판단합니다.
                  </p>
                </div>
              </li>
              <li className="robot-step">
                <span className="robot-step__num" aria-hidden="true">03</span>
                <div className="robot-step__text">
                  <h3 className="robot-step__title">즉각 대응</h3>
                  <p className="robot-step__desc">
                    통합관제시스템이 관제실·소방기관에 경고·신고를 진행해 초동 대응이 이뤄지도록 합니다.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="robot-sites">
          <h2 className="robot-sites__title">사람이 닿기 어려운 곳부터, 국방 현장까지</h2>
          <p className="robot-sites__lead">
            공공시설, 산업 현장, 국방시설 등 24시간 감시가 필요한 다양한 공간에 적용됩니다.
          </p>
          <div className="robot-sites__grid">
            <figure className="robot-site">
              <span className="robot-site__thumb">
                <img src="/assets/sub/solution_robot03.jpg" alt="공공시설 현장 — 터널" />
              </span>
              <figcaption className="robot-site__cap">[ 공공시설 ]</figcaption>
            </figure>
            <figure className="robot-site">
              <span className="robot-site__thumb">
                <img src="/assets/sub/solution_robot04.jpg" alt="산업시설 현장 — 생산 라인" />
              </span>
              <figcaption className="robot-site__cap">[ 산업시설 ]</figcaption>
            </figure>
            <figure className="robot-site">
              <span className="robot-site__thumb">
                <img src="/assets/sub/solution_robot05.jpg" alt="국방시설 현장" />
              </span>
              <figcaption className="robot-site__cap">[ 국방시설 ]</figcaption>
            </figure>
          </div>
        </section>

        <section className="robot-movie">
          <h2 className="robot-movie__title">에어로봇 소개 영상</h2>
          <AirRobotVideo />
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
