import React, { useState } from 'react';
import { Info, X, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export type AdSlotFormat = 'leaderboard' | 'mpu' | 'halfpage' | 'in-article';

interface GoogleAdSlotProps {
  format?: AdSlotFormat;
  slotId?: string;
  className?: string;
  sponsorName?: string;
  sponsorTagline?: string;
  ctaText?: string;
  ctaLink?: string;
}

const DEFAULT_CREATIVES: Record<AdSlotFormat, {
  sponsor: string;
  headline: string;
  tagline: string;
  cta: string;
  link: string;
  badge: string;
}> = {
  leaderboard: {
    sponsor: 'Banglalink 4G',
    headline: 'লাইভ ক্রিকেট ও ফুটবল দেখুন বিরতিহীন হাই-স্পিড স্ট্রিমিংয়ে',
    tagline: 'বিশেষ স্পোর্টস ডাটা প্যাক অ্যাক্টিভেশন কোড *১২১*৯৯#',
    cta: 'প্যাক কিনুন',
    link: '#ad-sponsor',
    badge: 'অফিসিয়াল টেলিকম পার্টনার',
  },
  mpu: {
    sponsor: 'Apex Sports Footwear',
    headline: 'টাইগারদের মতো গতি আনুন প্রো-স্পোর্টস স্পাইক সুজে',
    tagline: 'নতুন ২০২৩-২৬ ক্রিকেট ও রানিং শু কালেকশনে ২৫% বিশেষ ক্যাশব্যাক।',
    cta: 'কালেকশন দেখুন',
    link: '#ad-sponsor',
    badge: 'স্পোর্টস গিয়ার',
  },
  halfpage: {
    sponsor: 'Prime Bank Cricket Card',
    headline: 'ক্রিকেটপ্রেমীদের জন্য বিশেষ স্পোর্টস প্ল্যাটিনাম ক্রেডিট কার্ড',
    tagline: 'বিপিএল ও মিরপুর টেস্ট টিকিটে ২০% পর্যন্ত তাৎক্ষণিক ডিসকাউন্ট। লাউঞ্জ অ্যাক্সেস ফ্রি।',
    cta: 'আবেদন করুন',
    link: '#ad-sponsor',
    badge: 'এক্সক্লুসিভ পার্টনারশিপ',
  },
  'in-article': {
    sponsor: 'Walton Smart TV',
    headline: '৪K কিউলেড ডিসপ্লেতে স্টেডিয়ামের উত্তাপ উপভোগ করুন আপনার বসার ঘরে',
    tagline: '১২০Hz রিফ্রেশ রেট ও ডলবি অ্যাটমস সাউন্ডে খেলার প্রতিটি মুহূর্ত এবার আরও জীবন্ত।',
    cta: 'অফার জানুন',
    link: '#ad-sponsor',
    badge: 'অফিসিয়াল ব্রডকাস্ট পার্টনার',
  },
};

export const GoogleAdSlot: React.FC<GoogleAdSlotProps> = ({
  format = 'mpu',
  slotId = 'ca-pub-cricfot-sports-78921',
  className = '',
  sponsorName,
  sponsorTagline,
  ctaText,
  ctaLink,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  if (isDismissed) {
    return (
      <aside
        className={`bg-neutral-100/80 border border-dashed border-neutral-300 rounded-xs py-2 px-3 text-center text-[11px] text-neutral-500 font-sans my-4 ${className}`}
        aria-label="বিজ্ঞাপন সরানো হয়েছে"
      >
        <span>বিজ্ঞাপনটি সাময়িকভাবে বন্ধ করা হয়েছে। </span>
        <button
          type="button"
          onClick={() => setIsDismissed(false)}
          className="text-red-700 underline font-semibold ml-1 hover:text-red-900"
        >
          পুনরায় দেখান
        </button>
      </aside>
    );
  }

  const creative = DEFAULT_CREATIVES[format];
  const finalSponsor = sponsorName || creative.sponsor;
  const finalTagline = sponsorTagline || creative.tagline;
  const finalCta = ctaText || creative.cta;
  const finalLink = ctaLink || creative.link;

  return (
    <aside
      className={`relative bg-neutral-50 border border-neutral-200 rounded-xs overflow-hidden select-none transition-all my-4 sm:my-6 ${className}`}
      aria-label="গুগল বিজ্ঞাপন ও স্পন্সর স্লট"
      id={`ad-slot-${format}`}
    >
      {/* Google AdChoices Header */}
      <div className="bg-neutral-100/90 px-2.5 py-1 border-b border-neutral-200/80 flex items-center justify-between text-[10px] text-neutral-500 font-sans">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold uppercase tracking-wider text-neutral-600">বিজ্ঞাপন</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span className="text-neutral-400 font-mono text-[9px] hidden sm:inline">Google AdSense ({slotId.substring(0, 18)}...)</span>
        </div>

        <div className="flex items-center gap-2">
          {/* AdChoices Info Trigger */}
          <button
            type="button"
            onClick={() => setShowInfo((prev) => !prev)}
            className="hover:text-neutral-800 transition-colors flex items-center gap-0.5"
            title="গুগল বিজ্ঞাপন পছন্দ ও তথ্য"
            aria-label="বিজ্ঞাপন পছন্দ"
          >
            <Info className="w-3 h-3 text-blue-600" />
            <span className="text-[9px] text-blue-700 font-medium">AdChoices</span>
          </button>

          {/* Dismiss Ad Button */}
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="hover:text-neutral-800 transition-colors p-0.5"
            title="বিজ্ঞাপন বন্ধ করুন"
            aria-label="বিজ্ঞাপন লুকান"
          >
            <X className="w-3 h-3 text-neutral-400 hover:text-neutral-700" />
          </button>
        </div>
      </div>

      {/* AdChoices Popover */}
      {showInfo && (
        <div className="p-2.5 bg-blue-50/90 border-b border-blue-200 text-xs text-blue-900 font-sans leading-relaxed animate-in fade-in duration-150">
          <p className="font-semibold mb-0.5">গুগল অ্যাডসেন্স পার্টনার নেটওয়ার্ক:</p>
          <p className="text-[11px] text-blue-800">
            এই বিজ্ঞাপনটি আপনার খেলাধুলার আগ্রহের ভিত্তিতে গুগল অ্যাড ম্যানেজার দ্বারা প্রদর্শিত হচ্ছে। CricFot ওয়েবসাইটে মানসম্পন্ন সাংবাদিকতা অব্যাহত রাখতে বিজ্ঞাপন প্রদর্শন সহায়তা করে।
          </p>
        </div>
      )}

      {/* Ad Creative Body according to format */}
      {format === 'leaderboard' ? (
        /* Leaderboard 728x90 (Desktop) / 320x50 (Mobile) */
        <div className="p-3 sm:py-3.5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-amber-50/60 via-white to-neutral-50 min-h-[90px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xs bg-amber-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
              <Zap className="w-6 h-6 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-1.5 py-0.2 rounded-2xs font-sans">
                  {creative.badge}
                </span>
                <span className="text-xs font-bold text-neutral-900 font-sans">{finalSponsor}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-neutral-900 font-serif-bengali leading-snug mt-0.5">
                {creative.headline}
              </p>
              <p className="text-[11px] text-neutral-500 font-sans hidden md:block">
                {finalTagline}
              </p>
            </div>
          </div>

          <a
            href={finalLink}
            onClick={(e) => e.preventDefault()}
            className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-xs transition-colors shrink-0 font-sans inline-flex items-center gap-1.5 shadow-xs"
          >
            <span>{finalCta}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      ) : format === 'mpu' ? (
        /* MPU 300x250 Medium Rectangle (Sidebar standard) */
        <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[250px] bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/50 text-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded-2xs font-sans mb-3">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>{creative.badge}</span>
            </div>

            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center font-black text-lg mb-2 shadow-xs">
              👟
            </div>

            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider font-sans mb-1">
              {finalSponsor}
            </h4>

            <p className="text-sm sm:text-base font-bold text-neutral-950 font-serif-bengali leading-snug mb-2">
              {creative.headline}
            </p>

            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              {finalTagline}
            </p>
          </div>

          <div className="pt-3 border-t border-neutral-200/80 mt-3">
            <a
              href={finalLink}
              onClick={(e) => e.preventDefault()}
              className="w-full py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xs transition-colors font-sans inline-flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>{finalCta}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : format === 'halfpage' ? (
        /* Half-Page 300x600 (Sidebar skyscraper) */
        <div className="p-5 flex flex-col justify-between min-h-[380px] bg-gradient-to-b from-blue-900 via-neutral-950 to-neutral-900 text-white text-center rounded-b-xs">
          <div>
            <span className="inline-block text-[10px] font-bold text-blue-300 uppercase tracking-widest bg-blue-950/80 border border-blue-800 px-2 py-0.5 rounded-2xs font-sans mb-4">
              {creative.badge}
            </span>

            <div className="w-16 h-16 rounded-full bg-blue-600/30 border border-blue-400/40 text-white mx-auto flex items-center justify-center text-2xl mb-3 shadow-md">
              💳
            </div>

            <h4 className="text-xs font-mono font-bold text-blue-200 uppercase tracking-wider mb-2">
              {finalSponsor}
            </h4>

            <p className="text-base sm:text-lg font-bold font-serif-bengali leading-snug mb-3 text-white">
              {creative.headline}
            </p>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {finalTagline}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4">
            <a
              href={finalLink}
              onClick={(e) => e.preventDefault()}
              className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xs transition-colors font-sans inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{finalCta}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[10px] text-neutral-400 block mt-2 font-sans">
              শর্ত প্রযোজ্য · অফার সীমিত সময়ের জন্য
            </span>
          </div>
        </div>
      ) : (
        /* In-Article Responsive Banner Slot */
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-red-50/50 via-white to-neutral-50 border-l-4 border-red-600">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xs bg-red-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-xs">
              📺
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider bg-red-100 px-1.5 py-0.2 rounded-2xs font-sans">
                  {creative.badge}
                </span>
                <span className="text-xs font-bold text-neutral-800 font-sans">{finalSponsor}</span>
              </div>
              <p className="text-sm font-bold text-neutral-950 font-serif-bengali leading-snug">
                {creative.headline}
              </p>
              <p className="text-xs text-neutral-600 font-sans mt-0.5">
                {finalTagline}
              </p>
            </div>
          </div>

          <a
            href={finalLink}
            onClick={(e) => e.preventDefault()}
            className="px-4 py-2 bg-neutral-900 hover:bg-red-700 text-white text-xs font-bold rounded-xs transition-colors shrink-0 font-sans inline-flex items-center gap-1.5 shadow-xs"
          >
            <span>{finalCta}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </aside>
  );
};
