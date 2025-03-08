import { createClient } from '@supabase/supabase-js';

// For client-side usage with hardcoded values
const supabaseUrl = 'https://stagfacvrlrtstshuwux.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTI0MTYsImV4cCI6MjA1NjM4ODQxNn0.kwkdfeOCQx5cnq98loS9pFPkdKHr2OKHdyy1p_PGFfc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true; // Always true now since we're using hardcoded values
};
