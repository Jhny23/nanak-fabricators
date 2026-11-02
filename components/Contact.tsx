"use client";

import { useState } from "react";
import { site, bodyTypes } from "@/lib/site";
import Reveal from "./Reveal";

const field =
  "w-full rounded-lg border border-line bg-white px-4 py-3.5 text-base outline-none transition-colors placeholder:text-body/50 focus:border-ink";

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
    <section id="quote" className="bg-soft px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">Get a quote</h2>
          <p className="mt-6 max-w-sm text-lg leading-[1.7] text-body">
            Tell us what you need built and we will get back to you.
          </p>
          <dl className="mt-12 space-y-7 text-lg">
            <div>
              <dt className="text-sm text-body">Workshop</dt>
              <dd className="mt-1 leading-relaxed">{site.address}</dd>
            </div>
            <div>
              <dt className="text-sm text-body">Phone</dt>
              <dd className="mt-1">
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block transition-colors hover:text-red">
                    {p}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-body">Email</dt>
              <dd className="mt-1">
                {site.emails.map((m) => (
                  <a key={m} href={`mailto:${m}`} className="block break-all transition-colors hover:text-red">
                    {m}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className={field} />
              <input name="phone" required type="tel" placeholder="Phone or WhatsApp" className={field} />
            </div>
            <input name="company" placeholder="Company (optional)" className={field} />
            <select value={type} onChange={(e) => setType(e.target.value)} className={field} aria-label="What do you need built?">
              {bodyTypes.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <textarea
              name="details"
              rows={5}
              placeholder="Chassis make and model, size, anything else we should know"
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-red px-8 py-4 text-base font-medium text-white transition-colors hover:bg-ink sm:w-auto"
            >
              Send on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
