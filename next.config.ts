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
};

export default nextConfig;
