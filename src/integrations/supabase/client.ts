// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ytuaxleboxkdlvbxeklj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0dWF4bGVib3hrZGx2Ynhla2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzYzMzEsImV4cCI6MjA1NDQxMjMzMX0.qcyYhEu168XuIIQQSL6iBbXpH8tRIvWCsMTrJXVgk6U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
