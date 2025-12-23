import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  service_type: string;
  description: string;
  urgency: string;
}

export async function submitContact(data: ContactSubmission) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);

  if (error) throw error;
}

export async function submitQuoteRequest(data: QuoteRequest) {
  const { error } = await supabase
    .from('quote_requests')
    .insert([data]);

  if (error) throw error;
}
