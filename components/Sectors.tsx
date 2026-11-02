import Reveal from "./Reveal";

const sectors = [
  {
    t: "Logistics & freight",
    d: "Truck bodies, tippers and trailers for operators moving cargo across Kenya and the wider region.",
    k: "Truck · Tipper · Trailer",
  },
  {
    t: "Education",
    d: "School and institution buses built for daily, high-frequency passenger duty.",
    k: "Bus",
  },
  {
    t: "Public transit",
    d: "Passenger bodies for operators and fleets running regular routes across East Africa.",
    k: "Bus",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">04 / Who we build for</p>
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
            Fleets across
            <br />
            East Africa.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
            Our bodies serve logistics operators, schools and public transit — anywhere a vehicle is expected to work
            hard, every day.
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          {sectors.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="group flex items-start gap-6 border-t border-line py-8 last:border-b">
                <span className="font-mono text-sm text-steel">0{i + 1}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-red">{s.t}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-steel">{s.d}</p>
                </div>
                <span className="hidden font-mono text-xs uppercase tracking-wider text-steel sm:block">{s.k}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
