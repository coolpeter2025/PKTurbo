import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Define valid services and locations
const validServices = ["birthdays", "weddings", "private-parties"];
const validLocations = ["tampa-bay-florida", "sarasota-florida", "orlando-florida", "brooksville-florida", "fort-myers-florida"];

// Service display names
const serviceDisplayNames = {
  "birthdays": "Birthday",
  "weddings": "Wedding",
  "private-parties": "Private Party"
};

// Location display names
const locationDisplayNames = {
  "tampa-bay-florida": "Tampa Bay, Florida",
  "sarasota-florida": "Sarasota, Florida",
  "orlando-florida": "Orlando, Florida",
  "brooksville-florida": "Brooksville, Florida",
  "fort-myers-florida": "Fort Myers, Florida"
};

// Define the generateStaticParams function to pre-render all valid combinations
export async function generateStaticParams() {
  const params = [];
  
  for (const service of validServices) {
    for (const location of validLocations) {
      params.push({
        service,
        location,
      });
    }
  }
  
  return params;
}

// Generate metadata for each page
export async function generateMetadata({ 
  params 
}: { 
  params: { service: string; location: string } 
}): Promise<Metadata> {
  // Check if the service and location are valid
  if (!validServices.includes(params.service) || !validLocations.includes(params.location)) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const serviceDisplay = serviceDisplayNames[params.service as keyof typeof serviceDisplayNames];
  const locationDisplay = locationDisplayNames[params.location as keyof typeof locationDisplayNames];
  
  return {
    title: `${serviceDisplay} Coffee Cart Rental in ${locationDisplay} | Delightful Bean`,
    description: `Premium ${serviceDisplay.toLowerCase()} coffee cart rental service in ${locationDisplay}. Professional baristas, custom drinks, and elegant presentation for your special event.`,
    keywords: [`${serviceDisplay.toLowerCase()} coffee cart`, `${locationDisplay} coffee service`, "coffee cart rental", "barista service", "mobile coffee bar", "event coffee"],
  };
}

// SVG Components
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

export default function ServiceLocationPage({ 
  params 
}: { 
  params: { service: string; location: string } 
}) {
  // Check if the service and location are valid
  if (!validServices.includes(params.service) || !validLocations.includes(params.location)) {
    notFound();
  }

  const serviceDisplay = serviceDisplayNames[params.service as keyof typeof serviceDisplayNames];
  const locationDisplay = locationDisplayNames[params.location as keyof typeof locationDisplayNames];
  
  // Service-specific content
  const serviceContent = {
    "birthdays": {
      title: `Birthday Coffee Cart Rental in ${locationDisplay}`,
      description: `Make your birthday celebration in ${locationDisplay} extra special with our premium coffee cart service.`,
      features: [
        "Custom birthday-themed coffee drinks",
        "Professional baristas familiar with ${locationDisplay} venues",
        "Packages for all ages and party sizes",
        "Elegant presentation that enhances your decor",
        "Flexible service times to fit your schedule"
      ],
      testimonial: {
        text: `"I hired Delightful Bean for my 40th birthday party in ${locationDisplay}, and it was the perfect addition. Everyone loved the specialty drinks and the presentation was beautiful. The barista was professional and friendly, making the experience even better."`,
        author: "Jennifer, 40th Birthday Party"
      }
    },
    "weddings": {
      title: `Wedding Coffee Cart Rental in ${locationDisplay}`,
      description: `Add a touch of sophistication to your wedding day in ${locationDisplay} with our premium coffee cart service.`,
      features: [
        "Elegant presentation that complements your wedding decor",
        "Professional, well-dressed baristas familiar with ${locationDisplay} venues",
        "Custom bride & groom signature drinks",
        "Premium coffee and equipment",
        "Flexible service times throughout your wedding day"
      ],
      testimonial: {
        text: `"Delightful Bean made our wedding day in ${locationDisplay} even more special. The coffee cart was a huge hit with our guests, and the barista was professional and friendly. Our signature drinks were perfect, and the presentation matched our wedding theme beautifully."`,
        author: "Sarah & Michael, ${locationDisplay} Wedding"
      }
    },
    "private-parties": {
      title: `Private Party Coffee Cart Rental in ${locationDisplay}`,
      description: `Impress your guests with a premium coffee experience at your next private event or corporate gathering in ${locationDisplay}.`,
      features: [
        "Professional barista service",
        "Custom menu options to match your event theme",
        "Specialty coffee drinks for all preferences",
        "Elegant presentation that enhances your ${locationDisplay} venue",
        "Flexible service times to fit your schedule"
      ],
      testimonial: {
        text: `"Our corporate event in ${locationDisplay} was elevated by Delightful Bean's coffee cart service. The team was punctual, professional, and the coffee was excellent. Our clients were impressed, and it added a special touch to our product launch."`,
        author: "Robert, Marketing Director"
      }
    }
  };

  const content = serviceContent[params.service as keyof typeof serviceContent];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/delightfulbean.jpg"
            alt={`${serviceDisplay} Coffee Cart in ${locationDisplay}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-secondary-light mb-8">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-secondary">
                Book in {locationDisplay}
              </Link>
              <Link href={`/${params.service}`} className="btn bg-white/10 text-white hover:bg-white/20">
                Learn More About Our {serviceDisplay} Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">{serviceDisplay} Coffee Cart Service in {locationDisplay}</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Delightful Bean offers premium {serviceDisplay.toLowerCase()} coffee cart services throughout the {locationDisplay} area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/delightfulbean.jpg"
                alt={`${serviceDisplay} Coffee Cart Service in ${locationDisplay}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our {serviceDisplay} Coffee Cart in {locationDisplay}</h3>
              <p className="mb-6">
                We bring the coffee shop experience directly to your {serviceDisplay.toLowerCase()} in {locationDisplay}, creating a memorable experience for you and your guests.
              </p>
              <ul className="space-y-4">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex">
                    <CheckIcon />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Venues Section */}
      <section className="section bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Popular {serviceDisplay} Venues in {locationDisplay}</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              We've served at many beautiful {serviceDisplay.toLowerCase()} venues throughout the {locationDisplay} area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Downtown {locationDisplay.split(',')[0]}</h3>
                <p>
                  Urban venues with stunning city views, perfect for modern {serviceDisplay.toLowerCase()} celebrations.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{locationDisplay.split(',')[0]} Beachfront</h3>
                <p>
                  Beautiful beachside locations for memorable {serviceDisplay.toLowerCase()} events with ocean views.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{locationDisplay.split(',')[0]} Gardens</h3>
                <p>
                  Lush garden settings for elegant outdoor {serviceDisplay.toLowerCase()} celebrations.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{locationDisplay.split(',')[0]} Historic District</h3>
                <p>
                  Charming historic venues with character for unique {serviceDisplay.toLowerCase()} events.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{locationDisplay.split(',')[0]} Country Clubs</h3>
                <p>
                  Elegant country club settings for sophisticated {serviceDisplay.toLowerCase()} gatherings.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Private Residences</h3>
                <p>
                  We also bring our coffee cart service to private homes throughout the {locationDisplay} area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonial Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{locationDisplay} {serviceDisplay} Client Testimonial</h2>
            <p className="text-lg mt-4 text-secondary-light max-w-3xl mx-auto">
              Hear from one of our {locationDisplay} clients about their {serviceDisplay.toLowerCase()} coffee cart experience.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-dark p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-highlight">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4 text-secondary-light text-lg">
                {content.testimonial.text}
              </p>
              <p className="font-semibold">- {content.testimonial.author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">FAQs About {serviceDisplay} Coffee Cart Service in {locationDisplay}</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Common questions about our {serviceDisplay.toLowerCase()} coffee cart service in the {locationDisplay} area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you serve all areas of {locationDisplay.split(',')[0]}?</h3>
              <p>
                Yes! We provide our coffee cart service throughout the entire {locationDisplay} area, including all surrounding communities.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Are there any {locationDisplay.split(',')[0]}-specific menu options?</h3>
              <p>
                We offer special locally-inspired drinks that celebrate the flavors of {locationDisplay}, which can be customized for your {serviceDisplay.toLowerCase()} event.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book in {locationDisplay.split(',')[0]}?</h3>
              <p>
                For {serviceDisplay.toLowerCase()} events in {locationDisplay}, we recommend booking 4-6 weeks in advance, or 6-8 months for weddings during peak season.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do you have experience with {locationDisplay.split(',')[0]} venues?</h3>
              <p>
                Absolutely! We've worked at numerous venues throughout {locationDisplay} and are familiar with the requirements and logistics of local event spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your {serviceDisplay} Coffee Cart in {locationDisplay}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to check availability and get a custom quote for your {serviceDisplay.toLowerCase()} event in {locationDisplay}.
          </p>
          <Link href="/contact" className="btn bg-white text-accent hover:bg-secondary">
            Book Your {locationDisplay} {serviceDisplay} Coffee Cart
          </Link>
        </div>
      </section>
    </>
  );
}
