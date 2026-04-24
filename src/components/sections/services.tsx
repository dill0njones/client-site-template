"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2, Heart, Sun, Users, Music, Church, Utensils, MapPin, Camera, Star, Flower, Wifi,
} from "lucide-react";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  Building: Building2,
  Building2: Building2,
  Church: Church,
  Heart: Heart,
  Sun: Sun,
  Users: Users,
  Music: Music,
  Volume2: Music,
  Utensils: Utensils,
  MapPin: MapPin,
  Camera: Camera,
  Star: Star,
  Flower: Flower,
  Wifi: Wifi,
  Default: Star,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name] || iconMap.Default;
  return <Icon size={22} strokeWidth={1.5} />;
}

type ServicesProps = {
  services: Service[];
};

export default function Services({ services }: ServicesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            What We Offer
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-light" style={{ color: "var(--color-primary)" }}>
            Our Key Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-[var(--color-accent)] hover:shadow-sm transition-all"
            >
              <div className="mb-5" style={{ color: "var(--color-accent)" }}>
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-headline text-xl font-medium mb-3" style={{ color: "var(--color-primary)" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
