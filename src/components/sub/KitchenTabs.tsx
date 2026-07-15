"use client";

import { useState } from "react";

const TABS = ["조리흄 측정기", "조리흄 중앙제어", "조리흄 자동제어", "급배기 시스템"] as const;

export default function KitchenTabs() {
  /* 급배기 시스템만 콘텐츠 확정 — 나머지 탭 확정 시 기본값 0으로 변경 */
  const [active, setActive] = useState(3);

  return (
    <>
      <div className="mnt-steps mnt-steps--4" role="tablist" aria-label="조리실 자동제어 솔루션 구성 선택">
        {TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`mnt-steps__btn ${i === active ? "is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="kitchen-panel" role="tabpanel" key={active}>
        {active === 3 ? (
          <>
            <h2 className="kitchen-panel__title">퓨리솔루션 급배기 시스템</h2>
            <p className="kitchen-panel__desc">
              <strong className="em-blue">조리실 자동제어 솔루션과 완벽 호환</strong>되는
              퓨리솔루션의 급배기 시스템은 고효율 EC 모터 및 팬과
              <br />
              프리필터, 집진필터, 데미스터 필터 등이 탑재돼{" "}
              <strong className="em-blue">실내 조리흄 배출과 신선한 외기 공급을 동시에</strong>{" "}
              실현합니다
            </p>

            <div className="cook-detail">
              <section className="cook-feat">
                <div className="cook-feat__text">
                  <h3 className="cook-sec__head">특장점</h3>
                  <ul className="cook-feat__list">
                    <li>케이웨더 조리실 자동제어 솔루션과 완벽 호환을 통한 AI 자동운전 가능</li>
                    <li>고효율 EC 모터 및 FAN을 적용하여 저소음·고정압·고풍량 성능 확보</li>
                    <li>Body on Frame 설계를 통한 우수한 강성 및 기밀성으로 진동과 소음을 크게 저감</li>
                    <li>프리필터, 집진필터, 데미스터 필터 내장으로 유해물질 배출 및 유입차단에 효과적</li>
                    <li>제품 양측면의 대형 점검도어로 필터교체 및 유지보수가 편리</li>
                    <li>IoT 자동점검 기능 및 필터교체 시기 알림 기능</li>
                  </ul>
                  <div className="cook-feat__btns">
                    <a
                      className="cook-btn cook-btn--line"
                      href="https://www.purisolution.co.kr/purisolution_brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      제품 카탈로그
                      <span className="cook-btn__ico" aria-hidden="true">↓</span>
                    </a>
                    <a
                      className="cook-btn cook-btn--dark"
                      href="https://www.purisolution.co.kr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      사이트 바로가기
                      <span className="cook-btn__ico" aria-hidden="true">›</span>
                    </a>
                  </div>
                </div>
                <div className="cook-feat__media">
                  <img
                    src="/assets/sub/subtop_cookimg01.png"
                    width={531}
                    height={632}
                    alt="퓨리솔루션 급배기 시스템 제품 이미지"
                  />
                </div>
              </section>

              <section className="cook-block">
                <h3 className="cook-sec__head">급배기 시스템 모델별 제원 및 사양</h3>
                <img
                  className="cook-block__img"
                  src="/assets/sub/subtop_cookimg02.jpg"
                  width={2049}
                  height={670}
                  alt="급배기 시스템 모델별(PS-10000SF~PS-45000SF) 정압대별 풍량·소비전력 제원표 및 성능 그래프"
                />
              </section>

              <section className="cook-block">
                <h3 className="cook-sec__head">공인 시험성적서</h3>
                <img
                  className="cook-block__img"
                  src="/assets/sub/subtop_cookimg03.jpg"
                  width={1667}
                  height={399}
                  alt="KTC 한국기계전자시험연구원 공인 시험성적서 6종"
                />
              </section>

              <section className="cook-partner">
                <div className="cook-partner__main">
                  <img
                    className="cook-partner__logo"
                    src="/assets/sub/subtop_cookimg04.png"
                    width={800}
                    height={600}
                    alt="PURISOLUTION 퓨리솔루션 로고"
                  />
                  <p className="cook-partner__txt">
                    퓨리솔루션은 케이웨더의 협력사로서
                    <br />
                    실내 공기질 혁신을 주도하는 기술 중심의 솔루션 기업입니다.
                  </p>
                </div>
                <ul className="cook-partner__info">
                  <li>
                    <svg className="cook-partner__ico" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    경기도 용인시 수지구 광교중앙로 296번길 10, 207호 (상현동)
                  </li>
                  <li>
                    <svg className="cook-partner__ico" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    031-547-9347
                  </li>
                  <li>
                    <svg className="cook-partner__ico" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                    </svg>
                    Fax. 031-216-5055
                  </li>
                  <li>
                    <svg className="cook-partner__ico" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    info@purisolution.co.kr
                  </li>
                </ul>
              </section>
            </div>
          </>
        ) : (
          /* 탭별 콘텐츠 준비 중 — 확정 후 교체 */
          <div aria-hidden="true" style={{ height: 400 }} />
        )}
      </div>
    </>
  );
}
