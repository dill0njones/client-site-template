"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  businessName: string;
  mainHeadline: string;
  seoSubHeadline: string;
  heroImage: string;
  brochureUrl?: string;
  calendarUrl?: string;
};

export default function Hero({
  businessName,
  mainHeadline,
  seoSubHeadline,
  heroImage,
  brochureUrl,
  calendarUrl,
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt={`${businessName} — ${seoSubHeadline}`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/70 mb-6"
        >
          {businessName}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
        >
          {mainHeadline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/80 mb-10 tracking-wide"
        >
          {seoSubHeadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={brochureUrl || "#brochure"}
            className="px-8 py-4 bg-[var(--color-accent)] text-white text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
          >
            Download Free Venue Booklet
          </a>
          <a
            href={calendarUrl || "/contact"}
            className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
          >
            Schedule a Tour
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
