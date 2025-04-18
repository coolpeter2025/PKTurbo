import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Trucks Gallery - PK Turbo LLC',
  description: 'View our well-maintained expedited trucking vehicles at PK Turbo LLC. We provide reliable delivery services throughout the region.',
  keywords: 'PK Turbo trucks, delivery trucks, transportation vehicles, expedited trucking, trucking company gallery',
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
    // Note: liftgate.png was removed, so temporarily using another cargo image
    {
      src: '/images/cargo1.png',
      alt: 'PK Turbo truck with liftgate',
      title: 'Liftgate Equipped Trucks',
      description: 'Our vehicles have liftgates for easy loading and unloading of heavy items.',
    },
    {
      src: '/images/cargo.strapped.png',
      alt: 'PK Turbo secured shipment',
      title: 'Secure Shipment Transport',
      description: 'Properly secured shipments ensure safe and reliable deliveries every time.',
    },
    {
      src: '/images/truck on road and snow.png',
      alt: 'PK Turbo truck in winter conditions',
      title: 'All-Weather Operations',
      description: 'Our professional drivers operate safely in all weather conditions.',
    },
    // New truck images - using file names that avoid spaces for better compatibility
    {
      src: '/images/truck1.jpg',
      alt: 'PK Turbo truck on highway',
      title: 'Highway Transport',
      description: 'Our trucks provide reliable transport across major highways.',
    },
    {
      src: '/images/truck2.jpg',
      alt: 'PK Turbo delivery truck',
      title: 'Delivery Fleet',
      description: 'Modern delivery trucks for timely and efficient service.',
    },
    {
      src: '/images/truck3.jpg',
      alt: 'PK Turbo truck side view',
      title: 'Expedited Freight',
      description: 'Specialized vehicles for expedited freight delivery.',
    },
    {
      src: '/images/truck4.jpg',
      alt: 'PK Turbo truck in operation',
      title: 'Operational Excellence',
      description: 'Our trucks are maintained to the highest standards of operational excellence.',
    },
    {
      src: '/images/truck5.jpg',
      alt: 'PK Turbo medium duty truck',
      title: 'Medium Duty Fleet',
      description: 'Medium duty trucks for versatile transportation needs.',
    },
    {
      src: '/images/truck6.jpg',
      alt: 'PK Turbo truck on city street',
      title: 'Urban Delivery',
      description: 'Navigating urban environments with ease and efficiency.',
    },
    {
      src: '/images/truck7.jpg',
      alt: 'PK Turbo truck front view',
      title: 'Front Line Fleet',
      description: 'Our front line fleet is ready to serve your transportation needs.',
    },
    {
      src: '/images/truck8.jpg',
      alt: 'PK Turbo truck loaded',
      title: 'Full Load Capacity',
      description: 'Optimized loading for maximum efficiency and safety.',
    },
    {
      src: '/images/truck9.jpg',
      alt: 'PK Turbo truck in transit',
      title: 'In Transit',
      description: 'Reliable transit services across the region.',
    },
    {
      src: '/images/Truckatnight.jpg',
      alt: 'PK Turbo truck operating at night',
      title: 'Around-the-Clock Service',
      description: 'We operate 24/7 to meet your delivery deadlines.',
    },
    // New cargo images - using file names that avoid spaces for better compatibility
    {
      src: '/images/Cargo3.jpg',
      alt: 'PK Turbo cargo loading',
      title: 'Cargo Handling',
      description: 'Professional cargo handling for safe and secure transport.',
    },
    {
      src: '/images/CargoBoxes.jpg',
      alt: 'PK Turbo boxed cargo',
      title: 'Boxed Shipments',
      description: 'Organized handling of boxed shipments of all sizes.',
    },
    {
      src: '/images/CargoPallets.jpg',
      alt: 'PK Turbo palletized cargo',
      title: 'Palletized Transport',
      description: 'Efficient transport of palletized goods and materials.',
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h1>Our Trucks Gallery</h1>
        <p className="text-lg text-gray-700 mb-8">
          At PK Turbo LLC, we take pride in our well-maintained trucks, 
          which allow us to provide reliable and efficient expedited trucking services. 
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

        {/* Removed Equipment Specifications Section */}

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Need Expedited Trucking Services?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our trucks are ready to meet your transportation needs. Contact us today to discuss
            how we can help with your delivery requirements.
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
