# Supabase Setup Guide for PK Turbo Application

This guide outlines the steps needed to set up Supabase for handling the employment application form, including database table creation and storage bucket configuration for resume uploads.

## 1. Database Table Setup

First, you need to create a table in Supabase to store employment applications:

1. Log in to your Supabase dashboard at [app.supabase.io](https://app.supabase.io)
2. Navigate to your project
3. Go to the SQL Editor section
4. Create a new query and paste the contents of the `supabase-application-table.sql` file
5. Run the query to create the table and set up the necessary policies and indexes

## 2. Storage Bucket Setup for Resumes

The application form allows applicants to upload resumes. You need to set up a storage bucket to store these files:

1. In your Supabase dashboard, go to the Storage section
2. Click "Create a new bucket"
3. Name the bucket `resumes`
4. Set access to "Private" (not public)
5. Click "Create bucket"

## 3. Storage Bucket Policies

After creating the bucket, you need to set up policies to allow file uploads:

1. Click on the "resumes" bucket
2. Go to the "Policies" tab
3. Create the following policies:

### Upload Policy (For Service Role)
- Click "Add Policy"
- Select "Custom"
- Name: "Allow service role to upload files"
- Policy definition:
  ```sql
  (auth.role() = 'service_role' OR auth.role() = 'authenticated')
  ```
- Click "Save"

### Download Policy (For Service Role)
- Click "Add Policy"
- Select "Custom" 
- Name: "Allow service role to download files"
- Policy definition:
  ```sql
  (auth.role() = 'service_role' OR auth.role() = 'authenticated')
  ```
- Click "Save"

## 4. Environment Variables

Ensure these environment variables are properly set in both your local `.env.local` file and on Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_KEY=your-service-role-key
EMAIL_USER=pkturbollc@gmail.com
EMAIL_PASSWORD=your-app-password
NOTIFICATION_EMAIL=operations@pkturbollc.com
```

## 5. Testing

After completing the setup:

1. Run the application locally
2. Navigate to the Employment page
3. Fill out the application form and attach a resume
4. Submit the form
5. Verify:
   - The application is saved to the `PK_Turbo_Application` table
   - The resume file is uploaded to the `resumes` bucket
   - An email notification is sent to the specified notification email

## Troubleshooting

### Resume Upload Issues
- If file uploads fail, check the storage bucket policies
- Ensure the storage bucket is properly initialized
- Check browser console for specific error messages

### Database Insert Issues
- Verify the table schema matches the application data
- Check that all required fields are being properly passed
- Examine the server logs for specific error messages

### Email Notification Issues
- Verify email credentials are correct
- Check that Gmail access is not being blocked by security settings
- Ensure the notification email address is valid
