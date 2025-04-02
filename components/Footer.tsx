"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/Delighfulbean.logo.png"
                alt="Delightful Bean Logo"
                width={48}
                height={48}
                className="mr-3 bg-white rounded-full p-1"
              />
              <span className="text-xl font-bold">Delightful Bean</span>
            </div>
            <p className="text-secondary-light mb-4">
              Premium coffee cart rental services for birthdays, weddings, and private parties in Tampa Bay, Florida.
            </p>
            <p className="text-secondary-light mb-2">
              <a href="tel:7274579941" className="hover:text-white transition-colors">
                (727) 457-9941
              </a>
            </p>
            <p className="text-secondary-light mb-2">
              <a href="mailto:info@delightfulbean.com" className="hover:text-white transition-colors">
                info@delightfulbean.com
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61565827048649" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/delightful.bean" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/birthdays" className="text-secondary-light hover:text-white transition-colors">
                  Birthday Coffee Cart
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="text-secondary-light hover:text-white transition-colors">
                  Wedding Coffee Cart
                </Link>
              </li>
              <li>
                <Link href="/private-parties" className="text-secondary-light hover:text-white transition-colors">
                  Private Party Coffee Cart
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-light hover:text-white transition-colors">
                  Book a Coffee Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Service Area</h3>
            <p className="text-secondary-light mb-2">
              Proudly serving Tampa Bay, Florida and surrounding areas.
            </p>
            <Link href="/contact" className="btn btn-secondary inline-block mt-4">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/images/Delighfulbean.logo.png"
              alt="Delightful Bean Logo"
              width={32}
              height={32}
              className="bg-white rounded-full p-1 mr-2"
            />
          </div>
          <p className="text-secondary-light">&copy; {new Date().getFullYear()} Delightful Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
