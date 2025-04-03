# IMPORTANT: How to Add the Referral Source Column to Your Supabase Database

You need to run the SQL statement to add the referral_source column to your Supabase database. Here's how:

## Steps to Run the Migration:

1. **Log into Supabase Dashboard**
   - Go to: https://app.supabase.com/
   - Sign in with your Supabase account

2. **Navigate to Your Project**
   - Select the `Delightful Bean Coffee` project

3. **Open SQL Editor**
   - Click on the **SQL Editor** tab in the left sidebar
   - Click the "New Query" button

4. **Copy and Paste This SQL**
   ```sql
   -- Add referral_source column to contact_submissions table
   ALTER TABLE public.contact_submissions 
   ADD COLUMN IF NOT EXISTS referral_source TEXT;

   -- Add comment to the column
   COMMENT ON COLUMN public.contact_submissions.referral_source IS 'How the customer heard about Delightful Bean';
   ```

5. **Execute the SQL**
   - Click the "Run" button in the SQL Editor

6. **Verify the Column Was Added**
   - Click on the "Table Editor" in the left sidebar
   - Select the "contact_submissions" table
   - You should now see the "referral_source" column in the table

## Why This Is Necessary

The frontend contact form now includes a "How did you hear about us?" field, and the API route has been updated to store this information, but the database table needs this column added before it can store the data.

## Need Help?

If you need assistance running this migration, you can:
1. Open the Supabase dashboard directly by running `apply-supabase-migration.bat`
2. Refer to the full migration guide at `supabase/migration-guide.md`
3. Contact your developer for help executing this SQL statement
