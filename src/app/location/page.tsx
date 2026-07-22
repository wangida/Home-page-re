import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";
import "@/components/sub/location.css";

export const metadata: Metadata = {
  title: "오시는길",
  description:
    "케이웨더(주) 오시는길 — 서울특별시 구로구 디지털로26길 5 에이스하이엔드타워 1차 4층. 대중교통·자가용 안내.",
};

const MAP_QUERY = "서울특별시 구로구 디지털로26길 5 에이스하이엔드타워 1차";

export default function LocationPage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_location.jpg"
          title="오시는길"
          subtitle={"대중교통부터 자가용까지, 가장 빠른 방문 경로\n주차 · 노선 · 위치 정보 모두 확인"}
        />

        <article className="loc">
          {/* 상단 지도 — 구글지도 인터랙티브 임베드 */}
          <div className="loc__map">
            <iframe
              title="케이웨더(주) 위치 지도"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&hl=ko&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* 회사 정보 */}
          <div className="loc__row">
            <p className="loc__label">케이웨더(주)</p>
            <div className="loc__body">
              <p>
                <strong>주소</strong> 서울특별시 구로구 디지털로26길 5 에이스하이엔드타워 1차 4층
              </p>
              <p>
                <strong>대표전화</strong> 02-360-2200 <strong>팩스</strong> 02-360-2288{" "}
                <strong>이메일</strong> khelp@kweather.co.kr
              </p>
            </div>
          </div>

          {/* 위치 설명 */}
          <div className="loc__row">
            <p className="loc__label">위치설명</p>
            <div className="loc__body">
              <div className="loc__group">
                <p className="loc__sub">대중교통 이용</p>
                <ul className="loc__list">
                  <li>
                    1. 구로디지털단지역(2호선) 1번출구 - 환승센터 버스정류장 (5616버스) 승차 &gt; 만민중앙교회 하차
                  </li>
                  <li>
                    2. 구로디지털단지역(2호선) 1번출구 50m도보 - 파리바게뜨 앞 버스정류장 (5536, 5616버스) 승차 - 만민중앙교회 하차
                  </li>
                  <li>3. 남구로역(7호선) 2번출구 직진 도보 15분 소요</li>
                </ul>
              </div>

              <div className="loc__group">
                <p className="loc__sub">자가용 이용</p>
                <ul className="loc__list">
                  <li>1. 네비게이션에 ‘에이스하이엔드타워 1차’ 입력</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
