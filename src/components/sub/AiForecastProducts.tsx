/* 기상데이터 4번째 탭 — AI 기상예보 상품.
   구성은 앞 탭(날씨 AI 팩토리의 개요, AiFactory)과 동일하게
   리드 타이틀 → 설명 → 본문 순서로 맞춘다. */

/* https://youtu.be/L1tMwLpupbI */
const VIDEO_ID = "L1tMwLpupbI";

/* 영역(전지구·한반도) 머리말 아이콘 — 본문 다른 곳(.ai-compare)과 같은 인라인 SVG */
const ICONS: Record<string, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  map: (
    <>
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </>
  ),
};

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}

/* 상품 정보 상세 — 순번 1~10.
   데스크탑 표와 모바일 카드가 같은 데이터를 쓴다(따로 적어 두면 한쪽만 고치게 된다).
   link 는 케이웨더 AI 맵(ai.kweathermap.com)의 상품별 페이지. */
type Product = {
  no: number;
  name: string;
  model: string;
  input: string;
  area: string;
  /* 표에서 줄을 나눠 보여주는 항목이라 줄 단위로 둔다 */
  output: string[];
  period: string;
  interval: string;
  resolution: string;
  link: string;
};

const OUT_GLOBAL_60 = ["바람, 기압, 기온, 강수,", "비습 등 72개 변수"];
const OUT_GLOBAL_15 = ["바람, 기압, 기온, 비습,", "지면기압, 해수면온도,", "강수 등 75개 변수"];
const OUT_KOREA = ["지상기온, 지상바람,", "강수 이슬점온도, 체감온도"];
const OUT_RADAR = ["레이더, 위성"];

const PRODUCTS: Product[] = [
  { no: 1, name: "NVIDIA 60일 전지구 예보 (GFS)", model: "FourCastNet3", input: "GFS 초기장", area: "전지구", output: OUT_GLOBAL_60, period: "60일", interval: "6시간", resolution: "25km", link: "https://ai.kweathermap.com/5" },
  { no: 2, name: "NVIDIA 60일 전지구 예보 (KIM)", model: "FourCastNet3", input: "KIM 초기장", area: "전지구", output: OUT_GLOBAL_60, period: "60일", interval: "6시간", resolution: "25km", link: "https://ai.kweathermap.com/6" },
  { no: 3, name: "NVIDIA 15일 전지구 예보 (GFS)", model: "Atlas", input: "GFS 초기장, 예측장", area: "전지구", output: OUT_GLOBAL_15, period: "15일", interval: "6시간", resolution: "25km", link: "https://ai.kweathermap.com/9" },
  { no: 4, name: "NVIDIA 15일 전지구 예보 (KIM)", model: "Atlas", input: "KIM 초기장, 예측장", area: "전지구", output: OUT_GLOBAL_15, period: "15일", interval: "6시간", resolution: "25km", link: "https://ai.kweathermap.com/10" },
  { no: 5, name: "NVIDIA 3일 한반도 초정밀 예보 (FCN3-GFS)", model: "CorrDiff", input: "FCN3 예측장 (GFS)", area: "한반도", output: OUT_KOREA, period: "3일", interval: "1시간", resolution: "1.5km", link: "https://ai.kweathermap.com/7" },
  { no: 6, name: "NVIDIA 3일 한반도 초정밀 예보 (FCN3-KIM)", model: "CorrDiff", input: "FCN3 예측장 (KIM)", area: "한반도", output: OUT_KOREA, period: "3일", interval: "1시간", resolution: "1.5km", link: "https://ai.kweathermap.com/8" },
  { no: 7, name: "NVIDIA 3일 한반도 초정밀 예보 (ATLAS-GFS)", model: "CorrDiff", input: "Atlas 예측장 (GFS)", area: "한반도", output: OUT_KOREA, period: "3일", interval: "1시간", resolution: "1.5km", link: "https://ai.kweathermap.com/11" },
  { no: 8, name: "NVIDIA 3일 한반도 초정밀 예보 (ATLAS-KIM)", model: "CorrDiff", input: "Atlas 예측장 (KIM)", area: "한반도", output: OUT_KOREA, period: "3일", interval: "1시간", resolution: "1.5km", link: "https://ai.kweathermap.com/12" },
  { no: 9, name: "NVIDIA 2시간 레이더 강수예보", model: "Stormscope", input: "레이더, 위성", area: "한반도", output: OUT_RADAR, period: "2시간", interval: "10분", resolution: "1km", link: "https://ai.kweathermap.com/15" },
  { no: 10, name: "NVIDIA 12시간 레이더 강수예보", model: "Stormscope", input: "레이더, 위성", area: "한반도", output: OUT_RADAR, period: "12시간", interval: "1시간", resolution: "1km", link: "https://ai.kweathermap.com/16" },
];

/* 같은 값이 연달아 오는 칸은 세로로 합친다(시안의 병합 표와 동일).
   합쳐진 뒤쪽 행에서는 그 칸을 그리지 않아야 하므로 span 0 으로 표시한다. */
function rowSpans(key: keyof Product) {
  const spans = PRODUCTS.map(() => 1);
  for (let i = PRODUCTS.length - 1; i > 0; i--) {
    const a = PRODUCTS[i][key];
    const b = PRODUCTS[i - 1][key];
    const same = Array.isArray(a) ? a === b : a === b;
    if (same) {
      spans[i - 1] += spans[i];
      spans[i] = 0;
    }
  }
  return spans;
}

const SPANS = {
  model: rowSpans("model"),
  input: rowSpans("input"),
  area: rowSpans("area"),
  output: rowSpans("output"),
  period: rowSpans("period"),
  interval: rowSpans("interval"),
  resolution: rowSpans("resolution"),
};

/* 외부 사이트로 나가므로 헤더의 쇼핑몰·케이웨더 맵 버튼과 같은 대각선 화살표 */
function GoLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="aifp-go">
      이동하기
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </a>
  );
}

/* 여러 줄로 적어 둔 산출물을 표에서는 줄바꿈해서 보여준다 */
function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l}>
          {i > 0 && <br />}
          {l}
        </span>
      ))}
    </>
  );
}

/* 특장점 — 전지구/한반도 두 영역, 각 영역 안에 예보 종류별 상품 */
const AREAS = [
  {
    icon: "globe",
    title: "전지구 영역",
    sub: "전 세계의 기상 변화를 예측합니다.",
    items: [
      {
        kind: "장기 예보",
        img: "kweather_60.png",
        name: "NVIDIA 60일 전지구 예보",
        model: "FourCastNet3 모델",
        specs: [["최대 60일", "6시간 간격", "25km 해상도"]],
      },
      {
        kind: "중기 예보",
        img: "kweather_15.png",
        name: "NVIDIA 15일 전지구 예보",
        model: "Atlas 모델",
        specs: [["최대 15일", "6시간 간격", "25km 해상도"]],
      },
    ],
  },
  {
    icon: "map",
    title: "한반도 영역",
    sub: "한반도를 더 자세하게 예측합니다.",
    items: [
      {
        kind: "단기 예보",
        img: "kweather_3.png",
        name: "NVIDIA 3일 한반도 초정밀 예보",
        model: "CorrDiff 모델",
        specs: [["최대 3일", "1시간 간격", "1.5km 해상도"]],
      },
      {
        kind: "초단기 예보",
        img: "kweather_2.png",
        name: "NVIDIA 레이더 강수예보",
        model: "Stormscope 모델",
        specs: [
          ["최대 2시간", "10분 간격", "1km 해상도"],
          ["최대 12시간", "1시간 간격", "1km 해상도"],
        ],
      },
    ],
  },
] as const;

export default function AiForecastProducts() {
  return (
    <div className="wd-panel aif aifp" key="aifp">
      <h3 className="wd-panel__lead">날씨 AI 팩토리의 첫 AI 기상예보 상품</h3>
      <p className="aif__desc">
        {/* 모바일에서는 이 <br /> 이 숨겨지므로, 그때 두 줄이 붙지 않게 공백을 남긴다 */}
        NVIDIA AI 기상예측 플랫폼 어스-2의 모델을 활용한 총 10종의 전지구 및{" "}
        <br />
        한반도 특화 AI 기상예보 상품을 제공합니다.
      </p>

      {/* 탭을 눌러 이 패널이 마운트될 때만 iframe 이 붙으므로
         기상데이터 페이지 첫 로드에는 유튜브 스크립트가 따라오지 않는다. */}
      <div className="aifp__video">
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
          title="날씨 AI 팩토리 AI 기상예보 상품 설명 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <section className="aif__block">
        <h4 className="aif__title">케이웨더 NVIDIA AI 기상예보 상품의 특장점</h4>
        <div className="aifp-feat">
          {AREAS.map((area) => (
            <section key={area.title} className="aifp-card">
              <header className="aifp-card__head">
                <span className="aifp-card__icon">
                  <Icon name={area.icon} />
                </span>
                <div className="aifp-card__txt">
                  <h5 className="aifp-card__title">{area.title}</h5>
                  <p className="aifp-card__sub">{area.sub}</p>
                </div>
              </header>

              {area.items.map((it) => (
                <article key={it.name} className="aifp-item">
                  <div className="aifp-item__body">
                    {/* 좌측 이미지 자리 — 파일을 받기 전까지는 빈 박스로 둔다 */}
                    <div className="aifp-item__thumb">
                      {it.img ? (
                        <img src={`/assets/sub/${it.img}`} alt={`${it.name} 예시 화면`} />
                      ) : null}
                    </div>
                    <div className="aifp-item__txt">
                      <div className="aifp-item__head">
                        <h6 className="aifp-item__kind">{it.kind}</h6>
                        <span className="aifp-item__model">{it.model}</span>
                      </div>
                      <p className="aifp-item__name">{it.name}</p>
                      <dl className="aifp-item__spec">
                        {it.specs.map((row) => (
                          <div key={row.join()} className="aifp-item__spec-row">
                            {row.map((v) => (
                              <span key={v}>{v}</span>
                            ))}
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </section>

      {/* 상품 정보 상세 — 표 룩은 같은 페이지의 「제공 기상정보 상세」(.wd-spec__table)와 동일 */}
      <section className="aif__block">
        <h4 className="aif__title">상품 정보 상세</h4>
        {/* 넓은 화면 — 시안대로 병합된 표 */}
        <div className="aifp-spec">
          <table className="wd-spec__table aifp-spec__table">
            <colgroup>
              {/* 상품명은 「NVIDIA 3일 한반도 초정밀 예보 (ATLAS-GFS)」가 한 줄에
                  들어가는 폭(24%)이 필요해, 여유 있는 짧은 열에서 덜어 왔다 */}
              <col style={{ width: "4.5%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "9%" }} />
              <col style={{ width: "12%" }} />
              <col style={{ width: "5%" }} />
              <col style={{ width: "17%" }} />
              <col style={{ width: "6.5%" }} />
              <col style={{ width: "6%" }} />
              <col style={{ width: "6%" }} />
              <col style={{ width: "10%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>상품명</th>
                <th>AI 모델</th>
                <th>입력자료</th>
                <th>영역</th>
                <th>산출물</th>
                <th>
                  최대
                  <br />
                  예보기간
                </th>
                <th>예보간격</th>
                <th>
                  공간
                  <br />
                  해상도
                </th>
                <th>링크</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p, i) => (
                <tr key={p.no}>
                  <td>{p.no}</td>
                  <td className="c2">{p.name}</td>
                  {SPANS.model[i] > 0 && (
                    <td className="c1" rowSpan={SPANS.model[i]}>{p.model}</td>
                  )}
                  {SPANS.input[i] > 0 && (
                    <td className="c2" rowSpan={SPANS.input[i]}>{p.input}</td>
                  )}
                  {SPANS.area[i] > 0 && (
                    <td className="c1" rowSpan={SPANS.area[i]}>{p.area}</td>
                  )}
                  {SPANS.output[i] > 0 && (
                    <td className="c3" rowSpan={SPANS.output[i]}>
                      <Lines lines={p.output} />
                    </td>
                  )}
                  {SPANS.period[i] > 0 && (
                    <td className="c3" rowSpan={SPANS.period[i]}>{p.period}</td>
                  )}
                  {SPANS.interval[i] > 0 && (
                    <td className="c3" rowSpan={SPANS.interval[i]}>{p.interval}</td>
                  )}
                  {SPANS.resolution[i] > 0 && (
                    <td className="c3" rowSpan={SPANS.resolution[i]}>{p.resolution}</td>
                  )}
                  <td className="aifp-spec__link">
                    <GoLink href={p.link} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 좁은 화면 — 10칸을 옆으로 밀어 보게 하지 않고 상품별로 끊어서 세로로 */}
        <ul className="aifp-plist">
          {PRODUCTS.map((p) => (
            <li key={p.no} className="aifp-pcard">
              <div className="aifp-pcard__head">
                <span className="aifp-pcard__no">{p.no}</span>
                <p className="aifp-pcard__name">{p.name}</p>
              </div>
              <dl className="aifp-pcard__spec">
                <dt>AI 모델</dt>
                <dd>{p.model}</dd>
                <dt>입력자료</dt>
                <dd>{p.input}</dd>
                <dt>영역</dt>
                <dd>{p.area}</dd>
                <dt>산출물</dt>
                <dd>{p.output.join(" ")}</dd>
                <dt>최대 예보기간</dt>
                <dd>{p.period}</dd>
                <dt>예보간격</dt>
                <dd>{p.interval}</dd>
                <dt>공간 해상도</dt>
                <dd>{p.resolution}</dd>
              </dl>
              <GoLink href={p.link} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
