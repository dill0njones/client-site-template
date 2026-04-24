"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type TourCtaProps = {
  businessName: string;
  heroImage: string;
  calendarUrl?: string;
};

export default function TourCta({ businessName, heroImage, calendarUrl }: TourCtaProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "420px" }} ref={ref}>
      <Image
        src={heroImage}
        alt={`Schedule a tour at ${businessName}`}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-center min-h-[420px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-white max-w-2xl"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-4">
            Connecting You to Nature, Each Other, and the Moment
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light mb-6">
            Come See It For Yourself
          </h2>
          <p className="text-white/75 leading-relaxed mb-8">
            Words and photos can only say so much. Schedule a private tour of {businessName}
            and experience the views, the spaces, and the feeling for yourself.
          </p>
          <a
            href={calendarUrl || "/contact"}
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
          >
            Schedule a Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
}
