import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Ensure environment variables are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY; // Changed to match Vercel env variable name

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Supabase URL or Service Role Key is missing in environment variables.');
  // Optionally return an error response immediately if config is missing
  // return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
}

// Initialize Supabase client - use service role key for server-side operations
const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

// Function to send email notification using Nodemailer with Gmail SMTP
const sendEmailNotification = async (data: any) => {
  console.log('Attempting to send email notification via Nodemailer...');
  
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
        <h2 style="color: #333; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="white-space: pre-line;">${data.message}</p>
        </div>
        
        <p style="color: #777; font-size: 0.8em;">Submitted on ${timestamp}</p>
      </div>
    `;
    
    // Plain text alternative for email clients that don't support HTML
    const textContent = `
New Contact Form Submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}

Submitted on ${timestamp}
    `.trim();
    
    // Configure email options
    const mailOptions = {
      from: `"PK Turbo Contact" <${emailUser}>`,
      to: notificationEmail,
      subject: `New Contact Form Submission: ${data.subject}`,
      text: textContent,
      html: htmlContent
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true };
    
  } catch (error) {
    console.error('Error sending email with Nodemailer:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export async function POST(request: NextRequest) {
  // Check if Supabase client initialized correctly
  if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({ error: 'Server configuration error: Supabase credentials missing.' }, { status: 500 });
  }

  try {
    const data = await request.json();

    // Validate form data
    const { name, email, phone, subject, message } = data;

    if (!name || !email || !subject || !message) {
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

    // 1. Insert into Supabase database
    console.log('Inserting submission into Supabase...');
    const { data: submission, error: insertError } = await supabase
      .from('PK_Turbo_Message') // Updated table name as requested
      .insert({
        name,
        email,
        phone: phone || null, // Use null if phone is optional and not provided
        subject,
        message,
      })
      .select() // Optionally select the inserted data back
      .single(); // Expect a single row back

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      // Provide a more specific error message if possible
      return NextResponse.json(
        { error: 'Database error storing submission.', details: insertError.message },
        { status: 500 }
      );
    }
    console.log('Submission stored successfully:', submission);


    // 2. Send the email notification via Nodemailer
    console.log('Sending email notification via Nodemailer...');
    const emailResult = await sendEmailNotification({
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
    });

    if (!emailResult.success) {
      // Log the email failure but still return success to the user as the data was saved
      console.warn('Email notification failed to send, but submission was saved.', emailResult.error);
    } else {
      console.log('Email notification sent successfully.');
    }

    // Return success response to the client
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We\'ll get back to you soon!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unhandled error in contact form API:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred while processing your request.',
        // Avoid sending detailed internal errors to the client in production
        details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
