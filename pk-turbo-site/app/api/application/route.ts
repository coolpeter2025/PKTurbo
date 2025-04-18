import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Ensure environment variables are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Supabase URL or Service Role Key is missing in environment variables.');
}

// Initialize Supabase client - use service role key for server-side operations
const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

// Function to send email notification for applications
const sendApplicationEmail = async (data: any, resumeUrl?: string) => {
  console.log('Sending application notification via Nodemailer...');
  
  // Check for required environment variables
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'operations@pkturbollc.com';
  
  if (!emailUser || !emailPassword) {
    console.error('Email credentials missing in environment variables.');
    return { success: false, error: 'Email configuration missing' };
  }
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword
      },
      debug: process.env.NODE_ENV === 'development'
    });
    
    // Format timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Create HTML template for application
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px;">New Job Application Submission</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phoneNumber}</p>
          <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Driver's License:</strong> ${data.driversLicenseNumber} (${data.driversLicenseState})</p>
          <p><strong>License Expiration:</strong> ${data.driversLicenseExpiration}</p>
          <p><strong>License Suspended/Revoked:</strong> ${data.licenseSuspended}</p>
          <p><strong>DUI/DWI History:</strong> ${data.dui}</p>
          <p><strong>Felony Conviction:</strong> ${data.felony}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333;">Driving Experience:</h3>
          <p style="white-space: pre-line;">${data.drivingExperience || 'Not provided'}</p>
        </div>
        
        ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">Download Resume</a></p>` : ''}
        
        <p style="color: #777; font-size: 0.8em;">Submitted on ${timestamp}</p>
      </div>
    `;
    
    // Send email
    const info = await transporter.sendMail({
      from: `"PK Turbo Applications" <${emailUser}>`,
      to: notificationEmail,
      subject: `New Job Application: ${data.fullName}`,
      html: htmlContent
    });
    
    console.log('Application email sent successfully:', info.messageId);
    return { success: true };
    
  } catch (error) {
    console.error('Error sending application email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Function to upload resume file to Supabase
const uploadResumeToSupabase = async (file: Buffer, filename: string, contentType: string) => {
  // Generate a unique filename to prevent collisions
  const timestamp = Date.now();
  const safeName = filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
  const uniqueFilename = `${timestamp}_${safeName}`;
  
  try {
    const { data, error } = await supabase.storage
      .from('resumes')
      .upload(uniqueFilename, file, {
        contentType,
        cacheControl: '3600'
      });
      
    if (error) throw error;
    
    // Get the public URL for the file
    const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(uniqueFilename);
      
    return urlData.publicUrl;
    
  } catch (error) {
    console.error('Resume upload error:', error);
    throw error;
  }
};

export async function POST(request: NextRequest) {
  // Check if Supabase client initialized correctly
  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json({ error: 'Server configuration error: Supabase credentials missing.' }, { status: 500 });
  }

  try {
    // For multipart form data, we need to handle it differently
    const formData = await request.formData();
    
    // Extract fields
    const fullName = formData.get('fullName') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const email = formData.get('email') as string;
    const dateOfBirth = formData.get('dateOfBirth') as string;
    const address = formData.get('address') as string;
    const driversLicenseNumber = formData.get('driversLicenseNumber') as string;
    const driversLicenseState = formData.get('driversLicenseState') as string;
    const driversLicenseExpiration = formData.get('driversLicenseExpiration') as string;
    const licenseSuspended = formData.get('licenseSuspended') as string;
    const dui = formData.get('dui') as string;
    const felony = formData.get('felony') as string;
    const drivingExperience = formData.get('drivingExperience') as string;
    
    // Get resume file if it exists
    const resumeFile = formData.get('resume') as File | null;
    
    // Validate required fields
    if (!fullName || !phoneNumber || !email || !dateOfBirth || !address || 
        !driversLicenseNumber || !driversLicenseState || !driversLicenseExpiration || 
        !licenseSuspended || !dui || !felony) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Upload resume if provided
    let resumeUrl: string | undefined;
    if (resumeFile && resumeFile.size > 0) {
      // Size validation
      if (resumeFile.size > 5 * 1024 * 1024) { // 5MB limit
        return NextResponse.json(
          { error: 'Resume file exceeds 5MB limit' },
          { status: 400 }
        );
      }
      
      // Type validation
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: 'Invalid file type. Only PDF and Word documents are allowed.' },
          { status: 400 }
        );
      }
      
      // Convert File to Buffer for upload
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Upload to Supabase
      resumeUrl = await uploadResumeToSupabase(buffer, resumeFile.name, resumeFile.type);
    }
    
    // Create application object
    const applicationData = {
      full_name: fullName,
      phone_number: phoneNumber,
      email: email,
      date_of_birth: dateOfBirth,
      address: address,
      drivers_license_number: driversLicenseNumber,
      drivers_license_state: driversLicenseState,
      drivers_license_expiration: driversLicenseExpiration,
      license_suspended: licenseSuspended,
      dui: dui,
      felony: felony,
      driving_experience: drivingExperience || null,
      resume_url: resumeUrl || null
    };
    
    // Insert into Supabase
    console.log('Inserting application into Supabase...');
    const { data: submission, error: insertError } = await supabase
      .from('PK_Turbo_Application')
      .insert(applicationData)
      .select()
      .single();
      
    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json(
        { error: 'Database error storing application.', details: insertError.message },
        { status: 500 }
      );
    }
    
    console.log('Application stored successfully:', submission);
    
    // Send email notification
    const emailResult = await sendApplicationEmail({
      fullName,
      phoneNumber,
      email,
      dateOfBirth,
      address,
      driversLicenseNumber,
      driversLicenseState,
      driversLicenseExpiration,
      licenseSuspended,
      dui,
      felony,
      drivingExperience
    }, resumeUrl);
    
    if (!emailResult.success) {
      console.warn('Email notification failed to send, but application was saved.', emailResult.error);
    }
    
    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been submitted successfully. We will review it and contact you soon.'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Unhandled error in application form API:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred while processing your application.',
        details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
