import { headers } from "next/headers";
import type { Metadata } from "next";
import Image from "next/image";
import { getSiteData } from "@/lib/supabase";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Services from "@/components/sections/services";
import VenueSpaces from "@/components/sections/venue-spaces";
import Reviews from "@/components/sections/reviews";
import BrochureCta from "@/components/sections/brochure-cta";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);
  return {
    title: `Weddings | ${site.businessName}`,
    description: site.weddingPageParagraph.slice(0, 160),
  };
}

export default async function WeddingsPage() {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);

  return (
    <>
      <Nav businessName={site.businessName} calendarUrl={site.calendarUrl} />

      {/* Page Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={site.weddingPageImage}
          alt={site.weddingPageHeadline}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-4">Weddings</p>
          <h1 className="font-headline text-5xl md:text-7xl font-light leading-tight max-w-3xl">
            {site.weddingPageHeadline}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: "var(--color-accent)" }} />
          <p className="text-lg leading-relaxed text-gray-600">{site.weddingPageParagraph}</p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
              Included
            </p>
            <h2 className="font-headline text-4xl font-light" style={{ color: "var(--color-primary)" }}>
              What&apos;s Included
            </h2>
          </div>
          <div className="bg-white p-8 md:p-12">
            <pre className="whitespace-pre-wrap text-gray-600 leading-loose font-sans text-base">
              {site.amenitiesList}
            </pre>
          </div>
        </div>
      </section>

      <Services services={site.services} />
      <VenueSpaces spaces={site.venueSpaces} />
      <Reviews reviews={site.reviews} />
      <BrochureCta businessName={site.businessName} brochureUrl={site.brochureUrl} />
      <Footer site={site} />
    </>
  );
}
