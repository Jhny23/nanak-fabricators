import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-3 pb-6 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-line bg-card px-8 py-10 sm:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <Image src="/logo.png" alt={site.name} width={768} height={277} className="logo-blend h-14 w-auto" />
          <ul className="flex flex-wrap gap-8 text-sm text-steel">
            {[
              ["#about", "About"],
              ["#builds", "Builds"],
              ["#process", "Process"],
              ["#sectors", "Sectors"],
              ["#quote", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="transition-colors hover:text-ink">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-6 font-mono text-xs uppercase tracking-wider text-steel">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="flex gap-6">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Facebook</a>
            {site.tiktok && (
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">TikTok</a>
            )}
            <span>{site.location}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
