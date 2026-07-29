"use client";

import { useRef, useState } from "react";

/* 에어로봇 소개 영상 — 기업소개(CompanyVideo)와 동일 패턴.
   평소엔 영상 첫 프레임이 정지된 상태 + 재생 버튼, 클릭 시 그 자리에서 재생 */
export default function AirRobotVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="robot-movie__frame">
      <div className="robot-movie__stage">
        {/* poster 없이 첫 프레임 노출 — #t=0.1은 iOS에서 첫 프레임 강제 로드용 */}
        <video
          ref={videoRef}
          src="/assets/sub/airrobot_movie.mp4#t=0.1"
          controls={playing}
          playsInline
          preload="metadata"
        />
        {!playing && (
          <button
            type="button"
            className="robot-movie__play"
            onClick={handlePlay}
            aria-label="에어로봇 소개 영상 재생"
          >
            <span aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
