# Wedding Venue Website Template

A multi-tenant Next.js website template for wedding venues. Each client gets their own custom domain — content is served dynamically from Supabase based on the incoming domain.

## How It Works

1. Client domain (`opaloaksummit.com`) points to this Vercel deployment
2. App reads the `host` header → queries Supabase `clients` table for that domain
3. All content (headlines, images, colors, fonts, reviews, etc.) is rendered from Supabase
4. No new deployments needed per client — just add a row in Supabase + domain in Vercel

## Stack

- **Next.js 15** (App Router, ISR)
- **TypeScript + Tailwind CSS**
- **Supabase** (Postgres — `clients` table)
- **Framer Motion** for animations
- **Lucide** for icons

## Getting Started

1. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
2. `npm install`
3. `npm run dev` → opens at `http://localhost:3000` (loads mock data automatically when Supabase is not configured)

## Adding a New Client

1. Insert a row in the Supabase `clients` table (see `src/lib/types.ts` for the full schema)
2. Add the client's domain as a custom domain in Vercel
3. Update client's DNS to point to Vercel

## Mock Data

When `NEXT_PUBLIC_SUPABASE_URL` is not set, the app falls back to `src/lib/mock-data.ts` (Opal Oak Summit demo). This is useful for local development and design work.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
