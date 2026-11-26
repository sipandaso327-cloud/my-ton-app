import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cvsgkztkieyfnzegygcc.supabase.co"
const supabaseAnonKey = "sb_publishable_QzjXWWY0R8BdZ7lHj_al3A_CqUs1uKU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
