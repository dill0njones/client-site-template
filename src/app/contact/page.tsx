import { headers } from "next/headers";
import type { Metadata } from "next";
import { getSiteData } from "@/lib/supabase";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);
  return {
    title: `Contact | ${site.businessName}`,
    description: `Get in touch with ${site.businessName}. Schedule a tour, ask questions, or request our venue booklet.`,
  };
}

export default async function ContactPage() {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);

  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
      href: site.googleBusinessProfileURL,
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.contactPhone,
      href: `tel:${site.contactPhone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: site.contactEmail,
      href: `mailto:${site.contactEmail}`,
    },
    {
      icon: Calendar,
      label: "Book a Tour",
      value: "Schedule your private venue visit",
      href: site.calendarUrl || "#",
    },
  ];

  return (
    <>
      <Nav businessName={site.businessName} calendarUrl={site.calendarUrl} />

      {/* Header */}
      <section className="pt-40 pb-20 text-center" style={{ backgroundColor: "var(--color-bg)" }}>
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-accent)" }}>
          We&apos;d Love to Hear From You
        </p>
        <h1 className="font-headline text-5xl md:text-6xl font-light" style={{ color: "var(--color-primary)" }}>
          Get In Touch
        </h1>
        <div className="w-12 h-px mx-auto mt-8" style={{ backgroundColor: "var(--color-accent)" }} />
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="font-headline text-3xl font-light mb-8" style={{ color: "var(--color-primary)" }}>
              Reach Out Directly
            </h2>
            <div className="flex flex-col gap-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-bg)", color: "var(--color-accent)" }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1 text-gray-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-base hover:text-[var(--color-accent)] transition-colors"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-base" style={{ color: "var(--color-primary)" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-headline text-3xl font-light mb-8" style={{ color: "var(--color-primary)" }}>
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Wedding Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors text-gray-600"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="Tell us about your vision for your wedding day..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-sm tracking-widest uppercase text-white transition-all"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer site={site} />
    </>
  );
}
