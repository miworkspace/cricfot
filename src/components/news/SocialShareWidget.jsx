'use client';
import { useState } from "react";
import { Check, Copy, Share2, Send } from "lucide-react";
export const SocialShareWidget = ({
  article,
  variant = "bar",
  className = "",
  showCounts = false
}) => {
  const [copied, setCopied] = useState(false);
  const [activeToast, setActiveToast] = useState(null);
  const getArticleUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://cricfot.com/news/${article.slug}`;
  };
  const articleTitle = article.banglaTitle || article.title;
  const articleUrl = getArticleUrl();
  const openSharePopup = (url, platformName) => {
    if (typeof window === "undefined") return;
    if (platformName === "WhatsApp" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.open(url, "_blank");
      return;
    }
    const width = 600;
    const height = 480;
    const left = Math.max(0, (window.innerWidth - width) / 2 + window.screenX);
    const top = Math.max(0, (window.innerHeight - height) / 2 + window.screenY);
    window.open(
      url,
      `share_${platformName.toLowerCase()}`,
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
    setActiveToast(`${platformName}-\u098F \u09B6\u09C7\u09AF\u09BC\u09BE\u09B0 \u0989\u0987\u09A8\u09CD\u09A1\u09CB \u0996\u09CB\u09B2\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7`);
    setTimeout(() => setActiveToast(null), 3e3);
  };
  const handleFacebookShare = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      articleUrl
    )}&quote=${encodeURIComponent(articleTitle)}`;
    openSharePopup(fbUrl, "Facebook");
  };
  const handleTwitterShare = () => {
    const text = `${articleTitle}

\u09AA\u09A1\u09BC\u09C1\u09A8 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 CricFot-\u098F:`;
    const hashtags = article.sport === "cricket" ? "Cricket,CricFot,Sports" : "Football,CricFot,Sports";
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      articleUrl
    )}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`;
    openSharePopup(twitterUrl, "Twitter");
  };
  const handleWhatsAppShare = () => {
    const text = `*${articleTitle}*
${article.excerpt}

\u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u09AA\u09DC\u09C1\u09A8: ${articleUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    openSharePopup(whatsappUrl, "WhatsApp");
  };
  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setActiveToast("\u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B2\u09BF\u0999\u09CD\u0995 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0995\u09AA\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!");
      setTimeout(() => {
        setCopied(false);
        setActiveToast(null);
      }, 2500);
    }
  };
  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: articleTitle,
          text: article.excerpt,
          url: articleUrl
        });
        setActiveToast("\u09B6\u09C7\u09AF\u09BC\u09BE\u09B0 \u09B8\u09AB\u09B2 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!");
        setTimeout(() => setActiveToast(null), 2500);
      } catch (err) {
      }
    } else {
      handleCopyLink();
    }
  };
  const FacebookIcon = () => <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>;
  const TwitterIcon = () => <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>;
  const WhatsAppIcon = () => <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.677.15-.201.301-.777.98-.952 1.18-.175.201-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.235-.244-.589-.493-.509-.677-.518-.175-.009-.376-.009-.577-.009s-.527.075-.802.376c-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.908 1.229 3.109.15.201 2.121 3.238 5.138 4.542.718.31 1.278.496 1.716.635.72.23 1.376.197 1.894.12.577-.087 1.782-.728 2.032-1.431.251-.703.251-1.306.175-1.431-.075-.125-.276-.201-.577-.351zM12.004 21.996h-.002c-1.796 0-3.559-.483-5.105-1.398l-.366-.217-3.795.996 1.013-3.7-.238-.379a9.948 9.948 0 0 1-1.524-5.295C1.989 6.49 6.484 1.995 12.002 1.995c2.673 0 5.186 1.042 7.076 2.934 1.89 1.891 2.931 4.406 2.93 7.08-.002 5.518-4.498 10.013-10.004 10.013v-.026zm7.954-17.067C17.834 2.793 15.029 1.636 12.002 1.636 6.286 1.636 1.636 6.288 1.636 12.005c0 1.942.537 3.834 1.554 5.485L1.5 22.5l5.163-1.644a10.334 10.334 0 0 0 5.341 1.474h.004c5.717 0 10.366-4.652 10.368-10.369.001-2.772-1.077-5.378-2.956-7.257z" />
    </svg>;
  if (variant === "compact") {
    return <div className={`flex items-center gap-1.5 ${className}`}>
        <button
      type="button"
      onClick={handleFacebookShare}
      title="ফেসবুকে শেয়ার করুন"
      aria-label="Share on Facebook"
      className="p-1.5 rounded-xs bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-colors border border-[#1877F2]/20"
    >
          <FacebookIcon />
        </button>

        <button
      type="button"
      onClick={handleTwitterShare}
      title="টুইটার / এক্সে শেয়ার করুন"
      aria-label="Share on Twitter / X"
      className="p-1.5 rounded-xs bg-black/10 hover:bg-black text-black hover:text-white transition-colors border border-black/20"
    >
          <TwitterIcon />
        </button>

        <button
      type="button"
      onClick={handleWhatsAppShare}
      title="হোয়াটসঅ্যাপে শেয়ার করুন"
      aria-label="Share on WhatsApp"
      className="p-1.5 rounded-xs bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-colors border border-[#25D366]/30"
    >
          <WhatsAppIcon />
        </button>

        <button
      type="button"
      onClick={handleCopyLink}
      title={copied ? "\u09B2\u09BF\u0999\u09CD\u0995 \u0995\u09AA\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7" : "\u09B2\u09BF\u0999\u09CD\u0995 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8"}
      aria-label="Copy link"
      className={`p-1.5 rounded-xs transition-colors border ${copied ? "bg-emerald-600 text-white border-emerald-600" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border-neutral-200"}`}
    >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>;
  }
  if (variant === "card") {
    return <div className={`bg-neutral-50 border border-neutral-200 rounded-xs p-4 sm:p-5 ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900 font-serif-bengali">
              প্রতিবেদনটি বন্ধুদের সাথে শেয়ার করুন
            </h4>
            <p className="text-xs text-neutral-500 font-sans">
              ক্রিকফুটের তাজা ক্রীড়া সংবাদ সবার মাঝে ছড়িয়ে দিন
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <button
      type="button"
      onClick={handleFacebookShare}
      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xs bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold font-sans transition-colors shadow-2xs"
    >
            <FacebookIcon />
            <span>Facebook</span>
          </button>

          <button
      type="button"
      onClick={handleTwitterShare}
      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xs bg-neutral-900 hover:bg-black text-white text-xs font-semibold font-sans transition-colors shadow-2xs"
    >
            <TwitterIcon />
            <span>Twitter / X</span>
          </button>

          <button
      type="button"
      onClick={handleWhatsAppShare}
      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xs bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold font-sans transition-colors shadow-2xs"
    >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
      type="text"
      readOnly
      value={articleUrl}
      className="flex-1 bg-white border border-neutral-300 rounded-xs px-2.5 py-1.5 text-xs text-neutral-600 font-mono truncate focus:outline-none"
    />
          <button
      type="button"
      onClick={handleCopyLink}
      className={`px-3 py-1.5 rounded-xs text-xs font-semibold font-sans flex items-center gap-1.5 transition-colors shrink-0 ${copied ? "bg-emerald-600 text-white" : "bg-neutral-800 hover:bg-neutral-900 text-white"}`}
    >
            {copied ? <>
                <Check className="w-3.5 h-3.5" />
                <span>কপি হয়েছে</span>
              </> : <>
                <Copy className="w-3.5 h-3.5" />
                <span>কপি লিঙ্ক</span>
              </>}
          </button>
        </div>

        {activeToast && <div className="mt-2.5 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xs px-2 py-1 text-center font-sans animate-fade-in">
            {activeToast}
          </div>}
      </div>;
  }
  return <div
    className={`p-3.5 sm:p-4 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 border border-neutral-200 rounded-xs shadow-2xs ${className}`}
    role="region"
    aria-label="সোশ্যাল মিডিয়া শেয়ারিং উইজেট"
  >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {
    /* Widget Header & Guidance */
  }
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
            <Share2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-neutral-900 font-serif-bengali block">
              সোশ্যাল মিডিয়ায় শেয়ার করুন
            </span>
            <span className="text-[11px] text-neutral-500 font-sans block">
              ফেসবুক, টুইটার বা হোয়াটসঅ্যাপে বন্ধুদের জানান
            </span>
          </div>
        </div>

        {
    /* Action Share Buttons Group */
  }
        <div className="flex flex-wrap items-center gap-2">
          {
    /* Facebook Button */
  }
          <button
    type="button"
    onClick={handleFacebookShare}
    aria-label="ফেসবুকে শেয়ার করুন"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold font-sans transition-all transform active:scale-95 shadow-2xs hover:shadow-xs"
  >
            <FacebookIcon />
            <span>Facebook</span>
          </button>

          {
    /* Twitter / X Button */
  }
          <button
    type="button"
    onClick={handleTwitterShare}
    aria-label="টুইটার / এক্সে শেয়ার করুন"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold font-sans transition-all transform active:scale-95 shadow-2xs hover:shadow-xs"
  >
            <TwitterIcon />
            <span>Twitter</span>
          </button>

          {
    /* WhatsApp Button */
  }
          <button
    type="button"
    onClick={handleWhatsAppShare}
    aria-label="হোয়াটসঅ্যাপে শেয়ার করুন"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold font-sans transition-all transform active:scale-95 shadow-2xs hover:shadow-xs"
  >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </button>

          {
    /* Copy Link Button */
  }
          <button
    type="button"
    onClick={handleCopyLink}
    aria-label="প্রতিবেদনের লিঙ্ক কপি করুন"
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-semibold font-sans border transition-all ${copied ? "bg-emerald-600 text-white border-emerald-600" : "bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-300"}`}
  >
            {copied ? <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>কপি হয়েছে!</span>
              </> : <>
                <Copy className="w-3.5 h-3.5 text-neutral-500" />
                <span>লিঙ্ক কপি</span>
              </>}
          </button>

          {
    /* Mobile Web Share API fallback if supported */
  }
          {typeof navigator !== "undefined" && typeof navigator.share === "function" && <button
    type="button"
    onClick={handleNativeShare}
    aria-label="অন্যান্য মাধ্যমে শেয়ার"
    className="p-1.5 rounded-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-300 transition-colors sm:hidden"
    title="অন্যান্য মাধ্যমে শেয়ার"
  >
              <Send className="w-3.5 h-3.5" />
            </button>}
        </div>
      </div>

      {
    /* Temporary toast confirmation */
  }
      {activeToast && <div className="mt-2.5 pt-2 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-xs font-sans animate-fade-in">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{activeToast}</span>
          </span>
          <span className="text-[10px] text-neutral-500">ক্রিকফুট স্পোর্টস হাব</span>
        </div>}
    </div>;
};
