import { chassisBrands } from "@/lib/site";
import Reveal from "./Reveal";

export default function Chassis() {
  return (
    <section id="chassis" className="px-3 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.75rem] border border-line bg-card p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Chassis we build on
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">
              We fit our bodies on all of these truck and bus chassis.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
            {chassisBrands.map((b) => (
              <li key={b} className="rounded-xl border border-line bg-paper px-4 py-6 text-center text-base font-semibold tracking-tight">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
