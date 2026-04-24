import { headers } from "next/headers";
import type { Metadata } from "next";
import { getSiteData } from "@/lib/supabase";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about-section";
import Features from "@/components/sections/features";
import WeddingTeaser from "@/components/sections/wedding-teaser";
import Services from "@/components/sections/services";
import VenueSpaces from "@/components/sections/venue-spaces";
import Reviews from "@/components/sections/reviews";
import GalleryPreview from "@/components/sections/gallery-preview";
import BrochureCta from "@/components/sections/brochure-cta";
import SocialProof from "@/components/sections/social-proof";
import TourCta from "@/components/sections/tour-cta";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);
  return {
    title: site.metaTitle,
    description: site.metaDescription,
    openGraph: {
      title: site.metaTitle,
      description: site.metaDescription,
      images: [site.heroImage],
    },
  };
}

export default async function HomePage() {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);

  return (
    <>
      <Nav businessName={site.businessName} calendarUrl={site.calendarUrl} />
      <Hero
        businessName={site.businessName}
        mainHeadline={site.mainHeadline}
        seoSubHeadline={site.seoSubHeadline}
        heroImage={site.heroImage}
        brochureUrl={site.brochureUrl}
        calendarUrl={site.calendarUrl}
      />
      <AboutSection
        aboutHeadline={site.aboutHeadline}
        aboutParagraph={site.aboutParagraph}
        aboutImage={site.aboutImage}
      />
      <Features features={site.features} />
      <WeddingTeaser
        headline={site.weddingDayTeaserHeadline}
        body={site.weddingDayTeaserBody}
        ctaText={site.weddingDayTeaserCta}
        image={site.weddingDayTeaserImage}
      />
      <Services services={site.services} />
      <VenueSpaces spaces={site.venueSpaces} />
      <Reviews reviews={site.reviews} />
      <GalleryPreview galleryImages={site.galleryImages} businessName={site.businessName} />
      <BrochureCta businessName={site.businessName} brochureUrl={site.brochureUrl} />
      {site.hasSocialProofs && site.socialProofImages.length > 0 && (
        <SocialProof images={site.socialProofImages} businessName={site.businessName} />
      )}
      <TourCta
        businessName={site.businessName}
        heroImage={site.aboutImage}
        calendarUrl={site.calendarUrl}
      />
      <Footer site={site} />
    </>
  );
}
