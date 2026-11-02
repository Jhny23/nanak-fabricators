import Image from "next/image";
import Reveal from "./Reveal";

type Photo = { src: string; alt: string; pos?: string };

const builds: {
  title: string;
  text: string;
  layout: "single" | "side" | "stack";
  ratio: string;
  photos: Photo[];
}[] = [
  {
    title: "Buses",
    text: "School buses, institutional buses and commuter coaches, built for passenger comfort with strong roll-cages. We have built school buses for Mustard and Kinderstart.",
    layout: "side",
    ratio: "aspect-[3/4]",
    photos: [
      { src: "/images/coach-spanish.jpg", alt: "Blue Spanish coach beside a Nanak Fabricators banner", pos: "50% 55%" },
      { src: "/images/interior-coach.jpg", alt: "Coach interior with padded seats and LED lighting", pos: "50% 55%" },
    ],
  },
  {
    title: "Trucks and cargo bodies",
    text: "Closed cargo boxes, open high-sided bodies and refrigerated trucks, made to suit the load and the chassis.",
    layout: "single",
    ratio: "aspect-[4/5]",
    photos: [{ src: "/images/truck.jpg", alt: "Green high-sided cargo body on a white HOWO truck", pos: "50% 55%" }],
  },
  {
    title: "Tippers and trailers",
    text: "Tipper bodies and multi-axle flatbed trailers for mining, construction and heavy haulage.",
    layout: "stack",
    ratio: "aspect-[16/10]",
    photos: [
      { src: "/images/tipper-white.jpg", alt: "White tipper body on a Fuso chassis", pos: "55% 50%" },
      { src: "/images/trailer.jpg", alt: "White multi-axle flatbed trailer with side rails", pos: "35% 50%" },
    ],
  },
  {
    title: "Tankers and exhausters",
    text: "Water tankers up to 16,000 litres, fuel tankers and exhauster trucks with vacuum systems for sanitation work.",
    layout: "stack",
    ratio: "aspect-[16/10]",
    photos: [
      { src: "/images/tanker-water.jpg", alt: "Blue water tanker on a Tata chassis", pos: "50% 55%" },
      { src: "/images/tanker-petrol.jpg", alt: "White fuel tanker on an Isuzu chassis", pos: "50% 55%" },
    ],
  },
];

export default function Builds() {
  return (
    <section id="builds" className="bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">What we build</h2>
        </Reveal>

        <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-36">
          {builds.map((b, i) => (
            <Reveal key={b.title}>
              <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className={b.layout === "side" ? "grid grid-cols-2 gap-3 sm:gap-4" : "grid gap-3 sm:gap-4"}>
                    {b.photos.map((p) => (
                      <div key={p.src} className={`relative overflow-hidden ${b.ratio} ${b.layout === "single" ? "max-w-md" : ""}`}>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(min-width:1024px) 40vw, 90vw"
                          className="object-cover"
                          style={{ objectPosition: p.pos }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{b.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-[1.7] text-body">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
