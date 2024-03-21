
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lvzrrwkezlwidgpgxvbb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2enJyd2tlemx3aWRncGd4dmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3Nzc4NjMsImV4cCI6MjAyNjM1Mzg2M30.1Uza74DhDAS0SM6UwKeN0SY72z7U7H4imRkOqD8bDOQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;