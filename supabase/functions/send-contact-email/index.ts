import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { Resend } from 'npm:resend'; // Using Resend via npm specifier

// IMPORTANT: Store your Resend API Key as a Supabase Secret!
// Run: supabase secrets set RESEND_API_KEY=your_resend_api_key
const resendApiKey = Deno.env.get('RESEND_API_KEY');

// Email address to send from (must be a verified domain in Resend)
const FROM_EMAIL = 'noreply@yourdomain.com'; // CHANGE THIS to your verified sender email

serve(async (req) => {
  // 1. Check if Resend API key is available
  if (!resendApiKey) {
    console.error('Resend API key is not set in Supabase secrets.');
    return new Response(
      JSON.stringify({ error: 'Email service configuration error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 2. Initialize Resend client
  const resend = new Resend(resendApiKey);

  // 3. Parse request body
  let to, subject, textBody;
  try {
    const body = await req.json();
    to = body.to;
    subject = body.subject;
    textBody = body.textBody;

    if (!to || !subject || !textBody) {
      throw new Error('Missing required fields in request body (to, subject, textBody)');
    }
  } catch (error) {
    console.error('Error parsing request body:', error);
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 4. Send the email using Resend
  try {
    console.log(`Sending email to ${to} with subject "${subject}"`);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL, // Replace with your verified sender email
      to: to,
      subject: subject,
      text: textBody, // Use the text body passed from the API route
      // You could add an 'html' field here too if needed
    });

    if (error) {
      console.error('Resend API error:', error);
      // Return a more specific error if possible
      return new Response(
        JSON.stringify({ error: 'Failed to send email.', details: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully:', data);
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully.', emailId: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred while sending the email.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
