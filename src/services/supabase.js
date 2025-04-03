import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nyhbivncneuhdpefcvqr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55aGJpdm5jbmV1aGRwZWZjdnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjA1MDgsImV4cCI6MjA1NzgzNjUwOH0.ICsutFdsnfdi6DEbO-9V5fMAm_gDLC19ui11SlcMibY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
