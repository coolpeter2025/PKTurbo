import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - PK Turbo LLC',
  description: 'Get in touch with PK Turbo LLC for reliable transportation services. Contact us today for quotes or to discuss your delivery needs.',
  keywords: 'contact PK Turbo, transportation quotes, delivery services contact, logistics company contact',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pk-blue mr-3">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      1135 Four Lakes Dr a1,<br/>
                      Matthews, NC 28105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pk-blue mr-3">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">OFFICE (877)-505-0091</p>
                    <p className="text-gray-600">FAX (888)-505-0503</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pk-blue mr-3">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@pkturbollc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-pk-blue mr-3">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">
                      24 Hours a Day / 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Areas We Serve</h2>
              <p className="mb-4">
                Our expedited trucking company provides efficient, reliable, and professional door-to-door freight transportation across the U.S. and Canada, ensuring your cargo arrives safely and promptly every time.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <ContactForm />
            
            <p className="mt-4 text-sm text-gray-500">
              We'll respond to your inquiry as soon as possible, typically within 1-2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
