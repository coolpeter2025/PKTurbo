/**
 * Test script for the application form submission API
 * 
 * This script simulates submitting an application through the /api/application endpoint
 * to test database integration and email sending functionality.
 * 
 * Usage: 
 * 1. Make sure your .env.local file is set up with the correct environment variables
 * 2. Run with: node scripts/test-application-submission.js
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.local' });
}

// Using require for node-fetch
let fetch;
try {
  fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
} catch (error) {
  console.error('Error importing node-fetch:', error);
  process.exit(1);
}

async function testApplicationSubmission() {
  const baseUrl = 'http://localhost:3000';
  const endpoint = '/api/application';
  const url = `${baseUrl}${endpoint}`;
  
  console.log('🧪 Testing application submission to:', url);
  
  // Application data as JSON - matches the expected format by the API
  const testApplicationData = {
    fullName: 'Test Applicant',
    phoneNumber: '555-123-4567',
    email: 'test@example.com',
    dateOfBirth: '1990-01-01',
    address: '123 Test Street, Test City, TS 12345',
    driversLicenseNumber: 'DL123456789',
    driversLicenseState: 'NY',
    driversLicenseExpiration: '2030-01-01',
    licenseSuspended: 'no',
    dui: 'no',
    felony: 'no',
    drivingExperience: 'I have 5 years of experience driving commercial vehicles including Class A CDL.',
  };
  
  // Log the sample resume path (but we're not using it as the API now expects JSON)
  const sampleResumePath = path.join(__dirname, 'sample-resume.txt');
  if (fs.existsSync(sampleResumePath)) {
    console.log('📎 Sample resume file exists at:', sampleResumePath);
    console.log('Note: Resume file upload has been removed from the API');
  }
  
  try {
    console.log('📤 Submitting application data...');
    
    // Using dynamic import for node-fetch
    const nodeFetch = await import('node-fetch');
    
    // Submit the JSON data
    const response = await nodeFetch.default(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testApplicationData),
    });
    
    // Parse the response
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Test successful! Server responded with:');
      console.log(result);
      
      console.log('\n📋 Database entry should have been created');
      console.log('📧 Email should have been sent to:', process.env.NOTIFICATION_EMAIL || 'operations@pkturbollc.com');
    } else {
      console.error('❌ Test failed with status:', response.status);
      console.error('Error details:', result);
    }
  } catch (error) {
    console.error('❌ Error during test:', error.message);
  }
}

// Run the test
testApplicationSubmission().catch(console.error);
