import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-navy-dark text-white flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/Main.Image.png"
            alt="PK Turbo truck on the road"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">PK </span>
              <span className="text-amber-400">TURBO</span>
              <span className="text-white"> LLC</span>
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl mb-12 text-white drop-shadow-lg font-light">
              Delivering Excellence with Speed, Reliability, and Professionalism
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-amber-400 text-navy-dark font-medium rounded hover:bg-amber-500 transition">
                GET A QUOTE
              </Link>
              <Link href="/gallery" className="px-8 py-3 bg-navy-medium text-white font-medium rounded hover:bg-navy-light transition border border-white/20">
                VIEW OUR FLEET
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-400">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-3 text-navy-dark">How We Serve You</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>
            <p className="text-center max-w-3xl mx-auto mb-16 text-black font-bold">
              Our expedited trucking company focuses on providing reliable transportation services with efficiency and professionalism to meet all your delivery needs.
            </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="rounded-lg border border-gray-200 shadow-md p-8 hover:shadow-xl transition bg-amber-400 text-navy-dark">
              <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center text-amber-500 mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-navy-dark">Reliable Delivery</h3>
              <p className="text-center text-navy-dark font-medium">
                Our experienced drivers ensure your shipments arrive safely and on time, every time.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="rounded-lg border border-gray-200 shadow-md p-8 hover:shadow-xl transition bg-blue-500 text-white">
              <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center text-blue-500 mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Fast Turnaround</h3>
              <p className="text-center text-white font-medium">
                We specialize in quick deliveries, helping you meet tight deadlines with ease.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="rounded-lg border border-gray-200 shadow-md p-8 hover:shadow-xl transition bg-navy-dark text-white">
              <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center text-navy-dark mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">Secure Transport</h3>
              <p className="text-center text-white font-medium">
                Your shipment's safety is our priority, with secure handling and transportation protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-3 text-navy-dark">About PK Turbo LLC</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-16"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="mb-6 text-gray-700 leading-relaxed">
                PK Turbo LLC is a trusted name in the transportation industry, specializing in reliable and efficient expedited trucking services. We cater to businesses throughout the region requiring time-sensitive deliveries and dedicated transport solutions.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Our professional drivers understand the urgency of expedited freight. They are equipped to handle diverse transportation needs, ensuring your critical shipments reach their destination safely and promptly. We pride ourselves on our commitment to excellence, speed, reliability, and complete customer satisfaction for every expedited delivery.
              </p>
              <Link href="/contact" className="px-6 py-2 bg-amber-400 text-navy-dark font-medium rounded hover:bg-amber-500 transition inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="md:w-1/2 relative h-96 w-full">
              <Image
                src="/images/logo.png"
                alt="PK Turbo logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="scale-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="mb-8 max-w-3xl mx-auto text-white font-bold">
            Contact us today to discuss your transportation needs and how PK Turbo LLC can help you
            with reliable, efficient, and professional delivery services.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-3 bg-amber-400 text-navy-dark font-medium rounded hover:bg-amber-500 transition">
              CONTACT US
            </Link>
            <Link href="/gallery" className="px-8 py-3 border border-white/20 text-white font-medium rounded hover:bg-navy-medium transition">
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>
      
      {/* Join Section - Similar to the CMU site's "JOIN OUR WEEKLY" section */}
      <section className="py-10 bg-amber-400">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-navy-dark mb-4 md:mb-0">REQUEST A DELIVERY QUOTE TODAY</h2>
          <Link href="/contact" className="px-8 py-3 bg-navy-dark text-white font-medium rounded hover:bg-navy-medium transition">
            REQUEST NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
