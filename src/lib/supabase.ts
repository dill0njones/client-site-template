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

  return data as SiteData;
}
