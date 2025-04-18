# Setting Up Environment Variables in Vercel Dashboard

This guide will walk you through the process of setting up the required environment variables for the PK Turbo website in the Vercel dashboard.

## Prerequisites

1. Access to the Vercel account where the project is deployed
2. A Gmail account for sending notifications (with 2FA enabled)
3. Access to the Supabase project (if you need to retrieve Supabase credentials)

## Step 1: Generate a Gmail App Password

Before configuring Vercel, you need to generate an App Password for your Gmail account:

1. **Enable 2-Step Verification on your Google account**:
   - Go to [Google Account Security Settings](https://myaccount.google.com/security)
   - Scroll to "Signing in to Google" and select "2-Step Verification"
   - Follow the steps to enable 2FA if not already enabled

2. **Generate an App Password**:
   - Go back to [Google Account Security Settings](https://myaccount.google.com/security)
   - Scroll to "Signing in to Google" and select "App passwords"
   - Select "Mail" as the app and "Other" as the device type
   - Enter a name such as "PK Turbo Website" and click "Generate"
   - You'll see a 16-character password - **copy this password immediately** as you won't be able to see it again

## Step 2: Access Vercel Project Settings

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the project for the PK Turbo website
3. Click on the "Settings" tab in the top navigation

## Step 3: Add Environment Variables

1. In the project Settings, click on "Environment Variables" in the left sidebar
2. You'll need to add the following variables:

### Adding EMAIL_USER

1. Click "Add New" button
2. In the form that appears:
   - **Name**: `EMAIL_USER`
   - **Value**: Enter the Gmail address (e.g., `your-email@gmail.com`)
   - **Environment**: Select all environments where this should be available (Production, Preview, Development)
   - Click "Save"

### Adding EMAIL_PASSWORD

1. Click "Add New" button again
2. In the form that appears:
   - **Name**: `EMAIL_PASSWORD`
   - **Value**: Paste the 16-character App Password you generated earlier
   - **Environment**: Select all environments where this should be available
   - Click "Save"

### Adding NOTIFICATION_EMAIL

1. Click "Add New" button again
2. In the form that appears:
   - **Name**: `NOTIFICATION_EMAIL`
   - **Value**: `operations@pkturbollc.com` (or whatever email should receive notifications)
   - **Environment**: Select all environments where this should be available
   - Click "Save"

## Step 4: Verify Existing Supabase Variables

Ensure the following Supabase variables are already set (or add them if missing):

### NEXT_PUBLIC_SUPABASE_URL

1. If not already set, click "Add New"
2. In the form:
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: The URL of your Supabase project (e.g., `https://abcdefghijklm.supabase.co`)
   - **Environment**: Select all environments
   - Click "Save"

### SUPABASE_SERVICE_ROLE_KEY

1. If not already set, click "Add New"
2. In the form:
   - **Name**: `SUPABASE_SERVICE_ROLE_KEY`
   - **Value**: Your Supabase service role key (begins with `eyJ...`)
   - **Environment**: Select all environments
   - Click "Save"

## Step 5: Redeploy Your Application

After setting up all environment variables:

1. Go to the "Deployments" section of your Vercel project
2. Find the latest deployment
3. Click on the "..." menu and select "Redeploy"
4. Alternatively, you can make a small change to your repository to trigger a new deployment

## Verifying the Setup

After redeploying:

1. Visit your website and submit a test message through the contact form
2. Check the email account specified in `NOTIFICATION_EMAIL` to verify receipt
3. If you encounter issues, check the Vercel deployment logs:
   - Go to the "Deployments" tab
   - Click on the latest deployment
   - Click on "Functions" to see logs for the serverless functions

## Troubleshooting

If emails are not being sent:

1. **Check Vercel Logs**: Look for error messages related to SMTP connection
2. **Verify Environment Variables**: Ensure they're set correctly and available in the production environment
3. **Test Gmail App Password**: Ensure the password is correct and that 2FA is enabled on the account
4. **Check Gmail Settings**: Some Gmail security settings might block automated emails - check for any security alerts in your Gmail account
5. **Gmail Sending Limits**: Be aware that Gmail has daily sending limits (500 emails per day for regular accounts)

If the contact form works in development but not in production, double-check that environment variables are set for the production environment in Vercel.
