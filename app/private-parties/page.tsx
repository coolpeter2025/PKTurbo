"use client";

import Image from "next/image";
import Link from "next/link";

// SVG Components
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const PartyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-primary">
    <path d="M21.86 9.01c-.47-.47-1.11-.73-1.77-.73h-1.93c-.28 0-.53-.11-.71-.29l-1.07-1.07c-.45-.45-1.1-.73-1.77-.73h-2.21c-.67 0-1.31.28-1.77.73L9.56 8c-.18.18-.43.29-.71.29H6.91c-.66 0-1.3.26-1.77.73-.47.47-.73 1.11-.73 1.77v3.31c0 .67.26 1.3.73 1.77.47.47 1.11.73 1.77.73h13.18c.66 0 1.3-.26 1.77-.73.47-.47.73-1.11.73-1.77v-3.31c0-.66-.26-1.3-.73-1.77z" />
    <path d="M13.5 3c.83 0 1.5.67 1.5 1.5S14.33 6 13.5 6 12 5.33 12 4.5 12.67 3 13.5 3z" />
    <path d="M10.5 5c.83 0 1.5.67 1.5 1.5S11.33 8 10.5 8 9 7.33 9 6.5 9.67 5 10.5 5z" />
    <path d="M16.5 5c.83 0 1.5.67 1.5 1.5S17.33 8 16.5 8 15 7.33 15 6.5 15.67 5 16.5 5z" />
    <path d="M18.5 9c.83 0 1.5-.67 1.5-1.5S19.33 6 18.5 6 17 6.67 17 7.5 17.67 9 18.5 9z" />
    <path d="M8.5 9c.83 0 1.5-.67 1.5-1.5S9.33 6 8.5 6 7 6.67 7 7.5 7.67 9 8.5 9z" />
  </svg>
);

export default function PrivatePartiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Espresso machine with wooden trim, metal milk frothers, a small potted plant, and flavored syrup bottles on a counter.jpg"
            alt="Private Party Coffee Cart"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl bg-black/40 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Private Party Coffee Cart Service
            </h1>
            <p className="text-xl text-secondary-light mb-8">
              Impress your guests with a premium coffee experience at your next private event or corporate gathering in Tampa Bay.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-secondary">
                Book for Your Event
              </Link>
              <Link href="#packages" className="btn bg-white/10 text-white hover:bg-white/20">
                View Event Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <PartyIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Private Event Coffee Service</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Elevate your private party or corporate event with a unique coffee experience that will leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">The Perfect Addition to Any Event</h3>
              <p className="mb-6">
                Whether you're hosting a corporate gathering, holiday party, or special celebration, our coffee cart service adds a touch of sophistication and enjoyment to your event.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Professional barista service</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Custom menu options to match your event theme</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Specialty coffee drinks for all preferences</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Elegant presentation that enhances your venue</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Flexible service times to fit your schedule</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/images/Coffee bar with Monin syrup bottles, peppermint, caramel, and vanilla flavors, alongside coffee machine and decorative plant..jpg"
                alt="Private Party Coffee Cart Service"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Event Experience Section */}
      <section id="packages" className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Customized Event Coffee Experience</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We create a personalized coffee service tailored to your private party or corporate event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">Tailored to Your Event Needs</h3>
              <p className="mb-6">
                Every event is unique, with its own purpose, audience, and atmosphere. We work with you to design a coffee experience that enhances your event goals, whether you're hosting a corporate gathering, holiday party, or special celebration.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Customized menu based on your event type and guest preferences</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Flexible service duration to match your event schedule</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Corporate branding opportunities for business events</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Cart styling that complements your venue and decor</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Scalable service for any group size</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-6">
                Contact Us for a Custom Quote
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/images/Outdoor coffee cart setup with espresso machine, grinder, coffee syrups, and umbrella.jpg"
                alt="Custom Event Coffee Experience"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Perfect for Any Private Event</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Our coffee cart service is ideal for a wide range of private events and corporate gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Corporate Events</h3>
                <p>
                  Impress clients and employees at meetings, conferences, product launches, and team-building events.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Holiday Parties</h3>
                <p>
                  Add a special touch to your holiday celebrations with festive coffee drinks and seasonal flavors.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fundraisers & Galas</h3>
                <p>
                  Elevate your fundraising event with premium coffee service that impresses donors and attendees.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Open Houses</h3>
                <p>
                  Welcome potential clients or customers with a professional coffee service at your open house event.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Retirement Parties</h3>
                <p>
                  Celebrate a career well-served with a sophisticated coffee experience for the guest of honor.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Anniversary Celebrations</h3>
                <p>
                  Mark milestone anniversaries for your business or organization with a premium coffee service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Branding Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Corporate Branding Opportunities</h2>
              <p className="text-lg mb-6">
                Make a lasting impression at your corporate event with our custom branding options. We can incorporate your company's logo and colors into every aspect of our coffee service.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="ml-2">Custom branded coffee cups</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="ml-2">Branded menu displays</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="ml-2">Company logo displayed on the coffee cart</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="ml-2">Custom drink names that align with your brand</span>
                </li>
              </ul>
              <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
                Inquire About Corporate Packages
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/Espresso machine setup with a coffee grinder, milk frother, and syrup bottles on a wooden counter..jpg"
                alt="Corporate Coffee Cart Service"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Event Hosts Say</h2>
            <p className="text-lg mt-4 text-secondary-light max-w-3xl mx-auto">
              Read what others have said about our private event coffee cart service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-dark p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-highlight">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4 text-secondary-light">
                "Our corporate event was elevated by Delightful Bean's coffee cart service. The team was punctual, professional, and the coffee was excellent. Our clients were impressed, and it added a special touch to our product launch."
              </p>
              <p className="font-semibold">- Robert, Marketing Director</p>
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
                "We hired Delightful Bean for our annual holiday party, and it was a huge hit! The custom holiday-themed drinks were delicious, and the barista was friendly and efficient. It created a wonderful atmosphere for our celebration."
              </p>
              <p className="font-semibold">- Amanda, Event Planner</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Common questions about our private event coffee cart service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p>
                We recommend booking at least 4-6 weeks in advance for private events, especially during busy seasons (holiday season, spring, fall). For large corporate events, 2-3 months advance booking is ideal.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Can you accommodate large corporate events?</h3>
              <p>
                Yes! Our corporate packages are designed for larger events, and we can provide multiple baristas and even multiple carts for very large gatherings. Just let us know your expected attendance when inquiring.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you need electricity?</h3>
              <p>
                Yes, our coffee cart requires access to standard electrical outlets. We can provide extension cords if needed, but please let us know about your venue setup in advance.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">How much space do you need?</h3>
              <p>
                Our standard coffee cart setup requires approximately 8' x 6' of space. We can be flexible with our setup depending on your venue constraints, so please discuss your space limitations with us when booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Event Coffee Cart?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to check availability and get a custom quote for your private party or corporate event.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Book Your Event Coffee Cart
          </Link>
        </div>
      </section>
    </>
  );
}
