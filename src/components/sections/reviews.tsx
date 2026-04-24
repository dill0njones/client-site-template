"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import type { Review } from "@/lib/types";

type ReviewsProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            Testimonials
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light" style={{ color: "var(--color-primary)" }}>
            Love Notes From Our Couples
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col p-8 border border-gray-100 hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="var(--color-accent)" stroke="none" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic flex-grow mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
                <p className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                  {review.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
