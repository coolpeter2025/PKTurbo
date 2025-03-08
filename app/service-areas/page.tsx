import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Delightful Bean",
  description: "Delightful Bean provides premium coffee cart services throughout Florida, including Tampa Bay, Sarasota, Orlando, Brooksville, and Fort Myers.",
  keywords: ["coffee cart service areas", "Tampa Bay", "Sarasota", "Orlando", "Brooksville", "Fort Myers", "Florida coffee cart", "mobile coffee service"],
};

// SVG Components
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

// Service areas data
const serviceAreas = [
  {
    id: "tampa-bay-florida",
    name: "Tampa Bay, Florida",
    description: "Serving Tampa, St. Petersburg, Clearwater, and surrounding areas with premium coffee cart services for all types of events.",
    image: "/images/delightfulbean.jpg",
    services: ["birthdays", "weddings", "private-parties"]
  },
  {
    id: "sarasota-florida",
    name: "Sarasota, Florida",
    description: "Bringing our mobile coffee experience to Sarasota, Siesta Key, Longboat Key, and nearby communities for your special events.",
    image: "/images/delightfulbean.jpg",
    services: ["birthdays", "weddings", "private-parties"]
  },
  {
    id: "orlando-florida",
    name: "Orlando, Florida",
    description: "Offering premium coffee cart services throughout Orlando, Winter Park, Lake Nona, and surrounding areas for all occasions.",
    image: "/images/delightfulbean.jpg",
    services: ["birthdays", "weddings", "private-parties"]
  },
  {
    id: "brooksville-florida",
    name: "Brooksville, Florida",
    description: "Serving Brooksville and Hernando County with our mobile coffee bar for birthdays, weddings, and private events.",
    image: "/images/delightfulbean.jpg",
    services: ["birthdays", "weddings", "private-parties"]
  },
  {
    id: "fort-myers-florida",
    name: "Fort Myers, Florida",
    description: "Bringing our coffee cart service to Fort Myers, Cape Coral, Sanibel Island, and surrounding areas for your special occasions.",
    image: "/images/delightfulbean.jpg",
    services: ["birthdays", "weddings", "private-parties"]
  }
];

// Service display names
const serviceDisplayNames = {
  "birthdays": "Birthday Coffee Cart",
  "weddings": "Wedding Coffee Cart",
  "private-parties": "Private Party Coffee Cart"
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary opacity-10"></div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl mb-8">
              Delightful Bean provides premium coffee cart services throughout Florida. Explore our service areas below to find coffee cart services near you.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Where We Serve</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We bring our mobile coffee experience to various locations throughout Florida. Click on a location to learn more about our services in that area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.id} className="card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={area.image}
                    alt={`Coffee Cart Service in ${area.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <LocationIcon />
                    <h3 className="text-2xl font-bold ml-2">{area.name}</h3>
                  </div>
                  <p className="mb-4">{area.description}</p>
                  <div className="mt-4">
                    <h4 className="font-bold mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service) => (
                        <Link
                          key={service}
                          href={`/${service}/${area.id}`}
                          className="inline-block bg-secondary-light px-3 py-1 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
                        >
                          {serviceDisplayNames[service as keyof typeof serviceDisplayNames]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Coverage Area</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We serve a wide area throughout Florida. If you don't see your location listed, please contact us as we may still be able to accommodate your event.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-video relative">
              <Image
                src="/images/delightfulbean.jpg"
                alt="Map of Delightful Bean Service Areas"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                <p className="text-white text-xl font-bold">Service Area Map Coming Soon</p>
              </div>
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
              Common questions about our service areas and coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you serve areas outside of the listed locations?</h3>
              <p>
                Yes! While we primarily serve the listed areas, we can often accommodate events in surrounding communities. Please contact us with your specific location for availability.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Is there an additional travel fee for certain locations?</h3>
              <p>
                For locations within our primary service areas, there is no additional travel fee. For locations outside these areas, a travel fee may apply depending on the distance. We'll provide this information in your custom quote.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p>
                We recommend booking 4-6 weeks in advance for most events, and 6-8 months for weddings during peak season. However, we can sometimes accommodate last-minute bookings depending on availability.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you offer the same services in all locations?</h3>
              <p>
                Yes! We offer our full range of services including birthday, wedding, and private party coffee cart services in all of our service areas. Each service can be customized to suit your specific event needs.
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
            Contact us today to check availability and get a custom quote for your event in any of our service areas.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
