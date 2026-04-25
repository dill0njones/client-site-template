import { createClient } from "@supabase/supabase-js";
import type { SiteData } from "./types";
import { mockSiteData } from "./mock-data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getSiteData(domain: string): Promise<SiteData> {
  // If Supabase is not configured, return mock data
  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase not configured — using mock data.");
    return mockSiteData;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const cleanDomain = domain.replace(/^www\./, "").split(":")[0];

  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("domain", cleanDomain)
    .single();

  if (error || !data) {
    console.error("Supabase lookup failed — falling back to mock data.", error);
    return mockSiteData;
  }

  // Map snake_case Supabase columns → camelCase SiteData
  const d = data as Record<string, unknown>;
  return {
    slug:                       d.slug as string,
    domain:                     d.domain as string,
    businessName:               d.business_name as string,
    tagline:                    (d.tagline as string) ?? "",
    websiteURL:                 (d.website_url as string) ?? "",
    contactEmail:               (d.contact_email as string) ?? "",
    contactPhone:               (d.contact_phone as string) ?? "",
    address:                    (d.address as SiteData["address"]) ?? { street: "", city: "", state: "", zip: "" },
    googleBusinessProfileURL:   d.google_business_profile_url as string | undefined,
    colorPalette:               (d.color_palette as string[]) ?? [],
    headlineFont:               (d.headline_font as SiteData["headlineFont"]) ?? { family: "", category: "" },
    bodyFont:                   (d.body_font as SiteData["bodyFont"]) ?? { family: "", category: "" },
    mainHeadline:               (d.main_headline as string) ?? "",
    seoSubHeadline:             (d.seo_sub_headline as string) ?? "",
    heroImage:                  (d.hero_image as string) ?? "",
    aboutHeadline:              (d.about_headline as string) ?? "",
    aboutParagraph:             (d.about_paragraph as string) ?? "",
    aboutImage:                 (d.about_image as string) ?? "",
    features:                   (d.features as SiteData["features"]) ?? [],
    weddingDayTeaserHeadline:   (d.wedding_day_teaser_headline as string) ?? "",
    weddingDayTeaserBody:       (d.wedding_day_teaser_body as string) ?? "",
    weddingDayTeaserCta:        (d.wedding_day_teaser_cta as string) ?? "",
    weddingDayTeaserImage:      (d.wedding_day_teaser_image as string) ?? "",
    services:                   (d.services as SiteData["services"]) ?? [],
    venueSpaces:                (d.venue_spaces as SiteData["venueSpaces"]) ?? [],
    amenitiesList:              (d.amenities_list as string) ?? "",
    reviews:                    (d.reviews as SiteData["reviews"]) ?? [],
    hasSocialProofs:            (d.has_social_proofs as boolean) ?? false,
    socialProofImages:          (d.social_proof_images as string[]) ?? [],
    galleryPageTitle:           (d.gallery_page_title as string) ?? "",
    galleryImages:              (d.gallery_images as string[]) ?? [],
    weddingPageHeadline:        (d.wedding_page_headline as string) ?? "",
    weddingPageParagraph:       (d.wedding_page_paragraph as string) ?? "",
    weddingPageImage:           (d.wedding_page_image as string) ?? "",
    aboutPage:                  (d.about_page as SiteData["aboutPage"]) ?? { storyHeadline: "", storyParagraph: "", team: [] },
    brochureUrl:                d.brochure_url as string | undefined,
    calendarUrl:                d.calendar_url as string | undefined,
    metaTitle:                  (d.meta_title as string) ?? "",
    metaDescription:            (d.meta_description as string) ?? "",
    schemaType:                 ((d.schema_type as SiteData["schemaType"]) ?? "EventVenue"),
  };
}
