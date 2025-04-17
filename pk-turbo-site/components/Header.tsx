'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-dark text-white">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 mr-2">
            <Image 
              src="/images/logo.png" 
              alt="PK Turbo Logo" 
              fill
              sizes="(max-width: 768px) 40px, 40px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">PK </span>
            <span className="text-amber-400">TURBO</span>
          </div>
          <div className="text-sm uppercase border-l border-gray-500 pl-3 tracking-wider font-light hidden sm:block">
            Reliable Transportation
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-white hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="/contact" className="font-medium text-white hover:text-amber-400 transition-colors">
            Contact Us
          </Link>
          <Link href="/gallery" className="font-medium text-white hover:text-amber-400 transition-colors">
            Gallery
          </Link>
          <Link href="/employment" className="font-medium text-white hover:text-amber-400 transition-colors">
            Employment
          </Link>
        </nav>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="hidden md:block px-4 py-2 bg-amber-400 text-navy-dark font-medium rounded hover:bg-amber-500 transition"
        >
          QUOTE
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-medium py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-white hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="font-medium text-white hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/gallery"
              className="font-medium text-white hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/employment"
              className="font-medium text-white hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Employment
            </Link>
            <Link
              href="/contact"
              className="font-medium bg-amber-400 text-navy-dark px-4 py-2 rounded hover:bg-amber-500 transition-colors inline-block mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
