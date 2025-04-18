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
const fetch = require('node-fetch');
const FormData = require('form-data');

// Load environment variables from .env.local if not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.local' });
}

async function testApplicationSubmission() {
  const baseUrl = 'http://localhost:3000';
  const endpoint = '/api/application';
  const url = `${baseUrl}${endpoint}`;
  
  console.log('🧪 Testing application submission to:', url);
  
  // Create a FormData instance
  const formData = new FormData();
  
  // Add application fields to the form data
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
  
  // Append all fields to the FormData
  Object.entries(testApplicationData).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  // Add a sample resume file if it exists
  const sampleResumePath = path.join(__dirname, 'sample-resume.pdf');
  if (fs.existsSync(sampleResumePath)) {
    formData.append('resume', fs.createReadStream(sampleResumePath), {
      filename: 'sample-resume.pdf',
      contentType: 'application/pdf',
    });
    console.log('📎 Attaching sample resume file:', sampleResumePath);
  } else {
    console.log('⚠️ No sample resume found at:', sampleResumePath);
    console.log('Test will proceed without resume file attachment.');
  }
  
  try {
    console.log('📤 Submitting application data...');
    
    // Submit the form data
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    
    // Parse the response
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Test successful! Server responded with:');
      console.log(result);
      
      console.log('\n📋 Database entry should have been created');
      console.log('📧 Email should have been sent to:', process.env.NOTIFICATION_EMAIL || 'operations@pkturbollc.com');
      
      if (formData.has('resume')) {
        console.log('📁 Resume should have been uploaded to Supabase Storage');
      }
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
