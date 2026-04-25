/**
 * Seed script — inserts Opal Oak Summit demo data with domain='localhost'
 * so the local dev server reads from Supabase instead of mock data.
 *
 * Usage: node scripts/seed-test.mjs
 * Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse .env.local manually
const envPath = resolve(__dirname, '../.env.local');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => l.split('=').map(s => s.trim()))
    .map(([k, ...v]) => [k, v.join('=')])
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const row = {
  slug: 'opal-oak-summit-test',
  domain: 'localhost',
  business_name: 'Opal Oak Summit',
  tagline: 'An Intimate Mountainside Wedding Venue',
  website_url: 'https://opaloaksummit.com',
  contact_email: 'events@opaloaksummit.com',
  contact_phone: '(865) 555-0192',
  address: { street: '123 Summit Lane', city: 'Oakdale', state: 'TN', zip: '37829' },
  google_business_profile_url: 'https://maps.app.goo.gl/abcdef123456',
  color_palette: ['#2c3e50', '#d4af37', '#f5f0e8', '#4a5568', '#8b7355'],
  headline_font: { family: 'Cormorant Garamond', category: 'serif' },
  body_font: { family: 'Lato', category: 'sans-serif' },
  main_headline: 'Creating Moments That Will Last a Lifetime',
  seo_sub_headline: 'An Intimate Mountainside Wedding Venue in Oakdale, Tennessee',
  hero_image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  about_headline: 'A Truly Unforgettable Journey',
  about_paragraph: 'The care we devote to each couple is rooted in the understanding that their union is not just a transaction, but a pivotal moment in their lives.',
  about_image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',
  features: [
    { title: 'Breathtaking Summit Views', description: '360-degree panoramic views of breathtaking mountain scenery.' },
    { title: 'Perfectly Secluded', description: 'Tucked away from the noise of the world, in peaceful mountain solitude.' },
    { title: 'The Grand Hall', description: 'A stunning, climate-controlled hall with space for over 350 guests.' },
    { title: 'Full-Service Experience', description: 'Our dedicated on-site team handles every detail.' },
  ],
  wedding_day_teaser_headline: 'Begin Your Forever at The Summit',
  wedding_day_teaser_body: 'Discover a place where the grandeur of the mountains meets the intimacy of your love story.',
  wedding_day_teaser_cta: 'Explore the Experience',
  wedding_day_teaser_image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
  services: [
    { icon: 'Building', title: 'The Grand Hall', description: 'A stunning, climate-controlled hall with space for over 350 guests.' },
    { icon: 'Church', title: 'Indoor Ceremony Hall', description: 'An intimate indoor space perfect for ceremonies, seating up to 250 guests.' },
    { icon: 'Heart', title: 'Bridal & Groom\'s Suites', description: 'Luxurious, private suites for the wedding party to prepare in style.' },
    { icon: 'Sun', title: 'Scenic Outdoor Ceremonies', description: 'Multiple breathtaking outdoor locations with panoramic mountain views.' },
  ],
  venue_spaces: [
    { id: '1', name: 'The Summit Arch', description: 'Signature outdoor ceremony spot with handcrafted wooden arch and 180-degree mountain views.', imageUrl: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80' },
    { id: '2', name: 'The Grand Hall', description: 'A modern-rustic reception hall with soaring ceilings, elegant chandeliers, and floor-to-ceiling windows.', imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80' },
    { id: '3', name: 'The Bridal Suite', description: 'A serene and luxurious space for the bridal party to prepare.', imageUrl: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80' },
  ],
  amenities_list: '• The Grand Hall – Heat and A/C, seats 350+\n• Indoor Ceremony Hall, seats 250',
  reviews: [
    { author: 'Sarah L.', rating: 5, text: 'Opal Oak Summit was an absolute dream for our wedding.' },
    { author: 'Michael B.', rating: 5, text: 'From our first tour to the final send-off, the experience was flawless.' },
    { author: 'Emily & Tom', rating: 5, text: 'The most beautiful venue we could have ever imagined.' },
  ],
  has_social_proofs: true,
  social_proof_images: [
    'https://placehold.co/200x60/f5f0e8/2c3e50?text=The+Knot',
    'https://placehold.co/200x60/f5f0e8/2c3e50?text=WeddingWire',
  ],
  gallery_page_title: 'Moments at the Summit',
  gallery_images: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
  ],
  selected_media: [],
  wedding_page_headline: 'Your Chapter Begins at the Summit',
  wedding_page_paragraph: 'Envision your day surrounded by endless views and timeless elegance.',
  wedding_page_image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80',
  about_page: {
    storyHeadline: 'Our Story: A Dream Atop a Mountain',
    storyParagraph: 'Opal Oak Summit was born from a simple yet profound love for the breathtaking beauty of the Tennessee mountains.',
    team: [
      { id: '1', name: 'Eleanor Vance', title: 'Founder & Visionary', bio: 'Eleanor personally oversees every event.', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    ],
  },
  brochure_url: '#brochure',
  calendar_url: '#schedule',
  meta_title: 'Mountainside Wedding Venue in Oakdale, TN | Opal Oak Summit',
  meta_description: 'Discover Opal Oak Summit, an intimate mountainside wedding venue in Oakdale, Tennessee.',
  schema_type: 'EventVenue',
};

// Upsert so re-running the script doesn't fail on unique constraint
const { data, error } = await supabase
  .from('clients')
  .upsert(row, { onConflict: 'domain' })
  .select('id, slug, domain')
  .single();

if (error) {
  console.error('❌ Seed failed:', error.message);
  process.exit(1);
}

console.log('✅ Seeded successfully:', data);
