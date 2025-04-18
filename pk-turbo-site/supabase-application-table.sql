-- SQL script to create the PK_Turbo_Application table in Supabase

-- Create the applications table
CREATE TABLE public.PK_Turbo_Application (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL, 
    email TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    address TEXT NOT NULL,
    drivers_license_number TEXT NOT NULL,
    drivers_license_state TEXT NOT NULL,
    drivers_license_expiration DATE NOT NULL,
    license_suspended TEXT NOT NULL,
    dui TEXT NOT NULL,
    felony TEXT NOT NULL,
    driving_experience TEXT,
    resume_url TEXT
);

-- Add comment to table
COMMENT ON TABLE public.PK_Turbo_Application IS 'Stores employment applications submitted through the website';

-- Set up Row Level Security (RLS)
ALTER TABLE public.PK_Turbo_Application ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to insert data
CREATE POLICY "Allow service role to insert applications" ON public.PK_Turbo_Application
    FOR INSERT
    TO authenticated
    WITH CHECK (true);
    
-- Create policy to allow service role to read data
CREATE POLICY "Allow service role to read applications" ON public.PK_Turbo_Application
    FOR SELECT
    TO authenticated
    USING (true);

-- Create an index for searching by email
CREATE INDEX idx_application_email ON public.PK_Turbo_Application (email);

-- Create an index for sorting by creation date
CREATE INDEX idx_application_created_at ON public.PK_Turbo_Application (created_at DESC);
