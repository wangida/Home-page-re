import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import MaintenanceSteps from "@/components/sub/MaintenanceSteps";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "유지관리 서비스",
  description: "쾌적한 실내 공기질을 지속적으로 관리하는 케이웨더 유지관리 서비스.",
};

export default function ServiceMaintenancePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_service03.jpg"
          title="유지관리 서비스"
          subtitle={"전문 공기지능 컨설턴트가 환기장치의 성능을\n점검하고 지속적으로 관리하는 케이웨더 유지관리 서비스"}
        />

        {/* 인트로 — 서비스 소개 */}
        <section className="mnt-intro">
          <h2 className="mnt-intro__title">
            <span className="accent">매일 생활하는 공간의 환기장치,</span> 제대로 사용하고 계신가요?
          </h2>
          <p className="mnt-intro__desc">
            {"케이웨더의 유지관리 서비스는 전문교육을 받은 공기지능 컨설턴트가 직접 방문하여 생활공간 내\n공기상태를 과학적으로 측정 및 분석해 최적의 개선 솔루션을 제공하고\n지속적으로 공기질을 관리하는 지능형 서비스입니다."}
          </p>
        </section>

        {/* 3단계 프로세스 — 섹션 헤딩 */}
        <h2 className="mnt-step-head">
          케이웨더 유지관리 서비스는{" "}
          <span className="accent">3단계 과정</span>으로
          <br />
          <span className="accent">실내 공기질을 관리합니다.</span>
        </h2>

        {/* 3단계 탭 + 3단계 전용 기술력 */}
        <MaintenanceSteps />

        {/* 인증/시험성적 — 공통 하단 섹션 */}
        <section className="mnt-award">
          <h2 className="mnt-award__title">
            <span className="accent">신뢰할 수 있는</span> 케이웨더 서비스
          </h2>

          <img
            className="mnt-award__strip"
            src="/assets/sub/service_award01.jpg?v=2"
            alt="케이웨더 환기필터 시험성적서"
          />

          <p className="mnt-award__copy">
            케이웨더 환기필터는{" "}
            <span className="accent">성능 시험 및 유해물질 시험을 통과</span>한 검증된
            제품으로,{" "}
            <span className="accent">부유 미생물과 세균, 바이러스를 현저하게 제거</span>
            합니다.
          </p>

          <div className="mnt-award__proof">
            <img
              className="mnt-award__proof-top"
              src="/assets/sub/service_award02_01.jpg?v=2"
              alt="시험성적서"
            />
            <div className="mnt-award__proof-bottom">
              <img src="/assets/sub/service_award02_02.jpg?v=2" alt="시험성적서" />
              <img src="/assets/sub/service_award02_03.jpg?v=2" alt="시험성적서" />
            </div>
            <ul className="mnt-award__stats">
              {[
                "부유 미생물 감소율 99.9%",
                "부유 바이러스 감소율 99.9%",
                "부유 세균 저감율 99.7%",
                "부유 바이러스 저감율 98.6%",
              ].map((s) => (
                <li className="mnt-award__stat" key={s}>
                  <svg
                    className="mnt-award__check"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="12" fill="#2c54d4" />
                    <path
                      d="M7 12.5l3 3 7-7"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
