"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type AboutSectionProps = {
  aboutHeadline: string;
  aboutParagraph: string;
  aboutImage: string;
};

export default function AboutSection({ aboutHeadline, aboutParagraph, aboutImage }: AboutSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={aboutImage}
              alt={aboutHeadline}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div
            className="absolute -bottom-6 -right-6 w-36 h-36 border-2 hidden md:block"
            style={{ borderColor: "var(--color-accent)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            Our Story
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "var(--color-primary)" }}>
            {aboutHeadline}
          </h2>
          <div className="w-12 h-px mb-8" style={{ backgroundColor: "var(--color-accent)" }} />
          <p className="text-base leading-relaxed text-gray-600 mb-8">
            {aboutParagraph}
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sm tracking-widest uppercase border-b-2 pb-1 transition-colors hover:text-[var(--color-accent)]"
              style={{ borderColor: "var(--color-accent)", color: "var(--color-primary)" }}
            >
              Learn More About Us
            </Link>
            <Link
              href="/gallery"
              className="text-sm tracking-widest uppercase border-b-2 pb-1 transition-colors hover:text-[var(--color-accent)]"
              style={{ borderColor: "transparent", color: "var(--color-muted)" }}
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
