'use client';
import { useState } from "react";
import { Camera, MapPin, Share2, Check } from "lucide-react";
export const PhotoOfTheDay = () => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  return <div className="bg-white border border-neutral-200/90 rounded-xs overflow-hidden shadow-2xs" id="photo-of-the-day">
      {
    /* Header */
  }
      <div className="p-3.5 sm:p-4 border-b border-neutral-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-xs bg-red-50 text-red-600 flex items-center justify-center">
            <Camera className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest block font-sans">
              ফটোফিচার
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 font-sans">
              দিনের সেরা ক্রীড়া আলোকচিত্র
            </h3>
          </div>
        </div>

        <button
    type="button"
    onClick={handleShare}
    className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-sans transition-colors"
    title="লিঙ্ক কপি করুন"
  >
          {copied ? <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 text-[11px] font-semibold">কপি হয়েছে</span>
            </> : <>
              <Share2 className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">শেয়ার</span>
            </>}
        </button>
      </div>

      {
    /* Photo Frame */
  }
      <div className="relative aspect-16/10 sm:aspect-16/9 bg-neutral-950 overflow-hidden group">
        {!imageError ? <img
    src="/src/assets/images/tigers_celebration_1790500424061.jpg"
    alt="টাইগারদের জয়োল্লাস"
    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
    onError={() => setImageError(true)}
    loading="lazy"
  /> : <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-neutral-900 to-neutral-950 flex flex-col items-center justify-center p-6 text-center text-white">
            <Camera className="w-10 h-10 text-emerald-400 mb-2 opacity-80" />
            <p className="font-serif-bengali text-lg font-bold">টাইগারদের জয়োল্লাস</p>
            <p className="text-xs text-neutral-400 font-sans mt-1">শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়াম</p>
          </div>}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

        {
    /* Floating caption on image */
  }
        <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 text-white">
          <div className="flex items-center gap-2 text-[11px] text-amber-300 font-sans mb-1">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়াম, মিরপুর
            </span>
          </div>
          <p className="text-xs sm:text-sm font-sans font-medium text-neutral-100 leading-snug line-clamp-2">
            উইকেট শিকারের পর পেসারদের বাঁধভাঙা আনন্দ; টেস্টে ঐতিহাসিক জয়ের সন্ধানে মাঠজুড়ে গর্জে উঠল লাল-সবুজের উল্লাস।
          </p>
        </div>
      </div>

      {
    /* Credit Footer */
  }
      <div className="p-3 bg-neutral-50/70 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-sans">
        <span>ছবি: আসিফ মাহমুদ / ক্রিকফুট স্পেশাল</span>
        <span>ক্যামেরা: সনি এ৭আর ৫ · ৪০০ মিমি এফ২.৮</span>
      </div>
    </div>;
};
