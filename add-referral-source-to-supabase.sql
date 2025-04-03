-- Add referral_source column to contact_submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS referral_source TEXT;

-- Add comment to the column
COMMENT ON COLUMN public.contact_submissions.referral_source IS 'How the customer heard about Delightful Bean';
