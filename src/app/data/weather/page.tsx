import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import ObservationData from "@/components/sub/ObservationData";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "관측 데이터",
  description: "케이웨더 기상 데이터 — 관측·예측 기반의 정밀 기상 데이터 서비스.",
};

/* ?tab=aifactory 로 들어온 요청은 서버에서부터 세 번째 탭을 그려서 보낸다.
   예전처럼 클라이언트에서 탭을 바꾸면 첫 탭 HTML 이 먼저 그려진 뒤 하이드레이션
   후에야 전환돼 '첫 탭 들렀다 가는' 깜빡임이 보인다(히어로 바로가기는 <a> 라
   클라이언트 라우팅이 아니라 실제 페이지 로드다).
   ⚠️ searchParams 는 request-time API 라 이 라우트는 정적 프리렌더에서 빠지고
   요청마다 렌더된다. 이 페이지는 데이터 페칭이 없어 비용은 렌더 한 번뿐이다. */
export default async function WeatherDataPage(
  props: PageProps<"/data/weather">,
) {
  const { tab } = await props.searchParams;
  const initialTab = tab === "aifactory" ? 2 : 0;

  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/data_weather.jpg"
          title="기상데이터"
          subtitle={"기상데이터를 기반으로 한 경영컨설팅과 일기예보,\n각종지수를 활용한 케이웨더의 다양한 기상 콘텐츠"}
        />

        {/* 사업 구조 도입부(.wd-intro)는 ObservationData 내부로 이동
            — 표 다음, 「특별한 이유」 밴드 앞에서 두 탭 공통으로 노출 */}
        <ObservationData initialTab={initialTab} />
      </main>
      <Footer />
    </>
  );
}
