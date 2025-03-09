import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client directly in the API route with fallback values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://stagfacvrlrtstshuwux.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTI0MTYsImV4cCI6MjA1NjM4ODQxNn0.kwkdfeOCQx5cnq98loS9pFPkdKHr2OKHdyy1p_PGFfc';

// Log environment variables for debugging (will appear in Vercel build logs)
console.log('Environment check:', { 
  hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
});

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Store the contact submission in Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          event_type: formData.eventType,
          guest_count: formData.guestCount ? parseInt(formData.guestCount) : null,
          message: formData.message,
        }
      ]);
    
    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    // For monitoring purposes, also log the submission
    console.log('Contact form submission stored in Supabase:', {
      name: formData.name,
      email: formData.email,
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
