"use client";

import Image from "next/image";

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary opacity-10"></div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Coffee Menu
            </h1>
            <p className="text-xl mb-8">
              Explore our premium coffee options available for your next event. From classic espresso drinks to specialty creations, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Coffee Menu Options</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We offer a variety of coffee drinks and can customize our menu to suit your event needs.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <Image
                src="/images/Menu.png"
                alt="Delightful Bean Coffee Menu"
                width={1200}
                height={1600}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Menu Options</h3>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              We can customize our menu for your specific event. Contact us to discuss special requests, signature drinks, or themed beverages for your celebration.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us for Custom Options
            </a>
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
          <a href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Contact Us Now
          </a>
        </div>
      </section>
    </>
  );
}
