import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SubHero from "@/components/sub/SubHero";
import "@/components/sub/sub.css";

export const metadata: Metadata = {
  title: "저온저장창고 스마트 환기 솔루션",
  description:
    "케이웨더 저온저장창고 스마트 환기 솔루션 — 가스 농도까지 통제하는 한 단계 진화한 공기케어.",
};

/* 본문 디자인 확정 전 — 상단 비주얼만 우선 구현 */
export default function ColdStoragePage() {
  return (
    <>
      <SmoothScroll />
      <Header solid />
      <main>
        <SubHero
          image="/assets/sub/subtop_coldstorage.jpg?v=2"
          title="저온저장창고 스마트 환기 솔루션"
          subtitle={"가스 농도까지 통제하는\n한 단계 진화한 공기케어"}
        />

        <section className="cold-sec">
          <h2 className="cold-sec__title">왜 가스 농도 관리가 필요한가</h2>
          <p className="cold-sec__desc">
            사과·배 등은 수확 후에도 호흡합니다.
            <br />
            이산화탄소와 에틸렌 농도를 제어하지 않으면, 숙성이 빨라지고 유통기한 내 폐기 손실로 이어집니다.
          </p>
          <div className="cold-compare">
            <div className="cold-compare__col cold-compare__col--before">
              <strong className="cold-compare__label">기존 일반 대기 조건</strong>
              <p className="cold-compare__txt">산소 21% 환경 그대로 방치 — 세포 노화 가속화</p>
            </div>
            <div className="cold-compare__col cold-compare__col--after">
              <strong className="cold-compare__label">IAQ 기법 적용</strong>
              <p className="cold-compare__txt">이산화탄소 억제 및 에틸렌 농도 최적 제어</p>
            </div>
          </div>
        </section>

        <section className="cold-sec">
          <h2 className="cold-sec__title">AI 환경센서로 관리하는 저온 저장창고</h2>
          <p className="cold-sec__desc">
            과채류 보관 시 방출되는 성숙 호르몬 에틸렌과 호흡작용으로 발생하는 이산화탄소를 AI 환경센서로 감지해,
            <br />
            저장작물의 성숙과 부패를 억제합니다.
          </p>
          <div className="cold-sec__fig">
            <img
              src="/assets/sub/subtop_coldimg01.jpg?v=2"
              width={1595}
              height={849}
              alt="저온저장창고 내부·외부 구성도 — 핵심 측정요소(에틸렌·이산화탄소·산소·암모니아·온습도)와 AI 환기장치·환경센서·LTE 라우터·CLIMATE 플랫폼 연계"
            />
          </div>
        </section>

        <section className="cold-sec cold-sec--tight">
          <h2 className="cold-sec__title">저온·다습 환경에서 검증된 정확도</h2>
          <p className="cold-sec__desc">
            0°C, 90%RH의 저온 다습 환경 실증 테스트에서도 안정적인 가스 지시 성능을 확인했습니다.
          </p>
          <ul className="cold-stats">
            <li className="cold-stats__card">
              <strong className="cold-stats__num">±1.5%</strong>
              <span className="cold-stats__cap">미만 측정 오차율</span>
            </li>
            <li className="cold-stats__card">
              <strong className="cold-stats__num">0°C / 90%</strong>
              <span className="cold-stats__cap">저온다습(RH) 실증 환경</span>
            </li>
            <li className="cold-stats__card">
              <strong className="cold-stats__num">PASS</strong>
              <span className="cold-stats__cap">데이터 품질인증 통과</span>
            </li>
          </ul>
        </section>

        <section className="cold-sec cold-sec--tight">
          <h2 className="cold-sec__title">창고 규모에 맞는 2가지 모델</h2>
          <p className="cold-sec__desc">
            두 모델 모두 같은 핵심 기술을 갖추고 있으며, 창고 규모에 맞는 용량으로만 구분됩니다.
          </p>

          <div className="cold-prod">
            <figure className="cold-prod__card">
              <div className="cold-prod__img cold-prod__img--sm">
                <img src="/assets/sub/KW_25.png?v=3" alt="KW-E250CB1 저온저장창고용 환기장치 제품 이미지" />
              </div>
              <figcaption className="cold-prod__foot">
                <span className="cold-prod__tag">25평형</span>
                <div className="cold-prod__namerow">
                  <strong className="cold-prod__name">KW-E250CB1</strong>
                  <span className="cold-prod__desc">소형 저온저장고용</span>
                </div>
              </figcaption>
            </figure>
            <figure className="cold-prod__card">
              <div className="cold-prod__img">
                <img src="/assets/sub/KW_50.png?v=2" alt="KW-S1000CB1 저온저장창고용 환기장치 제품 이미지" />
              </div>
              <figcaption className="cold-prod__foot">
                <span className="cold-prod__tag">50평형 이상</span>
                <div className="cold-prod__namerow">
                  <strong className="cold-prod__name">KW-S1000CB1</strong>
                  <span className="cold-prod__desc">대형 저장·유통 시설용</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <p className="cold-opt-label">
            * 옵션: OAQ(실외공기측정기) 연동 · Air365 플랫폼 연동
          </p>

          <ul className="cold-feats">
            <li className="cold-feat">
              <span className="cold-feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
                </svg>
              </span>
              <h3 className="cold-feat__title">공기지능 모드</h3>
              <p className="cold-feat__desc">실내외 공기질 빅데이터 기반 자동운전으로 전기료·탄소배출량 감소</p>
            </li>
            <li className="cold-feat">
              <span className="cold-feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" />
                  <line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
                  <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
                </svg>
              </span>
              <h3 className="cold-feat__title">공간별·사용유형별 최적 환기제어 알고리즘</h3>
              <p className="cold-feat__desc">선제적 대응으로 최적 공기상태 유지</p>
            </li>
            <li className="cold-feat">
              <span className="cold-feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
                  <path d="M12 12v.01" />
                </svg>
              </span>
              <h3 className="cold-feat__title">BLDC Blower Motor</h3>
              <p className="cold-feat__desc">고효율·저소음 정풍량 운전으로 안정적인 환기 성능 유지</p>
            </li>
            <li className="cold-feat">
              <span className="cold-feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </span>
              <h3 className="cold-feat__title">H13등급 HEPA 필터(50mm)</h3>
              <p className="cold-feat__desc">초미세먼지 99.9% 차단</p>
            </li>
            <li className="cold-feat">
              <span className="cold-feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </span>
              <h3 className="cold-feat__title">친환경 EPP 소재 케이스</h3>
              <p className="cold-feat__desc">저소음·고단열, IAQ(실내공기측정기) 연동</p>
            </li>
            <li className="cold-feat">
              <span className="cold-feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </span>
              <h3 className="cold-feat__title">특허기술</h3>
              <p className="cold-feat__desc">온도차 대비 내부결로 차단 건조기술</p>
            </li>
          </ul>
        </section>

        {/* 푸터 앞 하단 여백 */}
        <div aria-hidden="true" style={{ height: 300 }} />
      </main>
      <Footer />
    </>
  );
}
