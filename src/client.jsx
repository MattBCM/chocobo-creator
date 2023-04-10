import {createClient} from '@supabase/supabase-js'

const URL = 'https://ncgpvoxktylgfzxogbjx.supabase.co'
const API_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZ3B2b3hrdHlsZ2Z6eG9nYmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDI5MjcsImV4cCI6MTk5NjcxODkyN30.rARUqAk02ZzuYL3KM4GPvLp_VS_O2J5AucXrBOjk-mE`
export const supabase = createClient(URL, API_KEY)
