export type Review = {
  author: string;
  rating: number;
  text: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type VenueSpace = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio?: string;
  imageUrl?: string;
};

export type AboutPage = {
  storyHeadline: string;
  storyParagraph: string;
  team: TeamMember[];
};

export type SiteData = {
  // Identity
  slug: string;
  domain: string;
  businessName: string;
  tagline: string;
  websiteURL: string;

  // Contact
  contactEmail: string;
  contactPhone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  googleBusinessProfileURL?: string;

  // Branding
  colorPalette: string[];
  headlineFont: { family: string; category: string };
  bodyFont: { family: string; category: string };

  // Homepage — Hero
  mainHeadline: string;
  seoSubHeadline: string;
  heroImage: string;

  // Homepage — About Section
  aboutHeadline: string;
  aboutParagraph: string;
  aboutImage: string;

  // Homepage — Features (3-4 bullet points)
  features: { title: string; description: string }[];

  // Homepage — Wedding Day Teaser
  weddingDayTeaserHeadline: string;
  weddingDayTeaserBody: string;
  weddingDayTeaserCta: string;
  weddingDayTeaserImage: string;

  // Homepage — Services
  services: Service[];

  // Homepage — Venue Spaces
  venueSpaces: VenueSpace[];

  // Homepage — Reviews
  reviews: Review[];

  // Homepage — Social Proof
  hasSocialProofs: boolean;
  socialProofImages: string[];

  // Gallery
  galleryPageTitle: string;
  galleryImages: string[];

  // Weddings Page
  weddingPageHeadline: string;
  weddingPageParagraph: string;
  weddingPageImage: string;
  amenitiesList: string;

  // About Page
  aboutPage: AboutPage;

  // Lead Capture
  brochureUrl?: string;
  calendarUrl?: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  schemaType: "EventVenue" | "LodgingBusiness" | "LocalBusiness";
};
