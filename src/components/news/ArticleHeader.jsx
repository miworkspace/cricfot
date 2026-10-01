'use client';
import { useState } from "react";
import { CategoryBadge } from "../sports/CategoryBadge";
import { Link } from "../../router/Link";
import { SocialShareWidget } from "./SocialShareWidget";
import { ArrowLeft, Clock, Calendar, Bookmark, Printer } from "lucide-react";
export const ArticleHeader = ({
  article,
  className = "",
  onFontSizeChange,
  currentFontSize = "normal"
}) => {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    try {
      return localStorage.getItem(`cricfot_bm_${article.id}`) === "true";
    } catch {
      return false;
    }
  });
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const toggleBookmark = () => {
    const next = !isBookmarked;
    setIsBookmarked(next);
    try {
      localStorage.setItem(`cricfot_bm_${article.id}`, String(next));
    } catch {
    }
  };
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };
  return <header className={`border-b border-neutral-200 pb-5 mb-6 ${className}`}>
      {
    /* Top Breadcrumb & Reading Toolbar */
  }
      <div className="flex items-center justify-between gap-2 mb-4">
        <Link
    href={`/${article.sport}`}
    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider font-sans"
  >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{article.sport === "cricket" ? "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F" : "\u09AB\u09C1\u099F\u09AC\u09B2"} বিভাগ</span>
        </Link>

        {
    /* Font size and utility actions */
  }
        <div className="flex items-center gap-1.5">
          {onFontSizeChange && <div className="flex items-center border border-neutral-200 rounded-xs text-[11px] font-sans overflow-hidden mr-2">
              <button
    type="button"
    onClick={() => onFontSizeChange("normal")}
    className={`px-2 py-1 transition-colors ${currentFontSize === "normal" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:bg-neutral-100"}`}
    title="সাধারণ ফন্ট সাইজ"
  >
                অ
              </button>
              <button
    type="button"
    onClick={() => onFontSizeChange("large")}
    className={`px-2 py-1 transition-colors ${currentFontSize === "large" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:bg-neutral-100"}`}
    title="মাঝারি ফন্ট সাইজ"
  >
                অ+
              </button>
              <button
    type="button"
    onClick={() => onFontSizeChange("xlarge")}
    className={`px-2 py-1 transition-colors ${currentFontSize === "xlarge" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:bg-neutral-100"}`}
    title="বড় ফন্ট সাইজ"
  >
                অ++
              </button>
            </div>}

          <button
    type="button"
    onClick={toggleBookmark}
    className={`p-1.5 rounded-xs border text-xs font-sans transition-colors inline-flex items-center gap-1 ${isBookmarked ? "border-red-600 bg-red-50 text-red-700" : "border-neutral-200 text-neutral-600 hover:bg-neutral-100"}`}
    title={isBookmarked ? "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4" : "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8"}
  >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">
              {isBookmarked ? "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4" : "\u09AC\u09C1\u0995\u09AE\u09BE\u09B0\u09CD\u0995"}
            </span>
          </button>

          <button
    type="button"
    onClick={handlePrint}
    className="p-1.5 rounded-xs border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors hidden sm:inline-flex items-center gap-1"
    title="প্রতিবেদন প্রিন্ট করুন"
  >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {
    /* Meta Kicker (Unboxed zero-pill text) */
  }
      <div className="flex items-center gap-2 mb-2.5 text-xs text-neutral-500 font-sans">
        <CategoryBadge category={article.category} />
        <span aria-hidden="true" className="text-neutral-300">·</span>
        <span className="font-semibold text-neutral-700 uppercase tracking-wide">
          {article.sport === "cricket" ? "\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F" : "\u09AB\u09C1\u099F\u09AC\u09B2"}
        </span>
        {article.breaking && <>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-red-600 font-bold uppercase tracking-wider">
              ব্রেকিং নিউজ
            </span>
          </>}
      </div>

      {
    /* Primary Headline */
  }
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight font-serif-bengali leading-snug sm:leading-tight mb-3">
        {article.banglaTitle || article.title}
      </h1>

      {
    /* English subhead if Bengali was primary */
  }
      {article.banglaTitle && article.title && <p className="text-sm sm:text-base font-medium text-neutral-500 mb-4 border-l-2 border-red-600 pl-3 font-sans">
          {article.title}
        </p>}

      {
    /* Lead Deck / Excerpt */
  }
      <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed mb-5 font-normal">
        {article.excerpt}
      </p>

      {
    /* Author and Date Bar */
  }
      <div className="pt-3.5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {article.author.avatar ? <img
    src={article.author.avatar}
    alt={article.author.name}
    className="w-10 h-10 rounded-full object-cover border border-neutral-200"
  /> : <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm">
              {article.author.name.charAt(0)}
            </div>}
          <div>
            <div className="font-bold text-neutral-900 text-sm font-sans">
              {article.author.banglaName || article.author.name}
            </div>
            <div className="text-xs text-neutral-500 font-sans">
              {article.author.role || "\u0995\u09CD\u09B0\u09BF\u0995\u09AB\u09C1\u099F \u0995\u09CD\u09B0\u09C0\u09A1\u09BC\u09BE \u09A1\u09C7\u09B8\u09CD\u0995"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs text-neutral-500 font-sans">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span>{formattedDate}</span>
          </div>

          {article.readTimeMinutes && <div className="flex items-center gap-1 hidden sm:flex">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{article.readTimeMinutes} মিনিট পড়ার সময়</span>
            </div>}

          {
    /* Social media sharing quick widget */
  }
          <SocialShareWidget article={article} variant="compact" />
        </div>
      </div>
    </header>;
};
