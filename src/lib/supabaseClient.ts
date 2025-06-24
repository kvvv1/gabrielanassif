import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bjvemgoocvkaecmqxvnj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdmVtZ29vY3ZrYWVjbXF4dm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NDczNjQsImV4cCI6MjA2NjEyMzM2NH0.grpq-XBBQk3GlC2mw2yu7pcJcB-ZE6RyPyMj2sJ_0YE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
