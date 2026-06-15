import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "AI 기상예보 | K-WEATHER",
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
          title="AI 기상예보"
          subtitle={"인공지능이 여는 기상예측의 미래,\n케이웨더의 딥러닝 기반 차세대 AI 기상예보"}
        />

        <section className="ai-block">
          <h2 className="company-intro__title">
            하이브리드 전지구 예보 및 한반도 초고해상도 다운스케일링
          </h2>
          <p className="company-intro__desc">
            {
              "케이웨더 AI 기상예보는 전통적 수치모델과 딥러닝 기술을 결합하여 정확도를 더욱 극대화합니다.\n\n또한 전세계를 100만 개 이상의 격자로 세분화하여 정밀한 날씨를 예측할 뿐만 아니라,\n한반도의 복잡한 지형과 기후 특성을 반영하여 최대 1.5km 격자 단위까지 분석하는\n국내에 최적화된 초고해상도 다운스케일링을 제공합니다."
            }
          </p>
          <img
            className="ai-fig"
            src="/assets/sub/img_ai01.jpg"
            width={1449}
            height={625}
            alt="KIM 전지구 초기장 재격자화 → FourCastNet-3 전지구 예측 → AI Interpolation → CorrDiff로 이어지는 하이브리드 AI 기상예보 처리 과정"
          />
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
          <img
            className="ai-fig"
            src="/assets/sub/img_ai02.jpg"
            width={1280}
            height={512}
            alt="입력 데이터(수치예보 초기장·위성·레이더·IoT·기상 관측)를 AI 기상예측 모델로 학습·융합하여 60일 장기 예보를 생산하는 과정"
          />
        </section>

        <section className="ai-block">
          <img
            className="ai-fig"
            src="/assets/sub/img_ai03.jpg"
            width={1309}
            height={672}
            alt="한반도 초고해상도 다운스케일링 결과 예시"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
