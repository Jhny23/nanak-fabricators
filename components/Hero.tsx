import Image from "next/image";
import { chassisBrands } from "@/lib/site";
import Reveal from "./Reveal";

const specs = [
  { value: "4", unit: "product lines", note: "Buses · Trucks · Tippers & trailers · Tankers" },
  { value: String(chassisBrands.length), unit: "chassis brands", note: "Isuzu · FUSO · HOWO · TATA · FAW · Eicher" },
  { value: "0→1", unit: "built from scratch", note: "Raw material to finished body" },
];

export default function Hero() {
  return (
    <section id="top" className="px-3 pb-6 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-card">
        <div className="blueprint relative px-6 pt-12 sm:px-12 sm:pt-16 lg:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-red" />
                Approved vehicle body manufacturer · Athi River, Kenya
              </p>
              <h1 className="text-[clamp(2.8rem,7vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
                Built strong.
                <br />
                <span className="text-red">Built to last.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-4 lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-steel">
                Custom commercial, institutional and transport vehicle bodies — engineered and fabricated from raw
                material, to your exact specification.
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
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-t-[1.5rem] sm:aspect-[21/9]">
              <Image
                src="/images/bus.jpg"
                alt="Yellow school bus fabricated by Nanak Fabricators"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-[50%_60%]"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-card/90 px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-red" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">School bus · built in our Athi River workshop</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* spec strip */}
        <dl className="grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {specs.map((s) => (
            <div key={s.unit} className="px-8 py-7">
              <dt className="eyebrow">{s.unit}</dt>
              <dd className="mt-2 flex items-baseline gap-3">
                <span className="text-4xl font-semibold tracking-tight">{s.value}</span>
                <span className="text-sm leading-snug text-steel">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
