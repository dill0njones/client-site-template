import { headers } from "next/headers";
import type { Metadata } from "next";
import Image from "next/image";
import { getSiteData } from "@/lib/supabase";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Reviews from "@/components/sections/reviews";
import TourCta from "@/components/sections/tour-cta";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);
  return {
    title: `About | ${site.businessName}`,
    description: site.aboutPage.storyParagraph.slice(0, 160),
  };
}

export default async function AboutPage() {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);
  const { aboutPage } = site;

  return (
    <>
      <Nav businessName={site.businessName} calendarUrl={site.calendarUrl} />

      {/* Page Header */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "var(--color-bg)" }}>
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
          Our Story
        </p>
        <h1 className="font-headline text-5xl md:text-6xl font-light max-w-3xl mx-auto px-6" style={{ color: "var(--color-primary)" }}>
          {aboutPage.storyHeadline}
        </h1>
        <div className="w-12 h-px mx-auto mt-8" style={{ backgroundColor: "var(--color-accent)" }} />
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={site.aboutImage}
              alt={aboutPage.storyHeadline}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-600">{aboutPage.storyParagraph}</p>
          </div>
        </div>
      </section>

      {/* Team */}
      {aboutPage.team && aboutPage.team.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
                The People Behind the Magic
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-light" style={{ color: "var(--color-primary)" }}>
                Meet Our Team
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {aboutPage.team.map((member) => (
                <div key={member.id} className="text-center">
                  {member.imageUrl && (
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  )}
                  <h3 className="font-headline text-xl font-medium mb-1" style={{ color: "var(--color-primary)" }}>
                    {member.name}
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-accent)" }}>
                    {member.title}
                  </p>
                  {member.bio && (
                    <p className="text-sm leading-relaxed text-gray-500">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews reviews={site.reviews} />
      <TourCta businessName={site.businessName} heroImage={site.heroImage} calendarUrl={site.calendarUrl} />
      <Footer site={site} />
    </>
  );
}
