// Brand-colored tech glyphs, simplified for small sizes.

export function ReactGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
      <circle cx="20" cy="20" r="2.8" fill="#61DAFB" />
      <ellipse cx="20" cy="20" rx="16" ry="6.4" stroke="#61DAFB" strokeWidth="1.8" />
      <ellipse
        cx="20"
        cy="20"
        rx="16"
        ry="6.4"
        stroke="#61DAFB"
        strokeWidth="1.8"
        transform="rotate(60 20 20)"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="16"
        ry="6.4"
        stroke="#61DAFB"
        strokeWidth="1.8"
        transform="rotate(120 20 20)"
      />
    </svg>
  );
}

export function NodeGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
      <path
        d="M20 4 34 12 34 28 20 36 6 28 6 12Z"
        fill="#339933"
        fillOpacity="0.16"
        stroke="#339933"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M20 4V36M6 12l14 8 14-8M6 28l14-8 14 8"
        stroke="#339933"
        strokeWidth="1"
        opacity="0.55"
      />
    </svg>
  );
}

export function TypeScriptGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6">
      <rect x="5" y="5" width="30" height="30" rx="5" fill="#3178C6" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#fff"
        fontFamily="var(--font-sans)"
      >
        TS
      </text>
    </svg>
  );
}

export function TailwindGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
      <path
        d="M8 18c1.5-5 4.8-7.5 9.5-7.5 4.7 0 6.8 3 8.7 6-1.9-1.5-4-2-6.4-1.5-1.6.4-2.7 1.5-4 3.2C14.1 20.4 12 21.5 8 18Z"
        fill="#38BDF8"
      />
      <path
        d="M13.8 27.5c1.5-5 4.8-7.5 9.5-7.5 4.7 0 6.8 3 8.7 6-1.9-1.5-4-2-6.4-1.5-1.6.4-2.7 1.5-4 3.2-2.7 2.2-4.8 3.3-8.8-.2Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function ViteGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
      <defs>
        <linearGradient id="vite-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <path d="M34 8 20 34 6 8l14 5Z" fill="url(#vite-grad)" />
      <path
        d="M20 6l3 8-6 2 5 10"
        stroke="#FFDD35"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PostgresGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
      <ellipse cx="20" cy="11" rx="13" ry="5" stroke="#336791" strokeWidth="1.8" />
      <path d="M7 11v18c0 2.8 5.8 5 13 5s13-2.2 13-5V11" stroke="#336791" strokeWidth="1.8" />
      <path
        d="M7 20c0 2.8 5.8 5 13 5s13-2.2 13-5"
        stroke="#336791"
        strokeWidth="1.3"
        opacity="0.55"
      />
    </svg>
  );
}

export function DockerGlyph() {
  const c = "#2496ED";
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
      <rect x="6" y="20" width="6" height="6" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1.5" />
      <rect x="13" y="20" width="6" height="6" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1.5" />
      <rect x="20" y="20" width="6" height="6" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1.5" />
      <rect x="13" y="13" width="6" height="6" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1.5" />
      <path
        d="M4 26c2 6 7.5 8 14 8 9 0 15-4.5 17.5-12-2.2 1-3.8.6-4.5-.5-1 1.3-2.6 1.6-4.5.9"
        stroke={c}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VercelGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6">
      <path d="M20 8 34 32H6Z" fill="#fff" />
    </svg>
  );
}
