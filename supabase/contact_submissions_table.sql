-- Create the contact_submissions table in Supabase

CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_date DATE,
  event_type TEXT,
  guest_count INTEGER,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users and anon users
CREATE POLICY "Allow inserts for all users" ON contact_submissions
  FOR INSERT TO authenticated, anon
  WITH CHECK (true);

-- Create policy to allow only authenticated users to select their own submissions
CREATE POLICY "Allow admins to select all submissions" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on submitted_at for chronological sorting
CREATE INDEX idx_contact_submissions_submitted_at ON contact_submissions(submitted_at);

-- Add comment to the table for documentation
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the website';
