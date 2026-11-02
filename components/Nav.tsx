import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#builds", label: "Builds" },
  { href: "#process", label: "Process" },
  { href: "#chassis", label: "Chassis" },
  { href: "#quote", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-card/85 py-2 pl-5 pr-2 backdrop-blur-xl">
        <a href="#top" aria-label={`${site.name} home`}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={768}
            height={277}
            className="logo-blend h-9 w-auto sm:h-10"
            priority
          />
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-steel lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#quote"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red"
        >
          Get a quote
        </a>
      </nav>
    </header>
  );
}
