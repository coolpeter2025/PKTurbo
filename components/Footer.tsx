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
                width={40}
                height={40}
                className="mr-2 bg-white rounded-full p-1"
              />
              <span className="text-xl font-bold">Delightful Bean</span>
            </div>
            <p className="text-secondary-light mb-4">
              Premium coffee cart rental services for birthdays, weddings, and private parties in Tampa Bay, Florida.
            </p>
            <p className="text-secondary-light">
              <a href="tel:7274579941" className="hover:text-white transition-colors">
                (727) 457-9941
              </a>
            </p>
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

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-secondary-light">
          <p>&copy; {new Date().getFullYear()} Delightful Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
