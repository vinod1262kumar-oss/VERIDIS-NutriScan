// Supabase browser configuration. These values are public by design.
// Use your Supabase Project URL and anon/publishable key only. NEVER put a service_role key here.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Supabase configuration missing. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Netlify."
  );
}

export { SUPABASE_URL, SUPABASE_ANON_KEY };
  
