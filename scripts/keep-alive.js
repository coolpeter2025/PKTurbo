const { createClient } = require('@supabase/supabase-js');

// Get environment variables from GitHub secrets
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function pingDatabase() {
  console.log('Running Supabase keep-alive...');
  console.log(`Connecting to: ${supabaseUrl}`);
  
  try {
    // Query the contact_submissions table
    const { data, error, count } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact' })
      .limit(1);
    
    if (error) throw error;
    
    console.log('Connection successful!');
    console.log(`Found ${count || 0} total records in contact_submissions table`);
    console.log('Supabase keep-alive completed successfully');
    
    // Output record ID if available
    if (data && data.length > 0) {
      console.log(`Sample record ID: ${data[0].id}`);
    } else {
      console.log('No records found, but connection was successful');
    }
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
    process.exit(1);
  }
}

// Run the function and handle any uncaught errors
pingDatabase().catch(err => {
  console.error('Uncaught error:', err);
  process.exit(1);
});
