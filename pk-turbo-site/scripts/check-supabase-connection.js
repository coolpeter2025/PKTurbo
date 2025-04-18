// Script to check Supabase connection and verify the PK_Turbo_Application table exists
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

// Get Supabase credentials from environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ ERROR: Missing Supabase credentials in environment variables.');
  console.error('Please check that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_KEY exist in your .env.local file.');
  process.exit(1);
}

console.log('🔑 Supabase credentials found in environment variables.');
console.log(`URL detected: ${supabaseUrl.substring(0, 15)}...`);

// Initialize Supabase client
console.log('🔌 Attempting to connect to Supabase...');
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkConnection() {
  try {
    // Test basic connection with simple query
    const { data, error } = await supabase.from('PK_Turbo_Application').select('count(*)', { count: 'exact', head: true });
    
    if (error) {
      if (error.message?.includes('relation') && error.message?.includes('does not exist')) {
        console.error('❌ ERROR: The PK_Turbo_Application table does not exist in your Supabase database.');
        console.error('\nTo create the table, please run the following command:');
        console.error('npx supabase-cli db execute -f ./supabase-application-table.sql');
        console.error('\nOR follow the instructions in docs/supabase-setup-guide.md to manually create the table.');
      } else {
        console.error('❌ ERROR: Failed to query Supabase database.', error);
      }
      return false;
    }
    
    console.log('✅ Successfully connected to Supabase!');
    console.log(`✅ PK_Turbo_Application table exists with ${data[0].count} records.`);
    return true;
  } catch (err) {
    console.error('❌ ERROR: Exception when connecting to Supabase:', err);
    return false;
  }
}

// Execute check
checkConnection().then(success => {
  if (success) {
    console.log('\n🟢 All systems go! Your Supabase connection is working correctly.');
  } else {
    console.log('\n🔴 Connection check failed. Please fix the issues above before proceeding.');
  }
});
