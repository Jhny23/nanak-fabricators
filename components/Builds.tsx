import { Bus, Tipper, TruckBody, Trailer } from "./Vehicles";
import Reveal from "./Reveal";

const builds = [
  {
    no: "01",
    title: "Tipper bodies",
    text: "Heavy-gauge steel bins with hydraulic tipping, reinforced floors and ribbed sidewalls for quarry, construction and bulk haulage.",
    tags: ["Hydraulic ram", "Reinforced floor", "Custom volume"],
    Art: Tipper,
    span: "lg:col-span-7",
  },
  {
    no: "02",
    title: "Bus bodies",
    text: "Passenger bodies for schools, institutions and public transit — structure, glazing, seating layout and finish.",
    tags: ["School", "Staff", "Public transit"],
    Art: Bus,
    span: "lg:col-span-5",
  },
  {
    no: "03",
    title: "Truck bodies",
    text: "Box, dropside and cargo bodies sized to the chassis and the load, built for daily logistics work.",
    tags: ["Box", "Dropside", "Cargo"],
    Art: TruckBody,
    span: "lg:col-span-5",
  },
  {
    no: "04",
    title: "Trailers",
    text: "Fabricated trailers and container-carrying decks, engineered for long-distance regional freight.",
    tags: ["Flatbed", "Container deck", "Multi-axle"],
    Art: Trailer,
    span: "lg:col-span-7",
  },
];

export default function Builds() {
  return (
    <section id="builds" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">02 / What we build</p>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              One workshop.
              <br />
              Four ways to carry the load.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-steel lg:col-span-5">
            Every body is fabricated from raw material to your specification — sized to the chassis, the cargo and the
            road it will run on.
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12">
          {builds.map(({ no, title, text, tags, Art, span }, i) => (
            <Reveal key={no} delay={(i % 2) * 0.1} className={span}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card transition-colors hover:border-ink/30">
                <div className="blueprint relative flex flex-1 items-center justify-center px-6 pb-2 pt-10">
                  <span className="eyebrow absolute left-6 top-5">{no}</span>
                  <Art className="w-full transition-transform duration-700 group-hover:translate-x-1" />
                </div>
                <div className="border-t border-line p-7">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                    <span
                      aria-hidden
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-red group-hover:bg-red group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl leading-relaxed text-steel">{text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
