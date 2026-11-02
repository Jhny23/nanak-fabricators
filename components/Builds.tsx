import Image from "next/image";
import Reveal from "./Reveal";

type Photo = { src: string; alt: string; pos?: string; cap?: string };

const builds: { title: string; text: string; span: string; cols: string; photos: Photo[] }[] = [
  {
    title: "Buses",
    text: "School buses, institutional buses and commuter coaches, built for passenger comfort with strong roll-cages. We have built school buses for Mustard and Kinderstart.",
    span: "lg:col-span-12",
    cols: "grid-cols-2 lg:grid-cols-4",
    photos: [
      { src: "/images/bus.jpg", alt: "Yellow Mustard school bus", pos: "50% 55%" },
      { src: "/images/coach-spanish.jpg", alt: "Blue Spanish coach parked at the Nanak workshop", pos: "50% 55%" },
      { src: "/images/interior-school.jpg", alt: "Inside a school bus with padded seats", pos: "50% 60%", cap: "School bus interior" },
      { src: "/images/interior-coach.jpg", alt: "Inside a coach with LED lighting and quilted ceiling", pos: "50% 55%", cap: "Coach interior" },
    ],
  },
  {
    title: "Trucks and cargo bodies",
    text: "Closed cargo boxes, open high-sided bodies and refrigerated trucks, made to suit the load and the chassis.",
    span: "lg:col-span-5",
    cols: "",
    photos: [{ src: "/images/truck.jpg", alt: "Green high-sided cargo body on a white HOWO truck", pos: "50% 55%" }],
  },
  {
    title: "Tippers and trailers",
    text: "Tipper bodies and multi-axle flatbed trailers for mining, construction and heavy haulage.",
    span: "lg:col-span-7",
    cols: "grid-cols-2",
    photos: [
      { src: "/images/tipper-white.jpg", alt: "White tipper body on a Fuso chassis", pos: "55% 50%" },
      { src: "/images/trailer.jpg", alt: "White multi-axle flatbed trailer with side rails", pos: "35% 50%" },
    ],
  },
  {
    title: "Tankers and exhausters",
    text: "Water tankers up to 16,000 litres, fuel tankers and exhauster trucks with vacuum systems for sanitation work.",
    span: "lg:col-span-12",
    cols: "grid-cols-2",
    photos: [
      { src: "/images/tanker-water.jpg", alt: "Blue water tanker on a Tata chassis", pos: "50% 55%" },
      { src: "/images/tanker-petrol.jpg", alt: "White fuel tanker with compartments on an Isuzu chassis", pos: "50% 55%" },
    ],
  },
];

export default function Builds() {
  return (
    <section id="builds" className="px-3 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10">
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">What we build</h2>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12">
          {builds.map((b) => (
            <Reveal key={b.title} className={b.span}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card">
                <div className={`grid gap-px bg-line ${b.cols}`}>
                  {b.photos.map((p) => (
                    <div key={p.src} className="relative h-[260px] overflow-hidden sm:h-[340px]">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width:1024px) 40vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ objectPosition: p.pos }}
                      />
                      {p.cap && (
                        <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium backdrop-blur">
                          {p.cap}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-t border-line p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{b.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-steel">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
