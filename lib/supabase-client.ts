import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

const supabaseClient = async (supabaseAccessToken: string) => {
  const supabase = createClient(supabaseUrl as string, supabaseKey as string, {
    global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
  })

  return supabase
}

export default supabaseClient
