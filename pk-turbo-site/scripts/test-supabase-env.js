// Simple script to test Supabase environment variables loading
require('dotenv').config({ path: '.env.local' });
console.log('Testing Supabase Environment Variables:');

// Check for environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log('NEXT_PUBLIC_SUPABASE_URL exists:', !!supabaseUrl);
console.log('SUPABASE_KEY exists:', !!supabaseKey);

if (supabaseUrl) {
  console.log('URL prefix:', supabaseUrl.substring(0, 15) + '...');
}

// Check if @supabase/supabase-js package is installed
try {
  const { createClient } = require('@supabase/supabase-js');
  console.log('@supabase/supabase-js package is installed');
  
  // Try to initialize a client
  if (supabaseUrl && supabaseKey) {
    console.log('Attempting to create Supabase client...');
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('Supabase client created successfully');
  }
} catch (err) {
  console.error('Error loading @supabase/supabase-js:', err.message);
}
