import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Newspaper } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 text-center px-4">
      <div className="max-w-md mx-auto bg-white border border-neutral-200 p-8 shadow-xs rounded-xs">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Newspaper className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold font-serif-headline text-neutral-900 mb-2">
          ৪০৪
        </h1>
        <h2 className="text-lg font-bold font-serif-bengali text-neutral-800 mb-2">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h2>
        <p className="text-xs text-neutral-600 mb-6 font-sans">
          আপনি যে লিঙ্কটি অনুসন্ধান করছেন সেটি মুছে ফেলা হয়েছে বা স্থানান্তরিত হয়েছে।
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs font-sans hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
      </div>
    </div>
  );
}
