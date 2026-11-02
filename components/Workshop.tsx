import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Workshop() {
  return (
    <section id="workshop" className="px-3 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] border border-line bg-card lg:grid-cols-12">
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-5">
            <h2 className="text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.96] tracking-[-0.04em]">Find us</h2>
            <div className="mt-10">
              <p className="text-lg leading-relaxed text-ink/80">{site.address}</p>
              <p className="mt-4 text-lg font-semibold">
                <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="transition-colors hover:text-red">
                  {site.phones[0]}
                </a>
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:col-span-7 lg:min-h-[460px]">
            <Image
              src="/images/workshop.jpg"
              alt="Aerial view of the Nanak Fabricators workshop and yard"
              fill
              sizes="(min-width:1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
