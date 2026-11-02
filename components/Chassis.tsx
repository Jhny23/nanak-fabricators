import Reveal from "./Reveal";

export default function Chassis() {
  return (
    <section id="chassis" className="px-3 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="blueprint flex h-full flex-col justify-between rounded-[1.75rem] border border-line bg-card p-8 sm:p-12">
            <p className="eyebrow">05 / The foundation</p>
            <div className="mt-20">
              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                Proven chassis in.
                <br />
                Purpose-built bodies out.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
                Nanak imports commercial vehicle chassis through Tata Africa Holdings Tanzania and builds the body on
                top — so what leaves the workshop is a complete, working vehicle.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="grid h-full gap-4">
            <div className="rounded-[1.75rem] border border-line bg-card p-8">
              <p className="eyebrow">Chassis source</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">Tata Africa Holdings Tanzania</p>
              <p className="mt-2 text-steel">Imported commercial vehicle chassis, Tanzania → Kenya.</p>
            </div>
            <div className="rounded-[1.75rem] bg-red p-8 text-white">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">Built here</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">Every body fabricated in-house, near Athi River.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
