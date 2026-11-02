import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative h-[calc(100svh-4rem)] min-h-[520px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/bus.jpg"
        alt="Yellow Mustard school bus built by Nanak Fabricators"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_55%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-20">
          <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
            Built strong.
            <br />
            Built to last.
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/85">
            Bus, truck, tipper, trailer and tanker bodies, made in Athi River.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#quote" className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-red hover:text-white">
              Get a quote
            </a>
            <a href="#builds" className="text-sm font-medium text-white underline underline-offset-[6px] decoration-white/50 hover:decoration-white">
              See what we build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
