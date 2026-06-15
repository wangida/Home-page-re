"use client";

import { useState } from "react";

/* 소개 영상 라이트 임베드 — 평소엔 썸네일만, 클릭 시 그 자리에서 유튜브 재생 */
const VIDEO_ID = "GCsDOUY7kF0";

export default function CompanyVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="company-video">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="기상과 공기 빅데이터플랫폼 기업 케이웨더 소개 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="company-video__btn"
          onClick={() => setPlaying(true)}
          aria-label="케이웨더 소개 영상 재생"
        >
          <img
            src="/assets/sub/company_03img.png"
            width={1053}
            height={591}
            alt="기상과 공기 빅데이터플랫폼 기업 케이웨더 소개 영상"
          />
        </button>
      )}
    </div>
  );
}
