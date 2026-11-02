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
    <section id="process" className="px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">How we build</h2>
        </Reveal>
        <ol className="lg:col-span-7">
          {steps.map((s, i) => (
            <li key={s.t}>
              <Reveal>
                <div className="flex gap-6 border-t border-line py-7 first:border-t-0 first:pt-0 sm:gap-10">
                  <span className="w-6 pt-1 text-sm text-red">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{s.t}</h3>
                    <p className="mt-1.5 text-lg text-body">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
