import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Fleet Gallery - PK Turbo LLC',
  description: 'View our fleet of well-maintained transportation vehicles at PK Turbo LLC. We provide reliable delivery and logistics services throughout the region.',
  keywords: 'PK Turbo fleet, delivery trucks, transportation vehicles, logistics fleet, trucking company gallery',
};

export default function GalleryPage() {
  const images = [
    {
      src: '/images/Truk.png',
      alt: 'PK Turbo box truck on the road',
      title: 'Our Box Truck Fleet',
      description: 'Reliable and well-maintained box trucks for efficient deliveries.',
    },
    {
      src: '/images/cargo1.png',
      alt: 'PK Turbo cargo van',
      title: 'Cargo Vans',
      description: 'Perfect for smaller deliveries and urban areas with tight spaces.',
    },
    {
      src: '/images/truck on road.png',
      alt: 'PK Turbo semi truck',
      title: 'Semi Trucks',
      description: 'For long-haul and larger delivery needs.',
    },
    {
      src: '/images/liftgate.png',
      alt: 'PK Turbo truck with liftgate',
      title: 'Liftgate Equipped Trucks',
      description: 'Our vehicles have liftgates for easy loading and unloading of heavy cargo.',
    },
    {
      src: '/images/cargo.strapped.png',
      alt: 'PK Turbo secured cargo',
      title: 'Secure Cargo Transport',
      description: 'Properly secured cargo ensures safe and reliable deliveries every time.',
    },
    {
      src: '/images/truck on road and snow.png',
      alt: 'PK Turbo truck in winter conditions',
      title: 'All-Weather Operations',
      description: 'Our professional drivers operate safely in all weather conditions.',
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h1>Our Fleet Gallery</h1>
        <p className="text-lg text-gray-700 mb-8">
          At PK Turbo LLC, we take pride in our well-maintained fleet of vehicles, 
          which allows us to provide reliable and efficient transportation services. 
          Below is a showcase of our various vehicle types and operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Equipment Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Box Trucks</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Capacity: Up to 26 feet</li>
                <li>Payload capacity: Up to 10,000 lbs</li>
                <li>Equipped with liftgates for easy loading/unloading</li>
                <li>Climate-controlled cargo area available</li>
                <li>GPS tracking for real-time monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Semi Trucks</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Class 8 heavy-duty trucks</li>
                <li>Sleeper cabs for long-haul routes</li>
                <li>Modern fuel-efficient models</li>
                <li>Advanced safety features</li>
                <li>Regular maintenance schedule</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Need Transportation Services?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our fleet is ready to meet your transportation needs. Contact us today to discuss
            how we can help with your delivery and logistics requirements.
          </p>
          <a 
            href="/contact" 
            className="btn btn-primary text-lg px-8 py-3"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
