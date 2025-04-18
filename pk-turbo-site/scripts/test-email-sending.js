/**
 * Test script for verifying Nodemailer configuration with Gmail SMTP
 * 
 * Usage:
 * 1. Create a .env.local file in the pk-turbo-site root with your test credentials:
 *    EMAIL_USER=your-gmail@gmail.com
 *    EMAIL_PASSWORD=your-gmail-app-password
 *    NOTIFICATION_EMAIL=recipient@example.com
 * 
 * 2. Run this script with: node scripts/test-email-sending.js
 */

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

// Get credentials from environment variables or use placeholders for example
const emailUser = process.env.EMAIL_USER || 'REPLACE_WITH_YOUR_GMAIL';
const emailPassword = process.env.EMAIL_PASSWORD || 'REPLACE_WITH_YOUR_APP_PASSWORD';
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'REPLACE_WITH_RECIPIENT_EMAIL';

// Log the loaded environment variables (without showing full password)
console.log('\n📧 Email Configuration:');
console.log(`- EMAIL_USER: ${emailUser}`);
console.log(`- EMAIL_PASSWORD: ${emailPassword ? emailPassword.substring(0, 2) + '***' + emailPassword.substring(emailPassword.length - 2) : 'not set'}`);
console.log(`- NOTIFICATION_EMAIL: ${notificationEmail}`);
console.log('');

// Check if using placeholders and warn if needed
if (emailUser.includes('REPLACE_WITH') || emailPassword.includes('REPLACE_WITH') || notificationEmail.includes('REPLACE_WITH')) {
  console.warn('\n⚠️  WARNING: Using placeholder values. Edit this file or create a .env.local file with actual credentials.\n');
}

// Function to send a test email
async function sendTestEmail() {
  console.log('Setting up Nodemailer with Gmail SMTP...');
  
  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword
    }
  });
  
  console.log(`Attempting to send a test email from ${emailUser} to ${notificationEmail}...`);
  
  // Create HTML email template
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 5px;">
      <h2 style="color: #333; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px;">Test Email for PK Turbo Contact Form</h2>
      
      <p>This is a test email to verify that your Nodemailer configuration is working correctly.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333;">Configuration Details:</h3>
        <ul>
          <li><strong>Sender:</strong> ${emailUser}</li>
          <li><strong>Recipient:</strong> ${notificationEmail}</li>
          <li><strong>Service:</strong> Gmail SMTP</li>
        </ul>
      </div>
      
      <p>If you received this email, your Nodemailer configuration is working correctly!</p>
      
      <p style="color: #777; font-size: 0.8em;">Sent on ${new Date().toLocaleString()}</p>
    </div>
  `;
  
  try {
    // Send email
    const info = await transporter.sendMail({
      from: `"PK Turbo Test" <${emailUser}>`,
      to: notificationEmail,
      subject: 'Test Email - PK Turbo Contact Form',
      text: 'This is a test email to verify that your Nodemailer configuration is working correctly.',
      html: htmlContent
    });
    
    console.log('✅ Email sent successfully!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log(`📬 Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    
    return true;
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error(error);
    
    // Provide more helpful error information
    if (error.code === 'EAUTH') {
      console.log('\n📌 Authentication Error: Your username or password was not accepted.');
      console.log('   - Make sure you\'re using an App Password, not your regular password');
      console.log('   - Verify that 2FA is enabled on your Google account');
      console.log('   - Check for any security alerts in your Gmail account');
    } else if (error.code === 'ESOCKET') {
      console.log('\n📌 Connection Error: Could not connect to the Gmail SMTP server.');
      console.log('   - Check your internet connection');
      console.log('   - Verify that your email service isn\'t being blocked by a firewall');
    }
    
    return false;
  }
}

// Run the test
sendTestEmail().then((success) => {
  if (success) {
    console.log('\n🎉 Test completed successfully! Your email configuration is working.');
  } else {
    console.log('\n❌ Test failed. Please check the error messages above and try again.');
  }
});
