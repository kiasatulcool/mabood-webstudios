import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Rate limiting — max 3 submissions per email per hour
export async function checkRateLimit(email) {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
  const { count } = await supabase
    .from('rate_limits')
    .select('*', { count: 'exact', head: true })
    .eq('identifier', email)
    .eq('action', 'contact_form')
    .gte('created_at', oneHourAgo)
  return count >= 3
}

export async function recordRateLimit(email) {
  await supabase.from('rate_limits').insert({
    identifier: email,
    action: 'contact_form'
  })
}

export async function submitContact(data) {
  return await supabase.from('contact_submissions').insert(data)
}
