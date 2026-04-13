import { createServerClient } from "@supabase/ssr";

export type EventRecord = {
  id: string;
  title: string | null;
  description: string | null;
  location_name: string | null;
  start_time: string | null;
  join_count: number | null;
};

function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }

  // Data fetcher-only client: no cookie/session mutation required.
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {},
    },
  });
}

export async function getEvent(id: string): Promise<EventRecord | null> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("events")
    .select("id,title,description,location_name,start_time")
    .eq("id", id)
    .maybeSingle();
  console.log("data", data);
  console.log("error", error);
  if (error) {
    // Treat row-not-found and RLS "not visible" as not found.
    return null;
  }

  return (data ?? null) as EventRecord | null;
}
