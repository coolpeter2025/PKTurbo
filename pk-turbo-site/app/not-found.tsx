import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <h1 className="text-5xl font-bold mb-4 text-pk-blue">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-lg mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved, 
        deleted, or might never have existed.
      </p>
      <Link 
        href="/" 
        className="btn btn-primary"
      >
        Return to Home
      </Link>
    </div>
  );
}
