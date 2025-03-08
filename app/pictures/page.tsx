"use client";

import Image from "next/image";

export default function PicturesPage() {
  // Using images from our public folder
  const galleryImages = [
    {
      src: "/images/Cart.jpg",
      alt: "Coffee Cart Setup",
      caption: "Our premium coffee cart setup with professional equipment"
    },
    {
      src: "/images/Mobile coffee cart with umbrella in outdoor setting, man and woman standing behind, coffee machine and syrups on cart.jpg",
      alt: "Mobile Coffee Cart",
      caption: "Our mobile coffee cart ready to serve at your event"
    },
    {
      src: "/images/Family posing behind a mobile coffee bar in an outdoor setting with trees and large hanging moss.jpg",
      alt: "Family Event Coffee Service",
      caption: "Coffee service for a family gathering in a beautiful outdoor setting"
    },
    {
      src: "/images/Young barista at outdoor coffee stand with espresso machine and grinder.jpg",
      alt: "Professional Barista",
      caption: "Our skilled baristas create delicious specialty coffee drinks"
    },
    {
      src: "/images/Coffee Beans.jpg",
      alt: "Coffee Beans",
      caption: "We use only premium coffee beans for our specialty drinks"
    },
    {
      src: "/images/Hand holding a coffee cup with Delightful Bean logo, black lid, and brown sleeve..jpg",
      alt: "Branded Coffee Cup",
      caption: "Our signature Delightful Bean coffee served in style"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Cart.jpg"
            alt="Coffee Cart Gallery"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl bg-black/40 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Coffee Cart Gallery
            </h1>
            <p className="text-xl text-secondary-light mb-8">
              See our premium coffee cart service in action at various events throughout Tampa Bay, Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Event Gallery</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Browse through photos of our coffee cart service at weddings, birthdays, corporate events, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-center italic">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Gallery Section */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Coffee Cart at Different Events</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Our coffee cart service is perfect for a variety of events. See how we can customize our service for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Gallery */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Weddings</h3>
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                  src="/images/Two people standing behind a coffee bar setup with an espresso machine, coffee grinder, and cups, outdoors..jpg"
                  alt="Wedding Coffee Service"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-center mb-6">
                Elegant coffee service that complements your special day.
              </p>
            </div>

            {/* Birthday Gallery */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Birthdays</h3>
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                  src="/images/Family portrait on wooden path with trees and pink grass background.jpg"
                  alt="Birthday Coffee Service"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-center mb-6">
                Make your birthday celebration extra special with our coffee cart.
              </p>
            </div>

            {/* Corporate Gallery */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Corporate Events</h3>
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                  src="/images/Espresso machine with wooden trim, metal milk frothers, a small potted plant, and flavored syrup bottles on a counter.jpg"
                  alt="Corporate Coffee Service"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-center mb-6">
                Impress clients and employees with professional coffee service.
              </p>
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
          <a href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Contact Us Now
          </a>
        </div>
      </section>
    </>
  );
}
