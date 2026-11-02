import Reveal from "./Reveal";

const values = ["Precision engineering", "Built to last on the road", "Made to your specification", "Skilled craftsmanship"];

export default function About() {
  return (
    <section id="about" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              Your vision.
              <br />
              <span className="text-red">Our craft.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-relaxed">
              Nanak Fabricators Limited is an approved vehicle body manufacturer based in Athi River, Kenya. We build
              commercial, institutional and transport vehicle bodies from scratch, using raw materials.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 border-t border-line pt-3 text-base font-medium">
                  <span className="h-2 w-2 rounded-full bg-red" />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
