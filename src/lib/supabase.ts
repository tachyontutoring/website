import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser Supabase client for the public lead form. Uses the ANON (publishable)
 * key only — safe to expose. Row Level Security on `leads` restricts the anon
 * role to INSERT, so no one can read leads from the client. Never put the
 * service-role key in a NEXT_PUBLIC_* var.
 *
 * If env vars are absent (fresh clone), this returns null and the form degrades
 * to a friendly message instead of crashing.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!client) client = createClient(url as string, anonKey as string);
  return client;
}
