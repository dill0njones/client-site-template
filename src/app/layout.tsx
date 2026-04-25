import type { Metadata } from "next";
import { headers } from "next/headers";
import { getSiteData } from "@/lib/supabase";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Venue",
  description: "A beautiful wedding venue website",
};

function buildGoogleFontsUrl(headline: string, body: string): string {
  const encode = (f: string) => f.replace(/ /g, "+");
  const families = [
    `family=${encode(headline)}:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400`,
    `family=${encode(body)}:wght@300;400;700`,
  ];
  return `https://fonts.googleapis.com/css2?${families.join("&")}&display=swap`;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost";
  const site = await getSiteData(domain);

  const headlineFamily = site.headlineFont?.family || "Cormorant Garamond";
  const bodyFamily = site.bodyFont?.family || "Lato";
  const fontsUrl = buildGoogleFontsUrl(headlineFamily, bodyFamily);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontsUrl} rel="stylesheet" />
        <style>{`
          :root {
            --font-headline: '${headlineFamily}', Georgia, serif;
            --font-body: '${bodyFamily}', system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
