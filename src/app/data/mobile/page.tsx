import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "모바일 정보 | K-WEATHER",
  description: "케이웨더 모바일 정보 — 모바일 환경에 최적화된 기상·공기 정보 서비스.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function MobilePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_mobile.jpg"
          title="모바일 정보"
          subtitle={"동별 맞춤 날씨와 미세먼지 정보를 실시간으로 제공하는\n케이웨더 대표 기상 애플리케이션"}
        />
        <section className="mobile-points">
          <article className="mobile-point">
            <p className="mobile-point__no">Point 01</p>
            <h3 className="mobile-point__title">
              시간 단위로 보는 <b>3일 상세예보</b>
            </h3>
            <p className="mobile-point__desc">
              나절별·시간별 기온, 강수, 습도, 바람까지 한눈에 확인
            </p>
            <img
              className="mobile-point__shot"
              src="/assets/sub/data_mobile01_re.png?v=2"
              width={434}
              height={651}
              alt="구로3동 3일예보를 보여주는 케이웨더 모바일 앱 화면"
            />
          </article>

          <article className="mobile-point">
            <p className="mobile-point__no">Point 02</p>
            <h3 className="mobile-point__title">
              자주 찾는 <b>관심지역 등록</b>
            </h3>
            <p className="mobile-point__desc">
              자주 확인하는 동네를 등록해 원하는 지역의 날씨를 한 번에 확인
            </p>
            <img
              className="mobile-point__shot"
              src="/assets/sub/data_mobile02_re.png"
              width={447}
              height={651}
              alt="개인 일정에 맞춘 전담 예보관의 날씨 브리핑을 제공하는 모바일 앱 화면"
            />
          </article>

          <article className="mobile-point">
            <p className="mobile-point__no">Point 03</p>
            <h3 className="mobile-point__title">
              한 눈에 보는 <b>날씨지도</b>
            </h3>
            <p className="mobile-point__desc">
              동별 미세먼지 실황부터 레이더 영상까지 지도 형태로 시각화
            </p>
            <img
              className="mobile-point__shot"
              src="/assets/sub/data_mobile03_re.png"
              width={447}
              height={651}
              alt="동별 미세먼지 실황과 레이더 영상을 지도로 시각화한 모바일 앱 날씨지도 화면"
            />
          </article>

          <article className="mobile-point">
            <p className="mobile-point__no">Point 04</p>
            <h3 className="mobile-point__title">
              기상 변화에 따른 <b>푸시 알림</b>
            </h3>
            <p className="mobile-point__desc">
              호우, 태풍, 폭염 등 사용자가 원하는 기상 정보에 대한 푸시 알림 제공
            </p>
            <img
              className="mobile-point__shot"
              src="/assets/sub/data_mobile04_re.png"
              width={447}
              height={651}
              alt="호우·태풍·폭염 등 기상 변화에 따른 푸시 알림을 보여주는 모바일 앱 화면"
            />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
