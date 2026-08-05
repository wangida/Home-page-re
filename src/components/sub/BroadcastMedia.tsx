/* 방송 컨텐츠 — 「기상방송 컨텐츠」 탭 본문 (Figma sub_기획_재작업 Frame 9).
   기존 방송 컨텐츠 페이지의 기상방송 컨텐츠·날씨환경청 섹션을 이관. */

import Icon from "@/components/Icon";

export default function BroadcastMedia() {
  return (
    <>
      {/* 기상방송 컨텐츠 */}
      <section className="broad-sec">
        <h2 className="broad-sec__title">기상방송 컨텐츠</h2>
        <p className="broad-sec__desc">
          독자적으로 생성한 기상데이터를 미디어 등의 방식으로 제공하는
          콘텐츠로, 방송사가 날씨방송을 위해 필요한 기상방송 장비와 각종 기상방송
          <br />데이터를 제공하고 있으며 직접 방송을 제작하기 어려운 방송사를
          위해서는 직접 기상방송 컨텐츠를 제작하여 VOD형태로 제공하고 있습니다.
        </p>
        <div className="broad-vod">
          <div className="broad-vod__group">
            <p className="broad-bar broad-bar--navy">맞춤형 기상 VOD 제작</p>
            <img
              className="broad-vod__img"
              src="/assets/sub/data_vod01.jpg"
              width={1400}
              height={950}
              alt="기온·강수 그래픽과 함께 진행하는 맞춤형 기상 VOD 제작 사례 화면 모음"
            />
          </div>
          <div className="broad-vod__group">
            <p className="broad-bar broad-bar--sky">
              케이웨더 예보를 방송하는 언론사 날씨방송
            </p>
            <img
              className="broad-vod__img"
              src="/assets/sub/data_vod02.jpg"
              width={1440}
              height={506}
              alt="케이웨더 예보를 방송하는 언론사 날씨방송 화면 모음"
            />
          </div>
        </div>
      </section>

      {/* 날씨환경청 */}
      <section className="broad-sec">
        <h2 className="broad-sec__title">기후분석 전문 미디어, 날씨환경청</h2>
        <p className="broad-sec__desc">
          날씨환경청은 기상 전문성을 갖춘 ‘방송예보관(BM)’이 주도하는
          날씨·환경 전문 유튜브 채널입니다. 단순 실황 중계를 넘어 기상현상의
          원인과
          <br />기후변화 과정을 깊이 있게 해설하여, 날씨에 민감한 시청자들의
          궁금증을 해소하고 기후변화에 대한 신속한 대비를 돕습니다.
        </p>
        <div className="broad-figs">
          <div className="broad-figs__item broad-figs__item--c broad-figs__item--cta">
            <img
              src="/assets/sub/data_broad06.jpg"
              alt="날씨·환경 전문 채널 ‘날씨환경청’ 채널 로고"
            />
            <a
              className="btn btn--ondark broad-go"
              href="https://www.youtube.com/@%EB%82%A0%EC%94%A8_%ED%99%98%EA%B2%BD%EC%B2%AD"
              target="_blank"
              rel="noopener noreferrer"
            >
              날씨환경청 바로가기 <Icon name="arrow" size={20} />
            </a>
          </div>
          <div className="broad-figs__item broad-figs__item--d">
            <img
              src="/assets/sub/data_broad08.jpg"
              alt="찬 북서풍과 따뜻한 남풍 유입을 화살표로 해설한 날씨환경청 기상 분석 화면"
            />
          </div>
        </div>
      </section>
    </>
  );
}
