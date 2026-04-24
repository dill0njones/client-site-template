"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Feature = { title: string; description: string };

type FeaturesProps = {
  features: Feature[];
};

export default function Features({ features }: FeaturesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            Why Choose Us
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light" style={{ color: "var(--color-primary)" }}>
            Everything You Need
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div
                className="w-12 h-px mx-auto mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <h3
                className="font-headline text-xl font-medium mb-3"
                style={{ color: "var(--color-primary)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
