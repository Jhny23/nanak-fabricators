import { Tipper } from "./Vehicles";
import Reveal from "./Reveal";

const specs = [
  { value: "4", unit: "body types", note: "Truck · Bus · Tipper · Trailer", icon: "grid" },
  { value: "3", unit: "sectors served", note: "Logistics · Education · Transit", icon: "route" },
  { value: "0→1", unit: "built from scratch", note: "Raw material to finished body", icon: "bolt" },
] as const;

function Icon({ name }: { name: (typeof specs)[number]["icon"] }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "grid")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  if (name === "route")
    return (
      <svg {...common}>
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-3 pb-6 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-card">
        <div className="blueprint relative px-6 pb-4 pt-12 sm:px-12 sm:pt-16 lg:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-red" />
                Vehicle body fabrication · Athi River, Kenya
              </p>
              <h1 className="text-[clamp(2.6rem,6.2vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
                Built from raw
                <br />
                steel. Ready for
                <br />
                <span className="text-red">the long haul.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-4 lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-steel">
                Nanak Fabricators designs and builds truck, bus, tipper and trailer bodies from the ground up — for the
                fleets that keep East Africa moving.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red"
                >
                  Request a quote
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#builds"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink"
                >
                  See what we build
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <Tipper dims className="mx-auto mt-10 w-full max-w-[1080px]" />
          </Reveal>
        </div>

        {/* spec strip */}
        <dl className="grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {specs.map((s) => (
            <div key={s.unit} className="flex items-center gap-5 px-8 py-7">
              <span className="text-steel">
                <Icon name={s.icon} />
              </span>
              <div>
                <dt className="eyebrow">{s.unit}</dt>
                <dd className="mt-1 flex items-baseline gap-3">
                  <span className="text-4xl font-semibold tracking-tight">{s.value}</span>
                  <span className="text-sm text-steel">{s.note}</span>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
