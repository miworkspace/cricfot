'use client';
import { useState } from "react";
import { Info, X, ExternalLink, ShieldCheck, Zap } from "lucide-react";
const DEFAULT_CREATIVES = {
  leaderboard: {
    sponsor: "Banglalink 4G",
    headline: "\u09B2\u09BE\u0987\u09AD \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0993 \u09AB\u09C1\u099F\u09AC\u09B2 \u09A6\u09C7\u0996\u09C1\u09A8 \u09AC\u09BF\u09B0\u09A4\u09BF\u09B9\u09C0\u09A8 \u09B9\u09BE\u0987-\u09B8\u09CD\u09AA\u09BF\u09A1 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u09AE\u09BF\u0982\u09AF\u09BC\u09C7",
    tagline: "\u09AC\u09BF\u09B6\u09C7\u09B7 \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09A1\u09BE\u099F\u09BE \u09AA\u09CD\u09AF\u09BE\u0995 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u099F\u09BF\u09AD\u09C7\u09B6\u09A8 \u0995\u09CB\u09A1 *\u09E7\u09E8\u09E7*\u09EF\u09EF#",
    cta: "\u09AA\u09CD\u09AF\u09BE\u0995 \u0995\u09BF\u09A8\u09C1\u09A8",
    link: "#ad-sponsor",
    badge: "\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u099F\u09C7\u09B2\u09BF\u0995\u09AE \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0"
  },
  mpu: {
    sponsor: "Apex Sports Footwear",
    headline: "\u099F\u09BE\u0987\u0997\u09BE\u09B0\u09A6\u09C7\u09B0 \u09AE\u09A4\u09CB \u0997\u09A4\u09BF \u0986\u09A8\u09C1\u09A8 \u09AA\u09CD\u09B0\u09CB-\u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09B8\u09CD\u09AA\u09BE\u0987\u0995 \u09B8\u09C1\u099C\u09C7",
    tagline: "\u09A8\u09A4\u09C1\u09A8 \u09E8\u09E6\u09E8\u09E9-\u09E8\u09EC \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u0993 \u09B0\u09BE\u09A8\u09BF\u0982 \u09B6\u09C1 \u0995\u09BE\u09B2\u09C7\u0995\u09B6\u09A8\u09C7 \u09E8\u09EB% \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09CD\u09AF\u09BE\u09B6\u09AC\u09CD\u09AF\u09BE\u0995\u0964",
    cta: "\u0995\u09BE\u09B2\u09C7\u0995\u09B6\u09A8 \u09A6\u09C7\u0996\u09C1\u09A8",
    link: "#ad-sponsor",
    badge: "\u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u0997\u09BF\u09AF\u09BC\u09BE\u09B0"
  },
  halfpage: {
    sponsor: "Prime Bank Cricket Card",
    headline: "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F\u09AA\u09CD\u09B0\u09C7\u09AE\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09BF\u09B6\u09C7\u09B7 \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09BF\u09A8\u09BE\u09AE \u0995\u09CD\u09B0\u09C7\u09A1\u09BF\u099F \u0995\u09BE\u09B0\u09CD\u09A1",
    tagline: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u0993 \u09AE\u09BF\u09B0\u09AA\u09C1\u09B0 \u099F\u09C7\u09B8\u09CD\u099F \u099F\u09BF\u0995\u09BF\u099F\u09C7 \u09E8\u09E6% \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09A4\u09BE\u09CE\u0995\u09CD\u09B7\u09A3\u09BF\u0995 \u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F\u0964 \u09B2\u09BE\u0989\u099E\u09CD\u099C \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u09AB\u09CD\u09B0\u09BF\u0964",
    cta: "\u0986\u09AC\u09C7\u09A6\u09A8 \u0995\u09B0\u09C1\u09A8",
    link: "#ad-sponsor",
    badge: "\u098F\u0995\u09CD\u09B8\u0995\u09CD\u09B2\u09C1\u09B8\u09BF\u09AD \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0\u09B6\u09BF\u09AA"
  },
  "in-article": {
    sponsor: "Walton Smart TV",
    headline: "\u09EAK \u0995\u09BF\u0989\u09B2\u09C7\u09A1 \u09A1\u09BF\u09B8\u09AA\u09CD\u09B2\u09C7\u09A4\u09C7 \u09B8\u09CD\u099F\u09C7\u09A1\u09BF\u09AF\u09BC\u09BE\u09AE\u09C7\u09B0 \u0989\u09A4\u09CD\u09A4\u09BE\u09AA \u0989\u09AA\u09AD\u09CB\u0997 \u0995\u09B0\u09C1\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B8\u09BE\u09B0 \u0998\u09B0\u09C7",
    tagline: "\u09E7\u09E8\u09E6Hz \u09B0\u09BF\u09AB\u09CD\u09B0\u09C7\u09B6 \u09B0\u09C7\u099F \u0993 \u09A1\u09B2\u09AC\u09BF \u0985\u09CD\u09AF\u09BE\u099F\u09AE\u09B8 \u09B8\u09BE\u0989\u09A8\u09CD\u09A1\u09C7 \u0996\u09C7\u09B2\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4 \u098F\u09AC\u09BE\u09B0 \u0986\u09B0\u0993 \u099C\u09C0\u09AC\u09A8\u09CD\u09A4\u0964",
    cta: "\u0985\u09AB\u09BE\u09B0 \u099C\u09BE\u09A8\u09C1\u09A8",
    link: "#ad-sponsor",
    badge: "\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AC\u09CD\u09B0\u09A1\u0995\u09BE\u09B8\u09CD\u099F \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0"
  }
};
export const GoogleAdSlot = ({
  format = "mpu",
  slotId = "ca-pub-cricfot-sports-78921",
  className = "",
  sponsorName,
  sponsorTagline,
  ctaText,
  ctaLink
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  if (isDismissed) {
    return <aside
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
      </aside>;
  }
  const creative = DEFAULT_CREATIVES[format];
  const finalSponsor = sponsorName || creative.sponsor;
  const finalTagline = sponsorTagline || creative.tagline;
  const finalCta = ctaText || creative.cta;
  const finalLink = ctaLink || creative.link;
  return <aside
    className={`relative bg-neutral-50 border border-neutral-200 rounded-xs overflow-hidden select-none transition-all my-4 sm:my-6 ${className}`}
    aria-label="গুগল বিজ্ঞাপন ও স্পন্সর স্লট"
    id={`ad-slot-${format}`}
  >
      {
    /* Google AdChoices Header */
  }
      <div className="bg-neutral-100/90 px-2.5 py-1 border-b border-neutral-200/80 flex items-center justify-between text-[10px] text-neutral-500 font-sans">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold uppercase tracking-wider text-neutral-600">বিজ্ঞাপন</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span className="text-neutral-400 font-mono text-[9px] hidden sm:inline">Google AdSense ({slotId.substring(0, 18)}...)</span>
        </div>

        <div className="flex items-center gap-2">
          {
    /* AdChoices Info Trigger */
  }
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

          {
    /* Dismiss Ad Button */
  }
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

      {
    /* AdChoices Popover */
  }
      {showInfo && <div className="p-2.5 bg-blue-50/90 border-b border-blue-200 text-xs text-blue-900 font-sans leading-relaxed animate-in fade-in duration-150">
          <p className="font-semibold mb-0.5">গুগল অ্যাডসেন্স পার্টনার নেটওয়ার্ক:</p>
          <p className="text-[11px] text-blue-800">
            এই বিজ্ঞাপনটি আপনার খেলাধুলার আগ্রহের ভিত্তিতে গুগল অ্যাড ম্যানেজার দ্বারা প্রদর্শিত হচ্ছে। CricFot ওয়েবসাইটে মানসম্পন্ন সাংবাদিকতা অব্যাহত রাখতে বিজ্ঞাপন প্রদর্শন সহায়তা করে।
          </p>
        </div>}

      {
    /* Ad Creative Body according to format */
  }
      {format === "leaderboard" ? (
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
  ) : format === "mpu" ? (
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
  ) : format === "halfpage" ? (
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
    </aside>;
};
