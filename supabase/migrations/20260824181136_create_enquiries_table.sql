/*
# Create enquiries table for C3 Cloud website

## Purpose
Stores enquiry and contact form submissions from the C3 Cloud website.
This is a single-tenant public form — no sign-in required. Anyone visiting
the site can submit an enquiry. All rows are public (no sensitive data beyond
contact info voluntarily submitted).

## New Tables
- `enquiries`
  - `id` (uuid, PK)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email
  - `phone` (text, nullable) — submitter's phone number
  - `company` (text, nullable) — submitter's company name
  - `service` (text, nullable) — which service they're interested in
  - `message` (text, not null) — the enquiry message
  - `form_type` (text, not null, default 'enquiry') — 'enquiry' or 'contact'
  - `status` (text, not null, default 'new') — 'new', 'contacted', 'closed'
  - `created_at` (timestamptz, default now())

## Security
- RLS enabled on `enquiries`.
- INSERT: anyone (anon + authenticated) can submit enquiries — this is a public form.
- SELECT/UPDATE/DELETE: NOT granted to anon or authenticated. Only the service role
  (used server-side) can read or manage submissions. This protects submitted contact
  info from being publicly readable via the anon key.

## Notes
1. The website frontend only inserts — it never reads back enquiries.
2. Site operators manage submissions via the Supabase dashboard or service-role tooling.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  message text NOT NULL,
  form_type text NOT NULL DEFAULT 'enquiry',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
