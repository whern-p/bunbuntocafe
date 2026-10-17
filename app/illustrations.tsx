// ภาพประกอบและไอคอนของเว็บ วาดด้วย SVG ทั้งหมด (ไม่ใช้รูปจากเว็บอื่น)

type Props = { className?: string };

export function Croissant({ className }: Props) {
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      <g stroke="#b06a2c" strokeWidth="3" strokeLinejoin="round">
        <ellipse cx="38" cy="96" rx="15" ry="21" transform="rotate(-50 38 96)" fill="#d89443" />
        <ellipse cx="162" cy="96" rx="15" ry="21" transform="rotate(50 162 96)" fill="#d89443" />
        <ellipse cx="64" cy="80" rx="23" ry="32" transform="rotate(-28 64 80)" fill="#e0a458" />
        <ellipse cx="136" cy="80" rx="23" ry="32" transform="rotate(28 136 80)" fill="#e0a458" />
        <ellipse cx="100" cy="70" rx="31" ry="40" fill="#e9b36a" />
      </g>
      <g fill="none" stroke="#fbe3b6" strokeWidth="4" strokeLinecap="round" opacity="0.8">
        <path d="M86 46 Q98 38 110 44" />
        <path d="M52 64 Q58 56 66 56" />
        <path d="M134 56 Q142 56 148 64" />
      </g>
    </svg>
  );
}

export function Loaf({ className }: Props) {
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      <path
        d="M34 124 V74 Q32 36 66 38 Q80 16 100 32 Q120 16 134 38 Q168 36 166 74 V124 Z"
        fill="#c98a45"
        stroke="#9c6230"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M44 116 V76 Q43 48 68 50 Q81 32 100 45 Q119 32 132 50 Q157 48 156 76 V116 Z"
        fill="#f7e2b5"
      />
      <g fill="none" stroke="#e8c98d" strokeWidth="3" strokeLinecap="round">
        <path d="M70 70 Q76 92 70 108" />
        <path d="M100 62 Q106 88 100 108" />
        <path d="M130 70 Q136 92 130 108" />
      </g>
    </svg>
  );
}

export function Bun({ className }: Props) {
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      <ellipse cx="100" cy="118" rx="70" ry="10" fill="#e9d6ad" />
      <path
        d="M30 112 Q30 40 100 38 Q170 40 170 112 Z"
        fill="#d48a3c"
        stroke="#a3622a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M58 70 Q72 52 96 50" fill="none" stroke="#f3c47e" strokeWidth="6" strokeLinecap="round" />
      <g fill="#fff4dc">
        <ellipse cx="88" cy="74" rx="3" ry="5" transform="rotate(20 88 74)" />
        <ellipse cx="112" cy="66" rx="3" ry="5" transform="rotate(-15 112 66)" />
        <ellipse cx="128" cy="84" rx="3" ry="5" transform="rotate(30 128 84)" />
        <ellipse cx="104" cy="90" rx="3" ry="5" transform="rotate(-25 104 90)" />
        <ellipse cx="76" cy="94" rx="3" ry="5" transform="rotate(10 76 94)" />
        <ellipse cx="140" cy="102" rx="3" ry="5" transform="rotate(-20 140 102)" />
      </g>
    </svg>
  );
}

export function Danish({ className }: Props) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      <g transform="translate(100 72)">
        {petals.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-38"
            rx="22"
            ry="26"
            transform={`rotate(${deg})`}
            fill="#e0a458"
            stroke="#b06a2c"
            strokeWidth="3"
          />
        ))}
        <circle r="40" fill="#e9b36a" />
        <circle r="26" fill="#f6dc9a" stroke="#d9b264" strokeWidth="3" />
        <circle cx="-8" cy="-6" r="9" fill="#c8602a" />
        <circle cx="9" cy="-2" r="8" fill="#a64b1d" />
        <circle cx="0" cy="11" r="8" fill="#c8602a" />
        <path d="M2 -12 q6 -10 14 -8" fill="none" stroke="#6d7a3e" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Leaf({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M8 56 Q8 12 56 8 Q56 52 8 56 Z" fill="currentColor" />
      <path d="M12 52 Q30 34 48 16" fill="none" stroke="#fffaf1" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function IconBase({ className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconSunrise({ className }: Props) {
  return (
    <IconBase className={className}>
      <path d="M12 3v3M4.6 7.6l2 2M19.4 7.6l-2 2M2 17h20M5 21h14" />
      <path d="M7 17a5 5 0 0 1 10 0" />
    </IconBase>
  );
}

export function IconReturn({ className }: Props) {
  return (
    <IconBase className={className}>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </IconBase>
  );
}

export function IconSliders({ className }: Props) {
  return (
    <IconBase className={className}>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </IconBase>
  );
}

export function IconPlus({ className }: Props) {
  return (
    <IconBase className={className}>
      <path d="M12 5v14M5 12h14" />
    </IconBase>
  );
}

export function IconLine({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.5C6.48 2.5 2 6.13 2 10.6c0 4 3.55 7.36 8.35 8 .33.07.77.22.88.5.1.25.07.65.03.9l-.14.86c-.04.25-.2 1 .88.54 1.08-.45 5.8-3.42 7.92-5.85C21.37 14 22 12.38 22 10.6 22 6.13 17.52 2.5 12 2.5Zm-3.87 10.9H6.14a.53.53 0 0 1-.53-.53V8.9a.53.53 0 1 1 1.06 0v3.44h1.46a.53.53 0 1 1 0 1.06Zm2.06-.53a.53.53 0 1 1-1.06 0V8.9a.53.53 0 1 1 1.06 0v3.97Zm4.79 0a.53.53 0 0 1-.95.32l-2.04-2.78v2.46a.53.53 0 1 1-1.06 0V8.9a.53.53 0 0 1 .95-.32l2.04 2.78V8.9a.53.53 0 1 1 1.06 0v3.97Zm3.22-2.51a.53.53 0 1 1 0 1.06h-1.46v.92h1.46a.53.53 0 1 1 0 1.06h-1.99a.53.53 0 0 1-.53-.53V8.9c0-.29.24-.53.53-.53h1.99a.53.53 0 1 1 0 1.06h-1.46v.92h1.46Z" />
    </svg>
  );
}
