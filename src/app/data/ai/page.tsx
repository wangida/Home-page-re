import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import PrivateForecast from "@/components/sub/PrivateForecast";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "AI 기상예보",
  description: "케이웨더 AI 기상예보 — 인공지능 기반의 고정밀 기상 예측 서비스.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function AiForecastPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_AI03.jpg"
          title="기상예보"
          subtitle={"인공지능이 여는 기상예측의 미래,\n케이웨더의 딥러닝 기반 차세대 AI 기상예보"}
        />

        <section className="ai-block">
          <h2 className="company-intro__title">
            초고속 연산 및 압도적인 비용·에너지 절감
          </h2>
          <p className="company-intro__desc">
            {
              "기존 수치예보모델 대비 최대 10,000배 빠른 예보 속도를 자랑하며, 막대한 전력을 소모하는\n슈퍼컴퓨터 대신 GPU 서버를 활용함으로써 비용과 에너지를 획기적으로 절감합니다."
            }
          </p>
          <div className="ai-compare">
            {/* 헤더 행 */}
            <div className="ai-compare__head ai-compare__head--num">수치예보 모델</div>
            <div className="ai-compare__axis" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="#6ea8e6" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
            <div className="ai-compare__head ai-compare__head--ai">기상 AI 예보 모델</div>

            {/* 운영 인프라 및 비용 */}
            <div className="ai-compare__cell ai-compare__cell--num">
              <span className="ai-compare__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="8" rx="2" />
                  <rect x="2" y="13" width="20" height="8" rx="2" />
                  <line x1="6" y1="7" x2="6.01" y2="7" />
                  <line x1="6" y1="17" x2="6.01" y2="17" />
                </svg>
              </span>
              <p>슈퍼컴퓨터 기반으로<br />운영 비용이 <b className="neg">매우 높음</b></p>
            </div>
            <div className="ai-compare__label">운영 인프라 및 비용</div>
            <div className="ai-compare__cell ai-compare__cell--ai">
              <span className="ai-compare__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
                  <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
                </svg>
              </span>
              <p><b className="pos">GPU 기반</b>으로<br />운영 비용이 <b className="pos">낮음</b></p>
            </div>

            {/* 데이터 생성 속도 */}
            <div className="ai-compare__cell ai-compare__cell--num">
              <span className="ai-compare__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 22h14" /><path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
              </span>
              <p>모델 데이터 생성 속도가<br /><b className="neg">수 시간 단위로 늦음</b></p>
            </div>
            <div className="ai-compare__label">데이터 생성 속도</div>
            <div className="ai-compare__cell ai-compare__cell--ai">
              <span className="ai-compare__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <p className="pos">모델 데이터 생성 속도가<br />수 분 단위로 빠름</p>
            </div>

            {/* 확장성 및 유연성 */}
            <div className="ai-compare__cell ai-compare__cell--num">
              <span className="ai-compare__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </span>
              <p>물리 법칙 기반으로<br />시스템 모델 <b className="neg">확장이 어려움</b></p>
            </div>
            <div className="ai-compare__label">확장성 및 유연성</div>
            <div className="ai-compare__cell ai-compare__cell--ai">
              <span className="ai-compare__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </span>
              <p><b className="pos">데이터 기반</b>으로<br />시스템 모델 <b className="pos">확장이 매우 용이</b></p>
            </div>

            {/* 모델 종류 */}
            <div className="ai-compare__cell ai-compare__cell--num ai-compare__cell--plain">
              <p>ECMWF(유럽)&nbsp; GFS(미국)<br />UM(영국) KIM(한국)</p>
            </div>
            <div className="ai-compare__label">모델 종류</div>
            <div className="ai-compare__cell ai-compare__cell--ai ai-compare__cell--plain">
              <p>FourcastNet3(NVIDIA)&nbsp; GenCast(Google)<br />Aurora(MS)&nbsp; AIFS(ECMWF)</p>
            </div>
          </div>
        </section>

        <section className="ai-block">
          <h2 className="company-intro__title">
            신뢰성을 높이는 앙상블 및 중·장기 예보 생산
          </h2>
          <p className="company-intro__desc">
            {
              "기상 예측의 불확실성을 해소하기 위해 수십~수백 가지의 예측 시나리오를 동시에 생성하며,\n최대 60일까지의 장기 예측장을 안정적으로 산출하여 기상 관련 리스크 관리를 지원합니다."
            }
          </p>
          <p className="ai-fig__cap">
            다양한 데이터를 학습·융합하여 한반도 특성이 반영된 장기 예보 생성
          </p>
          <img
            className="ai-fig"
            src="/assets/sub/data_ai02_re.jpg"
            width={1280}
            height={512}
            alt="입력 데이터(수치예보 초기장·위성·레이더·IoT·기상 관측)를 AI 기상예측 모델로 학습·융합하여 60일 장기 예보를 생산하는 과정"
          />
        </section>

        <section className="ai-block">
          <h2 className="company-intro__title">
            하이브리드 전지구 예보 및 한반도 초고해상도 다운스케일링
          </h2>
          <p className="company-intro__desc">
            {
              "케이웨더 AI 기상예보는 전통적 수치모델과 딥러닝 기술을 결합하여 정확도를 더욱 극대화합니다.\n\n또한 전세계를 100만 개 이상의 격자로 세분화하여 정밀한 날씨를 예측할 뿐만 아니라, 한반도의 복잡한 지형과 기후 특성을 반영하여\n최대 1.5km 격자 단위까지 분석하는 국내에 최적화된 초고해상도 예측장을 제공합니다."
            }
          </p>
          <img
            className="ai-fig"
            src="/assets/sub/img_ai03_re.jpg?v=3"
            width={1440}
            height={753}
            alt="KIM 전지구 초기장 재격자화 → FourCastNet-3 전지구 예측 → AI Interpolation → CorrDiff로 이어지는 하이브리드 AI 기상예보 처리 과정"
          />
        </section>

        {/* 민간예보 서비스 — 기존 기상 데이터 탭에서 이관 */}
        <PrivateForecast />

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 100 }} />
      </main>
      <Footer />
    </>
  );
}
