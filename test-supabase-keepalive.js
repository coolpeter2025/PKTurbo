// This script tests the Supabase keep-alive functionality locally
// It simulates what the GitHub Action will do by making a simple query to the contact_submissions table

import { createClient } from '@supabase/supabase-js'

// Load credentials from .env.local (these would be GitHub secrets in the actual workflow)
const supabaseUrl = 'https://stagfacvrlrtstshuwux.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDgxMjQxNiwiZXhwIjoyMDU2Mzg4NDE2fQ.I4qNsFwSe_4YN5N03dXX990U7YpcPGN1g5evT6TLf94'

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

// Function to ping the database
async function pingDatabase() {
  console.log('🔄 Testing Supabase keep-alive functionality...')
  console.log(`🔗 Connecting to: ${supabaseUrl}`)
  
  try {
    // Make a simple query to the contact_submissions table (same as the GitHub Action)
    const { data, error, count } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact' })
      .limit(1)
    
    if (error) {
      throw error
    }
    
    console.log('✅ Connection successful!')
    console.log(`📊 Found ${count} total records in contact_submissions table`)
    console.log('🟢 Supabase keep-alive test completed successfully')
    
    // Output the first record ID if available (for verification)
    if (data && data.length > 0) {
      console.log(`📝 Sample record ID: ${data[0].id}`)
    }
    
    return { success: true, count }
  } catch (error) {
    console.error('❌ Error connecting to Supabase:')
    console.error(error)
    return { success: false, error }
  }
}

// Execute the test
pingDatabase()
