import Reveal from "./Reveal";

const steps = [
  { t: "Design", d: "We agree the size, chassis and specification with you." },
  { t: "Cutting", d: "Raw material is cut to the exact measurements." },
  { t: "Welding and framing", d: "The body is welded and framed." },
  { t: "Painting", d: "Anti-corrosive paint and your branding." },
  { t: "Interior", d: "Seats and fittings go in before handover." },
];

export default function Process() {
  return (
    <section id="process" className="px-3 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
        <Reveal className="mb-12">
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">How we build</h2>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.07}>
              <li className="h-full bg-ink p-7">
                <span className="text-sm text-red">Step {i + 1}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
