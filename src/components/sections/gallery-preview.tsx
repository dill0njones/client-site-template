"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type GalleryPreviewProps = {
  galleryImages: string[];
  businessName: string;
};

export default function GalleryPreview({ galleryImages, businessName }: GalleryPreviewProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            Our Gallery
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light mb-6" style={{ color: "var(--color-primary)" }}>
            Moments at {businessName}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {previewImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: i === 0 || i === 5 ? "3/4" : "1/1" }}
            >
              <Image
                src={src}
                alt={`${businessName} gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block text-sm tracking-widest uppercase border-2 px-10 py-4 transition-all hover:text-white"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
