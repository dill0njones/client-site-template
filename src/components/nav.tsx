"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavProps = {
  businessName: string;
  calendarUrl?: string;
};

const navLinks = [
  { label: "Weddings", href: "/weddings" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav({ businessName, calendarUrl }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-headline text-xl md:text-2xl tracking-wide transition-colors",
            scrolled ? "text-[var(--color-primary)]" : "text-white"
          )}
        >
          {businessName}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-widest uppercase transition-colors hover:text-[var(--color-accent)]",
                scrolled ? "text-[var(--color-primary)]" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={calendarUrl || "/contact"}
            className="text-sm tracking-widest uppercase border px-5 py-2 transition-all hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white"
            style={{
              borderColor: scrolled ? "var(--color-primary)" : "white",
              color: scrolled ? "var(--color-primary)" : "white",
            }}
          >
            Schedule a Tour
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={scrolled ? "text-[var(--color-primary)]" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-[var(--color-primary)]" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={calendarUrl || "/contact"}
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase border border-[var(--color-primary)] text-[var(--color-primary)] px-5 py-3 text-center hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-all"
          >
            Schedule a Tour
          </a>
        </div>
      )}
    </header>
  );
}
