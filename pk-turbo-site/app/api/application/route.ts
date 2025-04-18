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
const sendApplicationEmail = async (data: any) => {
  console.log('Attempting to send application notification via Nodemailer...');
  
  // Check for required environment variables
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'operations@pkturbollc.com';
  
  // Log configuration (without showing full password)
  console.log('Email configuration:');
  console.log('- EMAIL_USER:', emailUser || 'not set');
  if (emailPassword) {
    const firstTwo = emailPassword.substring(0, 2);
    const lastTwo = emailPassword.substring(emailPassword.length - 2);
    console.log('- EMAIL_PASSWORD:', `${firstTwo}***${lastTwo} (${emailPassword.length} characters)`);
  } else {
    console.log('- EMAIL_PASSWORD: not set');
  }
  console.log('- NOTIFICATION_EMAIL:', notificationEmail);
  
  if (!emailUser || !emailPassword) {
    console.error('Email credentials missing in environment variables.');
    return { success: false, error: 'Email configuration missing' };
  }
  
  try {
    // Create Nodemailer transporter using Gmail SMTP with debugging enabled
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword // This should be an app password, not a regular password
      },
      debug: process.env.NODE_ENV === 'development', // Enable debug output in development
      logger: process.env.NODE_ENV === 'development'  // Log to console in development
    });
    
    // Verify connection configuration
    console.log('Verifying SMTP connection...');
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      console.log('Will attempt to send email anyway...');
    }
    
    // Format the timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Create HTML email template
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
        
        <p style="color: #777; font-size: 0.8em;">Submitted on ${timestamp}</p>
      </div>
    `;
    
    // Plain text alternative for email clients that don't support HTML
    const textContent = `
New Job Application Submission:

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phoneNumber}
Date of Birth: ${data.dateOfBirth}
Address: ${data.address}
Driver's License: ${data.driversLicenseNumber} (${data.driversLicenseState})
License Expiration: ${data.driversLicenseExpiration}
License Suspended/Revoked: ${data.licenseSuspended}
DUI/DWI History: ${data.dui}
Felony Conviction: ${data.felony}

Driving Experience:
${data.drivingExperience || 'Not provided'}

Submitted on ${timestamp}
    `.trim();
    
    // Configure email options
    const mailOptions = {
      from: `"PK Turbo Applications" <${emailUser}>`,
      to: notificationEmail,
      subject: `New Job Application: ${data.fullName}`,
      text: textContent,
      html: htmlContent
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Application email sent successfully:', info.messageId);
    return { success: true };
    
  } catch (error) {
    console.error('Error sending application email with Nodemailer:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export async function POST(request: NextRequest) {
  // Check if Supabase client initialized correctly
  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json({ error: 'Server configuration error: Supabase credentials missing.' }, { status: 500 });
  }

  try {
    // Parse JSON data from request body instead of FormData
    const data = await request.json();
    
    // Extract fields from JSON body
    const fullName = data.fullName;
    const phoneNumber = data.phoneNumber;
    const email = data.email;
    const dateOfBirth = data.dateOfBirth;
    const address = data.address;
    const driversLicenseNumber = data.driversLicenseNumber;
    const driversLicenseState = data.driversLicenseState;
    const driversLicenseExpiration = data.driversLicenseExpiration;
    const licenseSuspended = data.licenseSuspended;
    const dui = data.dui;
    const felony = data.felony;
    const drivingExperience = data.drivingExperience || '';
    
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
      driving_experience: drivingExperience || null
    };
    
    let submission = null;
    let insertError = null;
    
    let dbSuccess = false;
    
    try {
      // Insert into Supabase
      console.log('Inserting application into Supabase...');
      const result = await supabase
        .from('PK_Turbo_Application')
        .insert(applicationData)
        .select()
        .single();
        
      submission = result.data;
      insertError = result.error;

      if (insertError) {
        console.error('Supabase insert error:', insertError);
        
        // We'll log the error but continue to send email
        if (insertError.message?.includes('relation') && insertError.message?.includes('does not exist')) {
          console.error('The Supabase table "PK_Turbo_Application" has not been created yet. See instructions in docs/supabase-setup-guide.md');
        }
        
        // We won't return an error here, just note that DB storage failed
        dbSuccess = false;
      } else {
        console.log('Application stored successfully:', submission);
        dbSuccess = true;
      }
    } catch (error) {
      console.error('Error during Supabase insert operation:', error);
      dbSuccess = false;
      // We won't return an error here either, continue with email sending
    }
    
    // Always attempt to send email, regardless of database success
    console.log('Sending email notification via Nodemailer...');
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
    });
    
    const emailSuccess = emailResult.success;
    
    if (!emailSuccess) {
      console.warn('Email notification failed to send:', emailResult.error);
    } else {
      console.log('Email notification sent successfully.');
    }
    
    // Craft response based on what worked
    if (dbSuccess && emailSuccess) {
      return NextResponse.json(
        {
          success: true,
          message: 'Your application has been submitted successfully. We will review it and contact you soon.'
        },
        { status: 200 }
      );
    } else if (dbSuccess) {
      return NextResponse.json(
        {
          success: true,
          message: 'Your application has been saved to our database, but there was an issue sending the email notification.'
        },
        { status: 200 }
      );
    } else if (emailSuccess) {
      return NextResponse.json(
        {
          success: true,
          message: 'Your application has been received via email, but there was an issue saving it to our database.'
        },
        { status: 200 }
      );
    } else {
      // Neither worked
      return NextResponse.json(
        {
          error: 'We were unable to process your application at this time. Please try again later or contact us directly.'
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Unhandled error in application form API:', error);
    
    try {
      // Even if the database storage fails, try to send the email notification if we can extract data from the request
      let applicationData = null;
      
      try {
        // Try to re-extract the data from the request
        applicationData = await request.json();
      } catch (parseError) {
        console.error('Could not parse request data for email fallback:', parseError);
      }
      
      if (applicationData) {
        console.log('Attempting to send email notification despite database error...');
        const emailResult = await sendApplicationEmail(applicationData);
        
        if (emailResult.success) {
          console.log('Email notification sent successfully despite database error.');
          return NextResponse.json(
            {
              success: true,
              message: 'Your application has been received via email, but there was an issue saving it to our database. Our team will still review your submission.'
            },
            { status: 200 }
          );
        }
      }
    } catch (emailError) {
      console.error('Failed to send email after database error:', emailError);
    }
    
    // If both database and email fail, return error
    return NextResponse.json(
      {
        error: 'An unexpected error occurred while processing your application.',
        details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
