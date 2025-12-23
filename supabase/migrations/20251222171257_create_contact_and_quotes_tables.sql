/*
  # Good Guys Electric - Contact & Quote Management

  ## Overview
  Creates tables for managing customer contact submissions and service quote requests
  for Good Guys Electric website.

  ## New Tables
  
  ### `contact_submissions`
  Stores general contact form submissions from the website
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Customer name
  - `email` (text) - Customer email
  - `phone` (text) - Customer phone number
  - `message` (text) - Customer message
  - `created_at` (timestamptz) - Submission timestamp
  
  ### `quote_requests`
  Stores service quote requests with detailed information
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Customer name
  - `email` (text) - Customer email
  - `phone` (text) - Customer phone number
  - `address` (text) - Service location address
  - `service_type` (text) - Type of service requested
  - `description` (text) - Detailed description of work needed
  - `urgency` (text) - How soon work is needed
  - `created_at` (timestamptz) - Request timestamp
  - `status` (text) - Quote status (pending, contacted, quoted, completed)

  ## Security
  
  1. Enable RLS on both tables
  2. Allow public insert for form submissions (website visitors)
  3. No public read access (only admin access needed)
  
  ## Notes
  - These tables are write-only from the public perspective
  - Admin panel would need separate policies for viewing submissions
  - All timestamps use UTC timezone
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  service_type text NOT NULL,
  description text NOT NULL,
  urgency text DEFAULT 'flexible',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (for website forms)
CREATE POLICY "Allow public contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert quote requests (for website forms)
CREATE POLICY "Allow public quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at 
  ON quote_requests(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_quote_requests_status 
  ON quote_requests(status);