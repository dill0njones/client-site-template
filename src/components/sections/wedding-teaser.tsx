"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type WeddingTeaserProps = {
  headline: string;
  body: string;
  ctaText: string;
  image: string;
};

export default function WeddingTeaser({ headline, body, ctaText, image }: WeddingTeaserProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "520px" }} ref={ref}>
      <Image
        src={image}
        alt={headline}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex items-center justify-center min-h-[520px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-6">
            Begin Your Forever
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-light leading-tight mb-6">
            {headline}
          </h2>
          <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mb-6" />
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10">{body}</p>
          <Link
            href="/weddings"
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
