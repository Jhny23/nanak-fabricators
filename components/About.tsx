import Reveal from "./Reveal";

const values = [
  { t: "Precision engineering", d: "Every measurement matters — structural design turned into heavy-duty transport assets." },
  { t: "Maximum road durability", d: "Bodies fabricated to survive the loads, roads and distances of East African operations." },
  { t: "Client-tailored specs", d: "No catalogue limits: each body is sized to your chassis, cargo and duty cycle." },
  { t: "Skilled craftsmanship", d: "From raw material to final finish, built by people who do this every day." },
];

export default function About() {
  return (
    <section id="about" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">01 / About Nanak</p>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              Your vision.
              <br />
              <span className="text-red">Our craft.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-relaxed">
              Nanak Fabricators Limited is an approved, premium automotive body manufacturer based in Athi River, Kenya.
              We custom-engineer commercial, institutional and transport vehicle bodies entirely from scratch using raw
              materials.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <div className="h-full bg-card p-7">
                <span className="font-mono text-sm text-red">0{i + 1}</span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
