import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
        <p className="text-lg mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
