"use client";

import Image from "next/image";
import Link from "next/link";

// SVG Components
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const CakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-primary">
    <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    <path d="M12 8a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
    <path d="M19 15V9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a3 3 0 0 0-3 3v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a3 3 0 0 0-3-3zM7 9h10v6H7V9zm13 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1z" />
  </svg>
);

export default function BirthdaysPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Woman drinking from a to-go coffee cup outdoors, wearing a white shirt, in front of a scenic lake background..jpg"
            alt="Birthday Coffee Cart"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl bg-black/40 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Birthday Coffee Cart
            </h1>
            <p className="text-xl text-secondary-light mb-8">
              Make your birthday celebration extra special with our premium coffee cart service. Perfect for all ages and party sizes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-secondary">
                Book for Your Birthday
              </Link>
              <Link href="#packages" className="btn bg-white/10 text-white hover:bg-white/20">
                View Packages
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
              <CakeIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Birthday Coffee Cart</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Elevate your birthday celebration with a unique coffee experience that your guests will remember.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">The Perfect Addition to Any Birthday</h3>
              <p className="mb-6">
                Whether you're celebrating a milestone birthday or just want to make this year's party extra special, our coffee cart service adds a touch of luxury and fun to your celebration.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Professional barista service</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Custom menu options to match your theme</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Specialty coffee drinks for all ages</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Elegant presentation that enhances your decor</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Memorable experience for your guests</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/images/Woman holding a coffee cup at an outdoor coffee cart with barista and espresso machine..jpg"
                alt="Birthday Coffee Cart Service"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Experience Section */}
      <section id="packages" className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Customized Birthday Coffee Experience</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We create a personalized coffee experience for your birthday celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/Woman sitting on a wooden bench outdoors, holding a coffee cup.jpg"
                alt="Custom Birthday Coffee Experience"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Tailored to Your Celebration</h3>
              <p className="mb-6">
                Every birthday is unique, and your coffee service should be too. We work with you to design a coffee experience that perfectly matches your celebration's theme, guest preferences, and venue requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Personalized menu based on your preferences</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Flexible service duration to fit your schedule</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Custom birthday-themed signature drinks</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Cart styling that complements your decor</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Options for all ages and group sizes</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-6">
                Contact Us for a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Ideas Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Birthday Coffee Cart Ideas</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Here are some popular ways our clients have incorporated our coffee cart into their birthday celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Morning Birthday Brunch</h3>
                <p>
                  Start the birthday celebration with a delicious brunch accompanied by specialty coffee drinks.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Afternoon Garden Party</h3>
                <p>
                  Enjoy a sophisticated garden party with gourmet coffee and pastries.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Evening Cocktail Party</h3>
                <p>
                  Add coffee cocktails and espresso martinis to your evening birthday celebration.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Milestone Birthday</h3>
                <p>
                  Make a 30th, 40th, 50th, or any milestone birthday extra special with premium coffee service.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Kids & Teen Parties</h3>
                <p>
                  Offer hot chocolates, frappuccinos, and caffeine-free options for younger guests.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Surprise Party</h3>
                <p>
                  Add an extra element of surprise with our coffee cart at a surprise birthday party.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Birthday Hosts Say</h2>
            <p className="text-lg mt-4 text-secondary-light max-w-3xl mx-auto">
              Read what others have said about our birthday coffee cart service.
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
                "I hired Delightful Bean for my 40th birthday party, and it was the perfect addition. Everyone loved the specialty drinks and the presentation was beautiful. The barista was professional and friendly, making the experience even better."
              </p>
              <p className="font-semibold">- Jennifer, 40th Birthday Party</p>
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
                "We booked Delightful Bean for my daughter's sweet 16 party, and it was a huge hit with the teenagers! They loved the frappuccinos and custom drinks. It made the party so much more special and Instagram-worthy!"
              </p>
              <p className="font-semibold">- Maria, Sweet 16 Party</p>
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
              Common questions about our birthday coffee cart service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p>
                We recommend booking at least 4-6 weeks in advance for birthday events, especially during peak seasons. However, we can sometimes accommodate last-minute bookings depending on availability.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Can you accommodate dietary restrictions?</h3>
              <p>
                Yes! We offer various milk alternatives (almond, oat, soy) and can accommodate most dietary restrictions. Just let us know your requirements when booking.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you need electricity?</h3>
              <p>
                Yes, our coffee cart requires access to standard electrical outlets. We can provide extension cords if needed, but please let us know about your venue setup in advance.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Can you create a custom birthday drink?</h3>
              <p>
                Absolutely! We love creating custom signature drinks for birthday celebrations. This is included in our Premium and Deluxe packages, or can be added to the Basic package for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Birthday Coffee Cart?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to check availability and get a custom quote for your birthday celebration.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Book Your Birthday Coffee Cart
          </Link>
        </div>
      </section>
    </>
  );
}
