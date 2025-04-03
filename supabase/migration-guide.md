# Applying the Referral Source Column Migration

## Introduction

This guide explains how to apply the migration to add the `referral_source` column to your `contact_submissions` table in Supabase.

## Option 1: Using the Supabase Dashboard SQL Editor

1. Log into your Supabase dashboard: https://app.supabase.com
2. Select your project (`Delightful Bean Coffee`)
3. Click on the **SQL Editor** tab in the left sidebar
4. Create a "New Query"
5. Copy and paste the following SQL:

```sql
-- Add referral_source column to contact_submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS referral_source TEXT;

-- Add comment to the column
COMMENT ON COLUMN public.contact_submissions.referral_source IS 'How the customer heard about Delightful Bean';
```

6. Click **Run** to execute the SQL

## Option 2: Using Supabase CLI (For Local Development)

If you have the Supabase CLI installed and a local development setup:

1. The migration file has been created at: `supabase/migrations/20250403_add_referral_source_column.sql`
2. Open a terminal in your project's root directory
3. Run the migration command:

```bash
supabase db push
```

## Verifying the Migration

After applying the migration, you can verify that it worked:

1. In the Supabase Dashboard, go to the **Table Editor**
2. Select the `contact_submissions` table
3. Check that the `referral_source` column has been added

## Testing the Integration

After applying the migration, test the contact form:

1. Fill out the contact form on your website
2. Select an option in the "How did you hear about us?" dropdown
3. Submit the form
4. Check in the Supabase dashboard that the submission includes the referral source
5. Verify that the notification email includes the referral source information

## Troubleshooting

- If the column already exists, the migration will not make any changes due to the `IF NOT EXISTS` clause
- If you encounter errors, check the SQL Editor error messages for details
- Make sure your database user has permissions to alter tables in the public schema
