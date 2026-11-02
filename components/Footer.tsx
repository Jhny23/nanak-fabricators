import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
        <Image src="/logo.png" alt={site.name} width={768} height={277} className="logo-blend h-12 w-auto" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-body">
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            Facebook
          </a>
          {site.tiktok && (
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              TikTok
            </a>
          )}
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
