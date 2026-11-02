import Image from "next/image";
import { Tanker } from "./Vehicles";
import Reveal from "./Reveal";

type Photo = { src: string; alt: string; pos?: string };

const builds: {
  no: string;
  title: string;
  text: string;
  span: string;
  photos?: Photo[];
  art?: boolean;
}[] = [
  {
    no: "01",
    title: "Buses",
    text: "School buses, institutional buses and commuter coaches, built for passenger comfort with strong roll-cages. We have built school buses for Mustard and Kinderstart.",
    span: "lg:col-span-7",
    photos: [{ src: "/images/bus.jpg", alt: "Yellow school bus built by Nanak", pos: "50% 55%" }],
  },
  {
    no: "02",
    title: "Trucks and cargo bodies",
    text: "Closed cargo boxes, open high-sided bodies and refrigerated trucks, made to suit the load and the chassis.",
    span: "lg:col-span-5",
    photos: [{ src: "/images/truck.jpg", alt: "Green high-sided cargo body on a white HOWO truck", pos: "50% 55%" }],
  },
  {
    no: "03",
    title: "Tippers and trailers",
    text: "Tipper bodies and multi-axle flatbed trailers for mining, construction and heavy haulage.",
    span: "lg:col-span-7",
    photos: [
      { src: "/images/tipper.jpg", alt: "Blue tipper body raised on a tandem-axle truck", pos: "50% 50%" },
      { src: "/images/trailer.jpg", alt: "White multi-axle flatbed trailer with side rails", pos: "35% 50%" },
    ],
  },
  {
    no: "04",
    title: "Tankers and exhausters",
    text: "16,000-litre water tankers and exhauster trucks with vacuum systems for sanitation work.",
    span: "lg:col-span-5",
    art: true,
  },
];

export default function Builds() {
  return (
    <section id="builds" className="px-3 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10">
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              What we build
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12">
          {builds.map((b, i) => (
            <Reveal key={b.no} delay={(i % 2) * 0.1} className={b.span}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card transition-colors hover:border-ink/30">
                <div className="relative">
                  {b.photos ? (
                    <div className={`grid gap-px bg-line ${b.photos.length > 1 ? "grid-cols-2" : ""}`}>
                      {b.photos.map((p) => (
                        <div key={p.src} className="relative h-[300px] overflow-hidden sm:h-[360px]">
                          <Image
                            src={p.src}
                            alt={p.alt}
                            fill
                            sizes={b.photos!.length > 1 ? "(min-width:1024px) 360px, 50vw" : "(min-width:1024px) 720px, 100vw"}
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            style={{ objectPosition: p.pos }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="blueprint flex h-[300px] items-center justify-center px-6 sm:h-[360px]">
                      <Tanker className="w-full" />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col border-t border-line p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{b.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-steel">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
