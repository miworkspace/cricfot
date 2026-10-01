'use client';
import { useState } from "react";
import { Link } from "../../router/Link";
import { Clock, User, Bookmark, Share2, Check, ArrowRight, Newspaper } from "lucide-react";
import { CategoryBadge } from "../sports/CategoryBadge";
export const FeaturedNewsCard = ({
  article,
  variant = "hero",
  className = ""
}) => {
  const [imageError, setImageError] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(() => {
    try {
      const saved = localStorage.getItem(`cricfot_bm_${article.id}`);
      return saved === "true";
    } catch {
      return false;
    }
  });
  const [copied, setCopied] = useState(false);
  const timeDisplay = "\u09E8\u09EB \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7";
  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    try {
      localStorage.setItem(`cricfot_bm_${article.id}`, String(nextState));
    } catch {
    }
  };
  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      const shareUrl = `${window.location.origin}/news/${article.slug}`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  if (variant === "hero") {
    return <article
      className={`group relative bg-white border border-neutral-200/90 rounded-xs overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between ${className}`}
    >
        <div>
          {
      /* Main Large Image Frame with Error Fallback */
    }
          <div className="relative aspect-16/9 sm:aspect-16/10 w-full overflow-hidden bg-neutral-950">
            {!imageError ? <img
      src={article.image.url}
      alt={article.image.alt || article.title}
      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
      onError={() => setImageError(true)}
      loading="eager"
    /> : <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-8 text-center text-white">
                <Newspaper className="w-12 h-12 text-red-500/70 mb-3" />
                <span className="font-serif-bengali text-lg sm:text-xl font-bold text-neutral-100">
                  {article.banglaTitle || article.title}
                </span>
                <span className="text-xs text-neutral-400 font-sans mt-1">ক্রিকফুট শীর্ষ বিশেষ প্রতিবেদন</span>
              </div>}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

            {
      /* Editorial Lead Kicker on Image */
    }
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
              <span className="bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs font-sans">
                প্রধান সংবাদ
              </span>
              <span className="text-[11px] font-bold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs uppercase tracking-wider font-sans">
                {article.sport === "cricket" ? "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F" : "\u09AB\u09C1\u099F\u09AC\u09B2"}
              </span>
            </div>

            {
      /* Quick Actions (Bookmark & Share) */
    }
            <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
              <button
      type="button"
      onClick={toggleBookmark}
      className={`p-1.5 rounded-xs backdrop-blur-xs transition-colors ${isBookmarked ? "bg-red-600 text-white" : "bg-black/50 text-white/80 hover:text-white hover:bg-black/80"}`}
      title={isBookmarked ? "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u09B8\u09B0\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09C7\u099B\u09C7" : "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8"}
      aria-label="বুকমার্ক করুন"
    >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
      type="button"
      onClick={handleShare}
      className="p-1.5 rounded-xs bg-black/50 text-white/80 hover:text-white hover:bg-black/80 backdrop-blur-xs transition-colors"
      title="সংবাদের লিঙ্ক কপি করুন"
      aria-label="শেয়ার করুন"
    >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

            {article.image.caption && <div className="absolute bottom-2.5 left-3.5 right-3.5 text-[11px] text-neutral-200 font-sans truncate pointer-events-none opacity-90 hidden sm:block">
                ছবি: {article.image.caption}
              </div>}
          </div>

          {
      /* Text Content */
    }
          <div className="p-4 sm:p-6">
            {
      /* Metadata Line (Clean, unboxed zero-pill text with typographic bullets) */
    }
            <div className="flex items-center gap-2 mb-2.5 text-xs text-neutral-500 font-sans">
              <CategoryBadge category={article.category} />
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {timeDisplay}
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>{article.readTimeMinutes || 4} মিনিট পড়ার সময়</span>
            </div>

            {
      /* Dominant Headline */
    }
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-bengali text-neutral-950 leading-snug mb-3 group-hover:text-red-700 transition-colors">
              <Link href={`/news/${article.slug}`} className="focus:outline-hidden">
                {article.banglaTitle || article.title}
              </Link>
            </h1>

            {
      /* Excerpt */
    }
            <p className="text-sm text-neutral-600 font-sans leading-relaxed line-clamp-3 mb-4">
              {article.excerpt}
            </p>

            {
      /* Key Broadsheet Takeaways / Highlights */
    }
            <div className="bg-neutral-50/80 border-l-2 border-red-600 p-3 rounded-r-xs mb-2">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1 font-sans">
                গুরুত্বপূর্ণ তথ্য
              </span>
              <ul className="text-xs text-neutral-700 space-y-1 font-sans">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-black">•</span>
                  <span>চতুর্থ ইনিংসে শান্ত ও লিটনের ব্যাটে রেকর্ড গড়া জুটিতে স্বস্তিতে টাইগার শিবির।</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-black">•</span>
                  <span>বোলিংয়ে পেস আক্রমণের নিখুঁত নিয়ন্ত্রণে ম্যাচ জয়ের শক্ত অবস্থানে বাংলাদেশ।</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {
      /* Author Byline */
    }
        <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {article.author.avatar ? <img
      src={article.author.avatar}
      alt={article.author.name}
      className="w-8 h-8 rounded-full object-cover border border-neutral-200"
    /> : <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600">
                <User className="w-4 h-4" />
              </div>}
            <div>
              <span className="text-xs font-bold text-neutral-900 block leading-tight font-sans">
                {article.author.banglaName || article.author.name}
              </span>
              <span className="text-[10px] text-neutral-500 block leading-none font-sans mt-0.5">
                {article.author.role || "\u09B8\u09BF\u09A8\u09BF\u09AF\u09BC\u09B0 \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u0995\u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09A1\u09C7\u09A8\u09CD\u099F"}
              </span>
            </div>
          </div>

          <Link
      href={`/news/${article.slug}`}
      className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors inline-flex items-center gap-1 font-sans"
    >
            সম্পূর্ণ প্রতিবেদন <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>;
  }
  return <article
    className={`group bg-white border border-neutral-200/90 rounded-xs p-3.5 flex gap-3.5 hover:shadow-xs hover:border-neutral-300 transition-all ${className}`}
  >
      {
    /* Thumbnail */
  }
      <div className="w-24 sm:w-28 h-20 sm:h-24 shrink-0 overflow-hidden rounded-xs bg-neutral-950 relative">
        {!imageError ? <img
    src={article.image.url}
    alt={article.image.alt || article.title}
    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
    onError={() => setImageError(true)}
    loading="lazy"
  /> : <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-400">
            <Newspaper className="w-6 h-6 text-red-500/70" />
          </div>}
      </div>

      {
    /* Content */
  }
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-center gap-1.5 mb-1 text-[11px] font-sans">
            <span className="font-bold text-red-700 uppercase tracking-wide">
              {article.category}
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-neutral-500">{timeDisplay}</span>
          </div>

          <h3 className="text-sm font-bold font-serif-bengali text-neutral-950 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
            <Link href={`/news/${article.slug}`}>
              {article.banglaTitle || article.title}
            </Link>
          </h3>
        </div>

        <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1 font-sans">
          {article.excerpt}
        </p>
      </div>
    </article>;
};
