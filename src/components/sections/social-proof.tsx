"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type SocialProofProps = {
  images: string[];
  businessName: string;
};

export default function SocialProof({ images, businessName }: SocialProofProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (!images || images.length === 0) return null;

  return (
    <section className="py-14 bg-white border-t border-gray-100" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-8 text-gray-400">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {images.map((src, i) => (
              <div key={i} className="relative h-8 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={src}
                  alt={`${businessName} featured in publication ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
