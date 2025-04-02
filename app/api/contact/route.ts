import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Create Supabase client directly in the API route with fallback values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://stagfacvrlrtstshuwux.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTI0MTYsImV4cCI6MjA1NjM4ODQxNn0.kwkdfeOCQx5cnq98loS9pFPkdKHr2OKHdyy1p_PGFfc';

// Log environment variables for debugging (will appear in Vercel build logs)
console.log('Environment check:', { 
  hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
});

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Configure email transporter
const createTransporter = () => {
  const email = process.env.EMAIL_USER;
  const password = process.env.EMAIL_PASSWORD;
  
  if (!email || !password) {
    console.warn('Email credentials not found in environment variables');
    return null;
  }
  
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,  // true for 465, false for other ports
    auth: {
      user: email,
      pass: password,
    },
  });
};

// Function to send email notification
const sendEmailNotification = async (formData: any) => {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.warn('Email transporter could not be created');
    return false;
  }
  
  try {
    const emailTo = process.env.NOTIFICATION_EMAIL || 'info@delightfulbean.com';
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailTo,
      subject: 'New Contact Form Submission - Delightful Bean',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Event Date:</strong> ${formData.eventDate || 'Not specified'}</p>
        <p><strong>Event Type:</strong> ${formData.eventType || 'Not specified'}</p>
        <p><strong>Guest Count:</strong> ${formData.guestCount || 'Not specified'}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};

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
    
    // Send email notification
    const emailSent = await sendEmailNotification(formData);
    if (!emailSent) {
      console.warn('Email notification could not be sent');
    }

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
