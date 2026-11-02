// Hand-built side-elevation drawings of the four body types Nanak fabricates.
// All vehicles face right, share a ground line at y=230 and the same 640x290 box.

const INK = "var(--color-ink)";
const CARD = "var(--color-card)";
const RED = "var(--color-red)";
const BLUE = "var(--color-blue)";
const GLASS = "#d9e6f6";
const METAL = "#c9cdd5";

function Wheel({ cx, spin = true }: { cx: number; spin?: boolean }) {
  return (
    <g transform={`translate(${cx} 196)`}>
      <circle r="34" fill={INK} />
      <circle r="21" fill={METAL} />
      <g className={spin ? "wheel-spin" : undefined}>
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

function Cab() {
  return (
    <g>
      <path
        d="M408 168 V104 L440 104 L474 62 H548 Q566 62 572 82 L592 132 Q598 142 598 154 V176 H408 Z"
        fill={CARD}
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M452 104 L480 70 H544 L562 104 Z" fill={GLASS} stroke={INK} strokeWidth="2" />
      <path d="M440 104 V168" stroke={INK} strokeWidth="1.5" />
      <rect x="446" y="124" width="14" height="4" rx="2" fill={INK} />
      <rect x="588" y="136" width="10" height="14" rx="2" fill="#ffd84d" stroke={INK} strokeWidth="1.5" />
      <path d="M572 118 H592 M572 124 H592 M572 130 H592" stroke={INK} strokeWidth="1.5" />
      <rect x="560" y="164" width="44" height="12" rx="3" fill={INK} />
      <path d="M408 150 H598" stroke={RED} strokeWidth="8" />
      <path d="M408 159 H598" stroke={BLUE} strokeWidth="3" />
    </g>
  );
}

function Chassis({ x1 = 40, x2 = 606 }: { x1?: number; x2?: number }) {
  return (
    <g>
      <rect x={x1} y="168" width={x2 - x1} height="12" fill={INK} />
      <rect x={x1} y="180" width={x2 - x1} height="3" fill="#2a2f3a" />
    </g>
  );
}

function Ground() {
  return (
    <g>
      <line x1="0" y1="230" x2="640" y2="230" stroke={INK} strokeWidth="2" />
      <line
        className="road-dash"
        x1="0"
        y1="240"
        x2="640"
        y2="240"
        stroke={INK}
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeDasharray="22 10"
      />
    </g>
  );
}

function Dims() {
  return (
    <g fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill={INK} stroke={INK} strokeWidth="1">
      <g opacity="0.55">
        {/* horizontal overall length */}
        <line x1="56" y1="268" x2="598" y2="268" />
        <line x1="56" y1="261" x2="56" y2="275" />
        <line x1="598" y1="261" x2="598" y2="275" />
        <rect x="256" y="261" width="142" height="14" fill="var(--color-paper)" stroke="none" />
        <text x="327" y="271" textAnchor="middle" stroke="none" letterSpacing="1.5">
          BUILT TO YOUR SPEC
        </text>
        {/* vertical height */}
        <line x1="22" y1="62" x2="22" y2="230" />
        <line x1="15" y1="62" x2="29" y2="62" />
        <line x1="15" y1="230" x2="29" y2="230" />
      </g>
    </g>
  );
}

export function Tipper({ dims = false, className }: { dims?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 640 290" className={className} role="img" aria-label="Tipper truck body">
      <Ground />
      <Chassis />
      {/* tipper bin */}
      <polygon points="56,168 56,74 404,74 392,168" fill={CARD} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="50" y="68" width="360" height="10" rx="2" fill={INK} />
      {[100, 144, 188, 232, 276, 320, 364].map((x) => (
        <line key={x} x1={x} y1="78" x2={x - 1} y2="168" stroke={INK} strokeOpacity="0.28" strokeWidth="1.5" />
      ))}
      <rect x="56" y="124" width="344" height="14" fill={RED} />
      <rect x="56" y="142" width="342" height="4" fill={BLUE} />
      {/* hydraulic ram */}
      <rect x="352" y="104" width="10" height="64" rx="3" fill={METAL} stroke={INK} strokeWidth="1.5" />
      {/* hinge + headboard */}
      <path d="M404 74 H432 L432 108 L398 108" fill={CARD} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <Cab />
      <rect x="292" y="184" width="74" height="26" rx="9" fill={METAL} stroke={INK} strokeWidth="1.5" />
      <Wheel cx={110} />
      <Wheel cx={176} />
      <Wheel cx={520} />
      {dims && <Dims />}
    </svg>
  );
}

export function TruckBody({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 290" className={className} role="img" aria-label="Truck box body">
      <Ground />
      <Chassis />
      <rect x="52" y="52" width="352" height="116" rx="6" fill={CARD} stroke={INK} strokeWidth="2.5" />
      {[84, 116, 148, 180, 212, 244, 276, 308, 340, 372].map((x) => (
        <line key={x} x1={x} y1="56" x2={x} y2="164" stroke={INK} strokeOpacity="0.18" strokeWidth="1.5" />
      ))}
      <rect x="52" y="112" width="352" height="16" fill={RED} />
      <rect x="52" y="132" width="352" height="5" fill={BLUE} />
      <rect x="52" y="46" width="352" height="8" rx="2" fill={INK} />
      <Cab />
      <rect x="140" y="184" width="74" height="26" rx="9" fill={METAL} stroke={INK} strokeWidth="1.5" />
      <Wheel cx={120} />
      <Wheel cx={190} />
      <Wheel cx={520} />
    </svg>
  );
}

export function Bus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 290" className={className} role="img" aria-label="Bus body">
      <Ground />
      <path
        d="M36 192 V70 Q36 54 52 54 H532 Q560 54 574 90 L600 152 Q604 162 604 174 V192 Z"
        fill={CARD}
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect x="236" y="44" width="150" height="10" rx="3" fill={METAL} stroke={INK} strokeWidth="1.5" />
      {[66, 138, 210, 282, 354, 426].map((x) => (
        <rect key={x} x={x} y="72" width="62" height="46" rx="6" fill={GLASS} stroke={INK} strokeWidth="2" />
      ))}
      <path d="M502 72 H530 Q546 72 552 90 L566 118 H502 Z" fill={GLASS} stroke={INK} strokeWidth="2" />
      <rect x="500" y="72" width="2" height="116" fill={INK} />
      <rect x="36" y="138" width="568" height="16" fill={RED} />
      <rect x="36" y="158" width="568" height="5" fill={BLUE} />
      <rect x="592" y="150" width="10" height="14" rx="2" fill="#ffd84d" stroke={INK} strokeWidth="1.5" />
      <rect x="570" y="184" width="44" height="12" rx="3" fill={INK} />
      <circle cx="130" cy="196" r="42" fill="#e6e8ec" stroke={INK} strokeWidth="2" />
      <circle cx="470" cy="196" r="42" fill="#e6e8ec" stroke={INK} strokeWidth="2" />
      <Wheel cx={130} />
      <Wheel cx={470} />
    </svg>
  );
}

export function Trailer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 290" className={className} role="img" aria-label="Semi-trailer">
      <Ground />
      <rect x="40" y="168" width="520" height="12" fill={INK} />
      <path d="M470 168 H580 V182 H470 Z" fill={INK} />
      <rect x="64" y="56" width="404" height="112" rx="4" fill={CARD} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: 27 }, (_, i) => 76 + i * 14.5).map((x) => (
        <line key={x} x1={x} y1="62" x2={x} y2="162" stroke={INK} strokeOpacity="0.16" strokeWidth="1.5" />
      ))}
      <rect x="64" y="108" width="404" height="16" fill={RED} />
      <rect x="64" y="128" width="404" height="5" fill={BLUE} />
      <rect x="64" y="50" width="404" height="8" rx="2" fill={INK} />
      {/* landing legs */}
      <rect x="430" y="182" width="7" height="34" fill={METAL} stroke={INK} strokeWidth="1.5" />
      <rect x="422" y="214" width="23" height="6" rx="2" fill={INK} />
      <rect x="236" y="184" width="86" height="22" rx="8" fill={METAL} stroke={INK} strokeWidth="1.5" />
      <Wheel cx={96} />
      <Wheel cx={166} />
      <Wheel cx={236} />
    </svg>
  );
}
