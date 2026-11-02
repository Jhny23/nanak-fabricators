"use client";

import { useState } from "react";
import { site, bodyTypes } from "@/lib/site";
import Reveal from "./Reveal";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[0.95rem] outline-none transition-colors placeholder:text-steel/60 focus:border-ink";

export default function Contact() {
  const [type, setType] = useState<string>(bodyTypes[0]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `Hello Nanak Fabricators, I would like a quote.`,
      `Name: ${f.get("name")}`,
      `Company: ${f.get("company") || "-"}`,
      `Phone: ${f.get("phone")}`,
      `Build: ${type}`,
      `Details: ${f.get("details") || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section id="quote" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-ink p-8 text-white sm:p-12">
            <div>
                            <h2 className="text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.96] tracking-[-0.04em]">Get a quote</h2>
              <p className="mt-5 max-w-sm text-white/60">Tell us what you need built and we will get back to you.</p>
            </div>
            <dl className="mt-14 space-y-5 text-sm">
              <div className="flex justify-between gap-6 border-t border-white/10 pt-4">
                <dt className="text-white/45">Workshop</dt>
                <dd className="max-w-[16rem] text-right leading-relaxed">{site.address}</dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-white/10 pt-4">
                <dt className="text-white/45">Phone</dt>
                <dd className="text-right">
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block transition-colors hover:text-red">
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-white/10 pt-4">
                <dt className="text-white/45">Email</dt>
                <dd className="text-right">
                  {site.emails.map((m) => (
                    <a key={m} href={`mailto:${m}`} className="block transition-colors hover:text-red">
                      {m}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={submit} className="rounded-[1.75rem] border border-line bg-card p-8 sm:p-12">
            <fieldset className="mb-8">
              <legend className="mb-4 text-sm font-medium text-steel">What do you need built?</legend>
              <div className="flex flex-wrap gap-2">
                {bodyTypes.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setType(b)}
                    aria-pressed={type === b}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      type === b ? "border-ink bg-ink text-white" : "border-line hover:border-ink/40"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className={field} />
              <input name="company" placeholder="Company (optional)" className={field} />
              <input name="phone" required type="tel" placeholder="Phone / WhatsApp" className={`${field} sm:col-span-2`} />
              <textarea
                name="details"
                rows={4}
                placeholder="Chassis make and model, size, anything else we should know"
                className={`${field} resize-none sm:col-span-2`}
              />
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-ink sm:w-auto"
            >
              Send on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
