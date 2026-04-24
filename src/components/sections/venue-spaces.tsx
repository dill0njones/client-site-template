"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { VenueSpace } from "@/lib/types";

type VenueSpacesProps = {
  spaces: VenueSpace[];
};

export default function VenueSpaces({ spaces }: VenueSpacesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            Explore the Venue
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light" style={{ color: "var(--color-primary)" }}>
            Our Spaces
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spaces.map((space, i) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={space.imageUrl}
                  alt={space.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="pt-5 pb-2">
                <h3 className="font-headline text-xl font-medium mb-2" style={{ color: "var(--color-primary)" }}>
                  {space.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{space.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
