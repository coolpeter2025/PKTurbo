/**
 * Simple debug script for testing Nodemailer configuration
 * Provides verbose output for troubleshooting
 */

console.log('Starting debug email test script...');

// Load environment variables
const dotenv = require('dotenv');
console.log('Loading environment variables from .env.local...');
const result = dotenv.config({ path: '.env.local' });

if (result.error) {
  console.error('Error loading .env.local file:', result.error);
} else {
  console.log('Environment variables loaded successfully');
}

// Show loaded variables
console.log('\nEnvironment variables:');
console.log('- EMAIL_USER:', process.env.EMAIL_USER || 'not set');
if (process.env.EMAIL_PASSWORD) {
  const firstTwo = process.env.EMAIL_PASSWORD.substring(0, 2);
  const lastTwo = process.env.EMAIL_PASSWORD.substring(process.env.EMAIL_PASSWORD.length - 2);
  console.log('- EMAIL_PASSWORD:', `${firstTwo}***${lastTwo} (${process.env.EMAIL_PASSWORD.length} characters)`);
} else {
  console.log('- EMAIL_PASSWORD: not set');
}
console.log('- NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL || 'not set');
console.log('- NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log('- DEBUG:', process.env.DEBUG || 'not set');

// Import nodemailer
let nodemailer;
try {
  console.log('\nImporting nodemailer...');
  nodemailer = require('nodemailer');
  console.log('Nodemailer imported successfully');
} catch (error) {
  console.error('Error importing nodemailer:', error);
  process.exit(1);
}

// Create test function
async function testEmailSending() {
  console.log('\nCreating nodemailer transport...');
  
  // Create transporter with debug enabled
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    debug: true, // Enable debug for more verbose output
    logger: true  // Log to console
  });
  
  console.log('\nVerifying connection to SMTP server...');
  try {
    const verification = await transporter.verify();
    console.log('SMTP connection verified:', verification);
  } catch (verifyError) {
    console.error('SMTP connection verification failed:', verifyError);
    console.log('\nAttempting to send email anyway...');
  }
  
  console.log('\nPreparing test email...');
  const mailOptions = {
    from: `"Debug Test" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    subject: 'Debug Test Email',
    text: 'This is a test email for debugging purposes.',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Debug Test Email</h2>
        <p>This is a test email to debug the Nodemailer configuration.</p>
        <p>If you received this email, your configuration is working.</p>
        <hr>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
        <p><strong>To:</strong> ${process.env.NOTIFICATION_EMAIL}</p>
      </div>
    `
  };
  
  console.log('Email options:');
  console.log('- From:', mailOptions.from);
  console.log('- To:', mailOptions.to);
  console.log('- Subject:', mailOptions.subject);
  
  console.log('\nSending test email...');
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('\n✅ Email sent successfully!');
    console.log('- Message ID:', info.messageId);
    console.log('- Response:', info.response);
    
    if (info.accepted && info.accepted.length > 0) {
      console.log('- Accepted recipients:', info.accepted);
    }
    
    if (info.rejected && info.rejected.length > 0) {
      console.log('- Rejected recipients:', info.rejected);
    }
    
    return true;
  } catch (error) {
    console.error('\n❌ Error sending email:');
    console.error('- Error code:', error.code);
    console.error('- Error message:', error.message);
    
    if (error.response) {
      console.error('- SMTP Response:', error.response);
    }
    
    if (error.command) {
      console.error('- Failed command:', error.command);
    }
    
    // Provide detailed troubleshooting based on error
    console.log('\n🔍 Troubleshooting suggestions:');
    
    if (error.code === 'EAUTH') {
      console.log('- Authentication error. Check that:');
      console.log('  1. You are using the correct Gmail address');
      console.log('  2. You have generated an App Password (not regular password)');
      console.log('  3. 2FA is enabled on your Google account');
      console.log('  4. There are no spaces in your password string');
    } else if (error.code === 'ESOCKET' || error.code === 'ECONNECTION') {
      console.log('- Connection error. Check that:');
      console.log('  1. You have an active internet connection');
      console.log('  2. Your network doesn\'t block outgoing SMTP connections');
      console.log('  3. Gmail SMTP server (smtp.gmail.com) is not down');
    } else if (error.code === 'ETIMEDOUT') {
      console.log('- Connection timed out. Check that:');
      console.log('  1. Your internet connection is stable');
      console.log('  2. Gmail SMTP service is not being blocked by your network');
    }
    
    return false;
  }
}

// Run the test
console.log('\nStarting email test...');
testEmailSending()
  .then((success) => {
    if (success) {
      console.log('\n🎉 Email test completed successfully!');
    } else {
      console.log('\n❌ Email test failed. See error details above.');
    }
  })
  .catch((error) => {
    console.error('\n💥 Unexpected error in test script:', error);
  })
  .finally(() => {
    console.log('\nTest script finished.');
  });
