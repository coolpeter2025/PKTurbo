/**
 * Since we cannot directly create tables using the client SDK, this script
 * demonstrates how to check if the table exists and provides instructions
 * for manual table creation if needed.
 * 
 * To actually create the table, you should:
 * 1. Login to your Supabase dashboard
 * 2. Go to "Table editor"
 * 3. Create a new table named "contact_submissions" with the schema below
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are properly loaded
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or key is missing. Make sure your .env file is set up correctly.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkContactSubmissionsTable() {
  console.log('Checking if contact_submissions table exists in Supabase...');
  
  try {
    // Try to select from the table to check if it exists
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('id')
      .limit(1);
    
    if (error) {
      if (error.code === '42P01') { // relation does not exist
        console.log(`
The contact_submissions table does not exist. Please create it manually:

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/stagfacvrlrtstshuwux
2. Navigate to "Table editor"
3. Click "New Table"
4. Use the following settings:
   - Table Name: contact_submissions
   - Schema: public
   - Enable Row Level Security: Yes (recommended)
   - Columns:
     * id: uuid (primary key, default: uuid_generate_v4())
     * name: text (not null)
     * email: text (not null)
     * phone: text (not null)
     * event_date: date
     * event_type: text
     * guest_count: integer
     * message: text (not null)
     * submitted_at: timestamp with time zone (default: now())

After creating the table, re-run this script to verify it exists.
        `);
        return false;
      } else {
        console.error('Error checking if table exists:', error);
        return false;
      }
    } else {
      console.log('✅ contact_submissions table already exists!');
      return true;
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    return false;
  }
}

// Execute the function
checkContactSubmissionsTable()
  .then((success) => {
    if (success) {
      console.log('Setup completed successfully.');
    } else {
      console.error('Setup failed.');
    }
    process.exit(success ? 0 : 1);
  })
  .catch((err) => {
    console.error('Unhandled error:', err);
    process.exit(1);
  });
