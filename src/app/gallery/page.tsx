import { headers } from "next/headers";
import type { Metadata } from "next";
import Image from "next/image";
import { getSiteData } from "@/lib/supabase";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import BrochureCta from "@/components/sections/brochure-cta";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);
  return {
    title: `${site.galleryPageTitle} | ${site.businessName}`,
    description: `Browse our photo gallery and explore the beauty of ${site.businessName}.`,
  };
}

export default async function GalleryPage() {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);

  return (
    <>
      <Nav businessName={site.businessName} calendarUrl={site.calendarUrl} />

      {/* Header */}
      <section className="pt-36 pb-16 text-center" style={{ backgroundColor: "var(--color-bg)" }}>
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
          Gallery
        </p>
        <h1 className="font-headline text-5xl md:text-6xl font-light" style={{ color: "var(--color-primary)" }}>
          {site.galleryPageTitle}
        </h1>
        <div className="w-12 h-px mx-auto mt-6" style={{ backgroundColor: "var(--color-accent)" }} />
      </section>

      {/* Masonry-style grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {site.galleryImages.map((src, i) => (
            <div key={i} className="relative overflow-hidden group break-inside-avoid">
              <Image
                src={src}
                alt={`${site.businessName} — photo ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      <BrochureCta businessName={site.businessName} brochureUrl={site.brochureUrl} />
      <Footer site={site} />
    </>
  );
}
