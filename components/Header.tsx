"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Delighfulbean.logo.png"
              alt="Delightful Bean Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-primary">Delightful Bean</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/birthdays" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Birthdays
            </Link>
            <Link href="/weddings" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Weddings
            </Link>
            <Link href="/private-parties" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Private Parties
            </Link>
            <Link href="/pictures" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Pictures
            </Link>
            <Link href="/menu" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/contact" className="font-bold text-lg text-black hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/birthdays"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Birthdays
              </Link>
              <Link
                href="/weddings"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Weddings
              </Link>
              <Link
                href="/private-parties"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Private Parties
              </Link>
              <Link
                href="/pictures"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pictures
              </Link>
              <Link
                href="/menu"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="font-bold text-lg text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
