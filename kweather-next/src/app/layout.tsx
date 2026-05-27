import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K-WEATHER · 데이터 · AI · DSP",
  description:
    "케이웨더 — 국내 최대 공기·날씨 빅데이터, AI 환기청정, 기후 리스크 관리솔루션.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050F35",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
