// Icons — Lucide-style inline SVG helpers (trait fin, 2px stroke)
const I = ({ d, paths, size = 16, stroke = 2, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {paths ? paths : <path d={d} />}
  </svg>
);

const Icon = {
  bookOpen: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </>
      }
    />
  ),
  chevronRight: (p) => <I {...p} d="m9 18 6-6-6-6" />,
  chevronLeft: (p) => <I {...p} d="m15 18-6-6 6-6" />,
  chevronDown: (p) => <I {...p} d="m6 9 6 6 6-6" />,
  check: (p) => <I {...p} d="M20 6 9 17l-5-5" />,
  checkCircle: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </>
      }
    />
  ),
  clock: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </>
      }
    />
  ),
  play: (p) => (
    <I
      {...p}
      paths={
        <>
          <polygon points="5 3 19 12 5 21 5 3" />
        </>
      }
    />
  ),
  pause: (p) => (
    <I
      {...p}
      paths={
        <>
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </>
      }
    />
  ),
  search: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </>
      }
    />
  ),
  sparkles: (p) => (
    <I
      {...p}
      d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
    />
  ),
  trendingUp: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </>
      }
    />
  ),
  lightbulb: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14A5 5 0 1 0 8.91 14" />
        </>
      }
    />
  ),
  messageCircle: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </>
      }
    />
  ),
  messageQ: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </>
      }
    />
  ),
  menu: (p) => (
    <I
      {...p}
      paths={
        <>
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </>
      }
    />
  ),
  arrowRight: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      }
    />
  ),
  arrowLeft: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </>
      }
    />
  ),
  arrowUp: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </>
      }
    />
  ),
  home: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </>
      }
    />
  ),
  compass: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </>
      }
    />
  ),
  layers: (p) => (
    <I
      {...p}
      paths={
        <>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </>
      }
    />
  ),
  chart: (p) => (
    <I
      {...p}
      paths={
        <>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </>
      }
    />
  ),
  target: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </>
      }
    />
  ),
  flag: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </>
      }
    />
  ),
  bookmark: (p) => <I {...p} d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-5Z" />,
  fileText: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="14" y2="17" />
        </>
      }
    />
  ),
  users: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      }
    />
  ),
  volume: (p) => (
    <I
      {...p}
      paths={
        <>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </>
      }
    />
  ),
  settings: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.08 7.08 4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.08-7.08 4.24-4.24" />
        </>
      }
    />
  ),
  filter: (p) => <I {...p} d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
  star: (p) => (
    <I
      {...p}
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  ),
  zap: (p) => <I {...p} d="M13 2 3 14h9l-1 8 10-12h-9Z" />,
  x: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      }
    />
  ),
  plus: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </>
      }
    />
  ),
  circle: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="12" cy="12" r="10" />
        </>
      }
    />
  ),
  info: (p) => (
    <I
      {...p}
      paths={
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </>
      }
    />
  ),
  triangle: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </>
      }
    />
  ),
  rotate: (p) => (
    <I
      {...p}
      paths={
        <>
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M3 21v-5h5" />
        </>
      }
    />
  ),
};

window.Icon = Icon;
