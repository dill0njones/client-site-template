import type { SiteData } from "./types";

export const mockSiteData: SiteData = {
  slug: "opal-oak-summit",
  domain: "opaloaksummit.com",
  businessName: "Opal Oak Summit",
  tagline: "An Intimate Mountainside Wedding Venue",
  websiteURL: "https://opaloaksummit.com",

  contactEmail: "events@opaloaksummit.com",
  contactPhone: "(865) 555-0192",
  address: {
    street: "123 Summit Lane",
    city: "Oakdale",
    state: "TN",
    zip: "37829",
  },
  googleBusinessProfileURL: "https://maps.app.goo.gl/abcdef123456",

  colorPalette: ["#2c3e50", "#d4af37", "#f5f0e8", "#4a5568", "#8b7355"],
  headlineFont: { family: "Cormorant Garamond", category: "serif" },
  bodyFont: { family: "Lato", category: "sans-serif" },

  mainHeadline: "Creating Moments That Will Last a Lifetime",
  seoSubHeadline: "An Intimate Mountainside Wedding Venue in Oakdale, Tennessee",
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",

  aboutHeadline: "A Truly Unforgettable Journey",
  aboutParagraph:
    "The care we devote to each couple is rooted in the understanding that their union is not just a transaction, but a pivotal moment in their lives. Recognizing the uniqueness of this journey, our team is committed to making every step — from the initial property tour to the final farewell on your wedding night — an experience deserving of reverence. Our wedding venue is nestled near the Lone Mountain State Forest in Oakdale, TN.",
  aboutImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80",

  features: [
    {
      title: "Breathtaking Summit Views",
      description:
        "360-degree panoramic views of what can only be described as breathtaking mountain scenery — every angle is a photo opportunity.",
    },
    {
      title: "Perfectly Secluded",
      description:
        "Tucked away from the noise of the world, your celebration unfolds in peaceful, private mountain solitude.",
    },
    {
      title: "The Grand Hall",
      description:
        "A stunning, climate-controlled hall with space for over 350 guests, ensuring comfort in any season.",
    },
    {
      title: "Full-Service Experience",
      description:
        "Our dedicated on-site team handles every detail so you can be fully present on your most important day.",
    },
  ],

  weddingDayTeaserHeadline: "Begin Your Forever at The Summit",
  weddingDayTeaserBody:
    "Discover a place where the grandeur of the mountains meets the intimacy of your love story. A setting so unforgettable, it's the one detail your guests will talk about for years to come.",
  weddingDayTeaserCta: "Explore the Experience",
  weddingDayTeaserImage:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80",

  services: [
    {
      icon: "Building",
      title: "The Grand Hall",
      description:
        "A stunning, climate-controlled hall with space for over 350 guests, ensuring comfort in any season.",
    },
    {
      icon: "Church",
      title: "Indoor Ceremony Hall",
      description:
        "An intimate and beautiful indoor space perfect for ceremonies, seating up to 250 guests.",
    },
    {
      icon: "Heart",
      title: "Bridal & Groom's Suites",
      description:
        "Luxurious, private suites for the wedding party to prepare and relax in style on the big day.",
    },
    {
      icon: "Sun",
      title: "Scenic Outdoor Ceremonies",
      description:
        "Multiple breathtaking outdoor locations with panoramic mountain views as your backdrop.",
    },
    {
      icon: "Users",
      title: "On-Site Staff",
      description:
        "A dedicated on-site manager and two staff members to ensure your day runs flawlessly.",
    },
    {
      icon: "Music",
      title: "Professional Sound System",
      description:
        "High-quality sound with microphones available for your ceremony, speeches, and music.",
    },
  ],

  venueSpaces: [
    {
      id: "1",
      name: "The Summit Arch",
      description:
        "Our signature outdoor ceremony spot featuring a handcrafted wooden arch with breathtaking 180-degree mountain views.",
      imageUrl:
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
    },
    {
      id: "2",
      name: "The Grand Hall",
      description:
        "A modern-rustic reception hall with soaring ceilings, elegant chandeliers, and floor-to-ceiling windows.",
      imageUrl:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    },
    {
      id: "3",
      name: "The Bridal Suite",
      description:
        "A serene and luxurious space for the bridal party to prepare, complete with vanities and private amenities.",
      imageUrl:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    },
  ],

  reviews: [
    {
      author: "Sarah L.",
      rating: 5,
      text: "Opal Oak Summit was an absolute dream for our wedding. The views are breathtaking, and the staff made everything so seamless. We couldn't have asked for a more perfect day.",
    },
    {
      author: "Michael B.",
      rating: 5,
      text: "From our first tour to the final send-off, the experience was flawless. It's a stunning venue with a team that truly cares. Highly recommend for any couple!",
    },
    {
      author: "Emily & Tom",
      rating: 5,
      text: "The most beautiful venue we could have ever imagined. Our photos are incredible, and our guests are still talking about how magical it was. 10/10!",
    },
  ],

  hasSocialProofs: true,
  socialProofImages: [
    "https://placehold.co/200x60/f5f0e8/2c3e50?text=The+Knot",
    "https://placehold.co/200x60/f5f0e8/2c3e50?text=WeddingWire",
    "https://placehold.co/200x60/f5f0e8/2c3e50?text=Carats+%26+Cakes",
  ],

  galleryPageTitle: "Moments at the Summit",
  galleryImages: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
  ],

  weddingPageHeadline: "Your Chapter Begins at the Summit",
  weddingPageParagraph:
    "Envision your day surrounded by endless views and timeless elegance. At Opal Oak Summit, we specialize in turning your wedding dreams into reality, crafting a bespoke celebration that is as unique as your love story. From intimate gatherings to grand celebrations, we have the space, the staff, and the setting to make it perfect.",
  weddingPageImage:
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80",
  amenitiesList:
    "• The Grand Hall – Heat and A/C, seats 350+\n• Indoor Ceremony Hall, seats 250\n• Scenic Outdoor Ceremonies\n• Bride's Suite and Groom's Chamber\n• Spacious prep-kitchen for your choice of caterer\n• On-Site Manager\n• 40+ guest tables\n• 485 padded chairs\n• Two On-Site Staff Members\n• Sound System with Mic\n• Ice Machine, Refrigerator, Heating Box",

  aboutPage: {
    storyHeadline: "Our Story: A Dream Atop a Mountain",
    storyParagraph:
      "Opal Oak Summit was born from a simple yet profound love for the breathtaking beauty of the Tennessee mountains. We envisioned a place that wasn't just a venue, but a destination where couples could escape, celebrate, and begin their new life together surrounded by natural splendor. Every detail — from the hand-carved oak beams in our Grand Hall to the locally sourced stone of our fireplace — was chosen to reflect the timeless elegance of the landscape. We are a family-run venue dedicated to providing a personal, heartfelt service to every couple who chooses to start their forever with us.",
    team: [
      {
        id: "1",
        name: "Eleanor Vance",
        title: "Founder & Visionary",
        bio: "With a background in luxury hospitality, Eleanor personally oversees every event to ensure it meets her exacting standards of elegance and perfection.",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      },
      {
        id: "2",
        name: "Chad Williams",
        title: "Lead Event Coordinator",
        bio: "Chad's passion for logistics and design ensures a seamless and beautifully executed wedding day for every couple. He's the calm in the storm.",
        imageUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      },
    ],
  },

  brochureUrl: "#brochure",
  calendarUrl: "#schedule",

  metaTitle: "Mountainside Wedding Venue in Oakdale, TN | Opal Oak Summit",
  metaDescription:
    "Discover Opal Oak Summit, an intimate mountainside wedding venue in Oakdale, Tennessee. Breathtaking 360-degree views, the Grand Hall, and a dedicated team to make your dream wedding a reality.",
  schemaType: "EventVenue",
};
