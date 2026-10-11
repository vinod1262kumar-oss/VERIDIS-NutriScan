// Supabase browser configuration. These values are public by design.
// Use your Supabase Project URL and anon/publishable key only. NEVER put a service_role key here.
(function () {
const config = {
url: "%VITE_SUPABASE_URL%",
anonKey: "%VITE_SUPABASE_ANON_KEY%"
};

window.VERIDIS_SUPABASE_CONFIG = config;
})();
