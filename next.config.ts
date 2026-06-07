import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LAN IP로 접속할 때 dev 리소스(JS 청크·HMR)가 차단되지 않도록 허용.
  // IP/네트워크가 바뀌어도 견디도록 자주 쓰는 사설 대역을 와일드카드로 등록한다.
  // (없는 IP로 접속하면 차단되어 hydration이 실패하고 애니메이션 섹션이 안 보임)
  allowedDevOrigins: [
    "192.168.0.*",
    "192.168.1.*",
    "172.30.1.*",
    "172.30.1.88",
    "10.0.0.*",
  ],
  experimental: {
    // Next 16.1+ 기본 활성화된 dev 파일시스템 캐시가 CSS 변경을 누락시키는
    // 문제(stale chunk 서빙)가 있어 비활성화한다.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
