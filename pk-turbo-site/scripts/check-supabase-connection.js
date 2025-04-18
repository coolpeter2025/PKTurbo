// Script to check Supabase connection and verify the PK_Turbo_Application table exists
console.log('Starting Supabase connection check script...');

// Load environment variables from .env.local
try {
  console.log('Loading environment variables...');
  require('dotenv').config({ path: '.env.local' });
  console.log('Environment variables loaded successfully');
} catch (err) {
  console.error('Error loading dotenv:', err);
}

// Get Supabase credentials from environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

console.log('NEXT_PUBLIC_SUPABASE_URL exists:', !!supabaseUrl);
console.log('SUPABASE_KEY exists:', !!supabaseServiceKey);

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ ERROR: Missing Supabase credentials in environment variables.');
  console.error('Please check that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_KEY exist in your .env.local file.');
  process.exit(1);
}

console.log('🔑 Supabase credentials found in environment variables.');
console.log(`URL detected: ${supabaseUrl.substring(0, 15)}...`);

// Initialize Supabase client
console.log('🔌 Attempting to load @supabase/supabase-js...');
let supabase;
try {
  const { createClient } = require('@supabase/supabase-js');
  console.log('✅ @supabase/supabase-js loaded successfully');
  
  console.log('🔌 Attempting to create Supabase client...');
  supabase = createClient(supabaseUrl, supabaseServiceKey);
  console.log('✅ Supabase client created successfully');
} catch (err) {
  console.error('❌ ERROR: Failed to initialize Supabase client:', err);
  console.error('You may need to install the Supabase client package:');
  console.error('npm install @supabase/supabase-js');
  process.exit(1);
}

async function checkConnection() {
  try {
    console.log('🔍 Attempting to query the PK_Turbo_Application table...');
    // Test basic connection with simple query
    const { data, error } = await supabase
      .from('PK_Turbo_Application')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ ERROR: Query failed:', error);
      
      if (error.message?.includes('relation') && error.message?.includes('does not exist')) {
        console.error('❌ ERROR: The PK_Turbo_Application table does not exist in your Supabase database.');
        console.error('\nTo create the table, please run the SQL script in supabase-application-table.sql');
        console.error('\nYou can do this in the Supabase dashboard SQL editor or using the Supabase CLI.');
      }
      return false;
    }
    
    console.log('✅ Successfully connected to Supabase!');
    console.log(`✅ PK_Turbo_Application table exists!`);
    return true;
  } catch (err) {
    console.error('❌ ERROR: Exception when connecting to Supabase:', err);
    return false;
  }
}

// Execute check
console.log('🔄 Executing connection check...');
checkConnection().then(success => {
  if (success) {
    console.log('\n🟢 All systems go! Your Supabase connection is working correctly.');
  } else {
    console.log('\n🔴 Connection check failed. Please fix the issues above before proceeding.');
  }
});
