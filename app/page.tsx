"use client";

import Image from "next/image";
import Link from "next/link";

// SVG Components
const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
    <path d="M2 21.5C2 21.7761 2.22386 22 2.5 22H17.5C17.7761 22 18 21.7761 18 21.5C18 21.2239 17.7761 21 17.5 21H2.5C2.22386 21 2 21.2239 2 21.5Z" />
    <path d="M19.5 5H18V3.5C18 3.22386 17.7761 3 17.5 3H2.5C2.22386 3 2 3.22386 2 3.5V15.5C2 18.5376 4.46243 21 7.5 21H12.5C15.5376 21 18 18.5376 18 15.5V15H19.5C21.9853 15 24 12.9853 24 10.5V9.5C24 7.01472 21.9853 5 19.5 5ZM17 15.5C17 17.9853 14.9853 20 12.5 20H7.5C5.01472 20 3 17.9853 3 15.5V4H17V15.5ZM23 10.5C23 12.433 21.4333 14 19.5 14H18V6H19.5C21.4333 6 23 7.56702 23 9.5V10.5Z" />
  </svg>
);

const CakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
    <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    <path d="M12 8a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
    <path d="M19 15V9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a3 3 0 0 0-3 3v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a3 3 0 0 0-3-3zM7 9h10v6H7V9zm13 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1z" />
  </svg>
);

const RingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    <path d="M17 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    <path d="M7 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-12a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
    <path d="M17 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-12a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
  </svg>
);

const PartyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
    <path d="M21.86 9.01c-.47-.47-1.11-.73-1.77-.73h-1.93c-.28 0-.53-.11-.71-.29l-1.07-1.07c-.45-.45-1.1-.73-1.77-.73h-2.21c-.67 0-1.31.28-1.77.73L9.56 8c-.18.18-.43.29-.71.29H6.91c-.66 0-1.3.26-1.77.73-.47.47-.73 1.11-.73 1.77v3.31c0 .67.26 1.3.73 1.77.47.47 1.11.73 1.77.73h13.18c.66 0 1.3-.26 1.77-.73.47-.47.73-1.11.73-1.77v-3.31c0-.66-.26-1.3-.73-1.77z" />
    <path d="M13.5 3c.83 0 1.5.67 1.5 1.5S14.33 6 13.5 6 12 5.33 12 4.5 12.67 3 13.5 3z" />
    <path d="M10.5 5c.83 0 1.5.67 1.5 1.5S11.33 8 10.5 8 9 7.33 9 6.5 9.67 5 10.5 5z" />
    <path d="M16.5 5c.83 0 1.5.67 1.5 1.5S17.33 8 16.5 8 15 7.33 15 6.5 15.67 5 16.5 5z" />
    <path d="M18.5 9c.83 0 1.5-.67 1.5-1.5S19.33 6 18.5 6 17 6.67 17 7.5 17.67 9 18.5 9z" />
    <path d="M8.5 9c.83 0 1.5-.67 1.5-1.5S9.33 6 8.5 6 7 6.67 7 7.5 7.67 9 8.5 9z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/delightfulbean.jpg"
            alt="Coffee Cart Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl bg-black/40 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium Coffee Cart in Tampa Bay
            </h1>
            <p className="text-xl text-secondary-light mb-8">
              Elevate your event with a professional barista service. Perfect for birthdays, weddings, and private parties.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-secondary">
                Book Your Coffee Cart
              </Link>
              <Link href="#services" className="btn bg-white/10 text-white hover:bg-white/20">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Coffee Cart Services</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Delightful Bean offers premium coffee cart services for all types of events in Tampa Bay, Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Birthday Service */}
            <div className="card p-8 flex flex-col items-center text-center">
              <CakeIcon />
              <h3 className="text-2xl font-bold mt-6 mb-3">Birthdays</h3>
              <p className="mb-6">
                Make your birthday celebration special with our custom coffee service. Perfect for all ages!
              </p>
              <Link href="/birthdays" className="btn btn-primary mt-auto">
                Learn More
              </Link>
            </div>

            {/* Wedding Service */}
            <div className="card p-8 flex flex-col items-center text-center">
              <RingsIcon />
              <h3 className="text-2xl font-bold mt-6 mb-3">Weddings</h3>
              <p className="mb-6">
                Add a touch of elegance to your wedding with our professional barista service.
              </p>
              <Link href="/weddings" className="btn btn-primary mt-auto">
                Learn More
              </Link>
            </div>

            {/* Private Party Service */}
            <div className="card p-8 flex flex-col items-center text-center">
              <PartyIcon />
              <h3 className="text-2xl font-bold mt-6 mb-3">Private Parties</h3>
              <p className="mb-6">
                Impress your guests with specialty coffee drinks at your next private event.
              </p>
              <Link href="/private-parties" className="btn btn-primary mt-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/delightfulbean.jpg"
                alt="Delightful Bean Coffee Cart"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Delightful Bean Experience</h2>
              <p className="text-lg mb-4">
                At Delightful Bean, we bring the coffee shop experience directly to your event with our mobile coffee cart service.
              </p>
              <p className="text-lg mb-6">
                Our professional baristas craft delicious specialty coffee drinks using premium beans and equipment, ensuring your guests enjoy a memorable experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Professional barista service</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Premium coffee and equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Customizable menu options</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2">Serving Tampa Bay and surrounding areas</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Book Your Coffee Cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="text-lg mt-4 text-secondary-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our coffee cart service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-dark p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-highlight">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4 text-secondary-light">
                "Delightful Bean made our wedding day even more special. The coffee cart was a huge hit with our guests, and the barista was professional and friendly."
              </p>
              <p className="font-semibold">- Sarah & Michael, Wedding</p>
            </div>

            <div className="bg-primary-dark p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-highlight">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4 text-secondary-light">
                "I hired Delightful Bean for my 40th birthday party, and it was the perfect addition. Everyone loved the specialty drinks and the presentation was beautiful."
              </p>
              <p className="font-semibold">- Jennifer, Birthday Party</p>
            </div>

            <div className="bg-primary-dark p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-highlight">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4 text-secondary-light">
                "Our corporate event was elevated by Delightful Bean's coffee cart service. The team was punctual, professional, and the coffee was excellent."
              </p>
              <p className="font-semibold">- Robert, Corporate Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Service Areas</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We bring our mobile coffee cart service to events throughout Florida, serving multiple regions with our premium coffee experience.
            </p>
          </div>

          <div className="bg-secondary-light p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-6">Where We Serve</h3>
            <p className="text-lg mb-8">
              Delightful Bean proudly serves events throughout these Florida regions:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-semibold">Tampa Bay</p>
                <p className="text-sm text-gray-600 mt-1">Tampa, St. Petersburg, Clearwater</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-semibold">Sarasota</p>
                <p className="text-sm text-gray-600 mt-1">Siesta Key, Longboat Key</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-semibold">Orlando</p>
                <p className="text-sm text-gray-600 mt-1">Winter Park, Lake Nona</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-semibold">Brooksville</p>
                <p className="text-sm text-gray-600 mt-1">Hernando County</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-semibold">Fort Myers</p>
                <p className="text-sm text-gray-600 mt-1">Cape Coral, Sanibel Island</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="font-semibold">And More!</p>
                <p className="text-sm text-gray-600 mt-1">Contact us for availability</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Coffee Cart?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to check availability and get a custom quote for your event.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
