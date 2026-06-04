"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Icon from "../Icon";
import AnimatedText from "../AnimatedText";
import {
  cardRise,
  fadeUpSm,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from "@/lib/motion-variants";

type Card = {
  key: string;
  name: string;
  desc: string;
  img: string;
  imgExtra?: string;
  icon: string;
  href: string;
};

const DIGITAL: Card[] = [
  {
    key: "wellbian",
    name: "웰비안 앱",
    desc: "날씨를 넘어, 나의\n라이프스타일 조언까지",
    img: "/assets/phone02.png",
    icon: "/assets/icon_01.png",
    href: "https://play.google.com/store/apps/details?id=ai.wellbian.twa&hl=ko",
  },
  {
    key: "idol",
    name: "날씨 아이돌",
    desc: "세계 최초의 AI 기반\n날씨 테마 아이돌 그룹",
    img: "/assets/woman.png",
    icon: "/assets/icon_02.png",
    href: "https://www.youtube.com/@weatheridols",
  },
  {
    key: "caster",
    name: "Ai 기상캐스터",
    desc: "AI 캐스터를 활용하여\n날씨 방송 콘텐츠 제작",
    img: "/assets/man.png",
    icon: "/assets/icon_03.png",
    href: "https://www.kweather.co.kr/audition/index.html",
  },
  {
    key: "model",
    name: "Ai 날씨 예측 모델",
    desc: "생태계의 핵심 엔진인\n초정밀 AI예보 시스템 구축",
    img: "/assets/earth.png",
    imgExtra: "/assets/graph.png",
    icon: "/assets/icon_04.png",
    href: "#",
  },
  {
    key: "chain",
    name: "웨더체인&마켓",
    desc: "기상데이터를 블록체인에\n기록하는 인프라 구축",
    img: "/assets/nft.png",
    icon: "/assets/icon_05.png",
    href: "#",
  },
];

export default function DigitalBusiness() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".digital-card");
    const step = card
      ? (card as HTMLElement).getBoundingClientRect().width + 24
      : el.clientWidth * 0.6;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="digital" className="sec sec--light digital-section">
      <div className="container digital-layout">
        <motion.div
          className="digital-header"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          <AnimatedText
            as="h2"
            text="Digital Business"
            mode="word"
            stagger={0.08}
            className="digital-header__title"
          />
          <motion.p className="digital-header__sub" variants={fadeUpSm}>
            AI기술과 기상 데이터를
            <br />
            결합한 차세대
            <br />
            Weather Intelligence
            <br />
            디지털 비즈니스
          </motion.p>
        </motion.div>

        <div className="digital-scroller">
          <motion.div
            className="digital-track"
            ref={trackRef}
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            {DIGITAL.map((d, i) => {
              const isActive = i < 3; // 1~3번 활성, 4~5번 오픈 전
              const external = d.href.startsWith("http");
              return (
                <motion.a
                  href={d.href}
                  key={d.key}
                  target={external && isActive ? "_blank" : undefined}
                  rel={external && isActive ? "noopener noreferrer" : undefined}
                  onClick={
                    isActive
                      ? undefined
                      : (e) => {
                          e.preventDefault();
                          window.alert(
                            `'${d.name}' 서비스는 준비 중입니다.\n빠른 시일 내에 오픈 예정입니다.`
                          );
                        }
                  }
                  className={`digital-card digital-card--${d.key}`}
                  variants={cardRise}
                >
                  <span className="digital-card__sgo" aria-hidden="true">
                    <img
                      src={isActive ? "/assets/btn_sgo.svg" : "/assets/btn_sgo_off.svg"}
                      alt=""
                      loading="lazy"
                    />
                  </span>
                  <div className="digital-card__head">
                    <h3 className="digital-card__name">{d.name}</h3>
                    <p className="digital-card__desc">{d.desc}</p>
                  </div>

                  <div className="digital-card__image">
                    {d.imgExtra && (
                      <img
                        src={d.imgExtra}
                        alt=""
                        className="digital-card__img digital-card__img--extra"
                        loading="lazy"
                      />
                    )}
                    <img
                      src={d.img}
                      alt=""
                      className="digital-card__img digital-card__img--main"
                      loading="lazy"
                    />
                  </div>

                  <img
                    src={d.icon}
                    alt=""
                    aria-hidden="true"
                    className="digital-card__icon"
                    loading="lazy"
                  />
                </motion.a>
              );
            })}
          </motion.div>

          <div className="digital-controls">
            <div className="digital-progress" aria-hidden="true">
              <span
                className="digital-progress__fill"
                style={{ ["--p" as string]: progress } as CSSProperties}
              />
            </div>
            <div className="digital-arrows">
              <button
                type="button"
                className={`digital-arrow ${!canPrev ? "is-disabled" : ""}`}
                onClick={() => scrollBy(-1)}
                aria-label="이전"
              >
                <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
                  <Icon name="chev" size={22} stroke={2.4} />
                </span>
              </button>
              <button
                type="button"
                className={`digital-arrow ${!canNext ? "is-disabled" : ""}`}
                onClick={() => scrollBy(1)}
                aria-label="다음"
              >
                <Icon name="chev" size={22} stroke={2.4} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
