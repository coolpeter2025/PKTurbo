# Supabase Integration for Contact Form

This directory contains the necessary files for integrating Supabase with the contact form on the website.

## Setup Instructions

### 1. Create a Supabase Project

If you haven't already, create a new project in Supabase:

1. Go to [https://supabase.com/](https://supabase.com/) and sign in or create an account
2. Create a new project and note your project URL and API key

### 2. Configure Environment Variables

Update the `.env.local` file in the root of the project with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://stagfacvrlrtstshuwux.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_KEY=your_service_role_key_here
```

Replace the placeholder keys with your actual Supabase API keys:
- `your_anon_key_here`: The public anon key (safe for client-side code)
- `your_service_role_key_here`: The service role key (only for server-side code)

Both keys can be found in your Supabase dashboard under Settings > API > Project API keys.

### 3. Create the Database Table

You can create the required table in Supabase using the SQL Editor:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Create a new query
4. Copy and paste the contents of `contact_submissions_table.sql` into the editor
5. Run the query to create the table and set up the necessary permissions

### 4. Test the Form

After completing the setup:

1. Run your Next.js application locally with `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Supabase dashboard to verify that the submission was recorded in the `contact_submissions` table

## Table Structure

The `contact_submissions` table has the following structure:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key, automatically generated |
| name | TEXT | Name of the person submitting the form |
| email | TEXT | Email address |
| phone | TEXT | Phone number |
| event_date | DATE | Date of the event (optional) |
| event_type | TEXT | Type of event (optional) |
| guest_count | INTEGER | Number of guests (optional) |
| message | TEXT | Message content |
| submitted_at | TIMESTAMP | When the form was submitted |
| created_at | TIMESTAMP | When the record was created |

## Security

The table is configured with Row Level Security (RLS) policies that:

1. Allow anyone to insert new records (for form submissions)
2. Only allow authenticated users to view the submissions (for admin access)

This ensures that form submissions can be made by website visitors, but only authorized users can view the submitted data.
