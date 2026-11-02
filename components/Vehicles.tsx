// Illustration used where no workshop photo exists yet (tankers & exhausters).
// Replace with a real photo in components/Builds.tsx when one is available.

const INK = "var(--color-ink)";
const CARD = "var(--color-card)";
const RED = "var(--color-red)";
const BLUE = "var(--color-blue)";
const GLASS = "#d9e6f6";
const METAL = "#c9cdd5";

function Wheel({ cx }: { cx: number }) {
  return (
    <g transform={`translate(${cx} 196)`}>
      <circle r="34" fill={INK} />
      <circle r="21" fill={METAL} />
      <g className="wheel-spin">
        {[0, 72, 144, 216, 288].map((a) => (
          <circle
            key={a}
            r="3.2"
            fill={INK}
            cx={Math.cos((a * Math.PI) / 180) * 12}
            cy={Math.sin((a * Math.PI) / 180) * 12}
          />
        ))}
      </g>
      <circle r="5" fill={INK} />
    </g>
  );
}

export function Tanker({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 290" className={className} role="img" aria-label="Water tanker illustration">
      <line x1="0" y1="230" x2="640" y2="230" stroke={INK} strokeWidth="2" />
      <line className="road-dash" x1="0" y1="240" x2="640" y2="240" stroke={INK} strokeOpacity="0.25" strokeWidth="2" strokeDasharray="22 10" />
      <rect x="40" y="168" width="566" height="12" fill={INK} />
      {/* tank */}
      <rect x="52" y="62" width="350" height="106" rx="53" fill={CARD} stroke={INK} strokeWidth="2.5" />
      {[130, 210, 290].map((x) => (
        <line key={x} x1={x} y1="64" x2={x} y2="166" stroke={INK} strokeOpacity="0.2" strokeWidth="1.5" />
      ))}
      <rect x="62" y="108" width="330" height="14" fill={RED} />
      <rect x="62" y="126" width="330" height="4" fill={BLUE} />
      <rect x="200" y="50" width="46" height="14" rx="4" fill={METAL} stroke={INK} strokeWidth="1.5" />
      <rect x="40" y="136" width="14" height="30" rx="3" fill={METAL} stroke={INK} strokeWidth="1.5" />
      {/* cab */}
      <path
        d="M408 168 V104 L440 104 L474 62 H548 Q566 62 572 82 L592 132 Q598 142 598 154 V176 H408 Z"
        fill={CARD}
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M452 104 L480 70 H544 L562 104 Z" fill={GLASS} stroke={INK} strokeWidth="2" />
      <path d="M440 104 V168" stroke={INK} strokeWidth="1.5" />
      <rect x="588" y="136" width="10" height="14" rx="2" fill="#ffd84d" stroke={INK} strokeWidth="1.5" />
      <rect x="560" y="164" width="44" height="12" rx="3" fill={INK} />
      <path d="M408 150 H598" stroke={RED} strokeWidth="8" />
      <path d="M408 159 H598" stroke={BLUE} strokeWidth="3" />
      <Wheel cx={120} />
      <Wheel cx={190} />
      <Wheel cx={520} />
    </svg>
  );
}
