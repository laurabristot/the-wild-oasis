/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gncuupjmfadawyccyljg.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduY3V1cGptZmFkYXd5Y2N5bGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNDg1NzksImV4cCI6MjAxOTgyNDU3OX0.4XdDsz0yeAk1keEXUH9yK-BSllGGgADW0k2nno5qloE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
