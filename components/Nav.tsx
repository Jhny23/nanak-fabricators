"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#builds", label: "What we build" },
  { href: "#process", label: "How we build" },
  { href: "#quote", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt={site.name} width={768} height={277} className="logo-blend h-9 w-auto" priority />
        </a>

        <ul className="hidden items-center gap-9 text-[0.95rem] text-body lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#quote" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red">
              Get a quote
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative -mr-2 grid h-11 w-11 place-items-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[7px]"}`}
          />
          <span className={`absolute h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
          <span
            className={`absolute h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[7px]"}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 bg-white transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 pt-6 sm:px-8">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-5 text-2xl font-medium tracking-tight">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-red py-4 text-center text-base font-medium text-white"
          >
            Get a quote
          </a>
          <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="mt-5 block text-center text-body">
            {site.phones[0]}
          </a>
        </div>
      </div>
    </header>
  );
}
