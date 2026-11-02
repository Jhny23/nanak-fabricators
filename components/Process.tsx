import Reveal from "./Reveal";

const steps = [
  { n: "01", t: "Brief & specification", d: "We confirm the chassis, payload, dimensions and use case, then agree the build spec." },
  { n: "02", t: "Cut & fabricate", d: "Raw steel is cut, formed and welded into the frame, floor and walls of your body." },
  { n: "03", t: "Mount & finish", d: "The body is fitted to the chassis, then fitted out, prepared and painted in your colours." },
  { n: "04", t: "Inspect & hand over", d: "Every unit is checked against the spec before it is delivered ready to work." },
];

export default function Process() {
  return (
    <section id="process" className="px-3 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-12 sm:py-24 lg:px-16">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4 !text-white/50">03 / How it gets built</p>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              From a sheet of steel
              <br />
              to a finished vehicle.
            </h2>
          </div>
          <p className="max-w-sm text-white/60">
            One team, one workshop, one standard — from the first cut to the final inspection.
          </p>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="group relative h-full bg-ink p-7 transition-colors hover:bg-[#12151c]">
                <span className="font-mono text-sm text-red">{s.n}</span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{s.d}</p>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-red transition-all duration-500 group-hover:w-full" />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
