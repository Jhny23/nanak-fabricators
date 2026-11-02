import { chassisBrands } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-36">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Your vision. <span className="text-red">Our craft.</span>
        </h2>
        <p className="mt-8 text-xl leading-[1.7] text-body">
          Nanak Fabricators Limited is an approved vehicle body manufacturer based in Athi River, Kenya. We build
          commercial, institutional and transport vehicle bodies from scratch, using raw materials, to the size and
          specification you need.
        </p>
        <p className="mt-6 text-xl leading-[1.7] text-body">
          We fit our bodies on {chassisBrands.slice(0, -1).join(", ")} and {chassisBrands[chassisBrands.length - 1]}{" "}
          chassis.
        </p>
      </Reveal>
    </section>
  );
}
