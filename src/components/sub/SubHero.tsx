/* 서브 페이지 공통 상단 비주얼 — Figma Sub_회사소개 top_bg(610px) 기준.
   다른 서브(기업소개·IR 등)에서도 image/title/subtitle만 바꿔 재사용. */

type SubHeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  /** 영문 서브타이틀(Roboto Light 40px) — 기업소개처럼 영문 카피일 때 */
  subEn?: boolean;
};

export default function SubHero({ image, title, subtitle, subEn }: SubHeroProps) {
  return (
    <section
      className="sub-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="sub-hero__title">{title}</h1>
      {subtitle && (
        <p className={`sub-hero__sub${subEn ? " sub-hero__sub--en" : ""}`}>
          {subtitle}
        </p>
      )}
    </section>
  );
}
