import Image from "next/image";
import { chassisBrands, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="px-3 pb-6 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-card">
        <div className="blueprint relative px-6 pt-12 sm:px-12 sm:pt-16 lg:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <p className="mb-5 text-sm font-medium text-steel">Vehicle body builders, Athi River, Kenya</p>
              <h1 className="text-[clamp(2.8rem,7vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
                Built strong.
                <br />
                <span className="text-red">Built to last.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-4 lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-steel">
                We build bus, truck, tipper, trailer and tanker bodies from raw material, made to the size and
                specification you ask for.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#quote"
                  className="inline-flex items-center rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red"
                >
                  Get a quote
                </a>
                <a
                  href="#builds"
                  className="inline-flex items-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink"
                >
                  See what we build
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-t-[1.5rem] sm:aspect-[21/9]">
              <Image
                src="/images/bus.jpg"
                alt="Yellow Mustard school bus built by Nanak Fabricators"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
          </Reveal>
        </div>

        <dl className="grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-8 py-6">
            <dt className="text-sm text-steel">Workshop</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight">{site.location}</dd>
          </div>
          <div className="px-8 py-6">
            <dt className="text-sm text-steel">Chassis we build on</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight">{chassisBrands.join(", ")}</dd>
          </div>
          <div className="px-8 py-6">
            <dt className="text-sm text-steel">Call us</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight">
              <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="transition-colors hover:text-red">
                {site.phones[0]}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
