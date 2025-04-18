import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4 tracking-tight">
              <span className="text-white">PK </span>
              <span className="text-amber-400">TURBO</span>
              <span className="text-white"> LLC</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional transportation services providing reliable and efficient delivery solutions since 2018.
            </p>
            {/* Social media icons removed as requested */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white font-bold hover:text-amber-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white font-bold hover:text-amber-400 transition">Our Trucks</Link>
              </li>
              <li>
                <Link href="/employment" className="text-white font-bold hover:text-amber-400 transition">Employment</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-bold hover:text-amber-400 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-start text-white font-bold">
                <span className="mr-3 mt-1 text-amber-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>1135 Four Lakes Dr a1,<br/>Matthews, NC 28105</span>
              </p>
              <p className="flex items-start text-white font-bold">
                <span className="mr-3 mt-1 text-amber-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </span>
                <span>OFFICE (877)-505-0091</span>
              </p>
              <p className="flex items-start text-white font-bold">
                <span className="mr-3 mt-1 text-amber-400">
                  {/* Using a generic icon for FAX, replace if a specific one is available */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />                  
                  </svg>
                </span>
                <span>FAX (888)-505-0503</span>
              </p>
              <p className="flex items-start text-white font-bold">
                <span className="mr-3 mt-1 text-amber-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </span>
                <span>operations@pkturbollc.com</span>
              </p>
              <p className="flex items-start text-white font-bold mt-4">
                <span className="mr-3 mt-1 text-amber-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Hours: 24 Hours a Day / 7 Days a Week</span>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} PK Turbo LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
