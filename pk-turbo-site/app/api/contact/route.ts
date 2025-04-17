import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This would be replaced with actual email sending logic
const sendEmail = async (data: any) => {
  // In a real implementation, this would connect to an email service
  // like SendGrid, Mailgun, AWS SES, etc.
  console.log('Email would be sent with data:', data);
  return { success: true };
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate form data
    const { name, email, phone, subject, message } = data;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send the email
    await sendEmail({
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent. We\'ll get back to you soon!'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your request',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}
