"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type BrochureCtaProps = {
  businessName: string;
  brochureUrl?: string;
};

export default function BrochureCta({ businessName, brochureUrl }: BrochureCtaProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="brochure"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--color-primary)" }}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">
          Free Resource
        </p>
        <h2 className="font-headline text-4xl md:text-5xl font-light mb-4">
          Discover More in Your Free Venue Booklet
        </h2>
        <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mb-6" />
        <p className="text-white/70 text-base leading-relaxed mb-10">
          Get our complete venue guide — pricing, packages, availability, and everything
          you need to decide if {businessName} is the right fit for your wedding day.
        </p>
        <a
          href={brochureUrl || "#contact"}
          className="inline-block px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "white",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "white";
            (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)";
            (e.currentTarget as HTMLElement).style.color = "white";
          }}
        >
          Download Your Free Venue Booklet
        </a>
      </motion.div>
    </section>
  );
}
