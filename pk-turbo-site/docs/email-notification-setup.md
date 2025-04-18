# Email Notification Setup for Contact Form

This document outlines the email notification system implemented for the PK Turbo contact form.

## Overview

The contact form submissions follow this process:
1. Form data is submitted to the `/api/contact` Next.js API route
2. Data is stored in the Supabase `PK_Turbo_Message` table 
3. An email notification is sent via Nodemailer using Gmail SMTP
4. A success/error response is returned to the client

## Required Environment Variables

For this system to work properly, the following environment variables must be set in your Vercel project:

| Variable Name | Description | Example |
|---------------|-------------|---------|
| `EMAIL_USER` | Gmail account username | youremail@gmail.com |
| `EMAIL_PASSWORD` | Gmail app password (not regular password) | abcdefghijklmnop |
| `NOTIFICATION_EMAIL` | Recipient email address | operations@pkturbollc.com |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | https://your-project.supabase.co |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | your-service-role-key |

## Setting Up Gmail with App Password

Gmail requires using an "App Password" instead of your regular account password for SMTP access:

1. Enable 2-Step Verification on your Google account:
   - Go to Google Account > Security
   - Under "Signing in to Google," select 2-Step Verification and follow the steps

2. Generate an App Password:
   - Go to Google Account > Security
   - Under "Signing in to Google," select App passwords
   - Select "Mail" as the app and "Other" as the device
   - Enter a name (e.g., "PK Turbo Website")
   - Click "Generate"
   - Use the generated 16-character password as your `EMAIL_PASSWORD` environment variable

## Setting Up Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each of the required variables listed above
4. Deploy your project again for the changes to take effect

## Testing

To test the email notification system:

1. Fill out and submit the contact form on the website
2. Verify that the submission appears in your Supabase `PK_Turbo_Message` table
3. Check that the notification email is received at the designated address
4. Monitor server logs for any error messages

## Troubleshooting

### Email Not Sending

- Verify that all environment variables are correctly set
- Check if the Gmail account has 2FA enabled and if the app password is correct
- Ensure the Gmail account doesn't have security restrictions preventing SMTP access
- Look for error messages in Vercel logs or server console

### Database Errors

- Verify Supabase credentials and table structure
- Check if the `PK_Turbo_Message` table exists and has the correct columns
- Verify that the service role has the necessary permissions

## Email Template

The current implementation sends a formatted HTML email with:
- Form submission details (name, email, phone, subject, message)
- Timestamp of submission
- Styling for better readability
- Plain text alternative for email clients that don't support HTML

## Future Improvements

Potential enhancements to consider:
- Adding email templates for different types of submissions
- Implementing email queue for handling high volumes
- Adding rate limiting to prevent form spam
- Implementing CAPTCHA verification

For any questions or issues, please contact the development team.
