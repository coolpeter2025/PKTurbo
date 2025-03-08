"use client";

import Image from "next/image";
import Link from "next/link";

// SVG Components
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const RingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-primary">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    <path d="M17 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
    <path d="M7 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-12a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
    <path d="M17 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-12a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
  </svg>
);

export default function WeddingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Two people standing behind a coffee bar setup with an espresso machine, coffee grinder, and cups, outdoors..jpg"
            alt="Wedding Coffee Cart"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl bg-black/40 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Elegant Wedding Coffee Cart Service
            </h1>
            <p className="text-xl text-secondary-light mb-8">
              Add a touch of sophistication to your special day with our premium coffee cart service. Perfect for ceremonies, receptions, and after-parties.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-secondary">
                Book for Your Wedding
              </Link>
              <Link href="#packages" className="btn bg-white/10 text-white hover:bg-white/20">
                View Wedding Packages
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
              <RingsIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Wedding Coffee Service</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Elevate your wedding day with a unique coffee experience that complements your celebration perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/Two people holding coffee cups in front of a coffee machine; cups have Delightful Beans logo..jpg"
                alt="Wedding Coffee Cart Service"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">The Perfect Addition to Your Wedding Day</h3>
              <p className="mb-6">
                Our elegant coffee cart service adds a touch of luxury and warmth to your wedding celebration, creating memorable moments for you and your guests.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Elegant presentation that complements your wedding decor</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Professional, well-dressed baristas</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Custom wedding-themed signature drinks</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Premium coffee and equipment</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Flexible service times throughout your wedding day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Wedding Experience Section */}
      <section id="packages" className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Customized Wedding Coffee Experience</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We create a personalized coffee service that perfectly complements your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/Outdoor coffee stand with a man and woman posing behind it, featuring a La Marzocco espresso machine, coffee grinder, Monin syrup bottles, and disposable coffee cups.jpg"
                alt="Custom Wedding Coffee Experience"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Tailored to Your Wedding Vision</h3>
              <p className="mb-6">
                Your wedding day is one of the most important days of your life, and every detail matters. We work closely with you and your wedding planner to create a coffee service that seamlessly integrates with your wedding style, color scheme, and overall vision.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Custom bride & groom signature drinks</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Flexible service options for ceremony, reception, or both</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Cart styling that complements your wedding decor</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Professional baristas dressed to match your formality level</span>
                </li>
                <li className="flex">
                  <CheckIcon />
                  <span className="ml-2">Personalized menu based on your preferences</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-6">
                Contact Us for a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Coffee Ideas Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Wedding Coffee Cart Ideas</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Here are some popular ways our clients have incorporated our coffee cart into their wedding celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Pre-Ceremony Welcome</h3>
                <p>
                  Welcome your guests with a warm cup of coffee before the ceremony begins, especially perfect for morning weddings.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Cocktail Hour Alternative</h3>
                <p>
                  Offer a non-alcoholic option during cocktail hour with specialty coffee drinks and coffee cocktails.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Dessert Pairing</h3>
                <p>
                  Complement your wedding cake and desserts with perfectly paired coffee drinks.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Late Night Pick-Me-Up</h3>
                <p>
                  Keep the party going with a coffee service later in the evening to energize your guests.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Morning-After Brunch</h3>
                <p>
                  Continue the celebration with a post-wedding brunch featuring our coffee cart service.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Signature Bride & Groom Drinks</h3>
                <p>
                  Create custom signature drinks named after the bride and groom, reflecting your personalities.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Wedding Couples Say</h2>
            <p className="text-lg mt-4 text-secondary-light max-w-3xl mx-auto">
              Read what other couples have said about our wedding coffee cart service.
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
                "Delightful Bean made our wedding day even more special. The coffee cart was a huge hit with our guests, and the barista was professional and friendly. Our signature drinks were perfect, and the presentation matched our wedding theme beautifully."
              </p>
              <p className="font-semibold">- Sarah & Michael, Tampa Bay Wedding</p>
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
                "We had Delightful Bean for our evening wedding reception, and it was the perfect addition. Our guests loved having specialty coffee drinks after dinner, and it gave everyone the energy to keep dancing! The cart looked stunning and fit perfectly with our decor."
              </p>
              <p className="font-semibold">- Jessica & David, Beach Wedding</p>
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
              Common questions about our wedding coffee cart service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p>
                We recommend booking at least 6-8 months in advance for wedding events, especially during peak wedding season (spring and fall). This ensures we can secure your date and have plenty of time to customize your service.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Can you match our wedding colors/theme?</h3>
              <p>
                Absolutely! We can customize the cart presentation to complement your wedding colors and theme. We offer various styling options including custom signage, floral arrangements, and more.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you need electricity?</h3>
              <p>
                Yes, our coffee cart requires access to standard electrical outlets. We can provide extension cords if needed, but please let us know about your venue setup in advance so we can plan accordingly.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Can you create custom wedding drinks?</h3>
              <p>
                Yes! We love creating custom signature drinks for the bride and groom. We'll work with you to design drinks that reflect your personalities, preferences, or even tell your love story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Wedding Coffee Cart?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to check availability and get a custom quote for your special day.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Book Your Wedding Coffee Cart
          </Link>
        </div>
      </section>
    </>
  );
}
