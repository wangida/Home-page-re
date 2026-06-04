import { ReactElement } from "react";

type IconName =
  | "arrow"
  | "arrow-down"
  | "arrow-up-right"
  | "chev"
  | "chevd"
  | "play"
  | "sparkle"
  | "wind"
  | "cloud"
  | "shield"
  | "cpu"
  | "sensor"
  | "chart"
  | "map"
  | "bldg"
  | "bolt"
  | "truck"
  | "school"
  | "govt"
  | "medical"
  | "award"
  | "mail"
  | "doc"
  | "mic"
  | "link"
  | "bot"
  | "radio"
  | "leaf"
  | "check"
  | "plus"
  | "menu"
  | "close"
  | "globe";

type Props = {
  name: IconName;
  size?: number;
  stroke?: number;
};

export default function Icon({ name, size = 22, stroke = 1.6 }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<IconName, ReactElement> = {
    arrow: (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </>
    ),
    "arrow-down": (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="6 13 12 19 18 13" />
      </>
    ),
    "arrow-up-right": (
      <>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="9 7 17 7 17 15" />
      </>
    ),
    chev: <polyline points="9 6 15 12 9 18" />,
    chevd: <polyline points="6 9 12 15 18 9" />,
    play: <polygon points="7 5 19 12 7 19 7 5" />,
    sparkle: (
      <>
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="M5.6 5.6l2.1 2.1" />
        <path d="M16.3 16.3l2.1 2.1" />
        <path d="M5.6 18.4l2.1-2.1" />
        <path d="M16.3 7.7l2.1-2.1" />
      </>
    ),
    wind: (
      <>
        <path d="M3 8h11a3 3 0 1 0-3-3" />
        <path d="M3 16h15a3 3 0 1 1-3 3" />
        <path d="M3 12h7" />
      </>
    ),
    cloud: (
      <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.7-1.5A3.5 3.5 0 0 0 7 18Z" />
    ),
    shield: <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" />,
    cpu: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 1v3" />
        <path d="M15 1v3" />
        <path d="M9 20v3" />
        <path d="M15 20v3" />
        <path d="M1 9h3" />
        <path d="M1 15h3" />
        <path d="M20 9h3" />
        <path d="M20 15h3" />
      </>
    ),
    sensor: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" />
      </>
    ),
    chart: (
      <>
        <line x1="4" y1="20" x2="4" y2="10" />
        <line x1="10" y1="20" x2="10" y2="4" />
        <line x1="16" y1="20" x2="16" y2="14" />
        <line x1="22" y1="20" x2="22" y2="8" />
      </>
    ),
    map: (
      <>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </>
    ),
    bldg: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
        <path d="M3 12h18" />
      </>
    ),
    bolt: <polygon points="13 2 4 14 11 14 11 22 20 10 13 10 13 2" />,
    truck: (
      <>
        <rect x="1" y="6" width="13" height="11" rx="1" />
        <path d="M14 9h5l3 4v4h-8" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
    school: (
      <>
        <path d="M3 10l9-5 9 5-9 5-9-5z" />
        <path d="M7 12v5c0 1 2.5 2 5 2s5-1 5-2v-5" />
      </>
    ),
    govt: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V9" />
        <path d="M19 21V9" />
        <path d="M12 3l9 5H3l9-5z" />
        <path d="M9 21v-7" />
        <path d="M15 21v-7" />
      </>
    ),
    medical: (
      <>
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </>
    ),
    doc: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="14 3 14 9 20 9" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11 5" />
        <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07L13 19" />
      </>
    ),
    bot: (
      <>
        <rect x="3" y="8" width="18" height="13" rx="3" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
        <path d="M12 3v5" />
        <circle cx="12" cy="3" r="1" />
      </>
    ),
    radio: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M8 12a4 4 0 0 1 8 0" />
        <path d="M5 12a7 7 0 0 1 14 0" />
        <path d="M2 12a10 10 0 0 1 20 0" />
      </>
    ),
    leaf: (
      <>
        <path d="M19 3c-7 0-13 5-13 12 0 3 1 5 1 5s5-1 9-5 4-9 4-9-1-3-1-3z" />
        <path d="M6 20c2-5 6-8 12-9" />
      </>
    ),
    check: <polyline points="5 12 10 17 19 7" />,
    plus: (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </>
    ),
    menu: (
      <>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </>
    ),
    close: (
      <>
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),
  };
  return <svg {...props}>{paths[name] || paths.arrow}</svg>;
}

export type { IconName };
