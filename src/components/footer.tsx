import Link from "next/link";
import type { SiteData } from "@/lib/types";

type FooterProps = {
  site: Pick<SiteData, "businessName" | "contactEmail" | "contactPhone" | "address" | "calendarUrl">;
};

export default function Footer({ site }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-primary)] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-headline text-white text-2xl mb-4">{site.businessName}</p>
          <p className="text-sm leading-relaxed">
            {site.address.street}<br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-white/50 mb-4">Navigate</p>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Weddings", href: "/weddings" },
              { label: "Gallery", href: "/gallery" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm hover:text-[var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-white/50 mb-4">Get In Touch</p>
          <div className="flex flex-col gap-3 text-sm">
            <a href={`tel:${site.contactPhone}`} className="hover:text-[var(--color-accent)] transition-colors">
              {site.contactPhone}
            </a>
            <a href={`mailto:${site.contactEmail}`} className="hover:text-[var(--color-accent)] transition-colors">
              {site.contactEmail}
            </a>
            <a
              href={site.calendarUrl || "/contact"}
              className="mt-2 inline-block text-xs tracking-widest uppercase border border-white/40 px-5 py-3 text-center hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-all"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/40">
          © {year} {site.businessName}. All rights reserved.
        </p>
        <p className="text-xs text-white/30">
          Website by <span className="text-white/50">Your Agency</span>
        </p>
      </div>
    </footer>
  );
}
