"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Something went wrong</h1>
        <p className="text-lg mb-8">
          We're sorry, but something went wrong on our end. Please try again later.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary"
          >
            Try again
          </button>
          <Link href="/" className="btn btn-secondary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
