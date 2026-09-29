'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Caught Error:', error);
  }, [error]);

  return (
    <div className="py-20 text-center px-4">
      <div className="max-w-md mx-auto bg-white border border-red-200 p-8 shadow-xs rounded-xs">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold font-serif-bengali text-neutral-900 mb-2">
          কিছু সমস্যা দেখা দিয়েছে
        </h2>
        <p className="text-xs text-neutral-600 mb-6 font-sans">
          অনুরোধটি প্রক্রিয়া করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। দয়া করে পুনরায় চেষ্টা করুন।
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xs font-sans transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>আবার চেষ্টা করুন</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xs font-sans transition-colors border border-neutral-300"
          >
            <Home className="w-3.5 h-3.5" />
            <span>হোমে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
