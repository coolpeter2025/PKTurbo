import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Log the contact submission (instead of storing in Supabase)
    console.log('Contact form submission received:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      event_date: formData.eventDate,
      event_type: formData.eventType,
      guest_count: formData.guestCount,
      message: formData.message,
      submitted_at: new Date().toISOString(),
    });
    
    // In a production environment, you would implement an alternative storage solution here
    // Such as sending an email, using a different database, or a serverless function

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
