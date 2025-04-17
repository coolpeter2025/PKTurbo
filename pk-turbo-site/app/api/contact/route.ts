import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Ensure environment variables are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Supabase URL or Service Role Key is missing in environment variables.');
  // Optionally return an error response immediately if config is missing
  // return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
}

// Initialize Supabase client - use service role key for server-side operations
const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

// Function to invoke the Supabase Edge Function for sending email
const sendEmailNotification = async (data: any) => {
  console.log('Attempting to invoke Supabase Edge Function: send-contact-email');
  try {
    const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        to: 'operations@pkturbollc.com', // Target email address
        subject: `New Contact Form Submission: ${data.subject}`,
        // Simple text body for the email
        textBody: `
You received a new contact form submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}

Timestamp: ${new Date().toISOString()}
        `.trim(),
        // You could also add an htmlBody field here if your Edge Function supports it
      },
    });

    if (error) {
      console.error('Error invoking Supabase Edge Function:', error);
      // Decide if this should be a fatal error for the API route
      // For now, we'll log it but allow the API to return success if DB insert worked
      // throw error; // Uncomment to make email failure block success response
    } else {
      console.log('Supabase Edge Function invoked successfully:', response);
    }
    // Assuming the edge function handles the actual success/failure of email sending
    return { success: !error };
  } catch (invokeError) {
    console.error('Exception invoking Supabase Edge Function:', invokeError);
    // Decide how to handle exceptions during invocation
    return { success: false };
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


    // 2. Send the email notification via Supabase Edge Function
    console.log('Sending email notification...');
    const emailResult = await sendEmailNotification({
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
    });

    if (!emailResult.success) {
      // Log the email failure but still return success to the user as the data was saved
      console.warn('Email notification failed to send, but submission was saved.');
    } else {
      console.log('Email notification triggered successfully.');
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
